import React from 'react';
import { motion } from 'framer-motion';

const outcomes = [
  { icon: '01', title: 'Hands-On Experience', desc: 'Develop technology-driven solutions to real-world challenges across diverse domains.' },
  { icon: '02', title: 'Technical Growth', desc: 'Enhance your technical knowledge and coding abilities under competitive pressure.' },
  { icon: '03', title: 'Problem-Solving', desc: 'Strengthen your analytical and creative problem-solving skills in a live environment.' },
  { icon: '04', title: 'Teamwork', desc: 'Experience collaborative development during an intensive 24-hour challenge.' },
  { icon: '05', title: 'Networking', desc: 'Connect with industry experts, mentors, innovators, faculty, and fellow participants.' },
  { icon: '06', title: 'Prototype Dev', desc: 'Transform your initial idea into a functional and demonstrable solution.' },
  { icon: '07', title: 'Tech Exposure', desc: 'Explore modern technologies, innovation methodologies, and practical software practices.' },
  { icon: '08', title: 'Mentorship', desc: 'Shortlisted teams receive support from mentors throughout the offline hackathon.' },
];

const Outcomes = () => {
  return (
    <section id="outcomes">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px' }}
        >
          <p className="section-label">Participant Benefits</p>
          <h2 className="section-title">What You'll Gain</h2>
          <p className="section-desc">
            More than a competition — Code Yudh is a launchpad for your career, skills, and network.
          </p>
        </motion.div>

        <div className="outcomes-grid">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              className="outcome-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <span className="outcome-icon" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold-400)' }}>{item.icon}</span>
              <div className="outcome-title">{item.title}</div>
              <p className="outcome-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

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
