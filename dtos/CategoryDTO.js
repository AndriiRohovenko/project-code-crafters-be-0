export default class CategoryDTO {
    constructor(category) {
        /** @type {string} */
        this.id = category.id;
        /** @type {string} */
        this.name = category.name;
    }
}
