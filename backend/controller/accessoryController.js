const Accessory = require('../models/Accessory');

exports.getAccessories = async (req, res) => res.json(await Accessory.find().populate('category'));
exports.getAccessoryById = async (req, res) => res.json(await Accessory.findById(req.params.id).populate('category'));
exports.createAccessory = async (req, res) => res.status(201).json(await Accessory.create(req.body));
exports.updateAccessory = async (req, res) => res.json(await Accessory.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.deleteAccessory = async (req, res) => res.json({ message: 'Accessory deleted' });
