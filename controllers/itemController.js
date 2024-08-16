const Item = require('../models/Item');

const createItem = async (req, res) => {
    try {
        const item = new Item({
            ...req.body,
            subCategory: req.params.subCategoryId
        });
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create item', error });
    }
};

const getItems = async (req, res) => {
    try {
        const items = await Item.find({ subCategory: req.query.subCategoryId });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve items', error });
    }
};

const updateItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update item', error });
    }
};

const searchItems = async (req, res) => {
    try {
        const items = await Item.find({ name: { $regex: req.query.name, $options: 'i' } });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Failed to search items', error });
    }
};

module.exports = { createItem, getItems, updateItem, searchItems };
