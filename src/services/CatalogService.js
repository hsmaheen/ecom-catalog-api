const Product = require('../models/product');
const moment = require('moment');

const createProduct = (product) => {
    return new Product(product).save();
}

const getAllProducts = () => {
    return Product.find();
}

const findProductById = (id) => {
    return Product.findById(id);
}

module.exports = {
    createProduct,
    getAllProducts,
    findProductById
}