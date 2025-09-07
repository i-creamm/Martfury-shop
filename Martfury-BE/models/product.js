'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Category, Favorite, cart_detail, order_detail, Rate}) {
      // define association here
      this.belongsTo(Category, {foreignKey: 'category_id'})
      this.hasMany(Favorite, {foreignKey: 'product_id'})
      this.hasMany(cart_detail, {foreignKey: 'product_id'})
      this.hasMany(order_detail, {foreignKey:'product_id'})
      this.hasMany(Rate, {foreignKey:'product_id'})
    }
  }
  Product.init({
    product_id: {
      type: DataTypes.INTEGER,     // hoặc BIGINT nếu bạn dùng số lớn
      primaryKey: true,
      autoIncrement: true
    },
    description: DataTypes.STRING(1000),
    discount:DataTypes.INTEGER,
    entered_date: DataTypes.DATE,
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    sold: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false
  });
  return Product;
};