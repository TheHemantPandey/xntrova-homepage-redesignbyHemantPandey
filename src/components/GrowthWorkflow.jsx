import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/content';
import { CheckCircle2, Activity, ArrowRight, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

export default function GrowthWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  const selectedStep = WORKFLOW_STEPS[activeStep];

  return (
    <section id="workflow" className="py-24 lg:py-28 bg-white text-slate-900 border-b border-slate-100 relative scroll-mt-20 overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-[140px] pointer-events-none -z-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-sky-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
            <Activity className="w-3.5 h-3.5 text-sky-600" />
            ENGINEERED DELIVERY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            An Intuitive 4-Stage{' '}
            <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent">
              Growth Journey.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 font-normal leading-relaxed">
            Predictable growth isn't an accident. We replace agency guesswork with a transparent, sprint-based execution line with clear milestones, deliverables, and accountability.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CONNECTED JOURNEY LINE: 01 Discover → 02 Architect → 03 Execute → 04 Scale*/}
        {/* ========================================================================= */}
        <div className="relative mb-14">
          
          {/* Desktop Connected Gradient Line */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-8 right-8 h-1 bg-sky-500 z-0 rounded-full shadow-sm shadow-sky-500/25" />

          {/* Stepper Buttons / Connectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative z-10 overflow-hidden group bg-white ${
                    isActive
                      ? 'border-sky-500 shadow-xl shadow-sky-500/10 -translate-y-1 ring-2 ring-sky-400/30'
                      : isPast
                        ? 'border-slate-200 hover:border-sky-300 text-slate-700 shadow-xs'
                        : 'border-slate-200/80 hover:border-sky-300 text-slate-500 shadow-xs'
                  }`}
                >
                  {/* Step Phase Top Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-black transition-colors ${
                          isActive
                            ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25'
                            : 'bg-sky-50 text-sky-700 border border-sky-100'
                        }`}
                      >
                        {step.step}
                      </span>
                      <span className={`text-sm font-extrabold tracking-wide ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                        {step.phase}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/60 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-sky-600" />
                      {step.timeline}
                    </span>
                  </div>

                  <h3 className={`text-base font-bold mb-2 transition-colors ${isActive ? 'text-sky-600' : 'text-slate-900'}`}>
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span>{step.badge}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-sky-600 translate-x-1' : 'text-slate-400'}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EXPANDED ACTIVE STEP DEEP-DIVE CARD                                       */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full uppercase">
                  Phase {selectedStep.step} &bull; {selectedStep.timeline}
                </span>
                <span className="text-xs text-slate-500 font-medium">Sprint Focus</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {selectedStep.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {selectedStep.description}
              </p>

              {/* Verified Deliverables Pill Stack */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Core Stage Deliverables:
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                  <span>{selectedStep.deliverables}</span>
                </div>
              </div>
            </div>

            {/* Right: Transparency Guarantee Badge Card */}
            <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mx-auto shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Complete Transparency</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Bi-weekly video sprint reviews, live Looker Studio telemetry dashboards, and direct Slack channel access with senior strategists.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
