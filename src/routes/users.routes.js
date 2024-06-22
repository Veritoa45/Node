import express from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
} from "../controllers/users.controllers.js";

const usersRouter = express.Router();

usersRouter.post("/", createUser);
usersRouter.get("/", getAllUsers);
usersRouter.get("/:mail", getOneUser);

export default usersRouter;
