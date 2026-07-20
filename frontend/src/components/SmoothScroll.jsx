import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth anchor links
    const handler = (e) => {
      const link = e.target.closest("a[href^='#']");
      if (!link) return;
      const id = link.getAttribute("href");
      if (id && id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -40, duration: 1.2 });
        }
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
      lenis.destroy();
    };
  }, []);

  return null;
}
