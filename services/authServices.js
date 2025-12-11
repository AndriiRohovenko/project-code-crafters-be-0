import bcrypt from "bcryptjs";
import HttpError from "../helpers/HttpError.js";
import User from "../db/models/User.js";

/**
 * Find a user by the provided filter criteria.
 *
 * @param {Object} filter - Search criteria (e.g., { id }, { email }, etc.).
 * @param {Object} [options={}] - Additional Sequelize query options
 *                                (e.g., attributes, include, order).
 * @returns {Promise<Object|null>} - The found user instance or null if not found.
 */
export const findUserService = async (filter, options = {}) => {
  const user = await User.findOne({ where: filter, ...options });
  return user;
};

/**
 * Create a new user
 * @param {Object} userData - User registration data
 * @returns {Object} - Created user
 */
export const createUserService = async (userData) => {
  const existingUser = await findUserService({ email: userData.email });

  if (existingUser) {
    throw HttpError(409, "Email already in use");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const user = await User.create({
    ...userData,
    password: hashedPassword,
  });

  return user;
};

/**
 * Створити нового користувача
 * @param {Object} userData - Дані користувача
 * @returns {Object} - Створений користувач
 */
export const createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};

/**
 * Оновити користувача
 * @param {number} id - ID користувача
 * @param {Object} updateData - Дані для оновлення
 * @returns {Object} - Оновлений користувач
 */
export const updateUser = async (id, updateData) => {
  const user = await User.findByPk(id);
  if (!user) return null;

  await user.update(updateData);
  return user;
};
