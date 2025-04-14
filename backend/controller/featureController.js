const Feature = require('../models/Feature');

exports.getFeatures = async (req, res) => res.json(await Feature.find().populate('category'));
exports.getFeatureById = async (req, res) => res.json(await Feature.findById(req.params.id).populate('category'));
exports.createFeature = async (req, res) => res.status(201).json(await Feature.create(req.body));
exports.updateFeature = async (req, res) => res.json(await Feature.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.deleteFeature = async (req, res) => res.json({ message: 'Feature deleted' });
