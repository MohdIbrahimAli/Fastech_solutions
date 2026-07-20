import React from "react";
import { motion } from "framer-motion";
import { SERVICES, FEATURE_STRIP } from "../data/site";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services"
      className="relative py-32 md:py-40 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
              — Services · 03
            </div>
            <h2
              className="text-5xl md:text-7xl leading-[0.95] text-neutral-900"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              What we <em className="italic text-[#F26B21]">actually</em> do
              <br />
              on-site.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-8 self-end text-neutral-600 text-[15px] leading-relaxed">
            Every service starts with a walk-through and a plan. No estimates
            over the phone, no boilerplate scopes.
          </div>
        </div>

        {/* feature strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-neutral-200 border border-neutral-200 rounded-3xl overflow-hidden mb-20">
          {FEATURE_STRIP.map((f, i) => (
            <motion.div
              key={f.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="bg-white p-6 hover:bg-[#F26B21] hover:text-white transition-colors duration-500 group cursor-default"
              data-cursor="hover"
            >
              <div
                className="text-xs opacity-60"
                style={{ fontFamily: '"Space Grotesk", monospace' }}
              >
                {f.k}
              </div>
              <div
                className="mt-6 text-lg font-medium"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {f.t}
              </div>
              <div className="mt-2 text-xs leading-relaxed opacity-70">
                {f.d}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed services list */}
        <div className="grid md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-3xl overflow-hidden">
          {SERVICES.map((s, i) => (
            <motion.a
              href="#contact"
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
              className="ft-service-card bg-white p-8 md:p-10 group relative overflow-hidden"
              data-testid={`service-${i}`}
            >
              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-xs text-neutral-400"
                  style={{ fontFamily: '"Space Grotesk", monospace' }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center group-hover:bg-[#F26B21] group-hover:border-[#F26B21] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl text-neutral-900 leading-tight"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {s.t}
              </h3>
              <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                {s.d}
              </p>
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F26B21] group-hover:w-full transition-all duration-700" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
