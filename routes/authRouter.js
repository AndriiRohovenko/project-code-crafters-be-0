import { Router } from 'express';
import {
  createUserController,
  loginUserController,
  logoutUserController,
} from '../controllers/authControllers.js';
import validateBody from '../helpers/validateBody.js';
import { createUserSchema, loginUserSchema } from '../schemas/authSchemas.js';
import authenticate from '../middlewares/authenticate.js';

const authRouter = Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Реєстрація нового користувача
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       201:
 *         description: Користувача успішно зареєстровано
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Невалідні дані або користувач вже існує
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       409:
 *         description: Користувач з таким email вже існує
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
authRouter.post(
  '/register',
  validateBody(createUserSchema),
  createUserController
);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Вхід користувача в систему
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Успішний вхід
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       401:
 *         description: Невірний email або пароль
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
authRouter.post('/login', validateBody(loginUserSchema), loginUserController);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Вихід користувача з системи
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: Успішний вихід
 *       401:
 *         description: Користувач не авторизований
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
authRouter.post('/logout', authenticate, logoutUserController);

export default authRouter;
