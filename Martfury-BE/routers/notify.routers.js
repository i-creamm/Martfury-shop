const express = require('express')
const notifyRouter = express.Router()
const {asyncHandle} = require('../utils/asyncHandle')
const {
    getAll,
    createNotify,
    readNotify,
    readAll
} = require('../controllers/notify.controllers')

    notifyRouter.get('/', asyncHandle(getAll))
    notifyRouter.post('/', asyncHandle(createNotify))
    notifyRouter.get('/readed/:id', asyncHandle(readNotify))
    notifyRouter.get('/read-all', asyncHandle(readAll))

module.exports = notifyRouter