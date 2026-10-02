import React from 'react';
import { GROWTH_STACK_TOOLS } from '../data/content';
import { TrendingUp, Users, Zap, ShieldCheck, Compass, BarChart3, Layers, Sparkles, CheckCircle2, Cpu } from 'lucide-react';

function GrowthToolLogo({ tool }) {
  switch (tool.slug) {
    case 'meta':
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-auto" fill="#0081FB" aria-label="Meta">
          <path d="M12.001 7.234c-1.792-2.548-4.043-3.734-6.301-3.734-3.411 0-6.177 2.766-6.177 6.177 0 4.549 4.887 9.871 9.421 12.392.936.52 1.988.783 3.057.783s2.121-.263 3.057-.783c4.534-2.521 9.421-7.843 9.421-12.392 0-3.411-2.766-6.177-6.177-6.177-2.258 0-4.509 1.186-6.301 3.734zm-6.301 8.216c-2.029 0-3.674-1.645-3.674-3.674s1.645-3.674 3.674-3.674c1.942 0 4.092 1.838 5.766 4.314-1.674 2.476-3.824 4.314-5.766 4.314zm12.602 0c-1.942 0-4.092-1.838-5.766-4.314 1.674-2.476 3.824-4.314 5.766-4.314 2.029 0 3.674 1.645 3.674 3.674s-1.645 3.674-3.674 3.674z"/>
        </svg>
      );
    case 'ga4':
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-auto" aria-label="Google Analytics">
          <path fill="#F9AB00" d="M21.6 19.2h-3.2c-.4 0-.8-.4-.8-.8V5.6c0-.4.4-.8.8-.8h3.2c.4 0 .8.4.8.8v12.8c0 .4-.4.8-.8.8z"/>
          <path fill="#E37400" d="M13.6 19.2h-3.2c-.4 0-.8-.4-.8-.8v-6.4c0-.4.4-.8.8-.8h3.2c.4 0 .8.4.8.8v6.4c0 .4-.4.8-.8.8z"/>
          <circle fill="#F9AB00" cx="4" cy="16.8" r="2.4"/>
        </svg>
      );
    case 'salesforce':
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-auto" fill="#00A1E0" aria-label="Salesforce">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      );
    case 'shopify':
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-auto" aria-label="Shopify">
          <path fill="#95BF47" d="M19.34 5.62c-.04-.26-.26-.45-.52-.46-.26 0-3.32-.08-3.32-.08s-2.15-2.14-2.39-2.38c-.24-.24-.72-.17-.9-.12l-1.33.42c-.41.13-.57.34-.64.58L9.07 7.74l3.86 1.18 5.79-1.78.62-1.52z"/>
          <path fill="#5E8E3E" d="M12.93 8.92L9.07 7.74 6.7 15.03c1.78 1.11 5.92 1.65 8.15.93l-1.92-7.04z"/>
          <path fill="#95BF47" d="M18.82 5.16c-.26 0-3.32-.08-3.32-.08l-2.57 3.84 5.79-1.78.1-.46c-.04-.26-.26-.45-.52-.46"/>
          <path fill="#FFFFFF" d="M13.78 12.3c-.04-.2-.23-.33-.43-.33-.04 0-.08.01-.12.02-.75.24-1.57.12-2.14-.3-.39-.29-.53-.74-.38-1.21.18-.55.69-.93 1.28-.96.65-.03 1.28.32 1.57.87.09.18.3.26.48.17.18-.09.26-.3.17-.48-.41-.78-1.28-1.27-2.18-1.23-.83.04-1.55.57-1.8 1.34-.21.66-.02 1.3.52 1.71.74.55 1.83.69 2.8.38.2-.06.31-.27.27-.47"/>
        </svg>
      );
    case 'hubspot':
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-auto" fill="#FF7A59" aria-label="HubSpot">
          <path d="M18.8 8.6V6.1c.9-.4 1.5-1.3 1.5-2.3 0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5c0 1 .6 1.9 1.5 2.3v2.5c-.8.3-1.5.8-2 1.5l-6.2-4.8c.1-.3.1-.7.1-1 0-1.8-1.5-3.3-3.3-3.3S2.1 2 2.1 3.8s1.5 3.3 3.3 3.3c.6 0 1.2-.2 1.7-.5l6.1 4.7c-.5.8-.8 1.8-.8 2.8s.3 2 .8 2.8l-6.1 4.7c-.5-.3-1.1-.5-1.7-.5-1.8 0-3.3 1.5-3.3 3.3S3.6 27.7 5.4 27.7s3.3-1.5 3.3-3.3c0-.3 0-.7-.1-1l6.2-4.8c.5.7 1.2 1.2 2 1.5v2.5c-.9.4-1.5 1.3-1.5 2.3 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1-.6-1.9-1.5-2.3v-2.5c1.8-.7 3.1-2.4 3.1-4.4s-1.3-3.7-3.1-4.4zm-1-4.5c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zM5.4 5.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zm12.4 11.2c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3z"/>
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 38 57" className="h-7 w-auto" aria-label="Figma">
          <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
          <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
          <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
          <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
          <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
        </svg>
      );
    case 'ahrefs':
      return (
        <div className="w-8 h-8 rounded-xl bg-[#FF5A00] flex items-center justify-center text-white font-black text-sm shadow-xs group-hover:scale-105 transition-transform">
          a
        </div>
      );
    case 'semrush':
      return (
        <div className="w-8 h-8 rounded-xl bg-[#FF642D] flex items-center justify-center text-white font-black text-sm shadow-xs group-hover:scale-105 transition-transform">
          <span className="text-white text-xs">▲</span>
        </div>
      );
    case 'canva':
      return (
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] flex items-center justify-center text-white font-serif italic font-black text-base shadow-xs group-hover:scale-105 transition-transform">
          C
        </div>
      );
    default:
      return (
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs text-white shadow-xs"
          style={{ backgroundColor: tool.color }}
        >
          {tool.name.substring(0, 2)}
        </div>
      );
  }
}

export default function PerformanceSection() {
  const toolsMarquee = [...GROWTH_STACK_TOOLS, ...GROWTH_STACK_TOOLS, ...GROWTH_STACK_TOOLS, ...GROWTH_STACK_TOOLS];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden scroll-mt-20 border-b border-slate-200/80">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-sky-100/30 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. STRATEGIC GROWTH MODELING SPLIT                                        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Modern Light Designed Performance Visual */}
          <div className="lg:col-span-6 relative">
            <div className="bg-slate-50/80 rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
              
              {/* Interface Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  <span className="text-xs font-mono font-medium text-slate-500 ml-1">xntrova.framework/growth-engine</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/80 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
                  Live Attribution
                </span>
              </div>

              {/* Main Metric Visual Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 mb-5 shadow-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                    Strategic Growth Modeling
                  </span>
                  <span className="text-xs font-extrabold text-sky-600 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> High Impact
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Measurable Growth
                </div>

                {/* Subtle Bar Chart Illustration */}
                <div className="flex items-end gap-2 h-16 pt-2">
                  {[32, 45, 38, 58, 52, 72, 65, 82, 75, 92, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className={`flex-1 rounded-t transition-all ${
                        i >= 8 ? 'bg-sky-500 shadow-xs' : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Sub-metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1">
                    <Users className="w-3.5 h-3.5 text-sky-600" />
                    <span>Audience Reach</span>
                  </div>
                  <div className="text-xl font-black text-slate-900">Targeted</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">High-affinity personas</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>Conversion Rate</span>
                  </div>
                  <div className="text-xl font-black text-slate-900">Optimized</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Iterative A/B testing</div>
                </div>
              </div>

              {/* Footer Trust pill */}
              <div className="mt-4 p-3 rounded-xl bg-sky-50/70 border border-sky-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-medium text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span>Strategic Planning + Data Decisions</span>
                </div>
                <span className="font-extrabold text-sky-600 text-[11px]">Active</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Digestible Strategy Blocks */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-[11px] font-bold tracking-widest uppercase mb-4 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                IMPACT &amp; PERFORMANCE
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Turning Potential Into{' '}
                <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
                  Performance
                </span>
              </h2>
            </div>

            {/* 3 Digestible Content Blocks */}
            <div className="space-y-4">
              
              {/* Block 1: Strategy */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Commercial Strategy</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-11 font-normal">
                  Every brand has potential, but potential alone cannot drive growth. At Xntrova, we transform ideas into actions and strategies into measurable results through deep planning and market understanding.
                </p>
              </div>

              {/* Block 2: Data */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Data-Driven Execution</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-11 font-normal">
                  Moreover, we use a strategic approach that combines creativity with data. Through this, we ensure that every campaign, piece of content, and marketing effort serves a clear, measurable purpose.
                </p>
              </div>

              {/* Block 3: Transparency */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Radical Transparency</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-11 font-normal">
                  We believe in complete transparency, collaboration, and continuous improvement. Whether your aim is to increase business visibility, generate quality leads, or strengthen your digital presence, Xntrova is committed to delivering real results.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. DEDICATED INDUSTRY-STANDARD GROWTH STACK & TOOLS SECTION                */}
        {/* ========================================================================= */}
        <div className="pt-12 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-[11px] font-bold tracking-widest uppercase mb-3 shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-sky-600" />
              INTEGRATED TECHNOLOGY ECOSYSTEM
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Industry-Standard Growth Stack &amp; Tools
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              We leverage best-in-class martech, analytics telemetry, and design infrastructure to power campaigns with precision.
            </p>
          </div>

          {/* Grid of 9 Tools with Sky Blue Glow Hover States */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {GROWTH_STACK_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  {/* Official Brand Logo */}
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center p-2 shadow-xs group-hover:scale-105 group-hover:border-sky-300 transition-all shrink-0">
                    <GrowthToolLogo tool={tool} />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {tool.name}
                    </h4>
                    <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">
                      {tool.category}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>

          {/* Continuous Running Marquee of Tools */}
          <div className="relative w-full overflow-hidden marquee-container py-3">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex gap-5 w-max animate-marquee-reverse marquee-track items-center">
              {toolsMarquee.map((tool, idx) => (
                <div
                  key={`${tool.name}-${idx}`}
                  className="h-14 sm:h-16 px-6 sm:px-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-300 flex items-center justify-center cursor-default group shrink-0"
                  title={`${tool.name} - ${tool.category}`}
                >
                  <GrowthToolLogo tool={tool} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
