const { getIndex } = require('../services/index')

// example of a controller. First call the service, then build the controller method
module.exports = {
  get: async (req, res) => {
    const response = await getIndex()
    res.json(response)
  },
}
