"use client"

import DashboardHeader from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock, Info } from "lucide-react"

export default function EventoDetallePage({ params }: { params: { id: string } }) {
  // En una app real, estos datos vendrían de una base de datos
  const eventoInfo = {
    nombre: "Fiesta de Ejemplo",
    fecha: "12 de Mayo, 2025",
    hora: "21:00 hs",
    lugar: "Salón de Eventos XYZ",
    direccion: "Av. Principal 1234, Ciudad",
    descripcion:
      "Celebración especial con amigos y familiares. Habrá música en vivo y servicio de catering. Código de vestimenta: elegante casual.",
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <DashboardHeader />

      <main className="p-4 pt-20">
        <div className="max-w-md mx-auto">
          <div className="flex items-center mb-6">
            <Link href="/dashboard/invitados">
              <Button variant="ghost" size="icon" className="mr-2 text-gray-700">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Detalle del Evento</h1>
          </div>

          <Card className="bg-white rounded-xl p-5 border-gray-200 mb-6">
            <h2 className="text-xl font-bold text-gray-800 text-center mb-4">{eventoInfo.nombre}</h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Fecha</h3>
                  <p className="text-gray-600">{eventoInfo.fecha}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Hora</h3>
                  <p className="text-gray-600">{eventoInfo.hora}</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Ubicación</h3>
                  <p className="text-gray-600">{eventoInfo.lugar}</p>
                  <p className="text-gray-500 text-sm">{eventoInfo.direccion}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Info className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Descripción</h3>
                  <p className="text-gray-600">{eventoInfo.descripcion}</p>
                </div>
              </div>
            </div>
          </Card>

          <Button
            onClick={() => window.history.back()}
            className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-lg shadow-orange-500/20"
          >
            VOLVER
          </Button>
        </div>
      </main>
    </div>
  )
}
