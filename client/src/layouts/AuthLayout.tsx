import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../components/Logo";

export default function AuthLayout() {
  return (
    <>
      <div className="">
          <Logo />
          <Outlet />
      </div>
      <ToastContainer />
    </>
  )
}