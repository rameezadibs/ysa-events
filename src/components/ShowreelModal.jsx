import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Maximize2, Volume2, Shield } from 'lucide-react';

export const ShowreelModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian/90 backdrop-blur-md">
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
          className="relative z-10 w-full max-w-5xl bg-obsidian border border-charcoal rounded-lg overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Top Bar */}
          <div className="bg-charcoal-dark px-4 py-3 border-b border-charcoal flex items-center justify-between">
            <div className="flex items-center space-x-2.5 rtl:space-x-reverse text-xs font-space font-bold uppercase tracking-widest text-purewhite">
              <span className="w-2 h-2 rounded-full bg-signature-red animate-pulse" />
              <span>YSA MEDIA // CINEMATIC STUDIO SHOWREEL</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded text-ivory/70 hover:text-purewhite hover:bg-charcoal transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Container (16:9 Aspect Ratio) */}
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/fJ9rUzIMcZQ?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1"
              title="YSA Media Production Showreel"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Bottom Bar Info */}
          <div className="bg-charcoal-dark/80 px-4 py-3 text-xs font-mono text-ivory/60 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-charcoal">
            <span>4K MASTER FEED • 59.94 FPS • TIME CODE: 00:03:45:18</span>
            <span className="text-signature-red">YSA MEDIA DUBAI • ALL RIGHTS RESERVED</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ShowreelModal;
