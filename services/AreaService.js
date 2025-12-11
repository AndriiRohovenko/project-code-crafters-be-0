import Area from '../db/models/Area.js';

async function getAreas() {
  return await Area.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });
}

export { getAreas };
