const {Notification, sequelize} = require('../models')
const statusCode = require('../core/statusCode')
const { badRequestError, notFoundError } = require('../core/customErrorHandler')

const getAll = async (req, res) => {
    res.status(statusCode.OK).json(await Notification.findAll({order: ['id', 'DESC']}))
}

const createNotify = async (req, res) => {
    const {message} = req.body
    res.status(statusCode.OK).json(await Notification.create({message: message, time: new date(), status: false}))
}

const readNotify = async (req, res) => {
    const {id} = req.params
    const notify = await Notification.findOne({where:{id}})
    if(!notify) throw new notFoundError()
    notify.set({status: true})
    res.status(statusCode.OK).json(await notify.save())
}

const readAll = async (req, res) => {
    const allNotify = await sequelize.query(`update notifications set status = true`)
    res.status(statusCode.OK).json(allNotify)
}

module.exports = {
    getAll,
    createNotify,
    readNotify,
    readAll
}