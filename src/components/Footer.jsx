import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div>
          <div className="footer-brand-name">Code Yudh</div>
          <div className="footer-brand-sub">Battle of Codes</div>
          <p className="footer-desc">
            A 24-hour software development hackathon organized by the Department of Computer Science and Engineering, Chandigarh University. Build. Solve. Innovate.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="footer-heading">Quick Links</div>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#tracks">Tracks</a></li>
            <li><a href="#evaluation">Evaluation</a></li>
            <li><a href="#outcomes">Eligibility & Outcomes</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="https://unstop.com/" target="_blank" rel="noopener noreferrer">Register</a></li>
          </ul>
        </div>

        {/* Event Info */}
        <div>
          <div className="footer-heading">Event Details</div>
          <ul className="footer-links" style={{ gap: '10px' }}>
            <li><a style={{ cursor: 'default' }}>27–28 October 2026</a></li>
            <li><a style={{ cursor: 'default' }}>Chandigarh University, Mohali</a></li>
            <li><a style={{ cursor: 'default' }}>Teams of 3–4 Members</a></li>
            <li><a style={{ cursor: 'default' }}>Undergraduate Engineering Students</a></li>
            <li><a style={{ cursor: 'default' }}>Hybrid Format (Online + Offline)</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Code Yudh – Battle of Codes. Chandigarh University.</p>
        <p className="footer-tagline">Build · Solve · Innovate</p>
      </div>
    </footer>
  );
};

export default Footer;
