const SubCategory = require('../models/SubCategory');

const createSubCategory = async (req, res) => {
    try {
        const subCategory = new SubCategory({
            ...req.body,
            category: req.params.categoryId
        });
        await subCategory.save();
        res.status(201).json(subCategory);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create sub-category', error });
    }
};

const getSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find({ category: req.query.categoryId });
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve sub-categories', error });
    }
};

const updateSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update sub-category', error });
    }
};

module.exports = { createSubCategory, getSubCategories, updateSubCategory };
