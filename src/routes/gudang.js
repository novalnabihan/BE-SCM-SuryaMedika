const express = require('express');
const router = express.Router();
const pool = require('./../db');
const { v4: uuidv4 } = require('uuid');

// GET semua gudang
router.get('/warehouses', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT * FROM "Warehouse" 
      WHERE "deletedAt" IS NULL 
      ORDER BY "createdAt" DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching warehouses:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST gudang baru
router.post('/warehouses', async (req, res) => {
  const { name, address, type } = req.body;
  if (!name || !address || !type) {
    return res.status(400).json({ message: "Semua field wajib diisi!" });
  }

  try {
    const id = uuidv4();
    const now = new Date();

    const result = await pool.query(
      `INSERT INTO "Warehouse" 
       (id, name, address, type, "createdAt", "updatedAt")
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, name, address, type`,
      [id, name, address, type, now, now]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Gagal menambahkan gudang:', err.message, err.stack);
    res.status(500).json({ message: 'Server error' });
  }
});

// Soft delete gudang
router.delete('/warehouses/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query(
      `UPDATE "Warehouse" SET "deletedAt" = $1 WHERE id = $2`,
      [new Date(), id]
    );
    res.status(200).json({ message: 'Gudang berhasil dihapus' });
  } catch (err) {
    console.error('Gagal hapus gudang:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
