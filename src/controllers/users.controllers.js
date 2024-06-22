import connection from "../config/db.js"; // Importa la conexión a MySQL
import User from "../models/user.model.js";

// Función para crear un nuevo socio
const createUser = async (req, res) => {
  try {
    const { nombre, apellido, mail, pssword, tel } = req.body;

    const query = `INSERT INTO ${User.tableName} (nombre, apellido, mail, pssword, tel) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [nombre, apellido, mail, pssword, tel];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error("Error al crear el socio:", err);
        res.status(500).json({ error: "Error interno del servidor" });
      } else {
        res.status(201).json({
          id: results.insertId,
          nombre,
          apellido,
          mail,
          pssword,
          tel,
        });
      }
    });
  } catch (error) {
    console.error("Error al crear el socio:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Función para obtener todos los socios
const getAllUsers = async (req, res) => {
  try {
    const query = `SELECT * FROM ${User.tableName}`;

    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error al obtener los socios:", err);
        res.status(500).json({ error: "Error interno del servidor" });
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.error("Error al obtener los socios:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { mail } = req.params;
    const [results] = await connection.query(
      `SELECT * FROM ${User.tableName} WHERE Mail = ?`,
      [mail]
    );
    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(404).json({ message: "Socio no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el socio:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export { createUser, getAllUsers, getOneUser };
