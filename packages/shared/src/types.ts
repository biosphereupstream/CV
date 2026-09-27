import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  category: z.enum([
    "Plant Leadership Role",
    "Automation & Industry 4.0 Consultation",
    "Smart Factory / SCADA Advisory",
    "Biosphere Roast Works Coffee Inquiry",
    "Other Discussion",
  ]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export interface ContactInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  coffeeBrand: string;
  coffeeUrl: string;
  resumePdfPath: string;
}

export interface SkillCategory {
  title: string;
  skills: string;
  isFullWidth?: boolean;
}

export interface WorkExperienceItem {
  id: string;
  company: string;
  parentCompany?: string;
  period: string;
  roles: {
    title: string;
    period?: string;
    scope: string;
    points: {
      headline: string;
      description: string;
    }[];
  }[];
}

export interface ProjectHighlightItem {
  id: string;
  number: number;
  title: string;
  organization: string;
  challengeSolution: string;
  outcome: string;
  metrics: string[];
  techTags: string[];
  interactiveType?: "scada" | "drone-vision" | "telemetry";
}

export interface AchievementItem {
  headline: string;
  detail: string;
  metricBadge: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issuerBadge: string;
  credentialId?: string;
}

export interface CoffeeFeature {
  brandName: string;
  domain: string;
  headline: string;
  concept: string;
  narrative: string;
  keyPillars: {
    title: string;
    description: string;
  }[];
  signatureNotes: string[];
}
