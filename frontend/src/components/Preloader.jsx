import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLogo } from "./Logo";
import { BRAND } from "../data/site";

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0 draw, 1 tagline, 2 zoom, 3 gone

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1400);
    const t2 = setTimeout(() => setPhase(2), 2100);
    const t3 = setTimeout(() => {
      setPhase(3);
      onComplete?.();
    }, 2700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          data-testid="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.6, 0.05, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden"
        >
          {/* Soft radial glow */}
          <div className="absolute inset-0 pointer-events-none preloader-glow" />
          {/* Grain */}
          <div className="absolute inset-0 grain-overlay opacity-40 pointer-events-none" />

          {/* Floating particles */}
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${(i * 73) % 100}%`,
                top: `${(i * 41) % 100}%`,
                width: 4 + (i % 3) * 2,
                height: 4 + (i % 3) * 2,
                background:
                  i % 2 === 0
                    ? "rgba(242,107,33,0.35)"
                    : "rgba(31,41,55,0.15)",
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 3 + (i % 4),
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}

          {/* Logo + tagline stack */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            animate={
              phase === 2
                ? { scale: 1.35, opacity: 0, filter: "blur(6px)" }
                : { scale: 1, opacity: 1, filter: "blur(0px)" }
            }
            transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
          >
            <div className={`ft-logo-wrap phase-${phase}`}>
              <AnimatedLogo width={480} />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12, letterSpacing: "0.4em" }}
              animate={
                phase >= 1
                  ? { opacity: 1, y: 0, letterSpacing: "0.28em" }
                  : {}
              }
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="mt-6 text-[11px] md:text-xs uppercase text-neutral-500 font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {BRAND.tagline}
            </motion.p>
          </motion.div>

          {/* White flash */}
          <motion.div
            className="absolute inset-0 bg-white pointer-events-none"
            initial={{ opacity: 0 }}
            animate={phase === 2 ? { opacity: [0, 0.9, 0] } : {}}
            transition={{ duration: 0.6, times: [0, 0.5, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
