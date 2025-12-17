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
 * tags:
 *   - name: Favorites
 *     description: Favorite recipes of the authenticated user
 */

/**
 * @swagger
 * /api/favorites:
 *   get:
 *     summary: Get a paginated list of the current user's favorite recipes
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: List of favorite recipes with pagination metadata
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PaginatedFavoritesResponse'
 *       401:
 *         description: Unauthorized
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
 *     summary: Add a recipe to favorites
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: recipeId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Recipe ID
 *     responses:
 *       201:
 *         description: Recipe successfully added to favorites
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recipe'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Recipe not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       409:
 *         description: Recipe is already in favorites
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
 *     summary: Remove a recipe from favorites
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: recipeId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Recipe ID
 *     responses:
 *       204:
 *         description: Successfully removed (no response body)
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       400:
 *         description: Recipe is not in favorites
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Recipe not found
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
