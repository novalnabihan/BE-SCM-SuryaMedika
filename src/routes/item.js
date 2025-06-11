const express = require("express");
const router = express.Router();
const prisma = require("../prisma");

// ✅ Ambil semua item (yang belum dihapus)
router.get("/items", async (req, res) => {
  try {
    const items = await prisma.item.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "desc" },
    });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal mengambil data item" });
  }
});

router.get("/item-stock/:itemId", async (req, res) => {
  const { itemId } = req.params;

  try {
    const result = await prisma.itemStock.aggregate({
      where: { itemId },
      _sum: { stockQty: true },
    });

    const total = result._sum.stockQty || 0;
    res.json({ total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal menghitung stok" });
  }
});

// Tambahkan setelah endpoint POST /items
router.get("/items/:id/detail", async (req, res) => {
  const { id } = req.params;

  try {
    const item = await prisma.item.findUnique({
      where: { id, deletedAt: null },
      select: {
        id: true,
        name: true,
        currentPrice: true,
        itemStocks: {
          where: { warehouse: { deletedAt: null } },
          include: {
            warehouse: {
              select: { name: true, address: true },
            },
          },
        },
        priceHistories: {
          orderBy: { changedAt: "desc" },
          include: {
            changedBy: {
              select: { fullName: true },
            },
          },
        },
      },
    });

    if (!item) return res.status(404).json({ message: "Item tidak ditemukan" });

    const totalStock = item.itemStocks.reduce(
      (acc, stock) => acc + stock.stockQty,
      0
    );
    const distributions = item.itemStocks.map((stock) => ({
      warehouse: stock.warehouse.name,
      address: stock.warehouse.address,
      quantity: stock.stockQty,
    }));

    const histories = item.priceHistories.map((history) => ({
      price: history.price,
      changedAt: history.changedAt,
      changedBy: history.changedBy.fullName,
    }));

    res.json({
      id: item.id,
      name: item.name,
      currentPrice: item.currentPrice,
      totalStock,
      distributions,
      histories,
    });
  } catch (err) {
    console.error("Gagal ambil detail item:", err.message);
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

// ✅ Tambah item baru (tanpa stok)
router.post("/items", async (req, res) => {
  try {
    const { name, currentPrice } = req.body;

    const existing = await prisma.item.findFirst({
      where: {
        name,
        deletedAt: null,
      },
    });

    if (existing) {
      return res
        .status(400)
        .json({ message: "Nama item sudah ada dalam sistem" });
    }

    const { customAlphabet } = await import('nanoid');
    const generateKodeBarang = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);

    let item;
    let maxTries = 5;
    let success = false;

    for (let i = 0; i < maxTries; i++) {
      const kodeBarang = `ITM-${generateKodeBarang()}`;
      try {
        item = await prisma.item.create({
          data: {
            name,
            currentPrice,
            kodeBarang,
          },
        });
        success = true;
        break;
      } catch (err) {
        if (err.code !== 'P2002') {
          console.error(err);
          return res.status(500).json({ message: "Gagal membuat item" });
        }
      }
    }

    if (!success) {
      return res.status(500).json({ message: "Gagal generate kode unik, coba lagi" });
    }

    res.status(201).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal membuat item" });
  }
});

// ✅ Ubah harga jual item & catat histori
router.post("/items/:id/update-price", async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;
  const token = req.headers.authorization?.split(" ")[1];

  if (!price || isNaN(price)) {
    return res.status(400).json({ message: "Harga tidak valid" });
  }

  try {
    const jwt = require("jsonwebtoken");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const changedById = decoded.userId;

    console.log("[DEBUG] Token:", token);
    console.log("[DEBUG] Decoded JWT:", decoded);

    // Update item
    const updatedItem = await prisma.item.update({
      where: { id },
      data: { currentPrice: price },
    });

    // Catat histori perubahan harga
    await prisma.itemPriceHistory.create({
      data: {
        itemId: id,
        price,
        changedById,
      },
    });

    res.json({ message: "Harga berhasil diperbarui", item: updatedItem });
  } catch (err) {
    console.error("Gagal update harga item:", err.message);
    res.status(500).json({ message: "Terjadi kesalahan saat update harga" });
  }
});

// ✅ Soft delete item by ID (ditempatkan terakhir)
router.delete("/items/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const item = await prisma.item.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    res.json({ message: "Item berhasil dihapus", item });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal menghapus item" });
  }
});

module.exports = router;
