const express = require('express');
const router = express.Router();
const apiKeyAuth = require('../middleware/apiKeyAuth');

const {
  getColors,
  getColorById,
  createColor,
  updateColor,
  deleteColor
} = require('../controller/colorController');

router.get('/', apiKeyAuth, getColors);
router.get('/:id', apiKeyAuth, getColorById);
router.post('/', apiKeyAuth, createColor);
router.put('/:id', apiKeyAuth, updateColor);
router.delete('/:id', apiKeyAuth, deleteColor);

module.exports = router;
