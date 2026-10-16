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

export interface WhatsAppChannel {
  id: string;
  name: string;
  sinhalaName?: string;
  followers: string;
  url: string;
  logo: string;
  category: string;
  description: string;
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
  title: "Full-Stack Software Developer, AI Systems Builder & Tech Entrepreneur",
  tagline:
    "Architecting production web platforms, AI-driven educational ecosystems, scalable backend infrastructure, and high-reach digital media networks.",
  location: "Colombo, Sri Lanka",
  status: "Open to Software Engineering & Full-Stack Developer Roles",
  email: "kevinbandara0000@gmail.com",
  github: "https://github.com/KevinBandara",
  linkedin: "https://www.linkedin.com/in/kevinbandara",
  domainPrimary: "https://kevinbandara.is-a.dev",
  domainVercel: "https://kevinbandara.vercel.app",
  repoUrl: "https://github.com/KevinBandara/KevinBandara-Portfolio",
  portraits: [
    {
      src: "/KevinPortrait.jpg",
      title: "Kevin Bandara",
      caption: "Full-Stack Software Engineer & Founder of Corvento Technologies",
      objectPosition: "center 28%",
    },
    {
      src: "/MyPic.png",
      title: "Kevin Bandara — BMICH Recognition",
      caption: "Academic & Professional Recognition at BMICH Colombo",
      objectPosition: "28% 22%",
    },
  ],
  telemetry: [
    {
      value: "200K+",
      label: "Cumulative Software Users",
      detail: "Across MemoAI, DanumaAI & Web Platforms",
    },
    {
      value: "74K+",
      label: "Owned Media Subscribers",
      detail: "4 Active WhatsApp Channels under Corvento",
    },
    {
      value: "3,200+",
      label: "DanumaAI App Installs",
      detail: "Google Play Store, Web & Telegram Suite",
    },
    {
      value: "2,150+",
      label: "Connected Communities",
      detail: "High-concurrency Discord & Telegram pipelines",
    },
  ],
};

export const CORVENTO_ECOSYSTEM = {
  name: "Corvento Technologies",
  tagline:
    "The Master Technology & Digital Media Venture Founded by Kevin Bandara",
  lineage: [
    {
      era: "Phase 01",
      name: "Asteroid Technologies",
      desc: "Initial technology studio identity created for early software experiments and community systems.",
    },
    {
      era: "Phase 02",
      name: "Lycoryx Technologies",
      desc: "Expanded into AI product development, launching MemoAI (200K+ users) and the first release of DanumaAI.",
    },
    {
      era: "Present Master Entity",
      name: "Corvento Technologies",
      desc: "The unified parent organization operating DanumaAI, MemoAI, proprietary web platforms, and a 74,000+ subscriber digital media network.",
    },
  ],
  channels: [
    {
      id: "achievers-hub",
      name: "Achievers Hub",
      sinhalaName: "අධ්‍යාපනික පියස",
      followers: "28K+ Followers",
      url: "https://whatsapp.com/channel/0029Vb6OtjqGufIqshtuIM3C",
      logo: "/AchieversHub.jpg",
      category: "Academic & Skills Network",
      description:
        "Empowering Sri Lankan learners with daily academic resources, technology skills, and exam preparation guidance.",
    },
    {
      id: "lanka-diaries",
      name: "Lanka Diaries",
      followers: "20K+ Followers",
      url: "https://whatsapp.com/channel/0029VbAe5k0AInPoph6EFQ34",
      logo: "/LankaDiaries.jpg",
      category: "Digital Media & Lifestyle",
      description:
        "Curated stories, cultural highlights, and daily digital content from the heart of Sri Lanka.",
    },
    {
      id: "sarasavi-sihinaya",
      name: "Sarasavi Sihinaya",
      sinhalaName: "සරසවි සිහිනය",
      followers: "17K+ Followers",
      url: "https://whatsapp.com/channel/0029ValZ7iP4tRrzE8m4s21g",
      logo: "/SarasaviSihinaya.jpg",
      category: "Higher Education Portal",
      description:
        "Dedicated university entrance preparation, A/L study guidance, and academic motivation community.",
    },
    {
      id: "sarasavi-pin-bima",
      name: "Sarasavi Pin Bima",
      sinhalaName: "සරසවි පින් බිම",
      followers: "9K+ Followers",
      url: "https://whatsapp.com/channel/0029Vai0gVe59PwJw0F3IS2g",
      logo: "/SarasaviPinBima.jpg",
      category: "University Pathway Community",
      description:
        "Connecting aspiring undergraduates with university insights, scholarship updates, and study strategies.",
    },
  ] as WhatsAppChannel[],
};

export const ABOUT_DATA = {
  headline: "Software Engineer. AI Builder. Technology Entrepreneur.",
  paragraphs: [
    "I am a software developer and technology entrepreneur from Colombo, Sri Lanka with hands-on experience taking digital products from architecture to live production. I specialize in building full-stack web applications, integrating modern AI workflows (RAG, Gemini API, OpenAI), and engineering scalable backend systems with Next.js, Node.js, and MongoDB.",
    "Beyond writing clean, maintainable code, I founded Corvento Technologies (evolved from Asteroid Technologies and Lycoryx Technologies) — operating software products like DanumaAI and MemoAI alongside a 74,000+ subscriber WhatsApp digital media network. I manage everything from cloud deployments and Google Play Store releases to product monetization, user acquisition, and daily content operations.",
  ],
  pillars: [
    {
      code: "01 // AI & RAG SYSTEMS",
      title: "Production AI Engineering",
      description:
        "Architecting Retrieval-Augmented Generation (RAG) workflows, vector search, and multimodal vision solvers using Gemini and OpenAI APIs.",
    },
    {
      code: "02 // FULL-STACK PLATFORMS",
      title: "Web, Mobile & Bot Ecosystems",
      description:
        "Delivering cohesive applications across Next.js App Router, React Native (Expo) on Google Play, and high-concurrency Discord/Telegram bots.",
    },
    {
      code: "03 // VENTURE & DISTRIBUTION",
      title: "Product Growth & Media Scale",
      description:
        "Combining engineering with entrepreneurship — growing owned audiences of 74K+ subscribers, building contextual ad engines, and driving commercial operations.",
    },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "languages-frameworks",
    code: "01",
    title: "Languages & Frameworks",
    subtitle: "Full-stack web & cross-platform mobile development",
    accent: "#38BDF8",
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "Python", highlight: true },
      { name: "Next.js (App Router)", highlight: true },
      { name: "React.js", highlight: true },
      { name: "React Native (Expo)", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "PHP & Laravel", highlight: true },
    ],
  },
  {
    id: "ai-engineering",
    code: "02",
    title: "AI Engineering",
    subtitle: "LLM pipelines, RAG & multimodal intelligence",
    accent: "#818CF8",
    skills: [
      { name: "Gemini API", highlight: true },
      { name: "OpenAI API", highlight: true },
      { name: "Retrieval-Augmented Generation (RAG)", highlight: true },
      { name: "Vector Search", highlight: true },
      { name: "Prompt Engineering", highlight: true },
      { name: "Multimodal Image Solving" },
      { name: "AI Chatbots & Agents" },
    ],
  },
  {
    id: "backend-distributed",
    code: "03",
    title: "Backend & Distributed Systems",
    subtitle: "Scalable APIs, message queues & bot architectures",
    accent: "#34D399",
    skills: [
      { name: "RESTful APIs", highlight: true },
      { name: "Redis", highlight: true },
      { name: "BullMQ", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Microservices", highlight: true },
      { name: "Discord.js", highlight: true },
      { name: "Telegram Bot API" },
    ],
  },
  {
    id: "databases-auth",
    code: "04",
    title: "Databases & Authentication",
    subtitle: "Cloud data stores, identity & security",
    accent: "#F472B6",
    skills: [
      { name: "MongoDB / MongoDB Atlas", highlight: true },
      { name: "NextAuth.js", highlight: true },
      { name: "JWT", highlight: true },
      { name: "Google OAuth 2.0", highlight: true },
      { name: "Telegram OAuth", highlight: true },
      { name: "Discord OAuth2" },
      { name: "MySQL / Relational SQL" },
    ],
  },
  {
    id: "devops-tooling",
    code: "05",
    title: "DevOps & Tooling",
    subtitle: "Cloud hosting, mobile publishing & testing",
    accent: "#FBBF24",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Vercel", highlight: true },
      { name: "Google Play Console", highlight: true },
      { name: "Postman", highlight: true },
      { name: "Cloudflare" },
      { name: "Linux Server Basics" },
    ],
  },
  {
    id: "uiux-creative",
    code: "06",
    title: "UI/UX, Product & Growth",
    subtitle: "Design systems, branding & monetization",
    accent: "#A78BFA",
    skills: [
      { name: "Figma", highlight: true },
      { name: "Adobe Photoshop", highlight: true },
      { name: "Adobe Illustrator", highlight: true },
      { name: "Contextual Ad Systems" },
      { name: "Digital Media Operations" },
      { name: "Technical SEO" },
    ],
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "danuma-ai",
    index: "01",
    title: "DanumaAI — AI-Powered Educational Ecosystem",
    subtitle: "Multi-Platform EdTech Suite (Web, Android Play Store & Telegram)",
    role: "Founder & Lead Developer (Corvento Technologies)",
    period: "2026 – Present",
    category: "AI & RAG Systems",
    featured: true,
    logo: "/DanumaAI.jpg",
    secondaryLogo: "/DanumaAI-fullLogo.webp",
    accentColor: "#38BDF8",
    metrics: [
      { label: "App Downloads", value: "3,200+" },
      { label: "Registered Students", value: "1,500+" },
      { label: "Platforms", value: "Web • Android • TG" },
      { label: "Curriculum", value: "Grade 6 – A/L" },
    ],
    stack: [
      "Next.js",
      "React Native (Expo)",
      "Python",
      "MongoDB Atlas",
      "NextAuth.js",
      "Gemini API",
      "RAG & Vector Search",
    ],
    overview:
      "Flagship educational product under Corvento Technologies built to assist Sri Lankan students with automated syllabus explanations, step-by-step past-paper analysis, mind-map generation, and trilingual (Sinhala, Tamil, English) learning workflows.",
    highlights: [
      "Architected Retrieval-Augmented Generation (RAG) workflows and image-based problem solving for Technology-stream (ET, SFT, ICT) and national curricula.",
      "Published the native Android application to the Google Play Store with thousands of active downloads alongside Web and Telegram Bot access.",
      "Built a custom contextual ad-placement engine enabling tuition educators to integrate relevant promotional material directly into the study platform.",
    ],
    links: [
      { label: "Launch Web App", url: "https://danumaai.lk/", type: "web" },
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.Lycoryx.danumaai",
        type: "playstore",
      },
      {
        label: "Telegram Bot",
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
          "Unified student experience across desktop web, mobile Android app on Google Play, and instant Telegram bot commands.",
      },
      {
        layer: "IDENTITY & EDGE",
        title: "Multi-Provider Auth & Session Guard",
        tech: "NextAuth.js + Google OAuth2 + Telegram Login",
        detail:
          "Seamless cross-device student identity synchronization with quota tracking and resilient session handling.",
      },
      {
        layer: "AI & RAG ENGINE",
        title: "Curriculum-Aware Neural Pipeline",
        tech: "Gemini API + Vector Embeddings + Vision OCR",
        detail:
          "Retrieves syllabus-grounded context for Sinhala/Tamil/English queries, solves uploaded past-paper diagrams, and synthesizes mind-maps.",
      },
      {
        layer: "DATA & MONETIZATION",
        title: "Persistence & Contextual Ad Engine",
        tech: "MongoDB Atlas + Custom Educator Ad Server",
        detail:
          "Matches student grade/subject context with verified educator promotions while storing chat histories and analytics.",
      },
    ],
  },
  {
    id: "past-papers-wiki",
    index: "02",
    title: "Past Papers Wiki — Custom Booking Engine",
    subtitle: "Automated Reservation & Scheduling Architecture",
    role: "Full-Stack Architect",
    period: "2025 – Present",
    category: "Full-Stack Web",
    logo: "/paperwiki logo.jpeg",
    accentColor: "#818CF8",
    metrics: [
      { label: "Platform Audience", value: "140K+ Users" },
      { label: "Architecture", value: "Next.js + Node" },
      { label: "State Handling", value: "Zero-Conflict" },
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    overview:
      "Engineered an automated, dependable booking and scheduling architecture tailored for the Past Papers Wiki platform.",
    highlights: [
      "Designed seamless reservation and management workflows with robust validation and atomic backend state handling.",
      "Streamlined commercial ad-slot scheduling and partner onboarding across Sri Lanka's largest past-paper archive.",
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
          "Stores booking records, client onboarding metadata, and commercial operation logs.",
      },
    ],
  },
  {
    id: "memo-ai",
    index: "03",
    title: "MemoAI — Scalable Community AI Bot & Dashboard",
    subtitle: "High-Concurrency Discord AI Assistant & OAuth2 Web Playground",
    role: "Creator & Backend Developer (Corvento Technologies)",
    period: "2022 – 2026",
    category: "Bots & Distributed",
    logo: "/MemoAI.png",
    accentColor: "#C084FC",
    metrics: [
      { label: "Historical Users", value: "206,600+" },
      { label: "Discord Servers", value: "2,157+" },
      { label: "Dashboard", value: "Discord OAuth2" },
    ],
    stack: [
      "Node.js",
      "Express.js",
      "Discord.js",
      "MongoDB",
      "OpenAI API",
      "Discord OAuth2",
    ],
    overview:
      "An AI assistant bot and management dashboard operated under Corvento Technologies (formerly Lycoryx), providing conversational utilities, vision testing, and image generation to online communities.",
    highlights: [
      "Handled asynchronous request pipelines and rate-limiting across 2,150+ connected Discord servers reaching over 200,000 cumulative users.",
      "Built Discord OAuth2 authentication workflows, prompt sandboxing, and web management dashboards.",
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
          "Processes slash commands across 2,150+ guilds while serving an authenticated web dashboard.",
      },
      {
        layer: "ASYNC PIPELINE",
        title: "Concurrency & Rate-Limiting Middleware",
        tech: "Node.js Async Queues + Token Bucket",
        detail:
          "Protects downstream LLM & image generation endpoints from burst community traffic.",
      },
      {
        layer: "AI & DATA LAYER",
        title: "LLM Inference & Guild Persistence",
        tech: "OpenAI API + MongoDB",
        detail:
          "Executes conversational chat, vision analysis, and image synthesis with persistent MongoDB storage.",
      },
    ],
  },
  {
    id: "kev-thash-sweet-treats",
    index: "04",
    title: "Kev & Thash Sweet Treats — Bilingual E-Commerce Platform",
    subtitle: "Custom Confectionery Storefront with English/Sinhala i18n & WhatsApp Ordering",
    role: "Full-Stack Developer",
    period: "2025 – Present",
    category: "Full-Stack Web",
    logo: "/KevAndThashLogo.png",
    accentColor: "#F472B6",
    metrics: [
      { label: "Localization", value: "EN & සිංහල" },
      { label: "Rating", value: "5.0 ★" },
      { label: "Stack", value: "Next.js + TS" },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bilingual i18n",
      "Schema.org SEO",
    ],
    overview:
      "A bespoke bilingual (English & Sinhala) storefront and custom cake ordering platform with instant category filtering and one-tap WhatsApp order dispatch.",
    highlights: [
      "Engineered a mobile-first Next.js & TypeScript storefront with instant English/Sinhala toggling and dynamic menu filtering.",
      "Implemented Schema.org LocalBusiness JSON-LD structured data and direct WhatsApp order payload serialization.",
    ],
    links: [
      {
        label: "Live Website",
        url: "https://kev-thash-sweet-treats.vercel.app/",
        type: "web",
      },
      {
        label: "GitHub Repo",
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
          "Zero-latency category switching with full English and Sinhala localization.",
      },
      {
        layer: "CONVERSION ENGINE",
        title: "Direct WhatsApp Order Serializer",
        tech: "Custom URI Builder + JSON-LD SEO",
        detail:
          "Converts selected menu items into pre-formatted WhatsApp order dispatches.",
      },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "corvento",
    role: "Founder & Lead Developer",
    company: "Corvento Technologies (formerly Lycoryx & Asteroid Technologies)",
    period: "2020 – Present",
    location: "Colombo, Sri Lanka",
    type: "Venture & Product Engineering",
    logo: "/CorventoTechLogo.jpg",
    description:
      "Founded and scaled the master technology entity operating DanumaAI, MemoAI, proprietary web platforms, and a 74,000+ subscriber WhatsApp digital media network. Evolved the company identity from Asteroid Technologies to Lycoryx Technologies, and now Corvento Technologies.",
    achievements: [
      "Architected and launched DanumaAI across Web, Google Play Store (Android), and Telegram Bot with RAG workflows and a custom educator ad engine.",
      "Built and operated MemoAI, scaling asynchronous Discord.js and OpenAI pipelines to 206,000+ historical users across 2,157+ servers.",
      "Grew and actively manage 4 high-engagement WhatsApp channels (Achievers Hub, Lanka Diaries, Sarasavi Sihinaya, Sarasavi Pin Bima) reaching 74,000+ subscribers.",
    ],
    technologies: [
      "Next.js",
      "React Native (Expo)",
      "Python",
      "Node.js",
      "MongoDB Atlas",
      "Gemini & OpenAI APIs",
      "Digital Media Ops",
    ],
  },
  {
    id: "quizzygram",
    role: "Senior Web Developer",
    company: "Quizzygram",
    period: "2025 – Present",
    location: "Sri Lanka",
    type: "Software Engineering",
    logo: "/QuzziygramLogo.png",
    description:
      "Developing and optimizing responsive web modules, API integrations, and frontend runtime stability for interactive educational systems.",
    achievements: [
      "Engineered modular React and Next.js web interfaces with strict responsiveness and low-latency state management.",
      "Integrated RESTful backend APIs and improved production frontend reliability.",
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "REST APIs", "Tailwind CSS"],
  },
  {
    id: "paperwikipedia",
    role: "Commercial Operations / Sales & Full-Stack Architect",
    company: "PaperWikipedia (Past Papers Wiki)",
    period: "2025 – Present",
    location: "Sri Lanka",
    type: "Operations & Architecture",
    logo: "/paperwiki logo.jpeg",
    description:
      "Managing user onboarding workflows, digital operations, commercial outreach, and custom booking engine architecture for Sri Lanka's largest past-paper platform.",
    achievements: [
      "Engineered the custom Next.js, Node.js, and MongoDB booking engine to automate reservation and campaign scheduling.",
      "Led partner acquisition, educator onboarding workflows, and revenue operations.",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Commercial Operations"],
  },
  {
    id: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Independent Client Engineering",
    period: "2022 – Present",
    location: "Colombo, Sri Lanka",
    type: "Client Delivery",
    logo: "/LycoryxTech.jpg",
    description:
      "Delivering custom web applications, bilingual e-commerce platforms, dynamic landing pages, and backend systems for diverse clients.",
    achievements: [
      "Delivered production platforms including Kev & Thash Sweet Treats (Next.js/TypeScript) and relational Laravel MVC management systems.",
      "Handled end-to-end client requirements, UI/UX design, database modeling, and cloud deployment.",
    ],
    technologies: ["Next.js", "TypeScript", "Laravel", "PHP", "MySQL", "MongoDB"],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "ucsc-bit",
    degree: "Bachelor of Information Technology (BIT)",
    institution:
      "University of Colombo School of Computing (UCSC) via OpenArc Campus",
    status: "Undergraduate",
    badge: "Degree Program",
    details: [
      "Reading for the Bachelor of Information Technology (BIT) degree at UCSC.",
      "Focus on Software Engineering, Full-Stack Systems, Databases, and Network Architecture.",
    ],
  },
  {
    id: "esoft-se",
    degree: "Pearson Diploma in Software Engineering",
    institution: "ESOFT Metro Campus",
    status: "Completed",
    badge: "Software Engineering",
    details: [
      "Comprehensive training in software development lifecycles, object-oriented programming, database design, and system architecture.",
    ],
  },
  {
    id: "esoft-english",
    degree: "Pearson Diploma in English",
    institution: "ESOFT Metro Campus",
    status: "Completed",
    badge: "Professional Communication",
    details: [
      "Advanced academic and professional English communication, business writing, and presentation skills.",
    ],
  },
  {
    id: "codexpress-laravel",
    degree: "Laravel Web Development Certificate",
    institution: "CodeXPress",
    status: "Certified",
    badge: "Backend & MVC",
    details: [
      "Full-stack MVC web application development using PHP, Laravel, relational SQL schemas, and RESTful routing.",
    ],
  },
  {
    id: "atari-graphic-design",
    degree: "Diploma in Graphic Design",
    institution: "ATARI CITY Campus",
    status: "Completed",
    badge: "UI/UX & Brand Design",
    details: [
      "Visual identity systems, digital illustration, UI composition, Adobe Photoshop, and Adobe Illustrator.",
    ],
  },
  {
    id: "isipathana-al",
    degree: "G.C.E. Advanced Level (Technology Stream)",
    institution: "Isipathana College, Colombo",
    status: "Completed",
    badge: "Secondary Education",
    details: [
      "Engineering Technology (ET), Science for Technology (SFT), and Information & Communication Technology (ICT — English Medium).",
    ],
  },
];
