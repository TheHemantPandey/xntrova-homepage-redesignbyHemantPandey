import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import TrustMetrics from './components/TrustMetrics';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import GrowthWorkflow from './components/GrowthWorkflow';
import About from './components/About';
import PerformanceSection from './components/PerformanceSection';
import Testimonials from './components/Testimonials';
import ServiceDeepDive from './components/ServiceDeepDive';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-sky-100 selection:text-sky-700">
      {/* 1. Header with Top Contact Bar & Sticky Navigation */}
      <Header />

      {/* Main Semantic Landmark Container */}
      <main className="flex-grow">
        {/* 1. Hero Section with Asymmetric Layout & Sub-Hero Review Platforms Marquee */}
        <Hero />

        {/* 2. Dual Infinite Client Logos Marquee (Cloudinary Optimized WebP) */}
        <LogoMarquee />

        {/* 3. Trust Metrics & Verified Counters */}
        <TrustMetrics />

        {/* 4. Services Bento Grid Visual Hierarchy */}
        <Services />

        {/* 5. Middle Anchor: Interactive Case Studies & Proven Client Impact (Dark Navy #090E1A) */}
        <Capabilities />

        {/* 6. Process: Connected 4-Stage Growth Journey */}
        <GrowthWorkflow />

        {/* 7. About Xntrova Narrative & 4 Pillars */}
        <About />

        {/* 8. Turning Potential into Performance & Industry-Standard Growth Stack (9 Tools) */}
        <PerformanceSection />

        {/* 9. Verified Executive Testimonials */}
        <Testimonials />

        {/* 10. Service Deep Dive Accordion */}
        <ServiceDeepDive />

        {/* 11. Frequently Asked Questions */}
        <FAQ />

        {/* 12. Bottom Anchor: Sleek Dark Navy Lead Conversion Suite (#080C16) */}
        <Contact />
      </main>

      {/* 13. Deep Obsidian Navy (#05070D) Footer */}
      <Footer />
    </div>
  );
}
