import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'Who can participate?',
    a: 'The hackathon is open to undergraduate engineering students.',
  },
  {
    q: 'What is the team size?',
    a: 'Each team must consist of 3–4 members.',
  },
  {
    q: 'What is the format of the hackathon?',
    a: 'Code Yudh follows a hybrid format consisting of an online PPT screening round followed by an offline 24-hour final hackathon.',
  },
  {
    q: 'Can we submit a prototype or GitHub link in Phase 1?',
    a: 'Yes. Teams may optionally include a prototype, demo, or GitHub link with their PPT.',
  },
  {
    q: 'When and where is the final hackathon?',
    a: '27–28 October 2026 at Chandigarh University, Mohali.',
  },
  {
    q: 'What technologies can participants use?',
    a: 'The provided technology areas include AI/ML, Generative AI, Cloud Computing, IoT, Cybersecurity, Blockchain, Web & Mobile Technologies, Robotics, Data Science, and other emerging technologies.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq">
      <div className="section faq-split-container">
        <div className="faq-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ marginBottom: '60px' }}
          >
            <p className="section-label">Got Questions?</p>
            <h2 className="section-title">Frequently Asked<br />Questions</h2>
          </motion.div>

          <motion.div
            className="faq-list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                  {item.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">{item.a}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="faq-right">
          <motion.img 
            src="/faq-illustration.png" 
            alt="FAQ Illustration" 
            className="faq-3d-image"
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
