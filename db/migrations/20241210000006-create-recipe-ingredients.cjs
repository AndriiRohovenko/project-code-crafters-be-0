'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recipe_ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      recipeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'recipes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ingredientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ingredients',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      measure: {
        type: Sequelize.STRING,
        allowNull: true,
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

    await queryInterface.addIndex('recipe_ingredients', ['recipeId']);
    await queryInterface.addIndex('recipe_ingredients', ['ingredientId']);
  },

  async down(queryInterface) {
    await queryInterface.dropTable('recipe_ingredients');
  },
};
