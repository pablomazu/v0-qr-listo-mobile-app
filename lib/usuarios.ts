// (contiene la función crearUsuario, que sirve para registrar nuevos usuarios)
import { createServerClient } from "./supabase";
import bcrypt from "bcryptjs";

// Función para crear un nuevo usuario
export async function crearUsuario(
  username: string,
  password: string,
  role: "admin" | "vendedor"
) {
  try {
    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    // Crear cliente de Supabase
    const supabase = createServerClient();

    // Verificar si el username ya existe
    const { data: usuarioExistente } = await supabase
      .from("usuarios")
      .select("username")
      .eq("username", username)
      .single();

    if (usuarioExistente) {
      return {
        success: false,
        message: "El nombre de usuario ya está en uso",
      };
    }

    // Insertar el nuevo usuario
    const { data, error } = await supabase
      .from("usuarios")
      .insert({
        username,
        password_hash,
        nombre_completo,
        role,
      })
      .select()
      .single();

    if (error) {
      console.error("Error al crear usuario:", error);
      return {
        success: false,
        message: "Error al crear el usuario",
      };
    }

    return {
      success: true,
      message: "Usuario creado correctamente",
      usuario: {
        id: data.id,
        username: data.username,
        nombre_completo: data.nombre_completo,
        role: data.role,
      },
    };
  } catch (error) {
    console.error("Error inesperado:", error);
    return {
      success: false,
      message: "Error inesperado al crear el usuario",
    };
  }
}
