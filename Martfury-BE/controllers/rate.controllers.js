const {Rate, order_detail, User, Product} = require('../models')
const statusCode = require('../core/statusCode')
const {badRequestError, notFoundError} = require('../core/customErrorHandler')

const findAll = async (req, res) => {
    res.status(statusCode.OK).json(await Rate.findAll({ 
        order: [['id', 'DESC']],
        include:[{
            model: order_detail
        },{
            model: Product
        },{
            model: User
        }]
    }))
}

const findById = async (req, res) => {
    const {orderDetailId} = req.params
    const check = await order_detail.findOne({
        where: { order_detail_id: orderDetailId },
        include: { model: order_detail }
    })
    if(!check) throw new notFoundError()
    res.status(statusCode.OK).json(await Rate.findOne({
        where: {order_detail_id: check.order_detail_id },
    }))
    
}

const findByProduct = async (req, res) => {
    const {id} = req.params
    const check = await Product.findOne({ 
        where: { product_id: id }, 
        include: { model: Product } 
    })
    if(!check) throw new notFoundError()
    res.status(statusCode.OK).json(await Rate.findOne({
        where: {product_id: check.product_id },
        order: [['id', 'DESC']]
    }))
    
}

const postRate = async (req, res) => {
    const [checkUser, checkProduct, checkOrderDetail] = await Promise.all([
        Rate.findOne({where: {user_id: req.body.user_id}}),
        Rate.findOne({where: {product_id: req.body.product_id}}),
        Rate.findOne({where: {order_detail_id: req.body.order_detail_id}})
    ])
    if(!checkUser) throw new notFoundError()
    if(!checkProduct) throw new notFoundError()
    if(!checkOrderDetail) throw new notFoundError()
    res.status(statusCode.CREATED).json(await Rate.create(req.body))
}

const putRate = async (req, res) => {
    const {id} = req.params
    const checkRate = await Rate.findOne({where:{id}})
    if(!checkRate) throw new notFoundError()
    checkRate.set(req.body)
    await checkRate.save()
    res.status(statusCode.OK).json({mess:"success"})
}

const removeRate = async (req, res) => {
    const {id} = req.params
    const checkRate = await Rate.findOne({
        where:{ 
            id
        }
    })
    if(!checkRate) throw new notFoundError()
    await Rate.destroy({where:{id: checkRate.id}})
    res.status(statusCode.OK).json({mess: 'xoa thanh cong'})
}



module.exports = {
    findAll,
    findById,
    findByProduct,
    postRate,
    removeRate,
    putRate
}