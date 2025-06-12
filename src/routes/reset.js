// routes/reset.js
const express = require('express');
const router = express.Router();
const passwordService = require('../services/passwordService');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


router.post('/request-reset', async (req, res) => {
  const { email } = req.body;

  try {
    await passwordService.generateResetToken(email);
    res.json({ message: 'Link reset password berhasil dikirim ke email.' });
  } catch (err) {
    console.error('Gagal kirim reset:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// Konfirmasi reset password (endpoint dari FE)
router.post('/confirm-reset', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const user = await passwordService.validateResetToken(token);
    if (!user) {
      return res.status(400).json({ message: 'Token tidak valid atau sudah expired.' });
    }

    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashed },
    });

    await passwordService.deleteResetToken(token);

    res.json({ message: 'Password berhasil direset.' });
  } catch (err) {
    console.error('Gagal reset password:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
