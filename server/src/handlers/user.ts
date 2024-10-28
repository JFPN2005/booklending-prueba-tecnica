// Importaciones
import { Request, Response } from "express"
import bcrypt from "bcrypt"
import User from "../models/User.model"
import { generateJWT } from "../utils/jwt"

// Funcion para crear usuario
export const createUser = async (req: Request, res: Response) => {
  try {
    const { user_name, password } = req.body;

    // Hashear la contraseña antes de almacenarla
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Crear el usuario en la base de datos
    const user = await User.create({ user_name, password: hashedPassword });
    res.json({ data: user })
  } catch (error) {
    console.log(error)
  }
}

// Funcion para autenticar usuario
export const authUser = async (req: Request, res: Response) => {
  try {
    const { user_name, password } = req.body

    // Buscar al usuario por su nombre
    const user = await User.findOne({
      where: { user_name },
    });;

    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return
    }

    // Comparar la contraseña ingresada con la almacenada
    const isPasswordCorrect = await bcrypt.compare(password, user.get('password'));

    if (!isPasswordCorrect) {
      res.status(401).json({ message: "Contraseña incorrecta" });
      return
    }

    const token = generateJWT({id: user.id})

    res.json({token});
  } catch (error) {
    console.log(error)
  }
}