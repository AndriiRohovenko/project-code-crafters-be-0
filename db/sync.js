import sequelize from "./sequelize.js";
import "./models/associations.js";
import Area from "./models/Area.js";

export default async function syncDB() {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
    throw error;
  }
}
