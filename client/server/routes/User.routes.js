
const express = require('express');
const router = express.Router();
const UserController = require('../controller/users.controller');

// Define your routes here
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUsers);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
