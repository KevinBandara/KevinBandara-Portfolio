"use client";

import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  ArrowDown,
  Smartphone,
  Send,
  Globe,
} from "lucide-react";
import { FeaturedProject } from "@/data/portfolioData";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
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

interface ArchitectureModalProps {
  project: FeaturedProject | null;
  onClose: () => void;
}

export default function ArchitectureModal({
  project,
  onClose,
}: ArchitectureModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "github":
        return <GithubIcon className="w-4 h-4" />;
      case "playstore":
        return <Smartphone className="w-4 h-4" />;
      case "telegram":
        return <Send className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="arch-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0B0D14] border border-white/15 shadow-2xl text-slate-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-900 border border-white/10 flex-shrink-0 flex items-center justify-center">
              <img
                src={project.logo}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-400/30">
                  Technical Architecture
                </span>
                <span className="text-xs text-slate-400">
                  {project.role} • {project.period}
                </span>
              </div>
              <h3
                id="arch-modal-title"
                className="text-xl sm:text-2xl font-bold text-white mt-1"
              >
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5"
            >
              <div className="font-mono text-lg sm:text-xl font-bold text-sky-300">
                {m.value}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Interactive System Architecture Pipeline */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-sky-400" />
            <h4 className="font-mono text-xs uppercase tracking-widest text-sky-400">
              End-to-End System Topology & Data Flow
            </h4>
          </div>

          <div className="space-y-3">
            {project.architecture.map((node, i) => (
              <React.Fragment key={i}>
                <div className="rounded-xl bg-[#101420] border border-white/10 hover:border-sky-400/40 p-4 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                        {node.layer}
                      </span>
                      <span className="font-semibold text-white text-sm sm:text-base">
                        {node.title}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-sky-300 bg-sky-500/10 px-2.5 py-1 rounded border border-sky-500/20">
                      {node.tech}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {node.detail}
                  </p>
                </div>

                {i < project.architecture.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                      <ArrowDown className="w-3.5 h-3.5 text-sky-400/70" />
                      <span>ASYNC / HTTPS PIPELINE</span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Engineering Highlights & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <h4 className="font-mono text-xs uppercase tracking-widest text-slate-300">
                Key Engineering Milestones
              </h4>
            </div>
            <ul className="space-y-2.5">
              {project.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-indigo-400" />
                <h4 className="font-mono text-xs uppercase tracking-widest text-slate-300">
                  Production Technology Stack
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-3">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-lg shadow-sky-500/20"
                >
                  {getLinkIcon(link.type)}
                  <span>{link.label}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
