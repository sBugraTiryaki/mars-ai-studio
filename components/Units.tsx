
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
    <section id="units" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('units.title')}
        </h2>

        <div className="relative group">
          <div className="overflow-hidden -mx-4 px-4 py-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
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
                    className="group bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                  >
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={unit.image}
                        alt={unit.type[language]}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>

                    <div className="p-8 text-center flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                          {unit.type[language]}
                        </h3>
                        <p className="text-primary dark:text-gray-400 font-medium">
                          {t('units.startsFrom')} {unit.price}
                        </p>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-sm uppercase tracking-wider font-bold text-gray-500 group-hover:text-primary transition-colors">
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};
