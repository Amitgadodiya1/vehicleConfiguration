const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
  name: String,
  mediaType: { type: String, enum: ['image', 'video'] },
  mediaUrl: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});

module.exports = mongoose.model('Feature', featureSchema);
