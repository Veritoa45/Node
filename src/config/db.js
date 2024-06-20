import mysql from "mysql2/promise";

const connection = async () => {
  try {
    const con = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "biblioteca",
    });
    return con;
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error.message);
    throw error;
  }
};

export default connection;
