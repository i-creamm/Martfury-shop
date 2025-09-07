const {Order, User, Cart, cart_detail, order_detail, Product} = require('../models')
const statusCode = require('../core/statusCode')
const {updateProduct} = require('../utils/updateProduct')
const {badRequestError, notFoundError} = require('../core/customErrorHandler')
const {sendEmail, sendMailOrder} = require('../utils/sendMail')


const getById = async (req, res) => {
    const {id} = req.params
    const order = await Order.findOne({where:{order_id:id}})
    if(!order) throw new notFoundError();
    res.status(statusCode.OK).json(order)
}

const getByUser = async (req, res) => {
    const {email} = req.params
    const user = await User.findOne({where:{email}})
    if(!user) throw new notFoundError()
    res.status(statusCode.OK).json(await Order.findAll({ where: { user_id: user.user_id }, order: [['order_id', 'DESC']], include: { model: User } }))
}

const checkout = async (req, res) => {
    const {email} = req.params
    const {address, phone} = req.body
    const user = await User.findOne({where:{email}})
    if(!user) throw new notFoundError();

    const cart = await Cart.findOne({where:{user_id: user.user_id}})
    if(!cart) throw new notFoundError();

    const cart_details = await cart_detail.findAll({where:{cart_id:cart.cart_id}, include:{model:Product}})

    if (cart_details.length === 0) {
        return res.status(statusCode.BAD_REQUEST).json({ message: 'Giỏ hàng đang trống' });
    }

    const total = cart_details.reduce((sum, item) => sum + item.price,0)
    const newOrder = await Order.create({
        address: address || cart.address,
        amount: total,
        order_date: new Date(),
        phone: phone || cart.phone,
        status: 0,
        user_id:user.user_id
    })

    for(const i of cart_details){
        await order_detail.create({
            price: i.price,
            quantity: i.quantity,
            order_id: newOrder.order_id,
            product_id: i.product_id
        })
    }

    await cart_detail.destroy({ where: { cart_id: cart.cart_id } });

    // thiếu gửi mail
    // await sendMailOrder(email, newOrder)

    res.status(statusCode.OK).json(newOrder)
}

const cancelOrder = async (req, res) => {
    const {orderId} = req.params
    const order = await Order.findOne({where:{order_id: orderId}})
    if(!order) throw new notFoundError()
    order.set({status: 3})
    await order.save()
    // thiếu gửi mail
    res.status(statusCode.OK).json({message: "cancel successfully"})
}

const deliverOrder = async (req, res) => {
    const {orderId} = req.params
    const order = await Order.findOne({where:{order_id: orderId}})
    if(!order) throw new notFoundError()
    order.set({status: 1})
    await order.save()
    // thiếu gửi mail
    res.status(statusCode.OK).json({message: "change status successfully"})
}

const successOrder = async (req, res) => {
    const {orderId} = req.params
    const order = await Order.findOne({where:{order_id: orderId}})
    if(!order) throw new notFoundError()
    order.set({status: 2})
    await order.save()
    // thiếu gửi mail
    await updateProduct(order)
    res.status(statusCode.OK).json({message: "change status successfully"})
}

module.exports = {
    getById,
    getByUser,
    checkout,
    cancelOrder,
    deliverOrder,
    successOrder
}
