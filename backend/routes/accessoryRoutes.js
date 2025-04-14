const express = require('express');
const router = express.Router();
const apiKeyAuth = require('../middleware/apiKeyAuth');

const {
  getAccessories,
  getAccessoryById,
  createAccessory,
  updateAccessory,
  deleteAccessory
} = require('../controller/accessoryController');

router.get('/',apiKeyAuth, getAccessories);
router.get('/:id',apiKeyAuth, getAccessoryById);
router.post('/',apiKeyAuth, createAccessory);
router.put('/:id',apiKeyAuth, updateAccessory);
router.delete('/:id',apiKeyAuth, deleteAccessory);

module.exports = router;
