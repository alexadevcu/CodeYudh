import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isError, setIsError] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate left side (info)
      gsap.from(leftRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });

      // Animate right side (form)
      gsap.from(rightRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending transmission...");
    const formData = new FormData(event.target);
    formData.append("access_key", "57287bb1-abd0-4fc6-9ef5-e2dc1c994317");
    formData.append("subject", "New Submission from Code Yudh Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setIsError(false);
        setShowPopup(true);
        event.target.reset();
        // Auto-dismiss after 5 seconds
        setTimeout(() => setShowPopup(false), 5000);
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
        setIsError(true);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);
      }
    } catch (error) {
      console.log(error);
      setResult("Network error. Please check your connection.");
      setIsError(true);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
    }
    setIsSubmitting(false);
  };

  return (
    <>
    {/* Success / Error Popup */}
    {showPopup && (
      <div
        style={{
          position: 'fixed',
          top: '30px',
          right: '30px',
          zIndex: 9999,
          background: isError ? 'rgba(30, 8, 8, 0.95)' : 'rgba(8, 20, 8, 0.95)',
          border: isError ? '1px solid rgba(255, 100, 100, 0.4)' : '1px solid rgba(245, 183, 54, 0.4)',
          borderRadius: '16px',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          backdropFilter: 'blur(16px)',
          boxShadow: isError ? '0 10px 40px rgba(255,100,100,0.15)' : '0 10px 40px rgba(245,183,54,0.15)',
          minWidth: '320px',
          maxWidth: '420px',
          animation: 'slideInRight 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        }}
      >
        {/* Icon */}
        <div style={{
          width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0,
          background: isError ? 'rgba(255,100,100,0.15)' : 'rgba(245,183,54,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: isError ? '#ff6b6b' : 'var(--gold-300)',
        }}>
          {isError ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
          )}
        </div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontWeight: '700', fontSize: '1rem', margin: 0 }}>
            {isError ? 'Transmission Failed' : 'Transmission Sent!'}
          </p>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '0.875rem', margin: '4px 0 0' }}>
            {result}
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '4px', flexShrink: 0 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    )}

    <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 2 }} ref={containerRef}>
      <div className="section-container" style={{ maxWidth: '1100px' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'start'
        }}>
          
          {/* Left Column - Contact Info */}
          <div ref={leftRef} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <div className="section-eyebrow">Get in Touch</div>
              <h2 className="section-title" style={{ marginTop: '10px', fontSize: '2.5rem' }}>Let's Talk <span className="gold-text" style={{ fontStyle: 'italic' }}>Code</span></h2>
              <p className="section-lead" style={{ marginTop: '20px', fontSize: '1.1rem', maxWidth: '400px' }}>
                Have questions about Code Yudh? Whether it's about tracks, evaluation, or sponsorship opportunities, our team is here to help.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '12px', 
                  background: 'rgba(245, 183, 54, 0.1)', border: '1px solid rgba(245, 183, 54, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-300)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem' }}>Email Us</h4>
                  <a href="mailto:codeyudh.cu@gmail.com" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--gold-300)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>codeyudh.cu@gmail.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '12px', 
                  background: 'rgba(245, 183, 54, 0.1)', border: '1px solid rgba(245, 183, 54, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-300)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem' }}>Location</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>Chandigarh University, NH-95<br/>Punjab 140413</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '12px', 
                  background: 'rgba(245, 183, 54, 0.1)', border: '1px solid rgba(245, 183, 54, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-300)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem' }}>Instagram</h4>
                  <a href="https://instagram.com/codeyudh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--gold-300)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>@codeyudh</a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Form */}
          <div ref={rightRef}>
            <div style={{
              background: 'rgba(20, 16, 11, 0.85)',
              border: '1px solid rgba(245, 183, 54, 0.15)',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
            }}>
              <form 
                onSubmit={onSubmit}
                className="contact-form"
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                
                <div className="contact-name-email-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="name" style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '0.95rem', fontWeight: '600', letterSpacing: '0.5px' }}>NAME</label>
                    <input 
                      type="text" name="name" id="name" required placeholder="John Doe"
                      style={{
                        padding: '14px 18px', background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px',
                        color: '#fff', fontFamily: 'var(--font-body)', outline: 'none', transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(245, 183, 54, 0.5)'; e.target.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.target.style.background = 'rgba(255, 255, 255, 0.05)'; }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="email" style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '0.95rem', fontWeight: '600', letterSpacing: '0.5px' }}>EMAIL</label>
                    <input 
                      type="email" name="email" id="email" required placeholder="john@example.com"
                      style={{
                        padding: '14px 18px', background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px',
                        color: '#fff', fontFamily: 'var(--font-body)', outline: 'none', transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(245, 183, 54, 0.5)'; e.target.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.target.style.background = 'rgba(255, 255, 255, 0.05)'; }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="university" style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '0.95rem', fontWeight: '600', letterSpacing: '0.5px' }}>UNIVERSITY / ORGANIZATION</label>
                  <input 
                    type="text" name="university" id="university" required placeholder="Chandigarh University"
                    style={{
                      padding: '14px 18px', background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px',
                      color: '#fff', fontFamily: 'var(--font-body)', outline: 'none', transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(245, 183, 54, 0.5)'; e.target.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.target.style.background = 'rgba(255, 255, 255, 0.05)'; }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="message" style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '0.95rem', fontWeight: '600', letterSpacing: '0.5px' }}>MESSAGE</label>
                  <textarea 
                    name="message" id="message" required rows="4" placeholder="How can we help you?"
                    style={{
                      padding: '14px 18px', background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px',
                      color: '#fff', fontFamily: 'var(--font-body)', outline: 'none', transition: 'all 0.3s ease', resize: 'vertical',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(245, 183, 54, 0.5)'; e.target.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.target.style.background = 'rgba(255, 255, 255, 0.05)'; }}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold"
                  style={{
                    marginTop: '8px', width: '100%', justifyContent: 'center',
                    padding: '16px', fontSize: '1rem', borderRadius: '8px',
                    opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  <span className="btn-shimmer" />
                  <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                </button>
                
                {result && (
                  <p style={{ textAlign: 'center', marginTop: '10px', color: result.includes('error') ? '#ff6b6b' : 'var(--gold-300)', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
                    {result}
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
