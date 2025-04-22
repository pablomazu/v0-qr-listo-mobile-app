import { createClient } from "@supabase/supabase-js";

// Crea un cliente para uso en el servidor (con permisos elevados)
export const createServerClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        persistSession: false,
      },
    }
  );
};
