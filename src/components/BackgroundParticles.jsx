import React from 'react';

const BackgroundParticles = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: '#050508',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Noise Texture Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: '-50%',
          width: '200%',
          height: '200%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.035,
          mixBlendMode: 'overlay',
          animation: 'noiseDrift 8s steps(10) infinite',
          zIndex: 2
        }}
      />

      {/* Cyber Grid Pattern */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(245, 183, 54, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 183, 54, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)',
          zIndex: 1
        }}
      />

      {/* Large Glowing Ambient Orbs */}
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />
      <div className="ambient-orb orb-3" />
      
      <style>{`
        @keyframes noiseDrift {
          0% { transform: translate(0,0); }
          10% { transform: translate(-1%, -1%); }
          20% { transform: translate(-2%, 1%); }
          30% { transform: translate(1%, -2%); }
          40% { transform: translate(-1%, 2%); }
          50% { transform: translate(-2%, -1%); }
          60% { transform: translate(2%, 1%); }
          70% { transform: translate(1%, 2%); }
          80% { transform: translate(-1%, -1%); }
          90% { transform: translate(2%, -2%); }
          100% { transform: translate(0,0); }
        }

        .ambient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: orbFloat 25s infinite alternate ease-in-out;
          opacity: 0.8;
          z-index: 0;
        }

        .orb-1 {
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(245, 183, 54, 0.4), transparent 70%);
          top: -10vh;
          left: -10vw;
          animation-duration: 30s;
        }

        .orb-2 {
          width: 45vw;
          height: 45vw;
          background: radial-gradient(circle, rgba(212, 148, 26, 0.45), transparent 70%);
          bottom: -10vh;
          right: -10vw;
          animation-duration: 22s;
          animation-delay: -5s;
          animation-direction: alternate-reverse;
        }

        .orb-3 {
          width: 35vw;
          height: 35vw;
          background: radial-gradient(circle, rgba(255, 230, 150, 0.25), transparent 70%);
          top: 30vh;
          left: 30vw;
          animation-duration: 28s;
          animation-delay: -12s;
        }

        @keyframes orbFloat {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10vw, -10vh) scale(1.1); }
          66% { transform: translate(-5vw, 15vh) scale(0.9); }
          100% { transform: translate(5vw, 5vh) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundParticles;
