const {sequelize, Order, Product, User, Category} = require('../models')
const statusCode = require('../core/statusCode')

const getStatisticalYear = async (req, res) => {
    const {year} = req.params
    const list = await sequelize.query('select sum(amount), month(order_date) from orders where year(order_date) = ? and status = 2 group by month(order_date)',
                                    {replacements: [year], type: sequelize.QueryTypes.SELECT})
    const sta = list.map(item => ({
        month: item['month(order_date)'],
        date: null,
        amount: item['sum(amount)'],
        count: 0
    }))
    let listReal = []
    for (let i = 1; i < 13; i++) {
        const found = sta.find(item => item.month == i)
        listReal.push({
            month: i,
            date: null,
            amount: found ? parseFloat(found.amount) : 0,
            count: 0
        })
    }
    res.status(statusCode.OK).json(listReal)               
}

const getYear = async (req, res) => {
    const item = await sequelize.query('select year(order_date) from orders group by year(order_date)',{type: sequelize.QueryTypes.SELECT})
    res.status(statusCode.OK).json(item)
}

const getRevenueByYear = async (req, res) => {
    const {year} = req.params
    const query = await sequelize.query('select sum(amount) from orders where year(order_date) = ? and status = 2', {replacements: [year], type: sequelize.QueryTypes.SELECT})
    res.status(statusCode.OK).json(query)
}

const getAllOrderSuccess = async (req, res) => {
    const allOrder = await Order.findAll({where: {status : 2}, include: {model:User}})
    res.status(statusCode.OK).json(allOrder)
}

const getCategoryBestSeller = async (req, res) => {
    const list = await sequelize.query(`select c.category_name, sum(p.sold) as total ,  sum(p.sold * (p.price * (1 - p.discount / 100))) as revenue
                                        from categories c 
                                        join products p 
                                        on p.category_id = c.category_id
                                        group by c.category_name
                                        order by sum(p.sold) desc;`, {type: sequelize.QueryTypes.SELECT})
    const listCategoryBestSeller = list.map(item => ({
        name: item.category_name,
        count: parseInt(item.total),
        amount: item.revenue
    }))
    res.status(statusCode.OK).json(listCategoryBestSeller)
}

const getInventory = async (req, res) => {
    const item = await Product.findAll({
        where: {status: true},
        include: {model: Category},
        order: [['quantity', 'DESC']]
    })
    res.status(statusCode.OK).json(item)
}

module.exports = {
    getStatisticalYear,
    getYear,
    getRevenueByYear,
    getAllOrderSuccess,
    getInventory,
    getCategoryBestSeller
}