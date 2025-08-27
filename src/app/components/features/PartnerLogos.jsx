"use client"
import React from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Hikvision", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1ca66eaa7_Hikvision_logosvg.png" },
  { name: "Dahua", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1e8802ad2_download.png" },
  { name: "Axis Communications", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/30996903f_download.png" },
  { name: "Bosch", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6d78dd114_download.png" },
  { name: "Hanwha Vision", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/18067cab1_download.png" },
  { name: "Uniview", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/17ef0a1f9_Univiewlogo.png" }
];

const sliderVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function PartnerLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-center text-2xl font-bold text-[#3A4E62] mb-12">
          We Work With Leading Security Brands
        </h2>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex"
            variants={sliderVariants}
            animate="animate"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-1/2 md:w-1/5 p-8 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 object-contain"
                />
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}