import express from 'express';
import * as usersControllers from '../controllers/usersControllers.js';
import * as followersController from '../controllers/followersController.js';
import { authenticate } from '../middlewares/authenticate.js';
import validateBody from '../helpers/validateBody.js';
import {
  followUserSchema,
  unfollowUserSchema,
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
 *         description: Список користувачів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
usersRouter.get('/', usersControllers.getAllUsers);

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
usersRouter.get('/:id', authenticate, usersControllers.getUserById);

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
 *     responses:
 *       200:
 *         description: Список підписників
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
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

/**
 * @swagger
 * /api/users/current/following:
 *   get:
 *     summary: Отримати список підписок авторизованого користувача
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Список підписок
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
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
 *       201:
 *         description: Успішна підписка
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
 */

usersRouter.put(
  '/avatar',
  authenticate,
  uploadImage.single('avatar'),
  usersControllers.updateUserAvatar
);

export default usersRouter;
