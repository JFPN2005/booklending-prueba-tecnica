import { Form, Link, redirect, useActionData, type ActionFunctionArgs } from "react-router-dom";
import ErrorMessage from "../../../components/ErrorMessage";
import { toast } from "react-toastify";
import { createBook } from "../../../services/BookService";

export async function action({request} : ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  let error = ''

  if(Object.values(data).includes('')) {
    error = "Todos los Campos son Obligatorios"
  }
  if(error.length) {
    return error
  }

  await createBook(data)
  toast.success("Libro Agregado Correctamente")
  return redirect('/admin/books')
}

export default function AdminNewBookView() {
  const error = useActionData() as string;  

  const bookCategories = [
    "Ficción",
    "No ficción",
    "Autoayuda y desarrollo personal",
    "Fantasía",
    "Ciencia ficción",
    "Romance",
    "Misterio y suspenso",
    "Historia",
    "Aventura",
    "Infantil y juvenil"
  ]

  return (
    <>
      <div className="mt-10 mb-10 mx-auto max-w-6xl p-10 bg-white shadow">

        <div className="flex justify-between">
          <h2 className="text-4xl font-black text-slate-500">Agregar Libro</h2>
          <Link
            to={'/admin/books'}
            className="bg-indigo-600 p-3 text-sm font-bold text-white rounded md shadow-sm hover:bg-indigo-700"
          >
            Volver a Libros
          </Link>
        </div>

        {/* Formulario de Agregar Libro */}
        <Form
          className="mt-10"
          method="POST"
        >

          <div className="mb-4">
            <label
              className="text-gray-800"
              htmlFor="name"
            >Nombre del Libro:</label>
            <input
              id="name"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Nombre del Libro"
              name="name"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              className="text-gray-800"
              htmlFor="category"
            >Categoria:</label>
            <select 
              name="category" 
              id="category" 
              className="mt-2 block w-full p-3 bg-slate-50"
              required
            >
              <option value="">--Seleccionar--</option>
              {bookCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              className="text-gray-800"
              htmlFor="author"
            >Autor:</label>
            <input
              id="author"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Nombre del Autor"
              name="author"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="text-gray-800"
              htmlFor="price"
            >Precio:</label>
            <input
              id="price"
              type="number"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Precio libro. ej. 200, 300"
              name="price"
              required
            />
          </div>

          <input
            type="submit"
            className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
            value="Agregar libro"
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>

      </div>
    </>
  )
}
