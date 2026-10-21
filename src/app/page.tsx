"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Cpu,
  Terminal,
  Smartphone,
  Send,
  Globe,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
  ArrowRight,
  Boxes,
  Menu,
  X,
  Users,
  Palette,
  Video,
  Phone,
  MessageCircle,
  Trophy,
  ShieldCheck,
  FileDown,
  UserCheck,
  History,
  BookOpen,
  Calendar,
} from "lucide-react";
import dynamic from "next/dynamic";
import TiltCard from "@/components/TiltCard";
import ArchitectureModal from "@/components/ArchitectureModal";
import HireMeModal from "@/components/HireMeModal";
import { FeaturedProject } from "@/data/portfolioData";
import { getLocalizedPortfolio, Language } from "@/data/sinhalaTranslations";

const ThreeHeroCanvas = dynamic(() => import("@/components/ThreeHeroCanvas"), {
  ssr: false,
});

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
  const [lang, setLang] = useState<Language>("en");
  const [activePortrait, setActivePortrait] = useState<number>(0);
  const [photoSwitched, setPhotoSwitched] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [credentialTab, setCredentialTab] = useState<
    "all" | "diplomas" | "certificates" | "awards" | "registry"
  >("all");
  const [registryFilter, setRegistryFilter] = useState<string>("All");
  const [activeArchProject, setActiveArchProject] =
    useState<FeaturedProject | null>(null);
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact quick dispatch state
  const [senderName, setSenderName] = useState("");
  const [senderOrg, setSenderOrg] = useState("");
  const [inquiryType, setInquiryType] = useState(
    "Software Engineering / Full-Stack Role"
  );
  const [messageBody, setMessageBody] = useState("");

  const {
    ui,
    hero,
    corvento,
    about,
    skills,
    projects,
    experience,
    education,
    achievements,
    registry,
  } = getLocalizedPortfolio(lang);

  // Lightweight IntersectionObserver for smooth scroll-triggered fade-ins & slide-ups
  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = document.querySelectorAll(".reveal-on-scroll");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -24px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selectedCategory, credentialTab, registryFilter, lang]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(hero.email);
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
        "I reviewed your portfolio and would love to discuss an opportunity with you."
      }\n\nBest regards,\n${senderName || ""}\n${senderOrg || ""}`
    );
    window.location.href = `mailto:${hero.email}?subject=${subject}&body=${body}`;
  };

  const categories = [
    "All",
    "AI & EdTech",
    "Full-Stack Web",
    "Archived Ventures",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const degreesAndDiplomas = education.filter(
    (e) => e.category === "degree" || e.category === "diploma"
  );
  const certificatesList = education.filter(
    (e) => e.category === "certificate"
  );

  const registryDomains = [
    "All",
    "IT & Software",
    "Creative & Media",
    "English & Speech",
    "Sports & Chess",
    "Competitions & Volunteering",
  ];

  const filteredRegistry =
    registryFilter === "All"
      ? registry
      : registry.filter((r) => r.domain === registryFilter);

  const navItems = [
    { label: ui.nav.about, href: "#about" },
    { label: ui.nav.experience, href: "#experience" },
    { label: ui.nav.projects, href: "#projects" },
    { label: ui.nav.ventures, href: "#ventures" },
    { label: ui.nav.skills, href: "#skills" },
    { label: ui.nav.credentials, href: "#credentials" },
    { label: ui.nav.contact, href: "#contact" },
  ];

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "playstore":
        return <Smartphone className="w-3.5 h-3.5" />;
      case "telegram":
        return <Send className="w-3.5 h-3.5" />;
      case "github":
        return <Github className="w-3.5 h-3.5" />;
      case "drive":
        return <Palette className="w-3.5 h-3.5" />;
      case "youtube":
        return <Video className="w-3.5 h-3.5" />;
      default:
        return <Globe className="w-3.5 h-3.5" />;
    }
  };

  const getStatusBadgeStyle = (tone?: "active" | "archived" | "client") => {
    if (tone === "archived") {
      return "bg-amber-500/15 text-amber-300 border-amber-500/30";
    }
    if (tone === "client") {
      return "bg-indigo-500/15 text-indigo-300 border-indigo-500/30";
    }
    return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
  };

  return (
    <div className="min-h-screen bg-[#06070B] text-slate-50 relative selection:bg-sky-400/30 selection:text-white">
      {/* =====================================================================
          STICKY EXECUTIVE NAVBAR (COMPACT ITEMS + EN/සිංහල SWITCH)
         ===================================================================== */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.07] bg-[#06070B]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
          {/* Personal Monogram & Name */}
          <a href="#top" className="flex items-center gap-3 group btn-press flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400/20 via-indigo-500/15 to-emerald-400/15 border border-sky-400/40 flex items-center justify-center font-display font-extrabold text-sm text-sky-300 group-hover:border-sky-300 transition-all shadow-lg shadow-sky-500/10">
              KB
            </div>
            <div>
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white block leading-none">
                Kevin Bandara
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                {ui.roleShort}
              </span>
            </div>
          </a>

          {/* Desktop Navigation (Short, Clean Labels) */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors whitespace-nowrap btn-press"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Quick Actions + EN / සිංහල Language Switcher */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Language Switcher Pill (Default EN) */}
            <div
              role="group"
              aria-label="Language switcher"
              className="inline-flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/10"
            >
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-sky-400 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("si")}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  lang === "si"
                    ? "bg-sky-400 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                සිංහල
              </button>
            </div>

            <a
              href={hero.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] hover:-translate-y-0.5 text-slate-300 hover:text-white border border-white/10 transition-all btn-press"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] hover:-translate-y-0.5 text-slate-300 hover:text-white border border-white/10 transition-all btn-press"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={hero.resumeUrl}
              download="Kevin-Sharada-Bandara-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white/[0.07] hover:bg-white/15 hover:-translate-y-0.5 text-white border border-white/15 transition-all flex items-center gap-1.5 whitespace-nowrap btn-press"
            >
              <FileDown className="w-3.5 h-3.5 text-sky-400" />
              <span>{ui.resumeBtn}</span>
            </a>
            <button
              type="button"
              onClick={() => setHireModalOpen(true)}
              className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-sky-400 hover:bg-sky-300 hover:-translate-y-0.5 text-slate-950 transition-all shadow-lg shadow-sky-500/20 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{ui.workWithKevin}</span>
            </button>
          </div>

          {/* Mobile Language Toggle + Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <div className="inline-flex items-center p-0.5 rounded-lg bg-white/[0.05] border border-white/10">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2 py-1 rounded-md text-[11px] font-semibold cursor-pointer ${
                  lang === "en" ? "bg-sky-400 text-slate-950" : "text-slate-300"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("si")}
                className={`px-2 py-1 rounded-md text-[11px] font-semibold cursor-pointer ${
                  lang === "si" ? "bg-sky-400 text-slate-950" : "text-slate-300"
                }`}
              >
                සිං
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Tablet Menu Button (sm to lg) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="hidden sm:inline-flex lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile / Tablet Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#090B12]/95 backdrop-blur-2xl px-4 py-5 space-y-2 animate-tab-switch">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 btn-press"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 flex flex-wrap items-center gap-2.5 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setHireModalOpen(true);
                }}
                className="flex-1 py-2.5 rounded-xl text-center text-xs font-semibold bg-sky-400 text-slate-950 cursor-pointer"
              >
                {ui.workWithKevinFull}
              </button>
              <a
                href={hero.resumeUrl}
                download="Kevin-Sharada-Bandara-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl text-center text-xs font-semibold bg-white/10 text-white border border-white/15 btn-press"
              >
                {ui.resumeBtn}
              </a>
              <a
                href={hero.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl text-center text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 btn-press"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================================
          HERO SECTION: PHOTO FIRST AT THE TOP (BOTH MOBILE & DESKTOP),
          FOLLOWED BY NAME, HEADLINE, BIO, ACTIONS & 6-METRIC STRIP
         ===================================================================== */}
      <section
        id="top"
        className="relative pt-28 sm:pt-36 pb-20 overflow-hidden border-b border-white/10"
      >
        {/* Ambient WebGL Background */}
        <ThreeHeroCanvas mode="neural" />

        {/* Soft Ambient Gradient Vignette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#06070B]/35 via-[#06070B]/65 to-[#06070B]"
        />

        <div
          key={`hero-${lang}`}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          {/* STEP 1 (FIRST ON ALL DEVICES): COMMANDING TOP PORTRAIT STAGE */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-5xl flex items-center justify-center">
              {/* Left Desktop Identity Card (Floating beside top portrait on lg+) */}
              <div className="hidden lg:flex flex-col gap-3 w-64 mr-8 animate-fade-up">
                <div className="glass-panel rounded-2xl p-4 border border-white/10 flex items-center gap-3.5">
                  <img
                    src="/esoft-logo.jpg"
                    alt="Pearson Assured Diplomas in Software Engineering & IT"
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-xl object-contain bg-white p-1 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-medium text-sky-300 block">
                      {ui.heroCards.uniBadge}
                    </span>
                    <span className="text-sm font-bold text-white block truncate">
                      {ui.heroCards.uniTitle}
                    </span>
                    <span className="text-[11px] text-slate-400 block truncate">
                      {ui.heroCards.uniSub}
                    </span>
                  </div>
                </div>

                <div className="glass-panel rounded-2xl p-4 border border-white/10 flex items-center gap-3.5">
                  <img
                    src="/isipathana-logo.png"
                    alt="Isipathana College Colombo"
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-xl object-contain bg-white p-1 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-medium text-emerald-300 block">
                      {ui.heroCards.schoolBadge}
                    </span>
                    <span className="text-sm font-bold text-white block truncate">
                      {ui.heroCards.schoolTitle}
                    </span>
                    <span className="text-[11px] text-slate-400 block truncate">
                      {ui.heroCards.schoolSub}
                    </span>
                  </div>
                </div>
              </div>

              {/* Center Commanding High-Portrait Card (LCP Optimized for Google PageSpeed Insights) */}
              <div className="relative w-full max-w-[380px] sm:max-w-[430px]">
                {/* Luminous Aura Glow behind Portrait */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-4 rounded-[36px] opacity-40 blur-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(56,189,248,0.5), rgba(129,140,248,0.38), rgba(16,185,129,0.3))",
                  }}
                />

                <TiltCard
                  maxTilt={5}
                  className="relative w-full rounded-[30px] glass-panel p-3.5 sm:p-4 border border-sky-400/35 shadow-2xl"
                >
                  <div className="relative w-full h-[410px] sm:h-[470px] rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
                    <img
                      key={hero.portraits[activePortrait].src}
                      src={hero.portraits[activePortrait].src}
                      alt={hero.portraits[activePortrait].title}
                      width={430}
                      height={470}
                      fetchPriority="high"
                      decoding="async"
                      style={{
                        objectPosition:
                          hero.portraits[activePortrait].objectPosition,
                      }}
                      className={`w-full h-full object-cover ${
                        photoSwitched ? "animate-photo-switch" : ""
                      }`}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#06070B]/90 via-[#06070B]/30 to-transparent" />
                  </div>

                  {/* Caption & Photo Switcher Below Image */}
                  <div className="pt-3.5 px-1.5 flex items-center justify-between gap-3">
                    <div
                      key={`caption-${activePortrait}-${lang}`}
                      className="min-w-0 text-left animate-tab-switch"
                    >
                      <div className="font-display font-bold text-base text-white truncate">
                        {hero.portraits[activePortrait].title}
                      </div>
                      <div className="text-xs text-sky-300 truncate">
                        {hero.portraits[activePortrait].caption}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {hero.portraits.map((p, idx) => (
                        <button
                          key={p.src}
                          type="button"
                          onClick={() => {
                            setPhotoSwitched(true);
                            setActivePortrait(idx);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                            activePortrait === idx
                              ? "bg-sky-400 text-slate-950 font-semibold shadow-md shadow-sky-500/20"
                              : "bg-white/5 text-slate-300 hover:bg-white/15"
                          }`}
                        >
                          {ui.photoLabel} {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Right Desktop Identity Card (Floating beside top portrait on lg+) */}
              <div className="hidden lg:flex flex-col gap-3 w-64 ml-8 animate-fade-up">
                <div className="glass-panel rounded-2xl p-4 border border-white/10 flex items-center gap-3.5">
                  <img
                    src="/CorventoTechLogo.jpg"
                    alt="Corvento Technologies"
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-xl object-cover border border-white/15 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-medium text-sky-300 block">
                      {ui.heroCards.founderBadge}
                    </span>
                    <span className="text-sm font-bold text-white block truncate">
                      {ui.heroCards.founderTitle}
                    </span>
                    <span className="text-[11px] text-slate-400 block truncate">
                      {ui.heroCards.founderSub}
                    </span>
                  </div>
                </div>

                <div className="glass-panel rounded-2xl p-4 border border-white/10 flex items-center gap-3.5">
                  <img
                    src="/DanumaAI.jpg"
                    alt="DanumaAI"
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-xl object-cover border border-white/15 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-medium text-emerald-300 block">
                      {ui.heroCards.flagshipBadge}
                    </span>
                    <span className="text-sm font-bold text-white block truncate">
                      {ui.heroCards.flagshipTitle}
                    </span>
                    <span className="text-[11px] text-slate-400 block truncate">
                      {ui.heroCards.flagshipSub}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2 (BELOW PHOTO ON BOTH MOBILE & DESKTOP): EXECUTIVE NAME, HEADLINE, BIO & CTAs */}
          <div className="max-w-4xl mx-auto text-center mt-10 sm:mt-12 space-y-6 animate-fade-up">
            {/* Availability, Age & Location Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-500/12 text-emerald-300 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{hero.status}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-sky-500/10 text-sky-300 border border-sky-400/25">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>
                  {lang === "en"
                    ? `${hero.age} Years Old (Nov 6, 2007)`
                    : `වයස අවුරුදු ${hero.age} (2007 නොවැම්බර් 06)`}
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/[0.04] text-slate-300 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{hero.location}</span>
              </span>
            </div>

            {/* Full Name & Title */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <span className="text-sky-400 font-semibold text-base sm:text-lg">
                  {hero.greeting}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-300 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                  {hero.fullName} ({hero.legalName})
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-7xl lg:text-[78px] font-extrabold tracking-tight text-white leading-[1.03]">
                {hero.name}
              </h1>

              <p className="font-display text-xl sm:text-3xl lg:text-[32px] font-bold text-slate-200 leading-snug pt-1">
                {ui.heroRolePrefix}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-300 to-emerald-300">
                  {ui.heroRoleHighlight}
                </span>
              </p>
            </div>

            {/* Executive Summary */}
            {lang === "en" ? (
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                {hero.tagline} Founder of{" "}
                <strong className="text-white font-semibold">
                  Corvento Technologies
                </strong>{" "}
                (creator of{" "}
                <strong className="text-sky-300 font-semibold">DanumaAI</strong>{" "}
                on Web, Google Play Store &amp; Telegram Bot, plus a{" "}
                <strong className="text-emerald-300 font-semibold">
                  116,000+ student WhatsApp &amp; Telegram study network
                </strong>
                ), Senior Web Developer at{" "}
                <strong className="text-white font-semibold">Quizzygram</strong>,
                Sales &amp; Booking System Developer at{" "}
                <strong className="text-white font-semibold">
                  Past Papers Wiki
                </strong>
                , and Digital Operations Coordinator at{" "}
                <strong className="text-white font-semibold">MAOS Office</strong>.
              </p>
            ) : (
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                {hero.tagline}{" "}
                <strong className="text-white font-semibold">
                  Corvento Technologies
                </strong>{" "}
                හි නිර්මාතෘ (Web, Google Play Store සහ Telegram Bot හරහා ක්‍රියාත්මක වන{" "}
                <strong className="text-sky-300 font-semibold">DanumaAI</strong>{" "}
                සහ{" "}
                <strong className="text-emerald-300 font-semibold">
                  සිසුන් 116,000+ ක් සිටින WhatsApp හා Telegram අධ්‍යාපනික ජාලය
                </strong>
                ),{" "}
                <strong className="text-white font-semibold">Quizzygram</strong>{" "}
                හි Senior Web Developer,{" "}
                <strong className="text-white font-semibold">
                  Past Papers Wiki
                </strong>{" "}
                හි Sales &amp; Booking System Developer, සහ{" "}
                <strong className="text-white font-semibold">MAOS Office</strong>{" "}
                හි Digital Operations Coordinator.
              </p>
            )}

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => setHireModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-sm sm:text-base font-semibold bg-sky-400 hover:bg-sky-300 hover:-translate-y-0.5 text-slate-950 transition-all shadow-xl shadow-sky-500/25 cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>{ui.workWithKevinFull}</span>
              </button>

              <a
                href={hero.resumeUrl}
                download="Kevin-Sharada-Bandara-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-sm sm:text-base font-semibold bg-white hover:bg-slate-200 hover:-translate-y-0.5 text-slate-950 transition-all shadow-lg btn-press"
              >
                <FileDown className="w-4 h-4" />
                <span>{ui.downloadResumeBtn}</span>
              </a>

              <a
                href={hero.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl text-sm sm:text-base font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 hover:-translate-y-0.5 text-emerald-300 border border-emerald-500/35 transition-all btn-press"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {hero.phone}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl text-sm sm:text-base bg-white/[0.04] hover:bg-white/[0.09] hover:-translate-y-0.5 text-slate-200 border border-white/10 transition-all cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">{ui.emailCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{hero.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* STEP 3: 6-METRIC IMPACT TELEMETRY STRIP */}
          <div className="w-full pt-14 reveal-on-scroll">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 rounded-3xl glass-panel overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/15">
              {hero.telemetry.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 hover:bg-white/[0.03] transition-colors text-center sm:text-left"
                >
                  <div className="font-display text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white tracking-tight flex items-baseline justify-center sm:justify-start gap-1.5">
                    <span>{item.value}</span>
                    <span className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-sky-300 mt-1">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 01: ABOUT KEVIN, PERSONAL PROFILE & 2013–2026 MILESTONE CHRONICLE
         ===================================================================== */}
      <section
        id="about"
        className="relative py-24 sm:py-32 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-14 reveal-on-scroll">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-400/10 text-sky-300 border border-sky-400/25 mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              <span>{ui.aboutBadge}</span>
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-4xl leading-tight">
              {about.headline}
            </h2>
          </div>

          {/* Bio Paragraphs + Personal Profile Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            <div className="lg:col-span-7 space-y-5 reveal-on-scroll">
              {about.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-base sm:text-lg text-slate-300 leading-relaxed"
                >
                  {p}
                </p>
              ))}

              {/* 3 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {about.pillars.map((pillar, pIdx) => (
                  <div
                    key={pillar.code}
                    style={
                      {
                        "--reveal-delay": `${pIdx * 80}ms`,
                      } as React.CSSProperties
                    }
                    className="glass-panel rounded-2xl p-5 border border-white/10 hover:-translate-y-0.5 reveal-on-scroll"
                  >
                    <div className="text-xs font-bold text-sky-400 mb-1.5">
                      {pillar.code}
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Identity & Quick Facts Card */}
            <div
              className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-sky-400/30 reveal-on-scroll"
              style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            >
              <div className="flex items-center gap-4 pb-5 mb-5 border-b border-white/10">
                <img
                  src="/KevinPortrait.jpg"
                  alt="R.M. Kevin Sharada Bandara"
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded-2xl object-cover object-[center_24%] border-2 border-sky-400/50 flex-shrink-0"
                />
                <div>
                  <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                    {ui.personalProfileBadge}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    {hero.fullName}
                  </h3>
                  <p className="text-xs text-slate-400">{hero.legalName}</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {about.profileFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-white/[0.06] last:border-0 last:pb-0"
                  >
                    <span className="text-xs font-medium text-slate-400">
                      {fact.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white sm:text-right">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2.5">
                <a
                  href={hero.resumeUrl}
                  download="Kevin-Sharada-Bandara-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold bg-sky-400 hover:bg-sky-300 text-slate-950 text-center transition-all flex items-center justify-center gap-2 btn-press"
                >
                  <FileDown className="w-4 h-4" />
                  <span>{ui.downloadOfficialCv}</span>
                </a>
                <a
                  href={hero.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-white/15 text-white border border-white/10 transition-all flex items-center justify-center gap-1.5 btn-press"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* 2013 – 2026 Chronological Milestone Grid */}
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-2.5 mb-8">
              <History className="w-5 h-5 text-sky-400" />
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {ui.journeyHeading}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {about.milestones.map((m, idx) => (
                <div
                  key={m.year}
                  style={
                    {
                      "--reveal-delay": `${(idx % 3) * 75}ms`,
                    } as React.CSSProperties
                  }
                  className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-sky-400/35 hover:-translate-y-0.5 flex flex-col justify-between reveal-on-scroll"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-400/15 text-sky-300 border border-sky-400/30">
                        {m.year}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                      {m.title}
                    </h4>
                    <p className="text-xs font-semibold text-indigo-300 mb-3">
                      {m.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 02: PROFESSIONAL WORK EXPERIENCE
         ===================================================================== */}
      <section
        id="experience"
        className="relative py-24 sm:py-32 border-b border-white/10 swiss-grid-bg"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 reveal-on-scroll">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-400/10 text-sky-300 border border-sky-400/25 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{ui.expBadge}</span>
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {ui.expHeading}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-2 max-w-2xl">
              {ui.expSub}
            </p>
          </div>

          {/* Vertical Timeline Flow */}
          <div className="relative pl-6 sm:pl-10 border-l-2 border-white/15 space-y-10">
            {experience.map((exp, idx) => (
              <div
                key={exp.id}
                className="relative group reveal-on-scroll"
                style={
                  {
                    "--reveal-delay": `${Math.min(idx * 65, 260)}ms`,
                  } as React.CSSProperties
                }
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-7 w-4 h-4 rounded-full bg-[#06070B] border-2 border-sky-400 group-hover:scale-125 group-hover:bg-sky-400 transition-all" />

                <div className="glass-panel rounded-3xl p-6 sm:p-8 transition-all hover:-translate-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center -space-x-2">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          loading="lazy"
                          decoding="async"
                          className="w-14 h-14 rounded-2xl object-cover bg-slate-900 border border-white/15 flex-shrink-0"
                        />
                        {exp.secondaryLogo && (
                          <img
                            src={exp.secondaryLogo}
                            alt="Organization Logo"
                            loading="lazy"
                            decoding="async"
                            className="w-10 h-10 rounded-xl object-cover bg-white border-2 border-[#0B0E17] flex-shrink-0"
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium text-sky-300">
                          {exp.company} •{" "}
                          <span className="text-slate-400">{exp.location}</span>
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 self-start sm:self-auto whitespace-nowrap">
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

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {exp.links && exp.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.links.map((l) => (
                          <a
                            key={l.url}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-400/15 hover:bg-sky-400/25 hover:-translate-y-0.5 text-sky-300 border border-sky-400/30 text-xs font-semibold transition-all btn-press"
                          >
                            <span>{l.label}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 03: FEATURED SOFTWARE PROJECTS & PAST VENTURES
         ===================================================================== */}
      <section
        id="projects"
        className="relative py-24 sm:py-32 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + Category Filter */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 reveal-on-scroll">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-400/10 text-sky-300 border border-sky-400/25 mb-3">
                <Boxes className="w-3.5 h-3.5" />
                <span>{ui.projBadge}</span>
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {ui.projHeading}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mt-2 max-w-2xl">
                {ui.projSub}
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/20 -translate-y-0.5"
                      : "bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:-translate-y-0.5 border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Clean 2-Column Project Grid with Smooth Scroll Reveal & Tab Crossfade */}
          <div
            key={`${selectedCategory}-${lang}`}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-tab-switch"
          >
            {filteredProjects.map((project, pIdx) => (
              <div
                key={project.id}
                style={
                  {
                    "--reveal-delay": `${(pIdx % 2) * 85}ms`,
                  } as React.CSSProperties
                }
                className={`reveal-on-scroll ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                <TiltCard
                  maxTilt={4}
                  className={`h-full glass-panel rounded-3xl p-7 sm:p-9 flex flex-col justify-between border transition-all ${
                    project.featured
                      ? "border-sky-400/35 bg-gradient-to-br from-[#0D121F]/90 via-[#0B0E17]/95 to-[#111324]/90"
                      : "border-white/10"
                  }`}
                >
                <div>
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="flex items-center -space-x-2">
                        <img
                          src={project.logo}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-14 h-14 rounded-2xl object-cover border border-white/15 bg-slate-900 flex-shrink-0"
                        />
                        {project.secondaryLogo && (
                          <img
                            src={project.secondaryLogo}
                            alt="Parent / Community Logo"
                            loading="lazy"
                            decoding="async"
                            className="w-11 h-11 rounded-xl object-cover border-2 border-[#0B0E17] bg-white flex-shrink-0"
                          />
                        )}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold text-sky-400">
                            {project.role}
                          </span>
                          {project.poweredBy && (
                            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sky-400/15 text-sky-300 border border-sky-400/30">
                              {project.poweredBy}
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {project.statusBadge && (
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full border ${getStatusBadgeStyle(
                            project.statusTone
                          )}`}
                        >
                          {project.statusBadge}
                        </span>
                      )}
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                        {project.period}
                      </span>
                    </div>
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
                          className="font-display text-base sm:text-xl font-bold"
                          style={{ color: project.accentColor }}
                        >
                          {m.value}
                        </div>
                        <div className="text-[11px] font-medium text-slate-400 mt-0.5">
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
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300"
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
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-sky-400 hover:bg-sky-300 hover:-translate-y-0.5 text-slate-950 transition-all btn-press"
                      >
                        {getLinkIcon(link.type)}
                        <span>{link.label}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ))}

                    <button
                      type="button"
                      onClick={() => setActiveArchProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-white/10 hover:-translate-y-0.5 text-slate-200 border border-white/15 transition-all cursor-pointer"
                    >
                      <Terminal className="w-3.5 h-3.5 text-sky-400" />
                      <span>{ui.techArchBtn}</span>
                    </button>
                  </div>
                </div>
              </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 04: CORVENTO TECHNOLOGIES, 116K+ MEDIA NETWORK & CREATIVE STUDIO
         ===================================================================== */}
      <section
        id="ventures"
        className="relative py-24 sm:py-32 border-b border-white/10 swiss-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 reveal-on-scroll">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-400/10 text-sky-300 border border-sky-400/25 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{ui.venturesBadge}</span>
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {ui.venturesHeading}
              </h2>
              {lang === "en" ? (
                <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
                  Founded and operated by Kevin Bandara — powering{" "}
                  <strong className="text-white">DanumaAI</strong>,{" "}
                  <strong className="text-sky-300">@corventotech</strong> YouTube/Reels, and an active{" "}
                  <strong className="text-emerald-300">
                    116,000+ subscriber WhatsApp (74K+) &amp; Telegram (42K+) educational network
                  </strong>
                  .
                </p>
              ) : (
                <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
                  Kevin Bandara විසින් ආරම්භ කර මෙහෙයවනු ලබන ප්‍රධාන ආයතනය —{" "}
                  <strong className="text-white">DanumaAI</strong>,{" "}
                  <strong className="text-sky-300">@corventotech</strong> YouTube/Reels සහ{" "}
                  <strong className="text-emerald-300">
                    116,000+ ක් සිටින WhatsApp (74K+) හා Telegram (42K+) අධ්‍යාපනික ජාලය
                  </strong>{" "}
                  මෙහෙයවයි.
                </p>
              )}
            </div>

            {/* Brand Identity Evolution Logos */}
            <div className="flex items-center gap-2.5 self-start lg:self-auto glass-panel p-3 rounded-2xl">
              <img
                src="/AsteroidTechLogo.jpg"
                alt="Asteroid Technologies"
                loading="lazy"
                decoding="async"
                className="w-11 h-11 rounded-xl object-cover border border-white/10 opacity-85 hover:opacity-100 hover:scale-105 transition-all"
                title="Origin: Asteroid Technologies"
              />
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <img
                src="/LycoryxTech.jpg"
                alt="Lycoryx Technologies"
                loading="lazy"
                decoding="async"
                className="w-11 h-11 rounded-xl object-cover border border-white/10 opacity-85 hover:opacity-100 hover:scale-105 transition-all"
                title="Expansion: Lycoryx Technologies"
              />
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <img
                src="/CorventoTechLogo.jpg"
                alt="Corvento Technologies"
                loading="lazy"
                decoding="async"
                className="w-14 h-14 rounded-xl object-cover border-2 border-sky-400/50 shadow-lg shadow-sky-500/20 hover:scale-105 transition-all"
                title="Corvento Technologies"
              />
            </div>
          </div>

          {/* 3-Step Brand Evolution Lineage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {corvento.lineage.map((step, idx) => (
              <div
                key={step.name}
                style={
                  {
                    "--reveal-delay": `${idx * 80}ms`,
                  } as React.CSSProperties
                }
                className={`rounded-3xl p-6 border transition-all hover:-translate-y-0.5 reveal-on-scroll ${
                  idx === 2
                    ? "glass-panel border-sky-400/40 bg-sky-500/[0.05]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center -space-x-2">
                      <img
                        src={step.logo}
                        alt={step.name}
                        loading="lazy"
                        decoding="async"
                        className="w-11 h-11 rounded-xl object-cover border border-white/15"
                      />
                      {"secondaryLogo" in step && step.secondaryLogo && (
                        <img
                          src={step.secondaryLogo}
                          alt="Secondary Brand Logo"
                          loading="lazy"
                          decoding="async"
                          className="w-9 h-9 rounded-lg object-cover border-2 border-[#0B0E17]"
                        />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-sky-400">
                      {step.era}
                    </span>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                      idx === 2
                        ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                        : "bg-white/5 text-slate-400 border-white/10"
                    }`}
                  >
                    {step.status}
                  </span>
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
          <div className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 reveal-on-scroll">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {ui.whatsappHeading}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {ui.whatsappSub}
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold self-start sm:self-auto">
                <Users className="w-4 h-4" />
                <span>{ui.whatsappTotalBadge}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {corvento.channels.map((channel) => (
                <TiltCard
                  key={channel.id}
                  maxTilt={5}
                  className="glass-panel rounded-3xl p-6 flex flex-col justify-between group reveal-on-scroll"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <img
                        src={channel.logo}
                        alt={channel.name}
                        loading="lazy"
                        decoding="async"
                        className="w-16 h-16 rounded-2xl object-cover border border-white/15 shadow-md group-hover:scale-105 transition-transform"
                      />
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        {channel.followers}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-sky-400 mb-1">
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
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-emerald-500 hover:text-slate-950 text-white border border-white/10 hover:border-emerald-400 transition-all flex items-center justify-center gap-2 btn-press"
                  >
                    <span>{ui.openWhatsappBtn}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Graphic Design Portfolio & YouTube / Reels Production Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-amber-400/25 reveal-on-scroll">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 mb-3">
                  <Palette className="w-4 h-4" />
                  <span>{ui.graphicBadge}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {ui.graphicHeading}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {ui.graphicDesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Adobe Photoshop (Certified)",
                    "Adobe Illustrator",
                    "Adobe Lightroom",
                    "Figma UI/UX",
                    "Brand Identity & Logos",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-amber-400/10 border border-amber-400/25 text-amber-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={corvento.graphicsPortfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-semibold bg-amber-400 hover:bg-amber-300 hover:-translate-y-0.5 text-slate-950 transition-all self-start btn-press"
              >
                <Palette className="w-4 h-4" />
                <span>{ui.graphicBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-rose-400/25 reveal-on-scroll">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-300 mb-3">
                  <Video className="w-4 h-4" />
                  <span>{ui.videoBadge}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {ui.videoHeading}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {ui.videoDesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Adobe Premiere Pro (Certified)",
                    "Adobe After Effects (Certified)",
                    "Short-Form Reels Editing",
                    "Motion Graphics",
                    "YouTube (@corventotech)",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-400/25 text-rose-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={corvento.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-semibold bg-rose-500 hover:bg-rose-400 hover:-translate-y-0.5 text-white transition-all self-start btn-press"
              >
                <Video className="w-4 h-4" />
                <span>{ui.videoBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 05: CORE TECHNICAL & CREATIVE SKILLS
         ===================================================================== */}
      <section
        id="skills"
        className="relative py-24 sm:py-32 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 reveal-on-scroll">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-400/10 text-sky-300 border border-sky-400/25 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>{ui.skillsBadge}</span>
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {ui.skillsHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, idx) => (
              <div
                key={group.id}
                style={
                  {
                    "--reveal-delay": `${(idx % 3) * 75}ms`,
                  } as React.CSSProperties
                }
                className="glass-panel rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-0.5 reveal-on-scroll"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-lg bg-white/5"
                      style={{ color: group.accent }}
                    >
                      {group.code}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: group.accent }}
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {group.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-5">
                    {group.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-xs px-3 py-1.5 rounded-xl transition-all hover:-translate-y-0.5 ${
                        skill.highlight
                          ? "bg-white/[0.08] text-white border border-white/15 font-medium"
                          : "bg-white/[0.03] text-slate-300 border border-white/5"
                      }`}
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
          SECTION 06: EDUCATION, DIPLOMAS, CERTIFICATES, AWARDS & 48-CREDENTIAL ARCHIVE
         ===================================================================== */}
      <section
        id="credentials"
        className="relative py-24 sm:py-32 border-b border-white/10 swiss-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 reveal-on-scroll">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-400/10 text-sky-300 border border-sky-400/25 mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{ui.credBadge}</span>
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {ui.credHeading}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mt-2 max-w-2xl">
                {ui.credSub}
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: ui.credTabs.all },
                {
                  id: "diplomas",
                  label: ui.credTabs.diplomas,
                },
                {
                  id: "certificates",
                  label: ui.credTabs.certificates,
                },
                {
                  id: "awards",
                  label: ui.credTabs.awards,
                },
                {
                  id: "registry",
                  label: ui.credTabs.registry,
                },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() =>
                    setCredentialTab(
                      t.id as
                        | "all"
                        | "diplomas"
                        | "certificates"
                        | "awards"
                        | "registry"
                    )
                  }
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    credentialTab === t.id
                      ? "bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/20 -translate-y-0.5"
                      : "bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:-translate-y-0.5 border border-white/10"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* SUB-BLOCK A: DIPLOMAS & SECONDARY EDUCATION */}
          {(credentialTab === "all" || credentialTab === "diplomas") && (
            <div
              key={`diplomas-${credentialTab}-${lang}`}
              className="mb-16 animate-tab-switch"
            >
              <div className="flex items-center gap-2.5 mb-6 reveal-on-scroll">
                <GraduationCap className="w-5 h-5 text-sky-400" />
                <h3 className="font-display text-2xl font-bold text-white">
                  {ui.diplomasHeading}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {degreesAndDiplomas.map((edu, idx) => (
                  <div
                    key={edu.id}
                    style={
                      {
                        "--reveal-delay": `${(idx % 3) * 70}ms`,
                      } as React.CSSProperties
                    }
                    className={`glass-panel rounded-3xl p-6 flex flex-col justify-between border hover:-translate-y-0.5 reveal-on-scroll ${
                      edu.id === "esoft-se-diploma"
                        ? "border-sky-400/40 bg-sky-500/[0.04]"
                        : "border-white/10"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <div className="flex items-center gap-2.5">
                          {edu.logo && (
                            <img
                              src={edu.logo}
                              alt={edu.institution}
                              width={36}
                              height={36}
                              loading="lazy"
                              decoding="async"
                              className="w-9 h-9 rounded-lg object-contain bg-white p-1 border border-white/20 flex-shrink-0"
                            />
                          )}
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-400/15 text-sky-300 border border-sky-400/30">
                            {edu.badge}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-slate-400">
                          {edu.year}
                        </span>
                      </div>
                      <h4 className="font-display text-lg font-bold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-indigo-300 mb-3">
                        {edu.institution}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {edu.details[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SUB-BLOCK B: PROFESSIONAL CERTIFICATES */}
          {(credentialTab === "all" || credentialTab === "certificates") && (
            <div
              key={`certs-${credentialTab}-${lang}`}
              className="mb-16 animate-tab-switch"
            >
              <div className="flex items-center gap-2.5 mb-6 reveal-on-scroll">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="font-display text-2xl font-bold text-white">
                  {ui.certsHeading}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certificatesList.map((cert, idx) => (
                  <div
                    key={cert.id}
                    style={
                      {
                        "--reveal-delay": `${(idx % 4) * 65}ms`,
                      } as React.CSSProperties
                    }
                    className="rounded-2xl p-5 bg-white/[0.03] hover:bg-white/[0.06] hover:-translate-y-0.5 border border-white/10 hover:border-sky-400/30 transition-all flex flex-col justify-between reveal-on-scroll"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5">
                          {cert.logo && (
                            <img
                              src={cert.logo}
                              alt={cert.institution}
                              width={32}
                              height={32}
                              loading="lazy"
                              decoding="async"
                              className="w-8 h-8 rounded-lg object-contain bg-white p-1 border border-white/20 flex-shrink-0"
                            />
                          )}
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                            {cert.badge}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-slate-400">
                          {cert.year}
                        </span>
                      </div>
                      <h4 className="font-display text-base font-bold text-white mb-1">
                        {cert.degree}
                      </h4>
                      <p className="text-xs font-semibold text-sky-300 mb-2">
                        {cert.institution}
                      </p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cert.details[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SUB-BLOCK C: COMPETITIONS, SPORTS & VOLUNTEERING */}
          {(credentialTab === "all" || credentialTab === "awards") && (
            <div
              key={`awards-${credentialTab}-${lang}`}
              className="mb-16 animate-tab-switch"
            >
              <div className="flex items-center gap-2.5 mb-6 reveal-on-scroll">
                <Trophy className="w-5 h-5 text-amber-400" />
                <h3 className="font-display text-2xl font-bold text-white">
                  {ui.awardsHeading}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {achievements.map((item, idx) => {
                  const badgeStyle =
                    item.category === "competition"
                      ? "bg-amber-400/15 text-amber-300 border-amber-400/30"
                      : item.category === "sports"
                      ? "bg-sky-400/15 text-sky-300 border-sky-400/30"
                      : "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";

                  const categoryLabel =
                    item.category === "competition"
                      ? ui.awardCatLabels.competition
                      : item.category === "sports"
                      ? ui.awardCatLabels.sports
                      : ui.awardCatLabels.volunteering;

                  return (
                    <div
                      key={item.id}
                      style={
                        {
                          "--reveal-delay": `${(idx % 3) * 70}ms`,
                        } as React.CSSProperties
                      }
                      className="glass-panel rounded-3xl p-6 flex flex-col justify-between border border-white/10 hover:-translate-y-0.5 reveal-on-scroll"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3.5">
                          <div className="flex items-center gap-2.5">
                            {item.logo && (
                              <img
                                src={item.logo}
                                alt={item.organization}
                                width={32}
                                height={32}
                                loading="lazy"
                                decoding="async"
                                className="w-8 h-8 rounded-lg object-contain bg-white p-1 border border-white/20 flex-shrink-0"
                              />
                            )}
                            <span
                              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${badgeStyle}`}
                            >
                              {categoryLabel}
                            </span>
                          </div>
                          <span className="text-xs font-medium text-slate-400">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="font-display text-base sm:text-lg font-bold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs font-semibold text-sky-300 mb-3">
                          {item.organization}
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.highlight}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SUB-BLOCK D: COMPLETE CREDENTIAL ARCHIVE REGISTRY */}
          {(credentialTab === "all" || credentialTab === "registry") && (
            <div
              key={`registry-${credentialTab}-${lang}`}
              className="animate-tab-switch pt-4 reveal-on-scroll"
            >
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{ui.registryBadge}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      {ui.registryHeading}
                    </h3>
                  </div>

                  {/* Domain Filter Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {registryDomains.map((dom) => (
                      <button
                        key={dom}
                        type="button"
                        onClick={() => setRegistryFilter(dom)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          registryFilter === dom
                            ? "bg-sky-400 text-slate-950"
                            : "bg-white/[0.04] text-slate-300 hover:bg-white/10 border border-white/10"
                        }`}
                      >
                        {dom}
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  key={registryFilter}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 animate-tab-switch"
                >
                  {filteredRegistry.map((item) => (
                    <div
                      key={item.no}
                      className="p-4 rounded-2xl bg-black/40 hover:bg-white/[0.04] border border-white/[0.08] hover:border-sky-400/30 transition-all flex items-start gap-3"
                    >
                      <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                        <span className="w-8 h-8 rounded-lg bg-sky-400/15 border border-sky-400/30 text-sky-300 font-mono text-xs font-bold flex items-center justify-center">
                          #{String(item.no).padStart(2, "0")}
                        </span>
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt={item.institution}
                            width={32}
                            height={32}
                            loading="lazy"
                            decoding="async"
                            className="w-8 h-8 rounded-lg object-contain bg-white p-1 border border-white/15"
                          />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-semibold text-sky-400 truncate">
                            {item.domain}
                          </span>
                          <span className="text-[11px] text-slate-400 flex-shrink-0">
                            {item.date}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5 truncate">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================================
          SECTION 07: DIRECT CONTACT & COLLABORATION
         ===================================================================== */}
      <section id="contact" className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Banner for Companies & Clients */}
          <div className="mb-14 rounded-3xl p-6 sm:p-9 bg-gradient-to-r from-sky-500/15 via-indigo-500/15 to-emerald-500/15 border border-sky-400/35 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 reveal-on-scroll">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{ui.contactBannerBadge}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {ui.contactBannerTitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mt-1">
                {ui.contactBannerSub}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={hero.resumeUrl}
                download="Kevin-Sharada-Bandara-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 rounded-2xl text-sm font-semibold bg-white hover:bg-slate-200 hover:-translate-y-0.5 text-slate-950 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap btn-press"
              >
                <FileDown className="w-4 h-4" />
                <span>{ui.downloadResumeBtn}</span>
              </a>
              <button
                type="button"
                onClick={() => setHireModalOpen(true)}
                className="px-6 py-4 rounded-2xl text-sm font-semibold bg-sky-400 hover:bg-sky-300 hover:-translate-y-0.5 text-slate-950 transition-all shadow-xl shadow-sky-500/25 flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>{ui.workWithKevinFull}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 6 Cols: Direct Contact Info */}
            <div className="lg:col-span-6 space-y-6 reveal-on-scroll">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-400/10 text-sky-300 border border-sky-400/25">
                <Mail className="w-3.5 h-3.5" />
                <span>{ui.directContactBadge}</span>
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {ui.directContactTitle}
              </h2>

              {lang === "en" ? (
                <p className="text-base text-slate-300 leading-relaxed">
                  Available for{" "}
                  <strong className="text-white">
                    Software Engineering, Full-Stack Developer, Next.js/React, and AI Application Developer
                  </strong>{" "}
                  roles, Fiverr/Upwork freelance contracts, and creative partnerships.
                </p>
              ) : (
                <p className="text-base text-slate-300 leading-relaxed">
                  <strong className="text-white">
                    Software Engineering, Full-Stack Developer, Next.js/React සහ AI Application Developer
                  </strong>{" "}
                  රැකියා අවස්ථා, Fiverr/Upwork Freelance ව්‍යාපෘති සහ නිර්මාණාත්මක කටයුතු සඳහා මා හා සම්බන්ධ විය හැක.
                </p>
              )}

              {/* Direct Channel Cards */}
              <div className="space-y-3 pt-2">
                <div className="glass-panel rounded-2xl p-4 flex items-center justify-between gap-4 hover:-translate-y-0.5">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-sky-400/15 border border-sky-400/30 flex items-center justify-center text-sky-300 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400">{ui.emailLabel}</div>
                      <a
                        href={`mailto:${hero.email}`}
                        className="text-sm sm:text-base font-semibold text-white hover:text-sky-300 truncate block"
                      >
                        {hero.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors cursor-pointer flex items-center gap-1.5 flex-shrink-0"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">{ui.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{ui.copy}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Phone & WhatsApp Card */}
                <div className="glass-panel rounded-2xl p-4 flex items-center justify-between gap-4 hover:-translate-y-0.5">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400">
                        {ui.phoneLabel}
                      </div>
                      <a
                        href={hero.phoneHref}
                        className="text-sm sm:text-base font-semibold text-white hover:text-emerald-300 truncate block"
                      >
                        {hero.phoneIntl} ({hero.phone})
                      </a>
                    </div>
                  </div>
                  <a
                    href={hero.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500/20 hover:bg-emerald-400 text-emerald-200 hover:text-slate-950 border border-emerald-400/30 transition-all flex items-center gap-1.5 flex-shrink-0 btn-press"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={hero.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel rounded-2xl p-4 flex items-center justify-between group hover:-translate-y-0.5 btn-press"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">LinkedIn</div>
                        <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                          /in/kevinbandara
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  </a>

                  <a
                    href={hero.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel rounded-2xl p-4 flex items-center justify-between group hover:-translate-y-0.5 btn-press"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">GitHub</div>
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

            {/* Right 6 Cols: Quick Message Dispatch */}
            <div
              className="lg:col-span-6 reveal-on-scroll"
              style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            >
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15">
                <h3 className="font-display text-xl font-bold text-white mb-6">
                  {ui.formTitle}
                </h3>

                <form onSubmit={handleDispatchEmail} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="sender-name"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        {ui.formName}
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder={ui.formNamePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-sky-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sender-org"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        {ui.formOrg}
                      </label>
                      <input
                        id="sender-org"
                        type="text"
                        value={senderOrg}
                        onChange={(e) => setSenderOrg(e.target.value)}
                        placeholder={ui.formOrgPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-sky-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-type"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      {ui.formType}
                    </label>
                    <select
                      id="inquiry-type"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#090B11] border border-white/10 focus:border-sky-400 focus:outline-none text-sm text-white transition-colors"
                    >
                      <option value="Software Engineering / Full-Stack Role">
                        Software Engineering / Full-Stack Role
                      </option>
                      <option value="AI Systems & RAG Engineering">
                        AI Systems &amp; RAG Engineering
                      </option>
                      <option value="Freelance Web / App Project (Direct / Fiverr / Upwork)">
                        Freelance Web / App Project (Direct / Fiverr / Upwork)
                      </option>
                      <option value="Graphic Design, Branding & Reel Edits">
                        Graphic Design, Branding &amp; Reel Edits
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message-body"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      {ui.formMessage}
                    </label>
                    <textarea
                      id="message-body"
                      rows={4}
                      value={messageBody}
                      onChange={(e) => setMessageBody(e.target.value)}
                      placeholder={ui.formMessagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-sky-400 focus:outline-none text-sm text-white placeholder-slate-500 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold bg-sky-400 hover:bg-sky-300 hover:-translate-y-0.5 text-slate-950 transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{ui.formSubmit}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Bottom-Right Quick Hire Pill */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={() => setHireModalOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0B0E17]/90 hover:bg-sky-400 hover:-translate-y-0.5 text-white hover:text-slate-950 border border-sky-400/40 shadow-2xl shadow-sky-500/20 backdrop-blur-md transition-all group cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:bg-slate-950 animate-pulse" />
          <span className="text-xs font-semibold">{ui.workWithKevinFull}</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#040508] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-sky-400/15 border border-sky-400/40 flex items-center justify-center font-display font-bold text-xs text-sky-300">
              KB
            </div>
            <span className="text-xs text-slate-400">
              © {new Date().getFullYear()} Kevin Bandara ({hero.fullName}) •{" "}
              <a
                href="https://kevinbandara.is-a.dev"
                className="text-slate-300 hover:text-sky-300"
              >
                kevinbandara.is-a.dev
              </a>
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs text-slate-400 flex-wrap justify-center">
            <a
              href={hero.resumeUrl}
              download="Kevin-Sharada-Bandara-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300 hover:text-white font-semibold transition-colors"
            >
              {ui.resumeBtn}
            </a>
            <a
              href={hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={hero.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              YouTube
            </a>
            <a
              href={hero.graphicsDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              {ui.designPortfolio}
            </a>
            <a
              href="https://danumaai.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              DanumaAI
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive Technical Architecture Modal */}
      <ArchitectureModal
        project={activeArchProject}
        onClose={() => setActiveArchProject(null)}
      />

      {/* Interactive Work With Kevin Modal */}
      <HireMeModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
      />
    </div>
  );
}
