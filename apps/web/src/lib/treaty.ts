import { treaty } from "@elysiajs/eden";
import type { App } from "@portfolio/api";

const apiUrl =
  typeof window !== "undefined"
    ? window.location.origin
    : process.env.API_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001";

export const api = treaty<App>(apiUrl);

export async function submitInquiry(payload: {
  name: string;
  email: string;
  company?: string;
  category: string;
  message: string;
}) {
  try {
    const baseUrl =
      typeof window !== "undefined"
        ? ""
        : process.env.API_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001";

    const endpoint = baseUrl
      ? new URL("/api/v1/inquiries", baseUrl).toString()
      : "/api/v1/inquiries";

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    return {
      success: false,
      error: "Unable to connect to inquiry service. Please use direct email.",
    };
  }
}

export async function logTelemetry(eventType: string, metadata?: any) {
  try {
    const baseUrl =
      typeof window !== "undefined"
        ? ""
        : process.env.API_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001";

    const endpoint = baseUrl
      ? new URL("/api/v1/telemetry", baseUrl).toString()
      : "/api/v1/telemetry";

    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventType, metadata }),
    });
  } catch {
    // Graceful silent fallback
  }
}
