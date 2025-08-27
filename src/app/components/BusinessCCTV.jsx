"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

const features = [
  'High-resolution 4K cameras',
  'Advanced motion detection and alerts',
  'Facial recognition capabilities',
  'Integration with access control systems',
  'Multi-site monitoring from single dashboard',
  'Detailed reporting and analytics'
];

export default function BusinessCCTV() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative lg:order-last"
            >
                <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
                alt="Business CCTV Security System in Auckland"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 lg:order-first"
            >
                <h2 className="text-4xl font-bold text-[#3A4E62] mb-4">CCTV for Businesses</h2>
                <h3 className="text-2xl font-semibold text-[#53B289]">Advanced Security for Your Business</h3>
                <p className="text-lg text-[#3A4E62]/80 leading-relaxed">
                Protect your Auckland business with enterprise-grade CCTV systems. Multiple camera views, advanced analytics, and comprehensive coverage.
                </p>
                <div className="space-y-3">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#53B289] flex-shrink-0" />
                    <span className="text-md text-[#3A4E62]">{feature}</span>
                    </div>
                ))}
                </div>
                <Button size="lg" onClick={scrollToContact} className="bg-[#53B289] hover:bg-[#4aa07b]">
                    Get Business CCTV Quote
                </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
}