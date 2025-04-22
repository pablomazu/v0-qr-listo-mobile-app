import { NextResponse } from "next/server";
import { crearUsuario } from "@/lib/usuarios";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password, nombre_completo } = body;

    // Validar datos
    if (!username || !password || !nombre_completo) {
      return NextResponse.json(
        { success: false, message: "Faltan datos requeridos" },
        { status: 400 }
      );
    }

    // Crear vendedor (siempre con rol "vendedor")
    const resultado = await crearUsuario(
      username,
      password,
      nombre_completo,
      "vendedor"
    );

    if (!resultado.success) {
      return NextResponse.json(
        { success: false, message: resultado.message },
        { status: 400 }
      );
    }

    return NextResponse.json(resultado);
  } catch (error) {
    console.error("Error en API:", error);
    return NextResponse.json(
      { success: false, message: "Error del servidor" },
      { status: 500 }
    );
  }
}
