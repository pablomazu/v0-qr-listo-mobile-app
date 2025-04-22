import DashboardHeader from "@/components/dashboard-header"
import CrearEntradasForm from "@/components/crear-entradas-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CrearEntradasPage() {
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
            <h1 className="text-xl font-bold text-gray-800">Crear Entradas</h1>
          </div>

          <CrearEntradasForm />
        </div>
      </main>
    </div>
  )
}
