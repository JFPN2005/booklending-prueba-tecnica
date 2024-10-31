import { useLoaderData } from "react-router-dom"
import { getReturnedPossessions } from "../../../services/PossessionService"
import { PossessionWithReturnDate } from "../../../types"
import PossessionDetails from "../../../components/adminPossessions/PossessionDetails"

// Recogemos las todas las posesiones que hayan devuelto los libros
export async function loader() {
    const possessions = await getReturnedPossessions()
    return possessions
}

export default function AdminPossessionsView() {
    const response = useLoaderData() as { data: PossessionWithReturnDate[] }
    const possessions = response.data

    if (!Array.isArray(possessions)) {
        return <div>No hay posesiones para mostrar</div>
    }
    // Recogemos las posesiones que hayan devuelto los libros
    return (
        <div className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow">
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-center text-slate-700">Posesiones</h2>
            </div>
            <div className="p-2">
                <table className="w-full mt-5 table-auto">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-2">Cliente</th>
                            <th className="p-2">Cedula</th>
                            <th className="p-2">Telefono</th>
                            <th className="p-2">Libro</th>
                            <th className="p-2">Fecha de pedido</th>
                            <th className="p-2">Fecha de devolucion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {possessions.map(possession => (
                            <PossessionDetails 
                                key={possession.id}
                                possession={possession}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}