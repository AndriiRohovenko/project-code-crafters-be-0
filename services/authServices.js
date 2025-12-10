import User from "../db/models/User.js";

/**
 * Знайти користувача по різних критеріях
 * @param {Object} filter - Фільтр для пошуку (id, email, тощо)
 * @returns {Object|null} - Користувач або null
 */
export const findUser = async (filter) => {
  const user = await User.findOne({ where: filter });
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
