import express from 'express';
import * as CategoriesController from '../controllers/CategoriesController.js';

const categoriesRouter = express.Router();

categoriesRouter.get('/', CategoriesController.getAll);

export default categoriesRouter;
