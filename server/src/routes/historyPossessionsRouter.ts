import { Router } from "express";
import { body, param } from "express-validator";
import { handleInputError } from "../middleware/validation";
import { addReturnDate, createHistoryPossessions, getHistoryPossessions, getPossession } from "../handlers/historyPossession";

const historyPossessionsRouter = Router()

/* === PETICIONES === */

// Ruta para crear historial de posesion
historyPossessionsRouter.post('/createHistoryPossessions',
  body('book')
    .notEmpty().withMessage("Ingrese el libro"),
  body('client')
    .notEmpty().withMessage("Ingrese el cliente"),
  body('idCard')
    .notEmpty().withMessage("Ingrese la cedula")
    .isNumeric().withMessage("Debe ser una cedula"),
  body('phone')
    .notEmpty().withMessage("Ingrese el telefono")
    .isNumeric().withMessage("Debe ser un telefono"),
  body('orderDate')
    .notEmpty().withMessage("Ingrese la fecha del pedido")
    .isISO8601().withMessage("Formato no valido, debe ser YYYY-MM-DD"),
  handleInputError,
  createHistoryPossessions
)

// Ruta para obtener todas las posesiones
historyPossessionsRouter.get('/getHistoryPossessions', getHistoryPossessions)

// Ruta para obtener una posesion
historyPossessionsRouter.get('/getPossession/:id', 
  param('id').isInt().withMessage("ID no valido"), 
  handleInputError,
  getPossession
)

// Ruta para agregar una fecha de devolucion
historyPossessionsRouter.patch('/addReturnDate/:id',
  param('id').isInt().withMessage("ID no valido"), 
  body('returnDate')
    .notEmpty().withMessage("Ingrese la fecha de devolucion")
    .isISO8601().withMessage("Formato no valido, debe ser YYYY-MM-DD"),
  handleInputError,
  addReturnDate
)

export default historyPossessionsRouter