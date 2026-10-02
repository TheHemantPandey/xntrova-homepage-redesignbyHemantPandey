import React from 'react';
import { Lightbulb, Target, BarChart3, TrendingUp, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ABOUT_PILLARS } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50/60 relative overflow-hidden scroll-mt-20 border-b border-slate-200/80">
      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Split: Left Strategic Visual & Right Narrative Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 pb-14 border-b border-slate-200/80">
          
          {/* Left Column: Authentic Strategic Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative group">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500/20 via-blue-500/10 to-indigo-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xl shadow-slate-900/10 transition-transform duration-300 group-hover:-translate-y-1">
              <img
                src="/images/about-strategy.png"
                alt="Reviewing campaign performance and results - Xntrova Digital Agency"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11]"
                loading="lazy"
              />
              
              {/* Floating Glassmorphism Metric Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-5 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-200/80 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Commercial Impact
                  </p>
                  <p className="text-sm font-extrabold text-slate-900">
                    Attributed ROAS &amp; Revenue Growth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Badge, Headline & Narrative Story */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-sky-700 text-[11px] font-bold tracking-widest uppercase mb-4 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                ABOUT XNTROVA
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Driven By Ideas.{' '}
                <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
                  Focused on Results.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                At <strong className="text-slate-900 font-semibold">Xntrova</strong>, we believe that the key to great marketing is understanding people. Each of our strategies is rooted in fresh ideas, robust planning, and a clear focus on what truly matters. We combine creativity with data-driven decisions to create meaningful experiences that connect, engage, and inspire action.
              </p>
              <p>
                Whether you want to shape your brand story, improve visibility, or drive conversion, we take a creative and data-driven approach to ensure the best possible results. Standing as the best digital marketing agency in Delhi NCR, we aim to create work that delivers measurable results and helps your business climb the competitive ladder with confidence.
              </p>
            </div>

            {/* Quick Proof Highlights */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs sm:text-sm font-bold text-slate-700">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200/90 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>People-First Creative Strategy</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200/90 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Rigorous Data Decisions</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200/90 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Measurable P&amp;L ROI</span>
              </div>
            </div>
          </div>

        </div>

        {/* Four Strategic Pillars: Crisp White Cards with Modern Soft Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 01: Creative Ideas */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-black text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                  01
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Lightbulb className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                Creative Ideas
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Fresh thinking that builds powerful brand stories and captures customer attention in noisy markets.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-slate-400 group-hover:text-sky-600 transition-colors flex items-center justify-between">
              <span>Brand Storytelling</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 02: Strategic Planning */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-black text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                  02
                </span>
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                Strategic Planning
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Smart, execution-ready strategies backed by competitive research and deep audience insights.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-slate-400 group-hover:text-sky-600 transition-colors flex items-center justify-between">
              <span>Market Architecture</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 03: Data-Driven Decisions */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-black text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                  03
                </span>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                Data-Driven Decisions
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Decisions tied directly to real commercial impact, attributed ROAS, and long-term company growth.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-slate-400 group-hover:text-sky-600 transition-colors flex items-center justify-between">
              <span>Data Architecture</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 04: Measurable Results */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-black text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                  04
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                Measurable Results
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Transparent milestones that reliably advance pipeline velocity and multiply shareholder value.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-slate-400 group-hover:text-sky-600 transition-colors flex items-center justify-between">
              <span>Revenue Acceleration</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
