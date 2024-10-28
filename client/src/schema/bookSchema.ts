import { array, boolean, number, object, string } from "valibot";

export const createBookSchema = object({
  name: string(),
  category: string(),
  author: string(),
  price: number(),
})

export const bookSchema = object({
  id: number(),
  name: string(),
  category: string(),
  author: string(),
  price: number(),
  availability: boolean()
})

export const booksSchema = array(bookSchema)