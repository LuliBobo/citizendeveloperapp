import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import ScrollingText from './components/ScrollingText';
import Features from './components/Features';
import About from './components/About';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Enable smooth scrolling
    gsap.config({
      autoSleep: 60,
      force3D: true,
      nullTargetWarn: false,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <ScrollingText />
      <Features />
      <About />
    </div>
  );
}

export default App;