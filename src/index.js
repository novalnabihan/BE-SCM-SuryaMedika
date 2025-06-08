require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
