const {Cart, User, cart_detail, sequelize} = require('../models')
const statusCode = require('../core/statusCode')
const {badRequestError, notFoundError} = require('../core/customErrorHandler')

const getCartUser = async (req, res) => {
    const {email} = req.params
    const user = await User.findOne({where:{email}})
    if(!user) throw new notFoundError()
    const cart = await Cart.findOne({
        where:{
            user_id: user.user_id
        },
        include:{
            model: User
        }
    })
    res.status(statusCode.OK).json(cart)
}

const putCartUser = async (req, res) => {
    const {email} = req.params
    const user = await User.findOne({where:{email}})
    if(!user) throw new notFoundError()
    
}

module.exports = {
    getCartUser,
    putCartUser
}