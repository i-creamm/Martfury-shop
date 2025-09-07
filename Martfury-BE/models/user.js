'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user_roles, Favorite, Cart, Order, Rate}) {
      // define association here
      this.hasMany(user_roles, {foreignKey: 'user_id'})
      this.hasMany(Favorite, {foreignKey: 'user_id'})
      this.hasMany(Cart, {foreignKey: 'user_id'})
      this.hasMany(Order, {foreignKey: 'user_id'})
      this.hasMany(Rate, {foreignKey:'user_id'})
    }
  }
  User.init({
    user_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    register_date: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps:false
  });
  return User;
};