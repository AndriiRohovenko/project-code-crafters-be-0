'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Приклад інгредієнтів - додайте більше з вашого ingredients.json
    const ingredients = [
      {
        name: 'Chicken',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png',
      },
      {
        name: 'Salt',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f5.png',
      },
      {
        name: 'Olive Oil',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3665.png',
      },
      {
        name: 'Onions',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3804.png',
      },
      {
        name: 'Tomatoes',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e382c.png',
      },
      {
        name: 'Garlic',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3770.png',
      },
      {
        name: 'Butter',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36e9.png',
      },
      {
        name: 'Sugar',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png',
      },
      {
        name: 'Flour',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37e8.png',
      },
      {
        name: 'Eggs',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c2.png',
      },
      {
        name: 'Milk',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36f9.png',
      },
      {
        name: 'Cheese',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e388a.png',
      },
      {
        name: 'Pepper',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37bc.png',
      },
      {
        name: 'Rice',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365e.png',
      },
      {
        name: 'Pasta',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e375c.png',
      },
      {
        name: 'Beef',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3688.png',
      },
      {
        name: 'Pork',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3704.png',
      },
      {
        name: 'Fish',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c4.png',
      },
      {
        name: 'Shrimp',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3840.png',
      },
      {
        name: 'Lemon',
        img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3803.png',
      },
    ];

    const now = new Date();
    const ingredientsWithTimestamps = ingredients.map((ingredient) => ({
      ...ingredient,
      createdAt: now,
      updatedAt: now,
    }));

    await queryInterface.bulkInsert(
      'ingredients',
      ingredientsWithTimestamps,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ingredients', null, {});
  },
};
