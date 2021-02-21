const companyinfo = require('./companyinfo');
const mongoose = require('mongoose');
const connectDB = require('../configs/connectDB');
const Stock = require('../models/stock');

connectDB();

const db = mongoose.connection;

const seedDB = async () => {
  for (let company of companyinfo) {
    console.log(company.Symbol);
    const stock = new Stock(company);
    await stock.save();
  }
};

seedDB().then(() => {
  db.close();
});
