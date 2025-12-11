import Joi from "joi";
import { emailRegExp } from "../db/constants/authConstants.js";

export const createUserSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Name must be between 2 and 50 characters",
    "string.max": "Name must be between 2 and 50 characters",
    "any.required": "Name is required",
  }),

  email: Joi.string().min(5).max(254).pattern(emailRegExp).required().messages({
    "string.empty": "Email is required",
    "string.min": "Email must be between 5 and 254 characters",
    "string.max": "Email must be between 5 and 254 characters",
    "string.pattern.base": "Email has invalid format",
    "any.required": "Email is required",
  }),

  password: Joi.string().min(6).max(32).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 6 characters long",
    "string.max": "Password must be less than 32 characters",
    "any.required": "Password is required",
  }),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().min(5).max(254).pattern(emailRegExp).required().messages({
    "string.empty": "Email is required",
    "string.min": "Email must be between 5 and 254 characters",
    "string.max": "Email must be between 5 and 254 characters",
    "string.pattern.base": "Email has invalid format",
    "any.required": "Email is required",
  }),

  password: Joi.string().min(6).max(32).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 6 characters long",
    "string.max": "Password must be less than 32 characters",
    "any.required": "Password is required",
  }),
});
