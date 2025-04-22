import DashboardHeader from "@/components/dashboard-header"
import InvitadosList from "@/components/invitados-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function InvitadosPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <DashboardHeader />

      <main className="p-4 pt-20">
        <div className="max-w-md mx-auto">
          <div className="flex items-center mb-6">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="mr-2 text-gray-700">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Invitados</h1>
              <p className="text-sm text-gray-500">Fiesta de Ejemplo</p>
            </div>
          </div>

          <InvitadosList />

          <div className="mt-6">
            <Link href="/dashboard/crear-entradas">
              <Button className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-lg shadow-orange-500/20">
                CREAR ENTRADAS
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
