import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Menu, X, ArrowUpRight, Sparkles, ChevronDown, Search, Target, Share2, ShoppingCart, Palette, Megaphone, Code2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS, SERVICES_MEGA_MENU } from '../data/content';

const iconMap = {
  Search,
  Target,
  Share2,
  ShoppingCart,
  Palette,
  Megaphone,
  Code2,
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [servicesOpen, setServicesOpen] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnterServices = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 220);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Hysteresis threshold to prevent rapid jitter/toggling
      if (scrollY > 50) {
        setIsScrolled(true);
      } else if (scrollY < 15) {
        setIsScrolled(false);
      }

      const sectionIds = ['hero', 'services', 'case-studies', 'capabilities', 'workflow', 'about', 'testimonials', 'faq', 'contact'];
      const scrollPos = scrollY + 180;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Contact Micro-Bar: Scrolls naturally with page without causing layout shifts or jitter */}
      <div className="bg-slate-50/95 text-slate-600 border-b border-slate-200/80 w-full h-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-sky-600" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block text-[11px] font-medium text-slate-500">
              Sector 8, Dwarka, New Delhi • Digital Growth &amp; Technology
            </span>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-[11px] font-bold tracking-wider text-sky-600 uppercase hover:text-sky-700 transition-colors flex items-center gap-1"
            >
              <span>FREE AUDIT</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 w-full">
        <nav
          className={`w-full bg-white/90 backdrop-blur-md border-b py-3.5 transition-all duration-200 ${
            isScrolled ? 'border-slate-200/90 shadow-md bg-white/95' : 'border-slate-100 shadow-xs'
          }`}
          aria-label="Main Navigation"
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Official Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg py-1 px-1 transition-transform duration-200"
              aria-label="Xntrova Technologies Home"
            >
              <img
                src="/images/xntrova-logo.png"
                alt="Xntrova Technologies Logo"
                className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;
                const isServices = link.name === 'Services';

                if (isServices) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={handleMouseEnterServices}
                      onMouseLeave={handleMouseLeaveServices}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => {
                          handleNavClick(e, link.href);
                          setServicesOpen(false);
                        }}
                        className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-150 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                          isActive || servicesOpen
                            ? 'text-sky-600 bg-sky-50/80 font-bold'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'
                          }`}
                        />
                        {isActive && (
                          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sky-600" />
                        )}
                      </a>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                      isActive
                        ? 'text-sky-600 bg-sky-50/80 font-bold'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sky-600" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Action CTA: Solid sky-600 CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-sm shadow-sky-600/25 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <span>Book Strategy Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:text-sky-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Menu */}
        <div
          id="mobile-nav-menu"
          className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
            mobileMenuOpen ? 'max-h-[80vh] overflow-y-auto opacity-100 border-t border-slate-100 py-4 mt-3 bg-white px-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-1.5">
            {NAV_LINKS.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key={link.name} className="flex flex-col">
                    <div className="flex items-center justify-between px-4 py-2.5 rounded-lg text-slate-700 hover:bg-sky-50">
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-sm font-semibold text-slate-700 hover:text-sky-600"
                      >
                        {link.name}
                      </a>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-1 rounded text-slate-400 hover:text-sky-600"
                        aria-label="Toggle Services List"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {mobileServicesOpen && (
                      <div className="pl-6 pr-2 py-2 space-y-4 bg-slate-50/60 rounded-xl my-1 border border-slate-100">
                        {SERVICES_MEGA_MENU.columns.map((col) => (
                          <div key={col.id} className="space-y-3">
                            {col.groups.map((group) => {
                              const IconComp = iconMap[group.icon] || Search;
                              return (
                                <div key={group.title}>
                                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-sky-700 uppercase tracking-wider mb-1.5">
                                    <IconComp className="w-3 h-3 text-sky-600" />
                                    <span>{group.title}</span>
                                  </div>
                                  <ul className="space-y-1 pl-4 border-l border-slate-200">
                                    {group.items.map((item) => (
                                      <li key={item}>
                                        <a
                                          href="#services"
                                          onClick={(e) => handleNavClick(e, '#services')}
                                          className="text-xs text-slate-600 hover:text-sky-600 block py-0.5"
                                        >
                                          {item}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 px-4 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 block transition-colors shadow-sm shadow-sky-600/25"
              >
                Book Strategy Call →
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* DESKTOP SERVICES MEGA-MENU DROPDOWN ON HOVER                               */}
      {/* ========================================================================= */}
      {servicesOpen && (
        <div
          onMouseEnter={handleMouseEnterServices}
          onMouseLeave={handleMouseLeaveServices}
          className="hidden md:block absolute top-full left-0 right-0 pt-2 z-50 pointer-events-auto"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-slate-900/15 overflow-hidden grid grid-cols-12 animate-in fade-in zoom-in-95 duration-200">
              
              {/* Left 9 Columns: 3 Columns of Categorized Services */}
              <div className="col-span-8 lg:col-span-9 p-8 sm:p-9 grid grid-cols-3 gap-8">
                {SERVICES_MEGA_MENU.columns.map((col) => (
                  <div key={col.id} className="space-y-7">
                    {col.groups.map((group) => {
                      const IconComponent = iconMap[group.icon] || Search;
                      return (
                        <div key={group.title}>
                          <div className="flex items-center gap-2 pb-2 mb-3.5 border-b border-slate-200/70">
                            <IconComponent className="w-4 h-4 text-[#007ba7] shrink-0" />
                            <span className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                              {group.title}
                            </span>
                          </div>

                          <ul className="space-y-2.5">
                            {group.items.map((item) => (
                              <li key={item}>
                                <a
                                  href="#services"
                                  onClick={(e) => {
                                    handleNavClick(e, '#services');
                                    setServicesOpen(false);
                                  }}
                                  className="text-[13px] sm:text-sm text-slate-600 hover:text-[#007ba7] hover:translate-x-0.5 transition-all duration-150 inline-block font-medium"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Right 3 Columns: Editorial Callout Panel matching image */}
              <div className="col-span-4 lg:col-span-3 bg-[#F0F5F8] p-8 sm:p-9 flex flex-col justify-between border-l border-slate-100">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {SERVICES_MEGA_MENU.panel.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-3.5 font-normal">
                    {SERVICES_MEGA_MENU.panel.description}
                  </p>
                </div>

                <div className="pt-8">
                  <a
                    href="#services"
                    onClick={(e) => {
                      handleNavClick(e, '#services');
                      setServicesOpen(false);
                    }}
                    className="inline-flex items-center justify-between gap-2.5 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#007ba7] hover:bg-[#00668a] shadow-sm transition-all duration-200 group"
                  >
                    <span>{SERVICES_MEGA_MENU.panel.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
