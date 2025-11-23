
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { UNITS_DATA } from '../constants';
import { Unit } from '../types';
import { useLanguage } from '../LanguageContext';

interface UnitsProps {
  onSelectUnit: (unit: Unit) => void;
}

export const Units: React.FC<UnitsProps> = ({ onSelectUnit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
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

  const maxIndex = Math.max(0, UNITS_DATA.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="units" className="py-30 md:py-40 bg-ivory dark:bg-charcoal overflow-hidden">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-center text-primary dark:text-champagne mb-24 md:mb-30 tracking-tight">
          {t('units.title')}
        </h2>

        <div className="relative group">
          <div className="overflow-hidden -mx-4 px-4 py-4">
            <div
              className="flex transition-transform duration-1000 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {UNITS_DATA.map((unit) => (
                <div
                  key={unit.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div
                    onClick={() => onSelectUnit(unit)}
                    className="group bg-background-light dark:bg-background-dark border border-sand/20 dark:border-charcoal/80 overflow-hidden hover:border-gold/40 dark:hover:border-gold/30 transition-all duration-1000 cursor-pointer h-full flex flex-col"
                  >
                    <div className="relative overflow-hidden h-80">
                      <img
                        src={unit.image}
                        alt={unit.type[language]}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/20 transition-all duration-1000"></div>
                    </div>

                    <div className="p-10 md:p-12 text-center flex-grow flex flex-col justify-between">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-display font-light text-primary dark:text-champagne tracking-wide">
                          {unit.type[language]}
                        </h3>
                        <p className="text-charcoal/80 dark:text-sand font-light text-base">
                          {t('units.startsFrom')} {unit.price}
                        </p>
                      </div>
                      <div className="mt-8 pt-8 border-t border-sand/20 dark:border-charcoal/80">
                        <span className="text-xs uppercase tracking-[0.2em] font-light text-charcoal/70 dark:text-sand/80 group-hover:text-gold transition-colors duration-700">
                          {t('units.viewDetails')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {UNITS_DATA.length > itemsPerPage && (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};
