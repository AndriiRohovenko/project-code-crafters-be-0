'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Додаємо нові колонки для foreign keys
    await queryInterface.addColumn('recipes', 'categoryId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    await queryInterface.addColumn('recipes', 'areaId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'areas',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    // 2. Мігруємо дані: знаходимо відповідні ID по назвам
    // Оновлюємо categoryId на основі category name
    await queryInterface.sequelize.query(`
      UPDATE recipes r
      SET "categoryId" = c.id
      FROM categories c
      WHERE LOWER(r.category) = LOWER(c.name)
    `);

    // Оновлюємо areaId на основі area name
    await queryInterface.sequelize.query(`
      UPDATE recipes r
      SET "areaId" = a.id
      FROM areas a
      WHERE LOWER(r.area) = LOWER(a.name)
    `);

    // 3. Додаємо індекси
    await queryInterface.addIndex('recipes', ['categoryId']);
    await queryInterface.addIndex('recipes', ['areaId']);

    // 4. Видаляємо старі string колонки (опціонально, можна залишити для backward compatibility)
    // await queryInterface.removeColumn('recipes', 'category');
    // await queryInterface.removeColumn('recipes', 'area');
  },

  async down(queryInterface, Sequelize) {
    // Видаляємо індекси
    await queryInterface.removeIndex('recipes', ['categoryId']);
    await queryInterface.removeIndex('recipes', ['areaId']);

    // Видаляємо колонки
    await queryInterface.removeColumn('recipes', 'categoryId');
    await queryInterface.removeColumn('recipes', 'areaId');
  },
};
