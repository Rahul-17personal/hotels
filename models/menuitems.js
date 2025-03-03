const mongoose = require('mongoose');

const menuitemschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 2
    },
    taste: {
        type: String,
        enum: ['sweet', 'sour', 'spicy'],
        required: true
    },
    Is_drink: {
        type: Boolean,
        default: false
    },
    ingrediants: {
        type: [String],
        default: [],
        required: true
    },
    num_sales: {
        type: Number,
        default: 0
    }
})

const menuitem = mongoose.model('menuitems', menuitemschema);

module.exports = menuitem;