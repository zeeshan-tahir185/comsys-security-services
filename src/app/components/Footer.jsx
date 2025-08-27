import React from "react";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3A4E62] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white rounded-lg p-2 shadow-sm">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/56d4c3ce6_SECURTYCOMSYS.png" 
                  alt="COMSYS Security Logo" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Professional CCTV and security solutions for New Zealand homes and businesses. 
              We provide customized surveillance systems to keep you, your family, and your assets safe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#53B289] rounded-lg flex items-center justify-center hover:bg-[#4aa07b] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#53B289] rounded-lg flex items-center justify-center hover:bg-[#4aa07b] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#53B289] rounded-lg flex items-center justify-center hover:bg-[#4aa07b] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#53B289]">Our Services</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="/#services" className="hover:text-[#53B289] transition-colors">CCTV Systems</a></li>
              <li><a href="/#services" className="hover:text-[#53B289] transition-colors">Residential Security</a></li>
              <li><a href="/#services" className="hover:text-[#53B289] transition-colors">Commercial Surveillance</a></li>
              <li><a href="/#services" className="hover:text-[#53B289] transition-colors">CCTV Installation</a></li>
              <li><a href="/#services" className="hover:text-[#53B289] transition-colors">System Maintenance</a></li>
              <li><a href="/#services" className="hover:text-[#53B289] transition-colors">Access Control</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#53B289]">Contact</h3>
            <div className="space-y-4 text-white/80">
              <a href="tel:0800724526" className="flex items-center space-x-3 hover:text-[#53B289] transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>0800 724 526</span>
              </a>
              <a href="mailto:info@comsys.co.nz" className="flex items-center space-x-3 hover:text-[#53B289] transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@comsys.co.nz</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>New Zealand</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © 2024 COMSYS. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/70 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#53B289] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#53B289] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#53B289] transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}