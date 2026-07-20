import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BRAND } from "../data/site";
import { ArrowUpRight, PhoneCall } from "lucide-react";

const heroLines = [
  "Smart",
  "Technology",
  "for Homes &",
  "Businesses.",
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const parallaxImg = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (!parallaxImg.current) return;
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 20;
      const y = (e.clientY / h - 0.5) * 20;
      parallaxImg.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${-y * 0.3}deg) rotateY(${x * 0.3}deg)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100vh] pt-32 pb-24 overflow-hidden bg-white"
      data-testid="hero"
    >
      {/* Editorial background numerals */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-24 top-28 text-[22vw] leading-none font-black text-neutral-100 select-none pointer-events-none"
        aria-hidden="true"
      >
        20
      </motion.div>
      <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-center relative">
        {/* LEFT — kinetic type */}
        <motion.div style={{ y: y1 }} className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 pl-3 pr-4 py-1.5 rounded-full border border-neutral-200 bg-white/60 backdrop-blur"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F26B21]" />
            <span
              className="text-[11px] tracking-[0.22em] uppercase text-neutral-700"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Hyderabad · Since {BRAND.since}
            </span>
          </motion.div>

          <h1
            className="ft-hero-heading font-serif"
            style={{
              fontFamily: '"Playfair Display", serif',
              lineHeight: 0.95,
            }}
          >
            {heroLines.map((line, li) => (
              <span key={li} className="ft-mask-line block overflow-hidden">
                <motion.span
                  initial={{ y: "110%", rotate: 3 }}
                  animate={{ y: "0%", rotate: 0 }}
                  transition={{
                    delay: 0.45 + li * 0.14,
                    duration: 0.9,
                    ease: [0.7, 0, 0.2, 1],
                  }}
                  className="inline-block will-change-transform"
                >
                  {li === 0 ? (
                    <em className="italic text-[#F26B21]">Smart</em>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="mt-10 max-w-lg text-neutral-600 text-[15px] md:text-lg leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Sales, installation, maintenance and support for CCTV, computers,
            networking, UPS systems and access control — engineered on-site
            across Hyderabad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#products"
              data-testid="hero-cta-products"
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-all"
            >
              Explore Products
              <span className="w-9 h-9 rounded-full bg-[#F26B21] flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
            <a
              href={BRAND.callHref}
              data-testid="hero-cta-call"
              className="inline-flex items-center gap-2 text-neutral-900 text-sm font-medium border-b border-neutral-900 pb-1 hover:text-[#F26B21] hover:border-[#F26B21] transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              Request a site visit
            </a>
          </motion.div>

          {/* meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { n: "15+", l: "Years" },
              { n: "1200+", l: "Installs" },
              { n: "24/7", l: "Support" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="text-3xl font-medium text-neutral-900"
                  style={{ fontFamily: '"Space Grotesk", monospace' }}
                >
                  {s.n}
                </div>
                <div className="text-[11px] uppercase tracking-widest text-neutral-500 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — hero image with parallax + clipped frame */}
        <div className="lg:col-span-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.6, 0, 0.2, 1] }}
            className="relative ft-tilt-wrap"
          >
            <div
              ref={parallaxImg}
              className="relative w-full aspect-[4/5] max-w-[520px] mx-auto rounded-[36px] overflow-hidden bg-neutral-900 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.35)]"
              style={{ transformStyle: "preserve-3d", transition: "transform 0.2s" }}
            >
              <img
                src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="CCTV surveillance camera on modern building"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?auto=format&fit=crop&w=1200&q=80";
                }}
              />
              {/* Spotlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-0 spotlight-orange pointer-events-none" />

              {/* Caption chip */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div
                    className="text-white/70 text-[10px] uppercase tracking-[0.25em]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Case No. 042 — Retail Chain
                  </div>
                  <div
                    className="text-white text-xl mt-1"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    16 IP cameras · 3 branches
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Floating small chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -left-8 top-10 hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-neutral-200 rounded-2xl px-4 py-3 shadow-xl"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500">
                  Live install
                </div>
                <div className="text-sm font-medium text-neutral-900">
                  Banjara Hills · Today
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.6 }}
              className="absolute -right-4 bottom-16 hidden md:block bg-[#F26B21] text-white rounded-2xl px-5 py-4 shadow-2xl"
            >
              <div
                className="text-3xl font-medium"
                style={{ fontFamily: '"Space Grotesk", monospace' }}
              >
                4.9<span className="text-lg opacity-70">/5</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest opacity-80">
                Google · 210 reviews
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-6 md:left-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-neutral-500"
      >
        <span className="w-8 h-[1px] bg-neutral-400" /> Scroll
      </motion.div>
    </section>
  );
}
