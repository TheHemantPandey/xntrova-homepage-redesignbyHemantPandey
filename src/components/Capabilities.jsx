import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { ArrowUpRight, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Capabilities() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'E-Commerce & Online Stores', 'B2B & Technology', 'Retail & Lifestyle', 'Travel & Hospitality'];

  const filteredStudies = selectedCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((study) => study.category === selectedCategory || study.tags.some(t => t.toLowerCase().includes(selectedCategory.toLowerCase())));

  const handleInquire = (e, clientName) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const projectDetails = document.getElementById('contact-details');
      if (projectDetails) {
        projectDetails.value = `Hi, I would like to get results similar to the ${clientName} project.`;
      }
      document.getElementById('contact-name')?.focus();
    }
  };

  return (
    <section 
      id="case-studies" 
      className="py-24 lg:py-28 bg-[#090E1A] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950/40 via-[#090E1A] to-[#090E1A] text-white relative scroll-mt-20 border-y border-slate-800/90 overflow-hidden"
    >
      {/* Anchor alias for backward compatibility */}
      <div id="capabilities" className="absolute -top-20" aria-hidden="true" />

      {/* Atmospheric ambient glow */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none -z-0" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800/80 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-sky-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              PROVEN CLIENT IMPACT
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              See Our Real{' '}
              <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500 bg-clip-text text-transparent">
                Growth Results.
              </span>
            </h2>
          </div>
          <p className="text-base text-slate-400 max-w-md font-normal leading-relaxed">
            See how we help businesses get more customers, boost online sales, and grow their revenue with proven marketing strategies.
          </p>
        </div>

        {/* Interactive Industry Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-slate-800/60">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 ring-1 ring-sky-400'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* CASE STUDIES 2x2 GRID: FROSTED DARK SLATE CARDS (#0F172A/90)               */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study, idx) => (
            <div
              key={study.id}
              className="bg-[#0F172A]/90 backdrop-blur-xl border border-slate-800 hover:border-sky-500/50 rounded-3xl p-8 sm:p-9 transition-all duration-300 shadow-xl hover:shadow-sky-500/5 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Soft ambient corner aura */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" aria-hidden="true" />

              <div className="relative z-10 space-y-6">
                
                {/* Header: Industry Pill & Client Name */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Client: <strong className="text-white font-bold">{study.client}</strong>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug group-hover:text-sky-400 transition-colors">
                  {study.title}
                </h3>

                {/* Challenge & Solution Summary */}
                <div className="space-y-2 text-sm text-slate-300 leading-relaxed font-normal">
                  <p>
                    <strong className="text-white font-semibold">Challenge:</strong> {study.challenge}
                  </p>
                  <p>
                    <strong className="text-white font-semibold">Solution:</strong> {study.solution}
                  </p>
                </div>

                {/* Before / After Metrics Row with High-Contrast Numbers */}
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  {study.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-slate-900/90 rounded-2xl p-3.5 border border-slate-800 text-center"
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5 truncate">
                        {m.label}
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-white tracking-tight mb-0.5">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-bold text-emerald-400 flex items-center justify-center gap-0.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>{m.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clean Browser / Telemetry Mockup Box with Glowing Sky-Blue Curve */}
                <div className="bg-slate-900/95 rounded-2xl border border-slate-800/80 p-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-slate-700" />
                      <div className="w-2 h-2 rounded-full bg-slate-700" />
                      <div className="w-2 h-2 rounded-full bg-sky-400" />
                      <span className="text-[10px] font-mono text-slate-400 ml-1 truncate">
                        analytics.xntrova/{study.id}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      Verified Impact
                    </span>
                  </div>

                  {/* SVG Glowing Telemetry Curve */}
                  <div className="h-12 w-full">
                    <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={`grad-dark-${study.id}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d={
                          idx % 2 === 0
                            ? 'M0,50 C50,45 100,35 150,28 C200,20 250,10 300,5 L300,60 L0,60 Z'
                            : 'M0,52 C60,42 120,45 180,25 C240,12 270,8 300,4 L300,60 L0,60 Z'
                        }
                        fill={`url(#grad-dark-${study.id})`}
                      />
                      <path
                        d={
                          idx % 2 === 0
                            ? 'M0,50 C50,45 100,35 150,28 C200,20 250,10 300,5'
                            : 'M0,52 C60,42 120,45 180,25 C240,12 270,8 300,4'
                        }
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Tags & Action Link */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {study.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700/60">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    onClick={(e) => handleInquire(e, study.client)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-white transition-colors cursor-pointer group/link"
                  >
                    <span>Get Similar Results</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-link-hover:translate-x-0.5 group-link-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
