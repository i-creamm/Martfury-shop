'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, order_detail}) {
      // define association here
      this.belongsTo(User, {foreignKey:'user_id'})
      this.hasMany(order_detail, {foreignKey:'order_id'})
    }
  }
  Order.init({
    order_id: {
      type: DataTypes.BIGINT,     // hoặc BIGINT nếu bạn dùng số lớn
      primaryKey: true,
      autoIncrement: true,
    },
    address: DataTypes.STRING,
    amount: DataTypes.DOUBLE,
    order_date: DataTypes.DATE,
    phone: DataTypes.STRING,
    status:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
    timestamps:false
  });
  return Order;
};