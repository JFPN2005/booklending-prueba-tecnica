import { Link, useLoaderData } from "react-router-dom";
import { getBooks } from "../../../services/BookService";
import type { Book } from "../../../types";
import BookDetails from "../../../components/adminBooks/BookDetails";
import CreateModalPossession from "../../../components/adminPossessions/CreateModalPossession";

// Cargamos los libros antes que la interfaz
export async function loader() {
  const books = await getBooks()
  return books
}

export default function AdminBooksView() {

  const books = useLoaderData() as Book[]

  return (
    <>
      <div className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow">
        <div className="flex justify-between">
          <h2 className="text-4xl font-black text-slate-500">Libros</h2>
          <Link
            to={'/admin/books/new'}
            className="bg-indigo-600 p-3 text-sm font-bold text-white rounded md shadow-sm hover:bg-indigo-700"
          >
            Agregar Libro
          </Link>
        </div>

        <div className="p-2">
          <table className="w-full mt-5 table-auto">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-2">Libro</th>
                <th className="p-2">Categoria</th>
                <th className="p-2">Autor</th>
                <th className="p-2">Precio</th>
                <th className="p-2">Disponibinilidad</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <BookDetails  
                  key={book.id}
                  book={book}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal para crear posesion */}
        <CreateModalPossession />

      </div>
    </>
  )
}
