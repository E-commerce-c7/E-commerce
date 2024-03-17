const express = require('express');
const morgan = require('morgan');
const db = require('./db');


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));



// TODO: Import the pokemonRouter and assign it to the correct route:


app.get('/', function (req, res) {
  res.json({ message: 'Welcome to the Poke-MongoDB RESTful API!' });
});

const PORT = 3000;

app.listen(PORT, function () {
  console.log('Poke-MongoDB RESTful API listening on http://localhost:' + PORT);
});
