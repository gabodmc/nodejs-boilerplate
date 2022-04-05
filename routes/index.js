const express = require('express')
const { get } = require('../controllers/index')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)

module.exports = router
