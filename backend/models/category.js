// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  type: { type: String, enum: ['accessory', 'feature'] }
});

module.exports = mongoose.model('Category', categorySchema);
