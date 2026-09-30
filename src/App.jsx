import React from 'react';
import Preloader from './components/Preloader';
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
      <Preloader />
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
