const express = require('express')
const { get } = require('../controllers/index')

const router = express.Router()

// example of a route
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' })
})

// example of a route with index controller get function
router.get('/example', get)

module.exports = router
