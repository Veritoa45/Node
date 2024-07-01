import Libro from "../models/libro.model.js";
import path from "path";
import { fileURLToPath } from "url";
import { Op } from "sequelize";
import { unlinkSync } from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getAllLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll();
    res.json(libros);
  } catch (error) {
    console.error("Error al obtener los libros:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Función para obtener un libro por título parcial
const getOneLibro = async (req, res) => {
  try {
    const { titulo } = req.params;
    const libros = await Libro.findAll({
      where: {
        titulo: {
          [Op.like]: `%${titulo}%`,
        },
      },
    });
    if (libros.length > 0) {
      res.json(libros);
    } else {
      res.status(404).json({ message: "Libro no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el libro:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Función para crear un nuevo libro
const createLibro = async (req, res) => {
  try {
    const { titulo, id_autor, ISBN, genero, resumen } = req.body;

    const tapaUrl = `../uploads/${req.file.filename}`;

    const newLibro = await Libro.create({
      titulo,
      id_autor,
      ISBN,
      genero,
      tapa: tapaUrl,
      resumen,
    });

    res.status(201).json(newLibro);
  } catch (error) {
    unlinkSync(req.file.filename);
    console.error("Error al crear el libro:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Función para actualizar un libro por id
const updateLibro = async (req, res) => {
  try {
    const { ISBN } = req.params;
    const { titulo, id_autor, genero, tapa, resumen } = req.body;
    const libro = await Libro.findOne({
      where: {
        ISBN: ISBN,
      },
    });

    if (!libro) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    await libro.update({
      titulo,
      id_autor,
      genero,
      tapa,
      resumen,
    });

    res.json({ message: "Libro actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el libro:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Función para eliminar un libro por id
const deleteLibro = async (req, res) => {
  try {
    const { ISBN } = req.params;
    const libro = await Libro.findOne({
      where: {
        ISBN: ISBN,
      },
    });

    if (!libro) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    await libro.destroy();
    unlinkSync(path.join(__dirname, libro.tapa));
    res.json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el libro:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export { getAllLibros, getOneLibro, createLibro, updateLibro, deleteLibro };
