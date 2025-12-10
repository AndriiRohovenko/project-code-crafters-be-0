import express from "express";
import * as RecipesController from "../controllers/recipesControllers.js";

const recipesRouter = express.Router();

// Public endpoints
recipesRouter.get("/search", RecipesController.searchRecipes);
recipesRouter.get("/popular", RecipesController.getPopularRecipes);
recipesRouter.get("/:id", RecipesController.getRecipeById);

export default recipesRouter;
