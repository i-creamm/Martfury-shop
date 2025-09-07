'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, cart_detail}) {
      // define association here
      this.belongsTo(User, {foreignKey:'user_id'})
      this.hasMany(cart_detail, {foreignKey: 'cart_id'})
    }
  }
  Cart.init({
    cart_id: {
      type: DataTypes.BIGINT,     // hoặc BIGINT nếu bạn dùng số lớn
      primaryKey: true,
      autoIncrement: true,
    },
    amount: DataTypes.DOUBLE,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cart',
    timestamps:false
  });
  return Cart;
};