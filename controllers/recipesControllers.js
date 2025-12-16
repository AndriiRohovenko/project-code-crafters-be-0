import * as RecipesService from '../services/recipesServices.js';
import RecipeDTO from '../dtos/RecipeDTO.js';
import { createRecipeSchema } from '../schemas/recipeSchemas.js';
import HttpError from '../helpers/HttpError.js';
import uploadImageToCloudinary from '../services/cloudinary.js';

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
 * Delete user's own recipe (private endpoint)
 */
export const deleteRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const recipe = await RecipesService.getRecipeById(parseInt(id));

    if (!recipe) {
      throw HttpError(404, 'Recipe not found');
    }

    // Check if user owns the recipe
    if (recipe.userId !== userId) {
      throw HttpError(403, 'You do not have permission to delete this recipe');
    }

    await RecipesService.deleteRecipe(parseInt(id));

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/**
 * Create a new recipe (private endpoint)
 */
export const createRecipe = async (req, res, next) => {
  try {
    // Parse ingredients if it's a string (from FormData)
    if (req.body.ingredients && typeof req.body.ingredients === 'string') {
      try {
        const trimmed = req.body.ingredients.trim();
        if (trimmed) {
          req.body.ingredients = JSON.parse(trimmed);
        } else {
          req.body.ingredients = undefined;
        }
      } catch {
        throw HttpError(
          400,
          `Invalid ingredients format. Must be valid JSON array. Received: ${req.body.ingredients}`
        );
      }
    }

    // Convert numeric string fields to numbers (from FormData)
    if (req.body.categoryId)
      req.body.categoryId = parseInt(req.body.categoryId);
    if (req.body.areaId) req.body.areaId = parseInt(req.body.areaId);
    if (req.body.time) req.body.time = parseInt(req.body.time);

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

    // Upload image to Cloudinary if file is provided
    let thumbUrl = value.thumb;
    if (req.file) {
      const result = await uploadImageToCloudinary(req.file.buffer, 'recipes');
      if (!result || !result.secure_url) {
        throw HttpError(500, 'Failed to upload image to Cloudinary');
      }
      thumbUrl = result.secure_url;
    }

    // Create recipe with uploaded image URL
    const recipe = await RecipesService.createRecipe(
      { ...value, thumb: thumbUrl },
      userId
    );

    const recipeDTO = new RecipeDTO(recipe);

    res.status(201).json({
      status: 'success',
      data: { recipe: recipeDTO },
    });
  } catch (error) {
    next(error);
  }
};
