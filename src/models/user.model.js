import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const user = sequelize.define(
  "user",
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
    tableName: "user",
    timestamps: false,
  }
);

user.findByEmail = async function (mail) {
  return await user.findOne({ where: { mail: mail } });
};

export default user;
