"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Mail,
  Phone,
  MessageCircle,
  Check,
  Copy,
  Briefcase,
  Code2,
  Sparkles,
  Palette,
  Send,
  ExternalLink,
  CheckCircle2,
  FileDown,
} from "lucide-react";
import { HERO_DATA } from "@/data/portfolioData";

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ENGAGEMENT_OPTIONS = [
  {
    id: "fulltime",
    title: "Software Engineer / Full-Stack Role",
    subtitle: "Full-Time, Associate, Junior or Intern Engineering Team Role",
    badge: "Immediate Availability",
    icon: Briefcase,
    subject:
      "Hiring Inquiry: Software Engineer / Full-Stack Role — Kevin Bandara",
    template:
      "Hi Kevin,\n\nWe reviewed your portfolio (kevinbandara.is-a.dev) and are impressed by your work on DanumaAI, Quizzygram, and MemoAI. We would love to schedule an interview regarding a Software Engineering / Full-Stack Developer role at our company.\n\nCompany Name:\nRole / Position:\nLocation / Mode (Remote/Hybrid/Colombo):\n\nBest regards,",
  },
  {
    id: "contract",
    title: "Dedicated Contract / Product Engineering",
    subtitle: "Next.js, React, Node.js, MongoDB, or AI/RAG System Architecture",
    badge: "Sprint or Monthly",
    icon: Code2,
    subject:
      "Contract Engineering Inquiry — Next.js / AI / Full-Stack Development",
    template:
      "Hi Kevin,\n\nWe are looking for a Full-Stack / AI Systems Engineer to help build and scale our platform.\n\nProject Overview:\nTimeline:\nTech Stack / Requirements:\n\nBest regards,",
  },
  {
    id: "freelance",
    title: "Freelance Web & App Project (Direct / Fiverr / Upwork)",
    subtitle: "Custom Websites, E-Commerce Storefronts, Bots & Dashboards",
    badge: "Fast Turnaround",
    icon: Sparkles,
    subject: "Freelance Project Inquiry — Custom Web / AI Application",
    template:
      "Hi Kevin,\n\nI would like to hire you for a custom web / software project.\n\nProject Type:\nEstimated Budget / Timeline:\nKey Features Needed:\n\nBest regards,",
  },
  {
    id: "creative",
    title: "Graphic Design, Branding & Reel Editing",
    subtitle: "Adobe Photoshop, Illustrator, Premiere Pro, After Effects & UI/UX",
    badge: "Creative Studio",
    icon: Palette,
    subject: "Creative Inquiry — Graphic Design / Brand Identity / Reel Edits",
    template:
      "Hi Kevin,\n\nI checked out your Graphic Design portfolio and YouTube reels (@corventotech) and would like to work with you on creative assets.\n\nDeliverables Needed:\nTimeline:\n\nBest regards,",
  },
];

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  const [selectedId, setSelectedId] = useState<string>("fulltime");
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedOption =
    ENGAGEMENT_OPTIONS.find((o) => o.id === selectedId) || ENGAGEMENT_OPTIONS[0];

  const handleCopyRecruiterBrief = () => {
    const summary = `Candidate: Kevin Sharada Bandara (R.M. Kevin Sharada Bandara)
Role: Full-Stack Software Developer, AI Systems Builder & Tech Entrepreneur
Location: Colombo, Sri Lanka (Open to Onsite, Hybrid & Remote)
Phone / WhatsApp: ${HERO_DATA.phoneIntl} (${HERO_DATA.phone})
Email: ${HERO_DATA.email}
Portfolio: https://kevinbandara.is-a.dev | Resume PDF: https://kevinbandara.is-a.dev/Kevin-Bandara-Resume.pdf
LinkedIn: ${HERO_DATA.linkedin}
GitHub: ${HERO_DATA.github}

Key Highlights:
- Founder & Lead Developer @ Corvento Technologies: Built DanumaAI (Web, Google Play Store Android App with 5,000+ downloads, Telegram Bot serving 2,000+ active students); created MemoAI (250,000+ community members across 2,157+ Discord servers); operates 116,000+ subscriber WhatsApp (74K+) & Telegram (42K+) educational networks.
- Senior Web Developer @ Quizzygram (Educational Channel SL): Engineered Telegram-style chats, forums, channels, quizzes & live competitions.
- Sales & Operations Manager + Booking Architect @ Past Papers Wiki (140K+ users): Engineered custom internal booking & scheduling engine.
- Digital Operations Coordinator @ MAOS Office: Managing academic resource broadcasts across 3 official WhatsApp channels.
- Global Freelancer (Fiverr, Upwork & Direct): Delivered bilingual e-commerce platforms, Laravel MVC systems, Adobe Creative Suite graphic design & video reels.
- Education: BIT Undergraduate @ UCSC (2026-2029) | Pearson Assured Diplomas in Software Engineering (DTEC) & IT (DITEC) + English (ESOFT) | 3 UoM CODL Certificates (Python, Front-End, Web Design) | Laravel Certificate (CodeXpress) | Diploma in Graphic Design (ATARI City Campus).`;

    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(HERO_DATA.phoneIntl);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleInstantEmail = () => {
    const mailto = `mailto:${HERO_DATA.email}?subject=${encodeURIComponent(
      selectedOption.subject
    )}&body=${encodeURIComponent(selectedOption.template)}`;
    window.location.href = mailto;
  };

  const handleInstantWhatsApp = () => {
    const url = `${HERO_DATA.whatsappUrl}?text=${encodeURIComponent(
      selectedOption.template
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hire-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0B0E17] border border-sky-400/30 shadow-2xl text-slate-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <img
              src="/KevinPortrait.jpg"
              alt="Kevin Bandara"
              className="w-14 h-14 rounded-2xl object-cover object-[center_24%] border-2 border-sky-400/50 flex-shrink-0"
            />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Engineering Roles &amp; Projects</span>
              </div>
              <h3
                id="hire-modal-title"
                className="font-display text-2xl sm:text-3xl font-bold text-white mt-1"
              >
                Work With Kevin Bandara
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Select Engagement Type */}
        <div className="my-6">
          <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-3">
            1. Select How You Would Like to Work Together:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ENGAGEMENT_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedId === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedId(opt.id)}
                  className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-sky-400/15 border-sky-400 text-white shadow-lg shadow-sky-500/10"
                      : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="p-2 rounded-xl bg-white/10 text-sky-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200">
                      {opt.badge}
                    </span>
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base text-white">
                    {opt.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {opt.subtitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Why Hire Kevin Quick Snapshot */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
          <div className="font-mono text-xs uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Candidate Snapshot for Hiring Managers &amp; Clients</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
              <strong className="text-white block">Core Engineering:</strong>
              Next.js, React, TypeScript, Node.js, Python, MongoDB, PostgreSQL, Laravel
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
              <strong className="text-white block">AI &amp; Production:</strong>
              Gemini &amp; OpenAI RAG, Google Play Android Apps, Telegram &amp; Discord Bots
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
              <strong className="text-white block">Academic &amp; Creative:</strong>
              UCSC BIT + Pearson SE/IT &amp; English Diplomas + Adobe Creative Suite
            </div>
          </div>
        </div>

        {/* Instant Action Buttons */}
        <div className="space-y-3">
          <div className="font-mono text-xs uppercase tracking-widest text-sky-400">
            2. Instant Connect, Resume &amp; Recruiter Actions:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <a
              href={HERO_DATA.resumeUrl}
              download="Kevin-Sharada-Bandara-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-white hover:bg-slate-200 text-slate-950 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>

            <button
              type="button"
              onClick={handleInstantWhatsApp}
              className="py-3.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </button>

            <button
              type="button"
              onClick={handleInstantEmail}
              className="py-3.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Pre-Filled Email</span>
            </button>

            <button
              type="button"
              onClick={handleCopyRecruiterBrief}
              className="py-3.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-medium bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {copiedSummary ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Brief Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Brief</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 text-xs font-mono text-slate-400">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a
                  href={HERO_DATA.phoneHref}
                  className="text-slate-200 hover:text-white"
                >
                  {HERO_DATA.phoneIntl}
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                >
                  {copiedPhone ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-slate-200">{HERO_DATA.email}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                >
                  {copiedEmail ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={HERO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 hover:text-white inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={HERO_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white inline-flex items-center gap-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
