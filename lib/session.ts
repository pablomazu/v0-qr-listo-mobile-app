// lib/session.ts
import { cookies } from "next/headers";

export function getSession() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("session");
  
  if (!sessionCookie) {
    return null;
  }
  
  try {
    return JSON.parse(sessionCookie.value);
  } catch (error) {
    return null;
  }
}
