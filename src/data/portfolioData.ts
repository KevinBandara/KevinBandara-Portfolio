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
  logo?: string;
  details: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: "competition" | "sports" | "volunteering";
  logo?: string;
  highlight: string;
}

export const HERO_DATA = {
  name: "Kevin Bandara",
  fullName: "R.M. Kevin Sharada Bandara",
  legalName: "Rathnayaka Mudiyanselage Kevin Sharada Bandara",
  birthDate: "2007-11-06",
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
  resumeUrl: "/Kevin-Bandara-Resume.pdf",
  portraits: [
    {
      src: "/KevinPortrait.jpg",
      title: "Kevin Bandara",
      caption: "Full-Stack Software Engineer & Founder of Corvento Technologies",
      objectPosition: "center 24%",
    },
    {
      src: "/MyPic-opt.jpg",
      title: "Kevin Bandara — BMICH Colombo",
      caption: "Academic & Professional Recognition Ceremony",
      objectPosition: "28% 20%",
    },
  ],
  telemetry: [
    {
      value: "250K+",
      label: "Cumulative Software Users",
      detail: "Across MemoAI, DanumaAI & Web Platforms",
    },
    {
      value: "116K+",
      label: "Educational Media Reach",
      detail: "74K+ WhatsApp & 42K+ Telegram Subscribers",
    },
    {
      value: "5,000+",
      label: "DanumaAI App Downloads",
      detail: "Google Play Store, Web & Telegram Bot",
    },
    {
      value: "2,000+",
      label: "Active DanumaAI Students",
      detail: "Daily AI Study Notes & Past-Paper QA",
    },
    {
      value: "7+",
      label: "Degree & Accredited Diplomas",
      detail: "UCSC BIT, Pearson ESOFT, ATARI & Oxborn",
    },
    {
      value: "48",
      label: "Documented Credentials & Awards",
      detail: "UoM CODL, CodeXpress, PSD, Kukkiwon & Rotaract",
    },
  ],
};

export const CORVENTO_ECOSYSTEM = {
  name: "Corvento Technologies",
  tagline:
    "Founded & Operated by Kevin Bandara — Software Engineering, AI Products & Digital Media",
  youtubeUrl: "https://www.youtube.com/@corventotech",
  graphicsPortfolioUrl:
    "https://drive.google.com/drive/folders/184pMfdN0AlFBfXTEU8eSFVQzaEWJ4IJ5?usp=drive_link",
  lineage: [
    {
      era: "2020 – 2022 • Origin Studio",
      name: "Asteroid Technologies",
      logo: "/AsteroidTechLogo.jpg",
      secondaryLogo: "/BlackWolfMC-Logo.jpg",
      status: "Foundation Era",
      desc: "Initial technology studio identity created to launch and administer the BlackWolf Minecraft multiplayer network, community servers, and early web utilities.",
    },
    {
      era: "2022 – 2025 • AI Scaling Era",
      name: "Lycoryx Technologies",
      logo: "/LycoryxTech.jpg",
      status: "AI Expansion",
      desc: "Expanded into high-concurrency AI products — scaling MemoAI to 250,000+ community members across 2,157+ Discord servers and engineering the first release of DanumaAI.",
    },
    {
      era: "2025 – Present • Flagship Entity",
      name: "Corvento Technologies",
      logo: "/CorventoTechLogo.jpg",
      status: "Current Parent Company",
      desc: "The unified parent company powering DanumaAI (Web, Google Play Store & Telegram Bot), @corventotech YouTube/Reels, and a 116,000+ subscriber WhatsApp & Telegram educational media ecosystem.",
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
    "Full-Stack Software Engineer, AI Product Architect & Digital Entrepreneur from Colombo, Sri Lanka.",
  paragraphs: [
    "I am R.M. Kevin Sharada Bandara (Rathnayaka Mudiyanselage Kevin Sharada Bandara), a full-stack software developer, AI systems builder, creative designer, and tech entrepreneur based in Colombo, Sri Lanka. Currently reading for my Bachelor of Information Technology (BIT) degree at the University of Colombo School of Computing (UCSC), I specialize in building production web and mobile platforms using Next.js, React, React Native (Expo), Node.js, Python, PHP/Laravel, MongoDB, and PostgreSQL, alongside applied AI workflows powered by Retrieval-Augmented Generation (RAG), Gemini API, and OpenAI.",
    "My journey in technology began early during my years at Isipathana College, Colombo — where I competed in national ICT, AI & Robotics competitions (winning FUTURA '23 and placing 8th among 500 competitors at ICBT), served as a Prefect and House Captain, played school rugby, and earned my 1st Poom Taekwondo Black Belt from Kukkiwon. In 2020, I launched my first multiplayer gaming network (BlackWolf Minecraft Server) under Asteroid Technologies, which later evolved into Lycoryx Technologies (scaling MemoAI to 250,000+ users across 2,157+ Discord servers) and today operates as Corvento Technologies.",
    "Through Corvento Technologies, I architected and launched DanumaAI across Web, Google Play Store (5,000+ downloads), and Telegram Bot (serving 2,000+ active students), while managing a 116,000+ subscriber educational media ecosystem across WhatsApp (74,000+ followers) and Telegram (42,000+ active students). Alongside my own ventures, I work as Senior Web Developer at Quizzygram, Sales & Operations Manager and Internal Booking Architect at Past Papers Wiki, Digital Operations Coordinator at MAOS Office, and an international freelancer on Fiverr and Upwork.",
  ],
  profileFacts: [
    { label: "Full Legal Name", value: "R.M. Kevin Sharada Bandara" },
    { label: "Name Denoted by Initials", value: "Rathnayaka Mudiyanselage" },
    { label: "Date of Birth", value: "November 06, 2007" },
    { label: "Base Location", value: "Colombo, Sri Lanka" },
    { label: "University Education", value: "BIT @ UCSC (University of Colombo)" },
    { label: "Secondary School", value: "Isipathana College, Colombo" },
    { label: "Founded Company", value: "Corvento Technologies" },
    { label: "Languages", value: "English (Fluent) & Sinhala (Native)" },
  ],
  pillars: [
    {
      code: "01 • Engineering & AI",
      title: "Full-Stack Web, Mobile & RAG Systems",
      description:
        "Shipping Next.js web platforms, Google Play Store Android apps (React Native/Expo), Laravel MVC systems, and Gemini/OpenAI RAG pipelines serving thousands of active users.",
    },
    {
      code: "02 • Ventures & Operations",
      title: "Corvento Ecosystem & 116K+ Media Reach",
      description:
        "Founding and scaling software products (DanumaAI, MemoAI), custom booking & ad-placement engines, and daily WhatsApp/Telegram networks reaching 116,000+ Sri Lankan students.",
    },
    {
      code: "03 • Creative & Global Delivery",
      title: "Adobe Creative Suite, Reels & Freelance",
      description:
        "Scholarship-winning graphic designer & certified video editor (Premiere Pro, After Effects, Photoshop, Illustrator, Figma) delivering global projects on Fiverr & Upwork.",
    },
  ],
  milestones: [
    {
      year: "2013 – 2020",
      title: "Early Honours, Chess, Rugby & Kukkiwon 1st Poom Black Belt",
      subtitle: "Isipathana College, Kukkiwon, DGD Chess Club & IWMS",
      detail:
        "Completed 11 IWMS Spoken & Written English examinations (Preliminary to Transitional & Grade 1), earned 2nd Runner-Up & Coaching Award in Chess, won 3rd Place in the Seylan Bank Art Competition, played school rugby for Isipathana College, and achieved the 1st Poom Taekwondo Black Belt certified by Kukkiwon (World Taekwondo HQ).",
    },
    {
      year: "2020 – 2022",
      title: "Asteroid Technologies & BlackWolf Minecraft Network",
      subtitle: "First Venture & Multiplayer Infrastructure",
      detail:
        "Founded Asteroid Technologies and launched the BlackWolf Minecraft Server — configuring Linux VPS infrastructure, Java PaperMC/Spigot plugins, in-game economies, and Discord community integrations.",
    },
    {
      year: "2022 – 2024",
      title: "Pearson Diplomas, UoM CODL Certifications & ICT Championship",
      subtitle: "ESOFT Metro Campus, University of Moratuwa & Isipathana College",
      detail:
        "Earned Pearson Assured Diplomas in Software Engineering (DTEC), Information Technology (DITEC), and English at ESOFT; completed 3 coding certificates from the University of Moratuwa (Python, Front-End Web Dev, Web Design); won 1st Place at the FUTURA '23 Quiz; and placed 8th among 500 competitors at the ICBT AI & Robotics Competition.",
    },
    {
      year: "2022 – Apr 2025",
      title: "Lycoryx Technologies & Scaling MemoAI to 250,000+ Users",
      subtitle: "2,157+ Discord Servers & OAuth2 Web Playground",
      detail:
        "Built and scaled MemoAI under Lycoryx Technologies using Node.js, Express, Discord.js, MongoDB, and OpenAI APIs — reaching over 250,000+ community members across 2,157+ servers before concluding operations in April 2025 due to LLM hosting costs at scale.",
    },
    {
      year: "2025 – Present",
      title: "Senior Web Developer, Booking Architect & Creative Certifications",
      subtitle: "Quizzygram, Past Papers Wiki, CodeXpress, PSD Academy & ATARI",
      detail:
        "Joined Quizzygram as Senior Web Developer (building Telegram-style chats, forums, channels & live quizzes) and Past Papers Wiki as Sales & Operations Manager + Internal Booking Engine Architect; completed Laravel certification at CodeXpress, Premiere Pro & After Effects certifications at PSD Academy, and an Academic Merit Scholarship Diploma in Graphic Design at ATARI City Campus.",
    },
    {
      year: "2026 – Present",
      title: "Corvento Technologies, DanumaAI Flagship, MAOS Office & UCSC BIT",
      subtitle: "5,000+ App Downloads, 116K+ Media Network & University Degree",
      detail:
        "Launched DanumaAI under Corvento Technologies across Web, Google Play Store (5,000+ downloads), and Telegram Bot (2,000+ active students); expanded owned WhatsApp & Telegram educational channels to 116,000+ subscribers; joined MAOS Office as Digital Operations Coordinator; and commenced the Bachelor of Information Technology (BIT) degree at UCSC.",
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
      { name: "Tailwind CSS & Bootstrap", highlight: true },
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
      { name: "PostgreSQL & MySQL (SQL)", highlight: true },
      { name: "NextAuth.js", highlight: true },
      { name: "JWT", highlight: true },
      { name: "Google OAuth 2.0", highlight: true },
      { name: "Telegram OAuth", highlight: true },
      { name: "Discord OAuth2" },
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
      { name: "Linux CLI & Server Admin" },
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
      { name: "Figma (UI/UX Prototyping)", highlight: true },
      { name: "CapCut & Short-Form Reels", highlight: true },
      { name: "Adobe Lightroom" },
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
    role: "Founder, Lead Architect & Developer",
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
      { label: "Play Store Downloads", value: "5,000+" },
      { label: "Active Students", value: "2,000+" },
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
      "Flagship AI educational ecosystem powered by Corvento Technologies, operating seamlessly across a full-featured Web App (danumaai.lk), an official Google Play Store Android App (5,000+ downloads), and an interactive Telegram AI Bot (@DanumaAI_Bot) serving 2,000+ active students with automated study note generation, step-by-step past-paper QA, and bilingual/trilingual learning workflows.",
    highlights: [
      "Powered and operated by Corvento Technologies across 3 synchronized platforms: Web App, Google Play Store Android App (5,000+ downloads), and interactive Telegram Bot.",
      "Architected Retrieval-Augmented Generation (RAG) workflows, automated study note generation, and multimodal image-based problem solving for 2,000+ active students.",
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
      "Scaled to 250,000+ Community Members Across 2,157+ Discord Servers (Discontinued April 2025)",
    role: "Founder & Lead Developer",
    period: "2022 – Apr 2025",
    statusBadge: "Sunset Apr 2025 (Financial Scaling Costs)",
    statusTone: "archived",
    category: "Archived Ventures",
    logo: "/MemoAI.png",
    secondaryLogo: "/CorventoTechLogo.jpg",
    poweredBy: "Corvento / Lycoryx Archive",
    accentColor: "#C084FC",
    metrics: [
      { label: "Community Members", value: "250,000+" },
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
      "A high-throughput AI assistant bot and Discord OAuth2 web management dashboard built under Lycoryx / Corvento Technologies that scaled conversational text and image generation pipelines to over 250,000+ community members across 2,157+ servers. Discontinued in April 2025 due to high LLM API and financial hosting costs at scale.",
    highlights: [
      "Engineered asynchronous request pipelines and rate-limiting middleware across 2,157+ connected Discord servers supporting 250,000+ community members.",
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
    secondaryLogo: "/AsteroidTechLogo.jpg",
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
    secondaryLogo: "/AsteroidTechLogo.jpg",
    description:
      "Founded and scaled the single master technology entity powering DanumaAI (Web, Play Store, Telegram Bot), @corventotech YouTube/Reels, and a 116,000+ subscriber WhatsApp & Telegram educational digital media network. Evolved the company from Asteroid Technologies (BlackWolf MC) to Lycoryx Technologies (MemoAI — 250K+ users, sunset Apr 2025), and now Corvento Technologies.",
    achievements: [
      "Architected and launched DanumaAI (Powered by Corvento Technologies) across Web, Google Play Store (5,000+ downloads), and Telegram Bot serving 2,000+ active students.",
      "Grew and manage 4 daily-updated WhatsApp broadcast channels (74,000+ subscribers) and educational Telegram broadcast/discussion infrastructure (42,000+ active students).",
      "Previously built and scaled MemoAI to 250,000+ community members across 2,157+ Discord servers before concluding operations in April 2025 due to financial scaling costs.",
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
    company: "MAOS Office (Magical Accounting Online School)",
    period: "Oct 2026 – Present",
    location: "Remote • Part-Time",
    type: "Digital Operations",
    logo: "/MAOS-OfficeLogo.jpg",
    description:
      "Managing digital academic resource distribution, student communications, and broadcast channel optimization for online learning programs.",
    achievements: [
      "Manage and schedule daily academic resource broadcasts across 3 official educational WhatsApp broadcast channels.",
      "Coordinate critical exam notices, study resources, and student communications while maintaining structured channel moderation.",
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
      "Spearheading full-stack web development and core feature architecture for Quizzygram, an online social-learning platform integrated with one of Sri Lanka's prominent educational Telegram communities (Educational Channel SL — 42,000+ students).",
    achievements: [
      "Engineered Telegram-style real-time chat workflows, structured student forums, educational channel feeds, and interactive quiz competitions.",
      "Optimize platform responsiveness and database queries to ensure seamless real-time access during peak study traffic.",
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
    role: "Sales & Operations Manager + Booking Architect",
    company: "Past Papers Wiki (pastpapers.wiki)",
    period: "2025 – Present",
    location: "Remote • Part-Time",
    type: "Sales & System Architecture",
    logo: "/paperwiki logo.jpeg",
    description:
      "Directing online distribution pipelines and digital sales workflows for national examination past papers and academic materials nationwide, while architecting the custom internal booking system.",
    achievements: [
      "Direct online distribution pipelines, student customer support, and order fulfillment for Past Papers Wiki across Sri Lanka.",
      "Architected the custom Next.js, Node.js, and MongoDB internal booking engine to automate advertising slot reservations and campaign scheduling.",
    ],
    technologies: [
      "Sales & Operations",
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
    logo: "/CorventoTechLogo.jpg",
    description:
      "Architecting and deploying responsive websites, custom full-stack web applications, brand identities, marketing graphics, and short-form video/reel edits for international clients on Fiverr and Upwork.",
    achievements: [
      "Architect and deploy custom web applications for international clients on Fiverr and Upwork using Next.js, Node.js, and PHP/Laravel.",
      "Built production storefronts such as Kev & Thash Sweet Treats with English/Sinhala localization and WhatsApp ordering.",
      "Design brand assets, marketing graphics, UI prototypes, and motion reel edits using Figma, Adobe Photoshop, Illustrator, Premiere Pro, and After Effects.",
    ],
    technologies: [
      "Fiverr & Upwork",
      "Next.js & React",
      "Laravel",
      "Figma & UI/UX",
      "Adobe Creative Suite",
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
      "University of Colombo School of Computing (UCSC)",
    year: "2026 – 2029 (Expected)",
    category: "degree",
    badge: "University Undergraduate",
    logo: "/uoc-logo.png",
    details: [
      "Reading for the Bachelor of Information Technology (BIT) degree at the University of Colombo School of Computing (UCSC) — 2026 to 2029 (Expected).",
      "Core focus on Software Engineering, Full-Stack Systems, Database Management, and Network Architecture.",
    ],
  },
  {
    id: "isipathana-al",
    degree: "G.C.E. Advanced Level (Tech Stream) & G.C.E. O/L (4A, 4B)",
    institution: "Isipathana College, Colombo",
    year: "Completed",
    category: "degree",
    badge: "Secondary Education",
    logo: "/isipathana-logo.png",
    details: [
      "G.C.E. A/L (Technology Stream: ICT English Medium, SFT, ET) & G.C.E. O/L with 4 Distinctions (A) including ICT (English Medium) and 4 Very Good Passes (B) including Mathematics & Science.",
      "Active member of the ICT and Robotics Society, School Rugby Player (2016–2018), Prefect, and House Captain.",
    ],
  },

  // Diplomas (6)
  {
    id: "esoft-se-diploma",
    degree: "Pearson Assured Diplomas in Software Engineering (DTEC) & IT (DITEC)",
    institution: "Pearson / ESOFT Metro Campus",
    year: "Oct 2023",
    category: "diploma",
    badge: "2 Pearson Diplomas + Transcript",
    logo: "/esoft-logo.jpg",
    details: [
      "Awarded both the Pearson Assured Diploma in Software Engineering (DTEC, 2023) and the Pearson Assured Diploma in Information Technology (DITEC, Oct 2023) with full Academic Transcript.",
    ],
  },
  {
    id: "esoft-english-diploma",
    degree: "Pearson Assured Diploma in English",
    institution: "ESOFT Metro Campus",
    year: "Feb 2024",
    category: "diploma",
    badge: "Pearson Assured",
    logo: "/esoft-logo.jpg",
    details: [
      "Awarded 28-Feb-2024 — Advanced academic and professional English communication, business writing, and presentation mastery.",
    ],
  },
  {
    id: "atari-graphic-diploma",
    degree: "1-Year Graphic Designing & Multimedia Diploma (Level 02)",
    institution: "ATARI City Campus",
    year: "Apr 2026",
    category: "diploma",
    badge: "Merit Scholarship + Transcript",
    details: [
      "Completed the 01-Year Graphic Designing Program (06-Apr-2026) with Level 02 Academic Transcript under the ATARI City Campus Academic Merit Scholarship.",
    ],
  },
  {
    id: "oxborn-spoken-english",
    degree: "Diploma & Certificate Course in Spoken English",
    institution: "Oxborn College",
    year: "Completed",
    category: "diploma",
    badge: "Executive English",
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
  {
    id: "iwms-english-series",
    degree: "Graded Spoken & Written English Examinations (11 Certificates)",
    institution: "Institute of Western Music & Speech (IWMS)",
    year: "2016 – 2019",
    category: "diploma",
    badge: "Preliminary → Transitional & Grade 1",
    details: [
      "Completed 4 years of IWMS Graded Spoken & Written English Examinations with Practical & Paper Work Distinctions: Preliminary (2016), Elementary (2017), Graded (2018), Transitional & Grade One (2019).",
    ],
  },

  // Professional Certificates (8)
  {
    id: "uom-frontend",
    degree: "Certificate in Front-End Web Development",
    institution: "CODL — University of Moratuwa",
    year: "2023",
    category: "certificate",
    badge: "University of Moratuwa",
    logo: "/uom-logo.png",
    details: [
      "Centre for Open & Distance Learning (CODL), University of Moratuwa — Modern front-end architecture, responsive UI engineering, and JavaScript DOM.",
    ],
  },
  {
    id: "uom-python",
    degree: "Certificate in Python for Beginners",
    institution: "CODL — University of Moratuwa",
    year: "2023",
    category: "certificate",
    badge: "University of Moratuwa",
    logo: "/uom-logo.png",
    details: [
      "Centre for Open & Distance Learning (CODL), University of Moratuwa — Python programming fundamentals, data structures, algorithms, and backend scripting.",
    ],
  },
  {
    id: "uom-web-design",
    degree: "Certificate in Web Design for Beginners",
    institution: "CODL — University of Moratuwa",
    year: "2023",
    category: "certificate",
    badge: "University of Moratuwa",
    logo: "/uom-logo.png",
    details: [
      "Centre for Open & Distance Learning (CODL), University of Moratuwa — Foundations of web design, HTML5/CSS3 layout systems, and UI design principles.",
    ],
  },
  {
    id: "codexpress-laravel",
    degree: "Certificate in Laravel Web Development",
    institution: "CodeXpress Academy",
    year: "2025",
    category: "certificate",
    badge: "Full-Stack MVC",
    logo: "/codeXpressLogo.jpg",
    details: [
      "Full-stack PHP & Laravel MVC web application development, RESTful routing, authentication, and SQL database modeling.",
    ],
  },
  {
    id: "psd-premiere-pro",
    degree: "Certificate & Transcript in Video Editing (Adobe Premiere Pro)",
    institution: "PSD Academy",
    year: "Aug 2025",
    category: "certificate",
    badge: "Certificate + Transcript",
    logo: "/PSD-AcademyLogo.jpg",
    details: [
      "Awarded 23-Aug-2025 with official Academic Transcript — Professional non-linear video editing, timeline mastering, audio sync, and high-retention reel production.",
    ],
  },
  {
    id: "psd-after-effects",
    degree: "Certificate & Transcript in Adobe After Effects",
    institution: "PSD Academy",
    year: "Dec 2025",
    category: "certificate",
    badge: "Certificate + Transcript",
    logo: "/PSD-AcademyLogo.jpg",
    details: [
      "Awarded 13-Dec-2025 with official Academic Transcript — Motion graphics, visual effects compositing, kinetic typography, and dynamic video animations.",
    ],
  },
  {
    id: "itd-photoshop",
    degree: "Certificate in Photoshop & Graphic Design",
    institution: "ITD Institute SL",
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
    institution: "ESOFT Metro Campus",
    year: "Dec 2022",
    category: "certificate",
    badge: "IT Foundations",
    logo: "/esoft-logo.jpg",
    details: [
      "Awarded 25-Dec-2022 — Core computing fundamentals, software applications, networking basics, and information systems.",
    ],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "atari-scholarship",
    title: "Certificate of Academic Merit Scholarship",
    organization: "ATARI City Campus",
    year: "2025",
    category: "competition",
    highlight:
      "Awarded an official Certificate of Scholarship based on academic excellence and creative distinction.",
  },
  {
    id: "ai-robotics-icbt",
    title: "8th Place among 500 Competitors — AI & Robotics Competition",
    organization: "Organized by Isipathana College at ICBT Campus",
    year: "2024",
    category: "competition",
    logo: "/isipathana-logo.png",
    highlight:
      "Ranked Top 8 out of 500 participants in the competitive AI & Robotics challenge hosted at ICBT Campus.",
  },
  {
    id: "futura-23-winner",
    title: "Winner — FUTURA '23 ICT & Robotics Quiz Competition",
    organization: "Isipathana College, Colombo",
    year: "2023",
    category: "competition",
    logo: "/isipathana-logo.png",
    highlight:
      "First-place Championship Winner in the FUTURA '23 ICT & Robotics Quiz Competition at Isipathana College (plus 2021 ICT Quiz Winner).",
  },
  {
    id: "apeiro-21",
    title: "Top 50 Finisher — Apeiro '21 Interschool Quiz & Lecture Series",
    organization: "Kingswood Research Unit & ICT/Robotics Society",
    year: "2021 – 2023",
    category: "competition",
    logo: "/isipathana-logo.png",
    highlight:
      "Recognized among the Top 50 finishers in the Apeiro '21 Quiz (Kingswood Research Unit) and interschool technology series.",
  },
  {
    id: "stellata-rotaract",
    title: "Stellata 3.0 Article Writing Competition",
    organization: "Rotaract (RY 2025/26)",
    year: "2025 / 2026",
    category: "competition",
    logo: "/uoc-logo.png",
    highlight:
      "Recognized in the Stellata 3.0 Article Competition organized by Rotaract for Rotaract Year 2025/26.",
  },
  {
    id: "ada-derana-media",
    title: "New Media & Digital Broadcast Workshop",
    organization: "Ada Derana & Isipathana College",
    year: "Aug 2023",
    category: "competition",
    logo: "/isipathana-logo.png",
    highlight:
      "Completed the New Media Workshop (09-Aug-2023) conducted jointly by Ada Derana and Isipathana College.",
  },
  {
    id: "taekwondo-belt",
    title: "1st Poom Black Belt & 1st RTC Open Taekwondo Championship (7 Certificates)",
    organization: "Kukkiwon (World Taekwondo HQ) & Sri Lanka Taekwondo Federation",
    year: "2016 – 2020",
    category: "sports",
    highlight:
      "Certified by Kukkiwon & SL Taekwondo Federation across 7 official ranks: Yellow (Dec 2016), Green (Jun 2017), Blue (Dec 2017), Red (Jun 2018), 1st RTC Open Championship (Sep 2018), 1st Gup (Aug 2019), and 1st Poom Black Belt (19-Jan-2020).",
  },
  {
    id: "chess-achievements",
    title: "2nd Runner-Up, 8th Place & Chess Coaching Award (5 Certificates)",
    organization: "DGD Chess Club Tournaments",
    year: "Jul – Oct 2018",
    category: "sports",
    highlight:
      "Earned 2nd Runner-Up in the Rapid Chess Challenge (24-Oct-2018), 8th Place in the Rapid Chess Tournament (2018), and the official Coaching Award in Chess.",
  },
  {
    id: "seylan-art",
    title: "3rd Place (Seylan Bank Art), Little Picasso (BOC/MoE) & Isiwara Siththam",
    organization: "Seylan Bank, Bank of Ceylon & Ministry of Education",
    year: "2013 – 2018",
    category: "competition",
    highlight:
      "Won 3rd Place in the Seylan Bank Art Competition (06-Oct-2018), recognized in the Little Picasso Art Competition (BOC & Ministry of Education, 2018) and Isiwara Siththam Exhibition (2013).",
  },
  {
    id: "isipathana-rugby",
    title: "College Rugby Player & Inter-House Sports Meet Honours",
    organization: "Isipathana College, Colombo",
    year: "2016 – 2018",
    category: "sports",
    logo: "/isipathana-logo.png",
    highlight:
      "Represented Isipathana College in school rugby (2016–2018) and earned Inter-House Sports Meet Honours (17-Feb-2017).",
  },
  {
    id: "plantara-25",
    title: "Project 'PLANTARA'25' — Environmental Volunteering",
    organization: "Rotaract Club of Faculty of Science, University of Colombo",
    year: "2025",
    category: "volunteering",
    logo: "/uoc-logo.png",
    highlight:
      "Contributed to a community sustainability initiative that successfully planted 300 native plants.",
  },
];

export interface CredentialRegistryItem {
  no: number;
  title: string;
  institution: string;
  date: string;
  domain: "IT & Software" | "Creative & Media" | "English & Speech" | "Sports & Chess" | "Competitions & Volunteering";
}

export const COMPLETE_CREDENTIAL_ARCHIVE: CredentialRegistryItem[] = [
  { no: 1, title: "Assured Diploma in Information Technology (DITEC)", institution: "Pearson / ESOFT Metro Campus", date: "Oct 2023", domain: "IT & Software" },
  { no: 2, title: "Academic Transcript — Assured Diploma in IT (DITEC)", institution: "ESOFT Metro Campus", date: "08-Oct-2023", domain: "IT & Software" },
  { no: 3, title: "Pearson Assured Diploma in Software Engineering (DTEC)", institution: "Pearson / ESOFT Metro Campus", date: "2023", domain: "IT & Software" },
  { no: 4, title: "Certificate in Information Technology", institution: "ESOFT Metro Campus", date: "25-Dec-2022", domain: "IT & Software" },
  { no: 5, title: "Pearson Assured Diploma in English", institution: "ESOFT Metro Campus", date: "28-Feb-2024", domain: "English & Speech" },
  { no: 6, title: "Front-End Web Development Certificate", institution: "CODL — University of Moratuwa", date: "2023", domain: "IT & Software" },
  { no: 7, title: "Web Design for Beginners Certificate", institution: "CODL — University of Moratuwa", date: "2023", domain: "IT & Software" },
  { no: 8, title: "Python for Beginners Certificate", institution: "CODL — University of Moratuwa", date: "2023", domain: "IT & Software" },
  { no: 9, title: "Laravel Web Development Certificate", institution: "CodeXpress Academy", date: "2025", domain: "IT & Software" },
  { no: 10, title: "Graphic Designing Program (01 Year Diploma)", institution: "ATARI City Campus", date: "06-Apr-2026", domain: "Creative & Media" },
  { no: 11, title: "Graphic Designing Academic Transcript (Level 02)", institution: "ATARI City Campus", date: "2026", domain: "Creative & Media" },
  { no: 12, title: "Certificate of Academic Merit Scholarship", institution: "ATARI City Campus", date: "2025", domain: "Creative & Media" },
  { no: 13, title: "Photoshop & Graphic Design Certificate", institution: "ITD Institute SL", date: "2024", domain: "Creative & Media" },
  { no: 14, title: "Video Editing (Adobe Premiere Pro) Certificate", institution: "PSD Academy", date: "23-Aug-2025", domain: "Creative & Media" },
  { no: 15, title: "Video Editing (Adobe Premiere Pro) Academic Transcript", institution: "PSD Academy", date: "23-Aug-2025", domain: "Creative & Media" },
  { no: 16, title: "Adobe After Effects Motion Graphics Certificate", institution: "PSD Academy", date: "13-Dec-2025", domain: "Creative & Media" },
  { no: 17, title: "Video Editing After Effects Academic Transcript", institution: "PSD Academy", date: "13-Dec-2025", domain: "Creative & Media" },
  { no: 18, title: "FUTURA '23 ICT & Robotics Quiz Competition (Winner)", institution: "Isipathana College, Colombo", date: "2023", domain: "Competitions & Volunteering" },
  { no: 19, title: "8th Place among 500 Competitors — AI & Robotics Competition", institution: "Isipathana College at ICBT Campus", date: "2024", domain: "Competitions & Volunteering" },
  { no: 20, title: "Apeiro '21 Interschool Quiz (Top 50)", institution: "Kingswood Research Unit", date: "2021", domain: "Competitions & Volunteering" },
  { no: 21, title: "New Media & Digital Broadcast Workshop", institution: "Ada Derana & Isipathana College", date: "09-Aug-2023", domain: "Creative & Media" },
  { no: 22, title: "Project Plantara '25 — Environmental Volunteering", institution: "Rotaract Club (University of Colombo)", date: "2025", domain: "Competitions & Volunteering" },
  { no: 23, title: "Stellata 3.0 Article Writing Competition", institution: "Rotaract (RY 25/26)", date: "2025 / 2026", domain: "Competitions & Volunteering" },
  { no: 24, title: "Taekwondo 1st Poom Black Belt Certificate", institution: "Kukkiwon & Sri Lanka Taekwondo Federation", date: "19-Jan-2020", domain: "Sports & Chess" },
  { no: 25, title: "Taekwondo 1st Gup Certificate", institution: "Sri Lanka Taekwondo Federation", date: "04-Aug-2019", domain: "Sports & Chess" },
  { no: 26, title: "1st RTC Open Taekwondo Championship", institution: "Kukkiwon", date: "16-Sep-2018", domain: "Sports & Chess" },
  { no: 27, title: "Taekwondo Red Belt Certificate", institution: "Sri Lanka Taekwondo Federation", date: "24-Jun-2018", domain: "Sports & Chess" },
  { no: 28, title: "Taekwondo Blue Belt Certificate", institution: "Sri Lanka Taekwondo Federation", date: "17-Dec-2017", domain: "Sports & Chess" },
  { no: 29, title: "Taekwondo Green Belt Certificate", institution: "Sri Lanka Taekwondo Federation", date: "18-Jun-2017", domain: "Sports & Chess" },
  { no: 30, title: "Taekwondo Yellow Belt Certificate", institution: "Sri Lanka Taekwondo Federation", date: "03-Dec-2016", domain: "Sports & Chess" },
  { no: 31, title: "Rapid Chess Challenge (2nd Runner-Up)", institution: "DGD Chess Club", date: "24-Oct-2018", domain: "Sports & Chess" },
  { no: 32, title: "Rapid Chess Tournament (8th Place)", institution: "DGD Chess Club", date: "2018", domain: "Sports & Chess" },
  { no: 33, title: "Coaching Award in Chess", institution: "DGD Chess Club", date: "2018", domain: "Sports & Chess" },
  { no: 34, title: "Rapid Chess Tournament Certificate", institution: "DGD Chess Club", date: "24-Oct-2018", domain: "Sports & Chess" },
  { no: 35, title: "Rapid Chess Challenge Certificate", institution: "DGD Chess Club", date: "22-Jul-2018", domain: "Sports & Chess" },
  { no: 36, title: "National Art Competition (3rd Place)", institution: "Seylan Bank", date: "06-Oct-2018", domain: "Competitions & Volunteering" },
  { no: 37, title: "Little Picasso Art Competition", institution: "Bank of Ceylon (BOC) & Ministry of Education", date: "2018", domain: "Competitions & Volunteering" },
  { no: 38, title: "Isiwara Siththam Art Exhibition", institution: "Isipathana College, Colombo", date: "2013", domain: "Competitions & Volunteering" },
  { no: 39, title: "Inter-House Sports Meet Honours", institution: "Isipathana College, Colombo", date: "17-Feb-2017", domain: "Sports & Chess" },
  { no: 40, title: "Diploma & Certificate Course in Spoken English", institution: "Oxborn College", date: "Completed", domain: "English & Speech" },
  { no: 41, title: "Diploma in English 7 Boxes", institution: "Dr. Lakshitha Prasad", date: "2026", domain: "English & Speech" },
  { no: 42, title: "Written English Grade One Certificate", institution: "Institute of Western Music & Speech (IWMS)", date: "2019", domain: "English & Speech" },
  { no: 43, title: "Spoken English Transitional Certificate & Marks", institution: "Institute of Western Music & Speech (IWMS)", date: "2019", domain: "English & Speech" },
  { no: 44, title: "Paper Work Written English (Transitional)", institution: "Institute of Western Music & Speech (IWMS)", date: "29-Jun-2019", domain: "English & Speech" },
  { no: 45, title: "Graded Examinations Certificate & Practical Marks", institution: "Institute of Western Music & Speech (IWMS)", date: "2018", domain: "English & Speech" },
  { no: 46, title: "Paper Work Written English", institution: "Institute of Western Music & Speech (IWMS)", date: "29-May-2018", domain: "English & Speech" },
  { no: 47, title: "Spoken English Elementary Certificate & Marks", institution: "Institute of Western Music & Speech (IWMS)", date: "2017", domain: "English & Speech" },
  { no: 48, title: "Spoken English Preliminary Certificate & Marks", institution: "Institute of Western Music & Speech (IWMS)", date: "2016", domain: "English & Speech" },
];

