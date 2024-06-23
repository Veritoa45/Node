import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    apellido: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    mail: {
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: true,
    },
    pssword: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tel: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    rol: {
      type: DataTypes.ENUM("socio", "admin"),
      defaultValue: "socio",
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

users.findByEmail = async function (mail) {
  return await users.findOne({ where: { mail: mail } });
};

export default users;
