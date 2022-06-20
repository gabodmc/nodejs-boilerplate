const { ErrorObject } = require('../helpers/error')

// example of a service
exports.getIndex = async () => {
  try {
    const getIndex = await 'Hello World'
    if (getIndex) {
      throw new ErrorObject('No index found', 404)
    }
    return getIndex
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
