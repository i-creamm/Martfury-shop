const {Cart, Product, User, cart_detail, sequelize} = require('../models')
const statusCode = require('../core/statusCode')
const {badRequestError, notFoundError} = require('../core/customErrorHandler')

const getByCartId = async (req, res) => {
    const {id} = req.params
    const cart = await Cart.findOne({where:{cart_id: id}})
    if(!cart) throw new notFoundError()
    const cartDetail = await cart_detail.findOne({
        where:{
            cart_id: cart.cart_id
        },
        include:{
            model: Cart
        }
    })
    res.status(statusCode.OK).json(cartDetail)
}

const getOne = async (req, res) => {
    const {id} = req.params
    const cartDetail = await cart_detail.findOne({ 
        where:{
            cart_detail_id: id
        },
        include: [
                {
                    model:Cart,
                    include:{
                        model:User
                    }
                },
                {
                    model:Product
                }
            ]
    })
    if(!cartDetail) throw new notFoundError()
    res.status(statusCode.OK).json(cartDetail)
}

const addToCart = async (req, res) => {
    const cart = await Cart.findOne({ 
        where: {
            cart_id: req.body.car_id
        }
    })
    if(!cart) throw new notFoundError()
    const product = await Product.findOne({
        where:{
            product_id:req.body.product_id,
            status: true
        }
    })
}

module.exports = {
    getByCartId,
    getOne,
    addToCart
}