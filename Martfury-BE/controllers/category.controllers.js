const {Category} = require('../models')
const statusCode = require('../core/statusCode')
const { badRequestError, notFoundError } = require('../core/customErrorHandler')

const getAll = async (req, res) => {
    res.status(statusCode.OK).json(await Category.findAll())
}

const getById = async (req, res) => {
    const {id} = req.params
    res.status(statusCode.OK).json(await Category.findAll({where: {id}}))
}

const createCategory = async (req, res) => {
    const {name} = req.body
    if(await Category.findOne({where:{name}})) throw new badRequestError('Loại sách này đã tồn tại')
    res.status(statusCode.OK).json(await Category.save({name}))
}

const updateCategory = async (req, res) => {
    const {id} = req.params
    const {name} = req.body
    if(!await Category.findOne({where:{id}})) throw new notFoundError()
    res.status(statusCode.OK).json(await Category.update({name}, {where: {id}}))
}

const deleteCategory = async (req, res) => {
    const {id} = req.params
    if(!await Category.findOne({where:{id}})) throw new notFoundError()
    res.status(statusCode.OK).json(await Category.destroy({where: {id}}))
}

module.exports = {
    getAll,
    getById,
    createCategory,
    updateCategory,
    deleteCategory
}