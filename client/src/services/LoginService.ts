import { safeParse } from "valibot"
import axios from "axios";
import { authUserSchema } from "../schema/authSchema";

type authUserProps = {
  [k: string]: FormDataEntryValue;
}

// Funcion para autenticar usuario
export async function authUser(data : authUserProps) {
  try {
    const result = safeParse(authUserSchema, {
      user_name: data.user_name,
      password: data.password
    })
    if(result.success) {
      const url = `${import.meta.env.VITE_API_URL}/login`
      const data = await axios.post(url, {
        user_name: result.output.user_name,
        password: result.output.password
      })
      const token = data.data.token
      localStorage.setItem('AUTH_TOKEN', token)
      return data
    } else {
      throw new Error("Datos no validos")
    }
  } catch (error) {
    console.log(error)
  }
}