# Agus Sobarna - Executive Portfolio & Personal Web Application

An exclusive, high-end digital portfolio web application for **Agus Sobarna** (Mechatronics Engineer, Automation & Utilities Specialist, Plant Technical Leader, and Founder of **Biosphere Roast Works**).

Engineered following the **"Swiss Industrial Precision / Executive Minimalist Light & Deep Navy"** design system, directly reflecting the aesthetic of the official CV document.

---

## 🌟 Key Features

1. **Executive Identity & CV Fidelity:**
   - Exact layout hierarchy, font weights, square badges (`■`), bullet indicators (`▪`), and precision color palette (`#0F2942` Deep Navy, `#0284C7` Cyan, `#F8FAFC` Technical Slate).
2. **Interactive SCADA Digital Twin Simulator:**
   - Real-time simulated mass flow, Coriolis sensors, actuated valve toggles, and EHEDG/FSSC 22000 safety interlock alarms.
3. **AI Drone Vision Agricultural Simulator:**
   - Interactive canvas demonstrating the OpenCV + Python palm oil tree geolocation algorithm with 95% detection accuracy and autonomous fertilizer spreader targeting.
4. **Hobby as Coffee Enthusiast: Biosphere Roast Works (`biosphereroastworks.my.id`):**
   - Merging mechatronics process automation with specialty coffee micro-roasting craft.
   - Interactive thermodynamic roast curve visualizer (Bean Temperature vs. Rate of Rise / RoR).
5. **Verified ATS Resume Download & Print-Ready Formatting:**
   - One-click PDF download (`Agus_Sobarna_CV.pdf`) with telemetry tracking + clean print stylesheet (`Ctrl + P` prints an exact A4 CV).
6. **Executive Inquiry Terminal:**
   - Direct encrypted inquiry submission with Elysia.js validation, Neon PostgreSQL persistence, and Resend email alerts.

---

## 🛠 Tech Stack (100% Free Tier)

| Layer | Technology | Free Tier Provider |
| :--- | :--- | :--- |
| **Monorepo Manager** | **Bun Workspaces + Turborepo** | Local / Open Source |
| **Backend Runtime & API**| **Bun + Elysia.js** | Open Source / Vercel Serverless Function |
| **Frontend Framework** | **Next.js 15 (App Router) + React 19** | **Vercel Hobby (Free)** |
| **Styling** | **Tailwind CSS + PostCSS** | Open Source |
| **ORM & Database** | **Drizzle ORM + Neon PostgreSQL** | **Neon Free Tier (0.5 GB)** |
| **DNS & Edge Network** | **Cloudflare DNS** | **Cloudflare Free Plan** |
| **Hosting & CI/CD** | **Vercel + GitHub** | **Vercel Hobby + GitHub Free** |

---

## 📁 Monorepo Structure

```text
portfolio-agus-sobarna/
├── apps/
│   ├── web/                     # Next.js 15 App Router Frontend
│   │   ├── public/documents/    # Agus_Sobarna_CV.pdf
│   │   └── src/
│   │       ├── app/             # App router pages & API proxy
│   │       └── components/      # UI & Interactive Simulators
│   └── api/                     # Elysia.js REST API
│       └── src/index.ts         # Routes: /inquiries, /telemetry, /health
├── packages/
│   ├── database/                # Drizzle ORM + Neon PostgreSQL
│   └── shared/                  # TypeScript Types & Structured CV Data
├── .github/workflows/ci.yml     # Automated CI pipeline
├── turbo.json                   # Turborepo task pipeline
└── package.json                 # Monorepo root
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Bun** (v1.2+ or latest): [bun.sh](https://bun.sh)
- **Node.js** (v20+ recommended)

### 2. Install Dependencies
```bash
bun install
```

### 3. Setup Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Fill in your `DATABASE_URL` (from [neon.tech](https://neon.tech)) and optional `RESEND_API_KEY` (from [resend.com](https://resend.com)).

### 4. Run Development Server
```bash
bun run dev
```
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:3000/api/v1/health](http://localhost:3000/api/v1/health)

---

## 🌐 Free Tier Deployment Guide

### A. Push to GitHub
```bash
cd c:\Users\Anindya\Documents\CV\portfolio-agus-sobarna
git init
git add .
git commit -m "feat: executive portfolio for Agus Sobarna with Swiss Industrial design & Biosphere Roast Works"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

### B. Deploy to Vercel (Free Hobby Tier)
1. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Import your GitHub repository.
3. In **Root Directory**, keep it as `./` or set Root to `apps/web` with build command `cd ../.. && bun run build`.
4. Configure Environment Variables:
   - `DATABASE_URL`: Your Neon PostgreSQL connection string.
   - `RESEND_API_KEY`: (Optional) Your Resend API key for email notifications.
   - `INQUIRY_RECEIVER_EMAIL`: `sobarna.agus@gmail.com`
5. Click **Deploy**.

### C. Connect Custom Domain with Cloudflare DNS (Free Plan)
1. In Cloudflare Dashboard, select your domain (e.g. `agussobarna.com` or subdomain `cv.biosphereroastworks.my.id`).
2. Add a **CNAME** DNS record:
   - **Type:** `CNAME`
   - **Name:** `@` (or `portfolio`)
   - **Target:** `cname.vercel-dns.com`
   - **Proxy Status:** Proxied (Orange Cloud)
3. Set **SSL/TLS encryption mode** to **Full (strict)**.
4. Enable **Always Use HTTPS** in SSL/TLS -> Edge Certificates.
