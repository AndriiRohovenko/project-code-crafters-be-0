import express from 'express';
import * as CategoriesController from '../controllers/CategoriesController.js';

const categoriesRouter = express.Router();

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Отримати список всіх категорій рецептів
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Список категорій
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
categoriesRouter.get('/', CategoriesController.getAll);

export default categoriesRouter;
