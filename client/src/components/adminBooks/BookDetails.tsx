import { Form, redirect, useNavigate, type ActionFunctionArgs } from "react-router-dom"
import type { Book } from "../../types"
import { formatPrice } from "../../utils/formatPrice"
import { deleteBook } from "../../services/BookService"

type BookDetailsProps = {
  book: Book
}

export async function action({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) {
    await deleteBook(+params.id)
    return redirect('/admin/books')
  }
}

export default function BookDetails({ book }: BookDetailsProps) {
  const isAvailable = book.availability
  const navigate = useNavigate()
  return (
    <>
      <tr className="border-b ">
        <td className="p-3 text-sm text-gray-800">
          {book.name}
        </td>
        <td className="p-3 text-sm text-gray-800">
          {book.category}
        </td>
        <td className="p-3 text-sm text-gray-800">
          {book.author}
        </td>
        <td className="p-3 text-sm text-gray-800 ">
          {formatPrice(book.price)}
        </td>
        <td className="p-3 text-sm text-gray-800 ">
          <button
            type="button"
            onClick={() => navigate(location.pathname + `?viewCreatePossession=${book.name}`)}
            className={`${isAvailable ? 'bg-green-500 py-1 rounded-lg text-white font-bold text-center w-full' : 'bg-fuchsia-500 py-1 rounded-lg text-white font-bold text-center w-full'}`}
          >
            {isAvailable ? 'Disponible' : 'En posesion'}
          </button>
        </td>
        <td className="p-3 text-sm text-gray-800 ">
          <div className="flex w-full">
            <Form
              className="w-full"
              method="POST"
              action={`/admin/books/${book.id}/delete`}
              onSubmit={(e) => {
                if (!confirm('Quiere eliminar este libro?')) {
                  e.preventDefault()
                }
              }}
            >
              <input
                type="submit"
                value="Eliminar"
                className="bg-red-500 w-full py-1 px-2 rounded-lg text-white font-bold text-center cursor-pointer"
              />
            </Form>
          </div>
        </td>
      </tr>
    </>
  )
}
