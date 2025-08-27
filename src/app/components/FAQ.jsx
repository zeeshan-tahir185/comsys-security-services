import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordian";

const faqs = [
  {
    question: "Do you provide CCTV maintenance?",
    answer: "Yes, we offer comprehensive maintenance packages including regular system health checks, camera cleaning, software updates, and 24/7 technical support to ensure your CCTV system operates reliably."
  },
  {
    question: "Can I watch CCTV from my phone?",
    answer: "Absolutely! All our CCTV systems include mobile apps for iOS and Android. You can view live footage, receive instant alerts, and review recorded videos from anywhere with an internet connection."
  },
  {
    question: "Do you offer 24/7 monitoring services?",
    answer: "While we don't provide 24/7 monitoring services ourselves, we can integrate your system with professional monitoring services and help you set up comprehensive alert systems for immediate notification of any security events."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3A4E62] mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
             <AccordionItem key={index} value={`item-${index}`} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <AccordionTrigger className="text-lg font-semibold text-left text-[#3A4E62] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#3A4E62]/80 pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}