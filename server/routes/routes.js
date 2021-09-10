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

router.post('/new', (req, res) => {
  const newPlant = req.body
  return db.addPlant(newPlant)
    .then(idArr => {
      newPlant.id = idArr[0]
      return res.json(newPlant)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})


router.delete('/:id/delete', (req, res) => {
  const plantId = req.params.id
  return db.removePlant(plantId)
    .then(() => {
      return res.status(200).send('deleted')
    })
})

module.exports = router
