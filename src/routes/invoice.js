// routes/invoice.js
const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const { transaction } = require("../prisma");
const prisma = new PrismaClient();


router.get("/invoices", async (req, res) => {
  try {
    const invoices = await prisma.invoice.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        transactions: {
          select: {
            subtotal: true,
            id: true,
          },
        },
      },
    });

    const formatted = invoices.map((inv) => {
      const totalItems = inv.transactions.length;
      const totalAmount = inv.transactions.reduce((acc, trx) => acc + trx.subtotal, 0);

      return {
        id: inv.id,
        invoiceCode: inv.invoiceCode,
        transactionDate: inv.transactionDate,
        paymentStatus: inv.paymentStatus,
        totalItems,
        totalAmount,
      };
    });

    res.json(formatted);
  } catch (err) {
    console.error("Gagal mengambil data invoices:", err);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data invoices." });
  }
});


router.get("/invoice/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const invoice = await prisma.invoice.findUnique({
  where: { id },
  include: {
    createdBy: true,
    transactions: {
      include: {
        item: true,          // ✅ ini WAJIB
        warehouse: true,
        createdBy: true,
        vendor: true
      }
    }
  }
});

const formatted = {
  id: invoice.id,
  invoiceCode: invoice.invoiceCode,
  transactionDate: invoice.transactionDate,
  paymentMethod: invoice.paymentMethod,
  paymentStatus: invoice.paymentStatus,
  buyer: invoice.buyer,
  createdBy: invoice.createdBy.fullName,
  items: invoice.transactions.map((trx) => ({
    id: trx.id,
    itemId: trx.itemId,
    item: trx.item,                // ✅ pastikan ini disimpan ke response
    quantity: trx.quantity,
    unitPrice: trx.unitPrice,
    subtotal: trx.subtotal,
    warehouseName: trx.warehouse.name,
    operatorName: trx.createdBy.fullName,
    isPurchase: trx.isPurchase,
    partner: trx.isPurchase ? trx.vendor?.name : invoice.buyer
  }))
};


    res.json(formatted);
  } catch (err) {
    console.error("Gagal ambil invoice:", err);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil invoice" });
  }
});

module.exports = router;
