
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Unit } from '../types';
import { useLanguage } from '../LanguageContext';

interface UnitModalProps {
  unit: Unit | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UnitModal: React.FC<UnitModalProps> = ({ unit, isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !unit) return null;

  return (
    <div 
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Content */}
      <div 
        className={`bg-white dark:bg-background-dark w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative transform transition-all duration-300 ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
        }`}
      >
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-10 bg-white/50 dark:bg-black/50 p-2 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-black transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Info */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
              {unit.type[language]}
            </h3>
            <p className="text-2xl text-primary dark:text-gray-300 font-medium mb-6">
              {unit.priceRange}
            </p>
            
            <div className="prose dark:prose-invert mb-8">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {unit.description[language]}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                {t('unitModal.floorPlan')}
              </h4>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
                <img 
                  src={unit.floorPlan} 
                  alt="Floor plan" 
                  className="w-full h-64 object-contain rounded mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            </div>
            
            <button className="w-full bg-primary text-white py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
              {t('unitModal.schedule')}
            </button>
          </div>

          {/* Right: Images */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 lg:p-8 overflow-y-auto max-h-[50vh] lg:max-h-[90vh] custom-scrollbar">
            <div className="grid gap-4">
              <img src={unit.image} alt={unit.type[language]} className="w-full rounded-xl shadow-md" />
              {unit.gallery.map((img, idx) => (
                <img key={idx} src={img} alt={`Detail ${idx}`} className="w-full rounded-xl shadow-md" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
