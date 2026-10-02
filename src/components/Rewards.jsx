import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaLock } from 'react-icons/fa'; // We will use react-icons for the lock

gsap.registerPlugin(ScrollTrigger);

const Rewards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal the main components
      gsap.from('.reward-reveal', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="rewards" className="section-padding" style={{ position: 'relative', zIndex: 2 }} ref={containerRef}>
      <div className="section-container">
        
        {/* Header */}
        <div className="section-header reward-reveal" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Rewards</div>
          <h2 className="section-title" style={{ color: '#f3dfa2' }}>Top Rewards for <span className="gold-text">Top Ideas</span></h2>
          <p className="section-lead" style={{ margin: '15px auto 0' }}>The prize pool is being finalised with our partners. Full breakdown lands here soon.</p>
          <div style={{ marginTop: '20px', width: '10px', height: '10px', background: 'var(--gold-400)', transform: 'rotate(45deg)' }}></div>
        </div>

        {/* Coming Soon Banner */}
        <div className="reward-reveal" style={{
          background: 'linear-gradient(180deg, rgba(20, 16, 11, 0.9), rgba(10, 8, 6, 0.95))',
          border: '1px solid rgba(245, 183, 54, 0.15)',
          borderRadius: '24px',
          padding: '60px 40px',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto 40px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* subtle glow behind */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '100px', background: 'var(--gold-400)', filter: 'blur(100px)', opacity: 0.15, pointerEvents: 'none' }}></div>
          
          <div style={{ display: 'inline-block', border: '1px solid rgba(245, 183, 54, 0.3)', padding: '6px 16px', borderRadius: '999px', fontSize: '11px', letterSpacing: '0.15em', color: 'var(--gold-200)', textTransform: 'uppercase', marginBottom: '24px', background: 'rgba(24, 19, 12, 0.6)' }}>
            <span style={{ color: 'var(--gold-400)', marginRight: '8px' }}>●</span> Rewards & More
          </div>
          
          <h3 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 800, letterSpacing: '0.02em', color: '#fff', marginBottom: '20px', lineHeight: 1.1 }}>COMING SOON</h3>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '600px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            Cash prizes, goodies and partner rewards are being locked in right now. Registrations are open in the meantime — the podium is worth waiting for.
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-tertiary)' }}>
            <span style={{ color: 'var(--gold-400)' }}>🏆</span> Certificates for every participant, confirmed
          </div>
        </div>

        {/* Podium Cards */}
        <div className="reward-reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', alignItems: 'flex-end', marginTop: '60px' }}>
          
          {/* Runner Up */}
          <div style={{
            background: 'linear-gradient(180deg, rgba(20, 16, 11, 0.7), rgba(10, 8, 6, 0.9))',
            border: '1px solid rgba(245, 183, 54, 0.1)',
            borderRadius: '20px',
            padding: '40px 30px',
            textAlign: 'center',
            width: '280px',
            height: '260px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: '-15px', display: 'flex', gap: '4px' }}>
                <div style={{ width: '12px', height: '24px', background: 'rgba(255,255,255,0.1)', transform: 'skewY(-30deg)' }}></div>
                <div style={{ width: '12px', height: '24px', background: 'rgba(255,255,255,0.1)', transform: 'skewY(30deg)' }}></div>
              </div>
              <FaLock style={{ color: 'rgba(255,255,255,0.3)', fontSize: '20px' }} />
            </div>
            <h4 style={{ fontSize: '13px', letterSpacing: '0.15em', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '15px' }}>Runner Up</h4>
            <div style={{ width: '80px', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '10px' }}></div>
            <p style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>To be announced</p>
          </div>

          {/* Champion (Center, taller) */}
          <div style={{
            background: 'linear-gradient(180deg, rgba(24, 19, 12, 0.8), rgba(10, 8, 6, 0.95))',
            border: '1px solid rgba(245, 183, 54, 0.25)',
            borderRadius: '20px',
            padding: '50px 30px',
            textAlign: 'center',
            width: '300px',
            height: '320px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 -10px 40px rgba(245, 183, 54, 0.05)',
            position: 'relative'
          }}>
            <div style={{ position: 'absolute', top: '-15px', background: '#0a0806', border: '1px solid var(--gold-400)', color: 'var(--gold-200)', fontSize: '10px', letterSpacing: '0.1em', padding: '4px 12px', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>♕</span> GRAND PRIZE
            </div>
            <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(245, 183, 54, 0.05)', border: '2px solid rgba(245, 183, 54, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: '-20px', display: 'flex', gap: '6px' }}>
                <div style={{ width: '16px', height: '30px', background: 'rgba(245, 183, 54, 0.15)', transform: 'skewY(-30deg)' }}></div>
                <div style={{ width: '16px', height: '30px', background: 'rgba(245, 183, 54, 0.15)', transform: 'skewY(30deg)' }}></div>
              </div>
              <FaLock style={{ color: 'rgba(245, 183, 54, 0.4)', fontSize: '24px' }} />
            </div>
            <h4 style={{ fontSize: '15px', letterSpacing: '0.15em', color: 'var(--gold-200)', textTransform: 'uppercase', marginBottom: '20px' }}>Champion</h4>
            <div style={{ width: '100px', height: '8px', background: 'rgba(245, 183, 54, 0.1)', borderRadius: '4px', marginBottom: '12px' }}></div>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>To be announced</p>
          </div>

          {/* Second Runner Up */}
          <div style={{
            background: 'linear-gradient(180deg, rgba(20, 16, 11, 0.7), rgba(10, 8, 6, 0.9))',
            border: '1px solid rgba(245, 183, 54, 0.1)',
            borderRadius: '20px',
            padding: '40px 30px',
            textAlign: 'center',
            width: '280px',
            height: '260px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: '-15px', display: 'flex', gap: '4px' }}>
                <div style={{ width: '12px', height: '24px', background: 'rgba(255,255,255,0.1)', transform: 'skewY(-30deg)' }}></div>
                <div style={{ width: '12px', height: '24px', background: 'rgba(255,255,255,0.1)', transform: 'skewY(30deg)' }}></div>
              </div>
              <FaLock style={{ color: 'rgba(255,255,255,0.3)', fontSize: '20px' }} />
            </div>
            <h4 style={{ fontSize: '13px', letterSpacing: '0.15em', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '15px' }}>Second Runner Up</h4>
            <div style={{ width: '80px', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '10px' }}></div>
            <p style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>To be announced</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Rewards;
