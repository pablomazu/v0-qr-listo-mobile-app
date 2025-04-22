"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-zinc-800 shadow-md z-10 border-b border-zinc-700">
        <div className="max-w-md mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2 text-gray-300" onClick={() => setMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-bold text-white">
              <span className="text-orange-500">QR</span>LISTO
            </h1>
          </div>

          <Button variant="ghost" size="icon" className="text-gray-300">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 z-20">
          <div className="bg-zinc-800 h-full w-64 p-4 flex flex-col border-r border-zinc-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">
                <span className="text-orange-500">QR</span>LISTO
              </h2>
              <Button variant="ghost" size="icon" className="text-gray-300" onClick={() => setMenuOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-2">
              <Link
                href="/dashboard"
                className="block px-4 py-2 rounded-lg hover:bg-zinc-700 text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/dashboard/invitados"
                className="block px-4 py-2 rounded-lg hover:bg-zinc-700 text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Invitados
              </Link>
              <Link
                href="/dashboard/crear-entradas"
                className="block px-4 py-2 rounded-lg hover:bg-zinc-700 text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Crear Entradas
              </Link>
              <Link
                href="/dashboard/vendedores"
                className="block px-4 py-2 rounded-lg hover:bg-zinc-700 text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Vendedores
              </Link>
              <Link
                href="/dashboard/ajustes"
                className="block px-4 py-2 rounded-lg hover:bg-zinc-700 text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Ajustes
              </Link>
            </div>

            <div className="mt-auto">
              <Link href="/" className="block px-4 py-2 rounded-lg text-red-400" onClick={() => setMenuOpen(false)}>
                Cerrar Sesión
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
