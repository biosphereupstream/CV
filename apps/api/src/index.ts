import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { db, inquiries, telemetryEvents } from "@portfolio/database";

export const app = new Elysia({ prefix: "/api/v1" })
  .use(cors())
  .use(
    swagger({
      documentation: {
        info: {
          title: "Agus Sobarna Portfolio API",
          version: "1.0.0",
          description: "High-performance API built with Bun, Elysia, and Drizzle ORM",
        },
      },
    })
  )
  .get("/health", () => ({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: "Agus Sobarna Executive Portfolio API",
  }))
  .post(
    "/inquiries",
    async ({ body, set }) => {
      try {
        const { name, email, company, category, message } = body;

        // If database connection is active, persist inquiry
        if (db) {
          await db.insert(inquiries).values({
            name,
            email,
            company: company || null,
            category,
            message,
          });
        }

        // Optional: Trigger transactional notification via Resend if RESEND_API_KEY is configured
        if (process.env.RESEND_API_KEY && process.env.INQUIRY_RECEIVER_EMAIL) {
          try {
            await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                from: "Portfolio Inquiry <onboarding@resend.dev>",
                to: [process.env.INQUIRY_RECEIVER_EMAIL],
                subject: `[Executive Portfolio Inquiry] from ${name} (${category})`,
                html: `
                  <h2>New Executive Inquiry Received</h2>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Company:</strong> ${company || "N/A"}</p>
                  <p><strong>Category:</strong> ${category}</p>
                  <p><strong>Message:</strong><br/>${message}</p>
                `,
              }),
            });
          } catch (mailError) {
            console.warn("Mail dispatch error (gracefully caught):", mailError);
          }
        }

        return {
          success: true,
          message: "Inquiry successfully dispatched. Agus Sobarna will connect with you promptly.",
          timestamp: new Date().toISOString(),
        };
      } catch (err: any) {
        set.status = 500;
        return {
          success: false,
          error: err?.message || "Failed to process inquiry",
        };
      }
    },
    {
      body: t.Object({
        name: t.String({ minLength: 2 }),
        email: t.String({ format: "email" }),
        company: t.Optional(t.String()),
        category: t.String(),
        message: t.String({ minLength: 5 }),
      }),
    }
  )
  .post(
    "/telemetry",
    async ({ body }) => {
      try {
        if (db) {
          await db.insert(telemetryEvents).values({
            eventType: body.eventType,
            metadata: body.metadata ? JSON.stringify(body.metadata) : null,
          });
        }
        return { success: true };
      } catch {
        return { success: false };
      }
    },
    {
      body: t.Object({
        eventType: t.String(),
        metadata: t.Optional(t.Any()),
      }),
    }
  );

// For local direct execution with Bun
if (import.meta.main) {
  const port = process.env.PORT || 3001;
  app.listen(port);
  console.log(`🚀 Agus Sobarna Portfolio API is running at http://localhost:${port}`);
  console.log(`📚 Swagger documentation at http://localhost:${port}/swagger`);
}

export type App = typeof app;
