import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showReveal, setShowReveal] = useState(false);

  useEffect(() => {
    // Slower, cinematic load curve
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowReveal(true);
            setTimeout(() => {
              setLoading(false);
              if (onComplete) onComplete();
            }, 1800); // Hold the reveal for 1.8s
          }, 300); // Pause at 100 for 0.3s
          return 100;
        }
        // Ease-out progress simulation
        const increment = prev > 80 ? 1 : prev > 50 ? 3 : 5;
        return Math.min(100, prev + increment);
      });
    }, 45);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="pl-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Ambient Glows */}
          <div className="pl-bg-glow" />
          <div className="pl-bg-glow pl-bg-glow--2" />

          {/* Scan line sweep */}
          <motion.div
            className="pl-scanline"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 0.5 }}
          />

          <div className="pl-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', position: 'relative' }}>
            
            {/* Structural HUD Elements (Always visible during loading) */}
            <div className="pl-corner pl-corner-tl" />
            <div className="pl-corner pl-corner-tr" />
            <div className="pl-corner pl-corner-bl" />
            <div className="pl-corner pl-corner-br" />

            <AnimatePresence mode="wait">
              {!showReveal ? (
                // --- PHASE 1: HACKER TERMINAL COUNTER ---
                <motion.div
                  key="counter"
                  className="pl-cinematic-counter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)', transition: { duration: 0.5, ease: 'power2.in' } }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '600px' }}
                >
                  
                  {/* Decorative Spinning Ring */}
                  <div className="pl-hud-ring">
                    <svg viewBox="0 0 100 100" width="120" height="120" className="pl-spin-svg">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(245, 183, 54, 0.2)" strokeWidth="1" strokeDasharray="4 8" />
                      <circle cx="50" cy="50" r="35" fill="none" stroke="#F5B736" strokeWidth="2" strokeDasharray="30 20 10 40" strokeLinecap="round" className="pl-spin-inner" />
                    </svg>
                    <div className="pl-ring-center">
                      <span className="pl-counter-num">{progress}</span>
                    </div>
                  </div>

                  <div className="pl-sys-logs">
                    {progress < 30 ? "> BOOTING KERNEL..." : progress < 60 ? "> ESTABLISHING SECURE CONNECTION..." : progress < 90 ? "> LOADING BATTLEFIELDS..." : "> SYSTEM ONLINE"}
                  </div>
                  
                  {/* Premium Segmented Progress Bar */}
                  <div className="pl-progress-track">
                    <div className="pl-progress-fill" style={{ width: `${progress}%` }} />
                    {/* Tick marks overlay */}
                    <div className="pl-progress-ticks" />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '8px' }}>
                    <span className="pl-progress-label">SYS.LOAD</span>
                    <span className="pl-progress-label">v2.0.26</span>
                  </div>
                </motion.div>
              ) : (
                // --- PHASE 2: GLOWING BRAND REVEAL ---
                <motion.div
                  key="reveal"
                  className="pl-cinematic-reveal"
                  initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                  <motion.div 
                    className="pl-reveal-brand"
                    animate={{ textShadow: ['0 0 0px #F5B736', '0 0 40px #F5B736', '0 0 20px #F5B736'] }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                  >
                    <span className="pl-reveal-code">CODE</span>
                    <span className="pl-reveal-yudh">YUDH</span>
                  </motion.div>
                  <motion.p
                    className="pl-reveal-tagline"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    THE ULTIMATE HACKATHON
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Flash burst on final exit */}
          {showReveal && (
            <motion.div
              className="pl-burst"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 8], opacity: [0, 0.8, 0] }}
              transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
