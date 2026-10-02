import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Tracks from './components/Tracks';
import Tech from './components/Tech';
import Evaluation from './components/Evaluation';
import Participate from './components/Participate';
import Rewards from './components/Rewards';
import Outcomes from './components/Outcomes';
import Sponsors from './components/Sponsors';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {


  useEffect(() => {
    // Initialize Lenis for smooth scrolling ONLY on desktop (disable on mobile for native performance)
    let lenis;
    if (window.innerWidth > 768) {
      lenis = new Lenis({
        lerp: 0.08, // Slightly lower lerp for a "heavier", smoother momentum feel
        wheelMultiplier: 0.85, // Reduced from 1.2 to 0.85 to slow down the raw scroll speed
        smoothWheel: true,
        smoothTouch: false,
        syncTouch: false,
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }

    return () => {
      if (lenis) {
        gsap.ticker.remove(lenis.raf);
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div className="global-bg"></div>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Tracks />
        <Tech />
        <Evaluation />
        <Participate />
        <Rewards />
        <Sponsors />
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
