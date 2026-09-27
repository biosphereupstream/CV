import { treaty } from "@elysiajs/eden";
import type { App } from "@portfolio/api";

const apiUrl =
  typeof window !== "undefined"
    ? window.location.origin
    : process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const api = treaty<App>(apiUrl);

export async function submitInquiry(payload: {
  name: string;
  email: string;
  company?: string;
  category: string;
  message: string;
}) {
  try {
    const res = await fetch("/api/v1/inquiries", {
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
    await fetch("/api/v1/telemetry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventType, metadata }),
    });
  } catch {
    // Graceful silent fallback
  }
}
