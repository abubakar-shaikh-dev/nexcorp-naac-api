'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ForCommunication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ForCommunication.init({
    designation: DataTypes.STRING,
    name: DataTypes.STRING,
    telephone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    fax: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.STRING,
    institutionId: DataTypes.INTEGER ,
  }, {
    sequelize,
    modelName: 'ForCommunication',
  });
  return ForCommunication;
};