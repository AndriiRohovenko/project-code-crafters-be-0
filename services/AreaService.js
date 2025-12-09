import Area from "../db/models/Area.js";

async function getAreas() {
  try {
    return await Area.findAll();
  } catch (error) {
    throw error;
  }
}

export { getAreas };