'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Order, Product, Rate}) {
      // define association here
      this.belongsTo(Order, {foreignKey: 'order_id'})
      this.belongsTo(Product, {foreignKey: 'product_id'})
      this.hasMany(Rate, {foreignKey:'order_detail_id'})
    }
  }
  order_detail.init({
    order_detail_id: {
      type: DataTypes.BIGINT,     // hoặc BIGINT nếu bạn dùng số lớn
      primaryKey: true,
      autoIncrement: true,
    },
    price: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'order_detail',
    timestamps:false
  });
  return order_detail;
};