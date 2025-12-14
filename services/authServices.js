import bcrypt from 'bcryptjs';
import HttpError from '../helpers/HttpError.js';
import User from '../db/models/User.js';
import { createToken } from '../helpers/jwt.js';
import sequelize from '../db/sequelize.js';

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
 * Generate JWT token for a user and persist it in DB.
 * Must be executed inside an active transaction.
 *
 * @param {Object} user - Sequelize user instance
 * @param {import('sequelize').Transaction} transaction - Active Sequelize transaction
 * @returns {Promise<string>} - Generated JWT token
 * @throws {HttpError} If token generation or persistence fails
 * @private
 */
const issueAuthToken = async (user, transaction) => {
  const payload = { id: user.id };

  let token;
  try {
    token = createToken(payload);
  } catch {
    throw HttpError(500, 'Token generation failed');
  }

  await user.update({ token }, { transaction });

  return token;
};

/**
 * Create a new user and issue an authentication token.
 * User creation and token persistence are executed atomically
 * within a database transaction.
 *
 * @param {Object} userData - User registration data
 * @returns {Promise<{ token: string }>} - Auth token
 * @throws {HttpError} If email already exists or token issuance fails
 */
export const createUserService = async (userData) => {
  return sequelize.transaction(async (transaction) => {
    const existingUser = await findUserService(
      { email: userData.email },
      { transaction }
    );

    if (existingUser) {
      throw HttpError(409, 'Email already in use');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await User.create(
      { ...userData, password: hashedPassword },
      { transaction }
    );

    const token = await issueAuthToken(user, transaction);

    return { token };
  });
};

/**
 * Login user and issue auth token.
 *
 * @param {Object} credentials - User login data
 * @param {string} credentials.email - User email
 * @param {string} credentials.password - User password
 * @returns {Promise<{ token: string }>} - Auth token
 */
export const loginUserService = async ({ email, password }) => {
  const user = await findUserService({ email });

  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const token = await issueAuthToken(user);

  return { token };
};

/**
 * Logout user by clearing their authentication token.
 *
 * @param {Object} user - Sequelize user instance
 * @returns {Promise<boolean>} - Returns true when logout is completed
 */
export const logoutUserService = async (user) => {
  await user.update({ token: null });

  return true;
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
