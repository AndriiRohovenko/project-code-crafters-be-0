import { getFavoriteRecipesService } from '../services/favoritesServices.js';
import RecipeDTO from '../dtos/RecipeDTO.js';

/**
 * Get favorite recipes for the authenticated user.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {Promise<void>}
 */
export const getFavoriteRecipesController = async (req, res) => {
  const recipes = await getFavoriteRecipesService(req.user.id);

  const recipesDTO = recipes.map((recipe) => {
    const data = recipe.toJSON();

    const favoritesCount = Array.isArray(data.favoritedBy)
      ? data.favoritedBy.length
      : 0;

    return new RecipeDTO({
      ...data,
      favoritesCount,
    });
  });

  res.json(recipesDTO);
};
