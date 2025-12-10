import { Recipe, Ingredient, Category, Area, RecipeIngredient } from "../../db/models/associations.js";
import sequelize from "../../db/sequelize.js";

/**
 * Search recipes by category, ingredient, and area with pagination
 * @param {Object} filters - Search filters
 * @param {number} [filters.categoryId] - Category ID
 * @param {number} [filters.ingredientId] - Ingredient ID
 * @param {number} [filters.areaId] - Area ID
 * @param {number} [filters.page=1] - Page number
 * @param {number} [filters.limit=12] - Items per page
 * @returns {Promise<{recipes: Array, total: number, page: number, totalPages: number}>}
 */
export const searchRecipes = async ({ categoryId, ingredientId, areaId, page = 1, limit = 12 }) => {
    const offset = (page - 1) * limit;

    const where = {};
    const include = [
        {
            model: Category,
            as: "categoryInfo",
            attributes: ["id", "name"]
        },
        {
            model: Area,
            as: "areaInfo",
            attributes: ["id", "name"]
        },
        {
            model: Ingredient,
            as: "ingredients",
            attributes: ["id", "name", "img"],
            through: { attributes: ["measure"] }
        }
    ];

    // Filter by category
    if (categoryId) {
        where.categoryId = categoryId;
    }

    // Filter by area
    if (areaId) {
        where.areaId = areaId;
    }

    // Filter by ingredient - need to use include with required: true
    if (ingredientId) {
        const ingredientInclude = include.find(inc => inc.as === "ingredients");
        ingredientInclude.where = { id: ingredientId };
        ingredientInclude.required = true;
    }

    const { count, rows } = await Recipe.findAndCountAll({
        where,
        include,
        limit: parseInt(limit),
        offset: parseInt(offset),
        distinct: true,
        order: [["createdAt", "DESC"]]
    });

    return {
        recipes: rows,
        total: count,
        page: parseInt(page),
        totalPages: Math.ceil(count / limit)
    };
};

/**
 * Get recipe details by ID
 * @param {number} recipeId - Recipe ID
 * @returns {Promise<Object|null>}
 */
export const getRecipeById = async (recipeId) => {
    const recipe = await Recipe.findByPk(recipeId, {
        include: [
            {
                model: Category,
                as: "categoryInfo",
                attributes: ["id", "name"]
            },
            {
                model: Area,
                as: "areaInfo",
                attributes: ["id", "name"]
            },
            {
                model: Ingredient,
                as: "ingredients",
                attributes: ["id", "name", "img"],
                through: { attributes: ["measure"] }
            }
        ]
    });

    return recipe;
};

/**
 * Get popular recipes based on favorites count
 * @param {number} [limit=4] - Number of recipes to return
 * @returns {Promise<Array>}
 */
export const getPopularRecipes = async (limit = 4) => {
    const recipes = await Recipe.findAll({
        attributes: {
            include: [
                [
                    sequelize.literal(`(
                        SELECT COUNT(*)
                        FROM favorites
                        WHERE favorites.recipeId = recipe.id
                    )`),
                    'favoritesCount'
                ]
            ]
        },
        include: [
            {
                model: Category,
                as: "categoryInfo",
                attributes: ["id", "name"]
            },
            {
                model: Area,
                as: "areaInfo",
                attributes: ["id", "name"]
            },
            {
                model: Ingredient,
                as: "ingredients",
                attributes: ["id", "name", "img"],
                through: { attributes: ["measure"] },
                limit: 5 // Limit ingredients for overview
            }
        ],
        order: [[sequelize.literal('favoritesCount'), 'DESC']],
        limit: parseInt(limit)
    });

    return recipes;
};

/**
 * Create a new recipe
 * @param {Object} recipeData - Recipe data
 * @param {number} userId - User ID who creates the recipe
 * @returns {Promise<Object>}
 */
export const createRecipe = async (recipeData, userId) => {
    const transaction = await sequelize.transaction();

    try {
        const { title, categoryId, areaId, instructions, description, thumb, time, ingredients } = recipeData;

        // Create the recipe
        const recipe = await Recipe.create({
            title,
            categoryId,
            areaId,
            instructions,
            description,
            thumb,
            time,
            userId
        }, { transaction });

        // Add ingredients if provided
        if (ingredients && ingredients.length > 0) {
            const recipeIngredients = ingredients.map(ingredient => ({
                recipeId: recipe.id,
                ingredientId: ingredient.ingredientId,
                measure: ingredient.measure
            }));

            await RecipeIngredient.bulkCreate(recipeIngredients, { transaction });
        }

        await transaction.commit();

        // Fetch the complete recipe with associations
        return await getRecipeById(recipe.id);
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
};
