'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const hashedPassword = await bcrypt.hash('password123', 10);

    const users = [
      {
        name: 'GoIT',
        email: 'goit@gmail.com',
        password: hashedPassword,
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Foodies user',
        email: 'user@gmail.com',
        password: hashedPassword,
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Larry Pageim',
        email: 'larry@gmail.com',
        password: hashedPassword,
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('users', users, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
