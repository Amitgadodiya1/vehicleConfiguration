const express = require('express');
const router = express.Router();
const apiKeyAuth = require('../middleware/apiKeyAuth');

const {
  getVariants,
  getVariantById,
  createVariant,
  updateVariant,
  deleteVariant
} = require('../controller/variantController');

router.get('/',apiKeyAuth, getVariants);
router.get('/:id',apiKeyAuth, getVariantById);
router.post('/',apiKeyAuth, createVariant);
router.put('/:id', apiKeyAuth,updateVariant);
router.delete('/:id',apiKeyAuth, deleteVariant);

module.exports = router;
