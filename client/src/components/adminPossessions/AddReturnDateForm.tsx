import { useLoaderData } from "react-router-dom"
import { getHistoryPossessions } from "../../services/PossessionService"

// Obtenemos todas las posesiones por medio de loader
export async function loader() {
    try {
        const response = await getHistoryPossessions()
        return { possessions: response.data } // Extraer el array de data
    } catch (error) {
        console.error('Error al cargar posesiones:', error)
        return { possessions: [] }
    }
}


export default function AddReturnDateForm({ book, bookId }: { book: string | null, bookId: string | null }) {
    // Obtenemos todas las posesiones
    const { possessions } = useLoaderData() as {
        possessions: Array<{
            id: number;
            id_book: number;
            book: string;
            client: string;
            idCard: string;
            phone: string;
            orderDate: string;
            returnDate: string | null;
        }>
    }

    // Encontrar la posesión correspondiente al libro actual que no tenga fecha de devolucion
    const possession = possessions.find(p => p.id_book.toString() === bookId && p.returnDate === null)

    return (
        <div className="flex flex-col gap-3">
            <input
                value={possession?.id || ''}
                type="hidden"
                name="id"
            ></input>
            <input
                type="hidden"
                name="bookId"
                value={bookId || ''}
                readOnly
            />
            <label
                className="font-normal text-2xl"
                htmlFor="book"
            >Libro:</label>
            <input
                id="book"
                name="book"
                type="text"
                value={book || ''}
                className="w-full p-3 border-gray-300 border opacity-50 text-opacity-50 cursor-no-drop" 
                readOnly
            />

            <label
                className="font-normal text-2xl"
                htmlFor="client"
            >Cliente:</label>
            <input
                id="client"
                type="text"
                name="client"
                value={possession?.client || ''}
                placeholder="Nombre del Cliente"
                className="w-full p-3 border-gray-300 border opacity-50 text-opacity-50 cursor-no-drop" 
                required
                readOnly
            />

            <label
                className="font-normal text-2xl"
                htmlFor="idCard"
            >Cedula:</label>
            <input
                id="idCard"
                type="number"
                name="idCard"
                value={possession?.idCard || ''}
                placeholder="Cedula del Cliente"
                className="w-full p-3 border-gray-300 border opacity-50 text-opacity-50 cursor-no-drop" 
                required
                readOnly
            />

            <label
                className="font-normal text-2xl"
                htmlFor="phone"
            >Telefono:</label>
            <input
                id="phone"
                type="number"
                name="phone"
                value={possession?.phone || ''}
                placeholder="Telefono del Cliente"
                className="w-full p-3 border-gray-300 border opacity-50 text-opacity-50 cursor-no-drop" 
                required
                readOnly
            />

            <label
                className="font-normal text-2xl"
                htmlFor="orderDate"
            >Fecha del Pedido:</label>
            <input
                id="orderDate"
                type="date"
                name="orderDate"
                defaultValue={possession?.orderDate.split('T')[0] || ''}
                placeholder="Fecha del pedido"
                className="w-full p-3 border-gray-300 border opacity-50 text-opacity-50 cursor-no-drop" 
                required
                readOnly
            />

            <label
                className="font-normal text-2xl"
                htmlFor="returnDate"
            >Fecha de devolucion:</label>
            <input
                id="returnDate"
                type="date"
                name="returnDate"
                className="w-full p-3 border-gray-300 border"
                required
            />


        </div>
    )
}
