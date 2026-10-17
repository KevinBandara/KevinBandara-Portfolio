export interface ProjectLink {
  label: string;
  url: string;
  type: "web" | "playstore" | "telegram" | "github" | "drive" | "youtube";
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
  statusBadge?: string;
  statusTone?: "active" | "archived" | "client";
  category:
    | "AI & EdTech"
    | "Full-Stack Web"
    | "Archived Ventures"
    | "Creative & Media";
  featured?: boolean;
  logo: string;
  secondaryLogo?: string;
  poweredBy?: string;
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
  secondaryLogo?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  links?: { label: string; url: string }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  category: "degree" | "diploma" | "certificate";
  badge: string;
  details: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: "competition" | "sports" | "volunteering";
  highlight: string;
}

export const HERO_DATA = {
  name: "Kevin Bandara",
  greeting: "Hello, I'm",
  title: "Full-Stack Software Engineer, AI Systems Builder & Tech Entrepreneur",
  tagline:
    "I architect and ship production web platforms, AI-powered educational applications, and high-reach digital media ecosystems from Colombo, Sri Lanka.",
  location: "Colombo, Sri Lanka",
  nationality: "Sri Lankan",
  religion: "Buddhist",
  status: "Available for Software Engineering & Full-Stack Roles",
  email: "kevinbandara0000@gmail.com",
  phone: "071 851 1165",
  phoneIntl: "+94 71 851 1165",
  phoneHref: "tel:+94718511165",
  whatsappUrl: "https://wa.me/94718511165",
  github: "https://github.com/KevinBandara",
  linkedin: "https://www.linkedin.com/in/kevinbandara",
  youtube: "https://www.youtube.com/@corventotech",
  graphicsDrive:
    "https://drive.google.com/drive/folders/184pMfdN0AlFBfXTEU8eSFVQzaEWJ4IJ5?usp=drive_link",
  domainPrimary: "https://kevinbandara.is-a.dev",
  domainVercel: "https://kevinbandara.vercel.app",
  repoUrl: "https://github.com/KevinBandara/KevinBandara-Portfolio",
  portraits: [
    {
      src: "/KevinPortrait.jpg",
      title: "Kevin Bandara",
      caption: "Full-Stack Software Engineer & Founder of Corvento Technologies",
      objectPosition: "center 24%",
    },
    {
      src: "/MyPic.png",
      title: "Kevin Bandara — BMICH Colombo",
      caption: "Academic & Professional Recognition Ceremony",
      objectPosition: "28% 20%",
    },
  ],
  telemetry: [
    {
      value: "206K+",
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
      detail: "Google Play Store, Web & Telegram Bot",
    },
    {
      value: "15+",
      label: "Diplomas, Certificates & Awards",
      detail: "UCSC, UoM, Pearson ESOFT, ATARI & ICBT",
    },
  ],
};

export const CORVENTO_ECOSYSTEM = {
  name: "Corvento Technologies",
  tagline:
    "The Single Master Venture Entity Founded & Operated by Kevin Bandara",
  youtubeUrl: "https://www.youtube.com/@corventotech",
  graphicsPortfolioUrl:
    "https://drive.google.com/drive/folders/184pMfdN0AlFBfXTEU8eSFVQzaEWJ4IJ5?usp=drive_link",
  lineage: [
    {
      era: "Phase 01 • Origin Studio",
      name: "Asteroid Technologies",
      logo: "/BlackWolfMC-Logo.jpg",
      status: "Evolved",
      desc: "Initial technology studio identity created to launch the BlackWolf Minecraft Server, gaming communities, and early web utilities.",
    },
    {
      era: "Phase 02 • AI Scaling Era",
      name: "Lycoryx Technologies",
      logo: "/LycoryxTech.jpg",
      status: "Rebranded",
      desc: "Expanded into high-concurrency AI products — scaling MemoAI to 206,600+ users across 2,157+ Discord servers and launching the first release of DanumaAI.",
    },
    {
      era: "Phase 03 • Master Entity (Present)",
      name: "Corvento Technologies",
      logo: "/CorventoTechLogo.jpg",
      status: "Active Master Entity",
      desc: "The unified parent company powering DanumaAI (Web, Play Store & Telegram Bot), @corventotech YouTube/Reels, and a 74,000+ subscriber WhatsApp media network.",
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
        "Curated stories, cultural highlights, and daily digital content from across Sri Lanka.",
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
  headline:
    "Bridging Full-Stack Software Engineering, AI Systems, and Digital Entrepreneurship.",
  paragraphs: [
    "I am a software developer, creative designer, and entrepreneur from Colombo, Sri Lanka with hands-on experience taking digital products from architecture to live production. Currently reading for my Bachelor of Information Technology (BIT) at the University of Colombo School of Computing (UCSC), I specialize in full-stack web engineering (Next.js, React, Node.js, Laravel, MongoDB) and applied AI workflows (RAG, Gemini API, OpenAI).",
    "Beyond writing code, I founded Corvento Technologies (evolved from Asteroid Technologies and Lycoryx Technologies) to build products like DanumaAI and operate a 74,000+ subscriber WhatsApp educational & media network. I also serve as Senior Web Developer for Quizzygram, Sales Manager & Booking System Architect at Past Papers Wiki, Digital Operations Coordinator at MAOS Office, and an international freelancer on Fiverr and Upwork.",
  ],
  pillars: [
    {
      code: "Full-Stack & AI",
      title: "Production Web, Mobile & RAG Systems",
      description:
        "Building Next.js web apps, Expo Android apps on Google Play, and Gemini/OpenAI RAG bots serving thousands of active users.",
    },
    {
      code: "Ventures & Media",
      title: "Corvento Ecosystem & 74K+ Audience",
      description:
        "Operating proprietary software products, contextual educator ad engines, and daily WhatsApp broadcast channels reaching 74,000+ followers.",
    },
    {
      code: "Creative & Global",
      title: "Adobe Creative Suite, Reels & Freelance",
      description:
        "Scholarship-winning graphic designer & video editor delivering brand identities, motion reels, and full-stack apps on Fiverr & Upwork.",
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
      { name: "Node.js & Express.js", highlight: true },
      { name: "PHP & Laravel", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    id: "ai-engineering",
    code: "02",
    title: "AI & LLM Engineering",
    subtitle: "RAG pipelines, vector search & multimodal AI",
    accent: "#818CF8",
    skills: [
      { name: "Gemini API", highlight: true },
      { name: "OpenAI API", highlight: true },
      { name: "Retrieval-Augmented Generation (RAG)", highlight: true },
      { name: "Vector Search", highlight: true },
      { name: "Prompt Engineering", highlight: true },
      { name: "Vision OCR & Image Problem Solving" },
      { name: "AI Agents & Chatbots" },
    ],
  },
  {
    id: "backend-distributed",
    code: "03",
    title: "Backend & Distributed Systems",
    subtitle: "APIs, queues, real-time chat & bot infrastructure",
    accent: "#34D399",
    skills: [
      { name: "RESTful APIs", highlight: true },
      { name: "Redis & BullMQ", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Microservices", highlight: true },
      { name: "Telegram Bot & WebApp APIs", highlight: true },
      { name: "Discord.js", highlight: true },
      { name: "Game Server Infrastructure" },
    ],
  },
  {
    id: "databases-auth",
    code: "04",
    title: "Databases & Authentication",
    subtitle: "Cloud data stores, identity & security",
    accent: "#F472B6",
    skills: [
      { name: "MongoDB & MongoDB Atlas", highlight: true },
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
    title: "DevOps, Cloud & Operations",
    subtitle: "Deployment, mobile publishing & digital operations",
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
    title: "Adobe Creative Suite, UI/UX & Video",
    subtitle: "Certified in Premiere Pro, After Effects, Photoshop & Graphic Design",
    accent: "#A78BFA",
    skills: [
      { name: "Adobe Photoshop (Certified)", highlight: true },
      { name: "Adobe Illustrator", highlight: true },
      { name: "Adobe Premiere Pro (Certified)", highlight: true },
      { name: "Adobe After Effects (Certified)", highlight: true },
      { name: "Adobe Lightroom" },
      { name: "Figma (UI/UX Prototyping)", highlight: true },
      { name: "Short-Form Reel & Video Editing", highlight: true },
      { name: "Brand Identity & Logo Design", highlight: true },
    ],
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "danuma-ai",
    index: "01",
    title: "DanumaAI — AI-Powered Educational Ecosystem",
    subtitle:
      "Powered by Corvento Technologies • Web App, Google Play Store App & Telegram AI Bot",
    role: "Founder & Lead Developer",
    period: "2026 – Present",
    statusBadge: "Active Flagship • Live",
    statusTone: "active",
    category: "AI & EdTech",
    featured: true,
    logo: "/DanumaAI.jpg",
    secondaryLogo: "/CorventoTechLogo.jpg",
    poweredBy: "Powered by Corvento Technologies",
    accentColor: "#38BDF8",
    metrics: [
      { label: "Play Store Downloads", value: "3,200+" },
      { label: "Active Students", value: "1,500+" },
      { label: "3-Platform Ecosystem", value: "Web • Play Store • TG Bot" },
      { label: "Parent Entity", value: "Corvento Tech" },
    ],
    stack: [
      "Next.js Web App",
      "React Native (Expo Play Store App)",
      "Telegram Bot API & OAuth",
      "Python",
      "MongoDB Atlas",
      "NextAuth.js",
      "Gemini API",
      "RAG & Vector Search",
    ],
    overview:
      "Flagship AI educational ecosystem powered by Corvento Technologies, operating seamlessly across a full-featured Web App (danumaai.lk), an official Google Play Store Android App (3,200+ downloads), and an interactive Telegram AI Bot (@DanumaAI_Bot). Assists Sri Lankan students with automated syllabus explanations, step-by-step past-paper analysis, mind-map generation, and trilingual (Sinhala, Tamil, English) learning workflows.",
    highlights: [
      "Powered and operated by Corvento Technologies across 3 synchronized platforms: Web App, Google Play Store Android App, and interactive Telegram Bot.",
      "Architected Retrieval-Augmented Generation (RAG) workflows and multimodal image-based problem solving for Technology-stream (ET, SFT, ICT) and national curricula.",
      "Built a custom contextual ad-placement engine enabling tuition educators to integrate targeted promotional material directly into the student learning experience.",
    ],
    links: [
      { label: "Launch Web App", url: "https://danumaai.lk/", type: "web" },
      {
        label: "Google Play Store App",
        url: "https://play.google.com/store/apps/details?id=com.Lycoryx.danumaai",
        type: "playstore",
      },
      {
        label: "Telegram AI Bot (@DanumaAI_Bot)",
        url: "https://t.me/DanumaAI_Bot",
        type: "telegram",
      },
    ],
    architecture: [
      {
        layer: "OMNI-CHANNEL CLIENT TIER",
        title: "Web App + Google Play Android App + Telegram Bot",
        tech: "Next.js 16 + React Native (Expo) + Telegram Bot API",
        detail:
          "Powered by Corvento Technologies — delivers a unified student experience across desktop/mobile web, the Google Play Store Android app, and instant Telegram bot queries.",
      },
      {
        layer: "IDENTITY & EDGE",
        title: "Multi-Provider Auth & Cross-Platform Sync",
        tech: "NextAuth.js + Google OAuth2 + Telegram OAuth",
        detail:
          "Seamless cross-device student identity synchronization linking Web, Android app, and Telegram Bot sessions with real-time quota tracking.",
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
          "Matches student grade/subject context with verified educator promotions while storing chat histories and analytics.",
      },
    ],
  },
  {
    id: "quizzygram",
    index: "02",
    title: "Quizzygram — Interactive Social Learning & Quiz Platform",
    subtitle:
      "Telegram-Style Real-Time Chats, Forums, Channels, Quizzes & Competitions",
    role: "Senior Web Developer",
    period: "2025 – Present",
    statusBadge: "Educational Channel SL",
    statusTone: "client",
    category: "Full-Stack Web",
    logo: "/QuzziygramLogo.png",
    secondaryLogo: "/eduChannel-circleLogo.png",
    poweredBy: "Educational Channel SL (Telegram Community)",
    accentColor: "#34D399",
    metrics: [
      { label: "Core Features", value: "Chats • Forums • Quizzes" },
      { label: "Gamification", value: "Live Competitions" },
      { label: "Community Hub", value: "Education Channel TG" },
    ],
    stack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Real-Time Chats & Channels",
      "RESTful APIs",
      "Tailwind CSS",
    ],
    overview:
      "Overseeing web development as Senior Web Developer for Quizzygram (quizzygram.com), integrated with one of Sri Lanka's prominent educational Telegram communities (Educational Channel SL). Engineered Telegram-inspired real-time chats, student discussion forums, topic channels, timed quizzes, and live leaderboard competitions.",
    highlights: [
      "Engineered Telegram-style real-time chat interfaces, subject channels, and structured community discussion forums for students.",
      "Built interactive quiz engines, timed exam challenges, and competitive leaderboards to drive student engagement.",
      "Optimized responsive frontend modules, API integrations, and client-side state stability as Senior Web Developer.",
    ],
    links: [
      {
        label: "Educational Channel SL (Telegram)",
        url: "https://t.me/Educationatgangstersquad",
        type: "telegram",
      },
    ],
    architecture: [
      {
        layer: "SOCIAL & COMMUNITY UI",
        title: "Telegram-Style Channels, Forums & Chat Modules",
        tech: "React.js + Next.js + Tailwind CSS",
        detail:
          "Responsive multi-pane interface supporting topic channels, thread-based student forums, and real-time messaging workflows.",
      },
      {
        layer: "GAMIFICATION ENGINE",
        title: "Interactive Quizzes & Live Competitions",
        tech: "Timed Assessment State + Leaderboard API",
        detail:
          "Handles timed question delivery, instant score evaluation, and competitive student rankings.",
      },
    ],
  },
  {
    id: "past-papers-wiki",
    index: "03",
    title: "Past Papers Wiki — Custom Internal Booking Engine",
    subtitle: "Automated Reservation & Scheduling System for PastPapers.Wiki",
    role: "Full-Stack Architect & Sales Manager",
    period: "2025 – Present",
    statusBadge: "Active Internal System",
    statusTone: "client",
    category: "Full-Stack Web",
    logo: "/paperwiki logo.jpeg",
    accentColor: "#818CF8",
    metrics: [
      { label: "Main Platform Reach", value: "140K+ Users" },
      { label: "System Type", value: "Custom Booking Engine" },
      { label: "State Handling", value: "Zero-Conflict Slots" },
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    overview:
      "Engineered a custom internal booking and scheduling architecture for Past Papers Wiki (pastpapers.wiki) to automate commercial ad-slot reservations, educator onboarding, and campaign management alongside coordinating online sales.",
    highlights: [
      "Designed seamless internal reservation and scheduling workflows with strict conflict validation and atomic backend state handling.",
      "Coordinate online sales, partner outreach, and distribution of past examination resources for students across Sri Lanka.",
    ],
    links: [
      {
        label: "Official Public Site (pastpapers.wiki)",
        url: "https://pastpapers.wiki/",
        type: "web",
      },
    ],
    architecture: [
      {
        layer: "OPERATIONS PORTAL",
        title: "Internal Booking & Campaign Scheduler",
        tech: "Next.js + Tailwind CSS",
        detail:
          "Dedicated reservation interface built for managing commercial slots, educator campaigns, and onboarding schedules.",
      },
      {
        layer: "API & VALIDATION",
        title: "Reservation Controller & Conflict Engine",
        tech: "Node.js + RESTful APIs + MongoDB",
        detail:
          "Enforces strict slot validation, prevents double-booking, and tracks campaign lifecycle states.",
      },
    ],
  },
  {
    id: "kev-thash-sweet-treats",
    index: "04",
    title: "Kev & Thash Sweet Treats — Bilingual E-Commerce Platform",
    subtitle:
      "Custom Confectionery Storefront with English/Sinhala i18n & WhatsApp Ordering",
    role: "Full-Stack Developer",
    period: "2025 – Present",
    statusBadge: "Live Production",
    statusTone: "active",
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
    ],
  },
  {
    id: "memo-ai",
    index: "05",
    title: "MemoAI — Scalable Community AI Bot & Web Playground",
    subtitle:
      "Scaled to 206,600+ Users Across 2,157+ Discord Servers (Discontinued April 2025)",
    role: "Creator & Backend Developer",
    period: "2022 – Apr 2025",
    statusBadge: "Sunset Apr 2025 (Financial Scaling Costs)",
    statusTone: "archived",
    category: "Archived Ventures",
    logo: "/MemoAI.png",
    secondaryLogo: "/CorventoTechLogo.jpg",
    poweredBy: "Corvento / Lycoryx Archive",
    accentColor: "#C084FC",
    metrics: [
      { label: "Historical Users", value: "206,600+" },
      { label: "Discord Servers", value: "2,157+" },
      { label: "Status", value: "Sunset Apr 2025" },
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
      "An AI assistant bot and Discord OAuth2 web management dashboard built under Lycoryx / Corvento Technologies that scaled to over 206,600 users across 2,157+ servers. Discontinued in April 2025 due to high LLM API and financial hosting costs at scale.",
    highlights: [
      "Engineered asynchronous request pipelines and rate-limiting middleware across 2,157+ connected Discord servers reaching 206,600+ users.",
      "Built Discord OAuth2 authentication workflows, prompt sandboxing, and web management dashboards before concluding operations in April 2025 due to financial scaling constraints.",
    ],
    links: [
      {
        label: "Web Playground Repo (GitHub)",
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
          "Processed slash commands across 2,157+ guilds while serving an authenticated web dashboard.",
      },
      {
        layer: "ASYNC PIPELINE",
        title: "Concurrency & Rate-Limiting Middleware",
        tech: "Node.js Async Queues + OpenAI API + MongoDB",
        detail:
          "Managed high-volume community LLM and image generation requests prior to April 2025 sunset.",
      },
    ],
  },
  {
    id: "blackwolf-mc",
    index: "06",
    title: "BlackWolf Minecraft Server — Multiplayer Game Infrastructure",
    subtitle:
      "Custom Multiplayer Server Network, Community Economy & Plugin Ecosystem",
    role: "Founder & Server Administrator (Asteroid Technologies)",
    period: "2020 – 2022",
    statusBadge: "Archived Gaming Venture",
    statusTone: "archived",
    category: "Archived Ventures",
    logo: "/BlackWolfMC-Logo.jpg",
    poweredBy: "Asteroid Technologies Origin",
    accentColor: "#F59E0B",
    metrics: [
      { label: "Studio Era", value: "Asteroid Tech" },
      { label: "Infrastructure", value: "Custom MC Network" },
      { label: "Status", value: "Completed / Archived" },
    ],
    stack: [
      "Java / Spigot / PaperMC",
      "Linux VPS Administration",
      "Server Plugins & Configs",
      "Discord Community Integration",
    ],
    overview:
      "Founded and operated the BlackWolf Minecraft multiplayer network during the Asteroid Technologies era. Managed dedicated Linux game server hosting, custom plugin configurations, in-game economy balancing, and Discord community synchronization before transitioning focus to AI and full-stack software.",
    highlights: [
      "Configured and optimized multiplayer Minecraft server performance, custom plugins, anti-cheat security, and automated backups.",
      "Built and moderated an active player community on Discord, laying the operational foundation for Asteroid Technologies (now Corvento Technologies).",
    ],
    links: [],
    architecture: [
      {
        layer: "GAME SERVER TIER",
        title: "PaperMC / Spigot Multiplayer Node",
        tech: "Linux VPS + Java Runtime + Custom Plugins",
        detail:
          "Low-latency multiplayer world management, permissions hierarchy, and custom gameplay mechanics.",
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
      "Founded and scaled the single master technology entity powering DanumaAI (Web, Play Store, Telegram Bot), @corventotech YouTube/Reels, and a 74,000+ subscriber WhatsApp digital media network. Evolved the company from Asteroid Technologies (BlackWolf MC) to Lycoryx Technologies (MemoAI — 206K+ users, sunset Apr 2025), and now Corvento Technologies.",
    achievements: [
      "Architected and launched DanumaAI (Powered by Corvento Technologies) across Web, Google Play Store (3,200+ downloads), and Telegram Bot with Gemini RAG workflows.",
      "Grew and manage 4 daily-updated WhatsApp broadcast channels (Achievers Hub, Lanka Diaries, Sarasavi Sihinaya, Sarasavi Pin Bima) reaching 74,000+ subscribers.",
      "Previously built and scaled MemoAI to 206,600+ users across 2,157+ Discord servers before concluding operations in April 2025 due to financial scaling costs.",
    ],
    technologies: [
      "Next.js",
      "React Native (Expo)",
      "Python",
      "Node.js",
      "MongoDB Atlas",
      "Gemini & OpenAI APIs",
      "Adobe Creative Suite",
    ],
    links: [
      { label: "DanumaAI Web", url: "https://danumaai.lk/" },
      {
        label: "Corvento YouTube",
        url: "https://www.youtube.com/@corventotech",
      },
    ],
  },
  {
    id: "maos-office",
    role: "Digital Operations Coordinator",
    company: "MAOS Office",
    period: "Oct 2026 – Present",
    location: "Remote • Part-Time",
    type: "Digital Operations",
    logo: "/AchieversHub.jpg",
    description:
      "Managing digital academic resource distribution, student communications, and broadcast channel optimization for online learning programs.",
    achievements: [
      "Manage and distribute academic resources across 3 official educational WhatsApp broadcast channels.",
      "Coordinate student communications, announcements, and optimize broadcast reach for online learning programs.",
    ],
    technologies: [
      "Digital Operations",
      "WhatsApp Broadcast Systems",
      "Student Communications",
      "Audience Analytics",
    ],
  },
  {
    id: "quizzygram",
    role: "Senior Web Developer",
    company: "quizzygram.com (Educational Channel SL)",
    period: "2025 – Present",
    location: "Remote • Part-Time",
    type: "Software Engineering",
    logo: "/QuzziygramLogo.png",
    secondaryLogo: "/eduChannel-circleLogo.png",
    description:
      "Overseeing web development for Quizzygram, a social-learning platform integrated with one of Sri Lanka's prominent educational Telegram communities (Educational Channel SL).",
    achievements: [
      "Engineered Telegram-style real-time chat workflows, structured student forums, and educational channel feeds.",
      "Developed interactive quiz engines, timed assessments, and live competition leaderboards.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Real-Time Chats & Forums",
      "Quiz & Competition Engine",
      "Tailwind CSS",
    ],
    links: [
      {
        label: "Educational Channel SL (TG)",
        url: "https://t.me/Educationatgangstersquad",
      },
    ],
  },
  {
    id: "paperwikipedia",
    role: "Sales Manager & Full-Stack Booking Architect",
    company: "Past Papers Wiki (pastpapers.wiki)",
    period: "2025 – Present",
    location: "Remote • Part-Time",
    type: "Sales & System Architecture",
    logo: "/paperwiki logo.jpeg",
    description:
      "Coordinating the distribution and online sales of past examination papers and educational resources for students across Sri Lanka, while architecting the custom internal booking system.",
    achievements: [
      "Coordinate online sales, partner outreach, and nationwide educational resource distribution for Past Papers Wiki.",
      "Architected the custom Next.js, Node.js, and MongoDB internal booking engine to automate advertising slot reservations and campaign scheduling.",
    ],
    technologies: [
      "Online Sales & Operations",
      "Next.js",
      "Node.js",
      "MongoDB",
      "REST APIs",
    ],
    links: [
      { label: "Official Website (pastpapers.wiki)", url: "https://pastpapers.wiki/" },
    ],
  },
  {
    id: "freelance",
    role: "Freelance Web Developer & Graphics Designer",
    company: "Fiverr, Upwork & Direct Clients",
    period: "2022 – Present",
    location: "Remote • Self-Employed",
    type: "Global Freelance",
    logo: "/LycoryxTech.jpg",
    description:
      "Delivering custom full-stack web applications, bilingual e-commerce storefronts, brand identities, graphic design, and short-form video/reel edits on Fiverr, Upwork, and direct client contracts.",
    achievements: [
      "Completed international and local freelance projects on Fiverr and Upwork spanning Next.js/React web platforms, Laravel MVC systems, and e-commerce sites.",
      "Built production storefronts such as Kev & Thash Sweet Treats with English/Sinhala localization and WhatsApp ordering.",
      "Created brand identities, social media visuals, and motion reel edits using Adobe Photoshop, Illustrator, Premiere Pro, and After Effects.",
    ],
    technologies: [
      "Fiverr & Upwork",
      "Next.js & React",
      "Laravel",
      "Adobe Photoshop & Illustrator",
      "Premiere Pro & After Effects",
    ],
    links: [
      {
        label: "Graphic Design Portfolio (Drive)",
        url: "https://drive.google.com/drive/folders/184pMfdN0AlFBfXTEU8eSFVQzaEWJ4IJ5?usp=drive_link",
      },
      {
        label: "Kev & Thash Live Site",
        url: "https://kev-thash-sweet-treats.vercel.app/",
      },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  // Degrees & Secondary Education
  {
    id: "ucsc-bit",
    degree: "Bachelor of Information Technology (BIT)",
    institution:
      "University of Colombo School of Computing (UCSC) via OpenArc Campus",
    year: "Present",
    category: "degree",
    badge: "University Undergraduate",
    details: [
      "Reading for the Bachelor of Information Technology (BIT) degree at the University of Colombo School of Computing (UCSC).",
      "Core focus on Software Engineering, Full-Stack Systems, Database Management, and Network Architecture.",
    ],
  },
  {
    id: "isipathana-al",
    degree: "G.C.E. Advanced Level (Technology Stream)",
    institution: "Isipathana College, Colombo",
    year: "Completed",
    category: "degree",
    badge: "Alma Mater",
    details: [
      "Engineering Technology (ET), Science for Technology (SFT), and Information & Communication Technology (ICT — English Medium).",
      "Active member of the ICT and Robotics Society, School Rugby Player (2016–2018), Prefect, and House Captain.",
    ],
  },

  // Diplomas (5)
  {
    id: "esoft-se-diploma",
    degree: "Pearson Assured Diploma in Software Engineering (DTEC)",
    institution: "ESOFT Metro Campus",
    year: "2023",
    category: "diploma",
    badge: "Pearson Assured",
    details: [
      "Comprehensive diploma in Software Engineering lifecycles, object-oriented programming, relational databases, and system design.",
    ],
  },
  {
    id: "esoft-english-diploma",
    degree: "Pearson Assured Diploma in English",
    institution: "ESOFT Metro Campus",
    year: "2024",
    category: "diploma",
    badge: "Pearson Assured",
    details: [
      "Advanced academic and professional English communication, business writing, and presentation mastery.",
    ],
  },
  {
    id: "atari-graphic-diploma",
    degree: "Diploma in Graphic Designing & Multimedia",
    institution: "ATARI City Campus",
    year: "2026",
    category: "diploma",
    badge: "Merit Scholarship Recipient",
    details: [
      "Awarded the ATARI City Campus Scholarship based on academic excellence and merit (2025). Focused on visual branding, multimedia design, and UI composition.",
    ],
  },
  {
    id: "oxborn-spoken-english",
    degree: "Diploma in Spoken English",
    institution: "Oxborn College",
    year: "2026",
    category: "diploma",
    badge: "Diploma",
    details: [
      "Professional spoken fluency, executive communication, and public speaking.",
    ],
  },
  {
    id: "english-7-boxes",
    degree: "Diploma in English 7 Boxes",
    institution: "Dr. Lakshitha Prasad",
    year: "2026",
    category: "diploma",
    badge: "Diploma",
    details: [
      "Structured English grammar, professional syntax, and applied communication framework.",
    ],
  },

  // Professional Certificates (7)
  {
    id: "uom-frontend",
    degree: "Certificate in Front-End Web Development",
    institution: "University of Moratuwa",
    year: "2023",
    category: "certificate",
    badge: "University of Moratuwa",
    details: [
      "Modern front-end architecture, responsive UI engineering, JavaScript DOM, and web standards.",
    ],
  },
  {
    id: "uom-web-design",
    degree: "Certificate in Web Design for Beginners",
    institution: "University of Moratuwa",
    year: "2023",
    category: "certificate",
    badge: "University of Moratuwa",
    details: [
      "Foundations of web design, HTML5/CSS3 layout systems, and user interface design principles.",
    ],
  },
  {
    id: "codexpress-laravel",
    degree: "Certificate in Laravel Web Development",
    institution: "CodeXpress Academy",
    year: "2025",
    category: "certificate",
    badge: "Full-Stack MVC",
    details: [
      "Full-stack PHP & Laravel MVC web application development, RESTful routing, authentication, and SQL database modeling.",
    ],
  },
  {
    id: "psd-premiere-pro",
    degree: "Certificate in Adobe Premiere Pro",
    institution: "PSD Academy",
    year: "2025",
    category: "certificate",
    badge: "Video Production",
    details: [
      "Professional non-linear video editing, timeline mastering, audio synchronization, and high-retention reel production.",
    ],
  },
  {
    id: "psd-after-effects",
    degree: "Certificate in Adobe After Effects",
    institution: "PSD Academy",
    year: "2025",
    category: "certificate",
    badge: "Motion Graphics",
    details: [
      "Motion graphics, visual effects compositing, kinetic typography, and dynamic video animations.",
    ],
  },
  {
    id: "itd-photoshop",
    degree: "Certifications in Photoshop & Graphics Design",
    institution: "ITD Institute",
    year: "2024",
    category: "certificate",
    badge: "Graphic Design",
    details: [
      "Advanced digital imaging, composite manipulation, poster design, and brand visual creation in Adobe Photoshop.",
    ],
  },
  {
    id: "esoft-it-cert",
    degree: "Certificate in Information Technology",
    institution: "ESOFT Campus",
    year: "2022",
    category: "certificate",
    badge: "IT Foundations",
    details: [
      "Core computing fundamentals, software applications, networking basics, and information systems.",
    ],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "atari-scholarship",
    title: "Recipient of the Academic Merit Scholarship",
    organization: "ATARI City Campus",
    year: "2025",
    category: "competition",
    highlight:
      "Awarded a merit scholarship based on academic excellence and creative distinction.",
  },
  {
    id: "ai-robotics-icbt",
    title: "8th Place among 500 Competitors — AI & Robotics Competition",
    organization: "Organized by Isipathana College at ICBT Campus",
    year: "2024",
    category: "competition",
    highlight:
      "Ranked Top 8 out of 500 participants in the competitive AI & Robotics challenge hosted at ICBT Campus.",
  },
  {
    id: "apeiro-21",
    title: "Top 50 Finisher — Apeiro 21 Interschool Lecture Series",
    organization: "ICT and Robotics Society of Isipathana College",
    year: "2023",
    category: "competition",
    highlight:
      "Recognized among the Top 50 finishers in the interschool technology & robotics series.",
  },
  {
    id: "quiz-winner-2021",
    title: "Winner — ICT & Robotics Quiz Competition",
    organization: "ICT and Robotics Society of Isipathana College",
    year: "2021",
    category: "competition",
    highlight:
      "First-place winner in the school ICT and Robotics quiz championship.",
  },
  {
    id: "chess-achievements",
    title: "2nd Runner-Up (Rapid Chess) & 8th Place All-Island Chess",
    organization: "DGD Chess Club Tournaments",
    year: "2018 – 2021",
    category: "sports",
    highlight:
      "2nd Runner-Up in the Overall Challenge Rapid Chess Tournament & 8th Place in the Under 11 All-Island Chess Tournament.",
  },
  {
    id: "seylan-art",
    title: "3rd Place — National Art Competition",
    organization: "Organized by Seylan Bank",
    year: "Awarded",
    category: "competition",
    highlight:
      "Secured 3rd place recognition for visual art and creative illustration.",
  },
  {
    id: "isipathana-rugby",
    title: "College Rugby Player",
    organization: "Isipathana College, Colombo",
    year: "2016 – 2018",
    category: "sports",
    highlight:
      "Represented Isipathana College in school rugby (2016–2018), developing high-pressure teamwork and discipline.",
  },
  {
    id: "taekwondo-belt",
    title: "1st Dan Black Belt & Junior Brown Belt in Taekwondo",
    organization: "Martial Arts & Athletics",
    year: "2016 – 2020+",
    category: "sports",
    highlight:
      "Trained in competitive Taekwondo, earning Junior Brown Belt (2016–2020) and advancing to 1st Dan Black Belt.",
  },
  {
    id: "plantara-25",
    title: "Project 'PLANTARA'25' — Environmental Volunteering",
    organization: "Rotaract Club of Faculty of Science, University of Colombo",
    year: "2025",
    category: "volunteering",
    highlight:
      "Contributed to a community sustainability initiative that successfully planted 300 native plants.",
  },
];
