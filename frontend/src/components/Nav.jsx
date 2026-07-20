import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { NAV, BRAND } from "../data/site";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="site-nav"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.15, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/85 backdrop-blur-xl border-b border-neutral-200/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-[72px] flex items-center justify-between">
        <a href="#home" className="flex items-center" data-testid="nav-logo">
          <Logo width={140} />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="nav-link text-[13px] font-medium text-neutral-700 hover:text-neutral-900"
              data-testid={`nav-${n.label.toLowerCase()}`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-cta"
            className="hidden sm:inline-flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full bg-[#F26B21] text-white text-[13px] font-medium hover:bg-[#e05a10] transition-all shadow-[0_10px_30px_-10px_rgba(242,107,33,0.6)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Talk to us
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center"
            aria-label="Open menu"
            data-testid="nav-mobile-toggle"
          >
            <span className="block w-4 h-[1.5px] bg-neutral-900 relative before:content-[''] before:absolute before:w-4 before:h-[1.5px] before:bg-neutral-900 before:-top-1.5 after:content-[''] after:absolute after:w-4 after:h-[1.5px] after:bg-neutral-900 after:top-1.5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-t border-neutral-200 px-6 py-6 flex flex-col gap-4"
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="text-neutral-800 text-lg"
              data-testid={`nav-mobile-${n.label.toLowerCase()}`}
            >
              {n.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
