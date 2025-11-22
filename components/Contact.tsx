
import React from 'react';
import { useLanguage } from '../LanguageContext';

interface ContactProps {
  onInquire: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onInquire }) => {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white dark:bg-background-dark text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
          {t('contact.title')}
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-10 font-light leading-relaxed">
          {t('contact.text')}
        </p>
        <button 
          onClick={onInquire}
          className="bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          {t('contact.button')}
        </button>
      </div>
    </section>
  );
};
