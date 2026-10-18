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
  title: "Full-Stack Software Engineer, AI Creator & Tech Entrepreneur",
  tagline:
    "I build modern websites, mobile apps, AI study tools, and educational communities used by thousands of students across Sri Lanka.",
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
      label: "Total App & Bot Users",
      detail: "Across MemoAI, DanumaAI & Web Platforms",
    },
    {
      value: "116K+",
      label: "Student Media Network",
      detail: "74K+ on WhatsApp & 42K+ on Telegram",
    },
    {
      value: "5,000+",
      label: "DanumaAI App Downloads",
      detail: "Google Play Store, Website & Telegram Bot",
    },
    {
      value: "2,000+",
      label: "Active DanumaAI Students",
      detail: "Daily AI Study Notes & Past-Paper Help",
    },
    {
      value: "7+",
      label: "Degree & Diplomas",
      detail: "UCSC BIT, Pearson ESOFT, ATARI & Oxborn",
    },
    {
      value: "48",
      label: "Certificates & Awards",
      detail: "Moratuwa Uni, CodeXpress, PSD, Taekwondo & Chess",
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
      era: "2020 – 2022 • First Studio",
      name: "Asteroid Technologies",
      logo: "/AsteroidTechLogo.jpg",
      secondaryLogo: "/BlackWolfMC-Logo.jpg",
      status: "Where It Started",
      desc: "My first technology brand, started in 2020 to build and run the BlackWolf multiplayer Minecraft game server, player communities, and early web projects.",
    },
    {
      era: "2022 – 2025 • AI Growth Era",
      name: "Lycoryx Technologies",
      logo: "/LycoryxTech.jpg",
      status: "AI Expansion",
      desc: "Expanded into AI tools — creating MemoAI (used by over 250,000+ members across 2,157+ Discord communities) and building the first version of DanumaAI.",
    },
    {
      era: "2025 – Present • Main Company",
      name: "Corvento Technologies",
      logo: "/CorventoTechLogo.jpg",
      status: "Current Parent Company",
      desc: "The main company I run today — powering DanumaAI (Website, Google Play Store App & Telegram Bot), @corventotech YouTube/Reels, and a 116,000+ student educational network on WhatsApp and Telegram.",
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
      category: "Education & Study Tips",
      description:
        "Helping Sri Lankan students every day with study notes, exam tips, and useful technology skills.",
    },
    {
      id: "lanka-diaries",
      name: "Lanka Diaries",
      followers: "20K+ Followers",
      url: "https://whatsapp.com/channel/0029VbAe5k0AInPoph6EFQ34",
      logo: "/LankaDiaries.jpg",
      category: "Digital Media & Stories",
      description:
        "Sharing interesting stories, general knowledge, and daily digital content from across Sri Lanka.",
    },
    {
      id: "sarasavi-sihinaya",
      name: "Sarasavi Sihinaya",
      sinhalaName: "සරසවි සිහිනය",
      followers: "17K+ Followers",
      url: "https://whatsapp.com/channel/0029ValZ7iP4tRrzE8m4s21g",
      logo: "/SarasaviSihinaya.jpg",
      category: "A/L & University Guidance",
      description:
        "Supporting Advanced Level (A/L) students with university entrance guidance, study plans, and motivation.",
    },
    {
      id: "sarasavi-pin-bima",
      name: "Sarasavi Pin Bima",
      sinhalaName: "සරසවි පින් බිම",
      followers: "9K+ Followers",
      url: "https://whatsapp.com/channel/0029Vai0gVe59PwJw0F3IS2g",
      logo: "/SarasaviPinBima.jpg",
      category: "University Student Community",
      description:
        "Sharing university news, scholarship updates, and helpful study advice for future undergraduates.",
    },
  ] as WhatsAppChannel[],
};

export const ABOUT_DATA = {
  headline:
    "Building helpful software, AI learning tools, and educational communities from Colombo, Sri Lanka.",
  paragraphs: [
    "I am R.M. Kevin Sharada Bandara (Rathnayaka Mudiyanselage Kevin Sharada Bandara), a software developer, AI product creator, graphic & video designer, and young entrepreneur from Colombo, Sri Lanka. I am currently studying for my Bachelor of Information Technology (BIT) degree at the University of Colombo School of Computing (UCSC). I build complete websites, mobile apps, and AI tools that solve real everyday problems for students and businesses.",
    "My interest in technology started early during my school days at Isipathana College, Colombo. At school, I was an active member of the ICT and Robotics Society — winning 1st Place in the FUTURA '23 ICT Quiz and placing 8th out of 500 students at the AI & Robotics Competition held at ICBT Campus. Alongside technology, I played school rugby for Isipathana College, won awards in chess and art competitions, and earned my 1st Poom Taekwondo Black Belt from Kukkiwon (World Taekwondo Headquarters). In 2020, I started my first online project (the BlackWolf Minecraft gaming server under Asteroid Technologies), later created the MemoAI chatbot used by 250,000+ people on Discord (under Lycoryx Technologies), and today run my main company, Corvento Technologies.",
    "Through Corvento Technologies, I created DanumaAI — an AI study assistant for Sri Lankan students available as a Website, a Google Play Store Android App (5,000+ downloads), and a Telegram Bot (used by 2,000+ active students) — and I also manage an educational network of over 116,000+ students across WhatsApp (74,000+ followers) and Telegram (42,000+ students). In addition to my own projects, I work part-time as Senior Web Developer at Quizzygram, Sales & Operations Manager and Booking System Developer at Past Papers Wiki, Digital Operations Coordinator at MAOS Office, and as a freelance web developer and graphic designer on Fiverr and Upwork.",
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
      code: "01 • Websites, Apps & AI",
      title: "Web, Mobile & AI Study Tools",
      description:
        "Creating fast, easy-to-use websites, Google Play Store Android apps, and smart AI assistants that answer questions in Sinhala, Tamil, and English.",
    },
    {
      code: "02 • Education & Communities",
      title: "Corvento & 116K+ Student Network",
      description:
        "Running DanumaAI and managing daily educational WhatsApp and Telegram channels that share notes and exam help with over 116,000+ Sri Lankan students.",
    },
    {
      code: "03 • Design, Video & Freelance",
      title: "Graphic Design, Reels & Global Clients",
      description:
        "Scholarship-winning graphic designer and certified video editor (Photoshop, Illustrator, Premiere Pro, After Effects, Figma) working with clients on Fiverr and Upwork.",
    },
  ],
  milestones: [
    {
      year: "2013 – 2020",
      title: "School Achievements, Chess, Rugby & Taekwondo Black Belt",
      subtitle: "Isipathana College, Kukkiwon, DGD Chess Club & IWMS",
      detail:
        "Completed 11 Spoken & Written English exams at IWMS, won 2nd Runner-Up and the Coaching Award in Chess, won 3rd Place in the Seylan Bank National Art Competition, played school rugby for Isipathana College, and earned my 1st Poom Taekwondo Black Belt from Kukkiwon.",
    },
    {
      year: "2020 – 2022",
      title: "Asteroid Technologies & BlackWolf Minecraft Server",
      subtitle: "First Tech Venture & Online Gaming Community",
      detail:
        "Started Asteroid Technologies and launched the BlackWolf multiplayer Minecraft server — learning how to set up Linux servers, configure game plugins, and manage an active online community.",
    },
    {
      year: "2022 – 2024",
      title: "Pearson Diplomas, Moratuwa University Certificates & ICT Wins",
      subtitle: "ESOFT Metro Campus, University of Moratuwa & Isipathana College",
      detail:
        "Completed Pearson Assured Diplomas in Software Engineering, IT, and English at ESOFT; earned 3 programming & web certificates from the University of Moratuwa; won 1st Place at the FUTURA '23 ICT Quiz; and placed 8th out of 500 students at the ICBT AI & Robotics Competition.",
    },
    {
      year: "2022 – Apr 2025",
      title: "Lycoryx Technologies & Growing MemoAI to 250,000+ Users",
      subtitle: "2,157+ Discord Communities & Web Dashboard",
      detail:
        "Created MemoAI under Lycoryx Technologies — an AI assistant and image generator bot that grew to over 250,000+ members across 2,157+ Discord servers before closing in April 2025 due to high AI server costs.",
    },
    {
      year: "2025 – Present",
      title: "Senior Web Developer, Past Papers Wiki & Creative Diplomas",
      subtitle: "Quizzygram, Past Papers Wiki, CodeXpress, PSD Academy & ATARI",
      detail:
        "Joined Quizzygram as Senior Web Developer and Past Papers Wiki as Sales & Operations Manager (and built their internal ad booking system); completed Laravel certification at CodeXpress, Premiere Pro & After Effects video editing certificates at PSD Academy, and a 1-Year Graphic Design Scholarship Diploma at ATARI City Campus.",
    },
    {
      year: "2026 – Present",
      title: "Corvento Technologies, DanumaAI, MAOS Office & UCSC BIT Degree",
      subtitle: "5,000+ App Downloads, 116K+ Student Network & University Studies",
      detail:
        "Launched DanumaAI under Corvento Technologies across Website, Google Play Store (5,000+ downloads), and Telegram Bot (2,000+ active students); grew our WhatsApp & Telegram educational channels to 116,000+ students; joined MAOS Office as Digital Operations Coordinator; and began my BIT degree at UCSC.",
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
    title: "DanumaAI — AI Study Assistant for Sri Lankan Students",
    subtitle:
      "Powered by Corvento Technologies • Website, Google Play Store App & Telegram Bot",
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
      { label: "Play Store Downloads", value: "5,000+" },
      { label: "Active Students", value: "2,000+" },
      { label: "3 Platforms", value: "Web • App • Telegram" },
      { label: "Parent Company", value: "Corvento Tech" },
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
      "An AI study helper built for Sri Lankan students under Corvento Technologies. Students can use DanumaAI on its Website (danumaai.lk), download the Android App from the Google Play Store (5,000+ downloads), or chat with the Telegram Bot (@DanumaAI_Bot). Today it helps over 2,000+ active students generate quick study notes, understand difficult lessons, and get step-by-step answers to past-paper questions in Sinhala, Tamil, and English.",
    highlights: [
      "Works across 3 connected platforms under Corvento Technologies: Website, Google Play Store Android App (5,000+ downloads), and Telegram Bot.",
      "Helps 2,000+ active students create instant study notes, ask syllabus questions in Sinhala/Tamil/English, and upload photos of past-paper questions for step-by-step solutions.",
      "Includes a built-in teacher promotion system so tuition teachers can show relevant class announcements to students based on their grade and subject.",
    ],
    links: [
      { label: "Open Website", url: "https://danumaai.lk/", type: "web" },
      {
        label: "Google Play Store App",
        url: "https://play.google.com/store/apps/details?id=com.Lycoryx.danumaai",
        type: "playstore",
      },
      {
        label: "Telegram Bot (@DanumaAI_Bot)",
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
    title: "Quizzygram — Online Student Community & Quiz Website",
    subtitle:
      "Real-Time Student Chats, Discussion Forums, Study Channels & Live Quiz Competitions",
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
      { label: "Main Features", value: "Chats • Forums • Quizzes" },
      { label: "Competitions", value: "Live Scoreboards" },
      { label: "Student Community", value: "42,000+ on Telegram" },
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
      "Leading the web development of Quizzygram (quizzygram.com), an interactive study and quiz website connected to one of Sri Lanka's largest student Telegram communities (Educational Channel SL — 42,000+ students). Students can chat in real time, ask questions in subject forums, follow study channels, and compete in timed quizzes with live scoreboards.",
    highlights: [
      "Built easy-to-use live chat rooms, subject channels, and question-and-answer discussion forums for students.",
      "Created timed practice quizzes and live leaderboard competitions to make exam revision engaging and fun.",
      "Made sure the website loads quickly and works smoothly on both mobile phones and computers during busy exam periods.",
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
    title: "Past Papers Wiki — Online Ad Booking & Scheduling System",
    subtitle: "Internal Reservation System & Online Sales for PastPapers.Wiki",
    role: "Full-Stack Developer & Sales Manager",
    period: "2025 – Present",
    statusBadge: "Active Internal System",
    statusTone: "client",
    category: "Full-Stack Web",
    logo: "/paperwiki logo.jpeg",
    accentColor: "#818CF8",
    metrics: [
      { label: "Website Reach", value: "140K+ Students" },
      { label: "Custom System", value: "Ad Booking Portal" },
      { label: "Scheduling", value: "No Double-Bookings" },
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    overview:
      "Alongside managing online past-paper sales and student customer support for Past Papers Wiki (pastpapers.wiki — used by over 140,000+ students), I built their custom internal booking system to organize teacher advertising slots and campaign schedules automatically.",
    highlights: [
      "Built an internal booking website that lets the team schedule teacher advertisements and campaigns without accidental double-bookings.",
      "Manage online orders, student inquiries, and nationwide delivery of past examination papers and study packs across Sri Lanka.",
    ],
    links: [
      {
        label: "Official Website (pastpapers.wiki)",
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
    title: "Kev & Thash Sweet Treats — Sinhala & English Cake Ordering Website",
    subtitle:
      "Online Bakery Storefront with One-Click Sinhala/English Switch & WhatsApp Ordering",
    role: "Full-Stack Developer",
    period: "2025 – Present",
    statusBadge: "Live Website",
    statusTone: "active",
    category: "Full-Stack Web",
    logo: "/KevAndThashLogo.png",
    accentColor: "#F472B6",
    metrics: [
      { label: "Languages", value: "EN & සිංහල" },
      { label: "Ordering", value: "Direct to WhatsApp" },
      { label: "Built With", value: "Next.js + TS" },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bilingual i18n",
      "Schema.org SEO",
    ],
    overview:
      "A modern online cake and sweet shop website designed for Sri Lankan customers. Visitors can switch between English and Sinhala with one click, browse cakes by category, and send their complete order directly to WhatsApp.",
    highlights: [
      "Designed a mobile-friendly website where customers can view all cake prices and details in either Sinhala or English.",
      "Added one-tap WhatsApp ordering and Google search optimization (SEO) so local customers can easily find and order from the shop.",
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
    title: "MemoAI — Community AI Chatbot & Web Dashboard",
    subtitle:
      "Used by 250,000+ Members Across 2,157+ Discord Communities (2022 – April 2025)",
    role: "Founder & Lead Developer",
    period: "2022 – Apr 2025",
    statusBadge: "Closed Apr 2025 (High AI Server Costs)",
    statusTone: "archived",
    category: "Archived Ventures",
    logo: "/MemoAI.png",
    secondaryLogo: "/CorventoTechLogo.jpg",
    poweredBy: "Corvento / Lycoryx Archive",
    accentColor: "#C084FC",
    metrics: [
      { label: "Community Members", value: "250,000+" },
      { label: "Discord Servers", value: "2,157+" },
      { label: "Status", value: "Closed Apr 2025" },
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
      "An AI chatbot and web dashboard created under Lycoryx / Corvento Technologies that allowed online communities to chat with AI and generate images directly inside Discord. It grew to serve over 250,000+ community members across 2,157+ Discord servers before closing in April 2025 due to the high cost of running AI servers at that scale.",
    highlights: [
      "Built the bot to handle thousands of AI chat and image generation requests across 2,157+ Discord communities with 250,000+ members.",
      "Created a companion website where users could log in with Discord and test AI prompts before the project was concluded in April 2025.",
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
    title: "BlackWolf Minecraft Server — Multiplayer Gaming Community",
    subtitle:
      "Custom Multiplayer Game Server, Player Economy & Online Community",
    role: "Founder & Server Administrator (Asteroid Technologies)",
    period: "2020 – 2022",
    statusBadge: "Past Gaming Project",
    statusTone: "archived",
    category: "Archived Ventures",
    logo: "/BlackWolfMC-Logo.jpg",
    secondaryLogo: "/AsteroidTechLogo.jpg",
    poweredBy: "Asteroid Technologies Origin",
    accentColor: "#F59E0B",
    metrics: [
      { label: "Brand Era", value: "Asteroid Tech" },
      { label: "Project Type", value: "Multiplayer Server" },
      { label: "Status", value: "Completed (2022)" },
    ],
    stack: [
      "Java / Spigot / PaperMC",
      "Linux VPS Administration",
      "Server Plugins & Configs",
      "Discord Community Integration",
    ],
    overview:
      "My very first technology project, started in 2020 under Asteroid Technologies. I set up and ran the BlackWolf multiplayer Minecraft server, where players could join together online, trade in an in-game economy, and chat through our connected Discord community.",
    highlights: [
      "Set up Linux cloud servers, configured custom game plugins, and kept the multiplayer server fast and secure for players.",
      "Built and managed an active player community on Discord — giving me my first hands-on experience running a digital brand.",
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
    type: "Software & Digital Media",
    logo: "/CorventoTechLogo.jpg",
    secondaryLogo: "/AsteroidTechLogo.jpg",
    description:
      "Founded and run Corvento Technologies — the company behind the DanumaAI study platform (Website, Google Play Store App, and Telegram Bot), @corventotech YouTube/Reels, and an educational network reaching over 116,000+ students on WhatsApp and Telegram. Started in 2020 as Asteroid Technologies (BlackWolf Minecraft Server), grew into Lycoryx Technologies (MemoAI — 250,000+ users), and now operates as Corvento Technologies.",
    achievements: [
      "Created and launched DanumaAI across Website, Google Play Store (5,000+ downloads), and Telegram Bot to help 2,000+ active students with daily studies.",
      "Built and manage 4 daily educational WhatsApp channels (74,000+ followers) and student Telegram channels/groups (42,000+ students).",
      "Previously built and grew the MemoAI Discord bot to over 250,000+ community members across 2,157+ servers (2022 – April 2025).",
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
      { label: "DanumaAI Website", url: "https://danumaai.lk/" },
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
      "Sharing daily study materials, exam notices, and class updates with accounting students across official online WhatsApp channels.",
    achievements: [
      "Organize and post daily study notes, class links, and updates across 3 official educational WhatsApp channels.",
      "Help coordinate exam announcements and student communications so learners receive accurate information on time.",
    ],
    technologies: [
      "Digital Operations",
      "WhatsApp Broadcasts",
      "Student Communications",
      "Content Scheduling",
    ],
  },
  {
    id: "quizzygram",
    role: "Senior Web Developer",
    company: "quizzygram.com (Educational Channel SL)",
    period: "2025 – Present",
    location: "Remote • Part-Time",
    type: "Web Development",
    logo: "/QuzziygramLogo.png",
    secondaryLogo: "/eduChannel-circleLogo.png",
    description:
      "Leading the website development for Quizzygram — an online study and quiz platform connected to the Educational Channel SL Telegram community (42,000+ students).",
    achievements: [
      "Built live student chat rooms, subject discussion forums, study channels, and interactive quiz competitions on the website.",
      "Improved website speed and mobile layout so thousands of students can take quizzes smoothly during exam season.",
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
    role: "Sales & Operations Manager + Booking System Developer",
    company: "Past Papers Wiki (pastpapers.wiki)",
    period: "2025 – Present",
    location: "Remote • Part-Time",
    type: "Sales & Web Systems",
    logo: "/paperwiki logo.jpeg",
    description:
      "Managing online past-paper orders and student support across Sri Lanka while also building the company's internal advertisement booking website.",
    achievements: [
      "Manage online orders, student customer support, and delivery of past examination papers for students nationwide.",
      "Built a custom internal booking system (using Next.js, Node.js, and MongoDB) to schedule teacher advertisements without double-booking conflicts.",
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
    role: "Freelance Web Developer & Graphic Designer",
    company: "Fiverr, Upwork & Direct Clients",
    period: "2022 – Present",
    location: "Remote • Self-Employed",
    type: "Global Freelance",
    logo: "/CorventoTechLogo.jpg",
    description:
      "Designing and building modern websites, online stores, brand logos, social media posters, and short video reels for local and international clients.",
    achievements: [
      "Build custom websites and web applications for clients on Fiverr and Upwork using Next.js, React, Node.js, and Laravel.",
      "Created bilingual websites like Kev & Thash Sweet Treats with Sinhala/English language switching and WhatsApp ordering.",
      "Design brand logos, marketing graphics, UI layouts, and video reels using Figma, Adobe Photoshop, Illustrator, Premiere Pro, and After Effects.",
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
      "Studying for the Bachelor of Information Technology (BIT) degree at the University of Colombo School of Computing (UCSC) — 2026 to 2029 (Expected).",
      "Focusing on Software Engineering, Web & Mobile Development, Databases, and Computer Networks.",
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
      "G.C.E. A/L (Technology Stream: ICT English Medium, SFT, ET) & G.C.E. O/L with 4 Distinctions (A) including ICT (English Medium) and 4 Very Good Passes (B) including Mathematics & Science. Active member of the ICT & Robotics Society and School Rugby Player (2016–2018).",
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
      "Completed both the Pearson Assured Diploma in Software Engineering (DTEC, 2023) and the Pearson Assured Diploma in Information Technology (DITEC, Oct 2023) with official Academic Transcript.",
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
      "Awarded 28-Feb-2024 — Academic and professional English communication, business writing, and presentation skills.",
    ],
  },
  {
    id: "atari-graphic-diploma",
    degree: "1-Year Graphic Designing & Multimedia Diploma (Level 02)",
    institution: "ATARI City Campus",
    year: "Apr 2026",
    category: "diploma",
    badge: "Merit Scholarship + Transcript",
    logo: "/ATARI-CampusLogo.png",
    details: [
      "Completed the 1-Year Graphic Designing Program (06-Apr-2026) with Level 02 Academic Transcript after receiving an Academic Merit Scholarship from ATARI City Campus.",
    ],
  },
  {
    id: "oxborn-spoken-english",
    degree: "Diploma & Certificate Course in Spoken English",
    institution: "Oxborn College",
    year: "Completed",
    category: "diploma",
    badge: "Spoken English",
    logo: "/oxbornCollegeLogo.jpg",
    details: [
      "Completed spoken English fluency, professional communication, and public speaking training at Oxborn College.",
    ],
  },
  {
    id: "english-7-boxes",
    degree: "Diploma in English 7 Boxes",
    institution: "Dr. Lakshitha Prasad",
    year: "2026",
    category: "diploma",
    badge: "English Diploma",
    logo: "/EngIn7BoxesLogo.jpg",
    details: [
      "Practical English grammar, sentence building, and everyday professional communication program.",
    ],
  },
  {
    id: "iwms-english-series",
    degree: "Graded Spoken & Written English Examinations (11 Certificates)",
    institution: "Institute of Western Music & Speech (IWMS)",
    year: "2016 – 2019",
    category: "diploma",
    badge: "Preliminary → Transitional & Grade 1",
    logo: "/IWMS-Logo.png",
    details: [
      "Successfully passed 4 years of IWMS Spoken & Written English Exams (11 certificates & marksheets): Preliminary (2016), Elementary (2017), Graded (2018), Transitional & Grade One (2019).",
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
      "University of Moratuwa (CODL) — Building modern, mobile-friendly website interfaces using HTML, CSS, JavaScript, and Front-End frameworks.",
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
      "University of Moratuwa (CODL) — Python programming fundamentals, problem-solving logic, and writing backend scripts.",
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
      "University of Moratuwa (CODL) — Core principles of website design, clean page layouts, and user-friendly interfaces.",
    ],
  },
  {
    id: "codexpress-laravel",
    degree: "Certificate in Laravel Web Development",
    institution: "CodeXpress Academy",
    year: "2025",
    category: "certificate",
    badge: "Full-Stack Web",
    logo: "/codeXpressLogo.jpg",
    details: [
      "Building complete, secure web applications and databases using PHP and the Laravel framework.",
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
      "Awarded 23-Aug-2025 with official Transcript — Professional video editing, sound mixing, and engaging YouTube/Reel video production.",
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
      "Awarded 13-Dec-2025 with official Transcript — Creating motion graphics, animated titles, and visual effects in Adobe After Effects.",
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
      "Photo editing, creative poster design, and brand graphics using Adobe Photoshop.",
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
      "Awarded 25-Dec-2022 — Essential computer skills, office applications, networking basics, and information systems.",
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
    logo: "/ATARI-CampusLogo.png",
    highlight:
      "Awarded an official Academic Merit Scholarship by ATARI City Campus in recognition of strong academic and creative performance.",
  },
  {
    id: "ai-robotics-icbt",
    title: "8th Place among 500 Competitors — AI & Robotics Competition",
    organization: "Organized by Isipathana College at ICBT Campus",
    year: "2024",
    category: "competition",
    logo: "/isipathana-logo.png",
    highlight:
      "Placed 8th out of 500 students in the competitive AI & Robotics Competition held at ICBT Campus.",
  },
  {
    id: "futura-23-winner",
    title: "1st Place Winner — FUTURA '23 ICT & Robotics Quiz",
    organization: "Isipathana College, Colombo",
    year: "2023",
    category: "competition",
    logo: "/isipathana-logo.png",
    highlight:
      "Won 1st Place in the FUTURA '23 ICT & Robotics Quiz Competition at Isipathana College (also won the 2021 school ICT Quiz).",
  },
  {
    id: "apeiro-21",
    title: "Top 50 Finisher — Apeiro '21 Interschool Quiz",
    organization: "Kingswood Research Unit & ICT/Robotics Society",
    year: "2021 – 2023",
    category: "competition",
    logo: "/isipathana-logo.png",
    highlight:
      "Ranked among the Top 50 students in the Apeiro '21 interschool quiz organized by the Kingswood Research Unit.",
  },
  {
    id: "stellata-rotaract",
    title: "Stellata 3.0 Article Writing Competition",
    organization: "Rotaract (RY 2025/26)",
    year: "2025 / 2026",
    category: "competition",
    logo: "/uoc-logo.png",
    highlight:
      "Awarded a certificate of recognition in the Stellata 3.0 Article Writing Competition organized by Rotaract (RY 2025/26).",
  },
  {
    id: "ada-derana-media",
    title: "New Media & Digital Broadcast Workshop",
    organization: "Ada Derana & Isipathana College",
    year: "Aug 2023",
    category: "competition",
    logo: "/isipathana-logo.png",
    highlight:
      "Completed the New Media training workshop (09-Aug-2023) conducted by Ada Derana and Isipathana College.",
  },
  {
    id: "taekwondo-belt",
    title: "1st Poom Taekwondo Black Belt & Championship (7 Certificates)",
    organization: "Kukkiwon (World Taekwondo HQ) & Sri Lanka Taekwondo Federation",
    year: "2016 – 2020",
    category: "sports",
    logo: "/WorldTaekwondeFedLogo.jpg",
    highlight:
      "Earned 7 official Taekwondo certificates from Yellow Belt (2016) up to the 1st Poom Black Belt (Jan 2020) certified by Kukkiwon, plus the 1st RTC Open Championship.",
  },
  {
    id: "chess-achievements",
    title: "2nd Runner-Up, 8th Place & Chess Coaching Award (5 Certificates)",
    organization: "DGD Chess Club Tournaments",
    year: "Jul – Oct 2018",
    category: "sports",
    logo: "/DGD-ChessClub.jpg",
    highlight:
      "Won 2nd Runner-Up in the Rapid Chess Challenge (Oct 2018), 8th Place in the Rapid Chess Tournament (2018), and the Coaching Award in Chess.",
  },
  {
    id: "seylan-art",
    title: "3rd Place (Seylan Bank Art), Little Picasso (BOC) & Isiwara Siththam",
    organization: "Seylan Bank, Bank of Ceylon & Ministry of Education",
    year: "2013 – 2018",
    category: "competition",
    logo: "/SeylanBankLogo.png",
    highlight:
      "Won 3rd Place in the Seylan Bank Art Competition (Oct 2018), plus certificates in the BOC/Ministry of Education Little Picasso Competition (2018) and Isiwara Siththam (2013).",
  },
  {
    id: "isipathana-rugby",
    title: "College Rugby Player & Inter-House Sports Meet Honours",
    organization: "Isipathana College, Colombo",
    year: "2016 – 2018",
    category: "sports",
    logo: "/isipathana-logo.png",
    highlight:
      "Played school rugby for Isipathana College (2016–2018) and earned Inter-House Sports Meet Honours (Feb 2017).",
  },
  {
    id: "plantara-25",
    title: "Project 'PLANTARA'25' — Environmental Volunteering",
    organization: "Rotaract Club of Faculty of Science, University of Colombo",
    year: "2025",
    category: "volunteering",
    logo: "/uoc-logo.png",
    highlight:
      "Participated in an environmental community project organized by the University of Colombo Science Faculty Rotaract Club that planted 300 native trees.",
  },
];

export interface CredentialRegistryItem {
  no: number;
  title: string;
  institution: string;
  date: string;
  domain: "IT & Software" | "Creative & Media" | "English & Speech" | "Sports & Chess" | "Competitions & Volunteering";
  logo?: string;
}

export const COMPLETE_CREDENTIAL_ARCHIVE: CredentialRegistryItem[] = [
  { no: 1, title: "Assured Diploma in Information Technology (DITEC)", institution: "Pearson / ESOFT Metro Campus", date: "Oct 2023", domain: "IT & Software", logo: "/esoft-logo.jpg" },
  { no: 2, title: "Academic Transcript — Assured Diploma in IT (DITEC)", institution: "ESOFT Metro Campus", date: "08-Oct-2023", domain: "IT & Software", logo: "/esoft-logo.jpg" },
  { no: 3, title: "Pearson Assured Diploma in Software Engineering (DTEC)", institution: "Pearson / ESOFT Metro Campus", date: "2023", domain: "IT & Software", logo: "/esoft-logo.jpg" },
  { no: 4, title: "Certificate in Information Technology", institution: "ESOFT Metro Campus", date: "25-Dec-2022", domain: "IT & Software", logo: "/esoft-logo.jpg" },
  { no: 5, title: "Pearson Assured Diploma in English", institution: "ESOFT Metro Campus", date: "28-Feb-2024", domain: "English & Speech", logo: "/esoft-logo.jpg" },
  { no: 6, title: "Front-End Web Development Certificate", institution: "CODL — University of Moratuwa", date: "2023", domain: "IT & Software", logo: "/uom-logo.png" },
  { no: 7, title: "Web Design for Beginners Certificate", institution: "CODL — University of Moratuwa", date: "2023", domain: "IT & Software", logo: "/uom-logo.png" },
  { no: 8, title: "Python for Beginners Certificate", institution: "CODL — University of Moratuwa", date: "2023", domain: "IT & Software", logo: "/uom-logo.png" },
  { no: 9, title: "Laravel Web Development Certificate", institution: "CodeXpress Academy", date: "2025", domain: "IT & Software", logo: "/codeXpressLogo.jpg" },
  { no: 10, title: "Graphic Designing Program (01 Year Diploma)", institution: "ATARI City Campus", date: "06-Apr-2026", domain: "Creative & Media", logo: "/ATARI-CampusLogo.png" },
  { no: 11, title: "Graphic Designing Academic Transcript (Level 02)", institution: "ATARI City Campus", date: "2026", domain: "Creative & Media", logo: "/ATARI-CampusLogo.png" },
  { no: 12, title: "Certificate of Academic Merit Scholarship", institution: "ATARI City Campus", date: "2025", domain: "Creative & Media", logo: "/ATARI-CampusLogo.png" },
  { no: 13, title: "Photoshop & Graphic Design Certificate", institution: "ITD Institute SL", date: "2024", domain: "Creative & Media" },
  { no: 14, title: "Video Editing (Adobe Premiere Pro) Certificate", institution: "PSD Academy", date: "23-Aug-2025", domain: "Creative & Media", logo: "/PSD-AcademyLogo.jpg" },
  { no: 15, title: "Video Editing (Adobe Premiere Pro) Academic Transcript", institution: "PSD Academy", date: "23-Aug-2025", domain: "Creative & Media", logo: "/PSD-AcademyLogo.jpg" },
  { no: 16, title: "Adobe After Effects Motion Graphics Certificate", institution: "PSD Academy", date: "13-Dec-2025", domain: "Creative & Media", logo: "/PSD-AcademyLogo.jpg" },
  { no: 17, title: "Video Editing After Effects Academic Transcript", institution: "PSD Academy", date: "13-Dec-2025", domain: "Creative & Media", logo: "/PSD-AcademyLogo.jpg" },
  { no: 18, title: "FUTURA '23 ICT & Robotics Quiz Competition (Winner)", institution: "Isipathana College, Colombo", date: "2023", domain: "Competitions & Volunteering", logo: "/isipathana-logo.png" },
  { no: 19, title: "8th Place among 500 Competitors — AI & Robotics Competition", institution: "Isipathana College at ICBT Campus", date: "2024", domain: "Competitions & Volunteering", logo: "/isipathana-logo.png" },
  { no: 20, title: "Apeiro '21 Interschool Quiz (Top 50)", institution: "Kingswood Research Unit", date: "2021", domain: "Competitions & Volunteering", logo: "/isipathana-logo.png" },
  { no: 21, title: "New Media & Digital Broadcast Workshop", institution: "Ada Derana & Isipathana College", date: "09-Aug-2023", domain: "Creative & Media", logo: "/isipathana-logo.png" },
  { no: 22, title: "Project Plantara '25 — Environmental Volunteering", institution: "Rotaract Club (University of Colombo)", date: "2025", domain: "Competitions & Volunteering", logo: "/uoc-logo.png" },
  { no: 23, title: "Stellata 3.0 Article Writing Competition", institution: "Rotaract (RY 25/26)", date: "2025 / 2026", domain: "Competitions & Volunteering", logo: "/uoc-logo.png" },
  { no: 24, title: "Taekwondo 1st Poom Black Belt Certificate", institution: "Kukkiwon & Sri Lanka Taekwondo Federation", date: "19-Jan-2020", domain: "Sports & Chess", logo: "/WorldTaekwondeFedLogo.jpg" },
  { no: 25, title: "Taekwondo 1st Gup Certificate", institution: "Sri Lanka Taekwondo Federation", date: "04-Aug-2019", domain: "Sports & Chess", logo: "/WorldTaekwondeFedLogo.jpg" },
  { no: 26, title: "1st RTC Open Taekwondo Championship", institution: "Kukkiwon", date: "16-Sep-2018", domain: "Sports & Chess", logo: "/WorldTaekwondeFedLogo.jpg" },
  { no: 27, title: "Taekwondo Red Belt Certificate", institution: "Sri Lanka Taekwondo Federation", date: "24-Jun-2018", domain: "Sports & Chess", logo: "/WorldTaekwondeFedLogo.jpg" },
  { no: 28, title: "Taekwondo Blue Belt Certificate", institution: "Sri Lanka Taekwondo Federation", date: "17-Dec-2017", domain: "Sports & Chess", logo: "/WorldTaekwondeFedLogo.jpg" },
  { no: 29, title: "Taekwondo Green Belt Certificate", institution: "Sri Lanka Taekwondo Federation", date: "18-Jun-2017", domain: "Sports & Chess", logo: "/WorldTaekwondeFedLogo.jpg" },
  { no: 30, title: "Taekwondo Yellow Belt Certificate", institution: "Sri Lanka Taekwondo Federation", date: "03-Dec-2016", domain: "Sports & Chess", logo: "/WorldTaekwondeFedLogo.jpg" },
  { no: 31, title: "Rapid Chess Challenge (2nd Runner-Up)", institution: "DGD Chess Club", date: "24-Oct-2018", domain: "Sports & Chess", logo: "/DGD-ChessClub.jpg" },
  { no: 32, title: "Rapid Chess Tournament (8th Place)", institution: "DGD Chess Club", date: "2018", domain: "Sports & Chess", logo: "/DGD-ChessClub.jpg" },
  { no: 33, title: "Coaching Award in Chess", institution: "DGD Chess Club", date: "2018", domain: "Sports & Chess", logo: "/DGD-ChessClub.jpg" },
  { no: 34, title: "Rapid Chess Tournament Certificate", institution: "DGD Chess Club", date: "24-Oct-2018", domain: "Sports & Chess", logo: "/DGD-ChessClub.jpg" },
  { no: 35, title: "Rapid Chess Challenge Certificate", institution: "DGD Chess Club", date: "22-Jul-2018", domain: "Sports & Chess", logo: "/DGD-ChessClub.jpg" },
  { no: 36, title: "National Art Competition (3rd Place)", institution: "Seylan Bank", date: "06-Oct-2018", domain: "Competitions & Volunteering", logo: "/SeylanBankLogo.png" },
  { no: 37, title: "Little Picasso Art Competition", institution: "Bank of Ceylon (BOC) & Ministry of Education", date: "2018", domain: "Competitions & Volunteering" },
  { no: 38, title: "Isiwara Siththam Art Exhibition", institution: "Isipathana College, Colombo", date: "2013", domain: "Competitions & Volunteering", logo: "/isipathana-logo.png" },
  { no: 39, title: "Inter-House Sports Meet Honours", institution: "Isipathana College, Colombo", date: "17-Feb-2017", domain: "Sports & Chess", logo: "/isipathana-logo.png" },
  { no: 40, title: "Diploma & Certificate Course in Spoken English", institution: "Oxborn College", date: "Completed", domain: "English & Speech", logo: "/oxbornCollegeLogo.jpg" },
  { no: 41, title: "Diploma in English 7 Boxes", institution: "Dr. Lakshitha Prasad", date: "2026", domain: "English & Speech", logo: "/EngIn7BoxesLogo.jpg" },
  { no: 42, title: "Written English Grade One Certificate", institution: "Institute of Western Music & Speech (IWMS)", date: "2019", domain: "English & Speech", logo: "/IWMS-Logo.png" },
  { no: 43, title: "Spoken English Transitional Certificate & Marks", institution: "Institute of Western Music & Speech (IWMS)", date: "2019", domain: "English & Speech", logo: "/IWMS-Logo.png" },
  { no: 44, title: "Paper Work Written English (Transitional)", institution: "Institute of Western Music & Speech (IWMS)", date: "29-Jun-2019", domain: "English & Speech", logo: "/IWMS-Logo.png" },
  { no: 45, title: "Graded Examinations Certificate & Practical Marks", institution: "Institute of Western Music & Speech (IWMS)", date: "2018", domain: "English & Speech", logo: "/IWMS-Logo.png" },
  { no: 46, title: "Paper Work Written English", institution: "Institute of Western Music & Speech (IWMS)", date: "29-May-2018", domain: "English & Speech", logo: "/IWMS-Logo.png" },
  { no: 47, title: "Spoken English Elementary Certificate & Marks", institution: "Institute of Western Music & Speech (IWMS)", date: "2017", domain: "English & Speech", logo: "/IWMS-Logo.png" },
  { no: 48, title: "Spoken English Preliminary Certificate & Marks", institution: "Institute of Western Music & Speech (IWMS)", date: "2016", domain: "English & Speech", logo: "/IWMS-Logo.png" },
];

