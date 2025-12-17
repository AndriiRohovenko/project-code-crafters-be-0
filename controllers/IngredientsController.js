import * as ingredientsService from '../services/ingredientsServices.js';
import IngredientDTO from '../dtos/IngredientDTO.js';
import ctrlWrapper from '../helpers/ctrlWrapper.js';

export const getAll = ctrlWrapper(async (req, res) => {
  const ingredients = await ingredientsService.getAllIngredients();
  const ingredientsDTOs = ingredients.map(
    (ingredient) => new IngredientDTO(ingredient)
  );
  res.json(ingredientsDTOs);
});
