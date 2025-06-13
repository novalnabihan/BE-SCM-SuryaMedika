const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { v4: uuidv4 } = require("uuid");
const verifyToken = require("../middlewares/verifyToken");
const Papa = require("papaparse"); // Pastikan ini diimport jika belum ada

// GET semua gudang (dengan pencarian opsional dan total stok)
router.get("/warehouses", verifyToken, async (req, res) => {
  const q = req.query.q?.toLowerCase() || "";

  try {
    const warehouses = await prisma.warehouse.findMany({
      where: {
        deletedAt: null,
        name: {
          contains: q,
          mode: "insensitive",
        },
      },
      include: {
        itemStocks: true, // ambil relasi stok per gudang
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const result = warehouses.map((w) => ({
      id: w.id,
      name: w.name,
      address: w.address,
      type: w.type,
      createdAt: w.createdAt,
      updatedAt: w.updatedAt,
      totalStock: w.itemStocks.reduce((sum, s) => sum + s.stockQty, 0),
    }));

    return res.json(result);
  } catch (err) {
    console.error("❌ Error ambil gudang:", err);
    return res.status(500).json({ message: "Gagal mengambil data gudang" });
  }
});

// GET satu gudang berdasarkan ID
router.get("/warehouses/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const warehouse = await prisma.warehouse.findFirst({
      where: {
        id,
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        address: true,
        type: true,
      },
    });

    if (!warehouse) {
      return res.status(404).json({ message: "Gudang tidak ditemukan" });
    }

    res.json(warehouse);
  } catch (err) {
    console.error("Gagal mengambil data gudang:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET ringkasan total stok, modal, dan value gudang - Dari kode teman
router.get("/warehouses/:id/summary", async (req, res) => {
  const { id } = req.params;

  try {
    // Hitung total stok dan value dari itemStock
    const stockData = await prisma.itemStock.findMany({
      where: {
        warehouseId: id,
      },
      include: {
        item: true,
      },
    });

    let totalStok = 0;
    let totalValue = 0;

    for (const stock of stockData) {
      totalStok += stock.stockQty;
      totalValue += stock.stockQty * stock.item.currentPrice;
    }

    const pembelian = await prisma.transaction.findMany({
      where: {
        warehouseId: id,
        isPurchase: true,
      },
    });

    const totalModal = pembelian.reduce((sum, trx) => sum + trx.subtotal, 0);

    res.json({
      totalStok,
      totalModal,
      totalValue,
    });
  } catch (err) {
    console.error("Gagal hitung summary gudang:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET transaksi berdasarkan warehouseId (fix field dan relasi)
router.get("/warehouses/:id/transactions", async (req, res) => {
  const warehouseId = req.params.id;
  const q = req.query.q?.toLowerCase() || ""; // Ambil query parameter 'q'

  try {
    const whereClause = {
      warehouseId,
    };

    if (q) {
      whereClause.OR = [
        { invoice: { invoiceCode: { contains: q, mode: "insensitive" } } },
        { item: { kodeBarang: { contains: q, mode: "insensitive" } } },
        { item: { name: { contains: q, mode: "insensitive" } } },
        { createdBy: { fullName: { contains: q, mode: "insensitive" } } },
        { vendor: { name: { contains: q, mode: "insensitive" } } },
        { invoice: { buyer: { contains: q, mode: "insensitive" } } },
        { invoice: { paymentMethod: { contains: q, mode: "insensitive" } } },
      ];
    }

    const transaksi = await prisma.transaction.findMany({
      where: whereClause,
      orderBy: {
        invoice: {
          transactionDate: "desc"
        }
      },
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
      transactionDate: trx.invoice.transactionDate,
      invoiceId: trx.invoiceId,
      invoiceCode: trx.invoice.invoiceCode,
      itemId: trx.item.kodeBarang,
      itemName: trx.item.name,
      quantity: trx.quantity,
      unitPrice: trx.unitPrice,
      subtotal: trx.subtotal,
      partner: trx.isPurchase ? trx.vendor?.name : trx.invoice.buyer,
      warehouse: trx.warehouse.name,
      operator: trx.createdBy.fullName,
      isPurchase: trx.isPurchase,
      vendorName: trx.vendor?.name ?? null,
      paymentMethod: trx.invoice.paymentMethod,
      paymentStatus: trx.invoice.paymentStatus
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Gagal ambil transaksi gudang:", err);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data transaksi gudang" });
  }
});


router.get("/warehouses/summary/global", async (req, res) => {
  try {
    const transactions = await prisma.transaction.findMany({
      include: {
        invoice: true,
      },
    });

    const stockData = await prisma.itemStock.findMany({
      include: { item: true },
    });

    let totalStok = 0;
    let totalModal = 0;
    let totalValue = 0;

    for (const stock of stockData) {
      totalStok += stock.stockQty;
      totalValue += stock.stockQty * stock.item.currentPrice || 0; // currentPrice = harga jual
    }

    for (const trx of transactions) {
      if (trx.isPurchase) {
        totalModal += trx.subtotal;
      }
    }

    res.json({ totalStok, totalModal, totalValue });
  } catch (err) {
    console.error("Gagal ambil summary global:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET summary per warehouse 
router.get(
  "/warehouses/summary/per-warehouse",
  verifyToken,
  async (req, res) => {
    try {
      const warehouses = await prisma.warehouse.findMany({
        where: { deletedAt: null },
        include: {
          itemStocks: true,
        },
      });

      const result = warehouses.map((w) => ({
        name: w.name,
        totalStock: w.itemStocks.reduce(
          (sum, stock) => sum + stock.stockQty,
          0
        ),
      }));

      res.json(result);
    } catch (error) {
      console.error("Error fetching stok per warehouse:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

module.exports = router;

// POST gudang baru
router.post("/warehouses", verifyToken, async (req, res) => {
  const { name, address, type } = req.body;
  if (!name || !address || !type) {
    return res.status(400).json({ message: "Semua field wajib diisi!" });
  }

  try {
    const newWarehouse = await prisma.warehouse.create({
      data: {
        id: uuidv4(),
        name,
        address,
        type,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      select: {
        id: true,
        name: true,
        address: true,
        type: true,
      },
    });

    res.status(201).json(newWarehouse);
  } catch (err) {
    console.error("Gagal menambahkan gudang:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Soft delete gudang
router.delete("/warehouses/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.warehouse.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    res.status(200).json({ message: "Gudang berhasil dihapus" });
  } catch (err) {
    console.error("Gagal hapus gudang:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT (edit) gudang
router.put("/warehouses/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  const { name, address, type } = req.body;

  if (!name || !address || !type) {
    return res.status(400).json({ message: "Semua field wajib diisi!" });
  }

  try {
    const updated = await prisma.warehouse.update({
      where: { id },
      data: {
        name,
        address,
        type,
        updatedAt: new Date(),
      },
      select: {
        id: true,
        name: true,
        address: true,
        type: true,
      },
    });

    res.json(updated);
  } catch (err) {
    console.error("Gagal update gudang:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// POST export CSV filtered warehouses - Dari kode Anda yang sudah ada
router.post("/warehouses/export-csv/filtered", verifyToken, async (req, res) => {
  const { filters } = req.body;

  if (!filters) {
    return res.status(400).json({ message: "Filter tidak disertakan." });
  }

  try {
    const whereClause = {};
    if (filters.itemId || filters.itemName) {
      whereClause.item = {};
      if (filters.itemId) whereClause.item.kodeBarang = filters.itemId;
      if (filters.itemName) whereClause.item.name = filters.itemName;
    }
    if (filters.invoiceCode || filters.paymentStatus) {
      whereClause.invoice = {};
      if (filters.invoiceCode) whereClause.invoice.invoiceCode = filters.invoiceCode;
      if (filters.paymentStatus) whereClause.invoice.paymentStatus = filters.paymentStatus === 'true';
    }
    if (filters.operator) whereClause.createdBy = { fullName: filters.operator };
    if (filters.partner) whereClause.vendor = { name: filters.partner };
    if (filters.status) whereClause.isPurchase = filters.status === 'purchase';

    const transaksi = await prisma.transaction.findMany({
      where: whereClause,
      orderBy: { invoice: { transactionDate: "desc" } },
      include: {
        item: true,
        warehouse: true,
        invoice: true,
        createdBy: true,
        vendor: true,
      },
    });

    const formattedData = transaksi.map((trx) => ({
        "Kode Invoice": trx.invoice?.invoiceCode ?? 'N/A',
        "Tanggal": trx.invoice?.transactionDate ? new Date(trx.invoice.transactionDate).toLocaleDateString("id-ID") : 'N/A',
        "Kode Barang": trx.item?.kodeBarang ?? 'N/A',
        "Nama Barang": trx.item?.name ?? 'N/A',
        "Jumlah": trx.quantity,
        "Harga Satuan": trx.unitPrice,
        "Subtotal": trx.subtotal,
        "Operator": trx.createdBy?.fullName ?? 'N/A',
        "Status": trx.isPurchase ? "Pembelian" : "Penjualan",
        "Partner": trx.isPurchase ? (trx.vendor?.name ?? 'N/A') : (trx.invoice?.buyer ?? 'N/A'),
        "Metode Pembayaran": trx.invoice?.paymentMethod ?? 'N/A',
        "Status Pembayaran": trx.invoice ? (trx.invoice.paymentStatus ? "Lunas" : "Belum Lunas") : 'N/A',
    }));

    if (formattedData.length === 0) {
        return res.status(404).json({ message: "Tidak ada data yang cocok dengan filter yang diberikan." });
    }

    const csv = Papa.unparse(formattedData);
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", `attachment; filename=export-terfilter.csv`);
    res.status(200).send(csv);

  } catch (err) {
    console.error("❌ Gagal export CSV dengan filter:", err);
    res.status(500).json({ message: "Gagal membuat file CSV." });
  }
});

module.exports = router;
