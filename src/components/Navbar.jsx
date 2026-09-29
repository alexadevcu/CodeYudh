import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="floating-nav" style={{ opacity: scrolled ? 1 : 0.9 }}>
      <span className="nav-logo">Code Yudh</span>
      <a href="#about">About</a>
      <a href="#timeline">Timeline</a>
      <a href="#tracks">Tracks</a>
      <a href="#faq">FAQ</a>
      <span className="nav-cta-wrap">
        <a href="https://unstop.com/" target="_blank" rel="noopener noreferrer" className="nav-cta">Register</a>
      </span>
    </nav>
  );
};

export default Navbar;
