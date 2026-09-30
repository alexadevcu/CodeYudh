import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Tracks from './components/Tracks';
import Evaluation from './components/Evaluation';
import Outcomes from './components/Outcomes';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const bgRef = useRef(null);

  useEffect(() => {
    // Subtle parallax for the global background
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        y: '20vh', // Moves the background slightly down as you scroll down
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5, // Smooth scrubbing
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className="global-bg" ref={bgRef}></div>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Tracks />
        <Evaluation />
        <Outcomes />
        <Partners />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
