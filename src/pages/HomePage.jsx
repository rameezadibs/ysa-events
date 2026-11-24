import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EditorialIntro from '../components/EditorialIntro';
import RadialServices from '../components/RadialServices';
import FeaturedWorkCollage from '../components/FeaturedWorkCollage';
import LiveBroadcastSection from '../components/LiveBroadcastSection';
import ProductionTimeline from '../components/ProductionTimeline';
import FinalEditorialCTA from '../components/FinalEditorialCTA';
import Footer from '../components/Footer';
import AiChatbot from '../components/AiChatbot';
import ShowreelModal from '../components/ShowreelModal';
import LiveStreamModal from '../components/LiveStreamModal';
import ContactModal from '../components/ContactModal';

export const HomePage = () => {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [liveStreamOpen, setLiveStreamOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);

  const handleOpenContactWithService = (serviceName) => {
    setPreselectedService(serviceName);
    setContactModalOpen(true);
  };

  const handlePlayVideo = (video) => {
    setActiveVideo(video);
    setShowreelOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services-universe');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-obsidian text-purewhite selection:bg-signature-red selection:text-purewhite">
      {/* 3. MINIMALIST BLACK NAVIGATION BAR */}
      <Navbar
        onOpenLiveModal={() => setLiveStreamOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* MAIN HOMEPAGE SECTIONS */}
      <main>
        {/* 4. HERO — THE IMMERSIVE PRODUCTION STAGE */}
        <HeroSection
          onOpenShowreel={() => setShowreelOpen(true)}
          onExploreServices={handleExploreServices}
        />

        {/* 5. INTRODUCTION — WE MAKE IDEAS LIVE (WARM IVORY) */}
        <EditorialIntro />

        {/* 6. SERVICES — THE RADIAL MEDIA UNIVERSE (DEEP CHARCOAL) */}
        <RadialServices
          onSelectServiceInquiry={handleOpenContactWithService}
        />

        {/* 7. FEATURED WORK — CINEMATIC EDITORIAL COLLAGE (WARM IVORY) */}
        <FeaturedWorkCollage
          onOpenShowreel={() => setShowreelOpen(true)}
        />

        {/* 8. LIVE TELECAST & LATEST VIDEOS (DEEP BLACK + KAY2 TV YOUTUBE) */}
        <LiveBroadcastSection
          onOpenLiveModal={() => setLiveStreamOpen(true)}
          onPlayVideo={handlePlayVideo}
        />

        {/* 9. OUR APPROACH — PRODUCTION TIMELINE (FLOWING DARK STRIP) */}
        <ProductionTimeline />

        {/* 10. FINAL CTA — HAVE A VISION? (WARM IVORY EDITORIAL) */}
        <FinalEditorialCTA
          onOpenContactModal={() => setContactModalOpen(true)}
        />
      </main>

      {/* 11. SOPHISTICATED BLACK FOOTER */}
      <Footer />

      {/* 13. MINIMAL AI CHATBOT ASSISTANT */}
      <AiChatbot
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* INTERACTIVE MODALS */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => {
          setShowreelOpen(false);
          setActiveVideo(null);
        }}
      />

      <LiveStreamModal
        isOpen={liveStreamOpen}
        onClose={() => setLiveStreamOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        preselectedService={preselectedService}
        onClose={() => {
          setContactModalOpen(false);
          setPreselectedService('');
        }}
      />
    </div>
  );
};

export default HomePage;
