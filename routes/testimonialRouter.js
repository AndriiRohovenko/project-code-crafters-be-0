import { Router } from "express";
import { getAll } from "../controllers/TestimonialController.js";

const testimonialRouter = Router();

testimonialRouter.get("/", getAll);

export default testimonialRouter;
