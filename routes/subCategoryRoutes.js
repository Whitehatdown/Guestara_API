const express = require('express');
const router = express.Router();
const { createSubCategory, getSubCategories, updateSubCategory } = require('../controllers/subCategoryController');

router.post('/:categoryId', createSubCategory);
router.get('/', getSubCategories);
router.put('/:id', updateSubCategory);

module.exports = router;
