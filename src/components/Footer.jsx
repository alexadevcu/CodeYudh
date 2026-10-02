import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaInstagram } from 'react-icons/fa6';
import CULogo from '../assets/CU Logo red &white.png';

gsap.registerPlugin(ScrollTrigger);

const AncientOrnament = () => (
  <img src="/footer-divider.png" alt="Ancient Divider" className="ancient-ornament" />
);

const Footer = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-inner > div',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          },
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

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
      ref={footerRef}
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
              <div className="footer-brand-sub">BATTLE OF CODES</div>
            </div>
          </div>
          <p className="footer-desc">
            24-Hour Hackathon<br />
            Chandigarh University, Mohali<br />
            27–28 October 2026<br /><br />
            Organized by Department of CSE – Takshashila • Chandigarh University
          </p>

          <div className="footer-social-wrapper" style={{ marginTop: '30px' }}>
            <span style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)', marginBottom: '12px', fontWeight: 600 }}>
              Follow Updates
            </span>
            <a 
              href="https://www.instagram.com/codeyudh_cu?stkn=bmwyMnNjeGdnOWFx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              aria-label="Code Yudh Instagram"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '10px 20px',
                borderRadius: '50px',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(245, 183, 54, 0.1)';
                e.currentTarget.style.borderColor = 'var(--gold-400)';
                e.currentTarget.style.color = 'var(--gold-300)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(245, 183, 54, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaInstagram style={{ fontSize: '1.4rem' }} />
              <span style={{ fontSize: '1rem', fontWeight: 500, fontFamily: 'var(--font-body)' }}>@codeyudh_cu</span>
              <span style={{ fontSize: '1.2rem', marginLeft: '4px' }}>↗</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="footer-heading">Quick Links</div>
          <ul className="footer-links">
            <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="interactive-link">About</a></li>
            <li><a href="#timeline" onClick={(e) => handleScrollTo(e, 'timeline')} className="interactive-link">Timeline</a></li>
            <li><a href="#domains" onClick={(e) => handleScrollTo(e, 'domains')} className="interactive-link">Domains</a></li>
            <li><a href="#evaluation" onClick={(e) => handleScrollTo(e, 'evaluation')} className="interactive-link">Evaluation</a></li>
            <li><a href="#outcomes" onClick={(e) => handleScrollTo(e, 'outcomes')} className="interactive-link">Eligibility & Outcomes</a></li>
            <li><a href="#faq" onClick={(e) => handleScrollTo(e, 'faq')} className="interactive-link">FAQ</a></li>
            <li><a href="https://unstop.com/p/code-yudh-battle-of-codes-chandigarh-university-cu-ajitgarh-punjab-1762892" target="_blank" rel="noopener noreferrer" className="interactive-link">Register</a></li>
          </ul>
        </div>

        {/* Event Info */}
        <div>
          <div className="footer-heading">Event Details</div>
          <ul className="footer-links" style={{ gap: '12px' }}>
            <li><span className="static-text">27–28 October 2026</span></li>
            <li><span className="static-text">Chandigarh University, Mohali</span></li>
            <li><span className="static-text">Team Size: 3–4 Members</span></li>
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
