import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import hackhaltLogo from '../assets/sponsers/HackHalt.jpeg';
import unstopLogo from '../assets/sponsers/Unstop.png';
import truscholarLogo from '../assets/sponsers/truscholar.png';

gsap.registerPlugin(ScrollTrigger);

const sponsors = [
  { name: 'Unstop', logo: unstopLogo, desc: 'Our official hosting and registration partner.' },
  { name: 'TruScholar', logo: truscholarLogo, desc: 'Empowering verifiable credentials and certificates.' },
  { name: 'HackHalt', logo: hackhaltLogo, desc: 'Driving innovation and coding excellence.' },
];

const Sponsors = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  cardsRef.current = [];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="sponsors" className="section-padding" style={{ position: 'relative', zIndex: 2 }} ref={containerRef}>
      <div className="section-container">
        
        {/* Header */}
        <div className="section-header" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Powered By</div>
          <h2 className="section-title">Our <span className="gold-text" style={{ fontStyle: 'italic' }}>Sponsors</span> & Partners</h2>
          <p className="section-lead" style={{ margin: '15px auto 0', maxWidth: '600px' }}>
            Meet the incredible organizations making Code Yudh 2026 possible.
          </p>
        </div>

        {/* Sponsor Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginTop: '60px'
        }}>
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              ref={addToRefs}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(245, 183, 54, 0.15)',
                borderRadius: '16px',
                padding: '40px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(245, 183, 54, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(245, 183, 54, 0.4)';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(245, 183, 54, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(245, 183, 54, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  style={{ 
                    maxHeight: '100%', 
                    maxWidth: '180px', 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 12px rgba(255,255,255,0.1))'
                  }} 
                />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#fff',
                marginBottom: '10px'
              }}>
                {sponsor.name}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: '1.5'
              }}>
                {sponsor.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
