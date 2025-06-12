const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require("uuid");
const verifyToken = require("../middlewares/verifyToken");
const passwordService = require("../services/passwordService");
const emailService = require("../services/emailService");

const prisma = new PrismaClient();


// GET semua user
router.get("/users", verifyToken, async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST user baru
router.post('/users', async (req, res) => {
  const { username, email, password, role, fullName, phone } = req.body;

  if (!username || !email || !role || !password || !fullName || !phone) {
    return res.status(400).json({ message: 'Semua field wajib diisi!' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        id: uuidv4(),
        username,
        email,
        password: hashedPassword,
        role,
        fullName,
        phone,
      },
    });

    // 🟡 Tambahkan di sini: generate token untuk reset password
    const token = await passwordService.generateResetToken(newUser.id);

    // 🟢 Lalu kirim email ke user
    await emailService.sendResetPasswordEmail(newUser.email, token);

    res.status(201).json(newUser);
  } catch (err) {
    console.error('Gagal menambahkan user:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


// PUT update user
router.put("/users/:id", async (req, res) => {
  const { username, email, role } = req.body;
  const id = req.params.id;

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        username,
        email,
        role,
        updatedAt: new Date(),
      },
    });

    res.json(updatedUser);
  } catch (err) {
    console.error("Gagal update user:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE soft delete user
router.delete("/users/:id", verifyToken, async (req, res) => {
  const id = req.params.id;

  try {
    await prisma.user.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
    res.status(204).send();
  } catch (err) {
    console.error("Gagal hapus user:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
