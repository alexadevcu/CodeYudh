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
    <header className={`premium-nav-container ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="premium-nav">
        {/* Left Logo */}
        <a href="#home" className="nav-logo-brand">
          <img src={CULogo} alt="Chandigarh University" className="nav-cu-logo" />
        </a>
        
        {/* Center Links */}
        <div className="nav-links-center desktop-only">
          <a href="#about" className="nav-link-item">About</a>
          <a href="#domains" className="nav-link-item">Domains</a>
          <a href="#rewards" className="nav-link-item">Rewards</a>
          <a href="#sponsors" className="nav-link-item">Sponsors</a>
          <a href="#faq" className="nav-link-item">FAQ</a>
          <a href="#contact" className="nav-link-item">Contact</a>
        </div>

        {/* Right Actions */}
        <div className="nav-actions-right desktop-only">
          <a href="https://unstop.com/p/code-yudh-battle-of-codes-chandigarh-university-cu-ajitgarh-punjab-1762892" target="_blank" rel="noopener noreferrer" className="nav-cta-btn">
            REGISTER
          </a>
        </div>

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

        {/* Mobile Dropdown */}
        <div className={`mobile-nav-dropdown ${menuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link-item" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#domains" className="nav-link-item" onClick={() => setMenuOpen(false)}>Domains</a>
          <a href="#rewards" className="nav-link-item" onClick={() => setMenuOpen(false)}>Rewards</a>
          <a href="#sponsors" className="nav-link-item" onClick={() => setMenuOpen(false)}>Sponsors</a>
          <a href="#faq" className="nav-link-item" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#contact" className="nav-link-item" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="https://unstop.com/p/code-yudh-battle-of-codes-chandigarh-university-cu-ajitgarh-punjab-1762892" target="_blank" rel="noopener noreferrer" className="nav-cta-btn" style={{marginTop: '10px'}}>
            REGISTER
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
