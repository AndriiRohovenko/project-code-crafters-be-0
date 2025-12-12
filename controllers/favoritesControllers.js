import {
  addFavoriteRecipeService,
  getFavoriteRecipesService,
} from '../services/favoritesServices.js';
import RecipeDTO from '../dtos/RecipeDTO.js';

/**
 * Get favorite recipes for the authenticated user.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getFavoriteRecipesController = async (req, res) => {
  const recipes = await getFavoriteRecipesService(req.user.id);

  const recipesDTO = recipes.map((recipe) => new RecipeDTO(recipe));

  res.json(recipesDTO);
};

/**
 * Add recipe to user's favorites.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const addFavoriteRecipeController = async (req, res) => {
  const { recipeId } = req.params;
  const userId = req.user.id;

  const recipe = await addFavoriteRecipeService(userId, recipeId);

  const dto = new RecipeDTO(recipe);

  res.status(201).json(dto);
};
