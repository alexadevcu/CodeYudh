import React from 'react';

const Marquee = () => {
  const items = [
    "CODE YUDH 2026",
    "•",
    "24 HOUR HACKATHON",
    "•",
    "CHANDIGARH UNIVERSITY",
    "•",
    "6 BATTLEFIELDS",
    "•",
    "EXCITING PRIZE POOL",
    "•",
    "FREE REGISTRATION",
    "•",
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {/* Repeat the items multiple times for an infinite seamless scroll */}
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item, index) => (
              <span key={`${i}-${index}`} className="marquee-item">
                {item}
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
