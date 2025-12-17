import { normalizeEmail } from '../helpers/normalizeEmail.js';
import {
  createUserService,
  loginUserService,
  logoutUserService,
} from '../services/authServices.js';
import ctrlWrapper from '../helpers/ctrlWrapper.js';

/**
 * Create a new user.
 *
 * Normalizes the email, delegates user creation to the service layer,
 * and returns only the authentication token.
 *
 * @param {import("express").Request} req - Express request object
 * @param {import("express").Response} res - Express response object
 * @returns {Promise<void>}
 */
export const createUserController = ctrlWrapper(async (req, res) => {
  const { email } = req.body;
  const normalizedEmail = normalizeEmail(email);

  const { token } = await createUserService({
    ...req.body,
    email: normalizedEmail,
  });

  return res.status(201).json({ token });
});

/**
 * Login user.
 *
 * Normalizes the email, validates credentials through the service layer,
 * and returns only the authentication token.
 *
 * @param {import("express").Request} req - Express request object
 * @param {import("express").Response} res - Express response object
 * @returns {Promise<void>}
 */
export const loginUserController = ctrlWrapper(async (req, res) => {
  const { email } = req.body;
  const normalizedEmail = normalizeEmail(email);

  const { token } = await loginUserService({
    ...req.body,
    email: normalizedEmail,
  });

  res.json({ token });
});

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
export const logoutUserController = ctrlWrapper(async (req, res) => {
  await logoutUserService(req.user);

  res.status(204).send();
});
