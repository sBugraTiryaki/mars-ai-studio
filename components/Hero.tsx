
import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

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
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        >
          <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
        </div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-wider uppercase drop-shadow-lg mb-4">
          {t('hero.title1')}
        </h2>
        <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-display font-light tracking-widest uppercase drop-shadow-lg">
          {t('hero.title2')}
        </h3>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {IMAGES.hero.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
