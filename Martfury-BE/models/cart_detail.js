'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Cart, Product}) {
      // define association here
      this.belongsTo(Cart ,{foreignKey: 'cart_id'})
      this.belongsTo(Product ,{foreignKey: 'product_id'})
    }
  }
  cart_detail.init({
    cart_detail_id: {
      type: DataTypes.INTEGER,     // hoặc BIGINT nếu bạn dùng số lớn
      primaryKey: true,
      autoIncrement: true,
    },
    price: DataTypes.DOUBLE,
    quantity:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'cart_detail',
    timestamps:false
  });
  return cart_detail;
};