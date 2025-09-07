'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user_roles}) {
      // define association here
      this.hasMany(user_roles, {foreignKey: 'role_id'})
    }
  }
  appRoles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'app_roles',
    timestamps:false
  });
  return appRoles;
};