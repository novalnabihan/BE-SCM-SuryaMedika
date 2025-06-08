const express = require("express");
const router = express.Router();
const prisma = require("../prisma");
const jwt = require("jsonwebtoken");
const { ulid } = require("ulid");
const { handleStockIn, handleStockOut } = require("../services/stockService");

const generateInvoiceCode = () => `INV-${ulid()}`;

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
  try {
    const transaksi = await prisma.transaction.findMany({
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
      transactionDate: trx.invoice.transactionDate,
      invoiceId: trx.invoiceId,
      invoiceCode: trx.invoice.invoiceCode,
      itemId: trx.item.kodeBarang,
      itemName: trx.item.name,
      quantity: trx.quantity,
      unitPrice: trx.unitPrice,
      subtotal: trx.subtotal,
      warehouse: trx.warehouse.name,
      operator: trx.createdBy.fullName,
      isPurchase: trx.isPurchase,
      vendorName: trx.vendor?.name ?? null,
      paymentMethod: trx.invoice.paymentMethod,
      paymentStatus: trx.invoice.paymentStatus
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Gagal ambil transaksi:", err);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data transaksi" });
  }
});

module.exports = router;
