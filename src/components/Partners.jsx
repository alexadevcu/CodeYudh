import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import alexaLogo from '../assets/clubs/Alexa Developers community.png';
import gfgLogo from '../assets/clubs/GeekForGeeks Student chapters.png';
import ieteLogo from '../assets/clubs/IETE Club.png';
import csiLogo from '../assets/clubs/Computer Society of India.png';
import idcLogo from '../assets/clubs/Indian Data club.png';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: 'Alexa Developers Community', logo: alexaLogo, desc: 'Empowering students with Voice AI and cloud technology.' },
  { name: 'GeeksForGeeks Student Chapter', logo: gfgLogo, desc: 'Fostering a coding culture and technical excellence.' },
  { name: 'IETE Club', logo: ieteLogo, desc: 'Advancing electronics, telecommunication and IT disciplines.' },
  { name: 'Computer Society of India', logo: csiLogo, desc: 'Connecting IT professionals and fostering technical research.' },
  { name: 'Indian Data Club', logo: idcLogo, desc: 'Exploring data science, analytics, and machine learning.' },
];

const Partners = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Clear refs on each render to prevent stale elements in Strict Mode
  cardsRef.current = [];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered entrance animation for partner cards using fromTo
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
    <section id="partners" className="section-padding" style={{ position: 'relative', zIndex: 2 }} ref={containerRef}>
      <div className="section-container">
        
        {/* Header */}
        <div className="section-header" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Supported By</div>
          <h2 className="section-title">Partnered <span className="gold-text" style={{ fontStyle: 'italic' }}>Communities</span> & Clubs</h2>
          <p className="section-lead" style={{ margin: '15px auto 0', maxWidth: '600px' }}>
            Backed by leading technical communities at Chandigarh University to provide you with the best mentorship and resources.
          </p>
        </div>

        {/* Premium Flex Layout for Partners */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', marginTop: '40px' }}>
          {partners.map((partner, index) => (
            <div 
              key={index}
              ref={addToRefs}
              className="partner-premium-card"
              style={{
                width: '100%',
                maxWidth: '320px',
                background: 'rgba(20, 16, 11, 0.4)',
                border: '1px solid rgba(245, 183, 54, 0.15)',
                borderRadius: '24px',
                padding: '40px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'rgba(245, 183, 54, 0.5)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(245, 183, 54, 0.1)';
                e.currentTarget.style.background = 'rgba(20, 16, 11, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(245, 183, 54, 0.15)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'rgba(20, 16, 11, 0.4)';
              }}
            >
              <div style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                background: 'rgba(255, 255, 255, 0.03)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }} 
                />
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '1.4rem', 
                fontWeight: 700, 
                color: '#fff', 
                marginBottom: '12px' 
              }}>
                {partner.name}
              </h3>
              <p style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '0.95rem', 
                color: 'var(--text-muted)', 
                lineHeight: 1.6 
              }}>
                {partner.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;
