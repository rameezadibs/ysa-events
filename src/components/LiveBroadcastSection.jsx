import React from 'react';
import { motion } from 'framer-motion';
import { Play, Tv, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { kay2TvVideos } from '../data/content';

export const LiveBroadcastSection = ({ onPlayVideo }) => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative w-full bg-obsidian text-purewhite py-14 sm:py-20 overflow-hidden border-t border-charcoal selection:bg-signature-red selection:text-purewhite">
      {/* Subtle Atmospheric Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-signature-red/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-charcoal pb-6 mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs font-mono uppercase tracking-[0.28em] text-signature-red mb-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-signature-red" />
              <span>03 // {t.live.latestVideos}</span>
            </div>
            <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-purewhite">
              {lang === 'ar' ? 'فيديوهات مميزة' : 'Featured Videos'}
            </h2>
          </div>

          <div className="flex items-center space-x-3 rtl:space-x-reverse text-xs font-mono text-ivory/60">
            <Tv className="w-4 h-4 text-signature-red flex-shrink-0" />
            <span>{t.live.channelLabel}</span>
          </div>
        </div>

        {/* Well-Organized 3-Column Video Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {kay2TvVideos.map((video, index) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onPlayVideo && onPlayVideo(video)}
              className="group cursor-pointer flex flex-col bg-charcoal-dark/60 border border-charcoal hover:border-signature-red/60 rounded-sm overflow-hidden transition-all duration-300 shadow-xl"
            >
              {/* 16:9 Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={video.thumbnail}
                  alt={lang === 'ar' ? video.titleAr : video.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Centered Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-signature-red/90 group-hover:bg-signature-red text-purewhite flex items-center justify-center shadow-red-glow transition-all duration-300 group-hover:scale-110">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Clean Video Metadata */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-ivory/50">
                    <span>{video.channel}</span>
                    <span className="text-signature-red/80">{lang === 'ar' ? video.dateAr : video.date}</span>
                  </div>

                  <h3 className="font-space text-base font-bold text-purewhite leading-snug line-clamp-2 group-hover:text-signature-red transition-colors">
                    {lang === 'ar' ? video.titleAr : video.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-charcoal/80 flex items-center justify-between text-[11px] font-space font-semibold uppercase tracking-wider text-ivory/70 group-hover:text-purewhite">
                  <span>{lang === 'ar' ? 'مشاهدة الفيديو' : 'Watch Broadcast'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-signature-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LiveBroadcastSection;
