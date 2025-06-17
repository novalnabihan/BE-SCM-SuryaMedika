// src/routes/password.js
const express = require('express');
const router = express.Router();
const { generateResetToken, validateResetToken, deleteResetToken } = require('../services/passwordService');
const { sendResetEmail } = require('../services/emailService');
const prisma = require('../prisma');
const bcrypt = require('bcryptjs');


// Trigger email reset saat user baru dibuat
router.post('/send-reset/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });

    const token = await generateResetToken(user.id);
    await sendResetEmail(user.email, token);
    res.json({ message: 'Link reset password berhasil dikirim ke email' });
  } catch (err) {
    console.error('Gagal kirim email reset:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint submit password baru
router.post('/reset', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const user = await validateResetToken(token);
    if (!user) return res.status(400).json({ message: 'Token tidak valid atau kadaluarsa' });

    const hashed = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashed },
    });

    await deleteResetToken(token);
    res.json({ message: 'Password berhasil diperbarui' });
  } catch (err) {
    console.error('Gagal reset password:', err);
    res.status(500).json({ message: 'Terjadi kesalahan saat reset password' });
  }
});

module.exports = router;
