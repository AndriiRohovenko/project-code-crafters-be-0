import User from './User.js';
import Recipe from './Recipe.js';
import Ingredient from './Ingredient.js';
import RecipeIngredient from './RecipeIngredient.js';
import Testimonial from './Testimonial.js';
import Follower from './Follower.js';
import Favorite from './Favorite.js';
import Category from './Category.js';
import Area from './Area.js';

// Category -> Recipe (one-to-many)
Category.hasMany(Recipe, {
  foreignKey: 'categoryId',
  as: 'recipes',
  onDelete: 'SET NULL',
});

Recipe.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'categoryInfo',
});

// Area -> Recipe (one-to-many)
Area.hasMany(Recipe, {
  foreignKey: 'areaId',
  as: 'recipes',
  onDelete: 'SET NULL',
});

Recipe.belongsTo(Area, {
  foreignKey: 'areaId',
  as: 'areaInfo',
});

// User -> Recipe (one-to-many)
User.hasMany(Recipe, {
  foreignKey: 'userId',
  as: 'recipes',
  onDelete: 'SET NULL',
});

Recipe.belongsTo(User, {
  foreignKey: 'userId',
  as: 'owner',
});

// User -> Testimonial (one-to-many)
User.hasMany(Testimonial, {
  foreignKey: 'ownerId',
  as: 'testimonials',
  onDelete: 'CASCADE',
});

Testimonial.belongsTo(User, {
  foreignKey: 'ownerId',
  as: 'owner',
});

// Recipe <-> Ingredient (many-to-many)
Recipe.belongsToMany(Ingredient, {
  through: RecipeIngredient,
  foreignKey: 'recipeId',
  otherKey: 'ingredientId',
  as: 'ingredients',
});

Ingredient.belongsToMany(Recipe, {
  through: RecipeIngredient,
  foreignKey: 'ingredientId',
  otherKey: 'recipeId',
  as: 'recipes',
});

// User -> Follower (self-referencing many-to-many)
User.belongsToMany(User, {
  through: Follower,
  as: 'followers',
  foreignKey: 'userId',
  otherKey: 'followerId',
});

User.belongsToMany(User, {
  through: Follower,
  as: 'following',
  foreignKey: 'followerId',
  otherKey: 'userId',
});

// User <-> Recipe through Favorites (many-to-many)
User.belongsToMany(Recipe, {
  through: Favorite,
  foreignKey: 'userId',
  otherKey: 'recipeId',
  as: 'favoriteRecipes',
});

Recipe.belongsToMany(User, {
  through: Favorite,
  foreignKey: 'recipeId',
  otherKey: 'userId',
  as: 'favoritedBy',
});

// Follower -> User (follower user)
Follower.belongsTo(User, {
  foreignKey: "followerId",
  as: "followerUser"
});

// Follower -> User (user being followed)
Follower.belongsTo(User, {
  foreignKey: "userId",
  as: "followedUser"
});


export { User, Recipe, Ingredient, RecipeIngredient, Testimonial, Follower, Favorite, Category, Area };

