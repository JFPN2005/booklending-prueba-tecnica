// Importaciones
import { Router } from "express"
import { authUser, createUser } from "../handlers/user"
import { body } from "express-validator"
import { handleInputError } from "../middleware/validation"
import { authenticate } from "../middleware/auth"

// Accedemos a las funciones del Router de Express
const userRouter = Router()

/* === PETICIONES === */

// Crear usuario
userRouter.post('/createUser', 
    body('user_name')
      .notEmpty().withMessage("Ingrese un nombre de usuario"),
    body('password')
      .notEmpty().withMessage("El Password no puede ir vacio"),
  handleInputError,
  createUser
)

// Autenticar usuario
userRouter.post('/login',
  body('user_name')
    .notEmpty().withMessage("Usuario no valido"),
  body('password')
    .notEmpty().withMessage("Ingrese una contraseña"),
  handleInputError,
  authUser
)


export default userRouter