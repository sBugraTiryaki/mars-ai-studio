
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
    <section id="gallery" className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('gallery.title')}
        </h2>

        <div className="relative group">
          {/* Slider Container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {GALLERY_DATA.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="relative overflow-hidden rounded-xl h-64 md:h-80 group/image">
                    <img
                      src={image.src}
                      alt={image.alt[language]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110 cursor-zoom-in"
                      onClick={() => setLightboxIndex(index)}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-primary dark:text-white transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-white"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-primary dark:text-white transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-colors"
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
              className="absolute left-4 sm:left-10 text-white bg-black/40 hover:bg-black/60 rounded-full p-3 transition-colors"
              onMouseDown={(e) => e.stopPropagation()}
              onClickCapture={(e) => e.stopPropagation()}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <img
              src={GALLERY_DATA[lightboxIndex].src}
              alt={GALLERY_DATA[lightboxIndex].alt[language]}
              className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() =>
                setLightboxIndex(
                  lightboxIndex === GALLERY_DATA.length - 1 ? 0 : lightboxIndex + 1
                )
              }
              className="absolute right-4 sm:right-10 text-white bg-black/40 hover:bg-black/60 rounded-full p-3 transition-colors"
              onMouseDown={(e) => e.stopPropagation()}
              onClickCapture={(e) => e.stopPropagation()}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
