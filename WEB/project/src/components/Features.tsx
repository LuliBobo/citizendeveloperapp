import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Workflow, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Code,
    title: 'No-Code Solutions',
    description: 'Build complex applications without writing a single line of code.'
  },
  {
    icon: Workflow,
    title: 'Streamlined Workflows',
    description: 'Automate your business processes with intuitive visual workflows.'
  },
  {
    icon: Zap,
    title: 'Effortless Integration',
    description: 'Connect with your favorite tools and services seamlessly.'
  }
];

const Features = () => {
  const sectionRef = useRef(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      featureRefs.current.forEach((feature, index) => {
        gsap.from(feature, {
          scrollTrigger: {
            trigger: feature,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                ref={el => featureRefs.current[index] = el}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;