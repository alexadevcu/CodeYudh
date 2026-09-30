import React from 'react';
import { motion } from 'framer-motion';

const Evaluation = () => {
  return (
    <section id="evaluation">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px' }}
        >
          <p className="section-label">Judging Criteria</p>
          <h2 className="section-title">Evaluation</h2>
          <p className="section-desc">
            Your project is assessed across two phases. Each phase has distinct criteria to ensure
            the best ideas and the best implementations rise to the top.
          </p>
        </motion.div>

        <div className="phase-grid">
          <motion.div
            className="phase-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="phase-number">Phase 01</div>
            <div className="phase-title">PPT Screening</div>
            <ul className="phase-criteria">
              <li>
                <div>
                  <strong>Innovation</strong>
                  Originality of the idea.
                </div>
              </li>
              <li>
                <div>
                  <strong>Feasibility</strong>
                  Practicality of development.
                </div>
              </li>
              <li>
                <div>
                  <strong>Technical Approach</strong>
                  Effectiveness of the tech stack.
                </div>
              </li>
              <li>
                <div>
                  <strong>Potential Impact</strong>
                  Value created by the solution.
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="phase-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="phase-number">Phase 02</div>
            <div className="phase-title">Final Hackathon</div>
            <ul className="phase-criteria">
              <li>
                <div>
                  <strong>Innovation</strong>
                  Originality of the final product.
                </div>
              </li>
              <li>
                <div>
                  <strong>Implementation</strong>
                  Effectiveness of development.
                </div>
              </li>
              <li>
                <div>
                  <strong>Functionality</strong>
                  Working prototype demonstration.
                </div>
              </li>
              <li>
                <div>
                  <strong>Impact</strong>
                  Real-world usefulness.
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="glow-line" />
    </section>
  );
};

export default Evaluation;
