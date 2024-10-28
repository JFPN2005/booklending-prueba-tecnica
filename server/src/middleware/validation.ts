// Importaciones
import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator";

// Manejamos errores de entrada
export const handleInputError = (req : Request, res : Response, next : NextFunction) => {

  // Verificacion de errores
  const errors = validationResult(req)
  // Retornamos los errores
  if(!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array()});
    return
  }

  next()
}