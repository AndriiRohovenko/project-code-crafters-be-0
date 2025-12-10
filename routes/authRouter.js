import { Router } from "express";
import { createUserController } from "../controllers/authControllers.js";
import validateBody from "../helpers/validateBody.js";
import { createUserSchema } from "../schemas/authSchemas.js";

const authRouter = Router();

authRouter.post(
  "/register",
  validateBody(createUserSchema),
  createUserController
);

export default authRouter;
