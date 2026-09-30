import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const MagneticButton = ({ children, className, href }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.4);
    y.set((clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
        style={{ x: mouseXSpring, y: mouseYSpring }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    </a>
  );
};

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
          <source src="/b3.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      {/* Magnetic Register Button */}
      <motion.div
        style={{ position: 'absolute', bottom: 36, right: 36, zIndex: 10 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <MagneticButton className="btn-ancient" href="https://unstop.com/">
          <span className="btn-text">Register</span>
        </MagneticButton>
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
