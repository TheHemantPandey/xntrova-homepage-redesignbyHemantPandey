import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleContactLink = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('contact-name')?.focus();
    }
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-slate-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-sky-700 text-[11px] font-bold tracking-widest uppercase mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            CLEAR ANSWERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 mt-3 font-normal">
            Resolve your general queries and concerns with our FAQ section below.
          </p>
        </div>

        {/* Distinctive FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-sky-500 bg-white shadow-md ring-1 ring-sky-500/20'
                    : 'border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-slate-300 shadow-xs'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-btn-${index}`}
                    className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                      {faq.question}
                    </span>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-sky-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  className={`transition-all duration-300 ease-in-out px-6 sm:px-7 ${
                    isOpen ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200/90 text-center shadow-xs">
          <p className="text-sm text-slate-700 font-medium">
            Have a project-specific query not addressed here?{' '}
            <a
              href="#contact"
              onClick={handleContactLink}
              className="text-sky-600 font-bold hover:underline ml-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500 rounded px-1"
            >
              Consult directly with our growth specialists →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
