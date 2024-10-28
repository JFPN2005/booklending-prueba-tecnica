// Importaciones
import { PropsWithChildren } from "react";

export default function ErrorMessage({children} : PropsWithChildren) {
  return (
    <div className="border-b-2 border-red-600 bg-red-200 text-center text-red-500 font-bold p-3 uppercase">
      {children}
    </div>
  )
}
