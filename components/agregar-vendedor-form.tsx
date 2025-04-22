// components/agregar-vendedor-form.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from 'lucide-react';

export default function AgregarVendedorForm() {
  const [nombre, setNombre] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validaciones básicas
    if (!nombre || !username || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/vendedores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          nombre_completo: nombre,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Error al crear el vendedor");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setNombre("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setLoading(false);

      // Opcional: redirigir después de un tiempo
      // setTimeout(() => {
      //   router.push("/dashboard/vendedores");
      // }, 2000);
    } catch (error) {
      setError("Error al conectar con el servidor");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="bg-green-500/10 border border-green-500 text-green-500">
          <AlertDescription>Vendedor creado correctamente</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="nombre" className="text-gray-300">
          Nombre del Vendedor
        </Label>
        <Input
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="h-12 rounded-lg border-zinc-700 bg-zinc-700 text-white"
          placeholder="Nombre del Vendedor"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="username" className="text-gray-300">
          Username
        </Label>
        <Input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="h-12 rounded-lg border-zinc-700 bg-zinc-700 text-white"
          placeholder="Username"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-gray-300">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12 rounded-lg border-zinc-700 bg-zinc-700 text-white"
          placeholder="Password"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-gray-300">
          Confirm Password
        </Label>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="h-12 rounded-lg border-zinc-700 bg-zinc-700 text-white"
          placeholder="Confirm Password"
        />
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          className="w-full h-12 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
          disabled={loading}
        >
          {loading ? "PROCESANDO..." : "AGREGAR VENDEDOR"}
        </Button>
      </div>

      <div className="pt-2">
        <Link href="/dashboard/vendedores">
          <Button variant="outline" className="w-full h-12 rounded-lg border-zinc-600 text-gray-300 hover:bg-zinc-700">
            CANCELAR
          </Button>
        </Link>
      </div>
    </form>
  );
}
