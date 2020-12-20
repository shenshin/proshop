import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.status(200);
  res.type('application/json');
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === id);
  if (product) {
    res.status(200);
    res.type('application/json');
    res.json(product);
  } else {
    res.status(404);
    res.send(`Product with id ${id} does not exist`);
  }
  
});

const PORT = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;
app.listen(PORT, console.log(`Express is running on port ${PORT}${mode ? ` in ${mode} mode` : ''}`));
