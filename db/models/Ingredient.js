import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Ingredient = sequelize.define(
  'ingredient',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'ingredients',
    timestamps: true,
  }
);

export default Ingredient;
