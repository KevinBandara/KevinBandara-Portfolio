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
  category:
    | "AI & RAG Systems"
    | "Full-Stack Web"
    | "Bots & Distributed"
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
  status: string;
  details: string[];
  badge: string;
}

export const HERO_DATA = {
  name: "Kevin Bandara",
  title: "Full-Stack Software Developer, AI Systems Builder & Tech Entrepreneur",
  tagline:
    "Building production web platforms, AI-driven educational technology, scalable backend infrastructure, and high-reach digital media ecosystems.",
  location: "Colombo, Sri Lanka",
  nationality: "Sri Lankan",
  religion: "Buddhist",
  status: "Open to Software Engineering & Full-Stack Developer Roles",
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
    "The Single Master Venture Entity Founded & Operated by Kevin Bandara",
  youtubeUrl: "https://www.youtube.com/@corventotech",
  graphicsPortfolioUrl:
    "https://drive.google.com/drive/folders/184pMfdN0AlFBfXTEU8eSFVQzaEWJ4IJ5?usp=drive_link",
  lineage: [
    {
      era: "Origin Identity",
      name: "Asteroid Technologies",
      desc: "Initial technology studio identity created for early software experiments, community servers, and digital tools.",
    },
    {
      era: "Expansion Phase",
      name: "Lycoryx Technologies",
      desc: "Scaled into AI application development — launching MemoAI (200K+ users across Discord) and the initial release of DanumaAI.",
    },
    {
      era: "Master Entity (Present)",
      name: "Corvento Technologies",
      desc: "The unified parent company operating DanumaAI, MemoAI, proprietary web platforms, YouTube/Reels media (@corventotech), and a 74,000+ follower WhatsApp channel network.",
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
    "I am a software developer, creative technologist, and entrepreneur from Colombo, Sri Lanka with hands-on experience taking digital products from architecture to live production. I specialize in building full-stack web applications, integrating modern AI workflows (RAG, Gemini API, OpenAI), and engineering scalable backend systems with Next.js, Node.js, and MongoDB.",
    "Beyond writing clean, maintainable code, I founded Corvento Technologies (evolved from Asteroid Technologies and Lycoryx Technologies) as the master entity operating DanumaAI, MemoAI, and a 74,000+ subscriber WhatsApp media network. Alongside leading Senior Web Development at Quizzygram and commercial operations at Past Papers Wiki, I have delivered international freelance engineering and creative projects on Fiverr and Upwork.",
  ],
  pillars: [
    {
      code: "01 // AI & FULL-STACK",
      title: "Production Web & AI Systems",
      description:
        "Architecting RAG pipelines, Gemini/OpenAI workflows, Next.js web platforms, and Google Play Android apps serving thousands of active users.",
    },
    {
      code: "02 // ENTREPRENEURSHIP",
      title: "Corvento Ecosystem & 74K+ Reach",
      description:
        "Building and operating proprietary software ventures, contextual ad engines, and daily digital media channels with 74,000+ subscribers.",
    },
    {
      code: "03 // CREATIVE & FREELANCE",
      title: "Global Freelance, Design & Reels",
      description:
        "Delivering full-stack solutions on Fiverr & Upwork alongside graphic design, brand identities, and high-retention video/reel production.",
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
    subtitle: "Scalable APIs, real-time chat & bot architectures",
    accent: "#34D399",
    skills: [
      { name: "RESTful APIs", highlight: true },
      { name: "Redis", highlight: true },
      { name: "BullMQ", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Microservices", highlight: true },
      { name: "Discord.js", highlight: true },
      { name: "Telegram Bot & WebApp APIs" },
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
    title: "UI/UX, Adobe Suite & Video",
    subtitle: "Graphic design, Adobe Creative Cloud, brand identity & reels",
    accent: "#A78BFA",
    skills: [
      { name: "Adobe Photoshop", highlight: true },
      { name: "Adobe Illustrator", highlight: true },
      { name: "Adobe Premiere Pro", highlight: true },
      { name: "Adobe After Effects", highlight: true },
      { name: "Adobe Lightroom" },
      { name: "Figma (UI/UX Prototyping)", highlight: true },
      { name: "Short-Form Reel & Video Editing", highlight: true },
      { name: "Brand Identity & Logo Design", highlight: true },
      { name: "Social Media & Campaign Visuals" },
      { name: "Canva & Print Media Design" },
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
    role: "Founder & Lead Developer (Powered by Corvento Technologies)",
    period: "2026 – Present",
    category: "AI & RAG Systems",
    featured: true,
    logo: "/DanumaAI.jpg",
    secondaryLogo: "/CorventoTechLogo.jpg",
    poweredBy: "Powered by Corvento Technologies",
    accentColor: "#38BDF8",
    metrics: [
      { label: "Play Store Downloads", value: "3,200+" },
      { label: "Active Students", value: "1,500+" },
      { label: "3-Platform Ecosystem", value: "Web • Play Store • TG Bot" },
      { label: "Master Entity", value: "Corvento Tech" },
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
      "Powered and operated by Corvento Technologies as a unified 3-platform ecosystem: Web Platform, Google Play Store Android App, and interactive Telegram Bot.",
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
    subtitle: "Telegram-Style Real-Time Chats, Forums, Channels, Quizzes & Competitions",
    role: "Senior Web Developer (Education Channel Ecosystem)",
    period: "2025 – Present",
    category: "Full-Stack Web",
    logo: "/QuzziygramLogo.png",
    secondaryLogo: "/eduChannel-circleLogo.png",
    poweredBy: "Operated under Education Channel TG",
    accentColor: "#34D399",
    metrics: [
      { label: "Core Features", value: "Chats • Forums • Quizzes" },
      { label: "Gamification", value: "Live Competitions" },
      { label: "Community Origin", value: "Education Channel TG" },
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
      "Developed as part of the Education Channel Telegram community ecosystem, Quizzygram is an interactive educational web platform combining Telegram-style real-time chats, student discussion forums, topic channels, timed quizzes, and live leaderboard competitions.",
    highlights: [
      "Engineered Telegram-inspired real-time chat interfaces, subject channels, and structured community discussion forums for students.",
      "Built interactive quiz engines, timed exam challenges, and competitive leaderboards to drive student engagement.",
      "Optimized responsive frontend modules, API integrations, and client-side state stability as Senior Web Developer.",
    ],
    links: [
      {
        label: "Education Channel Community (TG)",
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
    role: "Full-Stack Architect & Commercial Operations",
    period: "2025 – Present",
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
      "Engineered a custom internal booking and scheduling architecture tailored for the Past Papers Wiki organization to automate commercial ad-slot reservations, educator onboarding, and campaign management.",
    highlights: [
      "Designed seamless internal reservation and scheduling workflows with strict conflict validation and atomic backend state handling.",
      "Aligned technical booking infrastructure with commercial operations and partner outreach for the public PastPapers.Wiki platform.",
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
    id: "memo-ai",
    index: "04",
    title: "MemoAI — Scalable Community AI Bot & Dashboard",
    subtitle: "High-Concurrency Discord AI Assistant & OAuth2 Web Playground",
    role: "Creator & Backend Developer (Powered by Corvento Technologies)",
    period: "2022 – 2026",
    category: "Bots & Distributed",
    logo: "/MemoAI.png",
    secondaryLogo: "/CorventoTechLogo.jpg",
    poweredBy: "Powered by Corvento Technologies",
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
      "An AI assistant bot and management dashboard powered by Corvento Technologies (formerly Lycoryx), providing conversational utilities, vision testing, and image generation to online communities.",
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
        tech: "Node.js Async Queues + OpenAI API + MongoDB",
        detail:
          "Protects downstream LLM & image generation endpoints from burst community traffic.",
      },
    ],
  },
  {
    id: "kev-thash-sweet-treats",
    index: "05",
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
    ],
  },
  {
    id: "creative-design-reels",
    index: "06",
    title: "Creative Design, Adobe Suite & Reel Production",
    subtitle: "Adobe Photoshop, Illustrator, Premiere Pro, After Effects & Brand Identity",
    role: "Creative Director & Designer (Corvento & Freelance)",
    period: "2022 – Present",
    category: "Creative & Media",
    logo: "/CorventoTechLogo.jpg",
    poweredBy: "Powered by Corvento Technologies & Global Freelance",
    accentColor: "#FBBF24",
    metrics: [
      { label: "Creative Suite", value: "Adobe Ps • Ai • Pr • Ae" },
      { label: "Video & Reels", value: "@corventotech" },
      { label: "Credential", value: "Graphic Design Diploma" },
    ],
    stack: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Adobe Lightroom",
      "Figma UI/UX",
      "Short-Form Reel Editing",
      "Brand Identity Design",
    ],
    overview:
      "Alongside software engineering, I design complete visual identities, promotional graphics, UI/UX prototypes, and high-retention short-form video/reel edits using the Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom) and Figma for Corvento Technologies (@corventotech) and international freelance clients.",
    highlights: [
      "Curated a comprehensive Graphic Design portfolio built with Adobe Photoshop and Adobe Illustrator spanning brand logos, social media campaigns, educational posters, and UI assets.",
      "Produce and edit engaging technology reels, motion graphics, and digital content using Adobe Premiere Pro and After Effects for the Corvento Technologies YouTube (@corventotech) and social channels.",
      "Delivered custom graphic design, branding, and web UI packages for clients on Fiverr, Upwork, and local businesses.",
    ],
    links: [
      {
        label: "Graphic Design Portfolio (Google Drive)",
        url: "https://drive.google.com/drive/folders/184pMfdN0AlFBfXTEU8eSFVQzaEWJ4IJ5?usp=drive_link",
        type: "drive",
      },
      {
        label: "Corvento Tech YouTube & Reels",
        url: "https://www.youtube.com/@corventotech",
        type: "youtube",
      },
    ],
    architecture: [
      {
        layer: "BRAND & VISUAL DESIGN",
        title: "Identity Systems, Posters & UI Assets",
        tech: "Adobe Illustrator + Photoshop + Figma",
        detail:
          "High-impact visual design across tech ventures, educational campaigns, and commercial client brands.",
      },
      {
        layer: "MOTION & REEL PRODUCTION",
        title: "Short-Form Video & Tech Content Editing",
        tech: "Reels Editing + Audio Sync + Visual Storytelling",
        detail:
          "Fast-paced, high-retention video edits published across YouTube (@corventotech) and social channels.",
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
      "Founded and scaled the single master technology entity operating DanumaAI, MemoAI, proprietary web platforms, YouTube/Reels media (@corventotech), and a 74,000+ subscriber WhatsApp digital media network. Evolved the company identity from Asteroid Technologies to Lycoryx Technologies, and now Corvento Technologies.",
    achievements: [
      "Architected and launched DanumaAI across Web, Google Play Store (Android), and Telegram Bot with RAG workflows and a custom educator ad engine.",
      "Built and operated MemoAI, scaling asynchronous Discord.js and OpenAI pipelines to 206,000+ historical users across 2,157+ servers.",
      "Grew and actively manage 4 daily-updated WhatsApp channels (Achievers Hub, Lanka Diaries, Sarasavi Sihinaya, Sarasavi Pin Bima) reaching 74,000+ followers.",
    ],
    technologies: [
      "Next.js",
      "React Native (Expo)",
      "Python",
      "Node.js",
      "MongoDB Atlas",
      "Gemini & OpenAI APIs",
      "Digital Media & Reels",
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
    id: "quizzygram",
    role: "Senior Web Developer",
    company: "Quizzygram — Under Education Channel Community",
    period: "2025 – Present",
    location: "Sri Lanka",
    type: "Software Engineering",
    logo: "/QuzziygramLogo.png",
    secondaryLogo: "/eduChannel-circleLogo.png",
    description:
      "Served as Senior Web Developer for Quizzygram, established and operated under the Education Channel Telegram community. Engineered interactive social-learning web modules combining Telegram-style chats, forums, channels, quizzes, and live student competitions.",
    achievements: [
      "Developed Telegram-style real-time chat workflows, structured student forums, and educational channel feeds for the Quizzygram web platform.",
      "Engineered interactive quiz systems, timed assessments, and live competition leaderboards.",
      "Collaborated within the Education Channel ecosystem to scale student engagement and frontend reliability.",
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
        label: "Education Channel TG Community",
        url: "https://t.me/Educationatgangstersquad",
      },
    ],
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
      "Managing user onboarding workflows, digital operations, commercial outreach, and custom internal booking engine architecture for Past Papers Wiki (pastpapers.wiki).",
    achievements: [
      "Architected the custom Next.js, Node.js, and MongoDB internal booking engine to automate reservation and campaign scheduling.",
      "Led partner acquisition, educator onboarding workflows, and commercial sales operations.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Commercial Operations & Sales",
      "REST APIs",
    ],
    links: [
      { label: "Official Public Website", url: "https://pastpapers.wiki/" },
    ],
  },
  {
    id: "freelance",
    role: "Freelance Full-Stack Developer & Creative Designer",
    company: "Fiverr, Upwork & Direct Client Contracts",
    period: "2022 – Present",
    location: "Remote / Worldwide",
    type: "Global Freelance Delivery",
    logo: "/LycoryxTech.jpg",
    description:
      "Delivering custom full-stack web applications, dynamic landing pages, backend APIs, graphic design assets, and short-form video/reel edits for international and local clients on Fiverr, Upwork, and direct engagements.",
    achievements: [
      "Completed diverse freelance projects on Fiverr and Upwork spanning Next.js/React web apps, Laravel MVC portals, and custom business websites.",
      "Delivered production e-commerce storefronts such as Kev & Thash Sweet Treats with bilingual (EN/SI) localization and WhatsApp automation.",
      "Provided end-to-end brand identity design, graphic design, and promotional reel editing for digital brands.",
    ],
    technologies: [
      "Fiverr & Upwork",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "Graphic Design",
      "Reel Editing",
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
  {
    id: "ucsc-bit",
    degree: "Bachelor of Information Technology (BIT)",
    institution:
      "University of Colombo School of Computing (UCSC) via OpenArc Campus",
    status: "Undergraduate",
    badge: "University Degree",
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
    badge: "Professional English",
    details: [
      "Advanced academic and professional English communication, business writing, and presentation skills.",
    ],
  },
  {
    id: "codexpress-laravel",
    degree: "Laravel Web Development Certificate",
    institution: "CodeXPress",
    status: "Certified",
    badge: "Full-Stack MVC",
    details: [
      "Full-stack MVC web application development using PHP, Laravel, relational SQL schemas, and RESTful routing.",
    ],
  },
  {
    id: "atari-graphic-design",
    degree: "Diploma in Graphic Design",
    institution: "ATARI CITY Campus",
    status: "Completed",
    badge: "Visual & UI Design",
    details: [
      "Visual identity systems, digital illustration, UI composition, Adobe Photoshop, and Adobe Illustrator.",
    ],
  },
  {
    id: "isipathana-al",
    degree: "G.C.E. Advanced Level (Technology Stream)",
    institution: "Isipathana College, Colombo",
    status: "Completed",
    badge: "Secondary Alma Mater",
    details: [
      "Engineering Technology (ET), Science for Technology (SFT), and Information & Communication Technology (ICT — English Medium).",
    ],
  },
];
