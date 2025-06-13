const express = require("express");
const router = express.Router();
const prisma = require("../prisma");
const jwt = require("jsonwebtoken");
const { ulid } = require("ulid");
const { handleStockIn, handleStockOut } = require("../services/stockService");
const { PrismaClient } = require('@prisma/client');
const { format, getYear } = require('date-fns');
const { id } = require('date-fns/locale');
const verifyToken = require('../middlewares/verifyToken');
const Papa = require('papaparse'); // Pastikan ini diimport

const generateInvoiceCode = () => `INV-${ulid().slice(0,8)}`;

const getOrCreateVendorId = async (vendorName) => {
  const existing = await prisma.vendor.findFirst({ where: { name: vendorName } });
  return existing ? existing.id : (await prisma.vendor.create({ data: { name: vendorName } })).id;
};

// ✅ POST /transaksi
router.post("/transaksi", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const createdById = decoded.changedById;

    if (!createdById) {
      return res.status(401).json({ message: 'Token tidak valid atau user ID tidak ditemukan.' });
    }

    const {
      partner,
      paymentMethod,
      paymentStatus,
      isPurchase,
      warehouseId,
      transactionDate,
      items
    } = req.body;

    const warehouse = await prisma.warehouse.findUnique({ where: { id: warehouseId } });
    if (!warehouse) {
      return res.status(400).json({ message: 'Gudang tidak ditemukan.' });
    }

    const itemIds = items.map(i => i.itemId);
    if (new Set(itemIds).size !== itemIds.length) {
      return res.status(400).json({ message: 'Item tidak boleh duplikat.' });
    }

    const validItems = await prisma.item.findMany({ where: { id: { in: itemIds } }, select: { id: true } });
    const invalidItemIds = itemIds.filter(id => !validItems.some(v => v.id === id));
    if (invalidItemIds.length) {
      return res.status(400).json({ message: `Item tidak ditemukan: ${invalidItemIds.join(", ")}` });
    }

    if (items.find(i => i.quantity <= 0)) {
      return res.status(400).json({ message: 'Jumlah item tidak boleh nol atau negatif.' });
    }

    if (items.find(i => i.unitPrice < 0)) {
      return res.status(400).json({ message: 'Harga item tidak boleh negatif.' });
    }

    const invoice = await prisma.$transaction(async (tx) => {
      const invoice = await tx.invoice.create({
        data: {
          invoiceCode: generateInvoiceCode(),
          transactionDate: new Date(transactionDate),
          paymentMethod,
          paymentStatus,
          buyer: isPurchase ? null : partner,
          createdBy: { connect: { id: createdById } },
          transactions: {
            create: await Promise.all(items.map(async (item) => {
              const subtotal = item.unitPrice * item.quantity;
              const vendorId = isPurchase ? await getOrCreateVendorId(partner) : null;

              return {
                item: { connect: { id: item.itemId } },
                warehouse: { connect: { id: warehouseId } },
                quantity: item.quantity,
                unitPrice: item.unitPrice,
                subtotal,
                isPurchase,
                createdBy: { connect: { id: createdById } },
                ...(vendorId && { vendor: { connect: { id: vendorId } } })
              };
            }))
          }
        },
        include: { transactions: true }
      });

      for (const trx of invoice.transactions) {
        if (trx.isPurchase) {
          await handleStockIn({ transaction: trx }, tx);
        } else {
          await handleStockOut({ transaction: trx }, tx);
        }
      }

      return invoice;
    });

    res.status(201).json({ message: "Transaksi berhasil dicatat", invoice });
  } catch (err) {
    console.error("Gagal catat transaksi:", err);
    res.status(500).json({ message: "Terjadi kesalahan saat mencatat transaksi" });
  }
});

// ✅ GET /transaksi
router.get("/transaksi", async (req, res) => {
  const q = req.query.q?.toLowerCase() || "";

  try {
    const whereClause = {};

    if (q) {
      whereClause.OR = [
        { invoice: { invoiceCode: { contains: q, mode: "insensitive" } } },
        { item: { kodeBarang: { contains: q, mode: "insensitive" } } },
        { item: { name: { contains: q, mode: "insensitive" } } },
        { warehouse: { name: { contains: q, mode: "insensitive" } } },
        { createdBy: { fullName: { contains: q, mode: "insensitive" } } },
        { vendor: { name: { contains: q, mode: "insensitive" } } },
        { invoice: { buyer: { contains: q, mode: "insensitive" } } },
        { invoice: { paymentMethod: { contains: q, mode: "insensitive" } } },
      ];
    }

    const transaksi = await prisma.transaction.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      include: {
        item: true,
        warehouse: true,
        invoice: true,
        createdBy: true,
        vendor: true
      }
    });

    const formatted = transaksi.map((trx) => ({
  id: trx.id,
  invoiceCode: trx.invoice.invoiceCode,
  transactionDate: trx.invoice.transactionDate,
  itemId: trx.item.kodeBarang,
  itemName: trx.item.name,
  quantity: trx.quantity,
  unitPrice: trx.unitPrice,
  subtotal: trx.subtotal,
  warehouse: trx.warehouse.name,
  warehouseId: trx.warehouse.id, // <-- tambahkan ini
  operator: trx.createdBy.fullName,
  isPurchase: trx.isPurchase,
  partner: trx.isPurchase ? trx.vendor?.name : trx.invoice.buyer,
  paymentMethod: trx.invoice.paymentMethod,
  paymentStatus: trx.invoice.paymentStatus
}));

    res.json(formatted);
  } catch (err) {
    console.error("Gagal ambil transaksi:", err);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data transaksi" });
  }
});

const { startOfMonth } = require('date-fns');

router.get('/transaksi/sales-per-month', verifyToken, async (req, res) => {
  const year = parseInt(req.query.year) || new Date().getFullYear();

  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        isPurchase: false,
        createdAt: {
          gte: new Date(`${year}-01-01`),
          lt: new Date(`${year + 1}-01-01`)
        }
      },
      select: {
        createdAt: true,
        subtotal: true
      },
      orderBy: { createdAt: 'asc' }
    });

    const salesByMonth = {};

    transactions.forEach(({ createdAt, subtotal }) => {
      const label = format(createdAt, 'MMMM yyyy', { locale: id }); // "Januari 2025"
      salesByMonth[label] = (salesByMonth[label] || 0) + subtotal;
    });

    const response = Object.entries(salesByMonth).map(([month, totalSales]) => ({
      month,
      totalSales
    }));

    res.json(response);
  } catch (error) {
    console.error('Error fetching sales per month:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/transaksi/top-items', verifyToken, async (req, res) => {
  const limit = parseInt(req.query.limit) || 5;

  try {
    const items = await prisma.transaction.groupBy({
      by: ['itemId'],
      where: { isPurchase: false },
      _sum: { quantity: true },
      orderBy: { _sum: { quantity: 'desc' } },
      take: limit,
    });

    const itemIds = items.map(i => i.itemId);

    const itemDetails = await prisma.item.findMany({
      where: { id: { in: itemIds } },
      select: { id: true, name: true },
    });

    const nameMap = Object.fromEntries(itemDetails.map(i => [i.id, i.name]));

    const result = items.map(i => ({
      itemName: nameMap[i.itemId] || 'Unknown',
      totalSold: i._sum.quantity || 0,
    }));

    res.json(result);
  } catch (err) {
    console.error('Error fetching top items:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/transaksi/per-warehouse', verifyToken, async (req, res) => {
  try {
    // Group transaksi berdasarkan warehouseId dan hitung jumlahnya
    const result = await prisma.transaction.groupBy({
      by: ['warehouseId'],
      _count: { _all: true },
    });

    const warehouseIds = result.map(r => r.warehouseId);

    // Ambil nama gudang
    const warehouses = await prisma.warehouse.findMany({
      where: { id: { in: warehouseIds } },
      select: { id: true, name: true }
    });

    const nameMap = Object.fromEntries(warehouses.map(w => [w.id, w.name]));

    const response = result.map(r => ({
      warehouse: nameMap[r.warehouseId] || 'Unknown',
      totalTransactions: r._count._all
    }));

    res.json(response);
  } catch (err) {
    console.error("Gagal ambil data transaksi per gudang:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get('/transaksi/per-warehouse-by-type', verifyToken, async (req, res) => {
  try {
    // Ambil semua gudang aktif
    const warehouses = await prisma.warehouse.findMany({
      where: { deletedAt: null },
      select: { id: true, name: true }
    });

    const data = [];

    for (const w of warehouses) {
      const [pembelian, penjualan] = await Promise.all([
        prisma.transaction.count({ where: { warehouseId: w.id, isPurchase: true } }),
        prisma.transaction.count({ where: { warehouseId: w.id, isPurchase: false } }),
      ]);

      data.push({
        warehouse: w.name,
        pembelian,
        penjualan,
      });
    }

    res.json(data);
  } catch (err) {
    console.error('Gagal ambil data per warehouse by type:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/transaksi/monthly-by-type', verifyToken, async (req, res) => {
  const year = parseInt(req.query.year) || new Date().getFullYear();

  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        createdAt: {
          gte: new Date(`${year}-01-01`),
          lt: new Date(`${year + 1}-01-01`)
        }
      },
      select: {
        isPurchase: true,
        createdAt: true,
        subtotal: true
      },
    });

    const monthMap = {};

    transactions.forEach(({ createdAt, subtotal, isPurchase }) => {
      const month = new Date(createdAt).toLocaleString('default', { month: 'long', year: 'numeric' });
      if (!monthMap[month]) {
        monthMap[month] = { pembelian: 0, penjualan: 0 };
      }

      if (isPurchase) {
        monthMap[month].pembelian += subtotal;
      } else {
        monthMap[month].penjualan += subtotal;
      }
    });

    const response = Object.entries(monthMap).map(([month, { pembelian, penjualan }]) => ({
      month,
      pembelian,
      penjualan
    }));

    // Urutkan bulan secara manual
    const ordered = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    response.sort((a, b) => {
      const [ma, ya] = a.month.split(' ');
      const [mb, yb] = b.month.split(' ');
      return ya - yb || ordered.indexOf(ma) - ordered.indexOf(mb);
    });

    res.json(response);
  } catch (err) {
    console.error('Error ambil data bulanan pembelian/penjualan:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT: Update payment method & status
router.put("/transaksi/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  const { paymentMethod, paymentStatus } = req.body;

  if (!paymentMethod || typeof paymentStatus === "undefined") {
    return res.status(400).json({ message: "paymentMethod dan paymentStatus wajib diisi" });
  }

  try {
    const updated = await prisma.transaction.update({
      where: { id },
      data: {
        invoice: {
          update: {
            paymentMethod,
            paymentStatus,
          },
        },
      },
      include: {
        invoice: true,
      },
    });

    res.json({
      message: "Transaksi berhasil diperbarui",
      data: updated,
    });
  } catch (err) {
    console.error("Gagal update transaksi:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/transaksi/export", verifyToken, async (req, res) => {
  const { filters } = req.body;

  if (!filters) {
    return res.status(400).json({ message: "Filter tidak disertakan." });
  }

  try {
    const where = {};

    if (filters.invoiceCode) {
      where.invoice = { ...where.invoice, invoiceCode: { contains: filters.invoiceCode, mode: 'insensitive' } };
    }
    if (filters.itemName) {
      where.item = { ...where.item, name: { contains: filters.itemName, mode: 'insensitive' } };
    }
    if (filters.operator) {
      where.createdBy = { fullName: { contains: filters.operator, mode: 'insensitive' } };
    }
    if (filters.partner) {
      where.OR = [
        { vendor: { name: { contains: filters.partner, mode: 'insensitive' } } },
        { invoice: { buyer: { contains: filters.partner, mode: 'insensitive' } } }
      ];
    }
    if (filters.status) {
      where.isPurchase = filters.status === 'purchase';
    }
    if (filters.paymentStatus) {
      where.invoice = { ...where.invoice, paymentStatus: filters.paymentStatus === 'true' };
    }

    const transaksi = await prisma.transaction.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        item: true,
        warehouse: true,
        invoice: true,
        createdBy: true,
        vendor: true,
      },
    });

    const formatted = transaksi.map((trx) => ({
        "Kode Invoice": trx.invoice?.invoiceCode ?? 'N/A',
        "Tanggal": trx.invoice?.transactionDate ? new Date(trx.invoice.transactionDate).toLocaleDateString("id-ID") : 'N/A',
        "Kode Barang": trx.item?.kodeBarang ?? 'N/A',
        "Nama Barang": trx.item?.name ?? 'N/A',
        "Jumlah": trx.quantity,
        "Harga Satuan": trx.unitPrice,
        "Subtotal": trx.subtotal,
        "Gudang": trx.warehouse?.name ?? 'N/A',
        "Operator": trx.createdBy?.fullName ?? 'N/A',
        "Status": trx.isPurchase ? "Pembelian" : "Penjualan",
        "Partner": trx.isPurchase ? (trx.vendor?.name ?? 'N/A') : (trx.invoice?.buyer ?? 'N/A'),
        "Metode Pembayaran": trx.invoice?.paymentMethod ?? 'N/A',
        "Status Pembayaran": trx.invoice ? (trx.invoice.paymentStatus ? "Lunas" : "Belum Lunas") : 'N/A',
    }));

    if (formatted.length === 0) {
      return res.status(404).json({ message: "Tidak ada data transaksi yang cocok dengan filter." });
    }

    const csv = Papa.unparse(formatted);
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", `attachment; filename=export-transaksi-${new Date().toISOString().split('T')[0]}.csv`);
    res.status(200).send(csv);

  } catch (err) {
    console.error("❌ Gagal export data transaksi:", err);
    res.status(500).json({ message: "Gagal membuat file CSV transaksi." });
  }
});


module.exports = router;
