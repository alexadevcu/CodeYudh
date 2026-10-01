import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    badge: 'Phase 1 Opens',
    date: '11 Oct 2026',
    event: 'PPT Submission & Screening Begins',
    sub: '12:00 AM IST',
  },
  {
    badge: 'Phase 1 Closes',
    date: '14 Oct 2026',
    event: 'PPT Submission Deadline',
    sub: '11:59 PM IST',
  },
  {
    badge: 'Final Hackathon',
    date: '27 Oct 2026',
    event: 'Offline 24-Hour Hackathon Begins',
    sub: '08:30 AM IST · Chandigarh University, Mohali',
  },
  {
    badge: 'Hackathon Ends',
    date: '28 Oct 2026',
    event: 'Final Evaluation & Demonstration',
    sub: '05:00 PM IST',
  },
];

const Timeline = () => {
  const sectionRef = useRef(null);
  const trackFillRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Scrub: vertical track line fills as you scroll ──
      gsap.fromTo(
        trackFillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 70%',
            scrub: 1.2,
          },
        }
      );

      // ── Each timeline item reveals on scroll ──
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { autoAlpha: 0, x: 40 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.05,
          }
        );

        // Dot pulses in
        const dot = el.querySelector('.timeline-dot');
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.5,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: el,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
              delay: i * 0.05 + 0.1,
            }
          );
        }
      });

      // ── Left panel slides in ──
      gsap.fromTo(
        '.timeline-left-panel',
        { autoAlpha: 0, x: -50 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" ref={sectionRef}>
      <div className="glow-line" />
      <div className="section">
        <div className="timeline-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '80px', alignItems: 'start' }}>
          {/* Left */}
          <div className="timeline-left-panel">
            <p className="section-label">Key Dates</p>
            <h2 className="section-title">Important<br />Dates</h2>
            <p className="section-desc">
              Mark your calendar. From idea submission to the final battle — here's everything you need to prepare for Code Yudh.
            </p>

            <div style={{ marginTop: '40px', padding: '28px 24px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: '12px' }}>Venue</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)' }}>Chandigarh University</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>Mohali, Punjab, India</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>Hybrid Format: Online PPT Screening → Offline Final Hackathon</p>
            </div>
          </div>

          {/* Right: Timeline */}
          <div>
            <div className="timeline-wrapper">
              {/* Scrubbed fill track */}
              <div className="timeline-track">
                <div ref={trackFillRef} className="timeline-track-fill" />
              </div>

              {events.map((ev, i) => (
                <div
                  key={i}
                  className="timeline-item"
                  ref={el => itemsRef.current[i] = el}
                >
                  <div className="timeline-dot" />
                  <span className="timeline-badge">{ev.badge}</span>
                  <div className="timeline-date">{ev.date}</div>
                  <div className="timeline-event">{ev.event}</div>
                  <div className="timeline-sub">{ev.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="glow-line" />
    </section>
  );
};

export default Timeline;
