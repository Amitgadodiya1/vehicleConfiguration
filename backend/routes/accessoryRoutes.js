const express = require('express');
const router = express.Router();
const {
  getAccessories,
  getAccessoryById,
  createAccessory,
  updateAccessory,
  deleteAccessory
} = require('../controller/accessoryController');

router.get('/', getAccessories);
router.get('/:id', getAccessoryById);
router.post('/', createAccessory);
router.put('/:id', updateAccessory);
router.delete('/:id', deleteAccessory);

module.exports = router;
