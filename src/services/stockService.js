const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Tambah stok saat pembelian
async function handleStockIn({ transaction }) {
  const { itemId, warehouseId, quantity, unitPrice, id: transactionId } = transaction;

  // Tambah atau update ItemStock
  const existing = await prisma.itemStock.findUnique({
    where: {
      itemId_warehouseId: {
        itemId,
        warehouseId,
      },
    },
  });

  if (existing) {
    await prisma.itemStock.update({
      where: { itemId_warehouseId: { itemId, warehouseId } },
      data: {
        stockQty: { increment: quantity },
      },
    });
  } else {
    await prisma.itemStock.create({
      data: {
        itemId,
        warehouseId,
        stockQty: quantity,
      },
    });
  }

  // Buat record StockFlow
  await prisma.stockFlow.create({
    data: {
      itemId,
      warehouseId,
      transactionId,
      direction: 'in',
      qty: quantity,
      unitCost: unitPrice,
      remainingQty: quantity,
    },
  });
}

// Kurangi stok saat penjualan menggunakan FIFO
async function handleStockOut({ transaction }, prismaTx) {
  const { itemId, warehouseId, quantity, id: transactionId } = transaction;
  let remaining = quantity;

  const stockInFlows = await prismaTx.stockFlow.findMany({
    where: {
      itemId,
      warehouseId,
      direction: 'in',
      remainingQty: { gt: 0 },
    },
    orderBy: { createdAt: 'asc' },
  });

  for (const flow of stockInFlows) {
    if (remaining <= 0) break;

    const takeQty = Math.min(flow.remainingQty, remaining);
    const cost = flow.unitCost;

    await prismaTx.stockFlow.update({
      where: { id: flow.id },
      data: { remainingQty: { decrement: takeQty } },
    });

    await prismaTx.stockFlow.create({
      data: {
        itemId,
        warehouseId,
        transactionId,
        direction: 'out',
        qty: takeQty,
        unitCost: cost,
        remainingQty: 0,
      },
    });

    remaining -= takeQty;
  }

  if (remaining > 0) {
    throw new Error('Stok tidak cukup untuk penjualan!');
  }

  await prismaTx.itemStock.update({
    where: {
      itemId_warehouseId: { itemId, warehouseId },
    },
    data: {
      stockQty: { decrement: quantity },
    },
  });
}


module.exports = {
  handleStockIn,
  handleStockOut,
};
