
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-6 transition-all duration-1000 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-1000"
        onClick={onClose}
      ></div>

      {/* Content */}
      <div
        className={`bg-ivory dark:bg-background-dark w-full max-w-lg border border-sand/30 dark:border-charcoal shadow-2xl p-10 md:p-12 relative transform transition-all duration-1000 ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-98 translate-y-4 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-charcoal/50 hover:text-primary dark:text-sand/50 dark:hover:text-champagne transition-colors duration-500"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <h3 className="text-3xl md:text-4xl font-display font-light text-primary dark:text-champagne mb-3 tracking-tight">
          {t('modal.title')}
        </h3>
        <p className="text-charcoal/70 dark:text-sand/70 text-sm font-light mb-10">{t('modal.subtitle')}</p>

        <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-6">
          <div>
            <label className="block text-xs font-light tracking-widest text-charcoal/60 dark:text-sand/60 uppercase mb-2">{t('modal.name')}</label>
            <input
              type="text"
              className="w-full p-4 border border-sand/40 dark:border-charcoal bg-background-light dark:bg-charcoal text-primary dark:text-champagne focus:border-gold dark:focus:border-gold outline-none transition-all duration-500 font-light"
              placeholder={t('modal.placeholderName')}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-light tracking-widest text-charcoal/60 dark:text-sand/60 uppercase mb-2">{t('modal.email')}</label>
            <input
              type="email"
              className="w-full p-4 border border-sand/40 dark:border-charcoal bg-background-light dark:bg-charcoal text-primary dark:text-champagne focus:border-gold dark:focus:border-gold outline-none transition-all duration-500 font-light"
              placeholder={t('modal.placeholderEmail')}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-light tracking-widest text-charcoal/60 dark:text-sand/60 uppercase mb-2">{t('modal.phone')}</label>
            <input
              type="tel"
              className="w-full p-4 border border-sand/40 dark:border-charcoal bg-background-light dark:bg-charcoal text-primary dark:text-champagne focus:border-gold dark:focus:border-gold outline-none transition-all duration-500 font-light"
              placeholder={t('modal.placeholderPhone')}
            />
          </div>
          <div>
            <label className="block text-xs font-light tracking-widest text-charcoal/60 dark:text-sand/60 uppercase mb-2">{t('modal.message')}</label>
            <textarea
              rows={4}
              className="w-full p-4 border border-sand/40 dark:border-charcoal bg-background-light dark:bg-charcoal text-primary dark:text-champagne focus:border-gold dark:focus:border-gold outline-none transition-all duration-500 resize-none font-light"
              placeholder={t('modal.placeholderMsg')}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-4 border-2 border-primary dark:border-champagne text-primary dark:text-champagne py-4 font-light tracking-widest hover:bg-primary hover:text-ivory dark:hover:bg-champagne dark:hover:text-primary transition-all duration-700"
          >
            {t('modal.submit')}
          </button>
        </form>
      </div>
    </div>
  );
};
