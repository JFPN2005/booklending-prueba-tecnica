import { date, number, object, string } from "valibot";

// Schema para crear una posesion
export const createPossessionSchema = object({
  id_book: number(),
  book: string(),
  client: string(),
  idCard: number(),
  phone: number(),
  orderDate: date(),
})

// Schema para obtener una posesion
export const getPossessionSchema = object({
  id: number(),
  book: string(),
  client: string(),
  idCard: number(),
  phone: number(),
  orderDate: date(),
  returnDate: date(),
})