const express = require('express')
const orderRouter = express.Router()
const {asyncHandle} = require('../utils/asyncHandle')
const {
    getById, 
    getByUser, 
    checkout, 
    cancelOrder, 
    deliverOrder, 
    successOrder
} = require('../controllers/order.controllers')

    orderRouter.get('/:id', asyncHandle(getById))
    orderRouter.get('/user/:email', asyncHandle(getByUser))
    orderRouter.post('/:email', asyncHandle(checkout))
    orderRouter.get('/cancel/:orderId', asyncHandle(cancelOrder))
    orderRouter.get('/deliver/:orderId', asyncHandle(deliverOrder))
    orderRouter.get('/success/:orderId', asyncHandle(successOrder))

module.exports = orderRouter