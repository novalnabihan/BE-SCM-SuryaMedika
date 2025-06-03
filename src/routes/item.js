const express = require('express');
const router = express.Router();
const pool = require('./../db');

// Ambil semua data dari tabel item
router.get('/items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Item" ORDER BY "createdAt" DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Gagal mengambil data item:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
