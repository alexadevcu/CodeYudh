import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '01', title: 'Team Formation',    desc: 'Assemble your elite squad of 3–4 members.' },
  { num: '02', title: 'Idea & Problem ID', desc: 'Identify a real-world problem to solve.' },
  { num: '03', title: 'PPT Submission',    desc: 'Submit your solution and technology approach.' },
  { num: '04', title: 'Screening',         desc: 'Expert panel evaluates your proposed solution.' },
  { num: '05', title: 'Shortlisting',      desc: 'Top teams are selected for the offline finale.' },
  { num: '06', title: '24-Hour Hackathon', desc: 'Arrive at Chandigarh University. 24 hours begin.', hot: true },
  { num: '07', title: 'Build',             desc: 'Transform your proposed idea into a working solution.' },
  { num: '08', title: 'Test',              desc: 'Test your implementation and identify issues early.' },
  { num: '09', title: 'Refine',            desc: 'Improve your solution based on testing and feedback.' },
  { num: '10', title: 'Demonstrate',       desc: 'Present your functional prototype to the judges.' },
  { num: '11', title: 'Final Evaluation',  desc: 'Judged on innovation, implementation, and impact.', hot: true },
];

const JourneySteps = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.journey-step-header', {
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
      });

      gsap.from(cardRefs.current, {
        y: 50, opacity: 0, duration: 0.7,
        stagger: 0.07,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey-steps" ref={sectionRef} style={{ position: 'relative', zIndex: 2 }}>
      <div className="section-container">

        {/* Header */}
        <div className="journey-step-header" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>From Idea to Impact</div>
          <h2 className="section-title">The 24-Hour <span className="gold-text">Journey</span></h2>
        </div>

        {/* Steps grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px',
        }}>
          {steps.map((step, i) => (
            <div
              key={i}
              ref={el => { if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el); }}
              style={{
                position: 'relative',
                padding: '28px 24px',
                borderRadius: '16px',
                border: step.hot
                  ? '1px solid rgba(245, 183, 54, 0.35)'
                  : '1px solid rgba(245, 183, 54, 0.1)',
                background: step.hot
                  ? 'linear-gradient(135deg, rgba(24,19,12,0.9), rgba(30,22,10,0.8))'
                  : 'rgba(14, 11, 7, 0.55)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden',
                transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(245, 183, 54, 0.45)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(0,0,0,0.45)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = step.hot ? 'rgba(245, 183, 54, 0.35)' : 'rgba(245, 183, 54, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* ghost number watermark */}
              <div style={{
                position: 'absolute', top: '-10px', right: '10px',
                fontSize: '72px', fontFamily: 'var(--font-heading)', fontWeight: 700,
                color: 'rgba(245, 183, 54, 0.05)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
              }}>{step.num}</div>

              {/* Step number badge */}
              <div style={{
                display: 'inline-block',
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                letterSpacing: '0.2em', color: step.hot ? '#fff' : 'var(--gold-400)',
                background: step.hot ? 'rgba(245, 183, 54, 0.18)' : 'rgba(245, 183, 54, 0.07)',
                border: `1px solid ${step.hot ? 'rgba(245,183,54,0.4)' : 'rgba(245,183,54,0.18)'}`,
                padding: '4px 10px', borderRadius: '999px', marginBottom: '16px',
              }}>{step.num}</div>

              <h3 style={{
                fontSize: '16px', fontFamily: 'var(--font-heading)', fontWeight: 600,
                letterSpacing: '0.06em', color: step.hot ? '#f3dfa2' : 'var(--text-primary)',
                marginBottom: '10px',
              }}>{step.title}</h3>

              <p style={{
                fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6,
              }}>{step.desc}</p>

              {/* Arrow connector — hidden for last card */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute', bottom: '14px', right: '16px',
                  color: 'rgba(245, 183, 54, 0.25)', fontSize: '18px', fontWeight: 300,
                }}>→</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JourneySteps;
