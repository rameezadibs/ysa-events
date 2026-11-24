import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CalendarCheck, 
  Sparkles, 
  Tv, 
  Radio, 
  Share2, 
  Truck, 
  Wine, 
  Handshake, 
  ArrowRight, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const RadialServices = ({ onSelectServiceInquiry }) => {
  const { t, isRTL, lang } = useLanguage();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  // Map icon names to Lucide components
  const iconMap = {
    CalendarCheck,
    Sparkles,
    Tv,
    Radio,
    Share2,
    Truck,
    Wine,
    Handshake,
  };

  const services = t.services.list;
  const activeService = services[activeServiceIndex] || services[0];
  const ActiveIcon = iconMap[activeService.icon] || Tv;

  const total = services.length;
  // Angles along the upper semicircular arc: from 165 deg (far left) to 15 deg (far right)
  const startAngle = 168;
  const endAngle = 12;
  const angleStep = (startAngle - endAngle) / (total - 1);

  // Navigation helpers
  const handlePrev = () => {
    setActiveServiceIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setActiveServiceIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  return (
    <section 
      id="services-universe" 
      className="relative w-full bg-charcoal-dark text-purewhite py-12 sm:py-16 overflow-hidden border-t border-charcoal selection:bg-signature-red selection:text-purewhite"
    >
      {/* 
        ========================================================================
        ATMOSPHERIC LIGHTING & CONCENTRIC LENS BACKGROUND
        Clean, controlled, architectural lighting without muddy blur blobs.
        ========================================================================
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-charcoal-dark to-obsidian pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-signature-red/[0.07] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER: Clean, Focused, Organized */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs font-mono uppercase tracking-[0.28em] text-signature-red mb-3 font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-signature-red" />
            <span>{t.services.sectionLabel}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-space text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-purewhite uppercase leading-tight"
          >
            {t.services.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-sm sm:text-base text-ivory/70 mt-3 max-w-xl mx-auto"
          >
            {t.services.subheadline}
          </motion.p>
        </div>

        {/* 
          ========================================================================
          DESKTOP RADIAL UNIVERSE: CAMERA LENS APERTURE SHOWCASE
          Architecturally proportioned: Semicircular structure rising from 
          bottom center with 8 upper arc positions, clean radial dividers, 
          and an integrated center console with zero overlap or collision.
          ========================================================================
        */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          
          {/* Semicircular Radial Dial Controls Bar */}
          <div className="relative mb-8 pb-4">
            
            {/* SVG Camera Lens Concentric Dial Arc */}
            <div className="relative w-full h-[220px] select-none">
              <svg 
                viewBox="0 0 1000 240" 
                className="w-full h-full overflow-visible pointer-events-none"
              >
                <defs>
                  {/* Radial Red Glow Filter */}
                  <filter id="redLaserGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#262626" />
                    <stop offset="50%" stopColor="#D71920" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#262626" />
                  </linearGradient>
                </defs>

                {/* Outer Semicircular Lens Ring */}
                <path
                  d="M 60 230 A 460 210 0 0 1 940 230"
                  fill="none"
                  stroke="#262626"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />

                {/* Main Concentric Stage Arc */}
                <path
                  d="M 90 230 A 430 195 0 0 1 910 230"
                  fill="none"
                  stroke="url(#arcGrad)"
                  strokeWidth="2"
                  strokeOpacity="0.6"
                />

                {/* Inner Optical Guideline */}
                <path
                  d="M 130 230 A 390 175 0 0 1 870 230"
                  fill="none"
                  stroke="#1F1F1F"
                  strokeWidth="1"
                />

                {/* Radial Tick Lines for each service */}
                {services.map((_, i) => {
                  const deg = startAngle - i * angleStep;
                  const rad = (deg * Math.PI) / 180;
                  const x1 = 500 + 380 * Math.cos(rad);
                  const y1 = 230 - 170 * Math.sin(rad);
                  const x2 = 500 + 440 * Math.cos(rad);
                  const y2 = 230 - 200 * Math.sin(rad);
                  const isActive = i === activeServiceIndex;

                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isActive ? '#D71920' : '#333333'}
                      strokeWidth={isActive ? '2' : '1'}
                      filter={isActive ? 'url(#redLaserGlow)' : undefined}
                    />
                  );
                })}

                {/* Center Focal Point Marker */}
                <circle cx="500" cy="230" r="4" fill="#D71920" />
                <circle cx="500" cy="230" r="12" fill="none" stroke="#D71920" strokeOpacity="0.4" strokeWidth="1" />
              </svg>

              {/* 
                THE 8 SERVICE NODES ALONG THE UPPER ARC:
                Positioned with calculated geometry directly above the arc line.
                Clean spacing, hover effects, high readability.
              */}
              <div className="absolute inset-0 pointer-events-auto">
                {services.map((service, index) => {
                  const Icon = iconMap[service.icon] || Tv;
                  const isSelected = index === activeServiceIndex;
                  
                  // Elliptical arc coordinates
                  const deg = startAngle - index * angleStep;
                  const rad = (deg * Math.PI) / 180;
                  
                  // rx = 43%, ry = 80% of container height
                  const left = 50 + 43 * Math.cos(rad);
                  const top = 92 - 76 * Math.sin(rad);

                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveServiceIndex(index)}
                      onMouseEnter={() => setActiveServiceIndex(index)}
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      className="group absolute z-20 flex flex-col items-center justify-center focus:outline-none transition-all duration-300"
                      aria-label={service.name}
                    >
                      {/* Circular Button */}
                      <div
                        className={`relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 ${
                          isSelected
                            ? 'bg-signature-red text-purewhite border-purewhite shadow-red-glow scale-110 ring-4 ring-signature-red/30'
                            : 'bg-obsidian text-ivory/70 border-charcoal group-hover:border-signature-red group-hover:text-purewhite group-hover:scale-105'
                        }`}
                      >
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        
                        {/* Red numerical badge */}
                        <span 
                          className={`absolute -top-1 -right-1 text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full transition-colors ${
                            isSelected 
                              ? 'bg-purewhite text-signature-red font-extrabold' 
                              : 'bg-charcoal text-signature-red border border-charcoal-light'
                          }`}
                        >
                          {service.id}
                        </span>
                      </div>

                      {/* Service Short Name Label */}
                      <span
                        className={`mt-2 text-[11px] font-space font-semibold uppercase tracking-wider text-center max-w-[95px] leading-tight transition-colors duration-200 ${
                          isSelected 
                            ? 'text-signature-red font-bold' 
                            : 'text-ivory/60 group-hover:text-purewhite'
                        }`}
                      >
                        {service.shortName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick-Selector Track (Underneath the Arc) */}
            <div className="mt-6 flex items-center justify-center space-x-2 rtl:space-x-reverse">
              <button
                onClick={handlePrev}
                className="p-2 rounded border border-charcoal hover:border-signature-red text-ivory/70 hover:text-purewhite transition-colors"
                title="Previous discipline"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-obsidian border border-charcoal">
                {services.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveServiceIndex(idx)}
                    className={`text-xs font-mono px-2 py-0.5 rounded transition-all ${
                      idx === activeServiceIndex
                        ? 'bg-signature-red text-purewhite font-bold shadow-sm'
                        : 'text-ivory/40 hover:text-ivory/80'
                    }`}
                  >
                    {s.id}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded border border-charcoal hover:border-signature-red text-ivory/70 hover:text-purewhite transition-colors"
                title="Next discipline"
                aria-label="Next service"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 
            ====================================================================
            CENTER CONSOLE / ACTIVE DISCIPLINE SPECIFICATION CARD
            Clean, spacious, beautifully padded, highly organized.
            Zero collision with the upper arc.
            ====================================================================
          */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-obsidian border border-charcoal/90 rounded-xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              {/* Subtle Red Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-signature-red to-transparent" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-6"
                >
                  {/* Top Meta Line: Discipline Number & Category Status */}
                  <div className="flex items-center justify-between border-b border-charcoal/70 pb-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse text-xs font-mono">
                      <span className="text-signature-red font-bold tracking-widest uppercase">
                        DISCIPLINE {activeService.id} OF 08
                      </span>
                      <span className="text-charcoal-light">•</span>
                      <span className="text-ivory/60 font-space uppercase tracking-wider">
                        BROADCAST GRADE SPECIFICATION
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-signature-red/10 border border-signature-red/40 flex items-center justify-center text-signature-red">
                      <ActiveIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Discipline Title & Editorial Tagline */}
                  <div>
                    <h3 className="font-space text-3xl sm:text-4xl font-bold uppercase tracking-tight text-purewhite">
                      {activeService.name}
                    </h3>
                    <p className="font-cormorant italic text-xl text-signature-red font-semibold mt-1">
                      "{activeService.tagline}"
                    </p>
                  </div>

                  {/* Core Description */}
                  <p className="font-inter text-sm sm:text-base text-ivory/80 leading-relaxed font-normal">
                    {activeService.description}
                  </p>

                  {/* Capabilities / Feature Deliverables Grid */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-ivory/50 uppercase tracking-widest block mb-3">
                      KEY DELIVERABLES & CAPABILITIES:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeService.features.map((feat, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center space-x-2.5 rtl:space-x-reverse text-xs font-space text-ivory/90 bg-charcoal/50 hover:bg-charcoal px-3 py-2 rounded border border-charcoal/80 transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-signature-red flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 border-t border-charcoal/70 flex items-center justify-between">
                    <span className="text-xs font-mono text-ivory/40">
                      Standard SLA: Turnkey Production Governance
                    </span>

                    <button
                      onClick={() => onSelectServiceInquiry && onSelectServiceInquiry(activeService.name)}
                      className="group inline-flex items-center space-x-2.5 rtl:space-x-reverse px-5 py-2.5 bg-signature-red hover:bg-red-700 text-purewhite font-space font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 shadow-red-subtle"
                    >
                      <span>{t.services.exploreMore}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* 
          ========================================================================
          MOBILE & TABLET ADAPTIVE DISCIPLINE SHOWCASE
          Completely organized, responsive, touch-friendly.
          No horizontal overflows or tiny cramped dials.
          ========================================================================
        */}
        <div className="lg:hidden space-y-6">
          {/* Mobile Category Pill Selector */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse overflow-x-auto pb-2 no-scrollbar">
            {services.map((service, index) => {
              const isSelected = index === activeServiceIndex;
              const Icon = iconMap[service.icon] || Tv;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceIndex(index)}
                  className={`flex-shrink-0 flex items-center space-x-2 px-3.5 py-2 rounded-full border text-xs font-space font-semibold uppercase tracking-wider transition-all ${
                    isSelected
                      ? 'bg-signature-red text-purewhite border-signature-red shadow-red-subtle'
                      : 'bg-obsidian text-ivory/70 border-charcoal'
                  }`}
                >
                  <span className="font-mono text-[10px] font-bold">{service.id}</span>
                  <span>{service.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Active Discipline Card */}
          <div className="bg-obsidian border border-charcoal p-6 rounded-xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-charcoal pb-3">
              <span className="font-mono text-xs text-signature-red font-bold">
                DISCIPLINE {activeService.id} / 08
              </span>
              <ActiveIcon className="w-5 h-5 text-signature-red" />
            </div>

            <div>
              <h3 className="font-space text-2xl font-bold uppercase text-purewhite">
                {activeService.name}
              </h3>
              <p className="font-cormorant italic text-base text-signature-red font-semibold mt-0.5">
                "{activeService.tagline}"
              </p>
            </div>

            <p className="font-inter text-xs text-ivory/80 leading-relaxed">
              {activeService.description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-mono text-ivory/40 uppercase tracking-wider block">
                DELIVERABLES:
              </span>
              {activeService.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs font-space text-ivory/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-signature-red flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-charcoal">
              <button
                onClick={() => onSelectServiceInquiry && onSelectServiceInquiry(activeService.name)}
                className="w-full py-3 bg-signature-red text-purewhite font-space text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center space-x-2 shadow-red-subtle"
              >
                <span>{t.services.exploreMore}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RadialServices;
