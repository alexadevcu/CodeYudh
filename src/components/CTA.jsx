import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="register" className="cta-section">
      <div className="cta-bg" />
      <div className="cta-grid-lines" />

      <div className="cta-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.75rem',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: 'var(--gold-400)',
            marginBottom: '20px'
          }}>
            Ready for the Battle?
          </p>

          <h2 className="cta-title">Your Idea Is<br />Only the Beginning</h2>
          <p className="cta-sub">27–28 October 2026 · Chandigarh University, Mohali</p>

          <div className="cta-steps">
            {['Form Your Team', '→', 'Choose Your Battlefield', '→', 'Build Your Solution', '→', 'Take on Code Yudh'].map((s, i) => (
              s === '→'
                ? <span key={i} className="cta-step-arrow">{s}</span>
                : <span key={i} className="cta-step-text">{s}</span>
            ))}
          </div>

          <div className="cta-btns">
            <a href="https://unstop.com/p/code-yudh-battle-of-codes-chandigarh-university-cu-ajitgarh-punjab-1762892" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">Register Now</button>
            </a>
            <a href="#tracks">
              <button className="btn-outline">Explore Tracks →</button>
            </a>
          </div>

          <p style={{ marginTop: '48px', fontFamily: 'var(--font-heading)', fontSize: '0.72rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Organized by Department of CSE – Takshashila • Chandigarh University
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
