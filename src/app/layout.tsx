import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kevinbandara.is-a.dev"),
  title: {
    default:
      "Kevin Bandara (R.M. Kevin Sharada Bandara) — Full-Stack Software Engineer, AI Systems Builder & Founder of Corvento Technologies",
    template: "%s | Kevin Bandara",
  },
  description:
    "Official portfolio of Kevin Bandara (R.M. Kevin Sharada Bandara / කෙවින් බණ්ඩාර) — Full-Stack Software Engineer, AI Systems Builder, Creative Designer, and Founder of Corvento Technologies in Colombo, Sri Lanka. Creator of DanumaAI (Web, Play Store, Telegram Bot) and MemoAI (206K+ users), Senior Web Developer at Quizzygram, Digital Operations Coordinator at MAOS Office, and operator of a 74K+ subscriber WhatsApp media network. Contact: +94 71 851 1165.",
  keywords: [
    "Kevin Bandara",
    "R.M. Kevin Sharada Bandara",
    "Rathnayaka Mudiyanselage Kevin Sharada Bandara",
    "Kevin Sharada Bandara",
    "කෙවින් බණ්ඩාර",
    "Kevin Bandara Sri Lanka",
    "Kevin Bandara Colombo",
    "Kevin Bandara Portfolio",
    "Kevin Bandara Software Engineer",
    "kevinbandara.is-a.dev",
    "kevinbandara.vercel.app",
    "Corvento Technologies",
    "DanumaAI",
    "DanumaAI Founder",
    "DanumaAI Powered by Corvento Technologies",
    "MemoAI Creator",
    "Lycoryx Technologies",
    "Asteroid Technologies",
    "BlackWolf Minecraft Server",
    "Quizzygram Senior Web Developer",
    "MAOS Office Digital Operations Coordinator",
    "Education Channel Telegram Sri Lanka",
    "Past Papers Wiki Booking System",
    "Full-Stack Software Developer Sri Lanka",
    "AI Systems Builder Sri Lanka",
    "Next.js Developer Colombo",
    "UCSC BIT",
    "University of Moratuwa Web Development",
    "ESOFT Pearson Diploma Software Engineering",
    "ATARI City Campus Graphic Design Scholarship",
    "Isipathana College Colombo",
    "Achievers Hub WhatsApp Channel",
    "Lanka Diaries WhatsApp Channel",
    "Sarasavi Sihinaya WhatsApp Channel",
    "Sarasavi Pin Bima WhatsApp Channel",
  ],
  authors: [
    {
      name: "Kevin Bandara (R.M. Kevin Sharada Bandara)",
      url: "https://kevinbandara.is-a.dev",
    },
    { name: "Kevin Bandara", url: "https://kevinbandara.vercel.app" },
    { name: "Kevin Bandara", url: "https://github.com/KevinBandara" },
  ],
  creator: "Kevin Bandara (R.M. Kevin Sharada Bandara)",
  publisher: "Kevin Bandara",
  category: "technology",
  alternates: {
    canonical: "https://kevinbandara.is-a.dev",
    languages: {
      "en-US": "https://kevinbandara.is-a.dev",
      "en-LK": "https://kevinbandara.is-a.dev",
    },
  },
  verification: {
    google: "6qwDJInh5NR8LxrsFrhyiZPDxCzJoNy9pP87ZH2aGm0",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Kevin Bandara — Full-Stack Software Engineer, AI Systems Builder & Founder of Corvento Technologies",
    description:
      "Founder of Corvento Technologies, creator of DanumaAI (Web, Play Store & Telegram Bot) and MemoAI (206K+ users), Senior Web Developer at Quizzygram, and operator of a 74K+ subscriber digital media network in Colombo, Sri Lanka.",
    url: "https://kevinbandara.is-a.dev",
    siteName: "Kevin Bandara — Official Portfolio",
    type: "profile",
    locale: "en_US",
    firstName: "Kevin",
    lastName: "Bandara",
    username: "KevinBandara",
    images: [
      {
        url: "https://kevinbandara.is-a.dev/og-landscape.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Kevin Bandara (R.M. Kevin Sharada Bandara) — Full-Stack Software Engineer, AI Systems Builder & Founder of Corvento Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Bandara | Full-Stack Engineer, AI Builder & Founder of Corvento",
    description:
      "Founder of Corvento Technologies, creator of DanumaAI & MemoAI, and Full-Stack Software Engineer in Colombo, Sri Lanka. Direct: +94 71 851 1165.",
    images: ["https://kevinbandara.is-a.dev/og-landscape.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://kevinbandara.is-a.dev/#profilepage",
      url: "https://kevinbandara.is-a.dev",
      name: "Kevin Bandara (R.M. Kevin Sharada Bandara) — Official Portfolio",
      inLanguage: "en",
      mainEntity: {
        "@id": "https://kevinbandara.is-a.dev/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://kevinbandara.is-a.dev/#person",
      name: "Kevin Bandara",
      givenName: "Kevin",
      additionalName: "Sharada",
      familyName: "Bandara",
      alternateName: [
        "R.M. Kevin Sharada Bandara",
        "R.M. Kevin Sharadha Bandara",
        "R.M.K.S. Bandara",
        "Rathnayaka Mudiyanselage Kevin Sharada Bandara",
        "Kevin Sharada Bandara",
        "කෙවින් බණ්ඩාර",
        "KevinBandara",
      ],
      birthDate: "2007-11-06",
      jobTitle:
        "Full-Stack Software Engineer, AI Systems Builder & Technology Entrepreneur",
      description:
        "Kevin Bandara (Rathnayaka Mudiyanselage Kevin Sharada Bandara, born November 6, 2007) is a Sri Lankan Full-Stack Software Engineer, AI Systems Builder, Creative Designer, and Founder of Corvento Technologies based in Colombo, Sri Lanka. He is the creator of DanumaAI (Web, Google Play Store Android App, and Telegram AI Bot) and MemoAI (206,600+ users), Senior Web Developer at Quizzygram, Sales Manager & Full-Stack Architect at Past Papers Wiki, Digital Operations Coordinator at MAOS Office, and operator of a 74,000+ subscriber WhatsApp media network.",
      url: "https://kevinbandara.is-a.dev",
      image: [
        "https://kevinbandara.is-a.dev/og-landscape.jpg",
        "https://kevinbandara.is-a.dev/KevinPortrait.jpg",
      ],
      email: "mailto:kevinbandara0000@gmail.com",
      telephone: "+94718511165",
      nationality: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressRegion: "Western Province",
        addressCountry: "LK",
      },
      homeLocation: {
        "@type": "Place",
        name: "Colombo, Sri Lanka",
      },
      knowsLanguage: [
        { "@type": "Language", name: "Sinhala" },
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Tamil" },
      ],
      knowsAbout: [
        "Full-Stack Software Development",
        "Artificial Intelligence & Retrieval-Augmented Generation (RAG)",
        "Next.js",
        "React.js",
        "React Native (Expo)",
        "TypeScript",
        "Python",
        "Node.js",
        "MongoDB Atlas",
        "PHP & Laravel",
        "Gemini API & OpenAI API",
        "Telegram Bot Development",
        "Discord Bot Architecture",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "Figma UI/UX Design",
        "Short-Form Video & Reel Production",
        "Digital Media & Entrepreneurship",
      ],
      award: [
        "Academic Merit Scholarship Recipient — ATARI City Campus (2025)",
        "8th Place among 500 — AI & Robotics Competition at ICBT Campus (2024)",
        "Winner — FUTURA '23 ICT & Robotics Quiz Competition, Isipathana College (2023)",
        "Top 50 Finisher — Apeiro '21 Quiz (Kingswood Research Unit) & Interschool Series",
        "Stellata 3.0 Article Writing Competition — Rotaract (RY 2025/26)",
        "New Media Workshop — Ada Derana & Isipathana College (09-Aug-2023)",
        "1st Poom Black Belt & 1st RTC Open Taekwondo Championship — Kukkiwon & Sri Lanka Taekwondo Federation (2016–2020)",
        "2nd Runner-Up (Rapid Chess Challenge), 8th Place & Coaching Award in Chess — DGD Chess Club (2018)",
        "3rd Place — Seylan Bank Art Competition (2018) & Little Picasso Art Competition (BOC & Ministry of Education, 2018)",
        "School Prefect, House Captain & College Rugby Player — Isipathana College",
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of Colombo School of Computing (UCSC)",
          sameAs: "https://ucsc.cmb.ac.lk/",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "University of Moratuwa (CODL)",
          sameAs: "https://uom.lk/",
        },
        {
          "@type": "EducationalOrganization",
          name: "Pearson / ESOFT Metro Campus",
        },
        {
          "@type": "EducationalOrganization",
          name: "ATARI City Campus",
        },
        {
          "@type": "EducationalOrganization",
          name: "CodeXpress Academy",
        },
        {
          "@type": "EducationalOrganization",
          name: "PSD Academy",
        },
        {
          "@type": "EducationalOrganization",
          name: "ITD Institute SL",
        },
        {
          "@type": "EducationalOrganization",
          name: "Oxborn College",
        },
        {
          "@type": "EducationalOrganization",
          name: "Institute of Western Music & Speech (IWMS)",
        },
        {
          "@type": "EducationalOrganization",
          name: "Isipathana College, Colombo",
        },
      ],
      worksFor: [
        {
          "@id": "https://kevinbandara.is-a.dev/#corvento",
        },
      ],
      owns: [
        {
          "@id": "https://kevinbandara.is-a.dev/#corvento",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+94-71-851-1165",
        email: "kevinbandara0000@gmail.com",
        contactType: "Hiring, Software Engineering & Business Inquiries",
        areaServed: ["LK", "Worldwide"],
        availableLanguage: ["English", "Sinhala"],
      },
      sameAs: [
        "https://kevinbandara.is-a.dev",
        "https://kevinbandara.vercel.app",
        "https://github.com/KevinBandara",
        "https://www.linkedin.com/in/kevinbandara",
        "https://www.youtube.com/@corventotech",
        "https://danumaai.lk",
        "https://play.google.com/store/apps/details?id=com.Lycoryx.danumaai",
        "https://t.me/DanumaAI_Bot",
        "https://whatsapp.com/channel/0029Vb6OtjqGufIqshtuIM3C",
        "https://whatsapp.com/channel/0029VbAe5k0AInPoph6EFQ34",
        "https://whatsapp.com/channel/0029ValZ7iP4tRrzE8m4s21g",
        "https://whatsapp.com/channel/0029Vai0gVe59PwJw0F3IS2g",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://kevinbandara.is-a.dev/#corvento",
      name: "Corvento Technologies",
      alternateName: ["Lycoryx Technologies", "Asteroid Technologies"],
      url: "https://kevinbandara.is-a.dev/#ventures",
      logo: "https://kevinbandara.is-a.dev/CorventoTechLogo.jpg",
      founder: {
        "@id": "https://kevinbandara.is-a.dev/#person",
      },
      description:
        "Master technology and digital media venture founded by Kevin Bandara (R.M. Kevin Sharada Bandara) in Colombo, Sri Lanka, powering DanumaAI, @corventotech YouTube/Reels, and a 74,000+ subscriber WhatsApp channel network (and formerly MemoAI & BlackWolf MC).",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+94-71-851-1165",
        email: "kevinbandara0000@gmail.com",
        contactType: "customer support",
      },
      sameAs: [
        "https://www.youtube.com/@corventotech",
        "https://danumaai.lk",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://kevinbandara.is-a.dev/#danumaai",
      name: "DanumaAI",
      operatingSystem: "Web, Android (Google Play Store), Telegram Bot",
      applicationCategory: "EducationalApplication",
      url: "https://danumaai.lk",
      installUrl:
        "https://play.google.com/store/apps/details?id=com.Lycoryx.danumaai",
      author: {
        "@id": "https://kevinbandara.is-a.dev/#person",
      },
      publisher: {
        "@id": "https://kevinbandara.is-a.dev/#corvento",
      },
      description:
        "AI-powered Sri Lankan educational ecosystem powered by Corvento Technologies across Web (danumaai.lk), Google Play Store Android App, and Telegram AI Bot (@DanumaAI_Bot).",
    },
    {
      "@type": "FAQPage",
      "@id": "https://kevinbandara.is-a.dev/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Kevin Bandara (R.M. Kevin Sharada Bandara)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kevin Bandara (Rathnayaka Mudiyanselage Kevin Sharada Bandara, born November 6, 2007) is a Full-Stack Software Engineer, AI Systems Builder, Creative Designer, and Tech Entrepreneur based in Colombo, Sri Lanka. He is the Founder of Corvento Technologies (formerly Lycoryx Technologies and Asteroid Technologies), creator of DanumaAI and MemoAI, Senior Web Developer at Quizzygram, Sales Manager & Booking System Architect at Past Papers Wiki, Digital Operations Coordinator at MAOS Office, and a BIT undergraduate at the University of Colombo School of Computing (UCSC).",
          },
        },
        {
          "@type": "Question",
          name: "What is DanumaAI and who built it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DanumaAI is a multi-platform AI educational ecosystem founded and engineered by Kevin Bandara and powered by Corvento Technologies. It operates across a Web App (danumaai.lk), an Android App on the Google Play Store (3,200+ downloads), and a Telegram AI Bot (@DanumaAI_Bot), providing RAG-backed syllabus explanations and past-paper solving for Sri Lankan students.",
          },
        },
        {
          "@type": "Question",
          name: "How can companies or clients contact Kevin Bandara?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact Kevin Bandara directly via phone or WhatsApp at +94 71 851 1165 (071 851 1165), by email at kevinbandara0000@gmail.com, on LinkedIn (linkedin.com/in/kevinbandara), or through his official portfolio at kevinbandara.is-a.dev.",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://kevinbandara.is-a.dev/#website",
      url: "https://kevinbandara.is-a.dev",
      name: "Kevin Bandara — Official Portfolio",
      publisher: {
        "@id": "https://kevinbandara.is-a.dev/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLM & AI Search Structured Profile"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#06070B] text-slate-50 selection:bg-sky-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
