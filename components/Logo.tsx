"use client";

import Link from "next/link";
import { useState } from "react";

export default function Logo({ href = "/", onClick }: { href?: string; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);

  const defaultColor = "var(--color-text-primary)";
  const accentColor = "var(--color-accent-warm)";

  const pathStyle = (isAnimated: boolean): React.CSSProperties => ({
    fill: isAnimated && hovered ? accentColor : defaultColor,
    transition: "fill 0.3s ease",
  });

  return (
    <Link href={href} id="nav-logo" onClick={onClick} aria-label="Mohammed Noushad — Home">
      <div
        className="inline-block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg width="209" height="34" viewBox="0 0 209 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[22px] md:h-[28px] w-auto" aria-hidden="true">
          <title>Mohammed Noushad Logo</title>
          <g clipPath="url(#clip-logo)">
            <path d="M0 7.28574V0H33.0691L36.3882 3.31906V10.0381L33.0691 13.3572H29.1025V7.28574H0ZM0 20.6429V13.3572H21.1691V20.6429H0ZM36.3882 30.6406L33.0691 33.9596H0V26.6739H29.1025V20.6024H33.0691L36.3882 23.9215V30.6406Z" style={{ fill: defaultColor }} />
            <path d="M50.1505 18.2953V34.0001H42.8647V7.28574L50.1505 18.2953ZM72.0077 26.7144L76.541 33.5953L76.1767 33.9596H67.7982L64.4386 28.9001L59.6624 21.6953L50.11 7.24526L45.6171 0.364287L45.9814 0H54.36L72.0077 26.7144ZM72.0077 15.7048V0H79.2934V26.6739L72.0077 15.6643V15.7048Z" style={pathStyle(true)} />
            <path d="M122.805 34.0001H115.52V20.6429H86.4172V0H93.703V13.3572H115.52V0H122.805V13.681L119.486 17.0001L122.805 20.3191V34.0001ZM93.703 26.7144V34.0001H86.4172V26.7144H93.703Z" style={pathStyle(true)} />
            <path d="M130.01 3.31906L133.329 0H163.079L166.398 3.31906V33.9596H159.113V7.28574H137.296V34.0001H130.01V3.31906ZM153.041 24.2858H143.367V17.0001H153.041V24.2858Z" style={{ fill: defaultColor }} />
            <path d="M172.47 17.3239V0H179.756V13.3572H201.572V0H208.858V17.3239L205.539 20.6429H175.789L172.47 17.3239ZM194.287 26.7144V34.0001H187.001V26.7144H194.287Z" style={{ fill: defaultColor }} />
          </g>
          <defs>
            <clipPath id="clip-logo">
              <rect width="208.858" height="34.0001" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Link>
  );
}
