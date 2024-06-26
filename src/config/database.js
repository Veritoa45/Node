import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

export { sequelize };
