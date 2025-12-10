import express from "express";
import * as RecipesController from "../controllers/recipesControllers.js";
import { authenticate } from "../middlewares/authenticate.js";

const recipesRouter = express.Router();

// Public endpoints
recipesRouter.get("/search", RecipesController.searchRecipes);
recipesRouter.get("/popular", RecipesController.getPopularRecipes);
recipesRouter.get("/:id", RecipesController.getRecipeById);

// Private endpoints
recipesRouter.post("/", authenticate, RecipesController.createRecipe);

export default recipesRouter;
