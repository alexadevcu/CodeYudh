import React from 'react';
import { motion } from 'framer-motion';

const outcomes = [
  { icon: '01', title: 'Hands-On Experience' },
  { icon: '02', title: 'Technical Growth' },
  { icon: '03', title: 'Problem-Solving' },
  { icon: '04', title: 'Teamwork' },
  { icon: '05', title: 'Networking' },
  { icon: '06', title: 'Prototype Development' },
  { icon: '07', title: 'Emerging Technology Exposure' },
  { icon: '08', title: 'Mentorship' },
];

const Outcomes = () => {
  return (
    <section id="outcomes">
      <div className="section" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '50px', textAlign: 'center' }}
        >
          <p className="section-label">Participant Outcomes</p>
          <h2 className="section-title">What You'll Gain</h2>
        </motion.div>

        <div className="outcomes-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              className="outcome-bar"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                background: 'rgba(15, 12, 22, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '20px 30px',
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{
                x: 10,
                background: 'rgba(245, 183, 54, 0.05)',
                borderColor: 'rgba(245, 183, 54, 0.3)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold-400)', opacity: 0.8 }}>{item.icon}</span>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 600, color: '#fff', letterSpacing: '0.5px' }}>{item.title}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section">
        {/* Technology Playground */}
        <motion.div
          style={{ marginTop: '100px' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title" style={{ marginBottom: '40px' }}>Technology Playground</h2>
          <p className="section-desc" style={{ marginBottom: '48px' }}>
            Participants can explore a wide range of modern technologies across every category.
          </p>

          <div className="playground-grid">
            <div className="playground-category">
              <div className="playground-cat-title">Artificial Intelligence</div>
              <div className="playground-tag">AI / ML</div>
              <div className="playground-tag">Generative AI</div>
              <div className="playground-tag">Data Science</div>
            </div>
            <div className="playground-category">
              <div className="playground-cat-title">Connected Technologies</div>
              <div className="playground-tag">IoT</div>
              <div className="playground-tag">Smart Mobility</div>
              <div className="playground-tag">Geospatial Technology</div>
            </div>
            <div className="playground-category">
              <div className="playground-cat-title">Digital Infrastructure</div>
              <div className="playground-tag">Cloud Computing</div>
              <div className="playground-tag">Blockchain</div>
              <div className="playground-tag">Cybersecurity</div>
            </div>
            <div className="playground-category">
              <div className="playground-cat-title">Emerging Technologies</div>
              <div className="playground-tag">Robotics</div>
              <div className="playground-tag">VR / AR</div>
              <div className="playground-tag">Assistive Tech</div>
              <div className="playground-tag">Web & Mobile</div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="glow-line" />
    </section>
  );
};

export default Outcomes;
