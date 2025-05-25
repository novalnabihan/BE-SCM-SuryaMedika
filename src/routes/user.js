const express = require('express');
const router = express.Router();
const pool = require('./../db');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const now = new Date();


// GET semua user
router.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "User" ORDER BY "createdAt" DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST user baru
router.post('/users', async (req, res) => {
  const { username, email, password, role, fullName, phone } = req.body;

  if (!username || !email || !role || !password || !fullName || !phone) {
    return res.status(400).json({ message: "Semua field wajib diisi!" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const id = uuidv4();
    const result = await pool.query(
      `INSERT INTO "User" (id, username, email, password, role, "fullName", phone, "createdAt", "updatedAt")
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [id, username, email, hashedPassword, role, fullName, phone, now, now]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Gagal menambahkan user:', err.message, err.stack);
    res.status(500).json({ message: 'Server error' });
  }
});


router.put('/users/:id', async (req, res) => {
  const { username, email, role } = req.body;
  const id = req.params.id;
  const now = new Date();

  try {
    const result = await pool.query(
      `UPDATE "User"
       SET username = $1,
           email = $2,
           role = $3,
           "updatedAt" = $4
       WHERE id = $5
       RETURNING *`,
      [username, email, role, now, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Gagal update user:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


router.delete('/users/:id', async (req, res) => {
  const id = req.params.id;
  const now = new Date()

  try {
    await pool.query(`UPDATE "User" SET "deletedAt" = $1 WHERE id = $2`, [now, id]);
    res.status(204).send(); // sukses tanpa isi
  } catch (err) {
    console.error('Gagal hapus user:', err);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;
