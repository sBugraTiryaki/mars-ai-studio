
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  onInquire: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onInquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.overview'), href: '#overview' },
    { name: t('nav.amenities'), href: '#amenities' },
    { name: t('nav.units'), href: '#units' },
    { name: t('nav.location'), href: '#location' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'py-4 bg-ivory/95 dark:bg-background-dark/95 backdrop-blur-lg border-b border-sand/20 dark:border-charcoal'
          : 'py-6 md:py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16 flex justify-between items-center">
        <h1 className={`font-display text-xl md:text-2xl font-light tracking-widest transition-colors duration-700 ${isScrolled ? 'text-primary dark:text-champagne' : 'text-champagne'}`}>
          SERENE HEIGHTS
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-light tracking-wider hover:text-gold transition-all duration-700 ${
                isScrolled ? 'text-charcoal dark:text-sand' : 'text-champagne/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-2 text-xs font-light tracking-widest transition-colors duration-700 ${
              isScrolled ? 'text-charcoal dark:text-sand' : 'text-champagne'
            }`}
          >
            <Globe size={16} strokeWidth={1.5} />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            onClick={onInquire}
            className={`px-8 py-2.5 border font-light text-sm tracking-wider transition-all duration-700 ${
              isScrolled
                ? 'border-primary text-primary hover:bg-primary hover:text-ivory dark:border-champagne dark:text-champagne dark:hover:bg-champagne dark:hover:text-primary'
                : 'border-champagne text-champagne hover:bg-champagne hover:text-primary'
            }`}
          >
            {t('nav.inquire')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
           <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-1 text-xs font-light tracking-widest ${
              isScrolled ? 'text-charcoal dark:text-sand' : 'text-champagne'
            }`}
          >
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 focus:outline-none transition-colors duration-700 ${isScrolled ? 'text-primary dark:text-champagne' : 'text-champagne'}`}
          >
            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-ivory/98 dark:bg-background-dark/98 backdrop-blur-lg border-b border-sand/20 dark:border-charcoal transition-all duration-700 overflow-hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-charcoal dark:text-sand font-light tracking-wide hover:text-gold transition-colors duration-500"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              onInquire();
              setIsMenuOpen(false);
            }}
            className="w-full border border-primary dark:border-champagne text-primary dark:text-champagne py-3 font-light tracking-wider hover:bg-primary hover:text-ivory dark:hover:bg-champagne dark:hover:text-primary transition-all duration-500"
          >
            {t('nav.inquireNow')}
          </button>
        </nav>
      </div>
    </header>
  );
};
