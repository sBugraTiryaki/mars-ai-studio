
import React from 'react';
import { Umbrella, Waves, Dumbbell, Flower2, ConciergeBell, Utensils } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Amenities: React.FC = () => {
  const { t } = useLanguage();

  const amenities = [
    { icon: Umbrella, label: t('amenities.items.beach') },
    { icon: Waves, label: t('amenities.items.pool') },
    { icon: Dumbbell, label: t('amenities.items.fitness') },
    { icon: Flower2, label: t('amenities.items.spa') },
    { icon: ConciergeBell, label: t('amenities.items.concierge') },
    { icon: Utensils, label: t('amenities.items.dining') },
  ];

  return (
    <section id="amenities" className="py-30 md:py-40 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-center text-primary dark:text-champagne mb-24 md:mb-30 tracking-tight">
          {t('amenities.title')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-12">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="group bg-ivory dark:bg-charcoal p-10 md:p-12 border border-sand/20 dark:border-charcoal/80 hover:border-gold/40 dark:hover:border-gold/30 transition-all duration-700 text-center flex flex-col items-center justify-center"
            >
              <div className="mb-6 text-charcoal/70 dark:text-sand/80 group-hover:text-gold transition-colors duration-700">
                <item.icon size={40} strokeWidth={1} />
              </div>
              <p className="font-light text-sm md:text-base tracking-wide text-charcoal/80 dark:text-sand">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
