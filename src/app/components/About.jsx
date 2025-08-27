"use client"
import React from "react";
import { motion } from "framer-motion";
import { Award, Users, ShieldCheck, MapPin } from "lucide-react";

const stats = [
  { icon: Award, value: "Certified", label: "Technicians" },
  { icon: Users, value: "Trusted by", label: "Home & Business" },
  { icon: ShieldCheck, value: "Quality", label: "Equipment" },
  { icon: MapPin, value: "NZ", label: "Owned & Operated" }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-[#53B289]/5 to-[#3A4E62]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=800&fit=crop&crop=center"
                alt="Modern building with a security camera"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-[#53B289]/20">
              <div className="text-3xl font-bold text-[#53B289]">10+</div>
              <div className="text-[#3A4E62]/70 text-sm">Years Experience</div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-[#53B289]/20">
              <div className="text-3xl font-bold text-[#53B289]">NZ</div>
              <div className="text-[#3A4E62]/70 text-sm">Local Experts</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#3A4E62] mb-6">
                About
                <span className="block text-[#53B289]">COMSYS Security</span>
              </h2>
              <p className="text-xl text-[#3A4E62]/90 leading-relaxed mb-6">
                COMSYS is your trusted New Zealand-based security provider, delivering 
                state-of-the-art surveillance solutions for both businesses and home users across 
                the country.
              </p>
              <p className="text-[#3A4E62]/80 leading-relaxed">
                We understand that every property has unique security needs. That's why we 
                provide customized CCTV systems, from design and installation to ongoing
                support, ensuring your property is protected by reliable technology.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-[#53B289]/10"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-[#53B289]/10 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-[#53B289]" />
                    </div>
                    <div className="text-2xl font-bold text-[#53B289]">{stat.value}</div>
                  </div>
                  <div className="text-[#3A4E62]/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}