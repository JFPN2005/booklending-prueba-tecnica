import { Router } from "express";
import { body, param } from "express-validator";
import { handleInputError } from "../middleware/validation";
import { createBook, deleteBook, getBooks, updateAvailability } from "../handlers/book";
import { authenticate } from "../middleware/auth";

const bookRouter = Router()

/* === PETICIONES === */

// Crear libro
bookRouter.post('/createBook', 
  body('name')
    .notEmpty().withMessage("Ingrese el nombre del libro"),
  body('category')
    .notEmpty().withMessage("Ingrese la categoria"),
  body('author')
    .notEmpty().withMessage("Ingrese el autor"),
  body('price')
    .isNumeric().withMessage("Valor no valido")
    .notEmpty().withMessage("Ingrese el precio")
    .custom(value => value > 0 ).withMessage('Precio no Valido'),
  handleInputError,
  createBook
)

// Obtener todos los libros
bookRouter.get('/getBooks', getBooks)

// Actualizar disponibilidad
bookRouter.patch('/updateAvailability/:id', 
  param('id').isInt().withMessage("ID no valido"),
  handleInputError,
  updateAvailability
)

// Eliminar un libro
bookRouter.delete('/deleteBook/:id', 
  param('id').isInt().withMessage("ID no valido"),
  handleInputError,
  deleteBook
)

export default bookRouter