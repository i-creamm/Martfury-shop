const express = require('express')
const productRouter = express.Router()
const {asyncHandle} = require('../utils/asyncHandle')
const {
    getAll, 
    getById, 
    getBestSeller, 
    createProduct, 
    getLasted, 
    getByCategory, 
    getBestSellerAdmin, 
    getRated, getSuggest,
    editProduct,
    deleteProduct
} = require('../controllers/product.controllers')

    productRouter.get('/', asyncHandle(getAll))
    productRouter.get('/bestseller', asyncHandle(getBestSeller))
    productRouter.get('/bestseller-admin', asyncHandle(getBestSellerAdmin))
    productRouter.get('/latest', asyncHandle(getLasted))
    productRouter.get('/rated', asyncHandle(getRated))
    productRouter.get('/suggest/:categoryId/:productId', asyncHandle(getSuggest))
    productRouter.get('/category/:id', asyncHandle(getByCategory))
    productRouter.get('/:id', asyncHandle(getById))
    productRouter.post('/', asyncHandle(createProduct))
    productRouter.put('/:id', asyncHandle(editProduct))
    productRouter.delete('/:id', asyncHandle(deleteProduct))
    
module.exports = productRouter