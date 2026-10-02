import React, { useState } from 'react';
import { SERVICE_DEEP_DIVE } from '../data/content';
import { Plus, Minus, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

export default function ServiceDeepDive() {
  const [openId, setOpenId] = useState('marketing');

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleInquire = (e, title) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('contact-name')?.focus();
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative scroll-mt-20 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-[11px] font-bold tracking-widest uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            DELHI NCR SPECIALIZATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Boost Your Brand Growth With Xntrova
          </h2>
          <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
            We aim at improving your online visibility, so you can reach your potential customers and boost conversions.
          </p>
        </div>

        {/* Distinctive Executive Tab-Accordion Treatment */}
        <div className="space-y-4">
          {SERVICE_DEEP_DIVE.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                  isOpen
                    ? 'border-sky-500 shadow-md ring-1 ring-sky-500/20'
                    : 'border-slate-200/90 hover:border-slate-300 shadow-xs'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`deep-dive-content-${item.id}`}
                    id={`deep-dive-btn-${item.id}`}
                    className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                        0{index + 1}
                      </span>
                      <span className="text-lg font-bold text-slate-900">
                        {item.title}
                      </span>
                    </div>

                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-sky-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                </h3>

                {/* Body Content */}
                <div
                  id={`deep-dive-content-${item.id}`}
                  role="region"
                  aria-labelledby={`deep-dive-btn-${item.id}`}
                  className={`transition-all duration-300 ease-in-out px-6 sm:px-8 ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5 font-normal">
                    {item.content}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-3">
                    <a
                      href="#contact"
                      onClick={(e) => handleInquire(e, item.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
