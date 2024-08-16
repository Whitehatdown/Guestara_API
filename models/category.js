const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true // Make sure names are unique if needed
    },
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    taxApplicability: {
        type: Boolean,
        default: false
    },
    tax: {
        type: Number,
        required: false
    },
    taxType: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);
