"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "./ui/toast";
// import { contactForm } from "@/api/functions";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // try {
    //   const { data, error } = await contactForm({
    //     name: formData.name,
    //     email: formData.email,
    //     phone: formData.phone,
    //     company: formData.company, // Pass company field
    //     message: formData.message
    //   });

    //   if (data?.success) {
    //     toast({ title: "Message Sent!", description: "Thank you for your inquiry! We'll get back to you soon.", variant: "default" });
    //     setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    //   } else {
    //     throw new Error(error?.message || 'Failed to send message.');
    //   }
    // } catch (error) {
    //   toast({ title: "Submission Failed", description: error.message || "Please try again or contact us directly.", variant: "destructive" });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#3A4E62] mb-6">
            Contact COMSYS Security
          </h2>
          <p className="text-xl text-[#3A4E62]/80 max-w-3xl mx-auto">
            Ready to secure your property? Get in touch with our New Zealand team 
            for a free consultation and quote on a professional CCTV system.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#3A4E62] mb-6">Get in Touch</h3>
              <p className="text-[#3A4E62]/70 leading-relaxed mb-8">
                Whether you're a business needing a comprehensive surveillance system or a homeowner
                looking to improve security, our team is ready to help with a customized 
                solution for your needs.
              </p>
            </div>

            <div className="space-y-6">
              <a href="tel:0800724526" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-[#53B289]/10 rounded-lg flex items-center justify-center group-hover:bg-[#53B289] transition-colors">
                  <Phone className="w-6 h-6 text-[#53B289] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-semibold text-[#3A4E62]">Phone</div>
                  <div className="text-[#3A4E62]/70">0800 724 526</div>
                </div>
              </a>

              <a href="mailto:info@comsys.co.nz" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-[#53B289]/10 rounded-lg flex items-center justify-center group-hover:bg-[#53B289] transition-colors">
                  <Mail className="w-6 h-6 text-[#53B289] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-semibold text-[#3A4E62]">Email</div>
                  <div className="text-[#3A4E62]/70">info@comsys.co.nz</div>
                </div>
              </a>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#53B289]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#53B289]" />
                </div>
                <div>
                  <div className="font-semibold text-[#3A4E62]">Location</div>
                  <div className="text-[#3A4E62]/70">New Zealand</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#53B289]/10 to-[#3A4E62]/5 rounded-2xl p-8 border border-[#53B289]/20">
              <h4 className="font-bold text-[#3A4E62] mb-2">Free Security Consultation</h4>
              <p className="text-[#3A4E62]/70 text-sm mb-4">
                Get expert advice on your security needs. Whether it's a new installation,
                an upgrade, or system maintenance, we're here to help.
              </p>
              <Button 
                // onClick={() => {
                //   const contactForm = document.querySelector('#contact form');
                //   if (contactForm) {
                //     contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                //     setTimeout(() => {
                //       const firstInput = contactForm.querySelector('input');
                //       if (firstInput) firstInput.focus();
                //     }, 500);
                //   }
                // }}
                className="bg-[#53B289] hover:bg-[#4aa07b] text-white"
              >
                Get Free Quote
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#53B289]/5 to-[#3A4E62]/5 rounded-3xl p-8 border border-[#53B289]/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-[#53B289]/30 focus:border-[#53B289] focus:ring-[#53B289]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                    Home/Company
                  </label>
                  <select
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-[#53B289]/30 rounded-lg focus:ring-2 focus:ring-[#53B289] focus:border-[#53B289] text-[#3A4E62] bg-white"
                  >
                    <option value="">Select type</option>
                    <option value="Home">Home</option>
                    <option value="Company">Company</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-[#53B289]/30 focus:border-[#53B289] focus:ring-[#53B289]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-[#53B289]/30 focus:border-[#53B289] focus:ring-[#53B289]"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                  What can we help you with? *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full h-32 border-[#53B289]/30 focus:border-[#53B289] focus:ring-[#53B289]"
                  placeholder="Tell us about your security needs - home cctv, business surveillance, system upgrade, etc."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#53B289] to-[#4aa07b] hover:from-[#4aa07b] hover:to-[#3e8c67] text-white py-3 text-lg font-medium group"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
