const express = require('express')
const { getOk, getBad } = require('../controllers/index')

const router = express.Router()

// example of a route with index controller get function
router.get('/success', getOk)
router.get('/error', getBad)

module.exports = router
