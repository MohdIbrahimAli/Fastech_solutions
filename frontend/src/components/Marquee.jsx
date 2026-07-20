import React from "react";
import { BRANDS } from "../data/site";

export default function Marquee() {
  const items = [...BRANDS, ...BRANDS, ...BRANDS];
  return (
    <section
      data-testid="marquee"
      className="relative py-24 bg-white border-y border-neutral-200 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-8 mb-14">
        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
            — Ecosystem
          </div>
          <h3
            className="text-3xl md:text-4xl leading-tight text-neutral-900"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Authorised gear from{" "}
            <em className="italic text-[#F26B21]">the names that matter.</em>
          </h3>
        </div>
        <div className="md:col-span-6 md:col-start-7 text-neutral-600 text-[15px] leading-relaxed self-end">
          Every component we install carries a manufacturer&apos;s paper trail. If it
          isn&apos;t genuine, it doesn&apos;t get past the door.
        </div>
      </div>

      <div className="ft-marquee relative">
        <div className="ft-marquee-track">
          {items.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-10 px-8 shrink-0"
            >
              <span
                className="text-4xl md:text-6xl text-neutral-900"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontStyle: i % 3 === 0 ? "italic" : "normal",
                }}
              >
                {b}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#F26B21]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
