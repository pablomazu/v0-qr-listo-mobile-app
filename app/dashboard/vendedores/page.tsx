import type { Metadata } from "next"
import DashboardHeader from "@/components/dashboard-header"
import VendedoresList from "@/components/vendedores-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserPlus } from "lucide-react"

export const metadata: Metadata = {
  title: "Vendedores - QRLISTO",
  description: "Gestión de vendedores",
}

export default function VendedoresPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <DashboardHeader />
      <main className="flex-1 p-4 pt-20 flex flex-col items-center">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Vendedores</h1>
            <Link href="/dashboard/vendedores/agregar">
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <UserPlus className="w-4 h-4 mr-1" />
                Agregar
              </Button>
            </Link>
          </div>
          <VendedoresList />
          <div className="mt-6">
            <Link href="/dashboard">
              <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                VOLVER
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
