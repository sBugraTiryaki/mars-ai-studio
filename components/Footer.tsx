
import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-champagne dark:bg-charcoal py-20 border-t border-sand/30 dark:border-charcoal">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 text-center text-charcoal/70 dark:text-sand/70">
        <p className="font-display text-2xl font-light tracking-widest text-primary dark:text-champagne mb-8">SERENE HEIGHTS</p>
        <p className="text-sm font-light mb-3">&copy; {new Date().getFullYear()} Serene Heights Development. {t('footer.rights')}</p>
        <p className="text-xs font-light opacity-70">{t('footer.sub')}</p>
      </div>
    </footer>
  );
};
