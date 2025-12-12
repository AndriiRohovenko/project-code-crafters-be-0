import express from "express";
import * as usersControllers from "../controllers/usersControllers.js";
import * as followersController from "../controllers/followersController.js";
import { authenticate } from "../middlewares/authenticate.js";
import validateBody from "../helpers/validateBody.js";
import {followUserSchema, unfollowUserSchema} from "../schemas/usersSchemas.js";

const usersRouter = express.Router();

// GET /api/users - отримати всіх користувачів (тимчасово без авторизації)
usersRouter.get("/", usersControllers.getAllUsers);

// GET /api/users/:id - отримати користувача по ID
usersRouter.get("/:id", authenticate, usersControllers.getUserById);

// GET /api/users/current - отримати поточного користувача
usersRouter.get("/current", authenticate, usersControllers.getCurrentUser);

// GET /api/users/:id/followers - отримати список підписників користувача
usersRouter.get("/:id/followers", authenticate, followersController.getFollowers);

// GET /api/users/current/following - отримати список підписок авторизованного користувача
usersRouter.get("/current/following", authenticate, followersController.getFollowing);

// POST /api/users/follow - додати користувача в список підписок авторизованного користувача
usersRouter.post("/follow", authenticate, validateBody(followUserSchema), followersController.followUser);

// DELETE /api/users/unfollow - видалити користувача зі списку підписок авторизованного користувача
usersRouter.delete("/unfollow", authenticate, validateBody(unfollowUserSchema), followersController.unfollowUser);

export default usersRouter;
