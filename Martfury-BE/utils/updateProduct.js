const {Product, order_detail} = require('../models')

const updateProduct = async (order) => {
    const listOrderDetail = await order_detail.findAll({
        where: {order_id: order.order_id}
    })

    for (const orderDetail of listOrderDetail) {
        const item = await Product.findOne()
    }
    
}

module.exports = {
    updateProduct
}