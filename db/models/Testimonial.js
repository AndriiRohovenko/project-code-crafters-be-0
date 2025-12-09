import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Testimonial = sequelize.define('testimonial', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  owner: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  testimonial: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false
})

export default Testimonial;