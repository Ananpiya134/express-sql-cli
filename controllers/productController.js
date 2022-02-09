const { Product } = require('../models')

exports.getAllProduct = async (req, res, next) => {
    try {
        const product = await Product.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });
        res.status(200).json({ product })
    } catch (err) {
        next(err)
    }
};

exports.getProductById = async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
};

exports.createProduct = async (req, res, next) => {
    try {
        const { name, price, description, quantity, supplierId } = req.body;
        const product = await Product.create({ name, price, description, quantity, supplierId });
        res.status(201).json({ product });
    } catch (err) {
        next(err)
    }
};

exports.updateProduct = async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
};

exports.deleteProduct = async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
};