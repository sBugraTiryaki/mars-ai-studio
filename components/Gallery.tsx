
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
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
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
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
      </div>
    </section>
  );
};
