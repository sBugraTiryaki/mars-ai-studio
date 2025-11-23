
import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../LanguageContext';

interface HeroProps {
  onInquire: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onInquire }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const handleDiscover = () => {
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.hero.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {IMAGES.hero.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ease-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/45"></div>
        </div>
      ))}

      <div className="absolute bottom-24 left-0 z-10 px-8 md:px-16 lg:px-24 max-w-4xl animate-fade-in-up">
        <h2 className="text-champagne text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight mb-6 drop-shadow-2xl">
          {t('hero.title1')}
        </h2>
        <h3 className="text-sand text-2xl md:text-4xl lg:text-5xl font-display font-extralight tracking-wider drop-shadow-lg mb-12">
          {t('hero.title2')}
        </h3>

        {/* Dual CTA - Apple Style */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Secondary CTA - Low Friction */}
          <button
            onClick={handleDiscover}
            className="px-8 py-3 text-sm font-light tracking-[0.15em] text-champagne/80 hover:text-champagne transition-all duration-700 order-2 sm:order-1"
          >
            {t('hero.discover')}
          </button>

          {/* Primary CTA - Apple "Buy" Style */}
          <button
            onClick={onInquire}
            className="bg-champagne text-primary px-10 py-3 text-sm font-medium tracking-[0.15em] hover:opacity-90 transition-all duration-700 order-1 sm:order-2"
          >
            {t('hero.inquire')}
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        {IMAGES.hero.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-0.5 transition-all duration-700 ${
              index === currentSlide
                ? 'bg-gold w-12'
                : 'bg-sand/40 w-8 hover:bg-sand/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
