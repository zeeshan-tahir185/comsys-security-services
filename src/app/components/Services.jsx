"use client"
import React from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  Building, 
  Camera,
  Shield,
  Eye,
  Smartphone,
  CloudUpload,
  Wrench,
  Headphones
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential CCTV",
    intro: "Protect your home and family with professional security cameras.",
    items: [
      "4K HD Cameras",
      "Night Vision",
      "Mobile App Access",
      "Motion Detection"
    ]
  },
  {
    icon: Building,
    title: "Commercial Security",
    intro: "Comprehensive surveillance solutions for businesses of all sizes.",
    items: [
      "Multi-Camera Systems",
      "Access Control",
      "Remote Monitoring",
      "Staff Protection"
    ]
  },
  {
    icon: Camera,
    title: "IP Camera Systems",
    intro: "Advanced network cameras with crystal-clear image quality.",
    items: [
      "High Resolution",
      "Network Storage",
      "Wide Angle View",
      "Weather Resistant"
    ]
  },
  {
    icon: Shield,
    title: "Alarm Integration",
    intro: "Seamlessly connect your CCTV with existing alarm systems.",
    items: [
      "Motion Triggers",
      "Alert Notifications",
      "Emergency Response",
      "Smart Integration"
    ]
  },
  {
    icon: Eye,
    title: "Video Analytics",
    intro: "AI-powered video analysis for enhanced security insights.",
    items: [
      "Facial Recognition",
      "Object Detection",
      "Behavior Analysis",
      "Smart Alerts"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Monitoring",
    intro: "Monitor your property from anywhere with our mobile apps.",
    items: [
      "Live Streaming",
      "Push Notifications",
      "Cloud Recording",
      "Easy Controls"
    ]
  },
  {
    icon: CloudUpload,
    title: "Cloud Storage",
    intro: "Secure cloud-based storage for all your security footage.",
    items: [
      "Automatic Backup",
      "Remote Access",
      "Long-term Storage",
      "Data Security"
    ]
  },
  {
    icon: Wrench,
    title: "Installation & Setup",
    intro: "Professional installation and configuration by certified experts.",
    items: [
      "Site Assessment",
      "Pro Installation",
      "System Testing",
      "User Training"
    ]
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    intro: "Round-the-clock technical support and system maintenance.",
    items: [
      "Technical Support",
      "System Updates",
      "Maintenance Plans",
      "Emergency Service"
    ]
  }
];

export default function Services() {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3A4E62] via-[#2a3749] to-[#1e2832]"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2353B289' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/56d4c3ce6_SECURTYCOMSYS.png"
            alt="COMSYS Logo"
            className="h-12 w-auto mx-auto mb-6 bg-white rounded-lg p-2 shadow-sm"
          />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Complete Security Solutions</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From residential homes to commercial properties, we deliver comprehensive CCTV and surveillance systems tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 flex flex-col hover:shadow-2xl hover:-translate-y-2 hover:from-white/15 hover:to-white/8 transition-all duration-300 border border-white/10 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#53B289]/20 to-[#53B289]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#53B289]/20">
                <service.icon className="w-10 h-10 text-[#53B289]" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed mb-6 flex-grow">
                {service.intro}
              </p>

              <div className="space-y-3">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3 bg-[#53B289]"></div>
                    <span className="text-sm text-white/80 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
