import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tracks = [
  {
    num: '01',
    code: 'CITIES',
    title: 'Smart & Sustainable Cities',
    desc: 'Urban development, smart governance, mobility, waste management, and sustainable infrastructure.',
    tags: ['AI', 'IoT', 'GeoSpatial', 'CivicTech'],
    accent: '#d4941a',
  },
  {
    num: '02',
    code: 'AGRI',
    title: 'AgriTech & Rural Transformation',
    desc: 'Agricultural productivity, farmer livelihoods, rural connectivity, and supply-chain efficiency.',
    tags: ['Precision Farming', 'Drones', 'IoT', 'AI/ML'],
    accent: '#a06b0c',
  },
  {
    num: '03',
    code: 'HEALTH',
    title: 'Healthcare, Wellbeing & Assistive Technologies',
    desc: 'Affordable healthcare delivery, preventive care, wellness, and accessibility.',
    tags: ['MedTech', 'AI/ML', 'Telemedicine'],
    accent: '#f5b736',
  },
  {
    num: '04',
    code: 'EDU',
    title: 'Education, Skilling & Future of Work',
    desc: 'Learning platforms, skill development, employability, and future-of-work technology.',
    tags: ['EdTech', 'AI Tutors', 'VR/AR'],
    accent: '#d4941a',
  },
  {
    num: '05',
    code: 'ENERGY',
    title: 'Energy, Environment & Climate Action',
    desc: 'Environmental sustainability, energy efficiency, climate resilience, and conservation.',
    tags: ['Renewable', 'EV', 'ClimateTech'],
    accent: '#a06b0c',
  },
  {
    num: '06',
    code: 'OPEN',
    title: 'Open Innovation',
    desc: 'Bold, technology-driven ideas beyond defined themes — any scale, any domain.',
    tags: ['AI/ML', 'GenAI', 'Blockchain'],
    accent: '#f5b736',
  },
];

const Tracks = () => {
  const sectionRef = useRef(null);
  const bentoRef  = useRef(null);
  const cardRefs  = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Header ── */
      gsap.fromTo('.tracks-header-anim',
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );

      /* ── Track Cards: optimized hardware-accelerated stagger ── */
      gsap.fromTo(cardRefs.current,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bentoRef.current,
            start: 'top 80%',
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="domains" ref={sectionRef}>
      <div className="glow-line" />
      <div className="section-full">
        <div className="section-inner">

          <div className="tracks-header-anim" style={{ marginBottom: '64px' }}>
            <p className="section-label">Hackathon Battlefields</p>
            <h2 className="section-title">Choose Your Domain</h2>
            <p className="section-desc">
              Six challenge domains spanning the most pressing real-world problems. Pick your battlefield and build solutions that matter.
            </p>
          </div>

          <div className="tracks-bento" ref={bentoRef}>
            {tracks.map((track, idx) => (
              <div
                key={idx}
                className={`track-bento-card track-bento-card--${idx}`}
                ref={el => cardRefs.current[idx] = el}
                style={{ '--card-accent': track.accent }}
              >
                <div className="tbcard__inner">
                  {/* Background number watermark */}
                  <div className="tbcard__watermark">{track.num}</div>

                  {/* Top row */}
                  <div className="tbcard__top">
                    <span className="tbcard__code">{track.code}</span>
                    <span className="tbcard__num-badge">{track.num}</span>
                  </div>

                  {/* Title */}
                  <h3 className="tbcard__title">{track.title}</h3>

                  {/* Desc */}
                  <p className="tbcard__desc">{track.desc}</p>

                  {/* Tags */}
                  <div className="tbcard__tags">
                    {track.tags.map((tag, ti) => (
                      <span key={ti} className="tbcard__tag">{tag}</span>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <div className="tbcard__accent-line" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className="glow-line" />
    </section>
  );
};

export default Tracks;
