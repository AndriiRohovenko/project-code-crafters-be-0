import express from "express";
import * as ingredientsController from "../controllers/IngredientsController.js";

const ingredientsRouter = express.Router();

ingredientsRouter.get("/", ingredientsController.getAll);

export default ingredientsRouter;
