module.exports = (sequelize, DataTypes) => {
  const Schema = {
    introductory_note: DataTypes.STRING,
    criterion_wise_summary: DataTypes.STRING,
    strength_weaknesses_opportunities_and_challenges: DataTypes.STRING,
    additional_information: DataTypes.STRING,
    over_all_conclusive_explication: DataTypes.STRING,
    academic_year: DataTypes.INTEGER,
    status: DataTypes.STRING,
  };

  const ExecutiveSummary = sequelize.define("executive-summaries", Schema);

  return ExecutiveSummary;
};
