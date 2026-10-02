import React, { useState } from 'react';
import { ArrowRight, PhoneCall, Sparkles, TrendingUp, ShieldCheck, Star, Zap, CheckCircle2 } from 'lucide-react';
import { REVIEW_PLATFORMS } from '../data/content';

function ReviewPlatformLogo({ platform }) {
  if (platform.badgeType === 'image' && platform.logoUrl) {
    return (
      <img
        src={platform.logoUrl}
        alt={platform.name}
        className="h-6 sm:h-7 w-auto max-w-[115px] object-contain opacity-75 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        loading="lazy"
      />
    );
  }

  if (platform.badgeType === 'trustpilot') {
    return (
      <div className="flex items-center gap-2 opacity-75 group-hover:opacity-100 transition-opacity">
        <div className="w-6 h-6 rounded bg-[#00B67A] flex items-center justify-center text-white font-bold text-xs shadow-xs">
          ★
        </div>
        <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-800 group-hover:text-[#00B67A] transition-colors">
          Trustpilot
        </span>
      </div>
    );
  }

  if (platform.badgeType === 'google') {
    return (
      <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.13C3.25 21.31 7.31 24 12 24z" />
          <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.27C.46 8.2 0 10.04 0 12s.46 3.8 1.27 5.42l4.01-3.13z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.69 1.27 6.58l4.01 3.13c.95-2.83 3.6-4.96 6.72-4.96z" />
        </svg>
        <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-800">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
      </div>
    );
  }

  if (platform.badgeType === 'glassdoor') {
    return (
      <div className="flex items-center gap-1.5 opacity-75 group-hover:opacity-100 transition-opacity">
        <div className="w-5 h-5 rounded bg-[#0CAA41] flex items-center justify-center text-white text-[10px] font-black">
          gd
        </div>
        <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-800 group-hover:text-[#0CAA41] transition-colors">
          glassdoor
        </span>
      </div>
    );
  }

  return (
    <span className="font-extrabold text-sm text-slate-800">
      {platform.name}
    </span>
  );
}

export default function Hero() {
  const [activeMetricTab, setActiveMetricTab] = useState('roas');

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (id === 'contact') {
        document.getElementById('contact-name')?.focus();
      }
    }
  };

  const metricData = {
    roas: {
      title: 'Full-Funnel ROAS & Attribution',
      badge: 'Paid Acquisition',
      primaryStat: '4.8x',
      primaryLabel: 'Blended Return on Ad Spend',
      sub1: '+340% YoY Lift',
      sub2: '-62% Blended CAC',
      sub3: '99.4% Attribution Acc.',
      pathD: 'M0,130 C40,110 80,125 120,95 C160,65 200,85 240,50 C280,20 320,35 360,10 L360,150 L0,150 Z',
      strokeD: 'M0,130 C40,110 80,125 120,95 C160,65 200,85 240,50 C280,20 320,35 360,10',
      feedEvent: 'Attributed Conversion: High-Intent B2B Retargeting • 4.8x ROAS • 2m ago',
    },
    seo: {
      title: 'Organic Search Demand Capture',
      badge: 'Programmatic SEO',
      primaryStat: '2.4M',
      primaryLabel: 'Organic Monthly Visits',
      sub1: '+285% Keyword Surge',
      sub2: '#1 Commercial SERP',
      sub3: '0.6s Load Performance',
      pathD: 'M0,140 C50,135 90,115 130,100 C170,85 210,50 250,45 C290,40 330,15 360,5 L360,150 L0,150 Z',
      strokeD: 'M0,140 C50,135 90,115 130,100 C170,85 210,50 250,45 C290,40 330,15 360,5',
      feedEvent: 'Keyword Milestone: Captured Top 3 Ranking for High-Volume Terms • 8m ago',
    },
    pipeline: {
      title: 'B2B Enterprise Pipeline Velocity',
      badge: 'Demand Generation',
      primaryStat: '$180k',
      primaryLabel: 'Qualified Monthly Pipeline',
      sub1: '14.2% Demo Show Rate',
      sub2: '4.6x Pipeline Velocity',
      sub3: '< 12ms Latency',
      pathD: 'M0,125 C45,130 90,90 135,80 C180,70 225,40 270,30 C315,20 340,12 360,8 L360,150 L0,150 Z',
      strokeD: 'M0,125 C45,130 90,90 135,80 C180,70 225,40 270,30 C315,20 340,12 360,8',
      feedEvent: 'Inbound Pipeline: Enterprise SaaS Lead Captured via Account-Based Ads • Just Now',
    },
  };

  const currentMetric = metricData[activeMetricTab];

  // Marquee duplicate for smooth infinite loop
  const reviewMarquee = [...REVIEW_PLATFORMS, ...REVIEW_PLATFORMS, ...REVIEW_PLATFORMS, ...REVIEW_PLATFORMS];

  return (
    <section id="hero" className="relative pt-12 pb-16 lg:pt-18 lg:pb-24 overflow-hidden bg-white text-slate-900 scroll-mt-24 border-b border-slate-200/80">
      {/* Background Soft Sky Blue Radial Aura & Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: 'linear-gradient(to right, #0284C7 1px, transparent 1px), linear-gradient(to bottom, #0284C7 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-sky-100/60 via-sky-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. ASYMMETRIC SPLIT LAYOUT: EDITORIAL VALUE PROPOSITION + LIVE DASHBOARD */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: High-Contrast Editorial Typography & Conversion CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-bold tracking-wide uppercase mb-6 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>✦ Trusted by 150+ High-Growth Brands</span>
            </div>

            {/* High-Impact Headline (Fluid 44px to 66px) */}
            <h1 className="text-4xl sm:text-6xl lg:text-[56px] xl:text-[64px] font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
              Turn Digital Potential into{' '}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent">
                Scalable Revenue.
              </span>
            </h1>

            {/* Subline */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-9 font-normal">
              Full-funnel performance marketing, technical SEO, and conversion-engineered web architecture built for ambitious B2B and B2C brands ready to dominate their market.
            </p>

            {/* Dual High-Conversion CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#case-studies"
                onClick={(e) => scrollToSection(e, 'case-studies')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/25 hover:shadow-sky-600/35 hover:-translate-y-0.5 transition-all text-base cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-800 bg-white border border-slate-300 hover:border-sky-500 hover:text-sky-600 hover:bg-sky-50/50 hover:-translate-y-0.5 transition-all text-base cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <PhoneCall className="w-4 h-4 text-sky-600" />
                <span>Book Strategy Call</span>
              </a>
            </div>

            {/* Inline Social Proof Avatar Stack */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <div className="flex items-center -space-x-2.5">
                <div className="w-9 h-9 rounded-full ring-2 ring-white bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center font-bold text-xs text-white shadow-xs">
                  AG
                </div>
                <div className="w-9 h-9 rounded-full ring-2 ring-white bg-gradient-to-tr from-blue-600 to-indigo-400 flex items-center justify-center font-bold text-xs text-white shadow-xs">
                  PV
                </div>
                <div className="w-9 h-9 rounded-full ring-2 ring-white bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center font-bold text-xs text-white shadow-xs">
                  AV
                </div>
                <div className="w-9 h-9 rounded-full ring-2 ring-white bg-gradient-to-tr from-cyan-600 to-sky-500 flex items-center justify-center font-bold text-xs text-white shadow-xs">
                  NK
                </div>
                <div className="w-9 h-9 rounded-full ring-2 ring-white bg-sky-50 border border-sky-200 flex items-center justify-center font-extrabold text-[11px] text-sky-700 shadow-xs">
                  +80
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="font-bold text-slate-900 text-xs ml-1.5">4.9 / 5</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Verified ratings on Google &amp; Clutch across 80+ engagements
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Modern Light Telemetry Dashboard Card */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:border-sky-300">
              
              {/* Dashboard Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <img src="/favicon.svg" alt="" className="w-4 h-4 rounded ml-1 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-mono font-semibold text-slate-600 ml-1">
                    xntrova.telemetry // GrowthEngine
                  </span>
                </div>
                
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Telemetry
                </span>
              </div>

              {/* Interactive Metric Switcher Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 mb-5">
                <button
                  type="button"
                  onClick={() => setActiveMetricTab('roas')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeMetricTab === 'roas'
                      ? 'bg-white text-sky-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Full-Funnel ROAS
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMetricTab('seo')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeMetricTab === 'seo'
                      ? 'bg-white text-sky-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Organic Curve
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMetricTab('pipeline')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeMetricTab === 'pipeline'
                      ? 'bg-white text-sky-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  B2B Pipeline
                </button>
              </div>

              {/* Primary Stat Card with Dynamic Visual Curve */}
              <div className="bg-gradient-to-b from-sky-50/50 to-white rounded-2xl p-5 border border-slate-200/80 relative overflow-hidden mb-4 shadow-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                    {currentMetric.badge}
                  </span>
                  <span className="text-xs font-extrabold text-sky-600 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> High Impact
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    {currentMetric.primaryStat}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    {currentMetric.primaryLabel}
                  </span>
                </div>

                {/* Dynamic SVG Area Growth Graph */}
                <div className="relative h-24 w-full pt-2">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 360 150" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lightCurveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0284C7" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d={currentMetric.pathD} fill="url(#lightCurveGradient)" />
                    <path
                      d={currentMetric.strokeD}
                      fill="none"
                      stroke="#0284C7"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* 3 Secondary Micro-Metric Pills */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <div className="text-xs font-bold text-slate-900 mb-0.5">{currentMetric.sub1}</div>
                  <div className="text-[10px] text-slate-500 font-medium">Growth Target</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <div className="text-xs font-bold text-slate-900 mb-0.5">{currentMetric.sub2}</div>
                  <div className="text-[10px] text-slate-500 font-medium">Efficiency</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <div className="text-xs font-bold text-emerald-700 mb-0.5">{currentMetric.sub3}</div>
                  <div className="text-[10px] text-slate-500 font-medium">Confidence</div>
                </div>
              </div>

              {/* Live Event Ticker */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-700 truncate">
                  <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="truncate text-[11px] font-medium">{currentMetric.feedEvent}</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-sky-600 shrink-0 ml-2">Active</span>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. SUB-HERO REVIEW PLATFORMS MARQUEE: VERIFIED BADGES & STAR RATINGS       */}
        {/* ========================================================================= */}
        <div className="mt-16 pt-10 border-t border-slate-200/80">
          <div className="text-center mb-6">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
              RECOGNIZED &amp; VERIFIED BY INDUSTRY-LEADING REVIEW PLATFORMS
            </p>
          </div>

          <div className="relative w-full overflow-hidden marquee-container py-2">
            {/* Edge fade blur gradients for crisp white background */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex gap-5 w-max animate-marquee marquee-track items-center">
              {reviewMarquee.map((platform, idx) => (
                <div
                  key={`${platform.name}-${idx}`}
                  className="h-14 sm:h-16 px-6 sm:px-8 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center cursor-default group shrink-0"
                  title={`${platform.name} - ${platform.rating} (${platform.reviewsCount || platform.label})`}
                >
                  <ReviewPlatformLogo platform={platform} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
