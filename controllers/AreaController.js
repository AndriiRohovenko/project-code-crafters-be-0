import { getAreas } from "../services/AreaService.js";
import HttpError from "../helpers/HttpError.js";

export const getAll = async (req, res, next) => {
  try {
    const areas = await getAreas();
    res.json(areas);
  } catch (error) {
    next(HttpError(500));
  }
}