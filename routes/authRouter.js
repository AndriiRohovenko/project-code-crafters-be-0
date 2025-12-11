import { Router } from "express";
import {
  createUserController,
  loginUserController,
} from "../controllers/authControllers.js";
import validateBody from "../helpers/validateBody.js";
import { createUserSchema, loginUserSchema } from "../schemas/authSchemas.js";

const authRouter = Router();

authRouter.post(
  "/register",
  validateBody(createUserSchema),
  createUserController
);

authRouter.post("/login", validateBody(loginUserSchema), loginUserController);

export default authRouter;
