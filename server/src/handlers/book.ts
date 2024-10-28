import { Request, Response } from "express"
import Book from "../models/Book.model"

// Funcion para crear libro
export const createBook = async (req: Request, res: Response) => {
  try {
    const {name, category, author, price, availability} = req.body
    console.log(req.user)
    const book = await Book.create({name, category, author, price, availability})
    res.json({ data: book })
  } catch (error) {
    console.log(error)
  }
}

// Funcion para obtener todos los productos
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.findAll({
      order: [
        ['id', 'DESC']
      ]
    })
    res.json({data: books})
  } catch (error) {
    console.log(error)
  }
}

// Funcion para actualizar la disponibilidad
export const updateAvailability = async (req: Request, res: Response) => {
  const {id} = req.params
  const book = await Book.findByPk(id)

  if(!book) {
    res.status(404).json({error: "Libro no Encontrado"})
    return
  }

  // Actualizamos disponibilidad
  book.availability = !book.dataValues.availability
  await book.save()
  res.json({data: book})
}

// Funcion para eliminar un libro
export const deleteBook = async ( req: Request, res: Response ) => {
  const {id} = req.params
  const book = await Book.findByPk(id)

  if(!book) {
    res.status(404).json({error: "Libro no Encontrado"})
    return
  }

  await book.destroy()
  res.json({data: "Libro Eliminado"})
}