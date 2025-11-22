
import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Overview: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t('overview.stats.projectType'), value: t('overview.stats.val_res') },
    { label: t('overview.stats.kdv'), value: t('overview.stats.val_inc') },
    { label: t('overview.stats.construction'), value: t('overview.stats.val_con') },
    { label: t('overview.stats.rental'), value: t('overview.stats.val_ren') },
    { label: t('overview.stats.view'), value: t('overview.stats.val_view') },
    { label: t('overview.stats.buyback'), value: t('overview.stats.val_buy') },
  ];

  return (
    <section id="overview" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-4">
            {t('overview.label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-8">
            {t('overview.title')}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
            {t('overview.text')}
          </p>
        </div>

        <div className="border-y border-gray-200 dark:border-gray-800 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{stat.label}</h4>
                <p className="text-gray-600 dark:text-gray-400 font-light">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
