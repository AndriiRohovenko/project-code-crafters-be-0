/**
 * @typedef {Object} RecipeIngredient
 * @property {number} id
 * @property {string} name
 * @property {string|null} img
 * @property {string|null} measure
 */

/**
 * Data Transfer Object for Recipe response.
 */
class RecipeDTO {
  /**
   * @param {import('../db/models/Recipe.js').default} recipe - The recipe model instance.
   */
  constructor(recipe) {
    const recipeData = recipe.toJSON ? recipe.toJSON() : recipe;

    /**
     * @type {number}
     */
    this.id = recipeData.id;

    /**
     * @type {string}
     */
    this.title = recipeData.title;

    /**
     * @type {string}
     */
    this.category = recipeData.category;

    /**
     * @type {string}
     */
    this.area = recipeData.area;

    /**
     * @type {string}
     */
    this.instructions = recipeData.instructions;

    /**
     * @type {string}
     */
    this.description = recipeData.description;

    /**
     * @type {string}
     */
    this.thumb = recipeData.thumb;

    /**
     * @type {number}
     */
    this.time = recipeData.time;

    /**
     * @type {number}
     */
    this.categoryId = recipeData.categoryId;

    /**
     * @type {number}
     */
    this.areaId = recipeData.areaId;

    /**
     * @type {{id: number, name: string, avatar: string} | null}
     */
    if (recipeData.owner) {
      this.author = {
        id: recipeData.owner.id,
        name: recipeData.owner.name,
        avatar: recipeData.owner.avatar,
      };
    } else {
      this.author = null;
    }

    /**
     * @type {RecipeIngredient[]}
     */
    if (recipeData.ingredients) {
      this.ingredients = recipeData.ingredients.map((ingredient) => ({
        id: ingredient.id,
        name: ingredient.name,
        img: ingredient.img,
        measure:
          ingredient.recipe_ingredient?.measure ||
          ingredient.RecipeIngredient?.measure ||
          null,
      }));
    } else {
      this.ingredients = [];
    }

    /**
     * @type {number}
     */
    if (typeof recipeData.favoritesCount !== 'undefined') {
      this.favoritesCount = Number(recipeData.favoritesCount) || 0;
    } else if (Array.isArray(recipeData.favoritedBy)) {
      this.favoritesCount = recipeData.favoritedBy.length;
    } else {
      this.favoritesCount = 0;
    }
  }
}

export default RecipeDTO;
