const express = require('express');
const router = express.Router();
const apiKeyAuth = require('../middleware/apiKeyAuth');

const {
  getModels,
  getModelById,
  createModel,
  updateModel,
  deleteModel
} = require('../controller/modelController');

router.get('/', apiKeyAuth, getModels);
router.get('/:id', apiKeyAuth, getModelById);
router.post('/', apiKeyAuth, createModel);
router.put('/:id', apiKeyAuth, updateModel);
router.delete('/:id', apiKeyAuth, deleteModel);

module.exports = router;
