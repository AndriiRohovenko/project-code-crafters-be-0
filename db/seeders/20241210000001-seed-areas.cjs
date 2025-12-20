'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const areas = [
      { name: 'Ukrainian' },
      { name: 'Italian' },
      { name: 'Moroccan' },
      { name: 'Unknown' },
      { name: 'Thai' },
      { name: 'Irish' },
      { name: 'British' },
      { name: 'Japanese' },
      { name: 'French' },
      { name: 'Indian' },
      { name: 'American' },
      { name: 'Mexican' },
      { name: 'Malaysian' },
      { name: 'Dutch' },
      { name: 'Spanish' },
      { name: 'Canadian' },
      { name: 'Vietnamese' },
      { name: 'Tunisian' },
      { name: 'Greek' },
      { name: 'Portuguese' },
      { name: 'Croatian' },
      { name: 'Chinese' },
      { name: 'Egyptian' },
      { name: 'Jamaican' },
      { name: 'Polish' },
      { name: 'Kenyan' },
      { name: 'Turkish' },
    ];

    const now = new Date();
    const areasWithTimestamps = areas.map((area) => ({
      ...area,
      createdAt: now,
      updatedAt: now,
    }));

    await queryInterface.bulkInsert('areas', areasWithTimestamps, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('areas', null, {});
  },
};
