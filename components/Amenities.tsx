
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
    <section id="amenities" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-16">
          {t('amenities.title')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {amenities.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-full mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary dark:text-white">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
