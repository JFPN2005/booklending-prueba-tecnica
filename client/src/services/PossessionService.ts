import { safeParse } from "valibot";
import { createPossessionSchema } from "../schema/possessionSchema";
import axios from "axios";

type createBookProps = {
  [k: string]: FormDataEntryValue;
}

export async function createPossession(data : createBookProps) {
  try {
    const result = safeParse(createPossessionSchema, {
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
