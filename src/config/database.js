import { Sequelize } from "sequelize";

const sequelize = new Sequelize("biblioteca", "ffrontera", "3zcaw5FF#", {
  host: "localhost",
  dialect: "mysql",
});

export { sequelize };
