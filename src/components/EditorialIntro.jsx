import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Layers, Sliders } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const EditorialIntro = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative w-full bg-ivory text-obsidian py-12 sm:py-16 lg:py-20 overflow-hidden selection:bg-signature-red selection:text-purewhite">
      {/* Subtle Editorial Background Grid / Noise */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#080808 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* 
            LEFT COLUMN:
            Oversized expressive serif typography:
            WE MAKE
            IDEAS
            LIVE. (Signature Red, italic, visually dominant)
          */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs font-space font-bold uppercase tracking-[0.3em] text-signature-red block mb-4">
                01 // MANIFESTO
              </span>

              <h2 className="font-cormorant text-6xl sm:text-7xl md:text-8xl xl:text-8xl font-bold uppercase tracking-tight leading-[0.88] text-obsidian">
                <span className="block text-obsidian font-normal">{t.intro.titlePart1}</span>
                <span className="block text-obsidian font-semibold">{t.intro.titlePart2}</span>
                <span className="block font-cormorant italic text-signature-red font-bold tracking-normal drop-shadow-sm">
                  {t.intro.titlePart3}
                </span>
              </h2>

              <div className="mt-8 flex items-center space-x-3 rtl:space-x-reverse text-xs font-mono text-obsidian/60">
                <span className="inline-block w-8 h-[1px] bg-signature-red" />
                <span>DUBAI • REGIONAL • GLOBAL</span>
              </div>
            </motion.div>
          </div>

          {/* 
            MIDDLE:
            Thin diagonal divider separating the headline from the company introduction
          */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-full min-h-[300px]">
            <div className="w-[1.5px] h-64 bg-gradient-to-b from-transparent via-obsidian/20 to-transparent transform rotate-12" />
          </div>

          {/* 
            RIGHT COLUMN:
            Introduction copy + Editorial narrative
          */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="font-cormorant text-2xl sm:text-3xl md:text-3xl lg:text-[32px] text-obsidian font-medium leading-snug">
                "{t.intro.body}"
              </p>

              <p className="font-inter text-sm sm:text-base text-obsidian/75 leading-relaxed font-normal">
                {t.intro.detailSub}
              </p>

              {/* Diagonal Photographic Crop Showing Professional Production Mixing Console */}
              <div className="pt-4 relative">
                <div 
                  className="relative h-64 sm:h-72 w-full overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
                  style={{
                    clipPath: isRTL 
                      ? 'polygon(0 0, 100% 0, 92% 100%, 0 100%)' 
                      : 'polygon(0 0, 100% 0, 100% 100%, 8% 100%)'
                  }}
                >
                  <img
                    src="/home/manifesto.png"
                    alt="Professional video production mixing console and vision switcher"
                    className="w-full h-full object-cover filter contrast-105 brightness-95"
                    loading="lazy"
                  />
                  
                  {/* Subtle red tint overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-signature-red/10 pointer-events-none" />
                  
                  {/* Console Technical Caption */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-purewhite text-[11px] font-space tracking-wider z-10 bg-obsidian/75 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                    <span className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-signature-red animate-pulse" />
                      <span>{t.intro.caption}</span>
                    </span>
                    <span className="text-signature-red font-mono font-bold hidden sm:inline">
                      {t.intro.badge}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorialIntro;
