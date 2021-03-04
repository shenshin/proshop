import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
colors.enable();
dotenv.config(); // config file connection
connectDB(); // mongo db connection
const app = express(); // web server connection

// routes

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

// error handlers

app.use(notFound);
app.use(errorHandler);

// launch web server

const PORT = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;
app.listen(PORT, console.log(` Express is running on port ${PORT}${mode ? ` in ${mode} mode` : ''} `.black.bgWhite));
