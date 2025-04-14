const Model = require('../models/model');
require('../models/varient'); // Ensures 'Variant' is registered

exports.getModels = async (req, res) => {
  try {
    const models = await Model.find().populate({
      path: 'variants',
      populate: [
        { path: 'colors' },
        { path: 'accessories', populate: { path: 'category' } },
        { path: 'features', populate: { path: 'category' } }
      ]
    });
    res.json(models);
  } catch (err) {
    console.error("Error in getModels:", err);
    res.status(500).json({ message: "Failed to fetch models" });
  }
};

exports.getModelById = async (req, res) => {
  try {
    const model = await Model.findById(req.params.id).populate({
      path: 'variants',
      populate: [
        { path: 'colors' },
        { path: 'accessories', populate: { path: 'category' } },
        { path: 'features', populate: { path: 'category' } }
      ]
    });
    res.json(model);
  } catch (err) {
    console.error("Error in getModelById:", err);
    res.status(500).json({ message: "Failed to fetch model" });
  }
};

exports.createModel = async (req, res) => {
  try {
    const newModel = new Model(req.body);
    await newModel.save();
    res.status(201).json(newModel);
  } catch (err) {
    console.error("Error in createModel:", err);
    res.status(500).json({ message: "Failed to create model" });
  }
};

exports.updateModel = async (req, res) => {
  try {
    const updated = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    console.error("Error in updateModel:", err);
    res.status(500).json({ message: "Failed to update model" });
  }
};

exports.deleteModel = async (req, res) => {
  try {
    await Model.findByIdAndDelete(req.params.id);
    res.json({ message: "Model deleted" });
  } catch (err) {
    console.error("Error in deleteModel:", err);
    res.status(500).json({ message: "Failed to delete model" });
  }
};
