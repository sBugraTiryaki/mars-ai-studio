
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Unit } from '../types';
import { useLanguage } from '../LanguageContext';

interface UnitModalProps {
  unit: Unit | null;
  isOpen: boolean;
  onClose: () => void;
  onInquire: () => void;
}

export const UnitModal: React.FC<UnitModalProps> = ({ unit, isOpen, onClose, onInquire }) => {
  const [mounted, setMounted] = useState(false);
  const { t, language } = useLanguage();

  const handleDownloadProspectus = () => {
    // TODO: Implement actual PDF download
    console.log('Download unit prospectus');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !unit) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-6 transition-all duration-1000 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-lg transition-opacity duration-1000"
        onClick={onClose}
      ></div>

      {/* Content */}
      <div
        className={`bg-ivory dark:bg-background-dark w-full max-w-6xl max-h-[90vh] overflow-y-auto border border-sand/30 dark:border-charcoal shadow-2xl relative transform transition-all duration-1000 ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-98 translate-y-4 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-ivory/80 dark:bg-charcoal/80 backdrop-blur-sm p-3 text-primary dark:text-champagne hover:bg-ivory dark:hover:bg-charcoal transition-all duration-500"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Info */}
          <div className="p-12 md:p-16 flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-display font-light text-primary dark:text-champagne mb-4 tracking-tight">
                {unit.type[language]}
              </h3>
              <p className="text-xl text-charcoal/80 dark:text-sand font-light">
                {unit.priceRange}
              </p>
            </div>

            <div className="border-t border-sand/30 dark:border-charcoal pt-8">
              <p className="text-charcoal/80 dark:text-sand/90 leading-loose font-light text-base">
                {unit.description[language]}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-light tracking-wider mb-6 text-primary dark:text-champagne border-b border-sand/30 dark:border-charcoal pb-3">
                {t('unitModal.floorPlan')}
              </h4>
              <div className="bg-background-light dark:bg-charcoal border border-sand/30 dark:border-charcoal/80 p-4">
                <img
                  src={unit.floorPlan}
                  alt="Floor plan"
                  className="w-full h-64 object-contain mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            </div>

            {/* Dual CTA - Apple Style */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Secondary CTA - Low Friction (Prospectus) */}
              <button
                className="flex-1 px-8 py-3 text-sm font-light tracking-[0.15em] text-charcoal/70 dark:text-sand/70 hover:text-primary dark:hover:text-champagne transition-all duration-700"
                onClick={handleDownloadProspectus}
              >
                {t('unitModal.prospectus')}
              </button>

              {/* Primary CTA - Apple "Buy" Style */}
              <button
                className="flex-1 bg-primary dark:bg-champagne text-ivory dark:text-primary px-8 py-3 text-sm font-medium tracking-[0.15em] hover:opacity-90 transition-all duration-700"
                onClick={() => {
                  onClose();
                  onInquire();
                }}
              >
                {t('unitModal.inquire')}
              </button>
            </div>
          </div>

          {/* Right: Images */}
          <div className="bg-champagne dark:bg-charcoal p-6 lg:p-10 overflow-y-auto max-h-[50vh] lg:max-h-[90vh] custom-scrollbar">
            <div className="grid gap-6">
              <img src={unit.image} alt={unit.type[language]} className="w-full shadow-md" />
              {unit.gallery.map((img, idx) => (
                <img key={idx} src={img} alt={`Detail ${idx}`} className="w-full shadow-md" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
