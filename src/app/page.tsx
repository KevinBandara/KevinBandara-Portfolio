"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Layers,
  Cpu,
  Terminal,
  Smartphone,
  Send,
  Globe,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
  ChevronRight,
  Orbit,
  Boxes,
  Menu,
  X,
} from "lucide-react";
import ThreeHeroCanvas, { ThreeSceneMode } from "@/components/ThreeHeroCanvas";
import TiltCard from "@/components/TiltCard";
import ArchitectureModal from "@/components/ArchitectureModal";
import {
  HERO_DATA,
  ABOUT_DATA,
  SKILL_GROUPS,
  FEATURED_PROJECTS,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  FeaturedProject,
} from "@/data/portfolioData";

function Github ({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function Linkedin({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function PortfolioPage() {
  const [sceneMode, setSceneMode] = useState<ThreeSceneMode>("neural");
  const [activePortrait, setActivePortrait] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArchProject, setActiveArchProject] =
    useState<FeaturedProject | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [highlightOnlySkills, setHighlightOnlySkills] = useState(false);

  // Contact quick dispatch state
  const [senderName, setSenderName] = useState("");
  const [senderOrg, setSenderOrg] = useState("");
  const [inquiryType, setInquiryType] = useState(
    "Software Engineering / Full-Stack Role"
  );
  const [messageBody, setMessageBody] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDispatchEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Portfolio Inquiry] ${inquiryType} — ${senderName || "Prospective Collaborator"}${
        senderOrg ? ` (${senderOrg})` : ""
      }`
    );
    const body = encodeURIComponent(
      `Hi Kevin,\n\n${
        messageBody ||
        "I reviewed your engineering portfolio and would love to connect regarding an opportunity."
      }\n\nBest regards,\n${senderName || ""}${senderOrg ? `\n${senderOrg}` : ""}`
    );
    window.location.href = `mailto:${HERO_DATA.email}?subject=${subject}&body=${body}`;
  };

  const categories = [
    "All",
    "AI & RAG Systems",
    "Full-Stack Web",
    "Bots & Distributed",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "github":
        return <Github className="w-3.5 h-3.5" />;
      case "playstore":
        return <Smartphone className="w-3.5 h-3.5" />;
      case "telegram":
        return <Send className="w-3.5 h-3.5" />;
      default:
        return <Globe className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#06070B] text-slate-100 relative selection:bg-sky-400/30">
      {/* Ambient Radial Lighting Backdrops */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute -top-48 left-1/4 w-[680px] h-[680px] rounded-full opacity-20 blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.45) 0%, rgba(129,140,248,0.15) 60%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/5 w-[550px] h-[550px] rounded-full opacity-15 blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(129,140,248,0.4) 0%, rgba(16,185,129,0.1) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Floating Glassmorphic Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel rounded-2xl px-4 sm:px-6 h-16 flex items-center justify-between">
            {/* Brand Identity */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-slate-900 border border-white/15 flex items-center justify-center group-hover:border-sky-400/60 transition-colors">
                <img
                  src="/CorventoTechLogo.jpg"
                  alt="Kevin Bandara — Corvento Technologies"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-sky-300 transition-colors">
                    KEVIN BANDARA
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AVAILABLE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-400 tracking-wider uppercase">
                  AI & Full-Stack Engineer
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center gap-1"
            >
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Credentials", href: "#education" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={HERO_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={HERO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-mono text-xs font-semibold bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-lg shadow-sky-500/20"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Hire / Connect</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-xl bg-white/5 text-slate-200 border border-white/10"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 glass-panel rounded-2xl p-4 space-y-3 animate-fadeIn">
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Skills", href: "#skills" },
                  { label: "Projects", href: "#projects" },
                  { label: "Experience", href: "#experience" },
                  { label: "Credentials", href: "#education" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider bg-white/[0.03] hover:bg-white/10 text-slate-200 border border-white/5"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={HERO_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 text-white border border-white/10"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={HERO_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 text-white border border-white/10"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2.5 rounded-xl font-mono text-xs font-semibold bg-sky-400 text-slate-950"
                >
                  Connect Now
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* =====================================================================
          HERO SECTION (WITH INTERACTIVE 3D WEBGL SCENE + PORTRAIT SHOWCASE)
         ===================================================================== */}
      <section
        id="hero"
        className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden swiss-grid-bg border-b border-white/10"
      >
        {/* Interactive 3D WebGL Neural Core Canvas */}
        <div className="absolute inset-0 z-0 opacity-90">
          <ThreeHeroCanvas mode={sceneMode} interactive={true} />
        </div>

        {/* Radial Vignette Overlay to guarantee crisp text contrast */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(circle at 28% 45%, rgba(6, 7, 11, 0.88) 0%, rgba(6, 7, 11, 0.55) 50%, rgba(6, 7, 11, 0.78) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left 7 Columns: Kinetic Typography & Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status & Location Pill */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{HERO_DATA.status}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{HERO_DATA.location}</span>
                </div>
              </div>

              {/* Main Display Title */}
              <div className="space-y-3">
                <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-sky-400 font-semibold">
                  FOUNDER @ CORVENTO TECHNOLOGIES • UCSC BIT UNDERGRADUATE
                </p>
                <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.03]">
                  Kevin{" "}
                  <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-emerald-300 bg-clip-text text-transparent">
                    Bandara
                  </span>
                </h1>
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200 tracking-tight">
                  {HERO_DATA.title}
                </h2>
              </div>

              {/* Lead Tagline */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {HERO_DATA.tagline} Creator of{" "}
                <a
                  href="https://danumaai.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 underline decoration-sky-400/40 underline-offset-4 hover:text-sky-200 font-medium"
                >
                  DanumaAI
                </a>{" "}
                (Web, Google Play & Telegram) and{" "}
                <span className="text-indigo-300 font-medium">MemoAI</span>{" "}
                (200K+ historical users).
              </p>

              {/* Primary CTA Cluster */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-xl shadow-sky-500/20 cursor-pointer"
                >
                  <Layers className="w-4 h-4" />
                  <span>Explore Systems & Projects</span>
                </a>

                <a
                  href="https://danumaai.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-medium bg-white/[0.06] hover:bg-white/12 text-white border border-white/15 hover:border-sky-400/40 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>Launch DanumaAI</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs sm:text-sm bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 border border-white/10 transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>{HERO_DATA.email}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Interactive 3D WebGL Mode Controller HUD */}
              <div className="pt-4">
                <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 p-2.5 rounded-2xl bg-[#0B0E17]/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 px-2">
                    <Orbit className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: "10s" }} />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-300">
                      3D WebGL Core:
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {(
                      [
                        { id: "neural", label: "01. Neural RAG" },
                        { id: "orbital", label: "02. Microservices" },
                        { id: "matrix", label: "03. Vector Lattice" },
                      ] as { id: ThreeSceneMode; label: string }[]
                    ).map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setSceneMode(m.id)}
                        className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                          sceneMode === m.id
                            ? "bg-sky-400/20 text-sky-300 border border-sky-400/40 font-semibold shadow-sm"
                            : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: 3D Tilt Portrait & Credentials Showcase */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <TiltCard
                maxTilt={7}
                className="w-full max-w-md rounded-3xl glass-panel p-4 sm:p-5 border border-white/15 shadow-2xl"
              >
                {/* Top Telemetry Bar inside Portrait Card */}
                <div className="flex items-center justify-between gap-2 mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-slate-300">
                      ID // KEVIN_BANDARA
                    </span>
                  </div>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                    {HERO_DATA.portraits[activePortrait].badge}
                  </span>
                </div>

                {/* Portrait Image Frame */}
                <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group">
                  <img
                    src={HERO_DATA.portraits[activePortrait].src}
                    alt={HERO_DATA.portraits[activePortrait].title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06070B] via-[#06070B]/20 to-transparent" />

                  {/* Floating Credential Badges over Portrait */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 font-mono text-[10px] text-sky-300">
                      ⚡ Founder @ Corvento Tech
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 font-mono text-[10px] text-emerald-300">
                      🎓 BIT Undergraduate @ UCSC
                    </span>
                  </div>

                  {/* Bottom Caption & Photo Switcher */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-white">
                          {HERO_DATA.portraits[activePortrait].title}
                        </p>
                        <p className="text-[11px] text-slate-300 mt-0.5">
                          {HERO_DATA.portraits[activePortrait].caption}
                        </p>
                      </div>
                    </div>

                    {/* Switcher Buttons */}
                    <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-white/10">
                      {HERO_DATA.portraits.map((p, idx) => (
                        <button
                          key={p.src}
                          type="button"
                          onClick={() => setActivePortrait(idx)}
                          className={`py-1.5 px-2.5 rounded-lg font-mono text-[11px] transition-all cursor-pointer ${
                            activePortrait === idx
                              ? "bg-sky-400 text-slate-950 font-semibold"
                              : "bg-white/5 text-slate-300 hover:bg-white/15"
                          }`}
                        >
                          {idx === 0 ? "01. Merit Trophy" : "02. BMICH Award"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>

        {/* Bottom Swiss Grid Telemetry Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl glass-panel overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {HERO_DATA.telemetry.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 hover:bg-white/[0.02] transition-colors"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-baseline gap-2">
                  <span>{item.value}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                </div>
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-300 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 01: ABOUT & ENGINEERING ARCHITECTURE
         ===================================================================== */}
      <section
        id="about"
        className="relative py-24 sm:py-28 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3">
                <span>01 // ARCHITECTURAL PROFILE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {ABOUT_DATA.headline}
              </h2>
            </div>
            <div className="font-mono text-xs text-slate-400 border-l-2 border-sky-400/50 pl-4 max-w-sm">
              DISCIPLINE • PRECISION • EXECUTION
              <br />
              <span className="text-slate-300">
                Black Belt in Taekwondo — applying the same precision mindset to
                production software systems.
              </span>
            </div>
          </div>

          {/* Main About Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Cols: Narrative + Ecosystem Logos */}
            <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 space-y-6">
              {ABOUT_DATA.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg text-slate-200 leading-relaxed"
                >
                  {p}
                </p>
              ))}

              <div className="p-4 rounded-2xl bg-sky-500/[0.06] border border-sky-400/20 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-sky-300 font-mono uppercase tracking-wider block mb-1">
                  Venture & Brand Lineage:
                </strong>
                {ABOUT_DATA.venturesNote}
              </div>

              {/* Brand & Product Ecosystem Strip using public/ assets */}
              <div className="pt-4 border-t border-white/10">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">
                  Organizations, Ventures & Platforms Engineered
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    {
                      name: "Corvento Tech",
                      role: "Founder & Lead Dev",
                      img: "/CorventoTechLogo.jpg",
                    },
                    {
                      name: "DanumaAI",
                      role: "AI EdTech Ecosystem",
                      img: "/DanumaAI.jpg",
                    },
                    {
                      name: "Quizzygram",
                      role: "Senior Web Developer",
                      img: "/QuzziygramLogo.png",
                    },
                    {
                      name: "Past Papers Wiki",
                      role: "Full-Stack & Sales",
                      img: "/paperwiki logo.jpeg",
                    },
                    {
                      name: "MemoAI",
                      role: "200K+ Users AI Bot",
                      img: "/MemoAI.png",
                    },
                    {
                      name: "Lycoryx Tech",
                      role: "Earlier Venture Identity",
                      img: "/LycoryxTech.jpg",
                    },
                  ].map((brand) => (
                    <div
                      key={brand.name}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-sky-400/30 transition-all"
                    >
                      <img
                        src={brand.img}
                        alt={brand.name}
                        className="w-10 h-10 rounded-lg object-cover flex-shrink-0 bg-slate-900"
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">
                          {brand.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 truncate">
                          {brand.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: 3 Architectural Pillars */}
            <div className="lg:col-span-5 space-y-4">
              {ABOUT_DATA.pillars.map((pillar) => (
                <TiltCard
                  key={pillar.code}
                  maxTilt={5}
                  className="glass-panel rounded-2xl p-6 transition-all"
                >
                  <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-2">
                    {pillar.code}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 02: CORE TECHNICAL SKILLS (6-CELL BENTO MATRIX)
         ===================================================================== */}
      <section
        id="skills"
        className="relative py-24 sm:py-28 border-b border-white/10 swiss-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3">
                <Cpu className="w-4 h-4" />
                <span>02 // TECHNICAL CAPABILITIES MATRIX</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Core Technical Stack
              </h2>
            </div>

            {/* Filter toggle for primary vs all skills */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setHighlightOnlySkills(false)}
                className={`px-4 py-2 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                  !highlightOnlySkills
                    ? "bg-sky-400 text-slate-950 font-semibold"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                All Technologies
              </button>
              <button
                type="button"
                onClick={() => setHighlightOnlySkills(true)}
                className={`px-4 py-2 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                  highlightOnlySkills
                    ? "bg-sky-400 text-slate-950 font-semibold"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                Primary Production Stack
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_GROUPS.map((group) => {
              const displayedSkills = highlightOnlySkills
                ? group.skills.filter((s) => s.highlight)
                : group.skills;

              return (
                <TiltCard
                  key={group.id}
                  maxTilt={5}
                  className="glass-panel rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md border"
                        style={{
                          color: group.accent,
                          borderColor: `${group.accent}40`,
                          backgroundColor: `${group.accent}15`,
                        }}
                      >
                        {group.code}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {displayedSkills.length} MODULES
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-1.5">
                      {group.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-6">
                      {group.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {displayedSkills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all ${
                          skill.highlight
                            ? "bg-white/[0.07] border-white/20 text-white font-medium"
                            : "bg-white/[0.02] border-white/10 text-slate-300"
                        }`}
                      >
                        {skill.highlight && (
                          <span
                            className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                            style={{ backgroundColor: group.accent }}
                          />
                        )}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 03: FEATURED PROJECTS & INTERACTIVE ARCHITECTURE
         ===================================================================== */}
      <section
        id="projects"
        className="relative py-24 sm:py-28 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + Category Filter */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3">
                <Boxes className="w-4 h-4" />
                <span>03 // PRODUCTION SYSTEMS & CASE STUDIES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Featured Engineering Work
              </h2>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-sky-400 text-slate-950 font-semibold shadow-lg shadow-sky-500/20"
                      : "bg-white/[0.04] text-slate-300 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards */}
          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <TiltCard
                key={project.id}
                maxTilt={project.featured ? 3 : 4}
                className={`glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border transition-all ${
                  project.featured
                    ? "border-sky-400/35 bg-gradient-to-br from-[#0D121F]/95 via-[#0B0E17]/95 to-[#111324]/95"
                    : "border-white/10"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left 7 Columns: Case Study Details */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-sky-400/15 text-sky-300 border border-sky-400/30">
                        CASE STUDY // {project.index}
                      </span>
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {project.period}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border border-white/15 bg-slate-900 flex-shrink-0"
                      />
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm font-mono text-sky-300 mt-1">
                          {project.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      {project.overview}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2.5 pt-1">
                      <div className="font-mono text-xs uppercase tracking-widest text-slate-400">
                        Key Architectural Highlights:
                      </div>
                      <ul className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: project.accentColor }}
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links & Architecture Modal Trigger */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-md shadow-sky-500/15"
                        >
                          {getLinkIcon(link.type)}
                          <span>{link.label}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ))}

                      <button
                        type="button"
                        onClick={() => setActiveArchProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-medium bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-200 border border-indigo-400/30 transition-all cursor-pointer"
                      >
                        <Terminal className="w-3.5 h-3.5 text-indigo-300" />
                        <span>Inspect System Architecture</span>
                      </button>
                    </div>
                  </div>

                  {/* Right 5 Columns: Telemetry Metrics & Interactive System Topology Preview */}
                  <div className="lg:col-span-5 space-y-4">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-black/40 border border-white/10"
                        >
                          <div
                            className="font-display text-xl sm:text-2xl font-bold"
                            style={{ color: project.accentColor }}
                          >
                            {m.value}
                          </div>
                          <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mt-1">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Architecture Blueprint Preview Card */}
                    <div className="rounded-2xl bg-[#07090F] border border-white/10 p-5 space-y-3">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="font-mono text-xs uppercase tracking-wider text-slate-300">
                            System Topology Preview
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActiveArchProject(project)}
                          className="font-mono text-[11px] text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
                        >
                          <span>Expand</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="space-y-2.5">
                        {project.architecture.map((node, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-colors"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-mono text-[10px] uppercase tracking-wider text-sky-400">
                                {node.layer}
                              </span>
                              <span className="font-mono text-[10px] text-slate-400 truncate max-w-[180px]">
                                {node.tech}
                              </span>
                            </div>
                            <div className="text-xs font-semibold text-white mt-0.5">
                              {node.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 04: PROFESSIONAL EXPERIENCE & VENTURES TIMELINE
         ===================================================================== */}
      <section
        id="experience"
        className="relative py-24 sm:py-28 border-b border-white/10 swiss-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3">
              <Briefcase className="w-4 h-4" />
              <span>04 // CAREER & VENTURE TRAJECTORY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Professional Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <TiltCard
                key={exp.id}
                maxTilt={4}
                className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-14 h-14 rounded-2xl object-cover bg-slate-900 border border-white/15 flex-shrink-0"
                      />
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-sky-400">
                          0{idx + 1} // {exp.type}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium text-slate-300">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((ach, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Earlier Technology Ventures Banner */}
          <div className="mt-8 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="font-mono text-xs uppercase tracking-widest text-indigo-400">
                  FOUNDATIONAL SYSTEMS JOURNEY (2020 – 2025)
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  Black Wolf Server Infrastructure • Asteroid Technologies • Lycoryx Technologies
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Began engineering online systems around 2020 by configuring and operating the{" "}
                  <strong className="text-white">Black Wolf Minecraft Server</strong> (managing hosting, Java plugin pipelines, and active multiplayer communities), before founding{" "}
                  <strong className="text-white">Asteroid Technologies</strong> and{" "}
                  <strong className="text-white">Lycoryx Technologies</strong> (home to MemoAI & early DanumaAI), culminating in{" "}
                  <strong className="text-sky-300">Corvento Technologies</strong>.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <img
                  src="/LycoryxTech.jpg"
                  alt="Lycoryx Technologies"
                  className="w-14 h-14 rounded-2xl object-cover border border-white/15"
                />
                <img
                  src="/CorventoTechLogo.jpg"
                  alt="Corvento Technologies"
                  className="w-14 h-14 rounded-2xl object-cover border border-sky-400/40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 05: EDUCATION, CREDENTIALS & CEREMONY GALLERY
         ===================================================================== */}
      <section
        id="education"
        className="relative py-24 sm:py-28 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>05 // ACADEMIC CREDENTIALS & HONORS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Education & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Education Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {EDUCATION_DATA.map((edu) => (
                <TiltCard
                  key={edu.id}
                  maxTilt={5}
                  className="glass-panel rounded-3xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-sky-400/15 text-sky-300 border border-sky-400/30">
                        {edu.badge}
                      </span>
                      <span className="font-mono text-[11px] text-emerald-300">
                        {edu.status}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-mono text-slate-300 mb-4">
                      {edu.institution}
                    </p>

                    <ul className="space-y-2">
                      {edu.details.map((d, i) => (
                        <li
                          key={i}
                          className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              ))}
            </div>

            {/* Right 5 Columns: Dual Photo Recognition Showcase */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel rounded-3xl p-3.5 border border-white/15">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src="/MyPic1.png"
                    alt="Kevin Bandara holding Merit Trophy"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300 block">
                      Award Laureate
                    </span>
                    <p className="text-xs font-bold text-white">
                      Academic & Leadership Trophy
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-3.5 border border-white/15">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src="/MyPic.png"
                    alt="Kevin Bandara at BMICH Awarding Ceremony 2026"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-purple-300 block">
                      BMICH Colombo • 2026
                    </span>
                    <p className="text-xs font-bold text-white">
                      Diploma Awarding Ceremony
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 06: CONTACT & DIRECT DISPATCH TERMINAL
         ===================================================================== */}
      <section id="contact" className="relative py-24 sm:py-28 swiss-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 6 Cols: Direct Contact Channels */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
                <Terminal className="w-4 h-4" />
                <span>06 // INITIATE CONNECTION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Let&apos;s Engineer Your Next Production Platform.
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                Available for{" "}
                <strong className="text-white">
                  Software Engineer, Full-Stack Developer, Next.js/React Engineer, and AI Application Developer
                </strong>{" "}
                roles, as well as high-impact product architecture collaborations.
              </p>

              {/* Direct Channel Cards */}
              <div className="space-y-3 pt-2">
                <div className="glass-panel rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-sky-400/15 border border-sky-400/30 flex items-center justify-center text-sky-300 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                        Direct Email Dispatch
                      </div>
                      <a
                        href={`mailto:${HERO_DATA.email}`}
                        className="text-sm sm:text-base font-mono font-semibold text-white hover:text-sky-300 truncate block"
                      >
                        {HERO_DATA.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3.5 py-2 rounded-xl font-mono text-xs bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors cursor-pointer flex items-center gap-1.5 flex-shrink-0"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={HERO_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel rounded-2xl p-4 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-mono text-[11px] text-slate-400">
                          LinkedIn
                        </div>
                        <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                          /in/kevinbandara
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  </a>

                  <a
                    href={HERO_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel rounded-2xl p-4 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-mono text-[11px] text-slate-400">
                          GitHub
                        </div>
                        <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                          @KevinBandara
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  </a>
                </div>
              </div>

              {/* Live Production Demonstrations Quick Links */}
              <div className="pt-4">
                <div className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-3">
                  Verified Production Demonstrations:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { label: "danumaai.lk", url: "https://danumaai.lk/" },
                    {
                      label: "DanumaAI Play Store",
                      url: "https://play.google.com/store/apps/details?id=com.Lycoryx.danumaai",
                    },
                    { label: "pastpapers.wiki", url: "https://pastpapers.wiki/" },
                    {
                      label: "kev-thash-sweet-treats.vercel.app",
                      url: "https://kev-thash-sweet-treats.vercel.app/",
                    },
                  ].map((demo) => (
                    <a
                      key={demo.url}
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-sky-400/15 border border-white/10 hover:border-sky-400/40 font-mono text-xs text-slate-300 hover:text-sky-300 transition-all"
                    >
                      <span>{demo.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 6 Cols: Quick Message Dispatch Terminal */}
            <div className="lg:col-span-6">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="font-mono text-xs text-slate-400 ml-2">
                      dispatch://kevinbandara0000@gmail.com
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400">
                    READY
                  </span>
                </div>

                <form onSubmit={handleDispatchEmail} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="sender-name"
                        className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-sky-400 focus:outline-none text-sm text-white placeholder-slate-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sender-org"
                        className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Company / Team
                      </label>
                      <input
                        id="sender-org"
                        type="text"
                        value={senderOrg}
                        onChange={(e) => setSenderOrg(e.target.value)}
                        placeholder="e.g. Acme Engineering"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-sky-400 focus:outline-none text-sm text-white placeholder-slate-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-type"
                      className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Opportunity / Inquiry Type
                    </label>
                    <select
                      id="inquiry-type"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#090B11] border border-white/10 focus:border-sky-400 focus:outline-none text-sm text-white"
                    >
                      <option value="Software Engineering / Full-Stack Role">
                        Software Engineering / Full-Stack Role
                      </option>
                      <option value="AI Systems & RAG Engineering">
                        AI Systems & RAG Engineering
                      </option>
                      <option value="Next.js / React / Backend Contract">
                        Next.js / React / Backend Contract
                      </option>
                      <option value="Product Partnership / General Inquiry">
                        Product Partnership / General Inquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message-body"
                      className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Message Brief
                    </label>
                    <textarea
                      id="message-body"
                      rows={4}
                      value={messageBody}
                      onChange={(e) => setMessageBody(e.target.value)}
                      placeholder="Tell me about the role, team, or system you're building..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-sky-400 focus:outline-none text-sm text-white placeholder-slate-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch Email Client with Brief</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#040508] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/CorventoTechLogo.jpg"
              alt="Corvento Technologies"
              className="w-7 h-7 rounded-lg object-cover border border-white/15"
            />
            <span className="font-mono text-xs text-slate-400">
              © {new Date().getFullYear()} Kevin Bandara • Engineered with Next.js,
              Three.js WebGL & Tailwind CSS
            </span>
          </div>

          <div className="flex items-center gap-5 font-mono text-xs text-slate-400">
            <a
              href={HERO_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href={HERO_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://danumaai.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              DanumaAI
            </a>
            <a
              href={`mailto:${HERO_DATA.email}`}
              className="hover:text-sky-300 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive System Architecture Modal */}
      <ArchitectureModal
        project={activeArchProject}
        onClose={() => setActiveArchProject(null)}
      />
    </div>
  );
}
