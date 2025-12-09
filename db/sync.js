import sequelize from "./sequelize.js";
import "./models/associations.js";
import Area from "./models/Area.js";

export default async function syncDB() {
  try {
    await sequelize.sync({ alter: true });
    await Area.sync({ alter: true, force: false });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
    throw error;
  }
}
