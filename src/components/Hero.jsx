import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import CloudBg from '../assets/cloud.png';
import Guy1 from '../assets/guy1.png';
import LogoArrow from '../assets/arrow.png';
import CULogo from '../assets/CU Logo red &white.png';

const MagneticButton = ({ children, className, href, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    x.set((clientX - (left + width / 2)) * 0.3);
    y.set((clientY - (top + height / 2)) * 0.3);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const btn = (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-block' }}>
        {btn}
      </a>
    );
  }
  return btn;
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-10-27T09:00:00+05:30').getTime();
    const tick = () => {
      const diff = targetDate - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        });
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  };

  const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section id="home" className="hero-section" onMouseMove={handleMouseMove}>

      {/* ── Background ── */}
      <div className="hero-bg-wrapper">
        <motion.img
          src={CloudBg}
          alt=""
          className="hero-cloud-bg"
          animate={{ scale: 1.06, x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <div className="hero-vignette-overlay" />
        <div className="hero-grid-pattern" />
        <div className="hero-ambient-glow" />
        {/* Extra side vignettes */}
        <div className="hero-side-vignette" />
      </div>

      {/* ── Split layout wrapper ── */}
      <div className="hero-split">

        {/* LEFT — Text content */}
        <div className="hero-left">

          {/* Eyebrow — slim decorated line instead of pill */}
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="hero-eyebrow-dot" />
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">CHANDIGARH UNIVERSITY</span>
            <span className="hero-eyebrow-sep">×</span>
            <span className="hero-eyebrow-text">NATIONAL HACKATHON</span>
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-dot" />
          </motion.div>

          {/* Arrow + Title stack */}
          <div className="hero-title-group">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <span className="hero-title-code">CODE</span>
              <span className="hero-title-yudh">YUDH</span>
            </motion.h1>

            {/* Subtitle + Date stacked below title */}
            <motion.div
              className="hero-sub-block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <p className="hero-subtitle">THE ULTIMATE 24-HOUR BATTLE OF CODE &amp; INNOVATION</p>
              <div className="hero-date-line">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span>OCT 27 – 28, 2026 &nbsp;·&nbsp; CHANDIGARH UNIVERSITY</span>
              </div>
            </motion.div>
          </div>

          {/* Countdown */}
          <motion.div
            className="hero-countdown"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            <p className="hero-countdown-label">HACKATHON BEGINS IN</p>
            <div className="hero-countdown-grid">
              {[
                { val: pad(timeLeft.days), unit: 'DAYS' },
                { val: pad(timeLeft.hours), unit: 'HRS' },
                { val: pad(timeLeft.minutes), unit: 'MIN' },
                { val: pad(timeLeft.seconds), unit: 'SEC' },
              ].map(({ val, unit }, i) => (
                <React.Fragment key={unit}>
                  {i > 0 && <span className="hero-cd-sep">:</span>}
                  <div className="hero-cd-box">
                    <span className="hero-cd-num">{val}</span>
                    <span className="hero-cd-unit">{unit}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <MagneticButton className="btn-gold" href="https://unstop.com/">
              <span className="btn-shimmer" />
              <span>REGISTER ON UNSTOP</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </MagneticButton>
            <MagneticButton className="btn-ghost" onClick={() => scrollToSection('tracks')}>
              EXPLORE TRACKS
            </MagneticButton>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.05 }}
          >
            <div className="hero-stat">
              <span className="hero-stat-val">24H</span>
              <span className="hero-stat-lbl">Non-Stop Coding</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-val">OCT 27</span>
              <span className="hero-stat-lbl">Hackathon Begins</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-val">6</span>
              <span className="hero-stat-lbl">Battlefields</span>
            </div>
          </motion.div>

          {/* Organizer credit */}
          <motion.div
            className="hero-organizer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="hero-organizer-text">
              <span className="hero-organizer-name">Organized by Department of CSE – Takshashila &nbsp;•&nbsp; Chandigarh University</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Warrior character */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: mousePos.x * 0.5 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        >
          {/* Decorative ring behind character */}
          <div className="hero-char-ring" />
          <div className="hero-char-ring hero-char-ring--2" />
          <img src={Guy1} alt="Code Yudh Warrior" className="hero-char-img" />
          <div className="hero-char-glow" />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <motion.div
          className="hero-scroll-line"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span>SCROLL</span>
      </motion.div>

    </section>
  );
};

export default Hero;
