import React from "react";
import { motion } from "framer-motion";
import { WHY, TESTIMONIALS } from "../data/site";
import { Star } from "lucide-react";

export default function WhyUs() {
  return (
    <section
      data-testid="why-us"
      className="relative py-32 md:py-40 bg-[#F7F5F1] overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
              — Why us · 05
            </div>
            <h2
              className="text-5xl md:text-7xl leading-[0.95] text-neutral-900"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Six reasons
              <br />
              people <em className="italic text-[#F26B21]">stay.</em>
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7 grid sm:grid-cols-2 gap-4">
            {WHY.map((w, i) => (
              <motion.div
                key={w.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="p-6 bg-white rounded-2xl border border-neutral-200/60 hover:border-[#F26B21]/60 transition-colors"
              >
                <div
                  className="text-xs text-[#F26B21] mb-3"
                  style={{ fontFamily: '"Space Grotesk", monospace' }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="text-lg text-neutral-900 leading-snug"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {w.t}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {w.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-neutral-200/70 relative overflow-hidden"
              data-testid={`testimonial-${i}`}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star
                    key={k}
                    className="w-4 h-4 fill-[#F26B21] text-[#F26B21]"
                  />
                ))}
              </div>
              <blockquote
                className="text-lg md:text-xl text-neutral-900 leading-snug"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                “{t.q}”
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-neutral-200">
                <div className="text-neutral-900 text-sm font-medium">
                  {t.n}
                </div>
                <div className="text-neutral-500 text-xs mt-0.5">{t.r}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
