import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';
import { emailRegExp } from '../constants/authConstants.js';

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is required',
        },
        len: {
          args: [2, 50],
          msg: 'Name must be between 2 and 50 characters',
        },
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email in use',
      },
      validate: {
        notEmpty: {
          msg: 'Email is required',
        },
        len: {
          args: [5, 254],
          msg: 'Email must be between 5 and 254 characters',
        },
        is: {
          args: emailRegExp,
          msg: 'Email has invalid format',
        },
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password is required',
        },
        len: {
          args: [60, 100],
          msg: 'Password hash has invalid length',
        },
      },
    },

    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [0, 255],
          msg: 'Avatar URL must be at most 255 characters',
        },
        isUrl: {
          msg: 'Avatar must be a valid URL',
        },
      },
    },

    token: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      validate: {
        len: {
          args: [0, 500],
          msg: 'Token is too long',
        },
      },
    },
  },
  {
    tableName: 'users',
    timestamps: true,
  }
);

export default User;

// User.sync({ force: true });
