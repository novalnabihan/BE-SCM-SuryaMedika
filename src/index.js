require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: [
    'http://localhost:3000', // untuk lokal dev
    'https://scm-surya-medika.vercel.app', // domain Vercel frontend
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // penting jika kamu pakai cookie/token
};

app.use(cors(corsOptions));

app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const userRoutes = require('./routes/user');
app.use('/api', userRoutes);

const warehouseRoutes = require('./routes/gudang');
app.use('/api', warehouseRoutes);

const transactionRoutes = require('./routes/transaksi');
app.use('/api', transactionRoutes);

const itemRoutes = require('./routes/item');
app.use('/api', itemRoutes);

const invoicesRoutes = require('./routes/invoice');
app.use('/api', invoicesRoutes)

const passwordRoutes = require('./routes/password');
app.use('/api/password', passwordRoutes);

const resetRoutes = require('./routes/reset');
app.use('/api/reset', resetRoutes);


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
