
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Gallery } from './components/Gallery';
import { Amenities } from './components/Amenities';
import { Units } from './components/Units';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { UnitModal } from './components/UnitModal';
import { Unit } from './types';
import { LanguageProvider } from './LanguageContext';

function AppContent() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [unitModalOpen, setUnitModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  const handleOpenInquiry = () => setInquiryModalOpen(true);
  const handleCloseInquiry = () => setInquiryModalOpen(false);

  const handleSelectUnit = (unit: Unit) => {
    setSelectedUnit(unit);
    setUnitModalOpen(true);
  };

  const handleCloseUnit = () => {
    setUnitModalOpen(false);
    // Short timeout to clear data after animation
    setTimeout(() => setSelectedUnit(null), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onInquire={handleOpenInquiry} />

      <main className="flex-grow">
        <Hero onInquire={handleOpenInquiry} />
        <Overview />
        <Gallery />
        <Amenities />
        <Units onSelectUnit={handleSelectUnit} />
        <Location />
        <Contact onInquire={handleOpenInquiry} />
      </main>

      <Footer />

      <InquiryModal 
        isOpen={inquiryModalOpen} 
        onClose={handleCloseInquiry} 
      />

      <UnitModal 
        unit={selectedUnit} 
        isOpen={unitModalOpen} 
        onClose={handleCloseUnit}
        onInquire={handleOpenInquiry}
      />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
