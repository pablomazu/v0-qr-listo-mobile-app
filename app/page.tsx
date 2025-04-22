import LoginForm from "@/components/login-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-orange-50 p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-orange-500 rounded-2xl rotate-12"></div>
              <div className="absolute inset-0 bg-zinc-800 rounded-2xl flex items-center justify-center">
                <span className="text-orange-500 text-2xl font-bold">QR</span>
              </div>
            </div>
            <h1 className="text-4xl font-extrabold ml-2 text-gray-800">
              <span className="text-orange-500">QR</span>LISTO
            </h1>
          </div>
          <p className="text-gray-600 text-sm">Gestión de eventos simplificada</p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
