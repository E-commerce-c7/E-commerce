const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const mongoUri = 'mongodb://127.0.0.1/pokemon';

// TODO: Connect Mongoose to our local MongoDB via URI specified above and export it below
let db;

module.exports = db;
