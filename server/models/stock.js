const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
  Symbol: {
    type: String,
    required: true,
  },
  AssetType: String,
  Name: {
    type: String,
    required: true,
  },
  Description: String,
  Exchange: String,
  Currency: String,
  Country: String,
  Sector: String,
  Industry: String,
  MarketCapitalization: Number,
  EBITDA: Number,
  PERatio: Number,
  PEGRatio: Number,
  BookValue: Number,
  EPS: Number,
  EVToRevenue: Number,
  EVToEBITDA: Number,
  Beta: Number,
});

module.exports = mongoose.model('Stock', StockSchema);
