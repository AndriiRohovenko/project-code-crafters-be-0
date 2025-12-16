'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Видаляємо індекси для старих колонок
    await queryInterface.removeIndex('recipes', ['category']);
    await queryInterface.removeIndex('recipes', ['area']);

    // Видаляємо текстові колонки category та area
    await queryInterface.removeColumn('recipes', 'category');
    await queryInterface.removeColumn('recipes', 'area');
  },

  async down(queryInterface, Sequelize) {
    // Відновлюємо колонки
    await queryInterface.addColumn('recipes', 'category', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('recipes', 'area', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Відновлюємо індекси
    await queryInterface.addIndex('recipes', ['category']);
    await queryInterface.addIndex('recipes', ['area']);

    // Відновлюємо дані з foreign keys
    await queryInterface.sequelize.query(`
      UPDATE recipes r
      SET category = c.name
      FROM categories c
      WHERE r."categoryId" = c.id
    `);

    await queryInterface.sequelize.query(`
      UPDATE recipes r
      SET area = a.name
      FROM areas a
      WHERE r."areaId" = a.id
    `);
  },
};
