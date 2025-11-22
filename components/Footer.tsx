
import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-500 dark:text-gray-400">
        <p className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">SERENE HEIGHTS</p>
        <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Serene Heights Development. {t('footer.rights')}</p>
        <p className="text-xs opacity-70">{t('footer.sub')}</p>
      </div>
    </footer>
  );
};
