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
  ArrowRight,
  Orbit,
  Boxes,
  Menu,
  X,
  Users,
  Award,
} from "lucide-react";
import ThreeHeroCanvas, { ThreeSceneMode } from "@/components/ThreeHeroCanvas";
import TiltCard from "@/components/TiltCard";
import ArchitectureModal from "@/components/ArchitectureModal";
import {
  HERO_DATA,
  CORVENTO_ECOSYSTEM,
  ABOUT_DATA,
  SKILL_GROUPS,
  FEATURED_PROJECTS,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  FeaturedProject,
} from "@/data/portfolioData";

function Github({ className = "w-4 h-4" }: { className?: string }) {
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
      `[Portfolio Inquiry] ${inquiryType} — ${
        senderName || "Prospective Collaborator"
      }${senderOrg ? ` (${senderOrg})` : ""}`
    );
    const body = encodeURIComponent(
      `Hi Kevin,\n\n${
        messageBody ||
        "I reviewed your engineering portfolio and would love to connect regarding an opportunity."
      }\n\nBest regards,\n${senderName || ""}${
        senderOrg ? `\n${senderOrg}` : ""
      }`
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

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Ventures & Media", href: "#ventures" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Credentials", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#06070B] text-slate-100 relative selection:bg-sky-400/30">
      {/* Ambient Radial Lighting Backdrops */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute -top-48 left-1/4 w-[700px] h-[700px] rounded-full opacity-15 blur-[160px]"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.45) 0%, rgba(129,140,248,0.15) 60%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/5 w-[600px] h-[600px] rounded-full opacity-10 blur-[160px]"
          style={{
            background:
              "radial-gradient(circle, rgba(129,140,248,0.4) 0%, rgba(16,185,129,0.1) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* =====================================================================
          FLOATING PERSONAL NAVBAR (PERSONAL KB MONOGRAM — NO COMPANY LOGO)
         ===================================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel rounded-2xl px-4 sm:px-6 h-16 flex items-center justify-between">
            {/* Personal Monogram Identity */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400/20 via-indigo-500/20 to-emerald-400/20 border border-sky-400/40 flex items-center justify-center shadow-inner group-hover:border-sky-300 transition-all">
                <span className="font-display font-bold text-sm tracking-tighter bg-gradient-to-r from-sky-300 to-indigo-200 bg-clip-text text-transparent">
                  KB
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-sky-300 transition-colors">
                    Kevin Bandara
                  </span>
                  <span className="hidden xl:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                  Full-Stack • AI • Entrepreneur
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-1"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
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
                <span>Let&apos;s Talk</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 rounded-xl bg-white/5 text-slate-200 border border-white/10"
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
            <div className="lg:hidden mt-2 glass-panel rounded-2xl p-4 space-y-3 animate-fadeIn">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-xs font-medium bg-white/[0.03] hover:bg-white/10 text-slate-200 border border-white/5"
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
          HERO SECTION — SPACIOUS, UNCROWDED, CLEAR PORTRAIT + 3D WEBGL
         ===================================================================== */}
      <section
        id="hero"
        className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden swiss-grid-bg border-b border-white/10"
      >
        {/* Interactive 3D WebGL Neural Core Canvas */}
        <div className="absolute inset-0 z-0 opacity-85">
          <ThreeHeroCanvas mode={sceneMode} interactive={true} />
        </div>

        {/* Soft Radial Vignette for Typography Contrast */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(circle at 25% 45%, rgba(6, 7, 11, 0.9) 0%, rgba(6, 7, 11, 0.6) 55%, rgba(6, 7, 11, 0.8) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left 7 Columns: Clean Executive Introduction */}
            <div className="lg:col-span-7 space-y-7">
              {/* Status & Location Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{HERO_DATA.status}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{HERO_DATA.location}</span>
                </div>
              </div>

              {/* Main Display Title */}
              <div className="space-y-4">
                <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.04]">
                  Kevin{" "}
                  <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-emerald-300 bg-clip-text text-transparent">
                    Bandara
                  </span>
                </h1>
                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200 tracking-tight leading-snug">
                  Full-Stack Software Developer, AI Systems Builder &amp;{" "}
                  <span className="text-sky-300">Tech Entrepreneur</span>
                </p>
              </div>

              {/* Lead Tagline */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {HERO_DATA.tagline} Founder of{" "}
                <a
                  href="#ventures"
                  className="text-white font-semibold underline decoration-sky-400/50 underline-offset-4 hover:text-sky-300 transition-colors"
                >
                  Corvento Technologies
                </a>
                , creator of{" "}
                <a
                  href="https://danumaai.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 font-semibold hover:text-sky-200"
                >
                  DanumaAI
                </a>{" "}
                &amp; <span className="text-indigo-300 font-semibold">MemoAI</span>.
              </p>

              {/* Primary CTA Cluster */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-xl shadow-sky-500/20"
                >
                  <Layers className="w-4 h-4" />
                  <span>View Featured Work</span>
                </a>

                <a
                  href="#ventures"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-medium bg-white/[0.06] hover:bg-white/12 text-white border border-white/15 hover:border-sky-400/40 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>Corvento &amp; 74K+ Media Network</span>
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

              {/* Interactive 3D WebGL Mode Controller */}
              <div className="pt-2">
                <div className="inline-flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-[#0B0E17]/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 px-2.5 py-1">
                    <Orbit
                      className="w-4 h-4 text-sky-400 animate-spin"
                      style={{ animationDuration: "10s" }}
                    />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      3D Scene:
                    </span>
                  </div>
                  {(
                    [
                      { id: "neural", label: "Neural RAG Core" },
                      { id: "orbital", label: "Orbital Mesh" },
                      { id: "matrix", label: "Vector Lattice" },
                    ] as { id: ThreeSceneMode; label: string }[]
                  ).map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setSceneMode(m.id)}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                        sceneMode === m.id
                          ? "bg-sky-400/20 text-sky-300 border border-sky-400/40 font-semibold"
                          : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Clean, Unobstructed Portrait Frame (Face Clearly Visible!) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <TiltCard
                maxTilt={6}
                className="w-full max-w-[400px] rounded-3xl glass-panel p-4 border border-white/15 shadow-2xl"
              >
                {/* Clean Unobstructed Portrait Photo — No Boxes Covering the Face! */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
                  <img
                    src={HERO_DATA.portraits[activePortrait].src}
                    alt={HERO_DATA.portraits[activePortrait].title}
                    style={{
                      objectPosition:
                        HERO_DATA.portraits[activePortrait].objectPosition,
                    }}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  {/* Subtle bottom gradient only at the very bottom 15% */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#06070B]/80 to-transparent" />
                </div>

                {/* Clean Caption & Photo Toggle BELOW the Image */}
                <div className="pt-4 px-1 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-display font-bold text-sm text-white truncate">
                      {HERO_DATA.portraits[activePortrait].title}
                    </div>
                    <div className="font-mono text-[11px] text-slate-400 truncate">
                      Founder @ Corvento • UCSC BIT
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {HERO_DATA.portraits.map((p, idx) => (
                      <button
                        key={p.src}
                        type="button"
                        onClick={() => setActivePortrait(idx)}
                        className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                          activePortrait === idx
                            ? "bg-sky-400 text-slate-950 font-semibold"
                            : "bg-white/5 text-slate-300 hover:bg-white/15"
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>

        {/* Bottom Impact Metrics Strip */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl glass-panel overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {HERO_DATA.telemetry.map((item, idx) => (
              <div
                key={idx}
                className="p-6 hover:bg-white/[0.02] transition-colors"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-baseline gap-2">
                  <span>{item.value}</span>
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                </div>
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-300 mt-1.5">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 01: EXECUTIVE PROFILE & ABOUT ME
         ===================================================================== */}
      <section
        id="about"
        className="relative py-28 sm:py-36 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3">
              <span>01 // ABOUT ME</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              {ABOUT_DATA.headline}
            </h2>
          </div>

          {/* Spacious Narrative + 3 Core Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              {ABOUT_DATA.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg text-slate-300 leading-relaxed"
                >
                  {p}
                </p>
              ))}

              <div className="pt-4 flex flex-wrap gap-4">
                <div className="px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-sky-400 block">
                    Academic Path
                  </span>
                  <span className="text-sm font-semibold text-white">
                    BIT Undergraduate @ UCSC
                  </span>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-400 block">
                    Parent Venture
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Founder @ Corvento Technologies
                  </span>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 block">
                    Discipline Beyond Code
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Black Belt in Taekwondo
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {ABOUT_DATA.pillars.map((pillar) => (
                <div
                  key={pillar.code}
                  className="glass-panel rounded-2xl p-6 transition-all"
                >
                  <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-1.5">
                    {pillar.code}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 02: CORVENTO TECHNOLOGIES & 74K+ WHATSAPP MEDIA ECOSYSTEM
         ===================================================================== */}
      <section
        id="ventures"
        className="relative py-28 sm:py-36 border-b border-white/10 swiss-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3">
                <Sparkles className="w-4 h-4" />
                <span>02 // ENTREPRENEURSHIP &amp; DIGITAL ECOSYSTEM</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Corvento Technologies
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
                The single master venture founded and operated by Kevin Bandara to build and run{" "}
                <strong className="text-white">DanumaAI</strong>,{" "}
                <strong className="text-white">MemoAI</strong>, and an active{" "}
                <strong className="text-emerald-300">
                  74,000+ subscriber WhatsApp digital media &amp; education network
                </strong>
                .
              </p>
            </div>

            {/* Brand Identity Evolution Logos */}
            <div className="flex items-center gap-3 self-start lg:self-auto glass-panel p-3 rounded-2xl">
              <img
                src="/LycoryxTech.jpg"
                alt="Lycoryx Technologies"
                className="w-12 h-12 rounded-xl object-cover border border-white/10 opacity-80"
                title="Formerly Lycoryx Technologies"
              />
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <img
                src="/CorventoTechLogo.jpg"
                alt="Corvento Technologies"
                className="w-14 h-14 rounded-xl object-cover border-2 border-sky-400/50 shadow-lg shadow-sky-500/20"
                title="Corvento Technologies (Present Master Entity)"
              />
            </div>
          </div>

          {/* 3-Step Brand Evolution Lineage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {CORVENTO_ECOSYSTEM.lineage.map((step, idx) => (
              <div
                key={step.name}
                className={`rounded-2xl p-6 border transition-all ${
                  idx === 2
                    ? "glass-panel border-sky-400/40 bg-sky-500/[0.05]"
                    : "bg-white/[0.02] border-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
                    {step.era}
                  </span>
                  {idx === 2 && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      ACTIVE MASTER ENTITY
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {step.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* WhatsApp Channels Network under Corvento (74K+ Subscribers) */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Owned WhatsApp Media &amp; Education Channels
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Operated daily under Corvento Technologies — curating educational content, university guidance, and digital media for 74,000+ subscribers.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold self-start sm:self-auto">
                <Users className="w-4 h-4" />
                <span>74,000+ Total Followers</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORVENTO_ECOSYSTEM.channels.map((channel) => (
                <TiltCard
                  key={channel.id}
                  maxTilt={5}
                  className="glass-panel rounded-3xl p-6 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <img
                        src={channel.logo}
                        alt={channel.name}
                        className="w-16 h-16 rounded-2xl object-cover border border-white/15 shadow-md group-hover:scale-105 transition-transform"
                      />
                      <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        {channel.followers}
                      </span>
                    </div>

                    <div className="font-mono text-[11px] uppercase tracking-wider text-sky-400 mb-1">
                      {channel.category}
                    </div>
                    <h4 className="font-display text-xl font-bold text-white">
                      {channel.name}
                    </h4>
                    {channel.sinhalaName && (
                      <p className="text-xs text-slate-400 mt-0.5">
                        {channel.sinhalaName}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3 mb-6">
                      {channel.description}
                    </p>
                  </div>

                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-semibold bg-white/[0.06] hover:bg-emerald-500 hover:text-slate-950 text-white border border-white/10 hover:border-emerald-400 transition-all flex items-center justify-center gap-2"
                  >
                    <span>View WhatsApp Channel</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 03: FEATURED SOFTWARE PROJECTS (CLEAN & BREATHABLE)
         ===================================================================== */}
      <section
        id="projects"
        className="relative py-28 sm:py-36 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + Category Filter */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3">
                <Boxes className="w-4 h-4" />
                <span>03 // FEATURED SOFTWARE PLATFORMS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Engineered Products
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

          {/* Clean 2-Column Project Grid (Flagship spans 2 cols, others sit cleanly in 2 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <TiltCard
                key={project.id}
                maxTilt={4}
                className={`glass-panel rounded-3xl p-7 sm:p-9 flex flex-col justify-between border transition-all ${
                  project.featured
                    ? "lg:col-span-2 border-sky-400/35 bg-gradient-to-br from-[#0D121F]/90 via-[#0B0E17]/95 to-[#111324]/90"
                    : "border-white/10"
                }`}
              >
                <div>
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="w-14 h-14 rounded-2xl object-cover border border-white/15 bg-slate-900 flex-shrink-0"
                      />
                      <div>
                        <span className="font-mono text-xs text-sky-400">
                          {project.role}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {project.period}
                    </span>
                  </div>

                  {/* Metrics Row */}
                  <div
                    className={`grid gap-3 mb-6 ${
                      project.featured
                        ? "grid-cols-2 sm:grid-cols-4"
                        : "grid-cols-3"
                    }`}
                  >
                    {project.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-black/40 border border-white/10"
                      >
                        <div
                          className="font-display text-lg sm:text-xl font-bold"
                          style={{ color: project.accentColor }}
                        >
                          {m.value}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Overview */}
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-5">
                    {project.overview}
                  </p>

                  {/* Concise Highlights */}
                  <ul className="space-y-2 mb-6">
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

                <div>
                  {/* Stack Pills */}
                  <div className="flex flex-wrap gap-2 pb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-white/10">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all"
                      >
                        {getLinkIcon(link.type)}
                        <span>{link.label}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ))}

                    <button
                      type="button"
                      onClick={() => setActiveArchProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-medium bg-white/[0.05] hover:bg-white/10 text-slate-200 border border-white/15 transition-all cursor-pointer"
                    >
                      <Terminal className="w-3.5 h-3.5 text-sky-400" />
                      <span>System Architecture</span>
                    </button>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 04: CAREER & LEADERSHIP TIMELINE (CLEAN VERTICAL FLOW)
         ===================================================================== */}
      <section
        id="experience"
        className="relative py-28 sm:py-36 border-b border-white/10 swiss-grid-bg"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3">
              <Briefcase className="w-4 h-4" />
              <span>04 // STEP-BY-STEP CAREER JOURNEY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Professional Experience
            </h2>
          </div>

          {/* Vertical Timeline Flow */}
          <div className="relative pl-6 sm:pl-10 border-l-2 border-white/15 space-y-12">
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-[#06070B] border-2 border-sky-400 group-hover:scale-125 group-hover:bg-sky-400 transition-all" />

                <div className="glass-panel rounded-3xl p-6 sm:p-8 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-13 h-13 rounded-2xl object-cover bg-slate-900 border border-white/15 flex-shrink-0"
                      />
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium text-sky-300">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 self-start sm:self-auto whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-5">
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

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 05: CORE TECHNICAL SKILLS
         ===================================================================== */}
      <section
        id="skills"
        className="relative py-28 sm:py-36 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3">
              <Cpu className="w-4 h-4" />
              <span>05 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Core Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.id}
                className="glass-panel rounded-3xl p-7 flex flex-col justify-between"
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
                      DOMAIN // {group.code}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {group.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    {group.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/15 text-slate-100"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 06: EDUCATION, DIPLOMAS & CERTIFICATIONS
         ===================================================================== */}
      <section
        id="education"
        className="relative py-28 sm:py-36 border-b border-white/10 swiss-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>06 // ACADEMIC QUALIFICATIONS &amp; DIPLOMAS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Education &amp; Certifications
            </h2>
            <p className="text-base text-slate-300 mt-3 max-w-2xl">
              Combining university computing studies with international Pearson diplomas and specialized industry certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EDUCATION_DATA.map((edu) => (
              <TiltCard
                key={edu.id}
                maxTilt={4}
                className="glass-panel rounded-3xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-sky-400/15 text-sky-300 border border-sky-400/30">
                      {edu.badge}
                    </span>
                    <span className="font-mono text-xs text-emerald-300 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-1.5">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-mono text-sky-200/90 mb-4">
                    {edu.institution}
                  </p>

                  <ul className="space-y-2">
                    {edu.details.map((d, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 07: CONTACT & DIRECT DISPATCH
         ===================================================================== */}
      <section id="contact" className="relative py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 6 Cols: Direct Contact Channels */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
                <Terminal className="w-4 h-4" />
                <span>07 // GET IN TOUCH</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Let&apos;s Build Something Extraordinary.
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                Open to{" "}
                <strong className="text-white">
                  Software Engineering, Full-Stack Developer, Next.js/React, and AI Application Developer
                </strong>{" "}
                opportunities, freelance engineering, and strategic collaborations.
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
                        Email Address
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
            </div>

            {/* Right 6 Cols: Quick Message Dispatch Terminal */}
            <div className="lg:col-span-6">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15">
                <h3 className="font-display text-xl font-bold text-white mb-6">
                  Send a Direct Message
                </h3>

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
                        AI Systems &amp; RAG Engineering
                      </option>
                      <option value="Next.js / React / Backend Project">
                        Next.js / React / Backend Project
                      </option>
                      <option value="Corvento Media & Partnership">
                        Corvento Media &amp; Partnership
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message-body"
                      className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message-body"
                      rows={4}
                      value={messageBody}
                      onChange={(e) => setMessageBody(e.target.value)}
                      placeholder="Tell me about the role, team, or project..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-sky-400 focus:outline-none text-sm text-white placeholder-slate-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
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
            <div className="w-7 h-7 rounded-lg bg-sky-400/15 border border-sky-400/40 flex items-center justify-center font-display font-bold text-xs text-sky-300">
              KB
            </div>
            <span className="font-mono text-xs text-slate-400">
              © {new Date().getFullYear()} Kevin Bandara •{" "}
              <a
                href="https://kevinbandara.is-a.dev"
                className="text-slate-300 hover:text-sky-300"
              >
                kevinbandara.is-a.dev
              </a>
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
