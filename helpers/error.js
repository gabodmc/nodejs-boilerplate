class ErrorObject extends Error {
  constructor(message, statusCode, errors = []) {
    super()

    this.message = message
    this.statusCode = statusCode
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'
    this.isOperational = true
    this.errors = errors

    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = {
  ErrorObject,
}
