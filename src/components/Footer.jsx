import React, { useState } from 'react';
import CULogo from '../assets/CU Logo red &white.png';

const AncientOrnament = () => (
  <img src="/footer-divider.png" alt="Ancient Divider" className="ancient-ornament" />
);

const Footer = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setMousePos({ x, y });
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <footer 
      className="footer" 
      onMouseMove={handleMouseMove} 
      style={{ '--mouse-x': mousePos.x, '--mouse-y': mousePos.y }}
    >
      <div className="footer-yudh-glow"></div>
      
      {/* Top Ancient Divider */}
      <div className="ancient-divider absolute-top">
        <AncientOrnament />
      </div>
      
      <div className="footer-inner">
        {/* Brand */}
        <div>
          <div className="footer-cu-brand">
            <img src={CULogo} alt="Chandigarh University" className="footer-cu-logo" />
            <div className="footer-cu-divider" />
            <div>
              <div className="footer-brand-name">Code Yudh</div>
              <div className="footer-brand-sub">The Ultimate Battle</div>
            </div>
          </div>
          <p className="footer-desc">
            A 24-hour software development hackathon organized by the Department of Computer Science and Engineering, Chandigarh University. Enter the arena. Build. Solve. Innovate.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="footer-heading">Chronicles</div>
          <ul className="footer-links">
            <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="interactive-link">About</a></li>
            <li><a href="#timeline" onClick={(e) => handleScrollTo(e, 'timeline')} className="interactive-link">Timeline</a></li>
            <li><a href="#tracks" onClick={(e) => handleScrollTo(e, 'tracks')} className="interactive-link">Battle Tracks</a></li>
            <li><a href="#evaluation" onClick={(e) => handleScrollTo(e, 'evaluation')} className="interactive-link">Evaluation</a></li>
            <li><a href="#outcomes" onClick={(e) => handleScrollTo(e, 'outcomes')} className="interactive-link">Rules of War</a></li>
            <li><a href="#faq" onClick={(e) => handleScrollTo(e, 'faq')} className="interactive-link">Oracle (FAQ)</a></li>
            <li><a href="https://unstop.com/" target="_blank" rel="noopener noreferrer" className="interactive-link">Join the Yudh</a></li>
          </ul>
        </div>

        {/* Event Info */}
        <div>
          <div className="footer-heading">War Details</div>
          <ul className="footer-links" style={{ gap: '12px' }}>
            <li><span className="static-text">27–28 October 2026</span></li>
            <li><span className="static-text">Kurukshetra (Chandigarh University)</span></li>
            <li><span className="static-text">Battalions of 3–4 Warriors</span></li>
            <li><span className="static-text">Undergraduate Engineering Students</span></li>
            <li><span className="static-text">Hybrid Format (Online + Offline)</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Code Yudh – The Ultimate Battle of Codes. Chandigarh University.</p>
        <p className="footer-tagline">Conquer · The · Code</p>
      </div>
    </footer>
  );
};

export default Footer;
