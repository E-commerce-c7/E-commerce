const mongoose = require('mongoose')
const Pokemon = require('../pokemon/Pokemon.js')

const allPokemons = require('../../data/pokemon.json')

const insertAllPokemons = function () {
  Pokemon.insertMany(allPokemons)
    .then(() => {
      console.log('Database seeded successfully')
      mongoose.disconnect()
    })
    .catch((error) => {
      console.log('error seeding the database: ', error)
    })
}

insertAllPokemons()
