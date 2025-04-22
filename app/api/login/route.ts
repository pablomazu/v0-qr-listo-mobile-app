// app/api/login/route.ts (Este archivo maneja el inicio de sesión de los usuarios en tu app.)
import { NextResponse } from "next/server";
import { verificarCredenciales } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Validar datos
    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Faltan datos requeridos" },
        { status: 400 }
      );
    }

    // Verificar credenciales
    const resultado = await verificarCredenciales(username, password);

    if (!resultado.success) {
      return NextResponse.json(
        { success: false, message: resultado.message },
        { status: 401 }
      );
    }

    // Crear una cookie de sesión
    const cookieStore = cookies();
    cookieStore.set({
      name: "session",
      value: JSON.stringify(resultado.usuario),
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 semana
    });

    return NextResponse.json({
      success: true,
      message: "Inicio de sesión exitoso",
      usuario: resultado.usuario,
    });
  } catch (error) {
    console.error("Error en API de login:", error);
    return NextResponse.json(
      { success: false, message: "Error del servidor" },
      { status: 500 }
    );
  }
}
