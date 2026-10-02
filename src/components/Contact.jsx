import React, { useState } from 'react';
import { COMPANY_INFO, BUDGET_RANGES } from '../data/content';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, RefreshCw, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Performance Marketing (PPC)',
    budget: '$5,000 - $10,000 / month',
    projectDetails: '',
  });

  const availableServices = [
    {
      name: 'Performance Marketing (PPC)',
      short: 'Google & Meta Ads',
    },
    {
      name: 'Technical & Strategic SEO',
      short: 'Rankings & Search Traffic',
    },
    {
      name: 'Web Architecture & Products',
      short: 'Fast Websites & Web Apps',
    },
    {
      name: 'Conversion Optimization (CRO)',
      short: 'Funnels & A/B Testing',
    },
    {
      name: 'Brand & Creative Direction',
      short: 'Storytelling & Design',
    },
    {
      name: 'Social Media Optimization',
      short: 'Audience & Community',
    },
  ];

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const selectService = (service) => {
    setFormData((prev) => ({ ...prev, service }));
    const selectEl = document.getElementById('contact-service');
    if (selectEl) {
      selectEl.value = service;
    }
  };

  const selectBudget = (budget) => {
    setFormData((prev) => ({ ...prev, budget }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid business email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number (7-15 digits)';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.projectDetails.trim()) newErrors.projectDetails = 'Please briefly outline your growth goals';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'Performance Marketing (PPC)',
      budget: '$5,000 - $10,000 / month',
      projectDetails: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-28 bg-[#080C16] text-white relative scroll-mt-20 border-t border-slate-800 overflow-hidden">
      {/* Controlled Atmospheric Ambient Glows */}
      <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-0" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-sky-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            START A CONVERSATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500 bg-clip-text text-transparent">
              Meaningful Together.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-3 font-normal leading-relaxed">
            Ready to replace vanity metrics with real commercial impact? Tell us about your business goals and schedule an executive discovery session.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SPLIT-SCREEN DARK NAVY CONVERSION SUITE (#0F172A)                          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Value Stack & Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Value Stack: What Happens Next? */}
            <div className="bg-[#0F172A] rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                What happens after you reach out?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <span className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-sky-500/10">
                    01
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Discovery Call Scheduled</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      Within 24 business hours, an executive strategist connects to review your pipeline targets and acquisition bottlenecks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-sky-500/10">
                    02
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Forensic Channel Audit</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      We deconstruct your Google/Meta ad accounts, SEO keywords, and conversion funnels to pinpoint immediate opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-sky-500/10">
                    03
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Commercial Proposal</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      Receive an exact sprint roadmap with transparent deliverables, timeline milestones, and projected commercial ROI.
                    </p>
                  </div>
                </div>
              </div>

              {/* 24-Hour Guarantee Pill with Sky-Blue Checkmark */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>24-Hour Executive Response Guarantee</span>
              </div>
            </div>

            {/* Direct Contact Channels Card in bg-[#0F172A] */}
            <div className="bg-[#0F172A] rounded-3xl p-8 border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white">
                Direct Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-center gap-3.5 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Direct Consultation Line</div>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-white hover:text-sky-400 font-bold transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Official Inquiries</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-white hover:text-sky-400 font-bold transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 shrink-0 shadow-xs mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Delhi NCR Headquarters</div>
                    <p className="text-xs font-semibold text-slate-300 leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Follow Our Growth</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com/company/xntrova/home/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400 hover:text-sky-400 text-slate-400 flex items-center justify-center transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74V9.89H5.06v8.61h2.8z"/></svg>
                    </a>
                    <a
                      href="https://www.instagram.com/xntrova.agency/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400 hover:text-sky-400 text-slate-400 flex items-center justify-center transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                    <a
                      href="https://www.facebook.com/xntrova/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400 hover:text-sky-400 text-slate-400 flex items-center justify-center transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a
                      href="https://x.com/xntrova"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (Twitter)"
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400 hover:text-sky-400 text-slate-400 flex items-center justify-center transition-colors"
                    >
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Form Card in bg-[#0F172A] border-slate-800/80 shadow-2xl rounded-2xl p-8 */}
          <div className="lg:col-span-7 bg-[#0F172A] rounded-2xl p-8 sm:p-10 border border-slate-800/80 shadow-2xl relative">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                
                {/* Step Header */}
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill out the parameters below to receive a personalized growth scope within 24 hours.
                  </p>
                </div>

                {/* Form Group 1: Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-slate-900 border-slate-700 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all ${
                        errors.name ? 'border-rose-400 focus:ring-rose-400/20' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-300 mb-1.5">
                      Work Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-slate-900 border-slate-700 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all ${
                        errors.email ? 'border-rose-400 focus:ring-rose-400/20' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Form Group 2: Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-300 mb-1.5">
                      Phone Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-slate-900 border-slate-700 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all ${
                        errors.phone ? 'border-rose-400 focus:ring-rose-400/20' : ''
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-bold text-slate-300 mb-1.5">
                      Company Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Technologies"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-slate-900 border-slate-700 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all ${
                        errors.company ? 'border-rose-400 focus:ring-rose-400/20' : ''
                      }`}
                    />
                    {errors.company && (
                      <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service of Primary Interest Dropdown */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="contact-service" className="block text-xs font-bold text-slate-300">
                      Service of Primary Interest <span className="text-rose-400">*</span>
                    </label>
                    <span className="hidden sm:inline text-[11px] text-slate-400 font-medium">Select primary objective</span>
                  </div>

                  <div className="relative">
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 pr-10 rounded-xl border text-sm text-white bg-slate-900 border-slate-700 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 appearance-none transition-all cursor-pointer font-medium truncate"
                    >
                      {availableServices.map((service) => (
                        <option
                          key={service.name}
                          value={service.name}
                          className="bg-[#0F172A] text-white py-2 text-sm"
                        >
                          {service.name}
                        </option>
                      ))}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-sky-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Interactive Budget Range Pills */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Estimated Monthly Growth Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {BUDGET_RANGES.map((budget) => {
                      const isSelected = formData.budget === budget;
                      return (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => selectBudget(budget)}
                          className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-sky-500 text-white border border-sky-400 shadow-md shadow-sky-500/25 ring-1 ring-sky-400'
                              : 'bg-slate-800 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-700/80'
                          }`}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Scope Textarea */}
                <div>
                  <label htmlFor="contact-details" className="block text-xs font-bold text-slate-300 mb-1.5">
                    Project Scope &amp; Target Revenue Milestones <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-details"
                    name="projectDetails"
                    rows="3"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Briefly describe your current acquisition bottlenecks, timeline, and growth goals..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-slate-900 border-slate-700 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all ${
                      errors.projectDetails ? 'border-rose-400 focus:ring-rose-400/20' : ''
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.projectDetails}
                    </p>
                  )}
                </div>

                {/* Primary Submit Button: bg-sky-500 hover:bg-sky-400 text-white font-semibold py-4 shadow-lg shadow-sky-500/25 */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 transform active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Transmitting Growth Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Strategy Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  100% Confidential • Professional Proposal Dispatched Within 24h
                </p>
              </form>
            ) : (
              /* Success State */
              <div className="py-12 px-4 text-center">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mx-auto mb-5 shadow-xs">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Strategy Request Received
                </h3>
                <p className="text-sm text-slate-300 mb-6 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your growth scope inquiry for <span className="font-semibold text-sky-400">{formData.company}</span> regarding <span className="font-semibold text-white">{formData.service}</span> with a budget of <span className="font-semibold text-emerald-400">{formData.budget}</span> has been validated.
                </p>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-400 mb-8 max-w-sm mx-auto">
                  ⚡ Demo Assessment Prototype: Client-side validation confirmed. In production, our senior strategist contacts you at <span className="text-white font-medium">{formData.email}</span>.
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-white py-3 px-6 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 shadow-xs transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Submit Another Scope
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
