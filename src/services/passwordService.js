// src/services/passwordService.js


const { v4: uuidv4 } = require('uuid');
const prisma = require('../prisma');

const TOKEN_EXPIRATION_MINUTES = 60; // Token berlaku 60 menit

/**
 * Buat token reset password untuk user tertentu
 * @param {string} userId
 * @returns {string} token
 */
async function generateResetToken(userId) {
  const token = uuidv4();
  const expiresAt = new Date(Date.now() + TOKEN_EXPIRATION_MINUTES * 60 * 1000);

  await prisma.passwordResetToken.create({
    data: {
      token,
      userId,
      expiresAt,
    },
  });

  return token;
}

/**
 * Validasi dan ambil data user dari token reset
 * @param {string} token
 * @returns {User|null}
 */
async function validateResetToken(token) {
  const resetToken = await prisma.passwordResetToken.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!resetToken || resetToken.expiresAt < new Date()) {
    return null;
  }

  return resetToken.user;
}

/**
 * Hapus token setelah digunakan
 * @param {string} token
 */
async function deleteResetToken(token) {
  await prisma.passwordResetToken.delete({
    where: { token },
  });
}

// const emailService = require('./emailService'); // pastikan file ini sudah benar

// async function sendResetPasswordEmail(userId, email) {
//   const token = await generateResetToken(userId);

//   const resetLink = `${process.env.FRONTEND_BASE_URL}/reset-password?token=${token}`;

//   await emailService.sendMail({
//     to: email,
//     subject: 'Reset Password Akun Anda',
//     html: `
//       <p>Anda baru saja didaftarkan oleh manajer. Silakan reset password Anda agar hanya Anda yang mengetahui password ini.</p>
//       <p>Klik link berikut untuk mengatur ulang password Anda:</p>
//       <a href="${resetLink}">${resetLink}</a>
//       <p>Link ini akan kadaluarsa dalam 60 menit.</p>
//     `,
//   });
// }

module.exports = {
  generateResetToken,
  validateResetToken,
  deleteResetToken,
};
