import express from 'express';
import * as usersControllers from '../controllers/usersControllers.js';
import * as followersController from '../controllers/followersController.js';
import { authenticate } from '../middlewares/authenticate.js';
import validateBody, { validateQuery } from '../helpers/validateBody.js';
import {
  followUserSchema,
  unfollowUserSchema,
  getUsersQuerySchema,
} from '../schemas/usersSchemas.js';
import uploadImage from '../middlewares/upload.js';

const usersRouter = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Отримати список всіх користувачів
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Номер сторінки
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Кількість елементів на сторінці
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Пошуковий запит
 *     responses:
 *       200:
 *         description: Список користувачів з пагінацією
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 page:
 *                   type: integer
 *                 limit:
 *                   type: integer
 *                 total:
 *                   type: integer
 */
usersRouter.get(
  '/',
  validateQuery(getUsersQuerySchema),
  usersControllers.getAllUsers
);

/**
 * @swagger
 * /api/users/current:
 *   get:
 *     summary: Отримати дані поточного авторизованого користувача
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Дані поточного користувача
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Не авторизовано
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
usersRouter.get('/current', authenticate, usersControllers.getCurrentUser);

/**
 * @swagger
 * /api/users/current/following:
 *   get:
 *     summary: Отримати список підписок авторизованого користувача
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Номер сторінки
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 5
 *         description: Кількість елементів на сторінці
 *     responses:
 *       200:
 *         description: Список підписок з пагінацією
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PaginatedFollowingResponse'
 *       401:
 *         description: Не авторизовано
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
usersRouter.get(
  '/current/following',
  authenticate,
  followersController.getFollowing
);

/**
 * @swagger
 * /api/users/follow:
 *   post:
 *     summary: Підписатися на користувача
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FollowRequest'
 *     responses:
 *       200:
 *         description: Успішна підписка
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Followed successfully
 *       400:
 *         description: Невалідні дані
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Не авторизовано
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       409:
 *         description: Вже підписані на цього користувача
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
usersRouter.post(
  '/follow',
  authenticate,
  validateBody(followUserSchema),
  followersController.followUser
);

/**
 * @swagger
 * /api/users/unfollow:
 *   delete:
 *     summary: Відписатися від користувача
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FollowRequest'
 *     responses:
 *       200:
 *         description: Успішна відписка
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unfollowed successfully
 *       400:
 *         description: Невалідні дані
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Не авторизовано
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
usersRouter.delete(
  '/unfollow',
  authenticate,
  validateBody(unfollowUserSchema),
  followersController.unfollowUser
);

/**
 * @swagger
 * /api/users/avatar:
 *   put:
 *     summary: Upload user avatar
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Avatar uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: No file uploaded
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Не авторизовано
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
usersRouter.put(
  '/avatar',
  authenticate,
  uploadImage.single('avatar'),
  usersControllers.updateUserAvatar
);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Отримати користувача по ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID користувача
 *     responses:
 *       200:
 *         description: Дані користувача
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Користувача не знайдено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Не авторизовано
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
usersRouter.get('/:id', usersControllers.getUserById);

/**
 * @swagger
 * /api/users/{id}/followers:
 *   get:
 *     summary: Отримати список підписників користувача
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID користувача
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Номер сторінки
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 5
 *         description: Кількість елементів на сторінці
 *     responses:
 *       200:
 *         description: Список підписників з пагінацією
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PaginatedFollowersResponse'
 *       401:
 *         description: Не авторизовано
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
usersRouter.get(
  '/:id/followers',
  authenticate,
  followersController.getFollowers
);

export default usersRouter;
