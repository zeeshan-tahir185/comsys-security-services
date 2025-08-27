"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Moon, Target, Smartphone, Cloud, Mic } from 'lucide-react';

const features = [
  { icon: Camera, title: '4K Ultra HD', description: 'Crystal clear footage in all lighting conditions' },
  { icon: Moon, title: 'Night Vision', description: 'See clearly up to 30 meters in complete darkness' },
  { icon: Target, title: 'Motion Detection', description: 'Intelligent alerts when movement is detected' },
  { icon: Smartphone, title: 'Remote Access', description: 'View live and recorded footage from anywhere' },
  { icon: Cloud, title: 'Cloud Storage', description: 'Secure backup of all footage to the cloud' },
  { icon: Mic, title: 'Two-Way Audio', description: 'Communicate through selected cameras' }
];

export default function SystemFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3A4E62] mb-4">Features of Our Systems</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-6 p-6"
            >
              <div className="w-16 h-16 bg-[#C0E3D4] rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-8 h-8 text-[#53B289]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3A4E62] mb-2">{feature.title}</h3>
                <p className="text-[#3A4E62]/70 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}