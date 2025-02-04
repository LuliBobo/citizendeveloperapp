import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollingText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 10,
        repeat: -1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-blue-900 py-8 overflow-hidden whitespace-nowrap">
      <div ref={textRef} className="inline-block text-white text-xl md:text-3xl font-bold">
        <span className="mx-8">No-Code Solutions</span>
        <span className="mx-8">•</span>
        <span className="mx-8">Streamlined Workflows</span>
        <span className="mx-8">•</span>
        <span className="mx-8">Effortless Integration</span>
        <span className="mx-8">•</span>
        <span className="mx-8">No-Code Solutions</span>
        <span className="mx-8">•</span>
        <span className="mx-8">Streamlined Workflows</span>
        <span className="mx-8">•</span>
        <span className="mx-8">Effortless Integration</span>
      </div>
    </div>
  );
};

export default ScrollingText;