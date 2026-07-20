import React, { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...pos };

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dot.current)
        dot.current.style.transform = `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`;
    };
    const raf = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18;
      ringPos.y += (pos.y - ringPos.y) * 0.18;
      if (ring.current)
        ring.current.style.transform = `translate3d(${ringPos.x - 16}px, ${ringPos.y - 16}px, 0)`;
      requestAnimationFrame(raf);
    };
    raf();
    window.addEventListener("mousemove", move);

    const enter = (e) => {
      if (
        e.target.closest &&
        e.target.closest("a, button, [data-cursor='hover'], input, textarea")
      )
        setHover(true);
    };
    const leave = (e) => {
      if (
        e.target.closest &&
        e.target.closest("a, button, [data-cursor='hover'], input, textarea")
      )
        setHover(false);
    };
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={dot} className="ft-cursor-dot" />
      <div
        ref={ring}
        className={`ft-cursor-ring ${hover ? "ft-cursor-ring-hover" : ""}`}
      />
    </>
  );
}
