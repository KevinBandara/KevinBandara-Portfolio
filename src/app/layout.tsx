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
  title: "Kevin Bandara | Full-Stack Software Developer & AI Systems Builder",
  description:
    "Official portfolio of Kevin Bandara — Full-Stack Software Developer, AI Systems Builder, and Founder of Corvento Technologies & DanumaAI in Colombo, Sri Lanka. Specializing in Next.js, TypeScript, RAG, Gemini API, Node.js, and MongoDB.",
  keywords: [
    "Kevin Bandara",
    "Full-Stack Software Developer Sri Lanka",
    "AI Systems Builder",
    "DanumaAI",
    "Corvento Technologies",
    "MemoAI",
    "Next.js Developer Colombo",
    "RAG Engineer",
    "UCSC BIT",
  ],
  authors: [{ name: "Kevin Bandara", url: "https://github.com/KevinBandara" }],
  creator: "Kevin Bandara",
  openGraph: {
    title: "Kevin Bandara — Full-Stack Software Developer & AI Systems Builder",
    description:
      "Building production web platforms, AI-driven educational technology (DanumaAI), and scalable backend infrastructure.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/MyPic1.png",
        width: 1200,
        height: 630,
        alt: "Kevin Bandara — Software Developer & AI Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Bandara | Full-Stack Developer & AI Systems Builder",
    description:
      "Building production web platforms, AI-driven educational technology, and scalable backend infrastructure.",
    images: ["/MyPic1.png"],
  },
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
      <body className="antialiased bg-[#06070B] text-slate-50 selection:bg-sky-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
