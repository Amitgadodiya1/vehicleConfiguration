const express = require('express');
const router = express.Router();
const {
  getFeatures,
  getFeatureById,
  createFeature,
  updateFeature,
  deleteFeature
} = require('../controller/featureController');

router.get('/', getFeatures);
router.get('/:id', getFeatureById);
router.post('/', createFeature);
router.put('/:id', updateFeature);
router.delete('/:id', deleteFeature);

module.exports = router;
