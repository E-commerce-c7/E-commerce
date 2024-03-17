const chai = require('chai');
const mongoose = require('mongoose');
const expect = chai.expect;
const axios = require('axios');
const express = require('express');
const app = express();
const Pokemon = require('../server/pokemon/Pokemon');

chai.use(require('chai-things'));

const dbURI = 'mongodb://localhost/pokemontest';

const getBody = function (res) {
  return JSON.parse(res.text);
};

const clearDB = function (done) {
  // Mongoose doesn't know how to pluralize 'pokemon'
  mongoose.connection.collections['pokemons'].deleteMany(done);
};

const starterPokemon = [
  {
    number: 1,
    name: 'Bulbasaur',
    types: ['Grass', 'Poison'],
    imageUrl: 'http://nintendo.wikia.com/wiki/File:Bulbasaur.png'
  },
  {
    number: 4,
    name: 'Charmander',
    types: ['Fire'],
    imageUrl: 'http://nintendo.wikia.com/wiki/File:Charmander.png'
  },
  {
    number: 7,
    name: 'Squirtle',
    types: ['Water'],
    imageUrl: 'http://nintendo.wikia.com/wiki/File:Squirtle.png'
  },
];

describe('Pokemon API', function () {
  let server;

  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  beforeEach(function (done) {
    server = app.listen(3000, function() {
      clearDB(function () {
        Pokemon.create(starterPokemon, done);
      });
    });
  });

  afterEach(function () {
    server.close();
  });

  describe('/api/pokemon', function () {
    // TODO: Write your tests here!
  });
});