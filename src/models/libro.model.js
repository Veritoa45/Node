import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const libro = sequelize.define(
  "libros",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    id_autor: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "autores",
        key: "id",
      },
    },
    ISBN: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    genero: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    tapa: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    resumen: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "libros",
    timestamps: false,
  }
);

export default libro;
