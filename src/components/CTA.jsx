import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('contact-name')?.focus();
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with Deep Slate-900 + Sky Blue Accents */}
        <div className="relative rounded-3xl bg-slate-900 p-10 sm:p-14 lg:p-16 text-white shadow-2xl border border-slate-800 overflow-hidden">
          
          {/* Subtle architectural ambient highlights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 rounded-full blur-[100px] pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/15 rounded-full blur-[90px] pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-[11px] font-bold tracking-widest uppercase mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              LET'S ACCELERATE YOUR REVENUE
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 text-white">
              Ready To Grow Your Business?
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-xl mx-auto mb-9 leading-relaxed">
              Let's turn your digital potential into measurable, compounding revenue.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-md transform hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4 text-sky-600" />
              </a>
            </div>

            {/* Highlights */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-300 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                Custom Growth Roadmap
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                Dedicated Account Lead
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                No Obligation Consultation
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
