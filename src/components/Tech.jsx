import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance animation
      gsap.fromTo(cardsRef.current, 
        { opacity: 0, y: 100, rotateX: -15 },
        {
          opacity: 1, y: 0, rotateX: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      // Mouse move 3D tilt effect for each card
      cardsRef.current.forEach(card => {
        if(!card) return;
        
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
          const rotateY = ((x - centerX) / centerX) * 10;
          
          gsap.to(card, {
            rotateX, rotateY, transformPerspective: 1000,
            duration: 0.4, ease: 'power2.out',
            boxShadow: `${-rotateY}px ${rotateX}px 30px rgba(245, 183, 54, 0.15)`
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotateX: 0, rotateY: 0,
            duration: 0.7, ease: 'elastic.out(1, 0.3)',
            boxShadow: '0 0px 0px rgba(245, 183, 54, 0)'
          });
        });
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="tech" className="section-padding" style={{ position: 'relative', zIndex: 2 }} ref={containerRef}>
      <div className="section-container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Technology Playground</div>
          <h2 className="section-title">Arsenal of the <span className="gold-text" style={{ fontStyle: 'italic' }}>Builders</span></h2>
        </div>

        <div className="tech-grid">
          
          <div ref={addToRefs} className="glass-card" style={{ padding: '2rem', borderRadius: '20px', background: 'rgba(20, 16, 11, 0.7)', border: '1px solid rgba(245, 183, 54, 0.2)', backdropFilter: 'blur(20px)' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#f3dfa2', marginBottom: '1rem', borderBottom: '1px solid rgba(245, 183, 54, 0.1)', paddingBottom: '0.5rem' }}>AI & Intelligence</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
              <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#d8b25c' }}>◈</span> Machine Learning</li>
              <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#d8b25c' }}>◈</span> Generative AI</li>
              <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#d8b25c' }}>◈</span> Data Science</li>
            </ul>
          </div>

          <div ref={addToRefs} className="glass-card" style={{ padding: '2rem', borderRadius: '20px', background: 'rgba(20, 16, 11, 0.7)', border: '1px solid rgba(245, 183, 54, 0.2)', backdropFilter: 'blur(20px)' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#f3dfa2', marginBottom: '1rem', borderBottom: '1px solid rgba(245, 183, 54, 0.1)', paddingBottom: '0.5rem' }}>Connected World</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
              <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#d8b25c' }}>◈</span> Internet of Things</li>
              <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#d8b25c' }}>◈</span> Smart Mobility</li>
              <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#d8b25c' }}>◈</span> Geospatial Systems</li>
            </ul>
          </div>

          <div ref={addToRefs} className="glass-card" style={{ padding: '2rem', borderRadius: '20px', background: 'rgba(20, 16, 11, 0.7)', border: '1px solid rgba(245, 183, 54, 0.2)', backdropFilter: 'blur(20px)' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#f3dfa2', marginBottom: '1rem', borderBottom: '1px solid rgba(245, 183, 54, 0.1)', paddingBottom: '0.5rem' }}>Infrastructure</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
              <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#d8b25c' }}>◈</span> Cloud Architecture</li>
              <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#d8b25c' }}>◈</span> Web3 & Blockchain</li>
              <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#d8b25c' }}>◈</span> Cybersecurity</li>
            </ul>
          </div>

          <div ref={addToRefs} className="glass-card" style={{ padding: '2rem', borderRadius: '20px', background: 'rgba(20, 16, 11, 0.7)', border: '1px solid rgba(245, 183, 54, 0.2)', backdropFilter: 'blur(20px)' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#f3dfa2', marginBottom: '1rem', borderBottom: '1px solid rgba(245, 183, 54, 0.1)', paddingBottom: '0.5rem' }}>Core Engineering</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
              <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#d8b25c' }}>◈</span> Web & Mobile</li>
              <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#d8b25c' }}>◈</span> Robotics & XR</li>
              <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#d8b25c' }}>◈</span> Hardware Integ.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tech;
