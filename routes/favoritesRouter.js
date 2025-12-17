import { Router } from 'express';
import authenticate from '../middlewares/authenticate.js';
import {
  addFavoriteRecipeController,
  getFavoriteRecipesController,
  removeFavoriteRecipeController,
} from '../controllers/favoritesControllers.js';

const favoritesRouter = Router();

/**
 * @swagger
 * /api/favorites:
 *   get:
 *     summary: Отримати список улюблених рецептів
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Успішно отримано список улюблених рецептів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RecipePreviewDTO'
 *       401:
 *         description: Не авторизований
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
favoritesRouter.get('/', authenticate, getFavoriteRecipesController);

/**
 * @swagger
 * /api/favorites/{recipeId}:
 *   post:
 *     summary: Додати рецепт до улюблених
 *     tags: [Favorites]
 *     parameters:
 *       - in: path
 *         name: recipeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID рецепту для додавання в улюблені
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Рецепт успішно додано до улюблених
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Recipe added to favorites
 *       400:
 *         description: Помилка запиту (наприклад, рецепт вже в улюблених)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Не авторизований
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Рецепт не знайдено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
favoritesRouter.post('/:recipeId', authenticate, addFavoriteRecipeController);

/**
 * @swagger
 * /api/favorites/{recipeId}:
 *   delete:
 *     summary: Видалити рецепт з улюблених
 *     tags: [Favorites]
 *     parameters:
 *       - in: path
 *         name: recipeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID рецепту для видалення з улюблених
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Рецепт успішно видалено з улюблених
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Recipe removed from favorites
 *       400:
 *         description: Помилка запиту (наприклад, рецепт не був в улюблених)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Не авторизований
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Рецепт не знайдено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
favoritesRouter.delete(
  '/:recipeId',
  authenticate,
  removeFavoriteRecipeController
);

export default favoritesRouter;
