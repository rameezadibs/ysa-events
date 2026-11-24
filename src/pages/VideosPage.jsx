import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LiveBroadcastSection from '../components/LiveBroadcastSection';
import AiChatbot from '../components/AiChatbot';
import ShowreelModal from '../components/ShowreelModal';
import LiveStreamModal from '../components/LiveStreamModal';
import ContactModal from '../components/ContactModal';
import { useLanguage } from '../context/LanguageContext';
import { kay2TvVideos } from '../data/content';
import { Play, Tv, Youtube, Radio, Filter, RotateCw } from 'lucide-react';

export const VideosPage = () => {
  const { t, isRTL, lang } = useLanguage();
  const [liveStreamOpen, setLiveStreamOpen] = useState(false);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['All', 'Morning Show', 'News Bulletin', 'Musical Stage', 'Outside Broadcast', 'Entertainment'];

  const filteredVideos = activeCategory === 'All'
    ? kay2TvVideos
    : kay2TvVideos.filter(v => v.category === activeCategory);

  const handlePlayVideo = (video) => {
    setSelectedVideo(video);
    setShowreelOpen(true);
  };

  return (
    <div className="min-h-screen bg-obsidian text-purewhite selection:bg-signature-red selection:text-purewhite">
      <Navbar
        onOpenLiveModal={() => setLiveStreamOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      <main className="pt-32 pb-24">
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-signature-red mb-3">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>04 // KAY2 TV BROADCAST ARCHIVE & VIDEO SUITE</span>
          </div>

          <h1 className="font-cormorant text-5xl sm:text-7xl font-bold uppercase tracking-tight text-purewhite leading-[0.95]">
            Content That Stays <span className="font-cormorant italic text-signature-red">in Motion.</span>
          </h1>

          <p className="mt-4 font-inter text-base text-ivory/80 max-w-2xl leading-relaxed">
            Auto-synced broadcasts, episodic series, musical extravaganzas, and Outside Broadcast coverage from our partner network, Kay2 TV.
          </p>
        </section>

        {/* Live Broadcast Feature Section */}
        <LiveBroadcastSection
          onOpenLiveModal={() => setLiveStreamOpen(true)}
          onPlayVideo={handlePlayVideo}
        />

        {/* Category Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 no-scrollbar border-b border-charcoal">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded text-xs font-space font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-signature-red text-purewhite shadow-red-subtle'
                    : 'bg-charcoal text-ivory/70 hover:text-purewhite hover:bg-charcoal-light'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => handlePlayVideo(video)}
                className="group cursor-pointer bg-charcoal-dark border border-charcoal hover:border-signature-red/50 rounded overflow-hidden shadow-xl transition-all"
              >
                <div className="relative aspect-video w-full bg-black overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                    <div className="w-10 h-10 rounded-full bg-signature-red text-purewhite flex items-center justify-center group-hover:scale-110 shadow-red-glow transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-obsidian/90 text-[10px] font-mono px-1.5 py-0.5 rounded text-purewhite">
                    {video.duration}
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-ivory/50">
                    <span className="text-signature-red font-semibold">{video.category}</span>
                    <span>{video.views}</span>
                  </div>
                  <h3 className="font-space text-sm font-bold text-purewhite line-clamp-2 group-hover:text-signature-red transition-colors">
                    {lang === 'ar' ? video.titleAr : video.title}
                  </h3>
                  <div className="text-[11px] font-mono text-ivory/40">
                    {lang === 'ar' ? video.dateAr : video.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <AiChatbot onOpenContactModal={() => setContactModalOpen(true)} />
      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />
      <LiveStreamModal isOpen={liveStreamOpen} onClose={() => setLiveStreamOpen(false)} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
};

export default VideosPage;
