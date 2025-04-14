const Category = require('../models/category');

exports.getCategories = async (req, res) => res.json(await Category.find());
exports.getCategoryById = async (req, res) => res.json(await Category.findById(req.params.id));
exports.createCategory = async (req, res) => res.status(201).json(await Category.create(req.body));
exports.updateCategory = async (req, res) => res.json(await Category.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.deleteCategory = async (req, res) => res.json({ message: 'Category deleted' });
