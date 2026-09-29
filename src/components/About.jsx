import React, { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 24, suffix: 'H', label: 'Development Sprint', desc: 'Non-stop coding marathon' },
  { value: 4, prefix: '3–', suffix: '', label: 'Team Size', desc: 'Members per team' },
  { value: 6, suffix: '', label: 'Challenge Tracks', desc: 'Across critical domains' },
  { value: 2, suffix: '', label: 'Phase Competition', desc: 'Online + Offline rounds' },
];

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);
  const orbRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const labelRef = useRef(null);
  const containerRef = useRef(null);
  const scrollSectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 20%',
        }
      });

      // Label flies in
      tl.fromTo(labelRef.current,
        { autoAlpha: 0, x: -40, letterSpacing: '20px' },
        { autoAlpha: 1, x: 0, letterSpacing: '5px', duration: 0.8, ease: 'power3.out' }
      );

      // Heading lines stagger in
      tl.fromTo([line1Ref.current, line2Ref.current],
        { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power4.out' },
        '-=0.4'
      );

      // Description fades up
      tl.fromTo(descRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );

      // Stats stagger
      const statItems = statsRef.current?.querySelectorAll('.stat-floating-item');
      tl.fromTo(statItems,
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.4'
      );


      // Counter animation for stats
      stats.forEach((stat, i) => {
        const el = statsRef.current?.querySelector(`[data-counter="${i}"]`);
        if (!el || stat.prefix) return;
        gsap.fromTo({ val: 0 }, { val: stat.value },
          {
            scrollTrigger: { trigger: statsRef.current, start: 'top 80%' },
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() { el.textContent = Math.round(this.targets()[0].val) + stat.suffix; }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Horizontal GSAP scroll for journey
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
          end: () => `+=${getScrollAmount() * -1}`,
          invalidateOnRefresh: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section-wrap">
      <div className="glow-line" />

      {/* ─── MAIN ABOUT GRID ─── */}
      <div className="section">
        <div className="about-grid">

          {/* LEFT - TEXT */}
          <div className="about-left">
            <p className="section-label" ref={labelRef}>About the Event</p>

            <h2 className="about-heading">
              <span ref={line1Ref} className="about-heading-line">Where Ideas</span>
              <span ref={line2Ref} className="about-heading-line about-heading-line--gold">Meet Innovation</span>
            </h2>

            <p className="section-desc" ref={descRef}>
              Code Yudh – Battle of Codes is a <strong>24-hour software development hackathon</strong> organized
              by the Department of Computer Science and Engineering, Chandigarh University. Teams identify
              real-world problems and build innovative, technology-driven solutions.
            </p>
          </div>

          {/* RIGHT – UNIQUE FLOATING STATS */}
          <div className="about-right" ref={statsRef}>
            <div className="stats-floating">
              {stats.map((s, i) => (
                <div className={`stat-floating-item stat-float-${i}`} key={i}>
                  <div className="stat-number">
                    {s.prefix && <span>{s.prefix}</span>}
                    <span data-counter={i}>{s.value}{s.suffix}</span>
                  </div>
                  <div className="stat-text-wrap">
                    <div className="stat-label">{s.label}</div>
                    <div className="stat-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="glow-line" />

      {/* ─── HORIZONTAL JOURNEY ─── */}
      <div ref={containerRef} className="journey-container">
        <div className="section" style={{ paddingBottom: 0 }}>
          <p className="section-label">From Idea to Impact</p>
          <h2 className="section-title">The 24-Hour Journey</h2>
        </div>

        <div ref={scrollSectionRef} className="journey-flow-gsap">
          {[
            { id: '01', label: 'Team Formation',  desc: 'Assemble your elite squad of 3–4 members with diverse technical skills to tackle the challenge.' },
            { id: '02', label: 'Idea & Problem',  desc: 'Select a track and identify a pressing real-world problem. Brainstorm innovative solutions.' },
            { id: '03', label: 'PPT Submission',  desc: 'Submit your architecture, tech stack, and solution approach for the Phase 1 screening.' },
            { id: '04', label: 'Screening',       desc: 'An expert panel evaluates innovation, feasibility, and potential impact of your idea.' },
            { id: '05', label: 'Shortlisting',    desc: 'Top teams are selected and invited to the offline final at Chandigarh University.' },
            { id: '06', label: 'Build',            desc: 'The 24-hour sprint begins. Turn your idea into a functional, working prototype.' },
            { id: '07', label: 'Test',             desc: 'Rigorously test your code and ensure your solution performs flawlessly under pressure.' },
            { id: '08', label: 'Refine',           desc: 'Polish the UI, refine the UX, and prepare your final demonstration for the judges.' },
            { id: '09', label: 'Evaluate',         desc: 'Pitch your product, demonstrate your tech, and compete for victory.' },
          ].map((item, i, arr) => (
            <React.Fragment key={i}>
              <div className="journey-step">
                <div className="journey-bubble">{item.id}</div>
                <div className="journey-content">
                  <div className="journey-label">{item.label}</div>
                  <p className="journey-desc">{item.desc}</p>
                </div>
              </div>
              {i < arr.length - 1 && <span className="journey-arrow">›</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="glow-line" />
    </section>
  );
};

export default About;
