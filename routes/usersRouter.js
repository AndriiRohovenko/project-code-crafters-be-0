import express from "express";
import * as usersControllers from "../controllers/usersControllers.js";
import { authenticate } from "../middlewares/authenticate.js";

const usersRouter = express.Router();

// GET /api/users - отримати всіх користувачів (тимчасово без авторизації)
usersRouter.get("/", usersControllers.getAllUsers);

// GET /api/users/:id - отримати користувача по ID
usersRouter.get("/:id", authenticate, usersControllers.getUserById);

export default usersRouter;
