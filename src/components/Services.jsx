import React, { useState } from 'react';
import { MousePointerClick, Search, Code2, TrendingUp, Sparkles, ArrowRight, CheckCircle2, Layers } from 'lucide-react';

export default function Services() {
  const [adSpend, setAdSpend] = useState(5000);

  const handleLearnMore = (e, serviceTitle) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const serviceSelect = document.getElementById('contact-service');
      if (serviceSelect) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].text.includes(serviceTitle) || serviceTitle.includes(serviceSelect.options[i].value)) {
            serviceSelect.selectedIndex = i;
            serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
            break;
          }
        }
      }
      document.getElementById('contact-name')?.focus();
    }
  };

  const estimatedReturn = Math.round(adSpend * 4.6);

  return (
    <section id="services" className="py-24 lg:py-28 bg-slate-50/60 text-slate-900 relative scroll-mt-20 border-b border-slate-200/80 overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-sky-100/40 rounded-full blur-[160px] pointer-events-none -z-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200/80 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-sky-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              SPECIALIZED CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Bespoke Solutions Engineered for{' '}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent">
                Compounding Growth.
              </span>
            </h2>
          </div>
          <p className="text-base text-slate-600 max-w-md font-normal leading-relaxed">
            We don't offer generic agency retainers. We design integrated, data-grounded growth engines tailored to your unit economics and market positioning.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* BENTO GRID VISUAL HIERARCHY (Crisp White Cards + Sky Blue Accents)         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Bento Box 1: FEATURED (Large Bento Box, 8-col span on lg) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            {/* Soft Ambient Card Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-50 rounded-full blur-[100px] pointer-events-none -mr-20 -mt-20" aria-hidden="true" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shadow-xs">
                  <MousePointerClick className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full">
                  Flagship Capability
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                Full-Funnel Performance Marketing
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-8">
                Precision paid advertising campaigns across Google Search, Display, YouTube, and Meta. We architect segmented customer acquisition funnels that maximize commercial ROAS while relentlessly driving down customer acquisition costs.
              </p>

              {/* Embedded Interactive Visual Preview & Live ROAS Simulator */}
              <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/80 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200/80">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                      Target Ad Spend Simulation
                    </span>
                    <span className="text-2xl font-black text-slate-900">
                      ${adSpend.toLocaleString()} <span className="text-xs text-slate-500 font-normal">/ month</span>
                    </span>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                      Projected Pipeline Value (4.6x)
                    </span>
                    <span className="text-2xl font-black text-emerald-600">
                      ${estimatedReturn.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Range Slider with Sky Blue Accent Track */}
                <div className="mb-4">
                  <input
                    type="range"
                    min="2000"
                    max="25000"
                    step="1000"
                    value={adSpend}
                    onChange={(e) => setAdSpend(Number(e.target.value))}
                    aria-label="Monthly Ad Spend Range"
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>$2,000 / mo</span>
                    <span>$10,000 / mo</span>
                    <span>$25,000 / mo</span>
                  </div>
                </div>

                {/* Channel Allocation Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Google Search Intent</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Meta Retargeting Engine</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Multi-Touch Attribution</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">
                Surgical Targeting &bull; Attributed ROI
              </span>
              <a
                href="#contact"
                onClick={(e) => handleLearnMore(e, 'Paid Advertising')}
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
              >
                <span>Book Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Box 2: WEB ARCHITECTURE & DIGITAL PRODUCTS (4-col span on lg) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shadow-xs">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  Digital Infrastructure
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                Web Architecture &amp; Products
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Bespoke, lightning-fast web applications built with modern frameworks. Engineered for frictionless user onboarding, high search engine indexing speed, and flawless mobile conversions.
              </p>

              {/* Mini Benchmark Mockup */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 text-xs font-mono text-slate-700 space-y-2 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Core Web Vitals</span>
                  <span className="text-emerald-600 font-bold">100% Mobile Ready</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">First Contentful Paint</span>
                  <span className="text-sky-600 font-bold">0.4s FCP</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Headless Architecture</span>
              <a
                href="#contact"
                onClick={(e) => handleLearnMore(e, 'Website Development')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento Box 3: TECHNICAL & STRATEGIC SEO (4-col span on lg) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center shadow-xs">
                  <Search className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  Organic Authority
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                Technical &amp; Strategic SEO
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Capture high-intent commercial searches. We deploy semantic keyword mapping, technical crawl audits, and high-authority link infrastructure to generate compounding organic traffic.
              </p>

              {/* Mini SERP Snippet Preview */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs mb-6">
                <div className="text-[10px] text-sky-600 font-mono truncate">example.com › services › delhi-ncr</div>
                <div className="text-xs font-bold text-blue-600 truncate">#1 Commercial Search Ranking</div>
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">Captured top 3 positions for 120+ high-volume industry terms.</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Search Leadership</span>
              <a
                href="#contact"
                onClick={(e) => handleLearnMore(e, 'Search Engine Optimization')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento Box 4: CONVERSION RATE OPTIMIZATION (4-col span on lg) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shadow-xs">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  Revenue Science
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                Conversion Rate Optimization
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Multiply your existing visitor value. Through systematic A/B testing, user journey heatmaps, and friction-free checkout flows, we convert casual visitors into high-LTV customers.
              </p>

              {/* Mini A/B Lift graphic */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs mb-6">
                <span className="text-slate-500 font-medium">Checkout Velocity Lift</span>
                <span className="text-emerald-600 font-black text-sm">+42.6% A/B Win</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Scientific Split Testing</span>
              <a
                href="#contact"
                onClick={(e) => handleLearnMore(e, 'E-Commerce Marketing')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento Box 5: CREATIVE DIRECTION & BRAND IDENTITY (4-col span on lg) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shadow-xs">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  Authority &amp; Creative
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                Brand &amp; Creative Direction
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Build an unmistakable brand identity. We craft compelling brand storytelling, conversion-focused ad creatives, and high-impact design assets that position you ahead of competitors.
              </p>

              {/* Mini Brand Swatch Preview */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-sky-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-blue-600" />
                  <div className="w-3.5 h-3.5 rounded-full bg-indigo-500" />
                  <span className="text-slate-500 ml-1 font-mono text-[10px]">Brand System v2</span>
                </div>
                <span className="text-sky-600 font-bold text-[11px]">Ready</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Visual Positioning</span>
              <a
                href="#contact"
                onClick={(e) => handleLearnMore(e, 'Content Marketing')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
