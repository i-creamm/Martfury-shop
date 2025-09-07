const {Order, Product, order_detail} = require('../models')
const statusCode = require('../core/statusCode')
const {badRequestError, notFoundError} = require('../core/customErrorHandler')


const getByOrder = async (req, res) => {
    const {id} = req.params
    const check = await Order.findOne({ 
        where: {order_id: id}
    })
    console.log(check)
    if(!check) throw new notFoundError()
    res.status(statusCode.OK).json(await order_detail.findAll({ 
        where: {order_id: check.order_id},
        include: {model:Product}
    }))
    
}

module.exports = {
    getByOrder
}