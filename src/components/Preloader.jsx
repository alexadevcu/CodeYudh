import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoArrow from '../assets/arrow.png';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setDone(true);
            setTimeout(() => {
              setLoading(false);
              if (onComplete) onComplete();
            }, 900);
          }, 300);
          return 100;
        }
        return Math.min(100, prev + Math.floor(Math.random() * 10) + 4);
      });
    }, 85);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="pl-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Radial background glow */}
          <div className="pl-bg-glow" />
          <div className="pl-bg-glow pl-bg-glow--2" />

          {/* Scan line sweep */}
          <motion.div
            className="pl-scanline"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 0.5 }}
          />

          {/* Corner brackets */}
          <div className="pl-corner pl-corner--tl" />
          <div className="pl-corner pl-corner--tr" />
          <div className="pl-corner pl-corner--bl" />
          <div className="pl-corner pl-corner--br" />

          {/* Main content */}
          <div className="pl-content">

            {/* Giant Arrow Emblem */}
            <motion.div
              className="pl-emblem"
              initial={{ scale: 0, opacity: 0, rotate: -90 }}
              animate={done
                ? { scale: [1, 1.4, 0], opacity: [1, 1, 0], rotate: [0, 10, 0] }
                : { scale: 1, opacity: 1, rotate: 0 }
              }
              transition={done
                ? { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                : { duration: 0.9, delay: 0.1, type: 'spring', stiffness: 100, damping: 14 }
              }
            >
              {/* Spinning rings */}
              <div className="pl-ring pl-ring--1" />
              <div className="pl-ring pl-ring--2" />
              <div className="pl-ring pl-ring--3" />
              {/* Glow orb */}
              <div className="pl-orb-glow" />
              {/* Arrow image — large */}
              <img src={LogoArrow} alt="Code Yudh" className="pl-arrow-img" />
            </motion.div>

            {/* Brand name */}
            <motion.div
              className="pl-brand"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: done ? 0 : 1, y: done ? -10 : 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="pl-brand-code">CODE</span>
              <span className="pl-brand-yudh">YUDH</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="pl-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: done ? 0 : 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              CHANDIGARH UNIVERSITY · NATIONAL HACKATHON 2026
            </motion.p>

            {/* Progress section */}
            <motion.div
              className="pl-progress-wrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: done ? 0 : 1, y: done ? 10 : 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="pl-bar-track">
                <motion.div
                  className="pl-bar-fill"
                  style={{ width: `${progress}%` }}
                />
                {/* Moving glow dot on bar */}
                <motion.div
                  className="pl-bar-dot"
                  style={{ left: `${progress}%` }}
                />
              </div>
              <div className="pl-percent-row">
                <span className="pl-percent-label">LOADING</span>
                <span className="pl-percent-num">{progress}%</span>
              </div>
            </motion.div>

          </div>

          {/* Flash burst on complete */}
          {done && (
            <motion.div
              className="pl-burst"
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
