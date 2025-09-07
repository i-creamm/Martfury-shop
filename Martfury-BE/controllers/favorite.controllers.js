const {Product, User, Favorite} = require('../models')
const statusCode = require('../core/statusCode')
const { badRequestError, notFoundError } = require('../core/customErrorHandler')

const findByEmail = async (req, res) => {
    const user = await User.findOne({where: {email: req.params.email}})
    if(!user) throw new notFoundError()
    const favorites = await Favorite.findAll({
        where:{
            user_id: user.user_id
        },
        include: [{
            model: User
        }]
    })
    res.status(statusCode.OK).json(favorites)
}

const findByProduct = async (req, res) => {
    const {id} = req.params
    const product = await Product.findOne({where:{product_id: id}})
    if(!product) throw new notFoundError()
    const favorites = await Favorite.findAndCountAll({
        where:{
            product_id: product.product_id
        },
        include: {
            model:Product
        }
    })
    res.status(statusCode.OK).json(favorites)
}

const findByProductAndUser = async (req, res) => {
    const {productId, email} = req.params
    const user = await User.findOne({where: {email}})
    const product = await Product.findOne({where: {product_id: productId}})
    if(!product && !user) throw new notFoundError();
    const favorite = await Favorite.findOne({
        where: {
            user_id: user.user_id,
            product_id: product.product_id
        },
        include: [User, Product]
    })
    if(!favorite) throw new notFoundError()
    res.status(statusCode.OK).json(favorite)
}

const createFavorite = async (req, res) => {
    res.status(statusCode.OK).json(await Favorite.create(req.body))
}

const deleteFavorite = async (req, res) => {
    const {id} =  req.params
    if(!await Favorite.findOne({where:{favorite_id:id}})) throw new notFoundError()
    await Favorite.destroy({where:{favorite_id:id}})
    res.status(statusCode.OK)
}


module.exports = {
    findByEmail,
    findByProduct,
    findByProductAndUser,
    deleteFavorite,
    createFavorite
}