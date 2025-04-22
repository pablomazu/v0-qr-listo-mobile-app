"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  User,
  UserRound,
  Check,
  X,
  AlertTriangle,
  QrCode,
  ExternalLink,
  CheckSquare,
  Square,
  Search,
  Trash,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Datos de ejemplo
const invitadosIniciales = [
  { id: 1, nombre: "Lionel Messi", genero: "masculino", confirmado: true },
  { id: 2, nombre: "Andres Iniesta", genero: "masculino", confirmado: false },
  { id: 3, nombre: "Selena Gomez", genero: "femenino", confirmado: true },
  { id: 4, nombre: "Jose Gomez Centurion", genero: "masculino", confirmado: false },
]

export default function InvitadosList() {
  const [invitados, setInvitados] = useState(invitadosIniciales)
  const [invitadosFiltrados, setInvitadosFiltrados] = useState(invitadosIniciales)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [selectedInvitado, setSelectedInvitado] = useState<{ id: number; nombre: string } | null>(null)
  const [showQR, setShowQR] = useState<number | null>(null)
  const [modoSeleccion, setModoSeleccion] = useState(false)
  const [seleccionados, setSeleccionados] = useState<number[]>([])
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    if (busqueda.trim() === "") {
      setInvitadosFiltrados(invitados)
    } else {
      const filtrados = invitados.filter((invitado) => invitado.nombre.toLowerCase().includes(busqueda.toLowerCase()))
      setInvitadosFiltrados(filtrados)
    }
  }, [busqueda, invitados])

  const confirmarEliminacion = (id: number, nombre: string) => {
    setSelectedInvitado({ id, nombre })
    setShowConfirmation(true)
  }

  const eliminarInvitado = () => {
    if (selectedInvitado) {
      setInvitados(invitados.filter((invitado) => invitado.id !== selectedInvitado.id))
      setShowConfirmation(false)
      setSelectedInvitado(null)
    }
  }

  const eliminarSeleccionados = () => {
    if (seleccionados.length > 0) {
      setInvitados(invitados.filter((invitado) => !seleccionados.includes(invitado.id)))
      setSeleccionados([])
      setModoSeleccion(false)
    }
  }

  const cancelarEliminacion = () => {
    setShowConfirmation(false)
    setSelectedInvitado(null)
  }

  const toggleQR = (id: number) => {
    if (!modoSeleccion) {
      if (showQR === id) {
        setShowQR(null)
      } else {
        setShowQR(id)
      }
    }
  }

  const toggleSeleccion = (id: number) => {
    if (seleccionados.includes(id)) {
      setSeleccionados(seleccionados.filter((item) => item !== id))
    } else {
      setSeleccionados([...seleccionados, id])
    }
  }

  const toggleModoSeleccion = () => {
    setModoSeleccion(!modoSeleccion)
    setSeleccionados([])
    setShowQR(null)
  }

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar invitado..."
              className="pl-9 h-10 rounded-lg border-gray-200 bg-white text-gray-800"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
          <Button
            variant={modoSeleccion ? "default" : "outline"}
            size="icon"
            className={`h-10 w-10 ${modoSeleccion ? "bg-orange-500 text-white" : "border-gray-300 text-gray-600"}`}
            onClick={toggleModoSeleccion}
          >
            {modoSeleccion ? <CheckSquare className="h-5 w-5" /> : <Square className="h-5 w-5" />}
          </Button>
        </div>

        {modoSeleccion && seleccionados.length > 0 && (
          <div className="flex justify-between items-center bg-white p-2 rounded-lg mb-2 border border-gray-200">
            <span className="text-gray-800 text-sm">{seleccionados.length} seleccionados</span>
            <Button
              variant="destructive"
              size="sm"
              onClick={eliminarSeleccionados}
              className="bg-red-500 hover:bg-red-600"
            >
              <Trash className="h-4 w-4 mr-1" />
              Eliminar
            </Button>
          </div>
        )}

        <div className="space-y-3">
          {invitadosFiltrados.map((invitado) => (
            <Card key={invitado.id} className="bg-white rounded-xl overflow-hidden border-gray-200">
              {showQR === invitado.id ? (
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-gray-800">{invitado.nombre}</h3>
                    <Button variant="ghost" size="sm" onClick={() => setShowQR(null)} className="text-gray-500">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="bg-white p-4 rounded-lg flex flex-col items-center border border-gray-200">
                    <div className="w-48 h-48 bg-white flex items-center justify-center mb-2">
                      <QrCode className="w-40 h-40 text-black" />
                    </div>
                    <p className="text-xs text-gray-600 text-center">Para ingresar muestra el código QR en el evento</p>
                  </div>

                  <div className="mt-3 flex justify-center">
                    <Link
                      href={`/dashboard/evento-detalle/${invitado.id}`}
                      className="flex items-center text-sm text-orange-500 hover:underline"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Ver detalle del evento
                    </Link>
                  </div>
                </div>
              ) : (
                <div
                  className="flex items-center justify-between p-4"
                  onClick={modoSeleccion ? () => toggleSeleccion(invitado.id) : () => toggleQR(invitado.id)}
                >
                  <div className="flex items-center space-x-3">
                    {modoSeleccion ? (
                      <div className="h-6 w-6 flex items-center justify-center">
                        {seleccionados.includes(invitado.id) ? (
                          <CheckSquare className="h-5 w-5 text-orange-500" />
                        ) : (
                          <Square className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    ) : (
                      <Avatar className={`${invitado.confirmado ? "bg-green-100" : "bg-gray-100"} h-10 w-10`}>
                        <AvatarFallback className={`${invitado.confirmado ? "text-green-600" : "text-gray-600"}`}>
                          {invitado.nombre.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <div className="font-medium text-gray-800">{invitado.nombre}</div>
                      <div className="flex items-center text-xs text-gray-500">
                        {invitado.genero === "masculino" ? (
                          <User className="h-3 w-3 mr-1" />
                        ) : (
                          <UserRound className="h-3 w-3 mr-1" />
                        )}
                        {invitado.genero === "masculino" ? "Masculino" : "Femenino"}
                      </div>
                    </div>
                  </div>

                  {!modoSeleccion && (
                    <div className="flex items-center space-x-2">
                      {invitado.confirmado ? (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                          <Check className="h-3 w-3 mr-1" />
                          Confirmado
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-gray-500 border-gray-300">
                          <X className="h-3 w-3 mr-1" />
                          Pendiente
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Modal de confirmación */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-xs w-full p-5 animate-in fade-in zoom-in duration-200 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">Confirmar eliminación</h3>

              <p className="text-gray-600 mb-6">
                ¿Estás seguro que deseas eliminar la entrada de{" "}
                <span className="font-semibold">{selectedInvitado?.nombre}</span>?
              </p>

              <div className="flex gap-3 w-full">
                <Button
                  variant="outline"
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={cancelarEliminacion}
                >
                  Cancelar
                </Button>
                <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white" onClick={eliminarInvitado}>
                  Eliminar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
