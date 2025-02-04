import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
      
      <div ref={textRef} className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Build Smarter, Launch Faster with Citizen Developer App
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12">
          Transform your ideas into reality without writing a single line of code
        </p>
        <button className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto hover:bg-blue-50 transition-colors">
          Try it Now for Free
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Hero;