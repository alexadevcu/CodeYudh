import React from 'react';
import { motion } from 'framer-motion';

import alexaLogo from '../assets/clubs/Alexa Developers community.png';
import gfgLogo from '../assets/clubs/GeekForGeeks Student chapters.png';

const partners = [
  { name: 'Alexa Developers community', logo: alexaLogo },
  { name: 'GeekForGeeks Student chapters', logo: gfgLogo },
];

const Partners = () => {
  return (
    <section id="partners" className="partners-section">
      <div className="section-full">
        <div className="partners-header" style={{ marginBottom: '40px' }}>
          <p className="section-label" style={{ justifyContent: 'center', textAlign: 'center', display: 'flex' }}>Community Backing</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Our Partners & Clubs</h2>
        </div>

        {/* Infinite Scrolling Marquee */}
        <div className="partners-marquee-wrap">
          <div className="partners-marquee">
            {/* Render list enough times to loop seamlessly (since there's only 2, we repeat them a lot) */}
            {[...Array(10)].flatMap(() => partners).map((partner, index) => (
              <div key={index} className="partner-card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px', width: 'auto', padding: '10px 25px' }}>
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  style={{ width: '40px', height: '40px', objectFit: 'contain' }} 
                />
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
