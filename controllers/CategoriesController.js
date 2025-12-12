import * as CategoryService from '../services/CategoryService.js';
import CategoryDTO from '../dtos/CategoryDTO.js';

export const getAll = async (req, res, next) => {
  try {
    const categories = await CategoryService.getAllCategories();
    const categoriesDTOs = categories.map(
      (category) => new CategoryDTO(category.toJSON())
    );
    res.json(categoriesDTOs);
  } catch (error) {
    next(error);
  }
};
