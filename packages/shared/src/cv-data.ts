import {
  ContactInfo,
  SkillCategory,
  WorkExperienceItem,
  ProjectHighlightItem,
  AchievementItem,
  EducationItem,
  CertificationItem,
  CoffeeFeature,
} from "./types";

export const contactData: ContactInfo = {
  name: "Agus Sobarna",
  title: "Automation & Utilities",
  tagline: "Mechatronics Engineer | Automation & Industry 4.0 Specialist",
  location: "Bogor, West Java, Indonesia",
  phone: "+62 812-9173-1358",
  email: "sobarna.agus@gmail.com",
  linkedin: "https://linkedin.com/in/agus-sobarna-a4052658",
  linkedinDisplay: "linkedin.com/in/agus-sobarna-a4052658",
  coffeeBrand: "Biosphere Roast Works",
  coffeeUrl: "https://biosphereroastworks.my.id",
  resumePdfPath: "/documents/Agus_Sobarna_CV.pdf",
};

export const professionalSummary = `Innovative Mechatronics Engineer with extensive professional experience in industrial automation, robotics, smart factories, and process optimization. Expertise in SCADA systems, IoT, machine vision (OpenCV-Python), and utility management. Proven track record in reducing operational costs, implementing Industry 4.0 solutions, and leading cross-functional engineering projects across palm oil industry, automotive, and chemical industries, managing comprehensive CAPEX/OPEX projects, and driving operational efficiency through innovative automation solutions. Recognized for bridging technical operational technology (OT) with high-level plant performance, safety, and strict regulatory standards.`;

export const technicalSkills: SkillCategory[] = [
  {
    title: "Automation & Robotics",
    skills:
      "SCADA Systems, PLC Programming & Troubleshooting, Python (OpenCV and libraries), Robotic Integration, Special Purpose Machines (SPMs), Electro-Pneumatics, Motion Control.",
  },
  {
    title: "Industry 4.0 & Smart Factory",
    skills:
      "Smart Condition Monitoring, Overall Equipment Effectiveness (OEE) Tracking, Industrial IoT (IIoT) Deployment, Predictive Maintenance Protocols, Real-Time Production Analytics.",
  },
  {
    title: "Utility Management",
    skills:
      "Wastewater Treatment Plant (WWTP), Water Treatment Plant (WTP) & Steam Boilers, Sewage Treatment Plant (STP), Cleanroom HVAC & Chiller Systems, Wet Scrubbers, Dust Collectors, Fire Protection Systems.",
  },
  {
    title: "Project Leadership",
    skills:
      "CAPEX & OPEX Project Lifecycle, Lean Six Sigma (Green Belt), Failure Mode & Effects Analysis (FMEA), Root Cause Analysis, TPM, Cross-Functional Team Leadership, Technical Training.",
  },
  {
    title: "Certifications & Standards",
    skills:
      "BNSP Water Pollution Control, BNSP Air Pollution Control, SGS FSSC 22000, AIB Food Safety, EHEDG Hygienic Design, Kemenaker Fire Protection Class D, Kemenaker TKBT2 (Working at Heights).",
    isFullWidth: true,
  },
];

export const workExperience: WorkExperienceItem[] = [
  {
    id: "firmenich",
    company: "PT Firmenich Indonesia (DSM-Firmenich)",
    period: "May 2022 – Present",
    roles: [
      {
        title: "Process Automation Engineer & Utility Supervisor",
        period: "May 2022 – Present | Bogor, West Java, Indonesia",
        scope:
          "Supervising plant-wide process automation, utility operations, and multi-disciplinary CAPEX projects for a multinational flavor and fragrance manufacturer, ensuring uncompromising compliance with international food hygiene (EHEDG, FSSC 22000) and environmental safety standards.",
        points: [
          {
            headline: "Critical Process Automation",
            description:
              "Engineered and commissioned automated transfer systems for high-viscosity PG/DPG materials, substantially reducing batch cycle times, eliminating manual handling strain, and completely eliminating human operational errors.",
          },
          {
            headline: "Turnkey CAPEX Modernization",
            description:
              "Directed cross-functional CAPEX execution covering chiller plants, cleanroom HVAC systems, wet scrubbers, dust collection units, fire sprinkler networks, and WWTP capacity expansion—completing all strategic facility targets on schedule.",
          },
          {
            headline: "Utility Performance & Energy Optimization",
            description:
              "Optimized facility utility operations (HVAC, WWTP, STP, and WTP steam systems) through automated utility monitoring and predictive maintenance, cutting plant energy consumption significantly.",
          },
          {
            headline: "Asset Reliability & Predictive Maintenance",
            description:
              "Developed and executed preventive and predictive maintenance programs across critical utility infrastructure (WWTP, STP, HVAC, fire hydrant water), substantially reducing equipment downtime and elevating asset operational life.",
          },
          {
            headline: "Environmental & Regulatory Compliance",
            description:
              "Ensured strict adherence to environmental regulations as certified custodian for BNSP Water and Air Pollution Control, maintaining zero non-conformances in environmental audits.",
          },
        ],
      },
    ],
  },
  {
    id: "smart-tbk",
    company: "PT SMART Tbk (Sinarmas Agribusiness and Food)",
    period: "2019 – 2022",
    roles: [
      {
        title: "Workshop & Development Supervisor",
        period: "2019 – 2022 | Indonesia",
        scope:
          "Led engineering workshop operations, research & development of custom estate automation machinery, and agricultural modernization initiatives across extensive palm oil plantations.",
        points: [
          {
            headline: "AI-Driven Agricultural Modernization",
            description:
              "Pioneered AI-powered palm oil automation by developing a custom OpenCV + Python computer vision algorithm to identify and geolocate palm oil trees from drone aerial imagery, integrating detection targets with an auto-fertilizer spreader to drastically reduce field labor dependency and enhance distribution accuracy.",
          },
          {
            headline: "Specialized Machinery Innovation",
            description:
              "Designed, built, and commissioned innovative specialized machinery tailored for rugged palm oil estate environments, slashing substantial recurring operational expenditures.",
          },
          {
            headline: "Workforce Capability Building",
            description:
              "Formulated and conducted technical training programs for field engineers and technicians in control systems, electro-pneumatics, and hardware-software system integration, elevating workforce autonomy.",
          },
        ],
      },
    ],
  },
  {
    id: "astra-otoparts",
    company: "PT Astra Otoparts Tbk",
    period: "2013 – 2019",
    roles: [
      {
        title: "Smart Factory Engineer",
        period: "2017 – 2019",
        scope:
          "Spearheaded digital transformation and smart manufacturing initiatives across high-volume automotive component manufacturing plants.",
        points: [
          {
            headline: "SCADA & OEE Telemetry",
            description:
              "Implemented centralized SCADA-based OEE monitoring across multiple assembly lines, markedly boosting equipment effectiveness and establishing real-time operational visibility for production supervisors.",
          },
          {
            headline: "Industrial IoT Implementation",
            description:
              "Deployed non-invasive edge IoT solutions for live production tracking and machine condition telemetry, substantially reducing unplanned production downtime and streamlining maintenance intervention.",
          },
        ],
      },
      {
        title: "Electrical & Robotic Design Engineer",
        period: "2013 – 2017",
        scope:
          "Engineered electrical systems, control architectures, and robotic automation for specialized manufacturing equipment supplied to automotive clients.",
        points: [
          {
            headline: "Special-Purpose Machine (SPM) Engineering",
            description:
              "Designed custom SPMs and robotic automation cells for automotive clients, significantly improving production assembly speeds while adhering to strict automotive quality and cycle standards.",
          },
          {
            headline: "Failure Mode & Effects Analysis (FMEA)",
            description:
              "Conducted comprehensive FMEA across diverse machine lines, mitigating potential design hazards and consistently ensuring on-time project delivery with zero warranty defects.",
          },
        ],
      },
    ],
  },
];

export const projectHighlights: ProjectHighlightItem[] = [
  {
    id: "ai-fertilizer-spreader",
    number: 1,
    title: "AI-Powered Fertilizer Spreader",
    organization: "PT SMART Tbk",
    challengeSolution:
      "Replaced physically grueling manual fertilizer distribution across large-scale plantations by engineering an intelligent computer vision algorithm (OpenCV + Python) that analyzes drone aerial imagery to detect and map palm oil trees.",
    outcome:
      "Successfully linked tree coordinates to automated fertilizer spreader machinery, achieving high detection accuracy (95%), substantial labor cost reductions (30%), and precise nutrient delivery.",
    metrics: ["95% Detection Accuracy", "30% Labor Reduction", "Substantial OPEX Savings"],
    techTags: ["Python", "OpenCV", "Drone Aerial Geolocation", "Autonomous Machinery", "Edge Microcontrollers"],
    interactiveType: "drone-vision",
  },
  {
    id: "scada-chemical-transfer",
    number: 2,
    title: "SCADA Automation for Chemical Transfer",
    organization: "PT Firmenich Indonesia",
    challengeSolution:
      "Modernized manual chemical handling of Propylene Glycol / Dipropylene Glycol (PG/DPG) by engineering an automated closed-loop tank transfer system with mass flow control, actuated valves, and real-time SCADA interlocks.",
    outcome:
      "Completely eliminated manual handling errors, drastically reduced batch cycle times (by 25%), and ensured full compliance with FSSC 22000 and EHEDG hygienic safety protocols.",
    metrics: ["100% Error Elimination", "25% Cycle Time Cut", "Zero EHEDG Deviations"],
    techTags: ["SCADA Systems", "PLC Logic Interlocks", "Mass Flow Transmitters", "Pneumatic Valves", "EHEDG Standards"],
    interactiveType: "scada",
  },
  {
    id: "smart-factory-iot",
    number: 3,
    title: "Smart Factory IoT Deployment",
    organization: "PT Astra Otoparts Tbk",
    challengeSolution:
      "Eliminated blind spots in production tracking across automotive component lines by instrumenting machinery with edge IoT telemetry gateways linked to centralized SCADA systems.",
    outcome:
      "Integrated live OEE and downtime visualization dashboards, accelerating maintenance troubleshooting and substantially improving overall production uptime (20% OEE surge, 35% downtime cut).",
    metrics: ["+20% OEE Surge", "-35% Unplanned Downtime", "Real-Time Telemetry"],
    techTags: ["IIoT Gateways", "OEE Calculation Engine", "SCADA Dashboards", "Edge Sensor Telemetry", "Lean Six Sigma"],
    interactiveType: "telemetry",
  },
];

export const coffeeEnthusiastData: CoffeeFeature = {
  brandName: "Biosphere Roast Works",
  domain: "biosphereroastworks.my.id",
  headline: "Where Process Automation Meets Specialty Coffee Artistry",
  concept:
    "Applying mechatronics engineering discipline, thermodynamics, and precise PID process control to micro-batch specialty coffee roasting.",
  narrative:
    "Beyond the high-voltage panels and industrial SCADA control rooms, Agus applies the same rigorous engineering mindset to the science of coffee roasting. At Biosphere Roast Works, roasting is approached as a thermodynamic control loop: measuring bean charge temperature, drum speed dynamics, airflow pressure, and real-time Rate of Rise (RoR) curves to unlock the most exquisite aromatic expressions from Indonesian and world-class origins.",
  keyPillars: [
    {
      title: "Precision Thermal Control",
      description:
        "Applying industrial PID loops, infrared thermocouples, and burner modulation to control thermal inertia with single-degree fidelity.",
    },
    {
      title: "RoR Curve Optimization",
      description:
        "Analyzing real-time Rate of Rise (RoR) trajectories to ensure clean development phase without thermal stalling or scorching.",
    },
    {
      title: "Artisanal Single-Origin Curation",
      description:
        "Meticulously sourcing ethically produced microlots across Indonesian highlands (Gayo, Puntang, Kerinci) and experimental fermentation profiles.",
    },
  ],
  signatureNotes: [
    "Thermodynamic Roasting Loops",
    "Micro-Batch Precision Craft",
    "Indonesian Origin Microlots",
    "Artisan Sensory Science",
  ],
};

export const keyAchievements: AchievementItem[] = [
  {
    headline: "On-Time CAPEX Execution",
    detail:
      "Multi-scale capital expenditure modernization projects successfully delivered strictly on schedule through disciplined engineering management and contractor governance.",
    metricBadge: "100% On-Time CAPEX",
  },
  {
    headline: "Estate Labor & Cost Modernization",
    detail:
      "Achieved substantial labor reduction and operational efficiency in palm oil estates via proprietary computer vision and specialized machinery automation.",
    metricBadge: "30% Labor Saved",
  },
  {
    headline: "Sustainable Energy Optimization",
    detail:
      "Achieved significant facility-wide energy savings (15%) through systematic utility optimization, predictive maintenance, and steam system balancing.",
    metricBadge: "15% Energy Saved",
  },
  {
    headline: "Production Uptime & Reliability",
    detail:
      "Engineered SCADA OEE telemetry and predictive asset maintenance protocols cutting plant machine downtime by 35%.",
    metricBadge: "35% Downtime Cut",
  },
];

export const educationData: EducationItem = {
  degree: "Diploma 3 (A.Md.) in Automation & Mechatronics Engineering",
  institution: "Politeknik Manufaktur Negeri Bandung (PMS - ITB)",
  year: "Graduated: 2013",
  description:
    "Comprehensive vocational engineering program centered on industrial automation, electro-pneumatics, precision machine design, PLC programming, microcontrollers, and manufacturing technology.",
};

export const certificationData: CertificationItem[] = [
  {
    title: "Water Pollution Control (PPPA)",
    issuer: "BNSP",
    issuerBadge: "BNSP",
  },
  {
    title: "Air Pollution Control (PPPU)",
    issuer: "BNSP",
    issuerBadge: "BNSP",
  },
  {
    title: "FSSC 22000 (Food Safety System)",
    issuer: "SGS",
    issuerBadge: "SGS",
  },
  {
    title: "Food Safety Standards",
    issuer: "AIB Intl",
    issuerBadge: "AIB Intl",
  },
  {
    title: "Hygienic Design & Engineering",
    issuer: "EHEDG",
    issuerBadge: "EHEDG",
  },
  {
    title: "Fire Protection Class D",
    issuer: "Kemenaker RI",
    issuerBadge: "Kemenaker RI",
  },
  {
    title: "TKBT2 (Working at Heights)",
    issuer: "Kemenaker RI",
    issuerBadge: "Kemenaker RI",
  },
  {
    title: "Lean Six Sigma (Green Belt)",
    issuer: "Certified",
    issuerBadge: "Certified",
  },
];
