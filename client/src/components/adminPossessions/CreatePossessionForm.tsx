export default function CreatePossessionForm({ book }: { book: string | null }) {
  return (
    <div className="flex flex-col gap-3">
      <label
        className="font-normal text-2xl"
        htmlFor="book"
      >Libro:</label>
      <input
        id="book"
        name="book"
        type="text"
        value={book || ''}
        className="w-full p-3 border-gray-300 border"
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
        placeholder="Nombre del Cliente"
        className="w-full p-3 border-gray-300 border"
        required
      />

      <label
        className="font-normal text-2xl"
        htmlFor="idCard"
      >Cedula:</label>
      <input
        id="idCard"
        type="number"
        name="idCard"
        placeholder="Cedula del Cliente"
        className="w-full p-3 border-gray-300 border"
        required
      />

      <label
        className="font-normal text-2xl"
        htmlFor="phone"
      >Telefono:</label>
      <input
        id="phone"
        type="number"
        name="phone"
        placeholder="Telefono del Cliente"
        className="w-full p-3 border-gray-300 border"
        required
      />

      <label
        className="font-normal text-2xl"
        htmlFor="orderDate"
      >Fecha del Pedido:</label>
      <input 
        id="orderDate"
        type="date" 
        name="orderDate"
        placeholder="Fecha del pedido"
        className="w-full p-3 border-gray-300 border"
        required
      />
    </div>
  )
}
