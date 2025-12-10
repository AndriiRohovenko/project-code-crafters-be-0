import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Area = sequelize.define('area', {
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
  tableName: 'areas',
  timestamps: true
})

export default Area;