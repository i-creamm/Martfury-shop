const express = require('express')
const rateRouter = express.Router()
const {asyncHandle} = require('../utils/asyncHandle')
const {
    findAll,
    findById,
    findByProduct,
    putRate,
    removeRate
} = require('../controllers/rate.controllers')

    rateRouter.get('/', asyncHandle(findAll))
    rateRouter.get('/:orderDetailId', asyncHandle(findById))
    rateRouter.get('/product/:id', asyncHandle(findByProduct))
    rateRouter.put('/:id', asyncHandle(putRate))
    rateRouter.delete('/:id', asyncHandle(removeRate))

module.exports = rateRouter