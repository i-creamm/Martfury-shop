const express = require('express')
const favoriteRouter = express.Router()
const {asyncHandle} = require('../utils/asyncHandle')
const {findByEmail, findByProduct, findByProductAndUser, deleteFavorite, createFavorite} = require('../controllers/favorite.controllers')

    favoriteRouter.get('/email/:email', asyncHandle(findByEmail))

    favoriteRouter.get('/product/:id', asyncHandle(findByProduct))

    favoriteRouter.get('/:productId/:email', asyncHandle(findByProductAndUser))

    favoriteRouter.post('/email', asyncHandle(createFavorite))

    favoriteRouter.delete('/:id', asyncHandle(deleteFavorite))

module.exports = favoriteRouter