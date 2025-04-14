const express = require('express');
const router = express.Router();
const apiKeyAuth = require('../middleware/apiKeyAuth');

const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controller/categoryController');

router.get('/',apiKeyAuth, getCategories);
router.get('/:id',apiKeyAuth, getCategoryById);
router.post('/',apiKeyAuth,createCategory);
router.put('/:id', apiKeyAuth,updateCategory);
router.delete('/:id',apiKeyAuth, deleteCategory);

module.exports = router;
