import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

colors.enable();
dotenv.config(); // config file connection
connectDB(); // mongo db connection
const app = express(); // web server connection

// routes

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// error handlers

app.use(notFound);
app.use(errorHandler);

// launch web server

const PORT = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;
app.listen(PORT, console.log(` Express is running on port ${PORT}${mode ? ` in ${mode} mode` : ''} `.black.bgWhite));
