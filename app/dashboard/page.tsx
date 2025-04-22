import DashboardHeader from "@/components/dashboard-header"
import DashboardMenu from "@/components/dashboard-menu"
import { Card } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <DashboardHeader />

      <main className="p-4 pt-20">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md">ADMIN</span>
          </div>

          <Card className="bg-white rounded-3xl p-5 shadow-lg mb-6 border-gray-200">
            <div className="text-center mb-3">
              <h1 className="text-xl font-bold text-gray-800">Fiesta de Ejemplo</h1>
              <p className="text-gray-500 text-sm">12 de Mayo, 2025</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-orange-100 rounded-lg p-2 text-center">
                <div className="text-lg font-bold text-orange-500">24</div>
                <div className="text-xs text-gray-600">Invitados</div>
              </div>
              <div className="bg-orange-100 rounded-lg p-2 text-center">
                <div className="text-lg font-bold text-orange-500">18</div>
                <div className="text-xs text-gray-600">Ingresados</div>
              </div>
            </div>
          </Card>

          <DashboardMenu />
        </div>
      </main>
    </div>
  )
}
