import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Category = sequelize.define('category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'categories',
  timestamps: true
});

export default Category;