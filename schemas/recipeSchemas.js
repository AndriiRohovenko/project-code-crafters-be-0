import Joi from 'joi';

export const createRecipeSchema = Joi.object({
  title: Joi.string().min(3).max(255).required().messages({
    'string.empty': 'Title is required',
    'string.min': 'Title must be at least 3 characters long',
    'string.max': 'Title must not exceed 255 characters',
  }),
  categoryId: Joi.number().integer().positive().optional().messages({
    'number.base': 'Category ID must be a number',
    'number.positive': 'Category ID must be positive',
  }),
  areaId: Joi.number().integer().positive().optional().messages({
    'number.base': 'Area ID must be a number',
    'number.positive': 'Area ID must be positive',
  }),
  instructions: Joi.string().min(10).required().messages({
    'string.empty': 'Instructions are required',
    'string.min': 'Instructions must be at least 10 characters long',
  }),
  description: Joi.string().max(1000).optional().allow('').messages({
    'string.max': 'Description must not exceed 1000 characters',
  }),
  thumb: Joi.string().uri().optional().allow('').messages({
    'string.uri': 'Thumb must be a valid URL',
  }),
  time: Joi.number().integer().positive().optional().messages({
    'number.base': 'Time must be a number',
    'number.positive': 'Time must be positive',
  }),
  ingredients: Joi.array()
    .items(
      Joi.object({
        ingredientId: Joi.number().integer().positive().required().messages({
          'number.base': 'Ingredient ID must be a number',
          'number.positive': 'Ingredient ID must be positive',
          'any.required': 'Ingredient ID is required',
        }),
        measure: Joi.string().max(100).optional().allow('').messages({
          'string.max': 'Measure must not exceed 100 characters',
        }),
      })
    )
    .min(1)
    .optional()
    .messages({
      'array.min': 'At least one ingredient is required',
    }),
});
