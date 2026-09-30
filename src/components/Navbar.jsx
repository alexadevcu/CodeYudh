import React, { useState, useEffect } from 'react';
import CULogo from '../assets/CU Logo red &white.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`floating-nav-container ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="floating-nav-pill">
        <a href="#home" className="nav-logo-brand">
          <img src={CULogo} alt="Chandigarh University" className="nav-cu-logo" />
          <div className="nav-logo-divider" />
          <span className="nav-logo-text">CODE <span className="logo-accent">YUDH</span></span>
        </a>
        
        <div className="nav-links-center">
          <a href="#about" className="nav-link-item">About</a>
          <a href="#timeline" className="nav-link-item">Timeline</a>
          <a href="#tracks" className="nav-link-item">Tracks</a>
          <a href="#evaluation" className="nav-link-item">Evaluation</a>
          <a href="#faq" className="nav-link-item">FAQ</a>
        </div>

        <div className="nav-actions">
          <a href="https://unstop.com/" target="_blank" rel="noopener noreferrer" className="nav-cta-btn">
            <span>REGISTER</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
