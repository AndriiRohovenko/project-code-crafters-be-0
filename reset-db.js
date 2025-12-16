import sequelize from './db/sequelize.js';

(async () => {
  try {
    console.log('Resetting database...');
    
    // Truncate all tables and reset sequences
    await sequelize.query(`
      TRUNCATE TABLE 
        users, 
        areas, 
        categories, 
        ingredients, 
        recipes, 
        recipe_ingredients, 
        testimonials, 
        favorites, 
        followers 
      RESTART IDENTITY CASCADE
    `);
    
    // Reset seeder metadata
    await sequelize.query('DELETE FROM "SequelizeMeta" WHERE name LIKE \'%seed%\'');
    
    console.log('✓ Database reset complete');
    await sequelize.close();
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    await sequelize.close();
    process.exit(1);
  }
})();
