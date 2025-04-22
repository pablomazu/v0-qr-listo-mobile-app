// app/api/eventos/route.ts
import { NextResponse } from "next/server";
import { crearEvento, obtenerEventosUsuario } from "@/lib/eventos";
import { getSession } from "@/lib/session";

// Crear un nuevo evento
export async function POST(request: Request) {
  try {
    // Verificar sesión
    const session = getSession();
    if (!session) {
      return NextResponse.json(
        { success: false, message: "No autorizado" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { nombre, fecha, lugar, ubicacion_mapa, descripcion } = body;

    // Validar datos
    if (!nombre || !fecha || !lugar) {
      return NextResponse.json(
        { success: false, message: "Faltan datos requeridos" },
        { status: 400 }
      );
    }

    // Crear evento
    const resultado = await crearEvento(
      nombre,
      fecha,
      lugar,
      ubicacion_mapa || "",
      descripcion || "",
      session.id
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
