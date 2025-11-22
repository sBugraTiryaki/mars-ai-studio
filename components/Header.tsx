
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md shadow-md'
          : 'py-6 md:py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className={`font-display text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-primary dark:text-white' : 'text-white'}`}>
          SERENE HEIGHTS
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-yellow-500 transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
              isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'
            }`}
          >
            <Globe size={18} />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            onClick={onInquire}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              isScrolled
                ? 'bg-primary text-white hover:opacity-90'
                : 'bg-white text-primary hover:bg-white/90'
            }`}
          >
            {t('nav.inquire')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
           <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-1 text-sm font-medium ${
              isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'
            }`}
          >
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 focus:outline-none ${isScrolled ? 'text-primary dark:text-white' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark shadow-xl transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 dark:text-gray-200 font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              onInquire();
              setIsMenuOpen(false);
            }}
            className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            {t('nav.inquireNow')}
          </button>
        </nav>
      </div>
    </header>
  );
};
