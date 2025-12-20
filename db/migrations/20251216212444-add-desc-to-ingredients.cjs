'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('ingredients', 'desc', {
      type: Sequelize.TEXT,
      allowNull: true,
      after: 'name',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('ingredients', 'desc');
  },
};
