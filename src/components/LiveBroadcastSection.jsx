import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Radio, RotateCw, ExternalLink, Volume2, ShieldCheck, Tv } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { kay2TvVideos } from '../data/content';

export const LiveBroadcastSection = ({ onOpenLiveModal, onPlayVideo }) => {
  const { t, isRTL, lang } = useLanguage();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  return (
    <section className="relative w-full bg-obsidian text-purewhite py-12 sm:py-16 overflow-hidden border-t border-charcoal">
      {/* Subtle Atmospheric Red Halo in Center */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-signature-red/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Visual + Center Watch Live + Right Latest Videos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* 
            LEFT VISUAL:
            Cinematic close-up of a glowing red ON AIR studio sign,
            used as an integrated organic element of the composition.
          */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group overflow-hidden rounded-md border border-charcoal/80 bg-charcoal-dark shadow-2xl"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80"
                  alt="Glowing ON AIR broadcast sign in television studio"
                  className="w-full h-full object-cover filter contrast-125 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                <div className="absolute inset-0 bg-signature-red/15 mix-blend-color-burn" />

                {/* Glowing Illuminated ON AIR Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center space-x-2 px-3 py-1 bg-signature-red/90 text-purewhite text-xs font-space font-extrabold tracking-widest uppercase rounded shadow-red-glow">
                  <span className="w-2 h-2 rounded-full bg-purewhite animate-ping" />
                  <span>ON AIR</span>
                </div>

                {/* Studio Label */}
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-ivory/80 flex items-center justify-between">
                  <span>STUDIO FEED 01</span>
                  <span className="text-signature-red font-bold">1080p59</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 
            CENTER CONTENT:
            Small label: ● LIVE TELECAST
            Large heading: WATCH LIVE
            Supporting copy: "Stay connected with our live broadcasts, events and exclusive coverage."
            Circular play action to launch live stream modal!
          */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Animated Live Broadcast Indicator */}
              <div className="inline-flex items-center space-x-2.5 rtl:space-x-reverse text-xs font-space font-bold uppercase tracking-[0.25em] text-signature-red mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signature-red opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-signature-red" />
                </span>
                <span>{t.live.badge}</span>
              </div>

              {/* Large Heading */}
              <h3 className="font-space text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-purewhite leading-[0.95]">
                <span>{t.live.headingLine1}</span>
                <span className="block text-signature-red drop-shadow-md">{t.live.headingLine2}</span>
              </h3>

              <p className="font-inter text-sm text-ivory/75 leading-relaxed mt-3 max-w-sm">
                {t.live.description}
              </p>

              {/* Channel Partner Credential */}
              <div className="mt-4 flex items-center space-x-2 rtl:space-x-reverse text-[11px] font-mono text-ivory/50">
                <Tv className="w-3.5 h-3.5 text-signature-red" />
                <span>KAY2 TV OFFICIAL NETWORK BROADCAST</span>
              </div>

              {/* Elegant Circular Play Action */}
              <div className="pt-6">
                <button
                  onClick={onOpenLiveModal}
                  className="group inline-flex items-center space-x-4 rtl:space-x-reverse focus:outline-none"
                >
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-signature-red text-purewhite shadow-red-glow transition-all duration-300 group-hover:scale-105 group-hover:bg-red-700">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                    <span className="absolute inset-0 rounded-full border-2 border-signature-red animate-ping opacity-30" />
                  </div>
                  <div className="text-left rtl:text-right">
                    <div className="text-xs font-space font-bold uppercase tracking-widest text-purewhite group-hover:text-signature-red transition-colors">
                      {t.live.ctaWatch}
                    </div>
                    <div className="text-[11px] font-mono text-ivory/60">
                      {t.live.nowPlaying}
                    </div>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* 
            THIN VERTICAL DIVIDER
          */}
          <div className="hidden lg:block lg:col-span-1 h-72 border-r border-charcoal/80" />

          {/* 
            RIGHT CONTENT:
            Display: LATEST VIDEOS
            Designated Kay2 TV YouTube channel integration
            Auto-synced video thumbnails, titles, play action
          */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            <div className="flex items-center justify-between border-b border-charcoal pb-3">
              <span className="text-xs font-space font-bold uppercase tracking-[0.25em] text-ivory/80">
                {t.live.latestVideos}
              </span>
              <button
                onClick={handleRefresh}
                className="flex items-center space-x-1.5 text-[11px] font-mono text-ivory/50 hover:text-signature-red transition-colors"
                title="Refresh videos"
              >
                <RotateCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin text-signature-red' : ''}`} />
                <span>{t.live.refreshVideos}</span>
              </button>
            </div>

            {/* Video List Items with Play Overlays */}
            <div className="space-y-3">
              {kay2TvVideos.slice(0, 3).map((video) => (
                <div
                  key={video.id}
                  onClick={() => onPlayVideo && onPlayVideo(video)}
                  className="group flex items-center space-x-3.5 rtl:space-x-reverse p-2 rounded-sm bg-charcoal-dark/50 hover:bg-charcoal border border-charcoal/60 hover:border-signature-red/40 transition-all cursor-pointer"
                >
                  {/* Thumbnail with duration badge and play icon overlay */}
                  <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded-sm bg-black">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                      <div className="w-6 h-6 rounded-full bg-signature-red/90 text-purewhite flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-3 h-3 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-1 right-1 bg-obsidian/90 text-[9px] font-mono px-1 rounded text-purewhite">
                      {video.duration}
                    </span>
                  </div>

                  {/* Video Metadata */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-space font-bold text-purewhite line-clamp-2 leading-snug group-hover:text-signature-red transition-colors">
                      {lang === 'ar' ? video.titleAr : video.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-[10px] font-mono text-ivory/50 mt-1">
                      <span>{video.category}</span>
                      <span>•</span>
                      <span>{lang === 'ar' ? video.dateAr : video.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-right rtl:text-left">
              <button
                onClick={onOpenLiveModal}
                className="text-xs font-space font-semibold uppercase tracking-wider text-signature-red hover:text-purewhite transition-colors inline-flex items-center space-x-1"
              >
                <span>{t.live.viewAllVideos}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LiveBroadcastSection;
