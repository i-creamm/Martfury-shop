'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product, order_detail, User}) {
      // define association here
      this.belongsTo(Product, {foreignKey:'product_id'})
      this.belongsTo(order_detail, {foreignKey:'order_detail_id'})
      this.belongsTo(User, {foreignKey:'user_id'})
    }
  }
  Rate.init({
    comment: DataTypes.STRING,
    rate_date: DataTypes.DATE,
    rating: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Rate',
    timestamps:false
  });
  return Rate;
};