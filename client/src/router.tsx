import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import LoginView, {action as authUser} from "./views/auth/LoginView";
import PrivateRoute from "./routes/PrivateRoute";
import AdminLayout from "./layouts/AdminLayout";
import AdminView from "./views/admin/AdminView";
import AdminBooksView, {loader as booksLoader} from "./views/admin/adminbook/AdminBooksView";
import AdminNewBookView, {action as createBook} from "./views/admin/adminbook/AdminNewBookView";
import { action as deleteBook } from "./components/adminBooks/BookDetails";
import { action as createPossession } from "./components/adminPossessions/CreateModalPossession"

export const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginView />,
        action: authUser
      },
    ]
  },
  {
    path: '/admin',
    element: 
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
      ,
    children: [
      {
        index: true,
        element: <AdminView />
      },
      {
        path: '/admin/books',
        element: <AdminBooksView />,
        loader: booksLoader
      },
      {
        path: '/admin/books/new',
        element: <AdminNewBookView />,
        action: createBook
      },
      {
        path: '/admin/books/:id/delete',
        action: deleteBook
      },
      {
        path: '/admin/book/newPossession',
        action: createPossession
      }
    ]
  }
])