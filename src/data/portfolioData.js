// Portfolio Data for G Jananishri
// Extracted and verified from GitHub (https://github.com/jananishri-tech) and user profile requirements

export const PERSONAL_INFO = {
  name: "G Jananishri",
  roleTitle: "AI Developer | Full-Stack Developer | ML Enthusiast",
  degree: "B.Tech – Artificial Intelligence & Machine Learning",
  institution: "Panimalar Engineering College",
  graduationYear: "2029",
  cgpa: "9.5",
  location: "Chennai, Tamil Nadu, India",
  email: "jananidec2007@gmail.com",
  github: "https://github.com/jananishri-tech",
  linkedin: "https://linkedin.com/in/jananishri-g-2557bb415",
  shortBio:
    "Building practical AI, ML, and web solutions that solve real-world problems. Passionate about offline-first disaster resilience, intelligent software tools, and modern full-stack architectures.",
  fullBio:
    "I am an AI & ML undergraduate at Panimalar Engineering College (Class of 2029, CGPA 9.5) exploring the intersection of applied machine learning, generative AI, and full-stack development. I enjoy building tools that solve real, tangible problems — from disaster-resilient offline communication mesh systems to developer utilities and college workflow management. In addition to technical development, I serve as the UI/UX Developer & Frontend Coordinator at CodersClub, coordinating technical lab activities and mentoring peers in modern web engineering.",
  status: "Open to AI/ML & Full-Stack Internships, Hackathons & Research Projects",
};

export const QUICK_STATS = [
  { label: "Academic CGPA", value: "9.5 / 10", highlight: "Panimalar Engg College" },
  { label: "Major Hackathon", value: "SIH Project", highlight: "VARA Offline Mesh" },
  { label: "Symposium Prize", value: "2nd Prize", highlight: "Velammal Nat'l Symposium" },
  { label: "Public Repositories", value: "10 Repos", highlight: "GitHub Profile" },
];

export const SKILL_CATEGORIES = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Model design, practical ML workflows, GenAI, and data evaluation",
    skills: [
      { name: "Machine Learning", level: "Applied", tag: "Predictive Models" },
      { name: "Artificial Intelligence", level: "Core", tag: "Algorithms" },
      { name: "Prompt Engineering", level: "Certified", tag: "NASSCOM & Velammal Prize" },
      { name: "LLM Application Dev", level: "Active", tag: "Code Analysis & EdTech" },
      { name: "Data Analytics", level: "Practiced", tag: "Tata & Deloitte Simulations" },
      { name: "Digital Learning Twins", level: "Concept", tag: "AI_education" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Modern Web",
    description: "Component-driven interfaces, responsive layout systems, and UX design",
    skills: [
      { name: "React", level: "Advanced", tag: "Component Architecture" },
      { name: "Vite", level: "Tooling", tag: "Modern Build Tool" },
      { name: "JavaScript (ES6+)", level: "Core", tag: "Modern Syntax" },
      { name: "Tailwind CSS", level: "Design", tag: "Utility-First Styling" },
      { name: "HTML5 & CSS3", level: "Foundational", tag: "Semantic & Responsive" },
      { name: "UI/UX & Figma", level: "Coordination", tag: "CodersClub Lead" },
    ],
  },
  {
    id: "backend-core",
    title: "Backend & Core Programming",
    description: "Server architecture, RESTful APIs, and fundamental programming languages",
    skills: [
      { name: "Python", level: "Primary", tag: "AI/ML & Scripting" },
      { name: "Java", level: "Proficient", tag: "Object-Oriented Programming" },
      { name: "C++", level: "Foundational", tag: "DSA & System Logic" },
      { name: "Node.js & Express", level: "Backend", tag: "REST APIs & Middleware" },
      { name: "Prisma ORM", level: "Integration", tag: "Database Schemas" },
      { name: "AST Parsing", level: "Applied", tag: "IntegrateAI Analysis" },
    ],
  },
  {
    id: "databases-tools",
    title: "Databases, Cloud & Dev Tools",
    description: "Relational data modeling, version control, and collaboration tools",
    skills: [
      { name: "MySQL", level: "Relational", tag: "Structured Queries" },
      { name: "PostgreSQL & Neon", level: "Cloud DB", tag: "College Complaint App" },
      { name: "Firebase", level: "Realtime", tag: "Offline Sync Staging" },
      { name: "Git & GitHub", level: "Daily Workflow", tag: "Version Control" },
      { name: "VS Code / IDEs", level: "Environment", tag: "Productive Development" },
    ],
  },
  {
    id: "embedded-iot",
    title: "Hardware, IoT & Sensor Networks",
    description: "Microcontroller interfacing and offline mesh communications",
    skills: [
      { name: "ESP32", level: "Hardware", tag: "Microcontroller Core" },
      { name: "LoRa Communication", level: "RF Wireless", tag: "Long-Range Mesh" },
      { name: "Coaxial Sensor Array", level: "Architecture", tag: "3 Sensors to 1 ESP32" },
      { name: "ESP32-CAM", level: "Imaging", tag: "Disaster Evidence Capture" },
      { name: "PIR Human Detection", level: "Sensing", tag: "Life Detection" },
      { name: "GPS Data Transmission", level: "Telemetry", tag: "Location Reporting" },
    ],
  },
];

export const FEATURED_PROJECT_VARA = {
  id: "vara",
  title: "VARA",
  subtitle: "Disaster-Resilient Offline Communication System",
  badge: "Major Hackathon Winner • SIH Project",
  problem:
    "During major natural disasters like catastrophic floods, earthquakes, landslides, and forest fires, conventional telecommunication towers collapse and internet backbones sever. First responders and trapped citizens lose the ability to signal distress or assess disaster perimeters.",
  keyIdea:
    "OFFLINE RESILIENCE + ONE ESP32 + COAXIAL SENSOR ARRANGEMENT → DRAMATICALLY LOWER HARDWARE COST",
  technicalDifferentiator:
    "Instead of deploying expensive multi-microcontroller clusters (requiring a separate ESP32 for every single sensor node), VARA connects 3 risk-specific sensors through an innovative coaxial-format arrangement to ONE single ESP32 microcontroller, drastically cutting power draw and hardware deployment cost.",
  workflow: {
    preDisaster: [
      { step: "Detect", detail: "Risk-specific sensors continuously monitor environmental triggers (flood levels, vibration, heat, ground movement)." },
      { step: "Process", detail: "Single ESP32 filters baseline noise and calculates threat threshold locally without cloud computing." },
      { step: "Warn", detail: "Local alerts and early perimeter evacuation warnings broadcast to vicinity nodes before infrastructure collapses." },
    ],
    postDisaster: [
      { step: "Report", detail: "Trapped individuals or sensor trigger points log emergency distress packets with photo evidence and incident classification." },
      { step: "Locate", detail: "Integrated GPS module accurately coordinates geo-location telemetry even when cellular tower triangulation fails." },
      { step: "Transfer", detail: "Critical-packet priority protocol broadcasts data packets through LoRa RF frequencies over kilometers without internet." },
      { step: "Reach", detail: "Data packets arrive at emergency command hubs and offline rescue sync stations for prioritized deployment." },
    ],
  },
  capabilities: [
    "Offline-first disaster communication resilient to blackouts",
    "Pre-disaster hazard detection, processing, and localized warning",
    "Post-disaster incident logging, GPS coordinates, and photo evidence",
    "Coaxial sensor arrangement connecting 3 risk sensors to ONE ESP32",
    "LoRa long-range wireless packet transfer with RSSI & SNR validation",
    "ESP32-CAM image capture and PIR human movement detection",
    "Critical-packet priority queue ensuring emergency SOS packets transmit first",
    "Local offline incident storage with sync-on-reconnect protocol",
  ],
  scenarios: [
    { title: "Floods", description: "Water-level surge detection, trapped victim location tracking, and SOS dispatch." },
    { title: "Landslides", description: "Soil shift and seismic vibration detection along mountain roads and settlements." },
    { title: "Forest Fires", description: "Rapid thermal spikes and smoke perimeter tracing over dense canopy." },
    { title: "Earthquakes", description: "Structural vibration monitoring and PIR-based human presence detection under debris." },
  ],
  prototypeEvidence: [
    "Functional ESP32 physical hardware prototype assembled & tested",
    "LoRa communication successfully demonstrated with verified packet reception",
    "Real-time GPS coordinate telemetry transmission validated",
    "Signal reliability verified via RSSI (Signal Strength) and SNR (Signal-to-Noise) field measurements",
    "Offline mobile application with local incident storage database",
    "ESP32-CAM optical capture, local file log, and bidirectional ESP32 sync",
  ],
  techStack: ["ESP32", "LoRa RF (SX1278)", "C++ (Embedded)", "GPS Module", "PIR Sensor", "ESP32-CAM", "Offline Storage", "Coaxial Sensor Array"],
};

export const PROJECTS = [
  {
    id: "complaint-system",
    name: "Panimalar Accessory Repair Complaint Management System",
    category: "Full-Stack",
    badge: "College Institutional System",
    shortDesc:
      "A complete multi-role complaint and equipment repair workflow application engineered for Panimalar Engineering College.",
    problem:
      "College laboratories, departmental equipment, and campus accessories required a transparent, accountable lifecycle tracker to eliminate delays between breakdown reporting and technician resolution.",
    solution:
      "Engineered an institutional workflow covering 6 distinct administrative roles and a 6-stage audit lifecycle from registration to NAAC/IQAC verification.",
    lifecycle: ["Registered", "Inspection", "Repair Assigned", "Action Taken", "Verification", "Closed"],
    roles: ["Admin", "HOD", "Faculty/Staff", "Technician", "Service Provider", "IQAC/NAAC"],
    myContribution:
      "Spearheaded Frontend Development: designed responsive dashboards, interactive status timelines, role-based interfaces, and integrated API endpoints with Express and PostgreSQL.",
    technologies: ["React", "Vite", "Tailwind CSS", "Express.js", "Prisma ORM", "PostgreSQL", "Neon Cloud"],
    githubUrl: "https://github.com/jananishri-tech",
    demoUrl: null,
  },
  {
    id: "integrate-ai",
    name: "IntegrateAI",
    category: "AI/ML + DevTools",
    badge: "AI Developer Tool",
    shortDesc:
      "AI-assisted developer tool that analyzes frontend and backend codebases to infer API contracts, detect mismatches, and suggest patches.",
    problem:
      "Full-stack developers waste hours debugging subtle schema drifts, mismatched JSON payload keys, and unhandled status codes between frontend client calls and backend controllers.",
    solution:
      "Uses AST (Abstract Syntax Tree) parsing combined with LLM prompt integration to inspect client network invocations against API routes, detecting mismatches before runtime and proposing user-approved code patches.",
    myContribution:
      "Designed the contract inference workflow, AST parsing logic, and interactive error explanation interface.",
    technologies: ["React", "Node.js", "Express", "AST Parsing", "API Contract Analysis", "LLM Integration"],
    githubUrl: "https://github.com/jananishri-tech",
    demoUrl: null,
  },
  {
    id: "ai-education",
    name: "AI_education (Digital Learning Twin)",
    category: "AI/ML",
    badge: "EdTech Innovation",
    shortDesc:
      "AI-powered EdTech platform creating a Digital Learning Twin to personalize education, predict academic performance, and auto-generate adaptive study plans.",
    problem:
      "One-size-fits-all curricula fail to adapt to individual student learning speeds, knowledge gaps, and revision retention curves.",
    solution:
      "Constructs a simulated 'Digital Learning Twin' tracking topic mastery over time, predicting exam outcomes, highlighting weak retention concepts, and generating personalized daily study sprints.",
    myContribution:
      "Developed the Android client application and personalized study plan generation algorithms.",
    technologies: ["Kotlin", "TypeScript", "AI Personalization", "Predictive Analytics", "Android SDK"],
    githubUrl: "https://github.com/jananishri-tech/AI_education",
    demoUrl: null,
  },
  {
    id: "byproduct-exchange",
    name: "Industrial Byproduct Exchange",
    category: "Full-Stack",
    badge: "Circular Economy Concept",
    shortDesc:
      "A sustainable B2B platform connecting industries generating usable byproducts with enterprises capable of repurposing them — 'LinkedIn + OLX for industrial waste'.",
    problem:
      "Valuable industrial byproducts (slag, chemical effluents, ash, offcuts) are dumped into landfills because suppliers lack discovery channels to reach secondary manufacturers.",
    solution:
      "Designed a marketplace algorithm matching industrial waste specs (chemical purity, quantity, location) with recycling and manufacturing facilities to drive circular industrial ecology.",
    myContribution:
      "Architected the byproduct discovery matching model, supplier/buyer categorization, and sustainable resource exchange dashboard concept.",
    technologies: ["React", "Node.js", "Matching Algorithms", "Sustainable Tech", "UI/UX Architecture"],
    githubUrl: "https://github.com/jananishri-tech",
    demoUrl: null,
  },
  {
    id: "predictive-infrastructure",
    name: "Predictive Infrastructure Monitoring System",
    category: "AI/ML",
    badge: "Predictive AI Concept",
    shortDesc:
      "AI/ML-oriented predictive maintenance system designed to forecast municipal and institutional infrastructure anomalies before catastrophic failure.",
    problem:
      "Traditional infrastructure maintenance operates reactively after pipes burst or structural cracks expand, causing costly collateral damage and service halts.",
    solution:
      "Trained time-series anomaly detection models on historical sensor trends to predict failure probabilities and recommend proactive inspection schedules.",
    myContribution:
      "Engineered data modeling, predictive scoring metrics, and decision-support visualization cards.",
    technologies: ["Python", "Machine Learning", "Data Analytics", "Predictive Modeling", "Time-Series"],
    githubUrl: "https://github.com/jananishri-tech",
    demoUrl: null,
  },
  {
    id: "snap-and-fix",
    name: "Snap-and-Fix",
    category: "Full-Stack",
    badge: "Civic Infrastructure Tech",
    shortDesc:
      "Civic problem reporting platform allowing citizens to report potholes, water leakages, and hazards with live GPS tagging and photo verification.",
    problem:
      "Municipal civic issue tracking suffers from vague complaints, lack of location accuracy, and zero public transparency regarding repair status.",
    solution:
      "Citizens snap a photo of the defect; the app automatically tags GPS coordinates, classifies severity priority, logs timestamps, and renders real-time status updates on a municipal dispatch map.",
    myContribution:
      "Designed mobile-first citizen submission UI, photo upload pipeline, GPS tagging workflow, and authority map dashboard.",
    technologies: ["React / Mobile Web", "GPS Geolocation", "Live Maps API", "Cloud Database", "Photo Verification"],
    githubUrl: "https://github.com/jananishri-tech",
    demoUrl: null,
  },
];

export const GITHUB_REPOSITORIES = [
  {
    name: "AI_education",
    description: "AI-powered EdTech platform that creates a Digital Learning Twin to personalize learning, predict academic performance, and generate AI-driven study plans.",
    language: "Kotlin",
    stars: 0,
    forks: 0,
    url: "https://github.com/jananishri-tech/AI_education",
    topics: ["edtech", "ai", "personalization", "kotlin", "android"],
  },
  {
    name: "education-ai",
    description: "Core AI models and web interface integration for intelligent student learning path adaptation.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/jananishri-tech/education-ai",
    topics: ["typescript", "ai-models", "education"],
  },
  {
    name: "education",
    description: "Foundational web prototypes and interactive learning module interfaces.",
    language: "HTML",
    stars: 0,
    forks: 0,
    url: "https://github.com/jananishri-tech/education",
    topics: ["html", "css", "web-design"],
  },
  {
    name: "login-page",
    description: "Clean, responsive authentication UI component featuring modern form validation and accessible styling.",
    language: "HTML / CSS",
    stars: 0,
    forks: 0,
    url: "https://github.com/jananishri-tech/login-page",
    topics: ["ui", "css", "authentication"],
  },
  {
    name: "123",
    description: "Experimental repository exploring web interactive styling and layout mechanics.",
    language: "HTML",
    stars: 0,
    forks: 0,
    url: "https://github.com/jananishri-tech/123",
    topics: ["frontend-experiments"],
  },
];

export const EXPERIENCE_INTERNSHIPS = [
  {
    role: "ML Internship Trainee",
    organization: "Internshala with IITM Pravartak",
    duration: "June – August 2026",
    badge: "Internship Training",
    type: "Machine Learning",
    description:
      "Selected for specialized machine learning training program affiliated with IITM Pravartak. Focused on core ML algorithms, data preprocessing pipelines, model evaluation metrics, and practical machine learning implementation.",
    skillsGained: ["Machine Learning", "Algorithm Implementation", "Data Preprocessing", "Model Evaluation"],
  },
  {
    role: "Machine Learning Intern",
    organization: "SoftNexis",
    duration: "1 Month",
    badge: "Internship",
    type: "Industry Internship",
    description:
      "Completed a dedicated 1-month machine learning internship exploring exploratory data analysis (EDA), dataset preparation, feature extraction, and predictive model experimentation.",
    skillsGained: ["Data Analysis", "Feature Engineering", "Python ML Libraries", "Dataset Curation"],
  },
  {
    role: "AI Intern / AI Program Participant",
    organization: "Marcello Tech",
    duration: "1 Week",
    badge: "Intensive Program",
    type: "Artificial Intelligence",
    description:
      "Participated in an intensive week-long AI immersion program covering practical AI tooling, neural network concepts, and real-world deployment patterns.",
    skillsGained: ["Applied AI", "Prompt Engineering", "AI Tooling", "Industry Use-Cases"],
  },
];

export const INDUSTRY_PROGRAMS = [
  {
    title: "Tata GenAI Powered Data Analytics",
    provider: "Forage",
    type: "Virtual Experience Program",
    description: "Completed industry simulation focusing on generative AI-driven data exploration, prompt-assisted analytics, and executive business insights reporting.",
  },
  {
    title: "Deloitte Data Analytics Simulation",
    provider: "Forage",
    type: "Job Simulation",
    description: "Conducted simulated client analytics case study: structured data cleansing, analytical modeling, and strategic data-backed recommendations.",
  },
  {
    title: "NASSCOM Prompt Engineering Certification",
    provider: "NASSCOM",
    type: "Verified Badge",
    description: "Earned official NASSCOM competency badge recognizing skill in advanced prompt engineering, context framing, and LLM output steering.",
  },
  {
    title: "Gemini Student Ambassador",
    provider: "Google Gemini College Initiative",
    type: "Campus Ambassador",
    description: "Selected as campus ambassador representing Google Gemini at Panimalar Engineering College for events including 'Freshers Party Night' and 'Fund My Crazy'.",
  },
];

export const ACHIEVEMENTS = [
  {
    id: "velammal",
    title: "2nd Prize in Prompt Engineering",
    event: "Velammal National Symposium",
    award: "₹1,000 Cash Prize + Certificate",
    category: "National Level Symposium",
    description:
      "Secured 2nd position in the competitive Prompt Engineering technical track at the Velammal National Symposium, demonstrating precise contextual prompting and structured AI generation.",
    icon: "Trophy",
  },
  {
    id: "adobe",
    title: "Round 2 Shortlisted",
    event: "Adobe University Hackathon 2026",
    award: "National Hackathon Finalist Stage",
    category: "Competitive Hackathon",
    description:
      "Shortlisted for Round 2 in the prestigious Adobe University Hackathon 2026, progressing to the live-proctored technical case-study stage among top student developers nationwide.",
    icon: "Award",
  },
  {
    id: "vara-hackathon",
    title: "Internal Hackathon Winner & SIH Progression",
    event: "Panimalar Internal Hackathon → Smart India Hackathon (SIH)",
    award: "Selected Project Nomination",
    category: "Hardware & IoT Innovation",
    description:
      "Selected as the winning internal hackathon project for 'VARA – Disaster-Resilient Offline Communication System', progressing as an officially nominated project for Smart India Hackathon (SIH).",
    icon: "Zap",
  },
  {
    id: "nasscom-badge",
    title: "NASSCOM Prompt Engineering Certified Badge",
    event: "NASSCOM FutureSkills",
    award: "Official Professional Badge",
    category: "Industry Certification",
    description:
      "Certified by NASSCOM for demonstrating verified knowledge in foundational and applied prompt engineering methodologies.",
    icon: "CheckCircle",
  },
  {
    id: "gemini-ambassador",
    title: "Gemini Ambassador — College Events",
    event: "Panimalar Engineering College",
    award: "Official Student Ambassador",
    category: "Community & Leadership",
    description:
      "Appointed as Gemini Ambassador for campus marquee events including 'Freshers Party Night' and 'Fund My Crazy', fostering technical enthusiasm around Google AI technologies.",
    icon: "Sparkles",
  },
];

export const LEADERSHIP_CODERSCLUB = {
  role: "UI/UX Developer & Frontend Coordinator",
  organization: "CodersClub — Panimalar Engineering College",
  selectionProcess: "Selected through a competitive, multi-round technical and design evaluation process.",
  responsibilities: [
    "Coordinating frontend development for college technical platforms and student-facing applications.",
    "Designing intuitive, accessible UI/UX mockups and prototypes using modern web standards and Figma.",
    "Assisting in conducting coding lab sessions, debugging workshops, and hackathon preparation.",
    "Mentoring junior peers in responsive web development, Git workflows, and component architecture.",
    "Liaising between student developer squads and faculty organizers during technical symposia.",
  ],
};

export const EDUCATION = [
  {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Panimalar Engineering College",
    duration: "2025 – 2029",
    grade: "CGPA: 9.5 / 10",
    badge: "Current Degree",
    highlights: [
      "Department of Artificial Intelligence & Machine Learning",
      "Academic performance ranking with 9.5 CGPA",
      "Active participant in Smart India Hackathon (SIH) & national symposia",
      "Frontend Coordinator & UI/UX Developer at CodersClub",
    ],
  },
  {
    degree: "Higher Secondary & Secondary Education",
    institution: "St. Joseph Matriculation Higher Secondary School",
    duration: "Completed with Distinction",
    grade: "Distinction",
    badge: "Schooling",
    highlights: [
      "Rigorous foundational focus in Mathematics, Physics, and Computer Science",
      "Strong analytical foundation propelling university-level AI/ML studies",
    ],
  },
];
