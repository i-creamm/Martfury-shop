const {Product, Category, sequelize} = require('../models')
const statusCode = require('../core/statusCode')
const {badRequestError, notFoundError} = require('../core/customErrorHandler')


const deleteProduct = async (req, res) => {
    const {id} = req.params
    const checkProduct = await Product.findOne({where:{product_id: id}})
    if(!checkProduct) throw new badRequestError('Sản phẩm này không tồn tại')
    checkProduct.set({ status:false })
    await checkProduct.save()
    res.status(statusCode.OK).send('Xoá thành công')
}

const editProduct = async (req, res) => {
    const {id} = req.params
    const check = await Product.findOne({where:{ product_id: id }})
    if(!check) throw new badRequestError('Sản phẩm này không tồn tại')
    await Product.update(req.body,{where: {product_id: id}})
    const checkProductUpdate = await Product.findOne({where:{product_id: id}})
    res.status(statusCode.OK).json(checkProductUpdate)
}

const createProduct = async (req, res) => {
    if(await Product.findOne({where: {
        name: req.body.name
    }})) throw new badRequestError('Sản phẩm đã tồn tại trong hệ thống');
    res.status(statusCode.CREATED).json(
        await Product.create(req.body)
    )
}

const getAll = async (req, res) => {
    res.status(statusCode.OK).json(
        await Product.findAll({ 
            where: { status: true }, 
            include:
            {
                model: Category
            }
        })
    )
}

const getById = async (req, res) => {
    const {id} = req.params
    const checkProduct = await Product.findOne({where: {product_id: id}})
    if(!checkProduct) throw new notFoundError('Không tìm thấy quyển sách này');
    res.status(statusCode.OK).json(checkProduct)   
}

const getBestSeller = async (req, res) => {
    res.status(statusCode.OK).json(await Product.findAll({
        where:{status:true},
        order: [['sold', 'DESC']],
        include:{model: Category},
    }))
}

const getLasted = async (req, res) => {
    res.status(statusCode.OK).json(await Product.findAll({ where: { status: true }, order: [['entered_date', 'DESC']] }))
}

const getBestSellerAdmin = async (req, res) => {
    res.status(statusCode.OK).json(await Product.findAll({
        order: [['sold', 'DESC']],
        include:{model: Category},
        limit: 10
    }))
}

const getByCategory = async (req, res) => {
    const { id } = req.params
    if (!await Category.findOne({ where: { category_id: id } })) throw new notFoundError('Không tìm thấy danh mục sách này')
    res.status(statusCode.OK).json(await Product.findAll({
        where: { category_id: id },
        include: { model: Category }
    }))
}

const getRated = async (req, res) => {
    const query = await sequelize.query(`select p.* from products p 
                                        left join rates r on p.product_id = r.product_id
                                        group by p.product_id, p.name
                                        order by avg(r.rating) desc, rand()`)
    res.status(statusCode.OK).json(query)
}

const getSuggest = async (req, res) => {
    
}

module.exports = {
    deleteProduct,
    editProduct,
    createProduct,
    getAll,
    getById,
    getBestSeller,
    getBestSellerAdmin,
    getLasted,
    getByCategory,
    getRated,
    getSuggest
}