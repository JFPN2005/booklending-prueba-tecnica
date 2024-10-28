import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Form, redirect, useLocation, useNavigate, type ActionFunctionArgs } from 'react-router-dom';
import CreatePossessionForm from './CreatePossessionForm';
import { createPossession } from '../../services/PossessionService';
import { toast } from 'react-toastify';

export async function action({request} : ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  await createPossession(data)

  toast.success("Posesion Agregada Correctamente")
  return redirect('/admin/books')
}

export default function CreateModalPossession() {

  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const bookName = queryParams.get('viewCreatePossession')
  const show = bookName ? true : false

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => navigate(location.pathname, {replace: true})}>
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
                  >Agregar Posesion
                  </Dialog.Title>
                  <div className='my-5 space-y-3'>

                    <Form
                      method='POST'
                      action='/admin/book/newPossession'
                    >
                      <CreatePossessionForm 
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