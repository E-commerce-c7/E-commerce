
const express = require('express');
const router = express.Router();
const {register,login} = require('../controller/auth');

// Define your routes here
router.post('/', login);
router.post('/register', register);


module.exports = router;
