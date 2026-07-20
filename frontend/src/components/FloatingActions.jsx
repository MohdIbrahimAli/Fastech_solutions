import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";
import { BRAND } from "../data/site";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-40 flex flex-col gap-3 items-end">
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full bg-white shadow-xl border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all"
            data-testid="fab-top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={BRAND.callHref}
        data-testid="fab-call"
        className="group flex items-center gap-2 h-12 pr-4 pl-3 rounded-full bg-white shadow-xl border border-neutral-200 hover:bg-neutral-900 hover:text-white transition-all"
        aria-label="Call now"
      >
        <span className="w-9 h-9 rounded-full bg-neutral-900 group-hover:bg-[#F26B21] flex items-center justify-center text-white">
          <Phone className="w-4 h-4" />
        </span>
        <span className="hidden sm:inline text-xs font-medium">Call</span>
      </a>

      <a
        href={BRAND.whatsapp}
        target="_blank"
        rel="noreferrer"
        data-testid="fab-whatsapp"
        className="group flex items-center gap-2 h-14 pr-5 pl-3 rounded-full bg-[#25D366] shadow-[0_20px_40px_-15px_rgba(37,211,102,0.6)] hover:bg-[#1eb955] transition-all text-white"
        aria-label="Chat on WhatsApp"
      >
        <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <svg viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor">
            <path d="M16 3C9 3 3 9 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.8 1 3.9 1.5 6.2 1.5 7 0 13-6 13-13S23 3 16 3zm5.5 16.3c-.3-.2-1.8-.9-2-1s-.5-.2-.7.2c-.2.3-.9 1-1.1 1.2s-.4.2-.7 0c-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.9-1.7-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 3 1.3 3 .9 3.5.8.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4z" />
          </svg>
        </span>
        <span className="hidden sm:inline font-medium text-sm">Chat</span>
      </a>
    </div>
  );
}
