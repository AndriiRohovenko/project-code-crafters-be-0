import Joi from 'joi';

// Схема для query параметрів при отриманні списку користувачів
export const getUsersQuerySchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(10),
  search: Joi.string().allow('').trim().max(100).default(''),
});

export const followUserSchema = Joi.object({
  followingId: Joi.number().integer().min(1).required()
});

export const unfollowUserSchema = Joi.object({
  followingId: Joi.number().integer().min(1).required()
});