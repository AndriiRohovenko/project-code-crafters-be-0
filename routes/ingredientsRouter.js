import express from 'express';
import * as ingredientsController from '../controllers/IngredientsController.js';

const ingredientsRouter = express.Router();

/**
 * @swagger
 * /api/ingredients:
 *   get:
 *     summary: Отримати список всіх інгредієнтів
 *     tags: [Ingredients]
 *     responses:
 *       200:
 *         description: Список інгредієнтів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ingredient'
 */
ingredientsRouter.get('/', ingredientsController.getAll);

export default ingredientsRouter;
