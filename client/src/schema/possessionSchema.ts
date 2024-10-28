import { date, number, object, string } from "valibot";

export const createPossessionSchema = object({
  book: string(),
  client: string(),
  idCard: number(),
  phone: number(),
  orderDate: date(),
})