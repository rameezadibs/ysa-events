import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Video, Maximize } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FeaturedWorkCollage = ({ onOpenShowreel }) => {
  const { t, isRTL } = useLanguage();

  const panels = [
    {
      id: 1,
      title: t.work.panels[0].title,
      category: t.work.panels[0].category,
      tag: t.work.panels[0].tag,
      description: t.work.panels[0].description,
      image: "/home/showcase1.png",
      clipClass: "clip-panel-1",
      delay: 0.1
    },
    {
      id: 2,
      title: t.work.panels[1].title,
      category: t.work.panels[1].category,
      tag: t.work.panels[1].tag,
      description: t.work.panels[1].description,
      image: "/home/showcase2.png",
      clipClass: "clip-panel-2",
      delay: 0.2
    },
    {
      id: 3,
      title: t.work.panels[2].title,
      category: t.work.panels[2].category,
      tag: t.work.panels[2].tag,
      description: t.work.panels[2].description,
      image: "/home/showcase3.png",
      clipClass: "clip-panel-3",
      delay: 0.3
    }
  ];

  return (
    <section className="relative w-full bg-ivory text-obsidian py-12 sm:py-16 overflow-hidden selection:bg-signature-red selection:text-purewhite">
      {/* Background Editorial Watermark */}
      <div className="absolute top-10 left-12 opacity-5 pointer-events-none select-none font-cormorant italic text-9xl text-obsidian">
        Craft
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 
            LEFT COLUMN:
            Large expressive serif typography:
            Some Stories
            Are Meant to Be
            Experienced. (Red italic)
            CTA: VIEW MORE WORK →
          */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-space font-bold uppercase tracking-[0.25em] text-signature-red mb-4">
                <span className="w-2 h-2 rounded-full bg-signature-red" />
                <span>02 // PRODUCTION SHOWCASE</span>
              </div>

              <h2 className="font-cormorant text-5xl sm:text-6xl md:text-7xl font-semibold leading-[0.95] text-obsidian tracking-tight">
                <span>{t.work.headlinePart1}</span>
                <span className="block">{t.work.headlinePart2}</span>
                <span className="block font-cormorant italic text-signature-red font-bold">
                  {t.work.headlinePart3}
                </span>
              </h2>

              <p className="mt-6 text-sm font-inter text-obsidian/75 leading-relaxed max-w-md">
                {t.work.demonstrationNote}
              </p>

              <div className="pt-8">
                <button
                  onClick={onOpenShowreel}
                  className="group inline-flex items-center space-x-3 rtl:space-x-reverse px-6 py-3.5 bg-obsidian text-purewhite font-space text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 hover:bg-signature-red shadow-lg"
                >
                  <span>{t.work.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* 
            RIGHT COLUMN:
            Three Interconnected, Diagonally Clipped Visual Panels:
            Panel 1: Spectacular live event stage with dramatic lighting.
            Panel 2: Professional television camera operator.
            Panel 3: Broadcasting control room with multiple live monitors.
            Interlocking angular geometric crops so the images feel like one artistic composition!
          */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0 relative">
              {panels.map((panel, idx) => (
                <motion.div
                  key={panel.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: panel.delay }}
                  onClick={onOpenShowreel}
                  className={`group relative h-96 sm:h-[460px] overflow-hidden cursor-pointer bg-obsidian shadow-2xl transition-all duration-500 hover:z-20 md:${panel.clipClass}`}
                >
                  {/* Panel Image */}
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-full object-cover filter brightness-90 contrast-105 transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
                  <div className="absolute inset-0 bg-signature-red/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Panel Content (Overlay on hover/focus) */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    {/* Top Tag & Indicator */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 bg-obsidian/80 text-signature-red border border-charcoal rounded-sm backdrop-blur-sm">
                        {panel.tag}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-signature-red/20 group-hover:bg-signature-red text-purewhite flex items-center justify-center transition-colors">
                        <Maximize className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="space-y-1.5 transition-transform duration-300 group-hover:-translate-y-1">
                      <span className="text-[11px] font-space uppercase tracking-wider text-signature-red font-semibold">
                        {panel.category}
                      </span>
                      <h4 className="font-space text-lg font-bold text-purewhite leading-tight">
                        {panel.title}
                      </h4>
                      <p className="text-xs font-inter text-ivory/70 line-clamp-2 pt-1 font-normal opacity-90 group-hover:opacity-100">
                        {panel.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle red bottom active line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-signature-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkCollage;
