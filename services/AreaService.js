import Area from '../db/models/Area.js';

async function getAreas() {
  return await Area.findAll({
    order: [['name', 'ASC']],
  });
}

export { getAreas };
