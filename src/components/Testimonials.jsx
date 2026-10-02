import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/content';
import { ChevronLeft, ChevronRight, Star, CheckCircle2, Quote, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) {
      handleNext();
    } else if (touchEnd - touchStart > 50) {
      handlePrev();
    }
  };

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-28 bg-white text-slate-900 border-b border-slate-100 relative scroll-mt-20 touch-pan-y overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-[150px] pointer-events-none -z-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200/80 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-sky-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              VERIFIED EXECUTIVE SOCIAL PROOF
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Words From Leaders We{' '}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent">
                Accelerate.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 font-normal leading-relaxed">
              Unfiltered endorsements and verified quantitative outcomes from founders, CEOs, and directors who scaled with Xntrova.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-12 h-12 rounded-2xl border border-slate-200 bg-white hover:border-sky-500 hover:text-sky-600 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-12 h-12 rounded-2xl border border-slate-200 bg-white hover:border-sky-500 hover:text-sky-600 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ASYMMETRICAL EDITORIAL TESTIMONIAL CARDS (OFF-WHITE + SLATE BORDERS)       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1].map((offset) => {
            const index = (currentIndex + offset) % TESTIMONIALS.length;
            const item = TESTIMONIALS[index];

            return (
              <div
                key={`${item.name}-${index}`}
                className={`p-8 sm:p-10 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm hover:shadow-xl hover:bg-white flex flex-col justify-between transition-all duration-300 hover:border-sky-300 relative overflow-hidden group ${
                  offset === 1 ? 'hidden md:flex' : 'flex'
                }`}
              >
                {/* Top Row: Quantitative Result Metric & Platform Badge */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    {/* Quantitative Highlight Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{item.resultMetric}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {item.platform}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Quote */}
                  <div className="relative mb-8">
                    <Quote className="w-8 h-8 text-sky-100 absolute -top-3 -left-2 pointer-events-none -z-0" />
                    <p className="relative z-10 text-base sm:text-lg text-slate-700 leading-relaxed font-normal italic">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Info & Verified Signature */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    {/* Stylized Avatar with Initials */}
                    <div className={`w-12 h-12 rounded-2xl ${item.avatarBg || 'bg-sky-600'} text-white font-black text-base flex items-center justify-center shadow-xs ring-2 ring-slate-100`}>
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {item.role}, <span className="text-sky-600 font-semibold">{item.company}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-emerald-700 font-bold flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Client
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-12">
          {TESTIMONIALS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to testimonial ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                dotIdx === currentIndex ? 'w-10 bg-sky-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
