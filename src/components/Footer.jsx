import React, { useState } from 'react';
import { COMPANY_INFO, FOOTER_SERVICES, FOOTER_EXPLORE, FOOTER_LEGAL } from '../data/content';
import { MapPin, Phone, Mail, Sparkles, ArrowRight, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('contact-name')?.focus();
    }
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('contact-name')?.focus();
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterStatus(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  return (
    <footer
      className="relative bg-[#05070D] text-slate-100 pt-16 sm:pt-20 pb-12 border-t border-slate-800/80 overflow-hidden"
      aria-label="Site Footer"
    >
      {/* Soft Ambient Background Highlights */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[350px] h-[200px] bg-sky-400/5 rounded-full blur-[120px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. FOOTER TOP INTRODUCTION & ELEVATED CTA AREA */}
        {/* ========================================================================= */}
        <div className="pb-12 mb-12 border-b border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Brand Identity & Narrative */}
            <div className="lg:col-span-7 space-y-4">
              {/* Official Brand Logo */}
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                className="inline-flex items-center bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm group hover:scale-[1.02] transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="Xntrova Technologies Home"
              >
                <img
                  src="/images/xntrova-logo.png"
                  alt="Xntrova Technologies Logo"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </a>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                India's premier B2B digital marketing agency, delivering growth-focused solutions for businesses across Delhi NCR and beyond.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg font-normal">
                Combining data-driven strategy, fresh creativity, and robust technology to engineer sustainable, measurable business growth.
              </p>

              {/* Decorative Brand Accent Marker */}
              <div className="flex items-center gap-2 pt-1" aria-hidden="true">
                <span className="w-10 h-0.5 rounded-full bg-sky-400" />
                <span className="w-2 h-0.5 rounded-full bg-sky-400/50" />
                <span className="w-1 h-0.5 rounded-full bg-sky-400/20" />
              </div>
            </div>

            {/* Right: Prominent & Elegant Project CTA */}
            <div className="lg:col-span-5">
              <div className="bg-[#0B1120] backdrop-blur-xl rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-slate-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-sky-400">
                      START A PROJECT
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Have a project in mind?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-normal">
                      Let's discuss how we can help your business grow.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    onClick={handleCtaClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-sky-400 hover:text-slate-950 shadow-md transform hover:-translate-y-0.5 transition-all shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <span>Let's Talk</span>
                    <ArrowRight className="w-4 h-4 text-sky-600 group-hover:text-slate-950 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN FOOTER NAVIGATION (4 LOGICAL COLUMNS WITH NEWSLETTER) */}
        {/* ========================================================================= */}
        <nav
          aria-label="Footer Navigation"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800"
        >
          
          {/* Column 1: Explore */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" aria-hidden="true" />
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm" role="list">
              {FOOTER_EXPLORE.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-slate-400 hover:text-sky-400 transition-colors duration-150 inline-flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Our Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" aria-hidden="true" />
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm" role="list">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="text-slate-400 hover:text-sky-400 transition-colors duration-150 inline-flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                      {service}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" aria-hidden="true" />
              Get in Touch
            </h4>
            
            <div className="space-y-3.5 text-sm">
              {/* Address */}
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" aria-hidden="true" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.address}
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-sky-400 transition-colors font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-sky-400 transition-colors font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Social Connect */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" aria-hidden="true" />
              Growth Newsletter
            </h4>

            <p className="text-xs text-slate-400 leading-relaxed">
              Bi-weekly executive breakdowns on unit economics, search indexing, and performance campaigns.
            </p>

            {/* Newsletter Capture Form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-2" noValidate>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/20"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white shrink-0 transition-colors cursor-pointer flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {newsletterStatus && (
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold pt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed to agency briefings</span>
                </div>
              )}
            </form>

            {/* Accessible Social Media Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.linkedin.com/company/xntrova/home/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Xntrova on LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 hover:border-sky-400 hover:text-sky-400 text-slate-400 flex items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74V9.89H5.06v8.61h2.8z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/xntrova.agency/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Xntrova on Instagram"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 hover:border-sky-400 hover:text-sky-400 text-slate-400 flex items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 shadow-xs"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/xntrova/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Xntrova on Facebook"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 hover:border-sky-400 hover:text-sky-400 text-slate-400 flex items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="https://x.com/xntrova"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Xntrova on X (Twitter)"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 hover:border-sky-400 hover:text-sky-400 text-slate-400 flex items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

        </nav>

        {/* ========================================================================= */}
        {/* 3. BOTTOM LEGAL BAR WITH OPERATIONAL STATUS INDICATOR */}
        {/* ========================================================================= */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-normal">
          <div className="order-2 md:order-1 flex flex-wrap items-center gap-4 text-center md:text-left">
            <p>© {new Date().getFullYear()} Xntrova Technologies. All rights reserved.</p>
            
            {/* Operational Status Indicator */}
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>All systems operational</span>
            </div>
          </div>

          {/* Legal policy labels */}
          <div
            className="order-1 md:order-2 flex flex-wrap items-center justify-center md:justify-end gap-x-3.5 gap-y-1.5 text-slate-400"
            aria-label="Legal Disclaimers"
          >
            {FOOTER_LEGAL.map((policy, idx) => (
              <span key={policy} className="flex items-center gap-3.5">
                {idx > 0 && <span className="text-slate-600 hidden sm:inline" aria-hidden="true">•</span>}
                <span className="hover:text-sky-400 transition-colors cursor-default select-none">
                  {policy}
                </span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
