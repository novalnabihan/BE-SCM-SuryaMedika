// src/services/emailService.js

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: Number(process.MAIL_HOST),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

/**
 * Kirim email reset password
 * @param {string} toEmail - alamat email user
 * @param {string} token - token reset password (untuk URL)
 */
async function sendResetPasswordEmail(toEmail, token) {
  const resetLink = `${process.env.FRONTEND_BASE_URL}/reset/${token}`;

  const mailOptions = {
    from: '"SCM Gudang" <no-reply@scmgudang.com>',
    to: toEmail,
    subject: "Reset Password Akun Anda",
    html: `
      <p>Hai,</p>
      <p>Anda baru saja terdaftar oleh manajer. Silakan klik link berikut untuk mengatur ulang password Anda:</p>
      <a href="${resetLink}">Atur Ulang Password</a>
      <p>Link ini hanya berlaku dalam waktu terbatas.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = {
  sendResetPasswordEmail,
};
