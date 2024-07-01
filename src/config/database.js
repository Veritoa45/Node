import { Sequelize } from "sequelize";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
  host: DB_HOST,
  dialect: "mysql",
});

export { sequelize };
