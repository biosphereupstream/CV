import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Agus Sobarna | Mechatronics Engineer & Automation Specialist",
  description:
    "Executive digital portfolio of Agus Sobarna: Mechatronics Engineer, Automation & Industry 4.0 Specialist, and Founder of Biosphere Roast Works. Delivering $1M+ CAPEX modernization and smart manufacturing solutions.",
  keywords: [
    "Agus Sobarna",
    "Mechatronics Engineer",
    "Industrial Automation",
    "SCADA",
    "Industry 4.0",
    "Smart Factory",
    "Utility Supervisor",
    "CAPEX",
    "Biosphere Roast Works",
    "Specialty Coffee Roaster",
    "Bogor Indonesia",
  ],
  authors: [{ name: "Agus Sobarna", url: "https://linkedin.com/in/agus-sobarna-a4052658" }],
  openGraph: {
    title: "Agus Sobarna | Mechatronics Engineer & Automation Specialist",
    description:
      "11+ years leading Industrial Automation, Industry 4.0, $1M+ CAPEX execution, and Biosphere Roast Works specialty coffee craft.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f1f5f9] text-[#1e293b] antialiased min-h-screen py-4 sm:py-8 px-2 sm:px-4 selection:bg-[#0284c7] selection:text-white">
        <main className="max-w-[960px] mx-auto bg-white border border-[#e2e8f0] shadow-luxury rounded-sm p-4 sm:p-8 md:p-10 page-container">
          {children}
        </main>
      </body>
    </html>
  );
}
