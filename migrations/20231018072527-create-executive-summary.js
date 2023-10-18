"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ExecutiveSummaries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      introductory_note: {
        type: Sequelize.STRING,
      },
      criterion_wise_summary: Sequelize.STRING,
      strength_weaknesses_opportunities_and_challenges: Sequelize.STRING,
      additional_information: Sequelize.STRING,
      over_all_conclusive_explication: Sequelize.STRING,
      academic_year: Sequelize.INTEGER,
      status: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ExecutiveSummaries");
  },
};
