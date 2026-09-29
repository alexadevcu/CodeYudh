import React from 'react';
import { PortalFieldCollection } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Tracks from './components/Tracks';
import Evaluation from './components/Evaluation';
import Outcomes from './components/Outcomes';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <div className="shader-frame">
        <PortalFieldCollection
          speed={1.00}
          size={1.00}
          length={1.00}
          density={1.00}
          opacity={0.025}
          hue={-195}
          saturation={1.4}
          brightness={1.2}
        />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Tracks />
        <Evaluation />
        <Outcomes />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
