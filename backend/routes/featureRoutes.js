const express = require('express');
const router = express.Router();
const apiKeyAuth = require('../middleware/apiKeyAuth');

const {
  getFeatures,
  getFeatureById,
  createFeature,
  updateFeature,
  deleteFeature
} = require('../controller/featureController');

router.get('/',apiKeyAuth, getFeatures);
router.get('/:id',apiKeyAuth, getFeatureById);
router.post('/', apiKeyAuth ,createFeature);
router.put('/:id',apiKeyAuth, updateFeature);
router.delete('/:id', apiKeyAuth,deleteFeature);

module.exports = router;
