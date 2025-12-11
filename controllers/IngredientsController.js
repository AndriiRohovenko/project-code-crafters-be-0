import * as ingredientsService from '../services/ingredientsServices.js';
import IngredientDTO from '../dtos/IngredientDTO.js';

export const getAll = async (req, res, next) => {
  try {
    const ingredients = await ingredientsService.getAllIngredients();
    const ingredientsDTOs = ingredients.map(
      (ingredient) => new IngredientDTO(ingredient)
    );
    res.json(ingredientsDTOs);
  } catch (error) {
    next(error);
  }
};
