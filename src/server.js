import http from "http";
import express from "express";
import sociosRouter from "./routes/socios.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import librosRouter from "./routes/libros.routes.js";
import connection from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const server = http.createServer(app);

// Configurar middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, "../public")));

// Rutas
app.use("/auth", authRouter);
app.use("/socios", sociosRouter);
app.use("/libros", librosRouter);

// Iniciar servidor HTTP
const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
