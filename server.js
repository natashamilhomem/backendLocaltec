const express = require('express');
const { connectDB } = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/schedules', scheduleRoutes);

const PORT = process.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
