"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ArrowRight, Video, ShieldCheck, Wifi, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "./ui/toast";
import DynamicCounters from "./features/DynamicCounters";
// import { contactForm } from "@/api/functions";

export default function Hero() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });
  const [consultationData, setConsultationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '', // This will now be a select
    itService: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConsultationSubmitting, setIsConsultationSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await contactForm({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        message: `Quote for: ${contactData.service}`
      });

      if (data?.success) {
        toast({ title: "Quote Request Sent", description: "We'll get back to you within 24 hours.", type: "success" });
        setContactData({ name: '', email: '', phone: '', service: '' });
        setShowContactForm(false);
      } else {
        throw new Error(error?.message || 'Failed to send request');
      }
    } catch (error) {
      toast({ title: "Submission Failed", description: error.message || "Please try again or contact us directly.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    setIsConsultationSubmitting(true);

    try {
      const { data, error } = await contactForm({
        name: `${consultationData.firstName} ${consultationData.lastName}`,
        email: consultationData.email,
        phone: consultationData.phone,
        company: consultationData.company, // Pass company field
        message: consultationData.itService
      });

      if (data?.success) {
        toast({ title: "Request Sent!", description: "Thank you! We'll be in touch for your free consultation.", type: "success" });
        setConsultationData({ firstName: '', lastName: '', email: '', phone: '', company: '', itService: '' });
      } else {
        throw new Error(error?.message || 'Failed to send request');
      }
    } catch (error) {
      toast({ title: "Submission Failed", description: error.message || "Please try again or contact us directly.", type: "error" });
    } finally {
      setIsConsultationSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const handleConsultationChange = (e) => {
    setConsultationData({
      ...consultationData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-[#3A4E62] via-[#2a3749] to-[#1e2832] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2353B289' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Integrated Top Banner with Navigation */}
        <div className="relative z-20">
          {/* Green Banner */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gradient-to-r from-[#53B289] to-[#4aa07b] text-white py-3">

            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span className="font-medium">Need a Security System? Get a Free Quote Today!</span>
              </div>
              <a
                href="tel:098765432" className="bg-white text-[#53B289] hover:bg-gray-100 font-semibold px-6 py-2 rounded-md transition-colors flex items-center gap-2">Call 0800 724 526




              </a>
            </div>
          </motion.div>
          
          {/* Navigation Bar - Blended with green gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-b from-[#53B289]/20 to-transparent backdrop-blur-sm">

            <nav className="flex items-center justify-between px-6 lg:px-12 py-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-3">

                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <img
                    src="/images/logo.png"
                    alt="COMSYS Security Logo"
                    className="h-12 w-auto" />

                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="hidden md:flex items-center space-x-8">

                <a href="#services" className="text-white/90 hover:text-white transition-colors font-medium">Services</a>
                <a href="#about" className="text-white/90 hover:text-white transition-colors font-medium">About</a>
                <a href="#contact" className="text-white/90 hover:text-white transition-colors font-medium">Contact</a>
              </motion.div>
            </nav>
          </motion.div>
        </div>

        <div className="relative z-10 flex items-center min-h-[calc(100vh-180px)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Content - Takes up 7 columns */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-8 lg:col-span-7">

                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                    Advanced CCTV &
                    <span className="block bg-gradient-to-r from-[#53B289] to-[#C0E3D4] bg-clip-text text-transparent">
                      Surveillance Systems
                    </span>
                  </h1>
                  <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                    Professional security solutions for homes and businesses in New Zealand. 
                    From high-definition cameras to smart analytics, we protect what matters most.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="bg-[#53B289] hover:bg-[#4aa07b] text-white px-8 py-4 text-lg font-medium group">

                    Secure Your Property
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setShowContactForm(true)}
                    className="border-2 border-[#53B289] bg-transparent text-[#53B289] hover:bg-[#53B289] hover:text-white px-8 py-4 text-lg font-medium transition-all">

                    Get Free Quote
                  </Button>
                </div>

                {/* Dynamic Stats */}
                <DynamicCounters />

                {/* Feature Cards */}
                <div className="mt-12">
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#53B289]/20 hover:bg-white/10 transition-colors">

                      <div className="w-12 h-12 bg-[#53B289] rounded-xl flex items-center justify-center mb-4">
                        <Video className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">HD Clarity</h3>
                      <p className="text-white/70 text-sm">Crystal-clear video quality for undeniable evidence.</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#53B289]/20 hover:bg-white/10 transition-colors">

                      <div className="w-12 h-12 bg-[#53B289] rounded-xl flex items-center justify-center mb-4">
                        <ShieldCheck className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">24/7 Monitoring</h3>
                      <p className="text-white/70 text-sm">Reliable surveillance systems that never sleep.</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form Sidebar - Takes up 5 columns */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="lg:col-span-5">

                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#C0E3D4] max-w-md ml-auto">
                  <h3 className="text-2xl font-bold text-[#3A4E62] mb-4">Connect with Our Security Experts</h3>
                  <p className="text-[#3A4E62] mb-6 leading-relaxed">
                    Need a quote for a new CCTV system? Fill out the form, and one of our specialists will get in touch.
                  </p>

                  <form onSubmit={handleConsultationSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                          First Name *
                      </label>
                      <Input
                        name="firstName"
                        value={consultationData.firstName}
                        onChange={handleConsultationChange}
                        required
                        placeholder="First Name"
                        className="w-full border-gray-300 focus:border-[#53B289] focus:ring-[#53B289]" />

                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                          Last Name *
                      </label>
                      <Input
                        name="lastName"
                        value={consultationData.lastName}
                        onChange={handleConsultationChange}
                        required
                        placeholder="Last Name"
                        className="w-full border-gray-300 focus:border-[#53B289] focus:ring-[#53B289]" />

                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={consultationData.email}
                        onChange={handleConsultationChange}
                        required
                        placeholder="your@email.com"
                        className="w-full border-gray-300 focus:border-[#53B289] focus:ring-[#53B289]" />

                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                        Your phone number *
                      </label>
                      <div className="relative">
                        <Input
                          type="tel"
                          name="phone"
                          value={consultationData.phone}
                          onChange={handleConsultationChange}
                          required
                          placeholder="(09) 123-4567"
                          className="w-full pr-12 border-gray-300 focus:border-[#53B289] focus:ring-[#53B289]" />

                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <div className="w-6 h-4 bg-[#53B289] rounded-sm flex items-center justify-center">
                            <span className="text-white text-xs font-bold">NZ</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                        Home/Company
                      </label>
                      <select
                        name="company"
                        value={consultationData.company}
                        onChange={handleConsultationChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#53B289] focus:border-[#53B289]">

                        <option value="">Select type</option>
                        <option value="Home">Home</option>
                        <option value="Company">Company</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                        What security service do you need? *
                      </label>
                      <Textarea
                        name="itService"
                        value={consultationData.itService}
                        onChange={handleConsultationChange}
                        required
                        placeholder="e.g., Home CCTV, business security, camera upgrade..."
                        className="w-full h-24 resize-none border-gray-300 focus:border-[#53B289] focus:ring-[#53B289]" />

                    </div>

                    <Button
                      type="submit"
                      disabled={isConsultationSubmitting}
                      className="w-full bg-[#53B289] hover:bg-[#4aa07b] text-white py-3 text-lg font-medium rounded-lg transition-colors">

                      {isConsultationSubmitting ?
                      <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div> :

                      'Get Free Consultation'
                      }
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2">

          <div className="w-6 h-10 border-2 border-[#53B289]/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-[#53B289] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }} />

          </div>
        </motion.div>
      </section>

      {/* Contact Lead Form Modal */}
      <AnimatePresence>
        {showContactForm &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowContactForm(false)}>

            <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-[#C0E3D4]"
            onClick={(e) => e.stopPropagation()}>

              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#3A4E62]">Get Your Free Quote</h3>
                <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-600">

                  <X className="w-6 h-6" />
                </Button>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                    Full Name *
                  </label>
                  <Input
                  name="name"
                  value={contactData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name" />

                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                    Email Address *
                  </label>
                  <Input
                  type="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com" />

                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                    Phone Number
                  </label>
                  <Input
                  type="tel"
                  name="phone"
                  value={contactData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number" />

                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3A4E62] mb-2">
                    What service do you need? *
                  </label>
                  <select
                  name="service"
                  value={contactData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#53B289] focus:border-[#53B289]">

                    <option value="">Select a service</option>
                    <option value="Residential CCTV">Residential CCTV</option>
                    <option value="Commercial CCTV">Commercial CCTV</option>
                    <option value="CCTV Installation">CCTV Installation</option>
                    <option value="System Upgrade">System Upgrade</option>
                    <option value="Access Control">Access Control</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#53B289] hover:bg-[#4aa07b] text-white py-3 font-medium">

                  {isSubmitting ?
                <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div> :

                'Get My Free Quote'
                }
                </Button>
              </form>

              <p className="text-xs text-[#3A4E62]/70 text-center mt-4">
                We'll contact you within 24 hours with your personalized quote.
              </p>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}