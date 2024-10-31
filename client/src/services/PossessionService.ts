import { safeParse } from "valibot";
import { createPossessionSchema } from "../schema/possessionSchema";
import axios from "axios";

type createBookProps = {
  [k: string]: FormDataEntryValue;
}

// Funcion para crear una nueva posesion
export async function createPossession(data : createBookProps) {
  try {
    const result = safeParse(createPossessionSchema, {
      id_book: +data.id_book,
      book: data.book,
      client: data.client,
      idCard: +data.idCard,
      phone: +data.phone,
      orderDate: new Date(data.orderDate as string)
    })

    console.log(result)
    if(result.success) {
      const url = `${import.meta.env.VITE_API_URL}/createHistoryPossessions`
      await axios.post(url, {
        id_book: result.output.id_book,
        book: result.output.book,
        client: result.output.client,
        idCard: result.output.idCard,
        phone: result.output.phone,
        orderDate: result.output.orderDate
      })
    } else {
      throw new Error("Datos no validos")
    }
  } catch (error) {
    console.log(error)
  }
}


// Funcion para añadir una fecha de devolucion
export async function addReturnDate(id: number, returnDate: string) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/addReturnDate/${id}`
    await axios.patch(url, {returnDate})
  } catch (error) {
    console.log(error)
    throw error
  }
}

// Funcion para obtener todas las posesiones
export async function getHistoryPossessions() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/getHistoryPossessions`
    const data = await axios.get(url)
    return data.data
  } catch (error) {
    console.log(error)
  }
}

// Funcion para obtener todas las posesiones que hayan devuelto los libros
export async function getReturnedPossessions() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/getReturnedPossessions`
    const data = await axios.get(url)
    return data.data
  } catch (error) {
    console.log(error)
  }
}

// Funcion para obtener una posesion
export async function getPossession(id: number) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/getPossession/${id}`
    const data = await axios.get(url)
    return data.data
  } catch (error) {
    console.log(error)
  }
}