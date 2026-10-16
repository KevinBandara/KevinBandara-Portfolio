export interface ProjectLink {
  label: string;
  url: string;
  type: "web" | "playstore" | "telegram" | "github";
}

export interface ArchitectureNode {
  layer: string;
  title: string;
  tech: string;
  detail: string;
}

export interface FeaturedProject {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  category: "AI & RAG Systems" | "Full-Stack Web" | "Bots & Distributed";
  featured?: boolean;
  logo: string;
  secondaryLogo?: string;
  accentColor: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  overview: string;
  highlights: string[];
  links: ProjectLink[];
  architecture: ArchitectureNode[];
}

export interface SkillGroup {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  accent: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  logo: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  status: string;
  details: string[];
  badge: string;
}

export const HERO_DATA = {
  name: "Kevin Bandara",
  title: "Full-Stack Software Developer & AI Systems Builder",
  tagline:
    "Building production web platforms, AI-driven educational technology, and scalable backend infrastructure.",
  location: "Colombo, Sri Lanka",
  coordinates: "6.9271° N, 79.8612° E",
  status: "Open to Software Engineering & Full-Stack Developer Roles",
  email: "kevinbandara0000@gmail.com",
  github: "https://github.com/KevinBandara",
  linkedin: "https://www.linkedin.com/in/kevinbandara",
  repoUrl: "https://github.com/KevinBandara/KevinBandara-Portfolio",
  portraits: [
    {
      src: "/MyPic1.png",
      title: "Excellence & Leadership Award",
      caption: "Holding the Merit Trophy — Academic & Ceremony Recognition",
      badge: "Trophy Laureate",
    },
    {
      src: "/MyPic.png",
      title: "BMICH Awarding Ceremony 2026",
      caption: "Diploma Awarding Ceremony @ BMICH Colombo",
      badge: "BMICH 2026",
    },
  ],
  telemetry: [
    {
      value: "200K+",
      label: "Cumulative Users Reached",
      detail: "Across MemoAI, DanumaAI & Web Platforms",
    },
    {
      value: "3,200+",
      label: "DanumaAI Downloads",
      detail: "Google Play Store, Web & Telegram Ecosystem",
    },
    {
      value: "2,150+",
      label: "Connected Communities",
      detail: "High-concurrency Discord & Telegram pipelines",
    },
    {
      value: "99.9%",
      label: "Production Uptime",
      detail: "Next.js, Node.js & MongoDB Atlas clusters",
    },
  ],
};

export const ABOUT_DATA = {
  headline: "From System Architecture to Production Scale.",
  paragraphs: [
    "I am a software developer and technology builder from Colombo, Sri Lanka with hands-on experience taking digital products from blank-canvas architecture to live production. I specialize in building full-stack web applications, integrating modern AI workflows (RAG, Gemini API, OpenAI), and engineering resilient backend systems with Next.js, Node.js, and MongoDB.",
    "Beyond writing clean, maintainable code, I have built and operated software products serving thousands of active learners and online communities, managed Google Play Store deployments, and designed contextual monetization and automated booking systems. I am currently reading for the Bachelor of Information Technology (BIT) at the University of Colombo School of Computing (UCSC).",
  ],
  pillars: [
    {
      code: "01 // AI SYSTEMS",
      title: "RAG & Multimodal AI Engineering",
      description:
        "Designing Retrieval-Augmented Generation pipelines, vector search indexing, and multimodal vision problem solvers powered by Gemini and OpenAI APIs.",
    },
    {
      code: "02 // FULL-STACK",
      title: "Production Web & Mobile Ecosystems",
      description:
        "Shipping unified experiences across Next.js 15/16 App Router, React 19, React Native (Expo) Android apps, and Telegram/Discord bots.",
    },
    {
      code: "03 // PRODUCT OPS",
      title: "Commercial & Monetization Architecture",
      description:
        "Engineering custom booking engines, contextual educator ad-placement systems, OAuth2 security, and conversion-focused storefronts.",
    },
  ],
  venturesNote:
    "Founder of Corvento Technologies — evolving from earlier product-building ventures Lycoryx Technologies and Asteroid Technologies. Black Belt in Taekwondo: applying discipline, precision, and execution to software engineering.",
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "languages-frameworks",
    code: "SYS.01",
    title: "Languages & Frameworks",
    subtitle: "Modern full-stack & cross-platform application layer",
    accent: "#38BDF8",
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "Python", highlight: true },
      { name: "Next.js (App Router)", highlight: true },
      { name: "React.js (v19)", highlight: true },
      { name: "React Native (Expo)", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "Express.js" },
      { name: "Tailwind CSS", highlight: true },
      { name: "PHP / Laravel" },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    id: "ai-engineering",
    code: "SYS.02",
    title: "AI Engineering & LLM Workflows",
    subtitle: "Generative AI, Retrieval-Augmented Generation & vision systems",
    accent: "#818CF8",
    skills: [
      { name: "Gemini API", highlight: true },
      { name: "OpenAI API", highlight: true },
      { name: "Retrieval-Augmented Generation (RAG)", highlight: true },
      { name: "Vector Search & Embeddings", highlight: true },
      { name: "Prompt Engineering", highlight: true },
      { name: "Multimodal Image Solving", highlight: true },
      { name: "AI Chatbot & Agent Systems" },
      { name: "Bilingual / Trilingual NLP Workflows" },
    ],
  },
  {
    id: "backend-distributed",
    code: "SYS.03",
    title: "Backend & Distributed Systems",
    subtitle: "High-concurrency APIs, queues & event-driven bots",
    accent: "#34D399",
    skills: [
      { name: "RESTful APIs", highlight: true },
      { name: "Redis", highlight: true },
      { name: "BullMQ", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Microservices Architecture", highlight: true },
      { name: "Discord.js (Sharding & Bots)", highlight: true },
      { name: "Telegram Bot API" },
      { name: "Rate-Limiting & Async Pipelines" },
    ],
  },
  {
    id: "databases-auth",
    code: "SYS.04",
    title: "Databases & Authentication",
    subtitle: "Cloud data persistence, security & identity providers",
    accent: "#F472B6",
    skills: [
      { name: "MongoDB", highlight: true },
      { name: "MongoDB Atlas", highlight: true },
      { name: "NextAuth.js", highlight: true },
      { name: "JWT & Session Security", highlight: true },
      { name: "Google OAuth 2.0", highlight: true },
      { name: "Telegram Seamless Auth", highlight: true },
      { name: "Discord OAuth2" },
      { name: "MySQL / Relational Schemas" },
    ],
  },
  {
    id: "devops-tooling",
    code: "SYS.05",
    title: "DevOps, Cloud & Release",
    subtitle: "CI/CD deployment, mobile store publishing & observability",
    accent: "#FBBF24",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Vercel Cloud", highlight: true },
      { name: "Google Play Console", highlight: true },
      { name: "Postman API Testing", highlight: true },
      { name: "Cloudflare DNS & Edge" },
      { name: "Linux Server Basics" },
      { name: "Production Troubleshooting" },
    ],
  },
  {
    id: "uiux-creative",
    code: "SYS.06",
    title: "UI/UX, Product & Creative",
    subtitle: "Interface systems, visual branding & commercial strategy",
    accent: "#A78BFA",
    skills: [
      { name: "Figma UI/UX", highlight: true },
      { name: "Adobe Photoshop", highlight: true },
      { name: "Adobe Illustrator", highlight: true },
      { name: "Contextual Ad-Placement Design" },
      { name: "Product Monetization & Pricing" },
      { name: "Technical SEO & JSON-LD" },
    ],
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "danuma-ai",
    index: "01",
    title: "DanumaAI — AI-Powered Educational Ecosystem",
    subtitle: "Multi-Platform EdTech Suite (Web, Google Play Android & Telegram)",
    role: "Founder & Lead Developer (Corvento Technologies)",
    period: "2026 – Present",
    category: "AI & RAG Systems",
    featured: true,
    logo: "/DanumaAI.jpg",
    secondaryLogo: "/DanumaAI-fullLogo.webp",
    accentColor: "#38BDF8",
    metrics: [
      { label: "Downloads & Installs", value: "3,200+" },
      { label: "Registered Learners", value: "1,500+" },
      { label: "Platforms", value: "Web • Android • TG" },
      { label: "Curriculum", value: "Grade 6 – A/L" },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "React Native (Expo)",
      "Python",
      "MongoDB Atlas",
      "NextAuth.js",
      "Gemini API",
      "RAG & Vector Search",
      "Telegram Bot API",
    ],
    overview:
      "A production multi-platform educational ecosystem built to assist Sri Lankan students with automated syllabus explanations, step-by-step past-paper analysis, AI mind-map & flashcard generation, and trilingual (Sinhala, Tamil, English) learning workflows.",
    highlights: [
      "Architected Retrieval-Augmented Generation (RAG) workflows and multimodal image-based problem solving tailored for G.C.E. A/L Technology-stream (ET, SFT, ICT) and national curricula.",
      "Published the native Android application to the Google Play Store alongside Web and Telegram Bot integrations, achieving thousands of active student downloads.",
      "Built a custom contextual ad-placement engine enabling tuition educators to integrate relevant promotional material directly into subject-specific study workflows.",
      "Engineered Google OAuth and Telegram authentication pipelines backed by MongoDB Atlas.",
    ],
    links: [
      { label: "Launch Web Platform", url: "https://danumaai.lk/", type: "web" },
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.Lycoryx.danumaai",
        type: "playstore",
      },
      {
        label: "Telegram AI Bot",
        url: "https://t.me/DanumaAI_Bot",
        type: "telegram",
      },
    ],
    architecture: [
      {
        layer: "CLIENT TIER",
        title: "Cross-Platform Omni-Channel Interface",
        tech: "Next.js 16 + React 19 + Expo Android + Telegram Bot",
        detail:
          "Unified student experience across desktop web, mobile WebView/Expo wrapper on Google Play, and instant Telegram bot commands.",
      },
      {
        layer: "IDENTITY & EDGE",
        title: "Multi-Provider Auth & Session Guard",
        tech: "NextAuth.js + Google OAuth2 + Telegram Login",
        detail:
          "Seamless cross-device student identity synchronization with quota tracking and resilient local storage recovery.",
      },
      {
        layer: "AI & RAG ENGINE",
        title: "Curriculum-Aware Neural Pipeline",
        tech: "Gemini API + Vector Embeddings + Vision OCR",
        detail:
          "Retrieves syllabus-grounded context for Sinhala/Tamil/English queries, solves uploaded past-paper diagrams, and synthesizes interactive mind-maps.",
      },
      {
        layer: "DATA & MONETIZATION",
        title: "Persistence & Contextual Ad Engine",
        tech: "MongoDB Atlas + Custom Educator Ad Server",
        detail:
          "Matches student grade/subject context with verified educator promotions while storing chat histories, flashcards, and analytics.",
      },
    ],
  },
  {
    id: "past-papers-wiki",
    index: "02",
    title: "Past Papers Wiki — Custom Booking Engine",
    subtitle: "Automated Reservation & Commercial Scheduling Architecture",
    role: "Full-Stack Architect",
    period: "2025 – Present",
    category: "Full-Stack Web",
    logo: "/paperwiki logo.jpeg",
    accentColor: "#818CF8",
    metrics: [
      { label: "Platform Reach", value: "140K+ Users" },
      { label: "Architecture", value: "REST + State Machine" },
      { label: "Validation", value: "Zero-Conflict Slots" },
    ],
    stack: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "RESTful APIs",
      "TypeScript",
      "Tailwind CSS",
    ],
    overview:
      "Engineered an automated, dependable booking and scheduling architecture tailored for Past Papers Wiki — Sri Lanka's largest past-paper and marking-scheme repository.",
    highlights: [
      "Designed seamless reservation, ad-slot scheduling, and onboarding management workflows with strict conflict validation and atomic backend state handling.",
      "Built administrative dashboards enabling commercial operations teams to track client bookings, availability windows, and campaign lifecycles.",
      "Eliminated manual scheduling bottlenecks by automating slot confirmation and status transitions.",
    ],
    links: [
      {
        label: "Visit PastPapers.Wiki",
        url: "https://pastpapers.wiki/",
        type: "web",
      },
    ],
    architecture: [
      {
        layer: "PRESENTATION LAYER",
        title: "Interactive Booking & Admin Portal",
        tech: "Next.js + Tailwind CSS",
        detail:
          "Real-time calendar slot selector and commercial operations dashboard for managing educator and client reservations.",
      },
      {
        layer: "API & VALIDATION",
        title: "Reservation Controller & Conflict Engine",
        tech: "Node.js + RESTful APIs",
        detail:
          "Enforces strict schema validation, prevents double-booking race conditions, and handles lifecycle state transitions.",
      },
      {
        layer: "PERSISTENCE LAYER",
        title: "Document Store & Audit Logs",
        tech: "MongoDB Atlas",
        detail:
          "Stores booking records, client onboarding metadata, and commercial operation logs with indexed query performance.",
      },
    ],
  },
  {
    id: "memo-ai",
    index: "03",
    title: "MemoAI — Scalable Community AI Bot & Dashboard",
    subtitle: "High-Concurrency Discord AI Assistant & OAuth2 Web Playground",
    role: "Creator & Backend Developer",
    period: "2022 – 2026",
    category: "Bots & Distributed",
    logo: "/MemoAI.png",
    accentColor: "#C084FC",
    metrics: [
      { label: "Historical Users", value: "206,600+" },
      { label: "Discord Servers", value: "2,157+" },
      { label: "Auth Protocol", value: "Discord OAuth2" },
    ],
    stack: [
      "Node.js",
      "Express.js",
      "Discord.js",
      "MongoDB",
      "OpenAI API",
      "Discord OAuth2",
      "Rate-Limiting Pipelines",
    ],
    overview:
      "An AI assistant bot and authenticated web playground providing conversational utilities, multimodal vision testing, and AI image generation to thousands of online Discord communities.",
    highlights: [
      "Handled asynchronous request pipelines, burst rate-limiting, and command routing across more than 2,150 connected Discord servers reaching over 200,000 cumulative users.",
      "Built the MemoAI Web Playground featuring Discord OAuth2 login, prompt sandboxing, multimodal vision testing, and MongoDB conversation persistence.",
      "Maintained high availability and API dependency resilience across multi-year community operations.",
    ],
    links: [
      {
        label: "Web Playground Repo",
        url: "https://github.com/KevinBandara/MemoAI-Web-Playground",
        type: "github",
      },
    ],
    architecture: [
      {
        layer: "GATEWAY & WEB TIER",
        title: "Discord Shards + Express Web Playground",
        tech: "Discord.js + Express.js + OAuth2",
        detail:
          "Processes slash commands across 2,150+ guilds while serving an authenticated web dashboard for prompt sandboxing.",
      },
      {
        layer: "ASYNC PIPELINE",
        title: "Concurrency & Rate-Limiting Middleware",
        tech: "Node.js Async Queues + Token Bucket",
        detail:
          "Protects downstream LLM & image generation endpoints from traffic spikes with per-user and per-server throttling.",
      },
      {
        layer: "AI & DATA LAYER",
        title: "LLM Inference & Guild Persistence",
        tech: "OpenAI API + MongoDB",
        detail:
          "Executes conversational chat, vision analysis, and image synthesis while persisting guild configurations and user logs.",
      },
    ],
  },
  {
    id: "kev-thash-sweet-treats",
    index: "04",
    title: "Kev & Thash Sweet Treats — Bilingual Commerce Platform",
    subtitle: "Custom Confectionery Storefront with Sinhala/English i18n & WhatsApp Ordering",
    role: "Full-Stack Web Developer",
    period: "2025 – Present",
    category: "Full-Stack Web",
    logo: "/KevAndThashLogo.png",
    accentColor: "#F472B6",
    metrics: [
      { label: "Localization", value: "EN & සිංහල" },
      { label: "Customer Rating", value: "5.0 ★" },
      { label: "Stack", value: "Next.js + TS" },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bilingual i18n",
      "Schema.org JSON-LD",
      "Vercel",
    ],
    overview:
      "A bespoke bilingual (English & Sinhala) e-commerce showcase and custom order platform engineered for a confectionery brand in Panadura, Sri Lanka.",
    highlights: [
      "Built a responsive Next.js & TypeScript storefront with instant English and Sinhala (සිංහල) language toggling and interactive menu filtering.",
      "Engineered automated WhatsApp order payload generation for custom cakes, bento combos, and self-pickup scheduling.",
      "Implemented comprehensive Schema.org LocalBusiness & Bakery JSON-LD structured data for rich search visibility.",
    ],
    links: [
      {
        label: "Live Storefront",
        url: "https://kev-thash-sweet-treats.vercel.app/",
        type: "web",
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/KevinBandara/kev-thashSweetTreats",
        type: "github",
      },
    ],
    architecture: [
      {
        layer: "STOREFRONT UI",
        title: "Bilingual Interactive Catalog",
        tech: "Next.js + TypeScript + Tailwind CSS",
        detail:
          "Zero-latency category switching (Cakes, Bento Combos, Cupcakes, Brownies) with full English & Sinhala localization.",
      },
      {
        layer: "CONVERSION ENGINE",
        title: "Direct WhatsApp Order Serializer",
        tech: "Custom URI Builder + Structured Metadata",
        detail:
          "Converts selected menu items and customer preferences into pre-formatted WhatsApp order dispatches.",
      },
    ],
  },
  {
    id: "enterprise-monorepo-academic",
    index: "05",
    title: "Flagship Monorepo & Academic MVC Portals",
    subtitle: "Full-Stack TypeScript Monorepo & Laravel Relational Management System",
    role: "Software Engineer",
    period: "2024 – 2026",
    category: "Full-Stack Web",
    logo: "/CorventoTechLogo.jpg",
    accentColor: "#34D399",
    metrics: [
      { label: "Patterns", value: "Monorepo & MVC" },
      { label: "Auth", value: "RBAC + JWT" },
      { label: "Open Source", value: "2 Public Repos" },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PHP",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "REST APIs",
    ],
    overview:
      "Open-source reference architectures showcasing a production-grade Next.js + Express TypeScript monorepo and a relational Laravel MVC Academic Management System.",
    highlights: [
      "Engineered Flagship Platform: a decoupled full-stack monorepo combining a Next.js (TypeScript, Tailwind CSS) client with a modular Express.js (TypeScript) REST API.",
      "Built an Academic Management System in PHP & Laravel featuring relational SQL schema design, role-based access control (RBAC) for students and faculty, and course selection dashboards.",
    ],
    links: [
      {
        label: "Flagship Monorepo",
        url: "https://github.com/KevinBandara/flagship-platform",
        type: "github",
      },
      {
        label: "Academic MVC Repo",
        url: "https://github.com/KevinBandara/Academic-Management-System-Laravel",
        type: "github",
      },
    ],
    architecture: [
      {
        layer: "CLIENT & MVC VIEWS",
        title: "Next.js App Router & Laravel Blade Portals",
        tech: "TypeScript + Tailwind CSS + Bootstrap 5",
        detail:
          "Role-specific dashboards for administrators, educators, and students with responsive data tables.",
      },
      {
        layer: "SERVICE & DATA LAYER",
        title: "Express TypeScript API & Relational SQL",
        tech: "Express.js + Laravel Eloquent + MySQL",
        detail:
          "Normalized relational schemas, REST controllers, and strict RBAC middleware.",
      },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "corvento",
    role: "Founder & Lead Developer",
    company: "Corvento Technologies",
    period: "2026 – Present",
    location: "Colombo, Sri Lanka",
    type: "Venture & Product Engineering",
    logo: "/CorventoTechLogo.jpg",
    description:
      "Leading product engineering, deployment architecture, and full product lifecycle across proprietary web and AI platforms, including the flagship DanumaAI educational ecosystem.",
    achievements: [
      "Architected and launched DanumaAI across Web (Next.js 16), Android (Google Play Store), and Telegram Bot channels.",
      "Designed RAG pipelines, Gemini AI integrations, and a custom contextual ad-placement engine for Sri Lankan educators.",
      "Consolidated earlier product ventures (Lycoryx Technologies & Asteroid Technologies) under the unified Corvento Technologies engineering identity.",
    ],
    technologies: [
      "Next.js",
      "React Native (Expo)",
      "Python",
      "MongoDB Atlas",
      "Gemini API",
      "RAG",
      "Google Play Console",
    ],
  },
  {
    id: "quizzygram",
    role: "Senior Web Developer",
    company: "Quizzygram",
    period: "2025 – Present",
    location: "Sri Lanka (Hybrid / Remote)",
    type: "Core Engineering",
    logo: "/QuzziygramLogo.png",
    description:
      "Developing and optimizing responsive web modules, interactive educational interfaces, API integrations, and frontend runtime stability.",
    achievements: [
      "Engineered modular, high-performance React & Next.js frontend components with strict responsiveness across mobile and desktop viewports.",
      "Integrated backend RESTful APIs and optimized client-side state management for low-latency user interactions.",
      "Collaborated on feature prioritization, production debugging, and continuous UI/UX refinement.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    id: "paperwikipedia",
    role: "Commercial Operations & Full-Stack Architect",
    company: "PaperWikipedia (Past Papers Wiki)",
    period: "2025 – Present",
    location: "Sri Lanka",
    type: "Architecture & Operations",
    logo: "/paperwiki logo.jpeg",
    description:
      "Bridging technical system architecture and commercial operations for Sri Lanka's largest educational past-papers platform (140K+ student audience).",
    achievements: [
      "Architected the custom Next.js, Node.js, and MongoDB booking engine to automate reservation and campaign scheduling workflows.",
      "Managed educator onboarding workflows, digital operations, and commercial outreach strategies.",
      "Aligned technical tooling with revenue operations to streamline partner acquisition and ad-slot management.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Commercial Operations",
      "REST APIs",
    ],
  },
  {
    id: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Independent & Lycoryx Technologies",
    period: "2022 – Present",
    location: "Colombo, Sri Lanka",
    type: "Client & Product Delivery",
    logo: "/LycoryxTech.jpg",
    description:
      "Delivering custom full-stack web applications, bilingual e-commerce storefronts, AI Discord bots, and backend systems for diverse clients and online communities.",
    achievements: [
      "Created and operated MemoAI, scaling asynchronous Discord.js & OpenAI pipelines to 2,150+ servers and 200,000+ historical users.",
      "Delivered custom commercial web applications including Kev & Thash Sweet Treats with bilingual (EN/SI) support and WhatsApp order automation.",
      "Managed end-to-end requirements gathering, UI/UX design, database modeling, and Vercel/cloud deployments.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Discord.js",
      "MongoDB",
      "OpenAI API",
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "ucsc-bit",
    degree: "Bachelor of Information Technology (BIT)",
    institution:
      "University of Colombo School of Computing (UCSC) — via OpenArc Campus",
    status: "Undergraduate (Reading)",
    badge: "Higher Education",
    details: [
      "Reading for the externally examined BIT degree program offered by UCSC.",
      "Core focus: Software Engineering, Full-Stack Web Development, Database Management Systems, Object-Oriented Analysis & Design, and Computer Networks.",
    ],
  },
  {
    id: "isipathana-al",
    degree: "G.C.E. Advanced Level — Technology Stream",
    institution: "Isipathana College, Colombo",
    status: "Completed",
    badge: "Secondary Alma Mater",
    details: [
      "Information & Communication Technology (ICT) — English Medium",
      "Engineering Technology (ET) & Science for Technology (SFT)",
      "Built a strong analytical foundation in systems engineering, logic circuits, networking, and software development.",
    ],
  },
  {
    id: "atari-graphic-design",
    degree: "Diploma in Graphic Design",
    institution: "ATARI CITY Campus",
    status: "Diploma Awarded",
    badge: "Creative & UI/UX",
    details: [
      "Mastered visual composition, brand identity systems, typography, Adobe Photoshop, and Adobe Illustrator.",
      "Directly informs high-craft frontend engineering, Figma prototyping, and product positioning.",
    ],
  },
  {
    id: "business-english-credentials",
    degree: "Business Management & Professional Communication",
    institution: "Scholarship Program & English in Seven Boxes (BMICH 2026)",
    status: "Awarded",
    badge: "Leadership & Business",
    details: [
      "Pursued Business Management studies via scholarship, strengthening expertise in product strategy, commercial operations, and pricing.",
      "Recognized at the 2026 BMICH Diploma Awarding Ceremony.",
    ],
  },
];
