"use client"
import React from "react";
import { motion } from "framer-motion";
import { Eye, ShieldCheck, Smartphone, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Deter Crime & Vandalism",
    description: "Visibly placed security cameras are a powerful deterrent against theft, trespassing, and property damage."
  },
  {
    icon: Eye,
    title: "24/7 Peace of Mind",
    description: "Monitor your property around the clock, ensuring you never miss a critical moment, day or night."
  },
  {
    icon: Smartphone,
    title: "Remote Viewing Anywhere",
    description: "Access live and recorded video footage from your smartphone, tablet, or computer, from anywhere in the world."
  },
  {
    icon: CheckCircle,
    title: "Professional Installation",
    description: "Our certified technicians ensure your system is installed correctly for optimal coverage and performance."
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#3A4E62] mb-6">
                The COMSYS
                <span className="block text-[#53B289]">Security Advantage</span>
              </h2>
              <p className="text-xl text-[#3A4E62]/80 leading-relaxed">
                Partner with us to implement a robust surveillance strategy that enhances safety,
                deters threats, and provides actionable insights.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-[#C0E3D4] rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-[#53B289]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3A4E62] mb-2">{benefit.title}</h3>
                    <p className="text-[#3A4E62]/70 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#C0E3D4]/30 to-[#53B289]/10 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#53B289]/10 to-[#C0E3D4]/20 rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#53B289]/15 to-[#C0E3D4]/10 rounded-full transform -translate-x-4 translate-y-4"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-6xl font-bold text-[#53B289] mb-4">4K UHD</div>
                <div className="text-2xl font-semibold text-[#3A4E62] mb-2">Crystal-Clear Video</div>
                <p className="text-[#3A4E62]/70">
                  Capture every detail with high-definition and ultra-high-definition camera options.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12 relative z-10">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-[#C0E3D4]/30">
                  <div className="text-3xl font-bold text-[#3A4E62] mb-2">30m+</div>
                  <div className="text-[#3A4E62]/70 text-sm">Night Vision Range</div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-[#C0E3D4]/30">
                  <div className="text-3xl font-bold text-[#3A4E62] mb-2">IP67</div>
                  <div className="text-[#3A4E62]/70 text-sm">Weatherproof Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
