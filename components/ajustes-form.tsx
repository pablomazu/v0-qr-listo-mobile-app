"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Calendar, MapPin, FileText, Save } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AjustesForm() {
  const [nombre, setNombre] = useState("Fiesta de Ejemplo")
  const [fecha, setFecha] = useState("2025-04-20")
  const [lugar, setLugar] = useState("Salón de Eventos XYZ")
  const [descripcion, setDescripcion] = useState("Celebración especial con amigos y familiares")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulación de guardado - en una app real, esto se conectaría a un backend
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Card className="bg-white rounded-xl p-5 shadow-md border-gray-200">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-gray-700 font-medium">
              Nombre del evento
            </Label>
            <Input
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="h-12 rounded-xl border-gray-200 bg-white text-gray-800 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              placeholder="Ingresa el nombre del evento"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fecha" className="text-gray-700 font-medium">
              Fecha
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-orange-500" />
              <Input
                id="fecha"
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className="h-12 pl-10 rounded-xl border-gray-200 bg-white text-gray-800 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lugar" className="text-gray-700 font-medium">
              Lugar
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-orange-500" />
              <Input
                id="lugar"
                value={lugar}
                onChange={(e) => setLugar(e.target.value)}
                className="h-12 pl-10 rounded-xl border-gray-200 bg-white text-gray-800 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="Ingresa la ubicación"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="descripcion" className="text-gray-700 font-medium">
              Descripción
            </Label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 h-5 w-5 text-orange-500" />
              <Textarea
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="pl-10 min-h-[120px] rounded-xl border-gray-200 bg-white text-gray-800 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="Describe tu evento"
              />
            </div>
          </div>
        </div>
      </Card>

      <div className="space-y-3 pt-2">
        <Button
          type="submit"
          className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-lg shadow-orange-500/30 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            "GUARDANDO..."
          ) : (
            <>
              <Save className="h-5 w-5 mr-2" />
              GUARDAR CAMBIOS
            </>
          )}
        </Button>
        <Link href="/dashboard">
          <Button variant="outline" className="w-full h-12 rounded-xl border-gray-300 text-gray-700 hover:bg-gray-50">
            CANCELAR
          </Button>
        </Link>
      </div>
    </form>
  )
}
