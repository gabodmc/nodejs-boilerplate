const { ErrorObject } = require('../helpers/error')

// example of a service with successful action
exports.getSuccess = async () => {
  try {
    const getIndex = await 'Hello World'
    return getIndex
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

// example of a service with an error
exports.getError = async () => {
  try {
    throw new ErrorObject('This is a example of an error', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
