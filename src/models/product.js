const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productId:  {
        type: Number,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productImageUrl: {
        type: String,
        required: true
    },
    productAdded: {
        type: Number,
        required: true
    },
    productQuatity: {
        type: Number,
        required: true
    },
    productSeller: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;