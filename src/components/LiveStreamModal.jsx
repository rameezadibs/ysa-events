import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Radio, Tv, Volume2, ShieldAlert, Calendar, Clock, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LiveStreamModal = ({ isOpen, onClose }) => {
  const { t, isRTL } = useLanguage();
  const [isLiveOnline, setIsLiveOnline] = useState(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-obsidian/95 backdrop-blur-lg">
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-5xl bg-obsidian border border-charcoal rounded-xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="bg-charcoal-dark px-4 py-3 border-b border-charcoal flex items-center justify-between">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="relative flex h-2.5 w-2.5">
                {isLiveOnline && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signature-red opacity-75" />
                )}
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isLiveOnline ? 'bg-signature-red' : 'bg-gray-500'}`} />
              </span>
              <span className="text-xs font-space font-bold uppercase tracking-widest text-purewhite">
                {t.live.streamModalTitle}
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal text-signature-red border border-charcoal-light">
                {isLiveOnline ? t.live.statusLive : t.live.statusOffline}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {/* Live / Offline State Toggle (for demonstration of offline broadcast state) */}
              <button
                onClick={() => setIsLiveOnline(!isLiveOnline)}
                className="text-[10px] font-mono text-ivory/60 hover:text-purewhite px-2 py-1 rounded bg-charcoal border border-charcoal-light"
                title="Toggle On Air / Off Air state simulation"
              >
                {isLiveOnline ? 'Simulate Off-Air' : 'Simulate On-Air'}
              </button>

              <button
                onClick={onClose}
                className="p-1 rounded text-ivory/70 hover:text-purewhite hover:bg-charcoal transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Broadcast Screen */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            {isLiveOnline ? (
              // Active Live Broadcast Stream Player (Embedded Kay2 TV Broadcast Feed)
              <iframe
                src="https://www.youtube-nocookie.com/embed/live_stream?channel=UC4gS7pT7cM3v8-KAY2TELEVISION&autoplay=1&mute=0"
                title="Kay2 TV Official Live Broadcast"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              // Visually Appropriate Offline Broadcast State
              <div className="flex flex-col items-center justify-center p-8 text-center space-y-4 max-w-lg">
                {/* TV Test Card Bars Aesthetics */}
                <div className="w-24 h-12 flex rounded overflow-hidden shadow-lg border border-charcoal">
                  <span className="flex-1 bg-white" />
                  <span className="flex-1 bg-yellow-400" />
                  <span className="flex-1 bg-cyan-400" />
                  <span className="flex-1 bg-green-500" />
                  <span className="flex-1 bg-purple-600" />
                  <span className="flex-1 bg-signature-red" />
                  <span className="flex-1 bg-blue-700" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-space text-lg font-bold uppercase tracking-wider text-purewhite">
                    {t.live.statusOffline}
                  </h4>
                  <p className="font-inter text-xs text-ivory/70 leading-relaxed">
                    {t.live.offlineMessage}
                  </p>
                </div>

                <div className="bg-charcoal/80 border border-charcoal p-3 rounded text-left w-full space-y-2 text-xs font-mono text-ivory/60">
                  <div className="flex items-center justify-between text-purewhite font-semibold">
                    <span className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-signature-red" />
                      <span>Next Live Transmission:</span>
                    </span>
                    <span className="text-signature-red font-mono">08:00 AM (GST)</span>
                  </div>
                  <div>Segment: Kay2 Morning Prime Transmission</div>
                  <div>Frequency: Asiasat 7 (105.5° E) • Transponder 3680 H</div>
                </div>

                <button
                  onClick={() => setIsLiveOnline(true)}
                  className="px-4 py-2 bg-signature-red text-purewhite font-space text-xs font-bold uppercase tracking-wider rounded"
                >
                  Reload Live Stream
                </button>
              </div>
            )}
          </div>

          {/* Footer Notice */}
          <div className="bg-charcoal-dark px-4 py-2.5 text-xs font-inter text-ivory/60 flex items-center justify-between border-t border-charcoal">
            <span className="flex items-center space-x-2">
              <Tv className="w-3.5 h-3.5 text-signature-red" />
              <span>{t.live.streamNotice}</span>
            </span>
            <span className="font-mono text-[11px] text-signature-red">
              https://kay2.tv
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LiveStreamModal;
