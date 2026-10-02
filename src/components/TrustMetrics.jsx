import React, { useState, useEffect, useRef } from 'react';
import { TRUST_METRICS } from '../data/content';
import { TrendingUp, Users, Award, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function TrustMetrics() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const targets = [120, 500, 250];
          const increments = [4, 15, 8];
          const current = [0, 0, 0];

          const timer = setInterval(() => {
            let done = true;
            for (let i = 0; i < targets.length; i++) {
              if (current[i] < targets[i]) {
                current[i] = Math.min(current[i] + increments[i], targets[i]);
                done = false;
              }
            }
            setCounts([...current]);
            if (done) clearInterval(timer);
          }, 30);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="trust" ref={sectionRef} className="py-16 lg:py-20 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading / Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-100 gap-4">
          <div>
            <div className="text-[11px] font-extrabold tracking-widest text-sky-600 uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              VERIFIED TRACK RECORD
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Proven Performance Backed by Measurable Client Results
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Full-Funnel attribution across Delhi NCR and global markets
          </p>
        </div>

        {/* Horizontal Metrics Band: Large Slate-900 Numbers with Sky-Blue Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 mb-10">
          
          {/* Metric 1: Projects Delivered */}
          <div className="py-6 md:py-0 md:px-8 first:pl-0 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Execution Track Record
                </span>
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              <div className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight tabular-nums mb-2">
                {hasAnimated ? counts[0] : 0}+
              </div>
              <div className="text-base font-bold text-slate-800">Projects Delivered</div>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              High-converting digital marketing architectures, web applications, and multi-channel campaigns.
            </p>
          </div>

          {/* Metric 2: Happy Clients */}
          <div className="py-6 md:py-0 md:px-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Client Retention
                </span>
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight tabular-nums mb-2">
                {hasAnimated ? counts[1] : 0}+
              </div>
              <div className="text-base font-bold text-slate-800">Happy Clients</div>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              B2B and B2C organizations relying on Xntrova as their dedicated growth and performance partner.
            </p>
          </div>

          {/* Metric 3: Organic Traffic */}
          <div className="py-6 md:py-0 md:px-8 last:pr-0 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Average Client Impact
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <div className="text-5xl sm:text-6xl font-black text-sky-600 tracking-tight tabular-nums mb-2">
                +{hasAnimated ? counts[2] : 0}%
              </div>
              <div className="text-base font-bold text-slate-800">Organic Traffic Boost</div>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Compound surge in high-intent keyword impressions and search-engine market share.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
