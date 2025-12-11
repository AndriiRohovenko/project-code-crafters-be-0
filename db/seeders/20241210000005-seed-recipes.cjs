'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Спочатку отримуємо ID категорій та регіонів
    const [categories] = await queryInterface.sequelize.query(
      `SELECT id, name FROM categories`
    );
    const [areas] = await queryInterface.sequelize.query(
      `SELECT id, name FROM areas`
    );

    const categoryMap = {};
    categories.forEach((cat) => {
      categoryMap[cat.name] = cat.id;
    });

    const areaMap = {};
    areas.forEach((area) => {
      areaMap[area.name] = area.id;
    });

    const now = new Date();

    const recipes = [
      {
        title: 'Battenberg Cake',
        category: 'Dessert',
        categoryId: categoryMap['Dessert'],
        area: 'British',
        areaId: areaMap['British'],
        instructions:
          'Heat oven to 180C/160C fan/gas 4 and line the base and sides of a 20cm square tin with baking parchment...',
        description:
          'A classic British cake made with almond sponge cake and covered with marzipan.',
        thumb:
          'https://ftp.goit.study/img/so-yummy/preview/Battenberg%20Cake.jpg',
        time: 60,
        userId: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        title: 'Teriyaki Chicken Casserole',
        category: 'Chicken',
        categoryId: categoryMap['Chicken'],
        area: 'Japanese',
        areaId: areaMap['Japanese'],
        instructions:
          'Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray...',
        description:
          'A Japanese-inspired casserole made with chicken, teriyaki sauce, rice, and vegetables.',
        thumb:
          'https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg',
        time: 75,
        userId: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        title: 'Irish stew',
        category: 'Beef',
        categoryId: categoryMap['Beef'],
        area: 'Irish',
        areaId: areaMap['Irish'],
        instructions:
          'Heat the oven to 180C/350F/gas mark 4. Drain and rinse the soaked wheat...',
        description:
          'A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs.',
        thumb: 'https://ftp.goit.study/img/so-yummy/preview/Irish%20stew.jpg',
        time: 160,
        userId: null,
        createdAt: now,
        updatedAt: now,
      },
    ];

    await queryInterface.bulkInsert('recipes', recipes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipes', null, {});
  },
};
