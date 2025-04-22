import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

// Configurar Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function crearUsuario(username: string, password: string) {
  try {
    // Encriptar contraseña
    const password_hash = await bcrypt.hash(password, 10);
    
    // Insertar en la base de datos
    const { error } = await supabase
      .from("usuarios")
      .insert({ username, password_hash, role: "cliente" });

    if (error) throw error;
    console.log("✅ Usuario creado:", username);
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

// Ejecutar: crearUsuario("nombre_usuario", "contraseña");
crearUsuario("1234", "1234"); // Modifica estos valores
