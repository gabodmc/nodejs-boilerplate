const createHttpError = require('http-errors')
const { getSuccess, getError } = require('../services/index')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// example of a controller. First call the service, then build the controller method
module.exports = {
  getOk: catchAsync(async (req, res, next) => {
    try {
      const response = await getSuccess()
      endpointResponse({
        res,
        message: 'Index retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
    getBad: catchAsync(async (req, res, next) => {
    try {
      const response = await getError()
      endpointResponse({
        res,
        message: 'Index retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
