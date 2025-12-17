import {
  addFavoriteRecipeService,
  getFavoriteRecipesService,
  removeFavoriteRecipeService,
} from '../services/favoritesServices.js';
import RecipeDTO from '../dtos/RecipeDTO.js';
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  MIN_LIMIT,
  MIN_PAGE,
} from '../constants/paginationConstants.js';
import ctrlWrapper from '../helpers/ctrlWrapper.js';

/**
 * Get favorite recipes for the authenticated user (with pagination).
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getFavoriteRecipesController = ctrlWrapper(async (req, res) => {
  const rawPage = Number(req.query.page) || DEFAULT_PAGE;
  const rawLimit = Number(req.query.limit) || DEFAULT_LIMIT;

  const page = rawPage < MIN_PAGE ? MIN_PAGE : rawPage;
  const limit = rawLimit < MIN_LIMIT ? MIN_LIMIT : rawLimit;

  const { recipes, totalItems } = await getFavoriteRecipesService(req.user.id, {
    page,
    limit,
  });

  const data = recipes.map((recipe) => new RecipeDTO(recipe));
  const totalPages = totalItems === 0 ? 1 : Math.ceil(totalItems / limit);

  res.json({
    data,
    meta: {
      totalItems,
      totalPages,
      currentPage: page,
      itemsPerPage: limit,
    },
  });
});

/**
 * Add recipe to user's favorites.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const addFavoriteRecipeController = ctrlWrapper(async (req, res) => {
  const { recipeId } = req.params;
  const userId = req.user.id;

  const recipe = await addFavoriteRecipeService(userId, recipeId);

  const dto = new RecipeDTO(recipe);

  res.status(201).json(dto);
});

/**
 * Remove recipe from user's favorites.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {Promise<void>}
 */
export const removeFavoriteRecipeController = ctrlWrapper(async (req, res) => {
  const { recipeId } = req.params;
  const userId = req.user.id;

  await removeFavoriteRecipeService(userId, recipeId);

  res.status(204).send();
});
