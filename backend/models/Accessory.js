const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
  name: String,
  image: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});

module.exports = mongoose.model('Accessory', accessorySchema);
