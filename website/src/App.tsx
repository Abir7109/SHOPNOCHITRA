import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReasonsSlider from './components/ReasonsSlider';
import ArchitecturalQuote from './components/ArchitecturalQuote';
import LocationConcept from './components/LocationConcept';
import ApartmentTypes from './components/ApartmentTypes';
import AmenitiesSection from './components/AmenitiesSection';
import InteriorSpace from './components/InteriorSpace';
import ArchitectureSection from './components/ArchitectureSection';
import ProjectDetailsAccordion from './components/ProjectDetailsAccordion';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import BookCallModal from './components/BookCallModal';
import ApartmentsModal from './components/ApartmentsModal';
import MobileMenu from './components/MobileMenu';
import CookiesBanner from './components/CookiesBanner';

export default function App() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isApartmentsOpen, setIsApartmentsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedApartmentForInquiry, setSelectedApartmentForInquiry] = useState<string | undefined>(undefined);
  const [apartmentsFilter, setApartmentsFilter] = useState<string>('all');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track overall scroll progress for header and lateral indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenApartmentsWithFilter = (filterKey: string = 'all') => {
    setApartmentsFilter(filterKey);
    setIsApartmentsOpen(true);
  };

  const handleSelectUnitForCall = (unitName: string) => {
    setSelectedApartmentForInquiry(unitName);
    setIsApartmentsOpen(false);
    setIsBookCallOpen(true);
  };

  const handleOpenGeneralCall = () => {
    setSelectedApartmentForInquiry(undefined);
    setIsBookCallOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#e5dfd7] text-[#24201d] font-sans selection:bg-[#24201d] selection:text-[#e5dfd7]">
      {/* Fixed Header & Scroll Nav */}
      <Header
        onOpenBookCall={handleOpenGeneralCall}
        onOpenApartments={() => handleOpenApartmentsWithFilter('all')}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        scrollProgress={scrollProgress}
      />

      {/* Main Page Flow */}
      <main>
        {/* Hero with Day/Night and Hotspots */}
        <Hero onOpenApartments={() => handleOpenApartmentsWithFilter('all')} />

        {/* 3 Reasons To Choose Era Slider */}
        <ReasonsSlider />

        {/* Architectural Quote Section */}
        <ArchitecturalQuote />

        {/* Location & Concept (Between Marbella and Estepona) */}
        <LocationConcept onOpenApartments={() => handleOpenApartmentsWithFilter('all')} />

        {/* Typologies: Ground + Basement, Ground Floor, Penthouse Duplex */}
        <ApartmentTypes
          onOpenApartments={handleOpenApartmentsWithFilter}
          onOpenBookCall={handleOpenGeneralCall}
        />

        {/* Resort Amenities */}
        <AmenitiesSection onOpenBookCall={handleOpenGeneralCall} />

        {/* Interior Space, Smart Features & Gallery */}
        <InteriorSpace
          onOpenBookCall={handleOpenGeneralCall}
          onOpenApartments={() => handleOpenApartmentsWithFilter('all')}
        />

        {/* Architecture Team & Philosophy */}
        <ArchitectureSection onOpenBookCall={handleOpenGeneralCall} />

        {/* Governance & Assurances Accordion (Developer, Licenses, 2026) */}
        <ProjectDetailsAccordion />

        {/* Sea Views Rooftop CTA */}
        <CallToAction
          onOpenApartments={() => handleOpenApartmentsWithFilter('all')}
          onOpenBookCall={handleOpenGeneralCall}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBookCall={handleOpenGeneralCall}
        onOpenApartments={() => handleOpenApartmentsWithFilter('all')}
      />

      {/* Modals & Overlays */}
      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
        defaultApartment={selectedApartmentForInquiry}
      />

      <ApartmentsModal
        isOpen={isApartmentsOpen}
        onClose={() => setIsApartmentsOpen(false)}
        onSelectApartmentForCall={handleSelectUnitForCall}
        initialFilter={apartmentsFilter}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenBookCall={handleOpenGeneralCall}
        onOpenApartments={() => handleOpenApartmentsWithFilter('all')}
      />

      <CookiesBanner />
    </div>
  );
}
