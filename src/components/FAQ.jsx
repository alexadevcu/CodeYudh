import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'Who can participate in Code Yudh?',
    a: 'The hackathon is open to undergraduate engineering students. Each team must consist of 3–4 members.',
  },
  {
    q: 'What is the format of the hackathon?',
    a: 'Code Yudh follows a hybrid format consisting of an online PPT screening round (Phase 1) followed by an offline 24-hour final hackathon at Chandigarh University.',
  },
  {
    q: 'What happens in Phase 1 — PPT Screening?',
    a: 'Teams submit a PPT describing their problem statement, proposed solution, innovation, and technology approach. You may optionally include a prototype, demo, or GitHub link.',
  },
  {
    q: 'How are Phase 1 submissions evaluated?',
    a: 'Submissions are evaluated based on Innovation, Feasibility, Technical Approach, and Potential Impact.',
  },
  {
    q: 'What happens after Phase 1?',
    a: 'Shortlisted teams advance to the offline final round at Chandigarh University, Mohali for the 24-hour development challenge.',
  },
  {
    q: 'What will teams do during the final round?',
    a: 'Teams will build, test, refine, and demonstrate their proposed solutions with support from expert mentors throughout the 24 hours.',
  },
  {
    q: 'What technologies can participants use?',
    a: 'AI/ML, Generative AI, Cloud Computing, IoT, Cybersecurity, Blockchain, Web & Mobile Technologies, Robotics, Data Science, and all other emerging technologies.',
  },
  {
    q: 'When and where is the final hackathon?',
    a: '27–28 October 2026 at Chandigarh University, Mohali. The hackathon begins at 08:30 AM IST on 27 October and ends at 05:00 PM IST on 28 October.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq">
      <div className="section">
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
    </section>
  );
};

export default FAQ;
