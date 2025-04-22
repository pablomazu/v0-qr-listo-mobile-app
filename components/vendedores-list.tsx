"use client"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Trash, Edit } from "lucide-react"

// Datos de ejemplo
const vendedoresIniciales = [
  { id: 1, nombre: "Carlos Rodríguez", ventas: 12 },
  { id: 2, nombre: "María López", ventas: 8 },
  { id: 3, nombre: "Juan Pérez", ventas: 15 },
]

export default function VendedoresList() {
  const [vendedores, setVendedores] = useState(vendedoresIniciales)

  const eliminarVendedor = (id: number) => {
    setVendedores(vendedores.filter((vendedor) => vendedor.id !== id))
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
      {vendedores.map((vendedor) => (
        <div
          key={vendedor.id}
          className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
        >
          <div className="flex items-center gap-3">
            <Avatar className="bg-orange-100">
              <AvatarFallback className="text-orange-600">{vendedor.nombre.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-gray-800">{vendedor.nombre}</div>
              <div className="text-xs text-gray-500">{vendedor.ventas} ventas</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Edit className="w-4 h-4 text-gray-600" />
              <span className="sr-only">Editar</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => eliminarVendedor(vendedor.id)}>
              <Trash className="w-4 h-4 text-gray-600" />
              <span className="sr-only">Eliminar</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
