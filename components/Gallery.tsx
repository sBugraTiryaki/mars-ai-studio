
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Infinite loop logic: maxIndex isn't the limit for navigation, just used for display calculation
  const maxIndex = Math.max(0, GALLERY_DATA.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="gallery" className="py-30 md:py-40 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-center text-primary dark:text-champagne mb-24 md:mb-30 tracking-tight">
          {t('gallery.title')}
        </h2>

        <div className="relative group">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {GALLERY_DATA.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="relative overflow-hidden h-72 md:h-96 group/image">
                    <img
                      src={image.src}
                      alt={image.alt[language]}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover/image:scale-105 cursor-zoom-in"
                      onClick={() => setLightboxIndex(index)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover/image:from-black/10 transition-all duration-1000"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 p-4 border border-sand/30 dark:border-charcoal bg-ivory/80 dark:bg-charcoal/80 backdrop-blur-sm text-primary dark:text-champagne transition-all duration-700 z-10 opacity-0 group-hover:opacity-100 hover:border-gold hover:text-gold"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 p-4 border border-sand/30 dark:border-charcoal bg-ivory/80 dark:bg-charcoal/80 backdrop-blur-sm text-primary dark:text-champagne transition-all duration-700 z-10 opacity-0 group-hover:opacity-100 hover:border-gold hover:text-gold"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>

        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-8 right-8 text-champagne/70 hover:text-champagne text-4xl font-light transition-colors duration-500"
              onMouseDown={(e) => e.stopPropagation()}
              onClickCapture={(e) => e.stopPropagation()}
              aria-label="Close lightbox"
            >
              ×
            </button>
            <button
              onClick={() =>
                setLightboxIndex(
                  lightboxIndex === 0 ? GALLERY_DATA.length - 1 : lightboxIndex - 1
                )
              }
              className="absolute left-6 sm:left-12 text-champagne/70 hover:text-gold border border-sand/20 hover:border-gold/40 p-3 transition-all duration-500"
              onMouseDown={(e) => e.stopPropagation()}
              onClickCapture={(e) => e.stopPropagation()}
              aria-label="Previous image"
            >
              <ChevronLeft strokeWidth={1.5} />
            </button>
            <img
              src={GALLERY_DATA[lightboxIndex].src}
              alt={GALLERY_DATA[lightboxIndex].alt[language]}
              className="max-h-[85vh] max-w-full shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() =>
                setLightboxIndex(
                  lightboxIndex === GALLERY_DATA.length - 1 ? 0 : lightboxIndex + 1
                )
              }
              className="absolute right-6 sm:right-12 text-champagne/70 hover:text-gold border border-sand/20 hover:border-gold/40 p-3 transition-all duration-500"
              onMouseDown={(e) => e.stopPropagation()}
              onClickCapture={(e) => e.stopPropagation()}
              aria-label="Next image"
            >
              <ChevronRight strokeWidth={1.5} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
