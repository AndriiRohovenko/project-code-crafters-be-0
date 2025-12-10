/**
 * Data Transfer Object for Recipe response.
 */
class RecipeDTO {
    /**
     * @param {Object} recipe - The recipe model instance or object.
     */
    constructor(recipe) {
        const recipeData = recipe.toJSON ? recipe.toJSON() : recipe;

        this.id = recipeData.id;
        this.title = recipeData.title;
        this.category = recipeData.category;
        this.area = recipeData.area;
        this.instructions = recipeData.instructions;
        this.description = recipeData.description;
        this.thumb = recipeData.thumb;
        this.time = recipeData.time;

        // Include related data if available
        if (recipeData.categoryInfo) {
            this.categoryInfo = {
                id: recipeData.categoryInfo.id,
                name: recipeData.categoryInfo.name
            };
        }

        if (recipeData.areaInfo) {
            this.areaInfo = {
                id: recipeData.areaInfo.id,
                name: recipeData.areaInfo.name
            };
        }

        if (recipeData.ingredients) {
            this.ingredients = recipeData.ingredients.map(ingredient => ({
                id: ingredient.id,
                name: ingredient.name,
                img: ingredient.img,
                measure: ingredient.recipe_ingredient?.measure || ingredient.RecipeIngredient?.measure || null
            }));
        }

        // Include favorites count if available (for popular recipes)
        if (recipeData.favoritesCount !== undefined) {
            this.favoritesCount = parseInt(recipeData.favoritesCount) || 0;
        }
    }
}

export default RecipeDTO;
