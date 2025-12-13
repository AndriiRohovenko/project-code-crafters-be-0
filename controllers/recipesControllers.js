import * as RecipesService from '../services/recipesServices.js';
import RecipeDTO from '../dtos/RecipeDTO.js';
import { createRecipeSchema } from '../schemas/recipeSchemas.js';
import HttpError from '../helpers/HttpError.js';

/**
 * Search recipes by category, ingredient, and area with pagination
 */
export const searchRecipes = async (req, res, next) => {
  try {
    const {
      categoryId,
      ingredientId,
      areaId,
      page = 1,
      limit = 12,
    } = req.query;

    const result = await RecipesService.searchRecipes({
      categoryId: categoryId ? parseInt(categoryId) : undefined,
      ingredientId: ingredientId ? parseInt(ingredientId) : undefined,
      areaId: areaId ? parseInt(areaId) : undefined,
      page: parseInt(page),
      limit: parseInt(limit),
    });

    const recipesDTOs = result.recipes.map((recipe) => new RecipeDTO(recipe));

    res.json({
      recipes: recipesDTOs,
      total: result.total,
      page: result.page,
      totalPages: result.totalPages,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get recipe details by ID
 */
export const getRecipeById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const recipe = await RecipesService.getRecipeById(parseInt(id));

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    const recipeDTO = new RecipeDTO(recipe);

    res.json(recipeDTO);
  } catch (error) {
    next(error);
  }
};

/**
 * Get popular recipes based on favorites count
 */
export const getPopularRecipes = async (req, res, next) => {
  try {
    const { limit = 4 } = req.query;

    const recipes = await RecipesService.getPopularRecipes(parseInt(limit));

    const recipesDTOs = recipes.map((recipe) => new RecipeDTO(recipe));

    res.json(recipesDTOs);
  } catch (error) {
    next(error);
  }
};

/**
 * Get user's own recipes (private endpoint)
 */
export const getUserRecipes = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const userId = req.user.id;

    const result = await RecipesService.getUserRecipes({
      userId,
      page: parseInt(page),
      limit: parseInt(limit),
    });

    const recipesDTOs = result.recipes.map((recipe) => new RecipeDTO(recipe));

    res.json({
      recipes: recipesDTOs,
      total: result.total,
      page: result.page,
      totalPages: result.totalPages,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create a new recipe (private endpoint)
 */
export const createRecipe = async (req, res, next) => {
  try {
    const { error, value } = createRecipeSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join(', ');
      throw HttpError(400, errorMessage);
    }

    // Get user ID from authenticated request
    const userId = req.user.id;

    // Create recipe
    const recipe = await RecipesService.createRecipe(value, userId);

    const recipeDTO = new RecipeDTO(recipe);

    res.status(201).json({
      status: 'success',
      data: { recipe: recipeDTO },
    });
  } catch (error) {
    next(error);
  }
};
