const express = require('express')
const orderDetailRouter = express.Router()
const {asyncHandle} = require('../utils/asyncHandle')
const {getByOrder} = require('../controllers/order_detail.controllers')

    orderDetailRouter.get('/order/:id', asyncHandle(getByOrder))

module.exports = orderDetailRouter