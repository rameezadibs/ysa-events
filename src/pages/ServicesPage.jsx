import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RadialServices from '../components/RadialServices';
import AiChatbot from '../components/AiChatbot';
import LiveStreamModal from '../components/LiveStreamModal';
import ContactModal from '../components/ContactModal';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ServicesPage = () => {
  const { t, isRTL } = useLanguage();
  const [liveStreamOpen, setLiveStreamOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleInquire = (serviceName) => {
    setSelectedService(serviceName);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-obsidian text-purewhite selection:bg-signature-red selection:text-purewhite">
      <Navbar
        onOpenLiveModal={() => setLiveStreamOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      <main className="pt-32 pb-24">
        {/* Page Title */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-signature-red block mb-3">
            03 // CAPABILITIES & DISCIPLINES
          </span>
          <h1 className="font-cormorant text-5xl sm:text-7xl font-bold uppercase tracking-tight text-purewhite leading-[0.95]">
            The Eight <span className="font-cormorant italic text-signature-red">Disciplines.</span>
          </h1>
          <p className="mt-4 font-inter text-base text-ivory/80 max-w-2xl leading-relaxed">
            From arena event management and high-definition studio broadcasting to royal protocol and logistics, discover our turnkey production capabilities.
          </p>
        </section>

        {/* The Signature Radial Media Universe */}
        <RadialServices onSelectServiceInquiry={handleInquire} />

        {/* Detailed Disciplines Breakdown */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="border-b border-charcoal pb-4 mb-12 flex items-center justify-between">
            <h2 className="font-space text-2xl font-bold uppercase tracking-tight text-purewhite">
              Full Discipline Catalog
            </h2>
            <span className="text-xs font-mono text-signature-red">8 SPECIALIZED UNITS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.services.list.map((item) => (
              <div
                key={item.id}
                className="p-8 border border-charcoal/80 bg-charcoal-dark/70 rounded-sm space-y-4 hover:border-signature-red/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-signature-red">
                    DISCIPLINE {item.id}
                  </span>
                  <button
                    onClick={() => handleInquire(item.name)}
                    className="text-xs font-space font-semibold uppercase text-ivory/60 hover:text-signature-red inline-flex items-center space-x-1"
                  >
                    <span>Request Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h3 className="font-space text-2xl font-bold uppercase text-purewhite">
                  {item.name}
                </h3>

                <p className="font-cormorant italic text-base text-signature-red font-medium">
                  "{item.tagline}"
                </p>

                <p className="font-inter text-xs sm:text-sm text-ivory/80 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 space-y-1.5">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-space text-ivory/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-signature-red flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <AiChatbot onOpenContactModal={() => setContactModalOpen(true)} />
      <LiveStreamModal isOpen={liveStreamOpen} onClose={() => setLiveStreamOpen(false)} />
      <ContactModal isOpen={contactModalOpen} preselectedService={selectedService} onClose={() => setContactModalOpen(false)} />
    </div>
  );
};

export default ServicesPage;
