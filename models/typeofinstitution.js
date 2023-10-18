'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeOfInstitution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TypeOfInstitution.init({
    gender: DataTypes.STRING,
    shift: DataTypes.STRING,
    institutionId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'TypeOfInstitution',
  });
  return TypeOfInstitution;
};