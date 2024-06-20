const getAllLibros = async (req, res) => {
  try {
    const [results] = await connection.query(
      `SELECT * FROM ${Libro.tableName}`
    );
    res.json(results);
  } catch (error) {
    console.error("Error al obtener los libros:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Función para obtener un libro por título parcial
const getOneLibro = async (req, res) => {
  try {
    const { title } = req.params;
    const [results] = await connection.query(
      `SELECT * FROM ${Libro.tableName} WHERE Titulo LIKE ?`,
      [`%${title}%`]
    );
    if (results.length > 0) {
      res.json(results);
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
    const { CodLibro, Titulo, ISBN, Editorial, AEscritura, AEdicion, Tapa } =
      req.body;
    const [results] = await connection.query(
      `INSERT INTO ${Libro.tableName} (CodLibro, Titulo, ISBN, Editorial, AEscritura, AEdicion, Tapa) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [CodLibro, Titulo, ISBN, Editorial, AEscritura, AEdicion, Tapa]
    );
    res.status(201).json({
      id: results.insertId,
      CodLibro,
      Titulo,
      ISBN,
      Editorial,
      AEscritura,
      AEdicion,
      Tapa,
    });
  } catch (error) {
    console.error("Error al crear el libro:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Función para actualizar un libro por ISBN
const updateLibro = async (req, res) => {
  try {
    const { ISBN } = req.params;
    const { Titulo, Editorial, AEscritura, AEdicion } = req.body;
    const [results] = await connection.query(
      `UPDATE ${Libro.tableName} SET Titulo = ?, Editorial = ?, AEscritura = ?, AEdicion = ? WHERE ISBN = ?`,
      [Titulo, Editorial, AEscritura, AEdicion, ISBN]
    );
    res.json({ message: "Libro actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el libro:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Función para eliminar un libro por ISBN
const deleteLibro = async (req, res) => {
  try {
    const { ISBN } = req.params;
    await connection.query(`DELETE FROM ${Libro.tableName} WHERE ISBN = ?`, [
      ISBN,
    ]);
    res.json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el libro:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export { getAllLibros, getOneLibro, createLibro, updateLibro, deleteLibro };
