"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ForCommunications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      designation: Sequelize.STRING,
      name: Sequelize.STRING,
      telephone: Sequelize.STRING,
      mobile: Sequelize.STRING,
      fax: Sequelize.STRING,
      email: Sequelize.STRING,
      status: Sequelize.STRING,
      institutionId: Sequelize.INTEGER,
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
    await queryInterface.dropTable("ForCommunications");
  },
};
