'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, app_roles}) {
      // define association here
      this.belongsTo(User, {foreignKey: 'user_id'})
      this.belongsTo(app_roles, {foreignKey: 'role_id'})
    }
  }
  userRoles.init({
    user_id: {
      type: DataTypes.BIGINT,     // hoặc BIGINT nếu bạn dùng số lớn
      primaryKey: true,
      autoIncrement: true,
      onDelete: 'CASCADE'
    },
    user_id: {
      type: DataTypes.INTEGER,     // hoặc BIGINT nếu bạn dùng số lớn
      primaryKey: true,
      autoIncrement: true,
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'user_roles',
    timestamps:false
  });
  return userRoles;
};