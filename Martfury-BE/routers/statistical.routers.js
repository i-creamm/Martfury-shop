const express = require('express')
const statisticalRouter = express.Router()
const {asyncHandle} = require('../utils/asyncHandle')
const {
    getStatisticalYear,
    getYear,
    getRevenueByYear,
    getAllOrderSuccess,
    getInventory,
    getCategoryBestSeller,
} = require('../controllers/statistical.controllers')

    statisticalRouter.get('/countYear', asyncHandle(getYear))
    statisticalRouter.get('/revenue/year/:year', asyncHandle(getRevenueByYear))
    statisticalRouter.get('/get-all-order-success', asyncHandle(getAllOrderSuccess))
    statisticalRouter.get('/get-inventory', asyncHandle(getInventory))
    statisticalRouter.get('/get-category-seller', asyncHandle(getCategoryBestSeller))
    statisticalRouter.get('/:year', asyncHandle(getStatisticalYear))


module.exports = statisticalRouter