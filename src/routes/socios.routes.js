import express from "express";
import {
  createSocio,
  getAllSocios,
  getOneSocio,
} from "../controllers/socios.controllers.js";

const sociosRouter = express.Router();

sociosRouter.post("/", createSocio);
sociosRouter.get("/", getAllSocios);
sociosRouter.get("/:mail", getOneSocio);

export default sociosRouter;
