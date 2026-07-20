import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Keyboard } from "swiper/modules";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PRODUCTS, BRAND } from "../data/site";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Products() {
  const prev = useRef(null);
  const next = useRef(null);

  return (
    <section
      id="products"
      data-testid="products"
      className="relative py-32 md:py-40 bg-[#F7F5F1] overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-8 mb-16">
        <div className="md:col-span-6">
          <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
            — Catalogue · 02
          </div>
          <h2
            className="text-5xl md:text-7xl leading-[0.95] text-neutral-900"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            The <em className="italic text-[#F26B21]">stack</em>
            <br />
            we install.
          </h2>
        </div>
        <div className="md:col-span-4 md:col-start-8 self-end text-neutral-600 text-[15px] leading-relaxed">
          Every unit ships from an authorised distributor. Prices are itemised
          on paper. Warranty is honoured on site.
        </div>
      </div>

      <div className="relative">
        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation, Keyboard]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          keyboard={{ enabled: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 220,
            modifier: 1.2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          navigation={{ prevEl: prev.current, nextEl: next.current }}
          onBeforeInit={(sw) => {
            sw.params.navigation.prevEl = prev.current;
            sw.params.navigation.nextEl = next.current;
          }}
          className="!py-4"
        >
          {PRODUCTS.map((p) => (
            <SwiperSlide
              key={p.id}
              style={{ width: "min(420px, 84vw)" }}
              className="!h-auto"
            >
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="ft-product group relative bg-white rounded-[28px] overflow-hidden border border-neutral-200/70 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.2)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/85 backdrop-blur text-[10px] uppercase tracking-widest text-neutral-800">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className="text-2xl text-neutral-900"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {p.name}
                    </h3>
                    <a
                      href={BRAND.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`product-inquire-${p.id}`}
                      className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:bg-[#F26B21] transition-colors"
                      aria-label={`Inquire about ${p.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mx-auto max-w-[1400px] px-6 md:px-10 mt-10 flex items-center justify-between">
          <div className="text-sm text-neutral-500">
            Drag, or use the arrows —
          </div>
          <div className="flex items-center gap-3">
            <button
              ref={prev}
              data-testid="products-prev"
              aria-label="Previous product"
              className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              ref={next}
              data-testid="products-next"
              aria-label="Next product"
              className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-[#F26B21] transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
