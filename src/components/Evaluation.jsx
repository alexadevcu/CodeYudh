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
                  How innovative is the proposed solution?
                </div>
              </li>
              <li>
                <div>
                  <strong>Feasibility</strong>
                  Can the solution realistically be developed and implemented?
                </div>
              </li>
              <li>
                <div>
                  <strong>Technical Approach</strong>
                  How effectively does the technology approach address the problem?
                </div>
              </li>
              <li>
                <div>
                  <strong>Potential Impact</strong>
                  What potential impact can the proposed solution create?
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
                  The originality and innovative nature of the solution.
                </div>
              </li>
              <li>
                <div>
                  <strong>Implementation</strong>
                  How effectively the proposed solution has been developed.
                </div>
              </li>
              <li>
                <div>
                  <strong>Functionality</strong>
                  The functionality and demonstration of the developed prototype.
                </div>
              </li>
              <li>
                <div>
                  <strong>Impact</strong>
                  The potential impact of the final solution on real-world problems.
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
