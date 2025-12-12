import { Router } from 'express';
// import validateBody from '../helpers/validateBody.js';
import authenticate from '../middlewares/authenticate.js';
import { getFavoriteRecipesController } from '../controllers/favoritesControllers.js';

const favoritesRouter = Router();

favoritesRouter.get('/', authenticate, getFavoriteRecipesController);

export default favoritesRouter;
