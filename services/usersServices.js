import User from "../db/models/User.js";
import { Op } from "sequelize";

/**
 * Отримати всіх користувачів з пагінацією та фільтрами
 * @param {Object} options - Опції запиту
 * @param {number} options.page - Номер сторінки (за замовчуванням 1)
 * @param {number} options.limit - Кількість на сторінці (за замовчуванням 10)
 * @param {string} options.search - Пошук по імені або email
 * @returns {Object} - Список користувачів та метадані пагінації
 */
export const getAllUsers = async ({ page = 1, limit = 10, search = "" }) => {
  const offset = (page - 1) * limit;

  // Умови пошуку
  const whereClause = search
    ? {
        [Op.or]: [
          { name: { [Op.iLike]: `%${search}%` } },
          { email: { [Op.iLike]: `%${search}%` } }
        ]
      }
    : {};

  // Запит до БД
  const { count, rows } = await User.findAndCountAll({
    where: whereClause,
    attributes: { exclude: ["password", "token"] }, // Не повертаємо паролі
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [["createdAt", "DESC"]]
  });

  // Метадані пагінації
  const totalPages = Math.ceil(count / limit);

  return {
    users: rows,
    pagination: {
      currentPage: parseInt(page),
      totalPages,
      totalItems: count,
      itemsPerPage: parseInt(limit),
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  };
};

/**
 * Отримати користувача по ID
 * @param {number} id - ID користувача
 * @returns {Object} - Користувач
 */
export const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ["password", "token"] }
  });

  return user;
};
