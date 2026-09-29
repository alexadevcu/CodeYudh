import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowArrow(window.scrollY < 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Video Background */}
      <div className="hero-video-container">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/bg2.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      {/* Register Button */}
      <motion.div
        style={{ position: 'absolute', bottom: 36, right: 36, zIndex: 10 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a href="https://unstop.com/" target="_blank" rel="noopener noreferrer">
          <button className="btn-ancient">Register for Battle</button>
        </a>
      </motion.div>

      {/* Scroll Down Arrow */}
      <AnimatePresence>
        {showArrow && (
          <motion.button
            className="hero-scroll-arrow"
            onClick={scrollDown}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
            transition={{ duration: 0.6, delay: 1.2 }}
            aria-label="Scroll down"
          >
            <span className="hero-scroll-arrow__ring" />
            <svg className="hero-scroll-arrow__chevron" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
