const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  return db.getAllPlantsandCategories()
    .then(plants => {
      return res.json(plants)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

// // TODO: GET plant (:id)
router.get('/:id', (req, res) => {
  return db.getPlant(req.params.id)
    .then(fruit => {
      return res.json(fruit)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

// TODO: POST new plant
router.post('/new', (req, res) => {
  return db.getAllPlants()
    .then(fruit => {
      return res.json(fruit)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

// // TODO: DELETE plant
// router.get('/:id/delete', (req, res) => {
//   return db.getAllPlants()
//     .then(fruit => {
//       return res.json(fruit)
//     })
//     .catch(err => {
//       console.log(err.message)
//       return res.status(500).send('500 error :(')
//     })
// })

module.exports = router
