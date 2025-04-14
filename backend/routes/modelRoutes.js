const express = require('express');
const router = express.Router();
const {
  getModels,
  getModelById,
  createModel,
  updateModel,
  deleteModel
} = require('../controller/modelController');

router.get('/', getModels);
router.get('/:id', getModelById);
router.post('/', createModel);
router.put('/:id', updateModel);
router.delete('/:id', deleteModel);

module.exports = router;
