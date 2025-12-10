import Ingredient from "../db/models/Ingredient.js";

export const getAllIngredients = async () => {
    const ingredients = await Ingredient.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] }
    });
    return ingredients;
};
