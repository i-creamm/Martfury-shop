const reasonPhrases = require('./reasonPhrases')
const statusCode = require('./statusCode')

class errorCustom extends Error {
    constructor(message, status){
        super(message),
        this.status = status
    }
}

class badRequestError extends errorCustom {
    constructor(message = reasonPhrases.BAD_REQUEST, status = statusCode.BAD_REQUEST){
        super(message,status)
    }
}

class notFoundError extends errorCustom {
    constructor(message = reasonPhrases.NOT_FOUND, status = statusCode.NOT_FOUND){
        super(message,status)
    }
}

class unauthorizedError extends errorCustom {
    constructor(message = reasonPhrases.UNAUTHORIZED, status = statusCode.UNAUTHORIZED){
        super(message,status)
    }
}


module.exports = {
    errorCustom,
    badRequestError,
    notFoundError,
    unauthorizedError
}