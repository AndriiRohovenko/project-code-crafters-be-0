import { Router } from "express";
import { getAll } from "../controllers/AreaController.js";

const areaRouter = Router();

areaRouter.get("/", getAll);

export default areaRouter;
