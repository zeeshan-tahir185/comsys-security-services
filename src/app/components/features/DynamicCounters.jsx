"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Video, MapPin, Award } from 'lucide-react';

const stats = [
  { 
    id: 1,
    icon: ShieldCheck, 
    value: 350, 
    label: 'Properties Secured',
    suffix: '+'
  },
  { 
    id: 2,
    icon: Video, 
    value: 1200, 
    label: 'Cameras Installed',
    suffix: '+'
  },
  { 
    id: 3, 
    icon: Award,
    value: 10, 
    label: 'Years of Experience',
    suffix: '+'
  },
  { 
    id: 4, 
    icon: MapPin,
    value: 100, 
    label: 'NZ Owned & Operated',
    suffix: '%'
  },
];

// Custom component to handle the count-up animation without an external library
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  const animate = (timestamp) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }
    
    const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
    const currentVal = Math.floor(progress * end);
    setCount(currentVal);

    if (progress < 1) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
};

const DynamicCounters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          setIsVisible(true);
          window.removeEventListener('scroll', onScroll);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    // Initial check in case the component is already in view
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={ref} className="mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            <stat.icon className="w-8 h-8 text-[#53B289] mb-2" />
            <div className="text-3xl font-bold text-white">
              {isVisible && <AnimatedCounter end={stat.value} duration={2000} suffix={stat.suffix} />}
            </div>
            <p className="text-sm text-white/70 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicCounters;