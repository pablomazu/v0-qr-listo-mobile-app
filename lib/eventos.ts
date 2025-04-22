// lib/eventos.ts (Crea un nuevo evento en la base de datos (tabla eventos).
import { createServerClient } from "./supabase";

// Función para crear un nuevo evento
export async function crearEvento(
  nombre: string,
  fecha: string,
  lugar: string,
  ubicacion_mapa: string,
  descripcion: string,
  creado_por: string
) {
  try {
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("eventos")
      .insert({
        nombre,
        fecha,
        lugar,
        ubicacion_mapa,
        descripcion,
        creado_por,
      })
      .select()
      .single();

    if (error) {
      console.error("Error al crear evento:", error);
      return {
        success: false,
        message: "Error al crear el evento",
      };
    }

    return {
      success: true,
      message: "Evento creado correctamente",
      evento: data,
    };
  } catch (error) {
    console.error("Error inesperado:", error);
    return {
      success: false,
      message: "Error inesperado al crear el evento",
    };
  }
}

// Función para obtener todos los eventos de un usuario
export async function obtenerEventosUsuario(userId: string) {
  try {
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("eventos")
      .select("*")
      .eq("creado_por", userId)
      .order("fecha", { ascending: true });

    if (error) {
      console.error("Error al obtener eventos:", error);
      return {
        success: false,
        message: "Error al obtener los eventos",
      };
    }

    return {
      success: true,
      eventos: data,
    };
  } catch (error) {
    console.error("Error inesperado:", error);
    return {
      success: false,
      message: "Error inesperado al obtener los eventos",
    };
  }
}

// Función para obtener un evento específico
export async function obtenerEvento(eventoId: string) {
  try {
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("eventos")
      .select("*")
      .eq("id", eventoId)
      .single();

    if (error) {
      console.error("Error al obtener evento:", error);
      return {
        success: false,
        message: "Error al obtener el evento",
      };
    }

    return {
      success: true,
      evento: data,
    };
  } catch (error) {
    console.error("Error inesperado:", error);
    return {
      success: false,
      message: "Error inesperado al obtener el evento",
    };
  }
}
