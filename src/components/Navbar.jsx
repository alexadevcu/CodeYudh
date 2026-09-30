import React, { useState, useEffect } from 'react';
import CULogo from '../assets/CU Logo red &white.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        
        <div className={`nav-links-center ${menuOpen ? 'nav-links-mobile-active' : ''}`}>
          <a href="#about" className="nav-link-item" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#timeline" className="nav-link-item" onClick={() => setMenuOpen(false)}>Timeline</a>
          <a href="#tracks" className="nav-link-item" onClick={() => setMenuOpen(false)}>Tracks</a>
          <a href="#evaluation" className="nav-link-item" onClick={() => setMenuOpen(false)}>Evaluation</a>
          <a href="#outcomes" className="nav-link-item" onClick={() => setMenuOpen(false)}>Outcomes</a>
          <a href="#faq" className="nav-link-item" onClick={() => setMenuOpen(false)}>FAQ</a>
        </div>

        <div className="nav-actions">
          <a href="https://unstop.com/" target="_blank" rel="noopener noreferrer" className="nav-cta-btn">
            <span>REGISTER</span>
          </a>
          <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
