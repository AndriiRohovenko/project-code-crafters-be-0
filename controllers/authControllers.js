import UserDTO from '../dtos/UserDTO.js';
import { normalizeEmail } from '../helpers/normalizeEmail.js';
import {
  createUserService,
  loginUserService,
  logoutUserService,
} from '../services/authServices.js';

/**
 * Create a new user.
 *
 * Normalizes the email, delegates user creation to the service layer,
 * and returns a sanitized DTO representation of the created user.
 *
 * @param {import("express").Request} req - Express request object
 * @param {import("express").Response} res - Express response object
 * @returns {Promise<void>}
 */
export const createUserController = async (req, res) => {
  const { email } = req.body;
  const normalizedEmail = normalizeEmail(email);

  const user = await createUserService({
    ...req.body,
    email: normalizedEmail,
  });

  const userDto = UserDTO.fromModel(user);

  return res.status(201).json({
    user: userDto,
  });
};

/**
 * Login user.
 *
 * Normalizes the email, validates credentials through the service layer,
 * generates a JWT token, updates the user record, and returns a DTO
 * together with the authentication token.
 *
 * @param {import("express").Request} req - Express request object
 * @param {import("express").Response} res - Express response object
 * @returns {Promise<void>}
 */
export const loginUserController = async (req, res) => {
  const { email } = req.body;
  const normalizedEmail = normalizeEmail(email);

  const { user, token } = await loginUserService({
    ...req.body,
    email: normalizedEmail,
  });

  const userDto = UserDTO.fromModel(user);

  res.json({ user: userDto, token });
};

/**
 * Logout user
 *
 * Clears the authentication token of the currently authenticated user.
 *
 * @param {Object} req - Express request object
 * @param {Object} req.user - Authenticated user instance injected by middleware
 * @param {Object} res - Express response object
 * @returns {void} - Responds with HTTP 204 No Content on success
 */
export const logoutUserController = async (req, res) => {
  await logoutUserService(req.user);

  res.status(204).send();
};
