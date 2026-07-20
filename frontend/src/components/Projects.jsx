import React from "react";
import { motion } from "framer-motion";
import { PROJECTS, STATS } from "../data/site";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf;
    const step = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setV(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref} style={{ fontFamily: '"Space Grotesk", monospace' }}>
      {v}
      {suffix}
    </span>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      data-testid="projects"
      className="relative py-32 md:py-40 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-20 items-end">
          <div className="md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
              — Selected work · 04
            </div>
            <h2
              className="text-5xl md:text-7xl leading-[0.95] text-neutral-900"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Fifteen years,
              <br />
              one <em className="italic text-[#F26B21]">city</em>, thousands of
              rooms wired.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 grid grid-cols-2 gap-6">
            {STATS.map((s) => (
              <div key={s.l}>
                <div className="text-4xl md:text-5xl text-neutral-900 font-medium">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="text-[11px] uppercase tracking-widest text-neutral-500 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Masonry-ish grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {PROJECTS.map((p, i) => {
            const span =
              i === 0
                ? "md:col-span-4 md:row-span-2"
                : i === 3
                  ? "md:col-span-4"
                  : "md:col-span-2";
            const aspect =
              i === 0 ? "aspect-[4/3.6]" : i === 3 ? "aspect-[16/9]" : "aspect-[4/5]";
            return (
              <motion.a
                href="#contact"
                key={p.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: (i % 3) * 0.1 }}
                className={`group relative overflow-hidden rounded-[28px] bg-neutral-900 ${span} ${aspect}`}
                data-testid={`project-${i}`}
              >
                <img
                  src={p.img}
                  alt={p.t}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.08]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-white text-[10px] uppercase tracking-widest">
                  {p.tag}
                </div>
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-white/60 text-[11px] uppercase tracking-widest mb-2">
                      {p.loc}
                    </div>
                    <h3
                      className="text-white text-2xl md:text-3xl leading-tight"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {p.t}
                    </h3>
                    <p className="text-white/70 text-sm mt-2 max-w-md">{p.d}</p>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-lg border border-white/25 flex items-center justify-center shrink-0 group-hover:bg-[#F26B21] group-hover:border-[#F26B21] transition-all">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
