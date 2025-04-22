import AgregarVendedorForm from "@/components/agregar-vendedor-form";
import DashboardHeader from "@/components/dashboard-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

export default function AgregarVendedorPage() {
  return (
    <div className="min-h-screen bg-zinc-800">
      <DashboardHeader />

      <main className="p-4 pt-20">
        <div className="max-w-md mx-auto">
          <div className="flex items-center mb-6">
            <Link href="/dashboard/vendedores">
              <Button variant="ghost" size="icon" className="mr-2 text-gray-300">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-white">Agregar Vendedor</h1>
          </div>

          <AgregarVendedorForm />
        </div>
      </main>
    </div>
  );
}
