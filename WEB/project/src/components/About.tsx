import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse'
        },
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div ref={textRef}>
          <h2 className="text-4xl font-bold mb-6">Empowering Entrepreneurs</h2>
          <p className="text-lg text-gray-600 mb-8">
            We believe that everyone should have the power to bring their ideas to life. Our mission is to democratize software development by providing intuitive tools that enable entrepreneurs to build and launch their dreams without technical barriers.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
        
        <div ref={imageRef} className="relative">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Team collaboration"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;