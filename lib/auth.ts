// lib/auth.ts
import { createServerClient } from "./supabase";
import bcrypt from "bcryptjs";

export async function verificarCredenciales(username: string, password: string) {
  try {
    const supabase = createServerClient();

    // 1. Buscar usuario
    const { data: usuario, error } = await supabase
      .from("usuarios")
      .select("*")
      .eq("username", username)
      .single();

    if (error || !usuario) {
      return { success: false, message: "Usuario no encontrado" };
    }

    // 2. ¡COMPARAR CONTRASEÑA CON BCRYPT! (esto es lo que fallaba)
    const passwordValida = await bcrypt.compare(password, usuario.password_hash);
    
    if (!passwordValida) {
      return { success: false, message: "Contraseña incorrecta" };
    }

    // 3. Devolver datos del usuario (sin password)
    return {
      success: true,
      usuario: {
        id: usuario.id,
        username: usuario.username,
        role: usuario.role,
      },
    };
  } catch (error) {
    console.error("Error:", error);
    return { success: false, message: "Error al verificar credenciales" };
  }
}
