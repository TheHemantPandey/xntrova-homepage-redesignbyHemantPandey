import React from 'react';
import { CLIENT_BRANDS_ROW_1, CLIENT_BRANDS_ROW_2 } from '../data/content';
import { Sparkles } from 'lucide-react';

function BrandWordmark({ brand }) {
  switch (brand.wordmarkKey) {
    case 'herbals':
      return (
        <span className="font-serif font-black tracking-wider text-sm sm:text-base text-emerald-700 whitespace-nowrap">
          HH <span className="font-sans font-bold text-xs uppercase tracking-widest text-slate-700">HERBALS HERE</span>
        </span>
      );
    case 'sidhe':
      return (
        <span className="font-mono font-black tracking-[0.25em] text-sm sm:text-base text-sky-600 uppercase whitespace-nowrap">
          SIDHE
        </span>
      );
    case 'orange-c':
      return (
        <span className="font-sans font-extrabold text-sm sm:text-base tracking-tight text-slate-900 whitespace-nowrap">
          orange <span className="text-orange-500 font-black">C</span>
        </span>
      );
    case 'vogalife':
      return (
        <span className="font-serif italic font-bold text-sm sm:text-base tracking-wider text-pink-600 whitespace-nowrap">
          Vogalife
        </span>
      );
    case 'mahadev':
      return (
        <span className="font-sans font-black text-xs sm:text-sm tracking-wide uppercase text-slate-900 whitespace-nowrap">
          Mahadev <span className="text-sky-600 font-bold text-[11px]">INDIA TOURS</span>
        </span>
      );
    case 'adorag':
      return (
        <span className="font-sans font-medium text-xs sm:text-sm text-slate-700 whitespace-nowrap">
          adorag <span className="font-black text-slate-950 tracking-wider uppercase text-xs">INVEST</span>
        </span>
      );
    case 'desire':
      return (
        <span className="font-sans font-black tracking-[0.3em] text-xs sm:text-sm uppercase text-slate-950 whitespace-nowrap">
          DESIRE
        </span>
      );
    case 'yoga':
      return (
        <span className="font-sans font-bold text-xs sm:text-sm tracking-normal text-slate-900 whitespace-nowrap">
          Online <span className="text-teal-600 font-extrabold">Yoga</span> Life
        </span>
      );
    case 'quality-tech':
      return (
        <span className="font-sans font-extrabold text-xs sm:text-sm tracking-tight text-slate-900 whitespace-nowrap">
          QUALITY <span className="font-semibold text-slate-500 text-xs">TECH</span>
        </span>
      );
    default:
      return (
        <span className="font-sans font-bold text-xs sm:text-sm tracking-wide uppercase text-slate-900 whitespace-nowrap">
          {brand.name}
        </span>
      );
  }
}

function BrandLogoItem({ brand }) {
  return (
    <div
      className="h-14 sm:h-16 px-6 sm:px-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-300 flex items-center justify-center cursor-default group shrink-0"
      title={brand.name}
    >
      {brand.logo ? (
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className="h-7 sm:h-8 w-auto max-w-[130px] sm:max-w-[150px] object-contain opacity-100 group-hover:scale-105 transition-all duration-300"
          loading="lazy"
        />
      ) : (
        <BrandWordmark brand={brand} />
      )}
    </div>
  );
}

export default function LogoMarquee() {
  // Duplicating arrays ensures mathematically smooth infinite loop
  const row1 = [...CLIENT_BRANDS_ROW_1, ...CLIENT_BRANDS_ROW_1, ...CLIENT_BRANDS_ROW_1];
  const row2 = [...CLIENT_BRANDS_ROW_2, ...CLIENT_BRANDS_ROW_2, ...CLIENT_BRANDS_ROW_2];

  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden relative">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-sky-700 text-[11px] font-bold tracking-widest uppercase mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          ENTERPRISE REPUTATION
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Trusted by Industry Leaders &amp; Fast-Growing Brands
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto mt-2">
          Partnering with regional market leaders in Delhi NCR and global enterprises to unlock sustainable revenue growth.
        </p>
      </div>

      {/* DUAL INFINITE MARQUEE WITH MASK FADES */}
      <div className="relative w-full overflow-hidden marquee-container space-y-4">
        {/* Edge Fade Gradients for Seamless Canvas Transition */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* ROW 1: Scrolling Left (Mainly Logos + Wordmarks) */}
        <div className="flex gap-5 w-max animate-marquee marquee-track items-center">
          {row1.map((brand, idx) => (
            <BrandLogoItem key={`row1-${brand.name}-${idx}`} brand={brand} />
          ))}
        </div>

        {/* ROW 2: Scrolling Right (Mainly Logos + Wordmarks) */}
        <div className="flex gap-5 w-max animate-marquee-reverse marquee-track items-center">
          {row2.map((brand, idx) => (
            <BrandLogoItem key={`row2-${brand.name}-${idx}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
