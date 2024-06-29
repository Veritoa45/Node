import http from "http";
import express from "express";
import usersRouter from "./routes/users.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import librosRouter from "./routes/libros.routes.js";
import connection from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

// Rutas
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/libros", librosRouter);

// Iniciar servidor HTTP
const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
