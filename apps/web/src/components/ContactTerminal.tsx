"use client";

import React, { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { submitInquiry } from "@/lib/treaty";
import { contactData } from "@portfolio/shared";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  Coffee,
} from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

export function ContactTerminal() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    category: "Plant Leadership Role",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await submitInquiry(formState);
      if (res.success) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your executive inquiry has been safely received. Agus Sobarna will get back to you shortly.",
        });
        setFormState({
          name: "",
          email: "",
          company: "",
          category: "Plant Leadership Role",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            res.error || "Unable to send inquiry. Please email directly.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please email sobarna.agus@gmail.com directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mb-10 no-print">
      <SectionHeading title="EXECUTIVE INQUIRY & STRATEGIC DISCUSSIONS" />

      <div className="bg-[#f8fafc] border border-[#e2e8f0] border-l-4 border-l-[#0f2942] p-5 sm:p-7 rounded-sm shadow-card-subtle">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="text-base font-extrabold text-[#0f2942] mb-1">
                Let&apos;s Connect Directly
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed text-justify">
                Available for Plant Technical Leadership roles, Industry 4.0 & Smart Factory transformation, high-stakes automation modernization, or specialty coffee collaborations via Biosphere Roast Works.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#e2e8f0]">
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-2.5 p-2 bg-white border border-[#e2e8f0] rounded text-xs font-semibold text-[#0f2942] hover:border-[#0284c7] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#0284c7]" />
                <span>{contactData.email}</span>
              </a>

              <a
                href={`tel:${contactData.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2.5 p-2 bg-white border border-[#e2e8f0] rounded text-xs font-semibold text-[#0f2942] hover:border-[#0284c7] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0284c7]" />
                <span>{contactData.phone}</span>
              </a>

              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 bg-white border border-[#e2e8f0] rounded text-xs font-semibold text-[#0f2942] hover:border-[#0284c7] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0284c7]" />
                <span>{contactData.linkedinDisplay}</span>
              </a>

              <a
                href={contactData.coffeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 bg-[#fef3c7] border border-[#fde68a] rounded text-xs font-bold text-[#92400e] hover:bg-[#fde68a] transition-colors"
              >
                <Coffee className="w-4 h-4 text-[#d97706]" />
                <span>☕ biosphereroastworks.my.id</span>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white p-5 rounded border border-[#e2e8f0] shadow-card-subtle">
            {status.type === "success" ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed font-medium">
                  {status.message}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {status.type === "error" && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#0f2942] uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="e.g. Michael Tan"
                      className="w-full text-xs p-2.5 bg-[#f8fafc] border border-[#cbd5e1] rounded focus:outline-none focus:border-[#0284c7] text-[#1e293b]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#0f2942] uppercase tracking-wider mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="e.g. m.tan@company.com"
                      className="w-full text-xs p-2.5 bg-[#f8fafc] border border-[#cbd5e1] rounded focus:outline-none focus:border-[#0284c7] text-[#1e293b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#0f2942] uppercase tracking-wider mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      placeholder="e.g. MNC Industrial Corp"
                      className="w-full text-xs p-2.5 bg-[#f8fafc] border border-[#cbd5e1] rounded focus:outline-none focus:border-[#0284c7] text-[#1e293b]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#0f2942] uppercase tracking-wider mb-1">
                      Subject Category *
                    </label>
                    <select
                      value={formState.category}
                      onChange={(e) =>
                        setFormState({ ...formState, category: e.target.value })
                      }
                      className="w-full text-xs p-2.5 bg-[#f8fafc] border border-[#cbd5e1] rounded focus:outline-none focus:border-[#0284c7] text-[#1e293b]"
                    >
                      <option value="Plant Leadership Role">Plant Leadership Role</option>
                      <option value="Automation & Industry 4.0 Consultation">Automation & Industry 4.0 Consultation</option>
                      <option value="Smart Factory / SCADA Advisory">Smart Factory / SCADA Advisory</option>
                      <option value="Biosphere Roast Works Coffee Inquiry">Biosphere Roast Works Coffee Inquiry</option>
                      <option value="Other Discussion">Other Discussion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#0f2942] uppercase tracking-wider mb-1">
                    Message / Agenda *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Brief overview of the strategic leadership opportunity, technical challenge, or coffee collaboration..."
                    className="w-full text-xs p-2.5 bg-[#f8fafc] border border-[#cbd5e1] rounded focus:outline-none focus:border-[#0284c7] text-[#1e293b]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0f2942] hover:bg-[#183d5f] text-white text-xs font-bold py-2.5 rounded transition-colors shadow-sm disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {loading ? "Transmitting..." : "Send Executive Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
