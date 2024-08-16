const express = require('express');
const router = express.Router();
const { createItem, getItems, updateItem, searchItems } = require('../controllers/itemController');

router.post('/:subCategoryId', createItem);
router.get('/', getItems);
router.put('/:id', updateItem);
router.get('/search', searchItems);

module.exports = router;
