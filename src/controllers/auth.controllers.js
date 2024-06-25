import { encryptPassword, comparePassword } from "../lib/password.js";
import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { nombre, apellido, mail, pssword, tel } = req.body;

    const userExist = await User.findByEmail(mail);

    if (userExist) {
      return res
        .status(400)
        .json({ message: "El correo electrónico ya está registrado" });
    }

    const encryptedPassword = await encryptPassword(pssword);

    const newUser = {
      nombre: nombre,
      apellido: apellido,
      mail: mail,
      pssword: encryptedPassword,
      tel: tel,
    };
    await User.create(newUser);

    res.status(201).json({ message: "Socio registrado con éxito" });
  } catch (error) {
    console.error("Error al registrar el socio:", error);
    res.status(500).json({ message: "Error del servidor al registrarse" });
  }
};

export const login = async (req, res) => {
  try {
    const { mail, pssword } = req.body;

    if (!mail || !pssword) {
      return res
        .status(400)
        .json({ message: "El correo y la contraseña son obligatorios" });
    }

    const user = await User.findOne({ where: { mail: mail } });

    if (!user) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    const isValidPassword = await comparePassword(pssword, user.pssword);

    if (!isValidPassword) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    res
      .status(200)
      .json({ userId: user.id, isAdmin: user.rol === "admin", role: user.rol });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ message: "Error del servidor al iniciar sesión" });
  }
};

export const logout = (req, res) => {
  res.redirect("/");
};
