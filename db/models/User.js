import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";
import { emailRegExp } from "../constants/authConstants.js";

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Email in use",
    },
    validate: {
      is: emailRegExp,
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 50],
        msg: "Name must be between 2 and 50 characters",
      },
    },
  },
  token: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  avatarURL: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default User;
