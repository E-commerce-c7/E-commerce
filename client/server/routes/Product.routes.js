
const express = require('express');
const router = express.Router();
const productController = require('../controller/Products.controller');

// Define your routes here
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.get('/search/:search', productController.searchProducts);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
