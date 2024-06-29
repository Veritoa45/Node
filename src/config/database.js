import { Sequelize } from "sequelize";

const sequelize = new Sequelize("biblio", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export { sequelize };
