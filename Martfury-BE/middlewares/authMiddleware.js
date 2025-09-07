const statusCode = require('../core/statusCode')
const {errorCustom, unauthorizedError} = require('../core/customErrorHandler')
const jwt = require('jsonwebtoken')

const authenticate = async (req, res) => {

}

module.exports = {
    authenticate
}