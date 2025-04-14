const Variant = require('../models/varient');

// GET all variants with populated references
exports.getVariants = async (req, res) => {
  try {
    const variants = await Variant.find().populate(['colors', 'accessories', 'features']);
    res.status(200).json(variants);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching variants', error });
  }
};

// GET a specific variant by ID
exports.getVariantById = async (req, res) => {
  try {
    const variant = await Variant.findById(req.params.id).populate(['colors', 'accessories', 'features']);
    if (!variant) return res.status(404).json({ message: 'Variant not found' });
    res.status(200).json(variant);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching variant', error });
  }
};

// CREATE a new variant
exports.createVariant = async (req, res) => {
  try {
    const newVariant = await Variant.create(req.body);
    res.status(201).json(newVariant);
  } catch (error) {
    res.status(400).json({ message: 'Error creating variant', error });
  }
};

// UPDATE an existing variant
exports.updateVariant = async (req, res) => {
  try {
    const updated = await Variant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Variant not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Error updating variant', error });
  }
};

// DELETE a variant
exports.deleteVariant = async (req, res) => {
  try {
    const deleted = await Variant.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Variant not found' });
    res.status(200).json({ message: 'Variant deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting variant', error });
  }
};
