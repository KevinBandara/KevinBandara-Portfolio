"use client";

import React, { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareColor?: string;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 6,
  glareColor = "rgba(56, 189, 248, 0.14)",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState(
    "perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const pctX = x / rect.width;
    const pctY = y / rect.height;

    const rotateY = (pctX - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - pctY) * maxTilt * 2;

    setTransformStyle(
      `perspective(1100px) rotateX(${rotateX.toFixed(
        2
      )}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`
    );
    setGlarePos({
      x: Math.round(pctX * 100),
      y: Math.round(pctY * 100),
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle(
      "perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition:
          glarePos.opacity === 0
            ? "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)"
            : "transform 0.1s ease-out",
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Dynamic Cursor-Tracking Specular Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(520px circle at ${glarePos.x}% ${glarePos.y}%, ${glareColor}, transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}
