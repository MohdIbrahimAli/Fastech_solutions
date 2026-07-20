import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";
import SmoothScroll from "./components/SmoothScroll";
import FloatingActions from "./components/FloatingActions";

// Below-the-fold: lazy so hero mounts instantly after preloader
const Marquee = lazy(() => import("./components/Marquee"));
const Manifesto = lazy(() => import("./components/Manifesto"));
const Products = lazy(() => import("./components/Products"));
const Services = lazy(() => import("./components/Services"));
const Projects = lazy(() => import("./components/Projects"));
const WhyUs = lazy(() => import("./components/WhyUs"));
const CTA = lazy(() => import("./components/CTA"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [ready]);

  return (
    <div className="App bg-white text-neutral-900" data-testid="app-root">
      <Preloader onComplete={() => setReady(true)} />

      {ready && <SmoothScroll />}
      <Cursor />

      <Nav />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[40vh]" />}>
          <Marquee />
          <Manifesto />
          <Products />
          <Services />
          <Projects />
          <WhyUs />
          <CTA />
          <Contact />
          <Footer />
        </Suspense>
      </main>
      <FloatingActions />
    </div>
  );
}

export default App;
