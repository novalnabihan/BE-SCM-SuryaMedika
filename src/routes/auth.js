const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require('../prisma');

// POST /login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  console.log("Login input:", username, password);

  try {
    // Cari user berdasarkan username atau email
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { username: username },
          { email: username },
        ],
        deletedAt: null, // hanya user aktif
      },
    });

    console.log("User from DB:", user);

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Buat token dengan payload sesuai kebutuhan
    const token = jwt.sign(
      {
        changedById: user.id, // dipakai di transaksi
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3h" }
    );

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Dummy logout
router.post("/logout", (req, res) => {
  res.status(200).json({ message: "Logout successful" });
});

module.exports = router;
