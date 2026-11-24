import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AiChatbot from '../components/AiChatbot';
import LiveStreamModal from '../components/LiveStreamModal';
import ContactModal from '../components/ContactModal';
import { useLanguage } from '../context/LanguageContext';
import { Award, Shield, Zap, Globe, Users, Film } from 'lucide-react';

export const AboutPage = () => {
  const { t, isRTL, lang } = useLanguage();
  const [liveStreamOpen, setLiveStreamOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian text-purewhite selection:bg-signature-red selection:text-purewhite">
      <Navbar
        onOpenLiveModal={() => setLiveStreamOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      <main className="pt-32 pb-24">
        {/* Editorial Page Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-signature-red mb-3">
            <span className="w-2 h-2 rounded-full bg-signature-red" />
            <span>02 // ABOUT YSA MEDIA</span>
          </div>

          <h1 className="font-cormorant text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-purewhite leading-[0.92]">
            Architects of <span className="font-cormorant italic text-signature-red">Live Experiences.</span>
          </h1>

          <p className="mt-8 font-inter text-base sm:text-lg text-ivory/80 max-w-2xl leading-relaxed">
            YSA Media was founded to redefine the intersection between architectural event production and high-precision television broadcasting. Based in Dubai, UAE, we engineer turnkey productions that captivate live attendees and television audiences across the globe.
          </p>
        </section>

        {/* Diagonal Editorial Visual Spread */}
        <section className="bg-ivory text-obsidian py-20 px-4 sm:px-6 lg:px-8 my-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-space font-bold uppercase tracking-[0.25em] text-signature-red block">
                CREATIVE GOVERNANCE
              </span>
              <h2 className="font-cormorant text-4xl sm:text-5xl font-bold uppercase leading-tight">
                From Script to Satellite Uplink.
              </h2>
              <p className="font-inter text-sm sm:text-base text-obsidian/80 leading-relaxed">
                Whether deploying 20-camera Outside Broadcast units for stadium sports, designing multi-tier holographic stages for sovereign summits, or directing prime-time episodic television, our multidisciplinary teams operate with absolute technical discipline.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div 
                className="relative h-80 sm:h-96 w-full overflow-hidden shadow-2xl"
                style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
                  alt="Live arena event production with lasers and audio rigging"
                  className="w-full h-full object-cover filter contrast-110"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-charcoal bg-charcoal-dark/50 rounded-sm space-y-3">
              <span className="font-mono text-xs text-signature-red">01 // PRECISION</span>
              <h3 className="font-space text-xl font-bold uppercase text-purewhite">Zero-Fail Live Protocol</h3>
              <p className="font-inter text-xs text-ivory/70 leading-relaxed">
                Every satellite feed, optic link, and master switcher incorporates full n+1 redundancy for uninterrupted live telecast execution.
              </p>
            </div>
            <div className="p-8 border border-charcoal bg-charcoal-dark/50 rounded-sm space-y-3">
              <span className="font-mono text-xs text-signature-red">02 // SCALE</span>
              <h3 className="font-space text-xl font-bold uppercase text-purewhite">Global Mobilization</h3>
              <p className="font-inter text-xs text-ivory/70 leading-relaxed">
                Rapid heavy-lift logistics, ATA carnet governance, and certified technical directors deployable across the GCC, MENA, and international corridors.
              </p>
            </div>
            <div className="p-8 border border-charcoal bg-charcoal-dark/50 rounded-sm space-y-3">
              <span className="font-mono text-xs text-signature-red">03 // ALLIANCE</span>
              <h3 className="font-space text-xl font-bold uppercase text-purewhite">Kay2 TV Integration</h3>
              <p className="font-inter text-xs text-ivory/70 leading-relaxed">
                Direct strategic partnership enabling cross-border television syndication, satellite playout, and live broadcast transmission reaching millions of viewers.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AiChatbot onOpenContactModal={() => setContactModalOpen(true)} />
      <LiveStreamModal isOpen={liveStreamOpen} onClose={() => setLiveStreamOpen(false)} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
};

export default AboutPage;
