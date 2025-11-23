
import React from 'react';
import { useLanguage } from '../LanguageContext';

interface ContactProps {
  onInquire: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onInquire }) => {
  const { t } = useLanguage();

  const handleDownloadProspectus = () => {
    // TODO: Replace with actual PDF download
    // For now, open gallery as a preview
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }

    // Actual implementation would be:
    // const link = document.createElement('a');
    // link.href = '/assets/serene-heights-prospectus.pdf';
    // link.download = 'Serene-Heights-Prospectus.pdf';
    // link.click();
  };

  return (
    <section className="py-40 md:py-48 bg-ivory dark:bg-background-dark text-center">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-primary dark:text-champagne mb-10 tracking-tight">
          {t('contact.title')}
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-charcoal/80 dark:text-sand mb-16 font-light leading-loose">
          {t('contact.text')}
        </p>

        {/* Dual CTA - Apple Style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Secondary CTA - Low Friction */}
          <button
            onClick={handleDownloadProspectus}
            className="group w-full sm:w-auto px-8 py-3 text-sm font-light tracking-[0.15em] text-charcoal/70 dark:text-sand/70 hover:text-primary dark:hover:text-champagne transition-all duration-700 order-2 sm:order-1"
          >
            {t('contact.buttonSecondary')}
          </button>

          {/* Primary CTA - Apple "Buy" Style: Filled, Bold, Single Word */}
          <button
            onClick={onInquire}
            className="w-full sm:w-auto bg-primary dark:bg-champagne text-ivory dark:text-primary px-10 py-3 text-sm font-medium tracking-[0.15em] hover:opacity-90 transition-all duration-700 order-1 sm:order-2"
          >
            {t('contact.button')}
          </button>
        </div>
      </div>
    </section>
  );
};
