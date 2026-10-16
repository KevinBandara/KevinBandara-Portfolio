import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
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
      "Kevin Bandara — Full-Stack Software Developer, AI Systems Builder & Tech Entrepreneur",
    template: "%s | Kevin Bandara",
  },
  description:
    "Official portfolio of Kevin Bandara — Full-Stack Software Developer, AI Systems Builder, and Founder of Corvento Technologies in Colombo, Sri Lanka. Creator of DanumaAI, MemoAI (200K+ users), and operator of a 74K+ subscriber digital media network.",
  keywords: [
    "Kevin Bandara",
    "Kevin Bandara Sri Lanka",
    "Kevin Bandara Portfolio",
    "kevinbandara.is-a.dev",
    "kevinbandara.vercel.app",
    "Corvento Technologies",
    "DanumaAI Founder",
    "MemoAI Creator",
    "Lycoryx Technologies",
    "Asteroid Technologies",
    "Full-Stack Software Developer Sri Lanka",
    "AI Systems Builder",
    "Next.js Developer Colombo",
    "UCSC BIT",
    "ESOFT Pearson Diploma Software Engineering",
  ],
  authors: [
    { name: "Kevin Bandara", url: "https://kevinbandara.is-a.dev" },
    { name: "Kevin Bandara", url: "https://github.com/KevinBandara" },
  ],
  creator: "Kevin Bandara",
  publisher: "Kevin Bandara",
  alternates: {
    canonical: "https://kevinbandara.is-a.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Kevin Bandara — Full-Stack Software Developer, AI Systems Builder & Tech Entrepreneur",
    description:
      "Building production web platforms, AI-driven educational technology (DanumaAI), scalable backend infrastructure, and digital media ecosystems under Corvento Technologies.",
    url: "https://kevinbandara.is-a.dev",
    siteName: "Kevin Bandara Portfolio",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/KevinPortrait.jpg",
        width: 1344,
        height: 1680,
        alt: "Kevin Bandara — Full-Stack Software Developer & Founder of Corvento Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Bandara | Full-Stack Developer & Tech Entrepreneur",
    description:
      "Founder of Corvento Technologies, creator of DanumaAI & MemoAI, and Full-Stack Software Engineer in Colombo, Sri Lanka.",
    images: ["/KevinPortrait.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://kevinbandara.is-a.dev/#person",
      name: "Kevin Bandara",
      jobTitle:
        "Full-Stack Software Developer, AI Systems Builder & Technology Entrepreneur",
      description:
        "Full-Stack Software Developer, AI Systems Builder, and Founder of Corvento Technologies from Colombo, Sri Lanka. Creator of DanumaAI and MemoAI.",
      url: "https://kevinbandara.is-a.dev",
      image: "https://kevinbandara.is-a.dev/KevinPortrait.jpg",
      email: "mailto:kevinbandara0000@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressCountry: "LK",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of Colombo School of Computing (UCSC)",
        },
        {
          "@type": "EducationalOrganization",
          name: "ESOFT Metro Campus",
        },
        {
          "@type": "EducationalOrganization",
          name: "Isipathana College, Colombo",
        },
      ],
      worksFor: {
        "@type": "Organization",
        "@id": "https://kevinbandara.is-a.dev/#corvento",
        name: "Corvento Technologies",
        alternateName: ["Lycoryx Technologies", "Asteroid Technologies"],
        url: "https://danumaai.lk",
      },
      sameAs: [
        "https://kevinbandara.is-a.dev",
        "https://kevinbandara.vercel.app",
        "https://github.com/KevinBandara",
        "https://www.linkedin.com/in/kevinbandara",
        "https://danumaai.lk",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
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
