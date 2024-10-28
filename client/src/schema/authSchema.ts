import { object, string } from "valibot"

export const authUserSchema = object({
  user_name: string(),
  password: string()
})