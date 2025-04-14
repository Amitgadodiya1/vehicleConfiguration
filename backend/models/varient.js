const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  name: String,
  model: { type: mongoose.Schema.Types.ObjectId, ref: 'Model' },
  colors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Color' }],
  accessories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Accessory' }],
  features: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Feature' }]
});

module.exports = mongoose.model('Variant', variantSchema);
