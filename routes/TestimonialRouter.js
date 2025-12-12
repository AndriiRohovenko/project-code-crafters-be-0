import { Router } from 'express';
import { getAll } from '../controllers/TestimonialController.js';

const testimonialRouter = Router();

/**
 * @swagger
 * /api/testimonials:
 *   get:
 *     summary: Отримати список всіх відгуків
 *     tags: [Testimonials]
 *     responses:
 *       200:
 *         description: Список відгуків користувачів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Testimonial'
 */
testimonialRouter.get('/', getAll);

export default testimonialRouter;
