'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product}) {
      // define association here
      this.hasMany(Product, {foreignKey: 'category_id'})
    }
  }
  Category.init({
    category_id: {
      type: DataTypes.INTEGER,     // hoặc BIGINT nếu bạn dùng số lớn
      primaryKey: true,
      autoIncrement: true
    },
    category_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
    timestamps: false
  });
  return Category;
};