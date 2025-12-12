import User from '../db/models/User.js';
import Recipe from '../db/models/Recipe.js';
import Ingredient from '../db/models/Ingredient.js';
import Category from '../db/models/Category.js';
import Area from '../db/models/Area.js';
import HttpError from '../helpers/HttpError.js';
import Favorite from '../db/models/Favorite.js';

/**
 * Get all favorite recipes for a specific user with related data.
 *
 * @param {number} userId - ID of the user
 * @returns {Promise<Array>} - List of favorite recipes with ingredients
 */
export const getFavoriteRecipesService = async (userId) => {
  const user = await User.findByPk(userId, {
    include: [
      {
        model: Recipe,
        as: 'favoriteRecipes',
        include: [
          {
            model: Ingredient,
            as: 'ingredients',
            through: {
              attributes: ['measure'],
            },
          },
          {
            model: Category,
            as: 'categoryInfo',
          },
          {
            model: Area,
            as: 'areaInfo',
          },
          {
            model: User,
            as: 'favoritedBy',
            attributes: ['id'],
            through: { attributes: [] },
          },
        ],
      },
    ],
  });

  if (!user) {
    throw HttpError(404, 'User not found');
  }

  return user.favoriteRecipes;
};

/**
 * Add recipe to user's favorites.
 *
 * @param {number} userId
 * @param {number} recipeId
 * @returns {Promise<Recipe>}
 */
export const addFavoriteRecipeService = async (userId, recipeId) => {
  const recipe = await Recipe.findByPk(recipeId);

  if (!recipe) {
    throw HttpError(404, 'Recipe not found');
  }

  const existing = await Favorite.findOne({
    where: { userId, recipeId },
  });

  if (existing) {
    throw HttpError(409, 'Recipe already in favorites');
  }

  await Favorite.create({ userId, recipeId });

  const updatedRecipe = await Recipe.findByPk(recipeId, {
    include: [
      {
        model: Ingredient,
        as: 'ingredients',
        through: { attributes: ['measure'] },
      },
      {
        model: Category,
        as: 'categoryInfo',
      },
      {
        model: Area,
        as: 'areaInfo',
      },
      {
        model: User,
        as: 'favoritedBy',
        attributes: ['id'],
        through: { attributes: [] },
      },
    ],
  });

  return updatedRecipe;
};

/**
 * Remove recipe from user's favorites.
 *
 * @param {number} userId
 * @param {number|string} recipeId
 * @returns {Promise<Object>} - The removed recipe model
 */
export const removeFavoriteRecipeService = async (userId, recipeId) => {
  const recipe = await Recipe.findByPk(recipeId);

  if (!recipe) {
    throw HttpError(404, 'Recipe not found');
  }

  const favoriteEntry = await Favorite.findOne({
    where: { userId, recipeId },
  });

  if (!favoriteEntry) {
    throw HttpError(400, 'Recipe is not in favorites');
  }

  await favoriteEntry.destroy();

  return recipe;
};
