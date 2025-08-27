
"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    id: 1,
    name: 'John Williams',
    company: 'Homeowner, Auckland',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'COMSYS installed a fantastic 4-camera system at our home. The image quality is brilliant and the mobile app is so easy to use. Feel much safer now!'
  },
  {
    id: 2,
    name: 'Linda Franklin',
    company: 'Retail Store Owner, Wellington',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'The team was professional from quote to installation. Our new commercial surveillance system covers every angle of the store. Highly recommended for any business.'
  },
  {
    id: 3,
    name: 'Mark Robinson',
    company: 'Property Manager, Christchurch',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'We use COMSYS for all our managed properties. Their systems are reliable and the support is top-notch. They make multi-site security simple.'
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#C0E3D4]/30 to-[#53B289]/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#3A4E62] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#3A4E62]/80">
            Real feedback from businesses we've helped succeed
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-[#C0E3D4]/30"
            >
              <div className="flex items-center justify-center mb-6">
                <Quote className="w-8 h-8 text-[#53B289]" />
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-lg text-[#3A4E62] mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[#3A4E62]">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#3A4E62]/70 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 border-[#53B289] text-[#53B289] hover:bg-[#53B289] hover:text-white"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 border-[#53B289] text-[#53B289] hover:bg-[#53B289] hover:text-white"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#53B289]' : 'bg-[#53B289]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
