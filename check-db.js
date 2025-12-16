import sequelize from './db/sequelize.js';
import User from './db/models/User.js';
import Area from './db/models/Area.js';
import Category from './db/models/Category.js';
import Ingredient from './db/models/Ingredient.js';
import Recipe from './db/models/Recipe.js';
import Testimonial from './db/models/Testimonial.js';

(async () => {
  try {
    const counts = {
      areas: await Area.count(),
      categories: await Category.count(),
      users: await User.count(),
      ingredients: await Ingredient.count(),
      recipes: await Recipe.count(),
      testimonials: await Testimonial.count()
    };
    console.log('Database records:');
    console.log(JSON.stringify(counts, null, 2));
    await sequelize.close();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
})();
