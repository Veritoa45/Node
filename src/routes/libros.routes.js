import { Router } from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import {
  getAllLibros,
  getOneLibro,
  createLibro,
  updateLibro,
  deleteLibro,
} from "../controllers/libros.controllers.js";

import { isAdmin } from "../middlewares/isAdmin.js";

const librosRouter = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

librosRouter.get("/", getAllLibros);
librosRouter.get("/:titulo", getOneLibro);
librosRouter.post("/", upload.single("tapa"), (req, res, next) => {
  // if (req.session.isAdmin) {
      createLibro(req, res);
      // res.status(400).json({ error: "No se proporcionó una imagen" });
  // } else {
  //   res.status(401).json({ message: "Usted no está autorizado" });
  // }
});

// Endpoint para actualizar un libro (solo para administradores)
librosRouter.put("/:id", (req, res, next) => {
  //if (req.session.isAdmin) {
    updateLibro(req, res);
  /*} else {
    res.status(401).json({ message: "Usted no está autorizado" });
  }*/
});

// Endpoint para eliminar un libro (solo para administradores)
librosRouter.delete("/:id", (req, res, next) => {
  //if (req.session.isAdmin) {
    deleteLibro(req, res);
  /*} else {
    console.log('no esta autorizado')
    res.status(401).json({ message: "Usted no está autorizado" });
  }*/
});

export default librosRouter;
