import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, ChevronRight, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { chatbotKnowledge } from '../data/content';

export const AiChatbot = ({ onOpenContactModal }) => {
  const { t, lang, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: lang === 'ar'
        ? 'مرحباً بك في استوديوهات واي إس إيه ميديا. أنا المستشار الذكي المتخصص بالبث والإنتاج والفعاليات. كيف يمكنني مساعدتك اليوم؟'
        : 'Welcome to YSA Media. I am your broadcast & live event AI consultant. How can I assist with your media production today?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Update initial welcome message when language changes
  useEffect(() => {
    setMessages([
      {
        id: 1,
        sender: 'bot',
        text: lang === 'ar'
          ? 'مرحباً بك في استوديوهات واي إس إيه ميديا. أنا المستشار الذكي المتخصص بالبث والإنتاج والفعاليات. كيف يمكنني مساعدتك اليوم؟'
          : 'Welcome to YSA Media. I am your broadcast & live event AI consultant. How can I assist with your media production today?'
      }
    ]);
  }, [lang]);

  const handleSend = (textToSend = input) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: trimmed
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Search knowledge base
    const lower = trimmed.toLowerCase();
    let reply = lang === 'ar'
      ? 'شكراً لاستفسارك! نحن متخصصون في تقديم أرقى مستويات البث التلفزيوني المباشر، إدارة الفعاليات الضخمة، والشراكات الإعلامية في دولة الإمارات وحول العالم. يمكنك الضغط أدناه للتواصل المباشر مع فريقنا.'
      : 'Thank you for reaching out! YSA Media specializes in broadcast-grade television production, arena-scale event management, and digital syndication across Dubai, the UAE, and global markets. Would you like to start a direct consultation with our executive team?';

    for (const item of chatbotKnowledge) {
      if (item.keywords.some(k => lower.includes(k))) {
        reply = lang === 'ar' ? item.replyAr : item.replyEn;
        break;
      }
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: reply
        }
      ]);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* 
        MINIMAL, ELEGANTLY DESIGNED AI ASSISTANT LAUNCHER
        Matches website's black, ivory, and signature red aesthetic.
        Discreet, non-intrusive floating button.
      */}
      <div className="fixed bottom-6 right-6 z-40 select-none">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center space-x-2 px-4 py-3 bg-obsidian text-purewhite rounded-full border border-charcoal hover:border-signature-red shadow-2xl transition-all duration-300 group"
          aria-label="Open AI Assistant"
        >
          {/* Glowing Red Broadcast Dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signature-red opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-signature-red" />
          </span>

          <Bot className="w-4 h-4 text-signature-red group-hover:text-purewhite transition-colors" />

          <span className="font-space text-xs font-semibold uppercase tracking-wider text-ivory/90 group-hover:text-purewhite">
            {isOpen ? t.nav.close : 'AI Assistant'}
          </span>
        </motion.button>
      </div>

      {/* AI Assistant Chat Window Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] max-h-[580px] h-[540px] bg-obsidian border border-charcoal rounded-xl shadow-2xl flex flex-col overflow-hidden text-purewhite backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-charcoal-dark p-4 border-b border-charcoal flex items-center justify-between">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-signature-red/10 border border-signature-red flex items-center justify-center text-signature-red">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-space font-bold uppercase tracking-wider text-purewhite flex items-center space-x-2">
                    <span>{t.chatbot.title}</span>
                  </h4>
                  <span className="text-[10px] font-mono text-signature-red flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-signature-red animate-pulse" />
                    <span>{t.chatbot.status}</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-ivory/60 hover:text-purewhite rounded-sm hover:bg-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Subtitle notice */}
            <div className="bg-charcoal/40 px-4 py-2 text-[11px] font-inter text-ivory/60 border-b border-charcoal/60">
              {t.chatbot.subtitle}
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 font-inter text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg p-3 whitespace-pre-line leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-signature-red text-purewhite rounded-br-none'
                        : 'bg-charcoal text-ivory/90 rounded-bl-none border border-charcoal-light'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-charcoal text-ivory/60 rounded-lg p-3 rounded-bl-none flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-signature-red rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-signature-red rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-signature-red rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestion Chips */}
            <div className="px-3 py-2 bg-charcoal-dark border-t border-charcoal flex items-center space-x-2 overflow-x-auto no-scrollbar">
              {t.chatbot.suggestions.slice(0, 3).map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip)}
                  className="flex-shrink-0 text-[10px] font-space px-2.5 py-1 rounded bg-charcoal hover:bg-signature-red hover:text-purewhite text-ivory/70 border border-charcoal-light transition-colors whitespace-nowrap"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <div className="p-3 bg-charcoal-dark border-t border-charcoal flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.chatbot.placeholder}
                className="flex-1 bg-obsidian border border-charcoal rounded px-3 py-2 text-xs font-inter text-purewhite placeholder:text-ivory/40 focus:outline-none focus:border-signature-red"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="p-2 bg-signature-red text-purewhite rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiChatbot;
