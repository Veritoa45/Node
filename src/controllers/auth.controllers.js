import { encryptPassword, comparePassword } from "../lib/password.js";
import Socio from "../models/socio.model.js";
import Admin from "../models/admin.model.js";

// Función para registrar un nuevo usuario
export const register = async (req, res) => {
  try {
    const { Nombre, Apellido, Tel, Mail, Password } = req.body;

    const socioExist = await Socio.findByEmail(Mail);

    if (socioExist) {
      return res
        .status(400)
        .json({ message: "El correo electrónico ya está registrado" });
    }

    const encryptedPassword = await encryptPassword(Password);

    const newSocio = {
      Mail: Mail,
      Password: encryptedPassword,
      Nombre: Nombre,
      Apellido: Apellido,
      Tel: Tel,
    };
    const socioId = await Socio.create(newSocio);

    res.status(201).json({ message: "Socio registrado con éxito" });
  } catch (error) {
    console.error("Error al registrar el socio:", error);
    res.status(500).json({ message: "Error del servidor al registrarse" });
  }
};

// Función para iniciar sesión
export const login = async (req, res) => {
  try {
    const { Mail, Password } = req.body;

    let user = await Admin.findByEmail(Mail);
    let isAdmin = false;

    if (!user) {
      user = await Socio.findByEmail(Mail);
    } else {
      isAdmin = true;
    }

    if (!user) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    const isValidPassword = await comparePassword(Password, user.Password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    // Enviar solo el ID del usuario como respuesta
    res.status(200).json({ userId: user.id, isAdmin });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ message: "Error del servidor al iniciar sesión" });
  }
};

// Función para cerrar sesión (si es necesario)
export const logout = (req, res) => {
  // No es necesario implementar nada aquí si no estás utilizando sesiones ni tokens
  res.redirect("/");
};
