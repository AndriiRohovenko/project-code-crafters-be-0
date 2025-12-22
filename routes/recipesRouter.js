import express from 'express';
import * as RecipesController from '../controllers/recipesControllers.js';
import { authenticate } from '../middlewares/authenticate.js';
import uploadImage from '../middlewares/upload.js';

const recipesRouter = express.Router();

/**
 * @swagger
 * /api/recipes/search:
 *   get:
 *     summary: Пошук рецептів за запитом
 *     tags: [Recipes]
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         description: Пошуковий запит
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: integer
 *         description: ID категорії для фільтрації
 *       - in: query
 *         name: areaId
 *         schema:
 *           type: integer
 *         description: ID регіону кухні для фільтрації
 *       - in: query
 *         name: userId
 *         schema:
 *           type: integer
 *         description: ID користувача для фільтрації
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
 *     responses:
 *       200:
 *         description: Список рецептів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recipe'
 */
recipesRouter.get('/search', RecipesController.searchRecipes);

/**
 * @swagger
 * /api/recipes/popular:
 *   get:
 *     summary: Отримати популярні рецепти
 *     tags: [Recipes]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Кількість рецептів
 *     responses:
 *       200:
 *         description: Список популярних рецептів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recipe'
 */
recipesRouter.get('/popular', RecipesController.getPopularRecipes);

/**
 * @swagger
 * /api/recipes/my-recipes:
 *   get:
 *     summary: Отримати власні рецепти користувача
 *     tags: [Recipes]
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
 *           default: 10
 *         description: Кількість елементів на сторінці
 *     responses:
 *       200:
 *         description: Список власних рецептів користувача
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 recipes:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Recipe'
 *                 total:
 *                   type: integer
 *                 page:
 *                   type: integer
 *                 totalPages:
 *                   type: integer
 *       401:
 *         description: Не авторизовано
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
recipesRouter.get(
  '/my-recipes',
  authenticate,
  RecipesController.getUserRecipes
);

/**
 * @swagger
 * /api/recipes/{id}:
 *   get:
 *     summary: Отримати рецепт по ID
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID рецепта
 *     responses:
 *       200:
 *         description: Дані рецепта
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recipe'
 *       404:
 *         description: Рецепт не знайдено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   delete:
 *     summary: Видалити власний рецепт
 *     tags: [Recipes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID рецепта
 *     responses:
 *       204:
 *         description: Рецепт успішно видалено
 *       401:
 *         description: Не авторизовано
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Немає прав для видалення цього рецепту
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
recipesRouter.get('/:id', RecipesController.getRecipeById);
recipesRouter.delete('/:id', authenticate, RecipesController.deleteRecipe);

/**
 * @swagger
 * /api/recipes:
 *   post:
 *     summary: Створити новий рецепт
 *     tags: [Recipes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - categoryId
 *               - instructions
 *               - ingredients
 *             properties:
 *               title:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 255
 *                 description: Назва рецепта
 *               image:
 *                 type: string
 *                 description: URL зображення рецепта
 *               categoryId:
 *                 type: integer
 *                 description: ID категорії рецепта
 *               areaId:
 *                 type: integer
 *                 description: ID регіону кухні
 *               instructions:
 *                 type: string
 *                 minLength: 10
 *                 description: Інструкції приготування
 *                 example: "Cook pasta until al dente. Fry bacon until crispy. Mix pasta with bacon and eggs."
 *               description:
 *                 type: string
 *                 maxLength: 1000
 *                 description: Опис рецепта
 *                 example: "Classic Italian pasta dish with creamy sauce"
 *               thumb:
 *                 type: string
 *                 format: binary
 *                 description: Файл зображення рецепта (JPG, PNG, max 5MB)
 *               time:
 *                 type: integer
 *                 minimum: 1
 *                 description: Час приготування (хвилини)
 *                 example: 30
 *               ingredients:
 *                 type: string
 *                 description: JSON масив інгредієнтів (stringified). Кожен інгредієнт має містити ingredientId та measure
 *                 example: '[{"ingredientId":5,"measure":"400g"},{"ingredientId":10,"measure":"200g"}]'
 *     responses:
 *       201:
 *         description: Рецепт успішно створено
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     recipe:
 *                       $ref: '#/components/schemas/Recipe'
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
recipesRouter.post(
  '/',
  authenticate,
  uploadImage.single('thumb'),
  RecipesController.createRecipe
);

export default recipesRouter;
