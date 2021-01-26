const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const companyinfo = require('./seeds/companyinfo');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Project Palmtree API!');
});

app.get('/api/v1/stocks/:symbol', (req, res) => {
  res.send({
    stock: 'API END POINT',
    // name: companyinfo[req.params.symbol].name,
  });
});

app.listen(PORT, () => {
  console.log(`Server Listening on Port: ${PORT}`);
});
