"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Camera, Smartphone, Cloud } from 'lucide-react';

const reasons = [
  {
    icon: Wrench,
    title: 'Professional Installation',
    description: 'Certified technicians with years of experience'
  },
  {
    icon: Camera,
    title: 'High-Quality Cameras',
    description: '4K resolution with night vision capabilities'
  },
  {
    icon: Smartphone,
    title: 'Remote Monitoring',
    description: 'View your cameras from anywhere via smartphone app'
  },
  {
    icon: Cloud,
    title: 'Cloud Storage',
    description: 'Secure cloud backup of all your footage'
  }
];

export default function WhyChooseCCTV() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3A4E62] mb-4">
            Why Choose Comsys IT for CCTV
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-transparent hover:border-[#53B289]/30"
            >
              <div className="w-16 h-16 bg-[#53B289]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <reason.icon className="w-8 h-8 text-[#53B289]" />
              </div>
              <h3 className="text-xl font-bold text-[#3A4E62] mb-3">{reason.title}</h3>
              <p className="text-[#3A4E62]/70 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}