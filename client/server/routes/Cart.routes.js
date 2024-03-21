
const express = require('express');
const router = express.Router();
const CartController = require('../controller/cart.controller');

// Define your routes here
router.get('/', CartController.getCarts);
router.get('/:id', CartController.getCarts);
router.post('/', CartController.createCart);
router.put('/:id', CartController.updateCart);
router.delete('/:id', CartController.deleteCart);

module.exports = router;
