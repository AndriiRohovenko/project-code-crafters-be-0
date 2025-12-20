'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      areaId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'areas',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      instructions: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      thumb: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      time: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    await queryInterface.addIndex('recipes', ['title']);
    await queryInterface.addIndex('recipes', ['categoryId']);
    await queryInterface.addIndex('recipes', ['areaId']);
    await queryInterface.addIndex('recipes', ['userId']);
  },

  async down(queryInterface) {
    await queryInterface.dropTable('recipes');
  },
};
