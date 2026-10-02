import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 24, suffix: 'H', label: 'Development Sprint', desc: 'Non-stop coding marathon.' },
  { value: 4, prefix: '3–', suffix: '', label: 'Team Size', desc: 'Members per team.' },
  { value: 6, suffix: '', label: 'Challenge Domains', desc: 'Across critical sectors.' },
  { value: 2, suffix: '', label: 'Phase Competition', desc: 'Online + Offline rounds.' },
];

const About = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade up for title and description
      gsap.from([titleRef.current, descRef.current], {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Horizontal GSAP scroll for journey
  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      // The pinned horizontal journey is strictly desktop-only.
      const getScrollAmount = () => {
        if (!scrollSectionRef.current) return 0;
        return -(scrollSectionRef.current.scrollWidth - window.innerWidth + 80);
      };

      gsap.to(scrollSectionRef.current, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1.2,
          start: 'center center',
          end: () => `+=${Math.max(1, getScrollAmount() * -1)}`,
          invalidateOnRefresh: true,
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section-wrap">
      <div className="glow-line" />

      {/* ─── CLEAN PREMIUM ABOUT ─── */}
      <div className="section about-clean-container">

        {/* Top Centered Header */}
        <div className="about-clean-header">
          <p className="bento-label" style={{ textAlign: 'center', marginBottom: '20px' }}>About the Event</p>
          <h2 className="about-heading" ref={titleRef} style={{ textAlign: 'center', alignItems: 'center' }}>
            <span className="about-heading-line">Where Ideas</span>
            <span className="about-heading-line about-heading-line--gold">Meet Innovation</span>
          </h2>
          <p className="section-desc" ref={descRef} style={{ textAlign: 'center', margin: '30px auto 0', maxWidth: '700px', fontSize: '1.15rem' }}>
            Code Yudh – Battle of Codes is a <strong>24-hour hackathon</strong> organized
            by Department of CSE – Takshashila, Chandigarh University. Teams identify
            real-world problems and build innovative, technology-driven solutions.
          </p>
        </div>

        {/* 2x2 Stats Grid */}
        <div className="about-clean-stats">
          {stats.map((s, i) => (
            <motion.div
              className="stat-clean-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="stat-clean-num">
                {s.prefix && <span>{s.prefix}</span>}
                <span>{s.value}{s.suffix}</span>
              </div>
              <div className="stat-clean-text">
                <h3>{s.label}</h3>
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glow-line" />

      {/* ─── HORIZONTAL JOURNEY ─── */}
      <div ref={containerRef} className="journey-container">
        <div className="section" style={{ paddingBottom: 0 }}>
          <p className="section-label">From Idea to Impact</p>
          <h2 className="section-title">The 24-Hour Journey</h2>
        </div>

        <div className="journey-scroll-wrap" ref={scrollSectionRef}>

          <div className="journey-card">
            <div className="j-time">01</div>
            <h3 className="j-title">Team Formation</h3>
            <p className="j-desc">Assemble your elite squad of 3–4 members ready to build.</p>
          </div>

          <div className="journey-card">
            <div className="j-time">02</div>
            <h3 className="j-title">Idea &amp; Problem Submission</h3>
            <p className="j-desc">Identify a real-world problem to solve with technology.</p>
          </div>

          <div className="journey-card">
            <div className="j-time">03</div>
            <h3 className="j-title">PPT Submission</h3>
            <p className="j-desc">Submit your solution and technology approach for screening.</p>
          </div>

          <div className="journey-card">
            <div className="j-time">04</div>
            <h3 className="j-title">Screening</h3>
            <p className="j-desc">Expert panel evaluates your proposed solution and idea.</p>
          </div>

          <div className="journey-card">
            <div className="j-time">05</div>
            <h3 className="j-title">Shortlisting</h3>
            <p className="j-desc">Top teams are selected to compete in the offline finale.</p>
          </div>

          <div className="journey-card journey-card--hot">
            <div className="j-time">06</div>
            <h3 className="j-title">Offline Hackathon</h3>
            <p className="j-desc">Arrive at Chandigarh University. The 24-hour battle begins.</p>
          </div>

          <div className="journey-card">
            <div className="j-time">07</div>
            <h3 className="j-title">Build</h3>
            <p className="j-desc">Transform your proposed idea into a working solution.</p>
          </div>

          <div className="journey-card">
            <div className="j-time">08</div>
            <h3 className="j-title">Test</h3>
            <p className="j-desc">Test your implementation and identify issues early on.</p>
          </div>

          <div className="journey-card">
            <div className="j-time">09</div>
            <h3 className="j-title">Refine</h3>
            <p className="j-desc">Improve your solution based on testing and mentor feedback.</p>
          </div>

          <div className="journey-card">
            <div className="j-time">10</div>
            <h3 className="j-title">Demonstrate</h3>
            <p className="j-desc">Present your functional prototype to the judging panel.</p>
          </div>

          <div className="journey-card journey-card--hot">
            <div className="j-time">11</div>
            <h3 className="j-title">Final Evaluation</h3>
            <p className="j-desc">Judged on innovation, implementation, and real-world impact.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
