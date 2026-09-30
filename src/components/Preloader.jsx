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

          <div className="pl-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
            
            <AnimatePresence mode="wait">
              {!showReveal ? (
                // --- PHASE 1: GIANT COUNTER ---
                <motion.div
                  key="counter"
                  className="pl-cinematic-counter"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)', transition: { duration: 0.6, ease: 'power2.in' } }}
                >
                  <span className="pl-counter-num">{progress}</span>
                  <span className="pl-counter-pct">%</span>
                  <div className="pl-counter-label">INITIALIZING BATTLEFIELD</div>
                  
                  {/* Subtle progress line below counter */}
                  <div className="pl-minimal-bar">
                    <motion.div className="pl-minimal-fill" style={{ width: `${progress}%` }} />
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
              animate={{ scale: [0, 5], opacity: [0, 0.5, 0] }}
              transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
