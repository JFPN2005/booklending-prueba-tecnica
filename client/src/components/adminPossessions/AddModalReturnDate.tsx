import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Form, redirect, useLocation, useNavigate, type ActionFunctionArgs } from 'react-router-dom';
import { addReturnDate } from '../../services/PossessionService';
import { updateAvailability } from '../../services/BookService';
import AddReturnDateForm from './AddReturnDateForm';

export async function action({request}: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  // Extraemos el libro de la URL
  const queryParams = new URLSearchParams(location.search)
  const bookId = queryParams.get('bookId')

  await addReturnDate(+data.id, data.returnDate.toString())

  if(bookId) {
    await updateAvailability(parseInt(bookId))
  } 


  return redirect('/admin/books')
}


export default function AddModalReturnDate() {

  const navigate = useNavigate()
  const location = useLocation()
  // Extraemos el libro de la URL
  const queryParams = new URLSearchParams(location.search)
  const bookId = queryParams.get('bookId')
  const bookName = queryParams.get('viewAddReturnDate')
  const show = bookName ? true : false

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => navigate('/admin/books')}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                  <Dialog.Title
                    as="h3"
                    className="font-black text-4xl text-center text-slate-600 my-5"
                  >
                    Agregar Fecha de Devolucion
                  </Dialog.Title>
                  <div className='my-5 space-y-3'>

                    <Form
                      method='post'
                      action='/admin/books/returnDate'
                    >
                      <input type="hidden" name="_method" value="PATCH" />
                      <AddReturnDateForm
                        bookId={bookId || ''}
                        book={bookName || ''}
                      />

                      <input 
                        type="submit"
                        className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                        value="Agregar Posesion"
                        />
                    </Form>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}