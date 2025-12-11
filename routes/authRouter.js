import { Router } from 'express';
import {
  createUserController,
  loginUserController,
  logoutUserController,
} from '../controllers/authControllers.js';
import validateBody from '../helpers/validateBody.js';
import { createUserSchema, loginUserSchema } from '../schemas/authSchemas.js';
import authenticate from '../middlewares/authenticate.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(createUserSchema),
  createUserController
);

authRouter.post('/login', validateBody(loginUserSchema), loginUserController);

authRouter.post('/logout', authenticate, logoutUserController);

export default authRouter;
