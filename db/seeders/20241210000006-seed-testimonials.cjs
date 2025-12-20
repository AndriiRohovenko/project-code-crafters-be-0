'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Отримуємо ID користувачів
    const [users] = await queryInterface.sequelize.query(
      `SELECT id, email FROM users ORDER BY id LIMIT 3`
    );

    if (users.length < 3) {
      console.log('Not enough users to seed testimonials');
      return;
    }

    const now = new Date();

    const testimonials = [
      {
        ownerId: users[0].id,
        testimonial:
          'Foodies has transformed my cooking experience! With its diverse recipe collection and user-friendly interface, I can easily find, save, and cook delicious meals for any occasion. From quick dinners to elaborate feasts, this app has become my go-to kitchen companion. Highly recommended!',
        createdAt: now,
        updatedAt: now,
      },
      {
        ownerId: users[1].id,
        testimonial:
          "Foodies is a must-have for any home cook! With its extensive recipe collection and easy-to-use interface, I've discovered new culinary delights and streamlined my meal planning. Cooking has never been this enjoyable!",
        createdAt: now,
        updatedAt: now,
      },
      {
        ownerId: users[2].id,
        testimonial:
          'Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!',
        createdAt: now,
        updatedAt: now,
      },
    ];

    await queryInterface.bulkInsert('testimonials', testimonials, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('testimonials', null, {});
  },
};
