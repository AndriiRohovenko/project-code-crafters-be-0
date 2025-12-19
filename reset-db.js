// Load dotenv only if available (development)
try {
  await import('dotenv/config');
} catch (error) {
  // dotenv not available - use environment variables directly
}

import sequelize from './db/sequelize.js';

(async () => {
  try {
    console.log('Resetting database...');
    
    // Drop all tables (this also removes indexes)
    await sequelize.query('DROP SCHEMA public CASCADE');
    await sequelize.query('CREATE SCHEMA public');
    await sequelize.query('GRANT ALL ON SCHEMA public TO postgres');
    await sequelize.query('GRANT ALL ON SCHEMA public TO public');
    
    console.log('✓ Database reset complete (all tables and indexes dropped)');
    await sequelize.close();
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    await sequelize.close();
    process.exit(1);
  }
})();
