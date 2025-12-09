import { getAreas } from "../services/AreaService.js";

export const getAll = async (req, res) => {
  const areas = await getAreas();
  res.json(areas);
}