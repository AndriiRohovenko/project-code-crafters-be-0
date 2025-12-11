/**
 * Data Transfer Object for Ingredient response.
 */
class IngredientDTO {
  /**
   * @param {Object} ingredient - The ingredient model instance or object.
   * @param {number} ingredient.id - The unique identifier.
   * @param {string} ingredient.name - The name of the ingredient.
   * @param {string} [ingredient.img] - The image URL of the ingredient.
   */
  constructor({ id, name, img }) {
    /**
     * @type {number}
     */
    this.id = id;

    /**
     * @type {string}
     */
    this.name = name;

    /**
     * @type {string|null}
     */
    this.img = img || null;
  }
}

export default IngredientDTO;
