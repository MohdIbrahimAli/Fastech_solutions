import React from "react";
import { motion } from "framer-motion";
import { MANIFESTO } from "../data/site";

export default function Manifesto() {
  return (
    <section
      id="ethos"
      data-testid="manifesto"
      className="relative py-32 md:py-40 bg-[#0B0B0C] text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#F26B21] opacity-[0.08] blur-[120px]" />
      </div>
      <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/50 mb-4">
              — Manifesto
            </div>
            <h2
              className="text-5xl md:text-7xl leading-[0.95]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              How we <em className="italic text-[#F26B21]">work.</em>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 self-end text-white/60 text-lg leading-relaxed">
            Four principles that decide every quote, every install and every
            support call. Not a slogan wall — an operating discipline.
          </div>
        </div>

        <div className="space-y-0 border-t border-white/10">
          {MANIFESTO.map((m, i) => (
            <motion.div
              key={m.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.6, 0, 0.2, 1],
              }}
              className="group grid md:grid-cols-12 gap-6 py-10 md:py-14 border-b border-white/10 items-start"
            >
              <div className="md:col-span-2">
                <div
                  className="text-4xl md:text-5xl text-white/40 group-hover:text-[#F26B21] transition-colors duration-500"
                  style={{ fontFamily: '"Space Grotesk", monospace' }}
                >
                  {m.n}
                </div>
              </div>
              <div className="md:col-span-6">
                <h3
                  className="text-3xl md:text-5xl leading-tight"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {m.t}
                </h3>
              </div>
              <div className="md:col-span-4 text-white/60 text-[15px] leading-relaxed md:pt-4">
                {m.d}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
