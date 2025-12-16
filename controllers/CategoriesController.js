import * as CategoryService from '../services/CategoryService.js';
import CategoryDTO from '../dtos/CategoryDTO.js';
import ctrlWrapper from '../helpers/ctrlWrapper.js';

export const getAll = ctrlWrapper(async (req, res) => {
  const categories = await CategoryService.getAllCategories();
  const categoriesDTOs = categories.map(
    (category) => new CategoryDTO(category.toJSON())
  );
  res.json(categoriesDTOs);
});
