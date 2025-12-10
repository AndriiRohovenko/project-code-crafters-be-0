'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = [
      { name: "Seafood" },
      { name: "Lamb" },
      { name: "Starter" },
      { name: "Chicken" },
      { name: "Beef" },
      { name: "Dessert" },
      { name: "Vegan" },
      { name: "Pork" },
      { name: "Vegetarian" },
      { name: "Miscellaneous" },
      { name: "Pasta" },
      { name: "Breakfast" },
      { name: "Side" },
      { name: "Goat" },
      { name: "Soup" }
    ];

    const now = new Date();
    const categoriesWithTimestamps = categories.map(category => ({
      ...category,
      createdAt: now,
      updatedAt: now
    }));

    await queryInterface.bulkInsert('categories', categoriesWithTimestamps, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
