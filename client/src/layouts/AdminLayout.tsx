import {Outlet, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../components/Logo";

export default function AdminLayout() {
  const navigate = useNavigate()
  const logout = () => {
    // Eliminar el token de autenticación
    localStorage.removeItem('AUTH_TOKEN');
    toast.success("Sesión cerrada correctamente");
    // Redirigir al usuario a la página de inicio de sesión
    navigate('/', {replace: true})
  };

  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="ml-2 mt-[-30px]">
          <a href="/admin"><Logo /></a>
        </div>
        <div className="">
          <button 
            type="button"
            className="bg-red-600 rounded-lg font-bold text-white p-2 mr-3"
            onClick={logout}
          >Cerrar Sesión</button>
        </div>
      </div>
      <Outlet />
      <ToastContainer />
    </>
  )
}
