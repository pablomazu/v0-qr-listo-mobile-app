// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Rutas públicas (no requieren autenticación)
  const publicRoutes = ["/", "/login"];
  const isPublicRoute = publicRoutes.some(route => path === route);
  
  // Rutas que requieren ser administrador
  const adminRoutes = ["/dashboard/vendedores/agregar"];
  const isAdminRoute = adminRoutes.some(route => path.startsWith(route));
  
  // Obtener la sesión de la cookie
  const sessionCookie = request.cookies.get("session")?.value;
  let session;
  
  try {
    session = sessionCookie ? JSON.parse(sessionCookie) : null;
  } catch (error) {
    session = null;
  }
  
  // Si es una ruta pública, permitir acceso
  if (isPublicRoute) {
    return NextResponse.next();
  }
  
  // Si no hay sesión, redirigir a login
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  
  // Si es una ruta de admin pero el usuario no es admin, redirigir al dashboard
  if (isAdminRoute && session.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  
  // En cualquier otro caso, permitir acceso
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Rutas que requieren autenticación
    "/dashboard/:path*",
    // Rutas públicas (para manejar redirecciones si ya está autenticado)
    "/login",
    "/",
  ],
};
