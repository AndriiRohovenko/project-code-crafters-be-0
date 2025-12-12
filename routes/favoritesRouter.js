import { Router } from 'express';
import authenticate from '../middlewares/authenticate.js';
import {
  addFavoriteRecipeController,
  getFavoriteRecipesController,
} from '../controllers/favoritesControllers.js';

const favoritesRouter = Router();

favoritesRouter.get('/', authenticate, getFavoriteRecipesController);

favoritesRouter.post('/:recipeId', authenticate, addFavoriteRecipeController);

export default favoritesRouter;
