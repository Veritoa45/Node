import connection from "../config/db.js"; // Importa la conexión a MySQL
import Socio from "../models/socio.model.js";

// Función para crear un nuevo socio
const createSocio = async (req, res) => {
  try {
    const { CodSocio, Dni, Nombre, Apellido, Direccion, Tel, Mail, Password } =
      req.body;

    const query = `INSERT INTO ${Socio.tableName} (CodSocio, Dni, Nombre, Apellido, Direccion, Tel, Mail, Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      CodSocio,
      Dni,
      Nombre,
      Apellido,
      Direccion,
      Tel,
      Mail,
      Password,
    ];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error("Error al crear el socio:", err);
        res.status(500).json({ error: "Error interno del servidor" });
      } else {
        res.status(201).json({
          id: results.insertId,
          CodSocio,
          Dni,
          Nombre,
          Apellido,
          Direccion,
          Tel,
        });
      }
    });
  } catch (error) {
    console.error("Error al crear el socio:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Función para obtener todos los socios
const getAllSocios = async (req, res) => {
  try {
    const query = `SELECT * FROM ${Socio.tableName}`;

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

const getOneSocio = async (req, res) => {
  try {
    const { Mail } = req.params;
    const [results] = await connection.query(
      `SELECT * FROM ${Socio.tableName} WHERE Mail = ?`,
      [Mail]
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

export { createSocio, getAllSocios, getOneSocio };
