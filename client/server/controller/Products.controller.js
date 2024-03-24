
const db = require('../db/index');
const { Op } = require('sequelize');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const product = new db.Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read all products
const getProducts = async (req, res) => {
    try {
        await db.Product.findAll({}).then((products) => {
            res.json(products);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read a single product by id
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await db.Product.findByPk(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Search products by name
const searchProducts = async (req, res) => {
    try {
        const { search } = req.params;
        const products = await db.Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${search}%`
                }
            }
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await db.Product.update(body, {
            where: {
                id: id
            }
        });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await db.Product.destroy({
            where: {
                id: id
            }
        });
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    searchProducts,
    updateProduct,
    deleteProduct,
};
   