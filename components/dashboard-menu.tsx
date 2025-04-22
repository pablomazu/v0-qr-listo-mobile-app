import Link from "next/link"
import { Users, QrCode, Settings, UserCog, Scan } from "lucide-react"

export default function DashboardMenu() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Link href="/dashboard/invitados">
        <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center justify-center h-32 transition-transform hover:scale-105 border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            <Users className="h-6 w-6 text-orange-500" />
          </div>
          <span className="text-gray-700 font-medium text-sm text-center">Invitados</span>
        </div>
      </Link>

      <Link href="/dashboard/crear-entradas">
        <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center justify-center h-32 transition-transform hover:scale-105 border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            <QrCode className="h-6 w-6 text-orange-500" />
          </div>
          <span className="text-gray-700 font-medium text-sm text-center">Crear Entradas</span>
        </div>
      </Link>

      <Link href="/dashboard/vendedores">
        <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center justify-center h-32 transition-transform hover:scale-105 border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            <UserCog className="h-6 w-6 text-orange-500" />
          </div>
          <span className="text-gray-700 font-medium text-sm text-center">Vendedores</span>
        </div>
      </Link>

      <Link href="/dashboard/escanear">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 shadow-md flex flex-col items-center justify-center h-32 transition-transform hover:scale-105">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
            <Scan className="h-6 w-6 text-white" />
          </div>
          <span className="text-white font-medium text-sm text-center">Escanear</span>
        </div>
      </Link>

      <Link href="/dashboard/ajustes" className="col-span-2">
        <div className="bg-white rounded-2xl p-4 shadow-md flex items-center justify-between transition-transform hover:scale-105 border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
              <Settings className="h-5 w-5 text-orange-500" />
            </div>
            <span className="text-gray-700 font-medium">Ajustes del Evento</span>
          </div>
          <span className="text-orange-500">→</span>
        </div>
      </Link>
    </div>
  )
}
