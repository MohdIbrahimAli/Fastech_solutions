import React from "react";
import { motion } from "framer-motion";
import { BRAND } from "../data/site";
import { PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section
      data-testid="cta"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 120% at 50% 0%, #FF8A3D 0%, #F26B21 45%, #d9530b 100%)",
      }}
    >
      <div className="absolute inset-0 grain-overlay opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/70 mb-5">
            — Next step
          </div>
          <h2
            className="text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9]"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Need a reliable
            <br />
            <em className="italic">technology partner?</em>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-white/85 text-lg">
            One WhatsApp message. One site visit. A written quote before we
            touch a wall.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              data-testid="cta-whatsapp"
              className="group inline-flex items-center gap-4 pl-6 pr-3 py-3 rounded-full bg-[#25D366] hover:bg-[#1eb955] transition-all shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)] text-white font-medium"
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor">
                <path d="M16 3C9 3 3 9 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.8 1 3.9 1.5 6.2 1.5 7 0 13-6 13-13S23 3 16 3zm0 24c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4C5.5 20.3 5 18.2 5 16 5 10 10 5 16 5s11 5 11 11-5 11-11 11zm5.5-7.7c-.3-.2-1.8-.9-2-1s-.5-.2-.7.2c-.2.3-.9 1-1.1 1.2s-.4.2-.7 0c-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.9-1.7-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 3 1.3 3 .9 3.5.8.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.2-.3-.3-.6-.5z" />
              </svg>
              Chat on WhatsApp
              <span className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </span>
            </a>
            <a
              href={BRAND.callHref}
              data-testid="cta-call"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/10 border border-white/40 text-white font-medium hover:bg-white/20 backdrop-blur-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              Call {BRAND.phones[0]}
            </a>
          </div>

          <p className="mt-12 text-white/70 text-sm">
            Or just say hello at{" "}
            <a
              href={`mailto:${BRAND.email}`}
              className="underline underline-offset-4"
            >
              {BRAND.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
