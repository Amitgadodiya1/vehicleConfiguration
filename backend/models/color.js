// models/Color.js
const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  name: String,
  hexCode: String,
  price: Number
});

module.exports = mongoose.model('Color', colorSchema);
