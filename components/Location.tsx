
import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Location: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="w-full h-[600px] relative bg-gray-200">
       {/* Using a Grayscale map style via iframe params if possible, or CSS filter */}
      <iframe 
        title="Location Map"
        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.251433299318!2d55.13654531500738!3d25.09332298394432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b8b9b8b8b8b%3A0x3b3b3b3b3b3b3b3b!2sPalm%20Jumeirah!5e0!3m2!1sen!2sae!4v1638888888888!5m2!1sen!2sae" 
        allowFullScreen 
        loading="lazy"
      ></iframe>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-background-dark px-8 py-4 rounded-full shadow-lg pointer-events-none">
          <p className="font-display font-bold text-lg text-primary dark:text-white">{t('location.label')}</p>
      </div>
    </section>
  );
};
