import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hours = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const titleRef = useRef(null);

  const steps = [
    { num: '01', title: 'Team Formation', desc: 'Assemble your elite squad of 3-4 members.' },
    { num: '02', title: 'Idea & Problem ID', desc: 'Identify a real-world problem to solve.' },
    { num: '03', title: 'PPT Submission', desc: 'Submit your solution and technology approach.' },
    { num: '04', title: 'Screening', desc: 'Expert panel evaluates your proposed solution.' },
    { num: '05', title: 'Shortlisting', desc: 'Top teams are selected for the offline finale.' },
    { num: '06', title: 'Offline Hackathon', desc: 'Arrive at Chandigarh University. 24 hours begin.' },
    { num: '07', title: 'Build', desc: 'Transform your proposed idea into a working solution.' },
    { num: '08', title: 'Test', desc: 'Test your implementation and identify issues early.' },
    { num: '09', title: 'Refine', desc: 'Improve your solution based on testing.' },
    { num: '10', title: 'Demonstrate', desc: 'Present your functional prototype to judges.' },
    { num: '11', title: 'Final Evaluation', desc: 'Judged on innovation, implementation, and impact.' },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // Reveal Title
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        }
      );

      // Horizontal Scroll for steps
      const trackWidth = trackRef.current.scrollWidth;
      const amountToScroll = trackWidth - window.innerWidth + 40; // padding

      if (window.innerWidth > 768 && amountToScroll > 0) {
        gsap.to(trackRef.current, {
          x: -amountToScroll,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center",
            end: `+=${amountToScroll}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true
          }
        });
      }
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="hours" style={{ overflow: 'hidden', background: '#0a0806' }} ref={containerRef}>
      <div className="section-container" style={{ marginBottom: '40px' }} ref={titleRef}>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>From Idea to Impact</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>The 24-Hour <span className="gold-text">Journey</span></h2>
      </div>

      <div style={{ display: 'flex', width: 'max-content', padding: '0 5vw', gap: '30px', margin: '60px 0' }} ref={trackRef}>
        
        {steps.map((step, idx) => (
          <div key={idx} style={{ width: '300px', height: '400px', background: 'linear-gradient(180deg, rgba(24,19,12,0.8), rgba(10,8,6,0.9))', borderRadius: '24px', padding: '40px 30px', border: '1px solid rgba(245, 183, 54, 0.1)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', flexShrink: 0 }}>
            <div style={{ position: 'absolute', top: '30px', left: '30px', fontSize: '80px', fontWeight: 'bold', color: 'rgba(245, 183, 54, 0.05)', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>{step.num}</div>
            <h3 style={{ fontSize: '24px', color: step.num === '06' ? '#fff' : '#f3dfa2', marginBottom: '15px' }}>{step.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{step.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Hours;
