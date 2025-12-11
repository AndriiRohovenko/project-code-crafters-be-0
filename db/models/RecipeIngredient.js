import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const RecipeIngredient = sequelize.define(
  'recipe_ingredient',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recipes',
        key: 'id',
      },
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ingredients',
        key: 'id',
      },
    },
    measure: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'recipe_ingredients',
    timestamps: true,
  }
);

export default RecipeIngredient;
