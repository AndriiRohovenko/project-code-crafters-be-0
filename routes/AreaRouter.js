import { Router } from 'express';
import { getAll } from '../controllers/AreaController.js';

const areaRouter = Router();

/**
 * @swagger
 * /api/areas:
 *   get:
 *     summary: Отримати список всіх регіонів кухонь
 *     tags: [Areas]
 *     responses:
 *       200:
 *         description: Список регіонів кухонь
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Area'
 */
areaRouter.get('/', getAll);

export default areaRouter;
