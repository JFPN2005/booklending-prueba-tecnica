import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const token = localStorage.getItem('AUTH_TOKEN');
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default PrivateRoute;