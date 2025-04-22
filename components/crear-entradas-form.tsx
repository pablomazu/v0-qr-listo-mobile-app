"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { HelpCircle, ArrowRight } from "lucide-react"

export default function CrearEntradasForm() {
  const [listaInvitados, setListaInvitados] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulación - en una app real, esto enviaría los datos al backend
    setTimeout(() => {
      setLoading(false)
      // Redirigir a la página de vista previa en lugar de directamente a invitados
      router.push("/dashboard/vista-previa-entradas")
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="bg-white rounded-xl p-4 border-gray-200">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="font-medium text-gray-800 mb-1">¿Cómo agrego mis invitados?</h3>
            <p className="text-sm text-gray-600">
              Ingresa los nombres o copia y pega la lista de invitados (un nombre por línea)
            </p>
          </div>
          <Button variant="ghost" size="icon" className="text-orange-500">
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
      </Card>

      <Card className="bg-white rounded-xl p-4 shadow-md border-gray-200">
        <Textarea
          placeholder="Ejemplo:
Juan Pérez
María González
Carlos Rodríguez"
          className="min-h-[200px] border-gray-200 bg-gray-50 text-gray-800 focus:border-orange-500 focus:ring-orange-500 rounded-lg"
          value={listaInvitados}
          onChange={(e) => setListaInvitados(e.target.value)}
        />
      </Card>

      <div className="space-y-3">
        <Button
          type="submit"
          className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-lg shadow-orange-500/20 flex items-center justify-center"
          disabled={loading || !listaInvitados.trim()}
        >
          {loading ? (
            "PROCESANDO..."
          ) : (
            <>
              CONTINUAR
              <ArrowRight className="h-5 w-5 ml-2" />
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
