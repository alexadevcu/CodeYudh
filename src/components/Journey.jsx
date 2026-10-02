import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Draw the vertical line down
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true
          }
        }
      );

      // Fade and slide in items
      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(item, 
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1, x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%"
            }
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section id="journey" className="section-padding" style={{ position: 'relative' }} ref={containerRef}>
      <div className="section-container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>03 / The Journey</div>
          <h2 className="section-title">Two Phases. <span className="gold-text">One Battle.</span></h2>
          <p className="section-lead" style={{ margin: '18px auto' }}>From an online idea screening to an intense 24-hour offline finale.</p>
        </div>

        {/* Timeline Container */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '80px auto 0' }}>
          {/* Center Line */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'rgba(245, 183, 54, 0.1)', transform: 'translateX(-50%)' }} />
          <div ref={lineRef} style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(180deg, #f3dfa2, #c99b45)', transform: 'translateX(-50%)' }} />

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            
            {/* Phase 1 */}
            <div ref={addToRefs} style={{ display: 'flex', justifyContent: 'flex-start', position: 'relative', width: '100%' }}>
              <div className="glass-card" style={{ width: '45%', padding: '2rem', borderRadius: '20px', background: 'rgba(20, 16, 11, 0.8)', border: '1px solid rgba(245, 183, 54, 0.2)' }}>
                <span className="phase-tag">Phase 01</span>
                <h3 style={{ fontSize: '24px', color: '#f3dfa2', marginBottom: '10px' }}>Online Screening</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '15px' }}>11 Oct &rarr; 14 Oct 2026</p>
                <p style={{ color: 'var(--text-primary)', fontSize: '15px' }}>Submit your PPT defining the problem statement, proposed solution, and technology approach.</p>
              </div>
              <div style={{ position: 'absolute', left: '50%', top: '50%', width: '20px', height: '20px', background: '#0a0806', border: '2px solid #d8b25c', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 15px rgba(245, 183, 54, 0.5)' }} />
            </div>

            {/* Phase 2 */}
            <div ref={addToRefs} style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', width: '100%' }}>
              <div className="glass-card" style={{ width: '45%', padding: '2rem', borderRadius: '20px', background: 'rgba(20, 16, 11, 0.8)', border: '1px solid rgba(245, 183, 54, 0.2)' }}>
                <span className="phase-tag">Phase 02</span>
                <h3 style={{ fontSize: '24px', color: '#f3dfa2', marginBottom: '10px' }}>Offline Finale</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '15px' }}>27 Oct &rarr; 28 Oct 2026</p>
                <p style={{ color: 'var(--text-primary)', fontSize: '15px' }}>24-hour intense development challenge at Chandigarh University. Build, test, and demonstrate.</p>
              </div>
              <div style={{ position: 'absolute', left: '50%', top: '50%', width: '20px', height: '20px', background: '#0a0806', border: '2px solid #d8b25c', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 15px rgba(245, 183, 54, 0.5)' }} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;
