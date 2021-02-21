const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const companyinfo = require('./seeds/companyinfo');
const connectDB = require('./configs/connectDB');
const Stock = require('./models/stock');

dotenv.config();
connectDB();

const db = mongoose.connection;
const app = express();
const PORT = process.env.API_PORT || 5000;

app.use(morgan('tiny'));
app.get('/', (req, res) => {
  res.send('Welcome to Project Palmtree API!');
});

// REST API: GET stock info by symbol
app.get('/api/v1/stocks/:symbol', (req, res) => {
  const stockSymbol = req.params.symbol.toUpperCase();
  const stockInfo = Stock.findOne({ Symbol: stockSymbol })
    .then((stock) => {
      res.send(stock);
    })
    .catch((e) => {
      res.send('This stock symbol does not exist!');
    });
});

app.listen(PORT, () => {
  console.log(`Server Listening on Port: ${PORT}`);
});
