'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExecutiveSummary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExecutiveSummary.init({
    introductory_note: DataTypes.STRING,
    criterion_wise_summary: DataTypes.STRING,
    strength_weaknesses_opportunities_and_challenges: DataTypes.STRING,
    additional_information: DataTypes.STRING,
    over_all_conclusive_explication: DataTypes.STRING,
    academic_year: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ExecutiveSummary',
  });
  return ExecutiveSummary;
};