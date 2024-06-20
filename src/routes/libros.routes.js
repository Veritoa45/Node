import { Router } from "express";
import {
  getAllLibros,
  getOneLibro,
  createLibro,
  updateLibro,
  deleteLibro,
} from "../controllers/libros.controllers.js";

const librosRouter = Router();

librosRouter.get("/", getAllLibros);
librosRouter.get("/:title", getOneLibro);
librosRouter.post("/", createLibro);
librosRouter.put("/:ISBN", updateLibro);
librosRouter.delete("/:ISBN", deleteLibro);

export default librosRouter;
