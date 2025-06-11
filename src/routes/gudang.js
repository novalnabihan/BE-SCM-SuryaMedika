const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { v4: uuidv4 } = require("uuid");
const verifyToken = require("../middlewares/verifyToken");

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

// GET ringkasan total stok, modal, dan value gudang
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

    // Hitung total modal dari transaksi pembelian
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
  const { id } = req.params;

  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        warehouseId: id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        item: true,
        vendor: true,
        invoice: {
          select: {
            transactionDate: true,
            paymentMethod: true,
            paymentStatus: true,
            buyer: true,
            createdBy: {
              select: {
                fullName: true,
              },
            },
          },
        },
      },
    });

    const formatted = transactions.map((trx) => ({
      id: trx.id,
      transactionDate: trx.invoice.transactionDate,
      itemCode: trx.item.kodeBarang,
      itemName: trx.item.name,
      quantity: trx.quantity,
      unitPrice: trx.unitPrice,
      subtotal: trx.subtotal,
      isPurchase: trx.isPurchase, // Ambil langsung dari trx
      paymentMethod: trx.invoice.paymentMethod,
      paymentStatus: trx.invoice.paymentStatus,
      operator: trx.invoice.createdBy.fullName,
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Gagal ambil transaksi gudang:", err);
    res.status(500).json({ message: "Server error" });
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

module.exports = router;
