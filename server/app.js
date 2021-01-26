const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const companyinfo = require('./seeds/companyinfo');

dotenv.config();

const app = express();

const PORT = process.env.API_PORT || 5000;

app.use(morgan('tiny'));
app.get('/', (req, res) => {
  res.send('Welcome to Project Palmtree API!');
});

app.get('/api/v1/stocks/:symbol', (req, res) => {
  res.send({
    type: 'API END POINT',
    stock: req.params.symbol,
    // name: companyinfo[req.params.symbol].name,
  });
});

app.listen(PORT, () => {
  console.log(`Server Listening on Port: ${PORT}`);
});
