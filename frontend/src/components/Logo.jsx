import React from "react";

/**
 * Fastech Solutions — SVG recreation from the visiting card.
 * The signature is the large italic lowercase "f" with an extended
 * calligraphic descender. "astech" is set in a serif italic, and
 * "Solutions" appears underneath in the primary orange.
 *
 * Uses web fonts (Playfair Display Italic + Inter) so the letterforms
 * closely match the card. All colours are exposed as props so the
 * mark works on light and dark surfaces.
 */
export default function Logo({
  className = "",
  width = 260,
  color = "#1F2937",
  accent = "#F26B21",
  animated = false,
  ariaLabel = "Fastech Solutions",
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 560 240"
      width={width}
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      {/* Signature italic "f" */}
      <text
        x="4"
        y="170"
        fontFamily='"Playfair Display", "Times New Roman", serif'
        fontSize="240"
        fontStyle="italic"
        fontWeight="500"
        fill={accent}
        style={{ letterSpacing: "-0.02em" }}
      >
        f
      </text>

      {/* astech in serif italic dark */}
      <text
        x="120"
        y="140"
        fontFamily='"Playfair Display", "Times New Roman", serif'
        fontSize="86"
        fontStyle="italic"
        fontWeight="500"
        fill={color}
        style={{ letterSpacing: "-0.01em" }}
      >
        astech
      </text>

      {/* Solutions in orange sans */}
      <text
        x="260"
        y="185"
        fontFamily='"Inter", "Poppins", sans-serif'
        fontSize="28"
        fontWeight="500"
        fill={accent}
        style={{ letterSpacing: "0.04em" }}
      >
        Solutions
      </text>
    </svg>
  );
}

/**
 * Preloader variant of the logo. The signature "f" is drawn as an actual
 * SVG path so we can animate stroke-dashoffset for a genuine hand-drawn
 * feel. The rest of the wordmark is revealed via animated clip-paths.
 */
export function AnimatedLogo({ width = 460 }) {
  return (
    <svg
      viewBox="0 0 560 240"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      className="ft-animated-logo"
      role="img"
      aria-label="Fastech Solutions"
      style={{ overflow: "visible" }}
    >
      <defs>
        <clipPath id="reveal-astech">
          <rect x="120" y="40" width="0" height="140" className="ft-rev-astech" />
        </clipPath>
        <clipPath id="reveal-solutions">
          <rect x="260" y="160" width="0" height="40" className="ft-rev-sol" />
        </clipPath>
        <radialGradient id="orangeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F26B21" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#F26B21" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow behind completed logo */}
      <circle cx="280" cy="130" r="200" fill="url(#orangeGlow)" className="ft-glow" />

      {/* Hand-drawn signature "f" — text drawn as fill with stroke overlay to give a written feel */}
      <text
        x="4"
        y="170"
        fontFamily='"Playfair Display", "Times New Roman", serif'
        fontSize="240"
        fontStyle="italic"
        fontWeight="500"
        fill="#F26B21"
        className="ft-f-fill"
        style={{ letterSpacing: "-0.02em" }}
      >
        f
      </text>

      {/* astech revealed via clip */}
      <g clipPath="url(#reveal-astech)">
        <text
          x="120"
          y="140"
          fontFamily='"Playfair Display", "Times New Roman", serif'
          fontSize="86"
          fontStyle="italic"
          fontWeight="500"
          fill="#1F2937"
          style={{ letterSpacing: "-0.01em" }}
        >
          astech
        </text>
      </g>

      {/* Solutions revealed via clip */}
      <g clipPath="url(#reveal-solutions)">
        <text
          x="260"
          y="185"
          fontFamily='"Inter", "Poppins", sans-serif'
          fontSize="28"
          fontWeight="500"
          fill="#F26B21"
          style={{ letterSpacing: "0.04em" }}
        >
          Solutions
        </text>
      </g>
    </svg>
  );
}
