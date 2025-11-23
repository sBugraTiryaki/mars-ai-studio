
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
    <section id="overview" className="py-30 md:py-40 bg-ivory dark:bg-background-dark">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-24 md:mb-30">
          <p className="text-xs md:text-sm font-light tracking-[0.3em] uppercase text-charcoal/60 dark:text-sand/70 mb-6">
            {t('overview.label')}
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-primary dark:text-champagne mb-12 leading-tight tracking-tight">
            {t('overview.title')}
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-charcoal/80 dark:text-sand leading-loose font-light">
            {t('overview.text')}
          </p>
        </div>

        <div className="border-y border-sand/30 dark:border-charcoal py-16 md:py-20 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <h4 className="font-light text-primary dark:text-champagne text-base md:text-lg mb-3 tracking-wide">{stat.label}</h4>
                <p className="text-charcoal/70 dark:text-sand/80 font-light text-sm md:text-base">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
