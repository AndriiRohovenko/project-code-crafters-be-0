import { getAreas } from '../services/AreaService.js';
import AreaDTO from '../dtos/AreaDTO.js';

export const getAll = async (req, res, next) => {
  try {
    const areas = await getAreas();
    const areasDTO = areas.map((area) => new AreaDTO(area));
    res.json(areasDTO);
  } catch (error) {
    next(error);
  }
};
