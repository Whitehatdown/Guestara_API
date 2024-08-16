const express = require('express');
const router = express.Router();
const { createCategory, getCategory, updateCategory } = require('../controllers/categoryController');

router.post('/', createCategory);
router.get('/', getCategory);
router.put('/:id', updateCategory);

module.exports = router;
