// Importaciones
import { Form, useActionData, type ActionFunctionArgs, redirect } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage'
import { toast } from 'react-toastify'
import { authUser } from '../../services/LoginService'

export async function action({request} : ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  let error = ''

  if(Object.values(data).includes('')) {
    error = "Todos los Campos son Obligatorios"
  }
  if(error.length) {
    return error
  }

  // Verificación de usuario en el servicio de autenticación
  const userExists = await authUser(data)
  if (!userExists) {
    return "Usuario o contraseña incorrectos"  // Error si el usuario no existe
  }

  // Si es exitoso, redirigir a la página de admin
  toast.success("Iniciando sesion")
  return redirect('/admin')
}

export default function LoginView() {

  const error = useActionData() as string;  

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-[-100px]">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Iniciar Sesión</h2>
          <Form className="space-y-4" method='POST'>
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                Usuario
              </label>
              <input
                id="user_name"
                name='user_name'
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ingresa tu usuario"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                id="password"
                name='password'
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ingresa tu contraseña"
                autoComplete="password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
              Iniciar Sesión
            </button>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </Form>
        </div>
      </div>

    </>
  )
}