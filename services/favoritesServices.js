import User from '../db/models/User.js';
import Recipe from '../db/models/Recipe.js';
import Ingredient from '../db/models/Ingredient.js';
import Category from '../db/models/Category.js';
import Area from '../db/models/Area.js';
import HttpError from '../helpers/HttpError.js';

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
