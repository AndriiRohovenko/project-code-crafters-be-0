import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Testimonial = sequelize.define(
  'testimonial',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    testimonial: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: 'testimonials',
    timestamps: true,
  }
);

export default Testimonial;
