import React from 'react';

const Participate = () => {

  return (
    <section id="participate" className="section-padding" style={{ position: 'relative' }}>
      <div className="section-container">
        
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Participation</div>
          <h2 className="section-title">Who May Enter the <span className="gold-text" style={{ fontStyle: 'italic' }}>Arena</span></h2>
        </div>

        <div className="participate-grid" style={{ marginBottom: '80px' }}>
          <div className="glass-card" style={{ padding: '36px 32px', borderRadius: '20px', background: 'rgba(20, 16, 11, 0.7)', border: '1px solid rgba(245, 183, 54, 0.2)' }}>
            <h3 style={{ fontSize: '22px', color: '#f3dfa2', marginBottom: '24px' }}>Eligibility</h3>
            <div className="elig-row">
              <div className="ic">✦</div>
              <div>
                <b style={{ color: '#fff' }}>Undergrad Students</b>
                <p style={{ color: 'var(--text-secondary)' }}>Open to all engineering undergrads.</p>
              </div>
            </div>
            <div className="elig-row">
              <div className="ic">⧉</div>
              <div>
                <b style={{ color: '#fff' }}>Team of 3 to 4</b>
                <p style={{ color: 'var(--text-secondary)' }}>Assemble your elite squad.</p>
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '36px 32px', borderRadius: '20px', background: 'rgba(20, 16, 11, 0.7)', border: '1px solid rgba(245, 183, 54, 0.2)' }}>
            <h3 style={{ fontSize: '22px', color: '#f3dfa2', marginBottom: '24px' }}>What You'll Gain</h3>
            <ul className="outcomes-list">
              <li><span className="n">01</span><span><b>Hands-On Experience</b> — build real solutions.</span></li>
              <li><span className="n">02</span><span><b>Networking</b> — connect with industry leaders.</span></li>
              <li><span className="n">03</span><span><b>Prototype</b> — create a demonstrable product.</span></li>
              <li><span className="n">04</span><span><b>Funding</b> — chances for incubation.</span></li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Participate;
