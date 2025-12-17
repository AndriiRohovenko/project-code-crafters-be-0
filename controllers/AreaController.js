import { getAreas } from '../services/AreaService.js';
import AreaDTO from '../dtos/AreaDTO.js';
import ctrlWrapper from '../helpers/ctrlWrapper.js';

export const getAll = ctrlWrapper(async (req, res) => {
  const areas = await getAreas();
  const areasDTO = areas.map((area) => new AreaDTO(area));
  res.json(areasDTO);
});
