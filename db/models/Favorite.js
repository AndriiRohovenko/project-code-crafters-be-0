import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Favorite = sequelize.define(
  'favorite',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recipes',
        key: 'id',
      },
    },
  },
  {
    tableName: 'favorites',
    timestamps: true,
  }
);

export default Favorite;
