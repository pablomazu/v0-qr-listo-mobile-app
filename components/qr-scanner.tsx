"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { QrCode, Camera, Check, X } from "lucide-react"

export default function QrScanner() {
  const [scanning, setScanning] = useState(false)
  const [result, setResult] = useState<{ success: boolean; name?: string; type?: string } | null>(null)

  const startScanner = () => {
    setScanning(true)
    setResult(null)

    // Simulación de escaneo
    setTimeout(() => {
      const success = Math.random() > 0.3

      if (success) {
        setResult({
          success: true,
          name: "Juan Pérez",
          type: "VIP",
        })
      } else {
        setResult({
          success: false,
        })
      }

      setScanning(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="aspect-square relative">
          {scanning ? (
            <div className="absolute inset-0 bg-black flex flex-col items-center justify-center">
              <div className="relative">
                <div className="w-48 h-48 border-2 border-orange-500 rounded-lg"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 animate-[scan_2s_linear_infinite]"></div>
              </div>
              <p className="text-white mt-4">Escaneando...</p>
            </div>
          ) : result ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              {result.success ? (
                <>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-10 w-10 text-green-500" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-1">¡Entrada válida!</h2>
                  <p className="text-gray-600 mb-4 text-center">Bienvenido/a {result.name}</p>
                  <div className="bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium">
                    {result.type}
                  </div>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <X className="h-10 w-10 text-red-500" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-1">Entrada inválida</h2>
                  <p className="text-gray-600 mb-4 text-center">El código QR no es válido o ya ha sido utilizado</p>
                </>
              )}
            </div>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
              <QrCode className="h-16 w-16 text-gray-400 mb-4" />
              <p className="text-gray-500 text-center px-6">Presiona el botón para comenzar a escanear un código QR</p>
            </div>
          )}
        </div>
      </Card>

      {!scanning && (
        <Button
          onClick={startScanner}
          className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-lg shadow-orange-500/30 flex items-center justify-center"
        >
          <Camera className="h-5 w-5 mr-2" />
          {result ? "ESCANEAR OTRO CÓDIGO" : "INICIAR ESCANEO"}
        </Button>
      )}
    </div>
  )
}
