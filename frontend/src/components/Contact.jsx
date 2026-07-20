import React from "react";
import { motion } from "framer-motion";
import { BRAND } from "../data/site";
import { MapPin, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      data-testid="contact"
      className="relative py-32 md:py-40 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
              — Visit · 06
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl leading-[0.95] text-neutral-900"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              A workshop in
              <br />
              <em className="italic text-[#F26B21]">Santosh Nagar.</em>
            </motion.h2>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-neutral-500 mb-1">
                    Office
                  </div>
                  <div className="text-neutral-900 leading-relaxed">
                    {BRAND.address.line1}
                    <br />
                    {BRAND.address.line2}
                    <br />
                    {BRAND.address.city} — {BRAND.address.pin},{" "}
                    {BRAND.address.state}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-neutral-500 mb-1">
                    Phone — {BRAND.contact}
                  </div>
                  {BRAND.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:+91${p}`}
                      className="block text-neutral-900 hover:text-[#F26B21] transition-colors"
                      data-testid={`contact-phone-${p}`}
                    >
                      +91 {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-neutral-500 mb-1">
                    Email
                  </div>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-neutral-900 hover:text-[#F26B21] transition-colors"
                    data-testid="contact-email"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-neutral-500 mb-1">
                    Hours
                  </div>
                  <div className="text-neutral-900">{BRAND.hours}</div>
                </div>
              </div>
            </div>

            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-whatsapp-btn"
              className="mt-12 inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-[#F26B21] transition-colors group"
            >
              Start a conversation
              <span className="w-9 h-9 rounded-full bg-[#F26B21] group-hover:bg-white group-hover:text-[#F26B21] text-white flex items-center justify-center transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="relative rounded-[28px] overflow-hidden border border-neutral-200 aspect-[4/5] md:aspect-[3/4] bg-neutral-100">
              <iframe
                title="Fastech Solutions location"
                src={BRAND.mapEmbed}
                loading="lazy"
                className="w-full h-full grayscale-[0.4] contrast-[1.05]"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] uppercase tracking-widest text-neutral-800">
                  17.35°N · 78.50°E
                </div>
                <div className="px-3 py-1 rounded-full bg-[#F26B21] text-white text-[10px] uppercase tracking-widest">
                  Open today
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
