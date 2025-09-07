const express = require('express')
const categoryRouter = express.Router()
const {asyncHandle} = require('../utils/asyncHandle')
const {getAll, getById, createCategory, updateCategory, deleteCategory} = require('../controllers/category.controllers')

    categoryRouter.get('/', asyncHandle(getAll))
    categoryRouter.get('/:id', asyncHandle(getById))
    categoryRouter.post('/', asyncHandle(createCategory))
    categoryRouter.put('/:id', asyncHandle(updateCategory))
    categoryRouter.get('/:id', asyncHandle(deleteCategory))

module.exports = categoryRouter


