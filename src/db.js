require('dotenv').config(); // HARUS ada sebelum pakai process.env
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// console.log("PG Config", {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// console.log("DATABASE_URL =", process.env.DATABASE_URL);

module.exports = pool;
