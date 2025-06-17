const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const verifyToken = require("../middlewares/verifyToken");
const passwordService = require("../services/passwordService");
const emailService = require("../services/emailService");
const Papa = require("papaparse"); 

const prisma = require('../prisma');

// GET semua user
router.get("/users", verifyToken, async (req, res) => {
    const q = req.query.q?.toLowerCase() || ""; 

    try {
        const users = await prisma.user.findMany({
            where: {
                ...(q && { 
                    OR: [
                        { fullName: { contains: q, mode: "insensitive" } },
                        { username: { contains: q, mode: "insensitive" } },
                        { email: { contains: q, mode: "insensitive" } },
                        { phone: { contains: q, mode: "insensitive" } },
                    ],
                }),
                deletedAt: null // Ini penting jika Anda menerapkan soft delete
            },
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

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { id: uuidv4(), username, email, password: hashedPassword, role, fullName, phone },
    });

    // Coba isolasi masalah:
    try {
      const token = await passwordService.generateResetToken(newUser.id);
      await emailService.sendResetPasswordEmail(newUser.email, token);
    } catch (err) {
      console.error('❗ Error saat kirim email:', err.message);
    }

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

// POST export filtered users (Sudah ada di kode Anda, tetap ada)
router.post('/users/export', verifyToken, async (req, res) => {
    const { filters } = req.body;

    if (!filters) {
        return res.status(400).json({ message: "Filter tidak disertakan." });
    }

    try {
        const whereClause = {
            deletedAt: null, // Hanya ekspor user yang belum dihapus
        };

        if (filters.fullName) {
            whereClause.fullName = { contains: filters.fullName, mode: 'insensitive' };
        }
        if (filters.username) {
            whereClause.username = { contains: filters.username, mode: 'insensitive' };
        }
        if (filters.email) {
            whereClause.email = { contains: filters.email, mode: 'insensitive' };
        }
        if (filters.phone) {
            whereClause.phone = { contains: filters.phone, mode: 'insensitive' };
        }
        if (filters.role) {
            whereClause.role = filters.role;
        }

        const users = await prisma.user.findMany({
            where: whereClause,
            orderBy: { createdAt: "desc" },
            select: {
                fullName: true,
                username: true,
                phone: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        const formattedData = users.map(user => ({
            "Nama Lengkap": user.fullName,
            "Username": user.username,
            "Telepon": user.phone,
            "Email": user.email,
            "Role": user.role,
            "Tanggal Daftar": user.createdAt ? new Date(user.createdAt).toLocaleDateString("id-ID") : 'N/A',
            "Tanggal Perbarui": user.updatedAt ? new Date(user.updatedAt).toLocaleDateString("id-ID") : 'N/A',
        }));

        if (formattedData.length === 0) {
            return res.status(404).json({ message: "Tidak ada data karyawan yang cocok dengan filter." });
        }

        const csv = Papa.unparse(formattedData);
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", `attachment; filename=export-karyawan-${new Date().toISOString().split('T')[0]}.csv`);
        res.status(200).send(csv);

    } catch (err) {
        console.error('❌ Gagal export data karyawan:', err);
        res.status(500).json({ message: 'Gagal membuat file CSV karyawan.' });
    }
});

module.exports = router;
