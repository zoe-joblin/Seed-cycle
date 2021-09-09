const knex = require('knex')
const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

// TODO: GET all plants and categories
const getAllPlantsandCategories = (db = connection) => {
  return db('listings')
    .join('categories', 'listings.category_id', 'categories.id')
    .select('listings.id AS plant_id', '*')
}

// TODO: GET plant (:id)
const getPlant = (id, db = connection) => {
  return db('listings')
    .where('id', id)
    .first()
}

// TODO: POST new plant
const addPlant = (plant, db = connection) => {
  return db('listings')
    .insert(plant)
}

// TODO: DELETE plant
const removePlant = (id, db = connection) => {
  return db('listings')
    .where('listings.id', id)
    .del()
}

module.exports = {
  getAllPlantsandCategories,
  getPlant,
  addPlant,
  removePlant
}
