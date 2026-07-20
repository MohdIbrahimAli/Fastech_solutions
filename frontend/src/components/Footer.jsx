import React from "react";
import Logo from "./Logo";
import { BRAND, NAV } from "../data/site";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative bg-[#0B0B0C] text-white pt-24 pb-10 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[#F26B21]" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <Logo width={200} color="#ffffff" accent="#F26B21" />
            <p className="mt-8 max-w-md text-white/60 leading-relaxed">
              Fifteen years, one city. Sales, installation and honest support
              for the systems that keep Hyderabad&apos;s homes and businesses
              running.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-5">
              Sitemap
            </div>
            <ul className="space-y-3 text-white/80">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-[#F26B21] transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-5">
              Services
            </div>
            <ul className="space-y-3 text-white/80">
              <li>CCTV Installation</li>
              <li>Networking</li>
              <li>UPS Systems</li>
              <li>Access Control</li>
              <li>AMC</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-5">
              Reach
            </div>
            <div className="space-y-3 text-white/80 text-sm">
              <div>{BRAND.address.line1}</div>
              <div>{BRAND.address.line2}</div>
              <div>
                {BRAND.address.city} — {BRAND.address.pin}
              </div>
              <div className="pt-3">
                {BRAND.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:+91${p}`}
                    className="block hover:text-[#F26B21]"
                  >
                    +91 {p}
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${BRAND.email}`}
                className="block hover:text-[#F26B21]"
              >
                {BRAND.email}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-white/40 text-xs">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. Crafted in Hyderabad.
          </div>
          <div>
            Securing Businesses. Powering Technology. — Est {BRAND.since}
          </div>
        </div>
      </div>
    </footer>
  );
}
