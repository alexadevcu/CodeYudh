import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Tech from './components/Tech';
import Evaluation from './components/Evaluation';
import Participate from './components/Participate';
import Rewards from './components/Rewards';
import Outcomes from './components/Outcomes';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const bgRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

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

    return () => {
      ctx.revert();
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <div className="global-bg" ref={bgRef}></div>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Tech />
        <Evaluation />
        <Participate />
        <Rewards />
        <Partners />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
