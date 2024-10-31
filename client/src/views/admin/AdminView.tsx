import { Link } from "react-router-dom";

export default function AdminView() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Panel de Administración</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/admin/books" className="block group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:shadow-lg">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Administrar Libros</h2>
                <p className="text-gray-600">Gestiona el inventario y los detalles de los libros</p>
              </div>
            </div>
          </Link>
          <Link to="/admin/historyPossessions" className="block group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:shadow-lg">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Historial de Posesiones</h2>
                <p className="text-gray-600">Revisa los registros de préstamos y devoluciones</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}