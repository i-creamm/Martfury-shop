const express = require('express')
const cartDetailRouter = express.Router()
const {asyncHandle} = require('../utils/asyncHandle')
const {getOne, getByCartId} = require('../controllers/cart_detail.controllers')

    cartDetailRouter.get('/:id', asyncHandle(getOne))

module.exports = cartDetailRouter