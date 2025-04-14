const Color = require('../models/color');

exports.getColors = async (req, res) => res.json(await Color.find());
exports.getColorById = async (req, res) => res.json(await Color.findById(req.params.id));
exports.createColor = async (req, res) => res.status(201).json(await Color.create(req.body));
exports.updateColor = async (req, res) => res.json(await Color.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.deleteColor = async (req, res) => res.json({ message: 'Color deleted' });
