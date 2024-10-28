import { safeParse } from "valibot";
import axios from "axios";
import { createBookSchema, booksSchema } from "../schema/bookSchema";
import type { Book } from "../types";

type createBookProps = {
  [k: string]: FormDataEntryValue;
}

// Crear libros
export async function createBook(data : createBookProps) {
  try {
    const result = safeParse(createBookSchema, {
      name: data.name,
      category: data.category,
      author: data.author,
      price: +data.price
    })
    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/createBook`
      await axios.post(url, {
        name: result.output.name,
        category: result.output.category,
        author: result.output.author,
        price: result.output.price
      })
      
    } else {
      throw new Error("Datos no validos")
    }
  } catch (error) {
    console.log(error)
  }
}

// Cambiar disponibilidad
export async function updateAvailability(id: number) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/updateAvailability/${id}`
    await axios.patch(url)
  } catch (error) {
    console.log(error)
  }
}


// Obtener libros
export async function getBooks() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/getBooks`
    const data = await axios(url)
    const result = safeParse(booksSchema, data.data.data)
    if(result.success) {
      return result.output
    } else {
      throw new Error("Hubo un error")
    }
  } catch (error) {
    console.log(error)
  }
}

// Eliminar libro
export async function deleteBook(id: Book['id']) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/deleteBook/${id}`
    await axios.delete(url)
  } catch (error) {
    console.log(error)
  }
}