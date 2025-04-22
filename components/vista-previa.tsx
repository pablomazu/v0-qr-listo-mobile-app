"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trash2, QrCode, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

// Datos de ejemplo - en una app real, estos vendrían de la página anterior
const invitadosIniciales = ["Juan Pérez", "María González", "Carlos Rodríguez", "Ana Martínez", "Luis Sánchez"]

export default function VistaPrevia() {
  const [invitados, setInvitados] = useState(invitadosIniciales)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const eliminarInvitado = (index: number) => {
    setInvitados(invitados.filter((_, i) => i !== index))
  }

  const crearEntradas = () => {
    setLoading(true)

    // Simulación - en una app real, esto enviaría los datos al backend
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard/invitados")
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white rounded-xl p-4 border-gray-200">
        <div className="flex items-center space-x-2 mb-4">
          <AlertCircle className="h-5 w-5 text-orange-500" />
          <h3 className="font-medium text-gray-800">Revisa la lista antes de crear las entradas</h3>
        </div>

        <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
          {invitados.length > 0 ? (
            invitados.map((invitado, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <span className="text-gray-800">{invitado}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-red-500 hover:bg-gray-100 h-8 w-8 p-0"
                  onClick={() => eliminarInvitado(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-gray-500">No hay invitados en la lista</div>
          )}
        </div>
      </Card>

      <div className="space-y-3">
        <Button
          onClick={crearEntradas}
          className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-lg shadow-orange-500/20 flex items-center justify-center"
          disabled={loading || invitados.length === 0}
        >
          {loading ? (
            "PROCESANDO..."
          ) : (
            <>
              <QrCode className="h-5 w-5 mr-2" />
              CREAR ENTRADAS
            </>
          )}
        </Button>

        <Link href="/dashboard/crear-entradas">
          <Button variant="outline" className="w-full h-12 rounded-xl border-gray-300 text-gray-700 hover:bg-gray-50">
            VOLVER
          </Button>
        </Link>
      </div>
    </div>
  )
}
