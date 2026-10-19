import { useState, useEffect } from 'react';
import EraLogo from './EraLogo';

interface HeaderProps {
  onOpenBookCall: () => void;
  onOpenApartments: () => void;
  onOpenMobileMenu: () => void;
  scrollProgress: number;
}

export default function Header({
  onOpenBookCall,
  onOpenApartments,
  onOpenMobileMenu,
  scrollProgress,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formattedProgress = String(Math.min(99, Math.floor(scrollProgress * 100))).padStart(2, '0');

  return (
    <>
      {/* Top Main Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 sm:px-12 py-5 sm:py-6 flex items-center justify-between ${
          isScrolled
            ? 'bg-[#e5dfd7]/90 backdrop-blur-md border-b border-[#24201d]/10 py-4 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        {/* Brand Logo & Rotating Emblem */}
        <a
          href="#hero"
          className="group flex items-center gap-3.5 focus:outline-none"
          aria-label="ERA Residence - Back to top"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
            <EraLogo size={24} withCircularText={true} className="text-[#24201d]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl tracking-wider uppercase font-medium leading-none text-[#24201d]">
              ERA Residence
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#7a7267] mt-0.5">
              Estepona • Costa del Sol
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={onOpenApartments}
            className="group relative text-xs tracking-[0.2em] uppercase text-[#24201d] transition-colors hover:text-[#b3412f] py-1 cursor-pointer"
          >
            <span>Select an Apartment</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#b3412f] transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            onClick={onOpenBookCall}
            className="group relative px-5 py-2.5 rounded-full border border-[#24201d]/25 text-xs tracking-[0.2em] uppercase text-[#24201d] overflow-hidden transition-all duration-500 hover:border-[#24201d] hover:text-[#e5dfd7] cursor-pointer"
          >
            <span className="relative z-10">Book a call</span>
            <div className="absolute inset-0 bg-[#24201d] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
          </button>

          <a
            href="#contact"
            className="group relative text-xs tracking-[0.2em] uppercase text-[#24201d] transition-colors hover:text-[#b3412f] py-1 cursor-pointer"
          >
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#b3412f] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenApartments}
            className="px-3 py-1.5 rounded-full border border-[#24201d]/30 text-[10px] tracking-wider uppercase text-[#24201d]"
          >
            Apartments
          </button>
          <button
            onClick={onOpenMobileMenu}
            className="p-2 text-[#24201d] hover:opacity-75 transition-opacity"
            aria-label="Open menu"
          >
            <div className="w-6 h-6 flex flex-col items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Floating Side Progress Bar (Fixed Right - Authentic to original ERA design) */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3 pointer-events-none">
        <div className="text-[11px] font-mono tracking-widest text-[#24201d]/70">
          {formattedProgress}
        </div>
        <div className="w-[1px] h-24 bg-[#24201d]/15 relative overflow-hidden">
          <div
            className="w-full bg-[#24201d] transition-all duration-150"
            style={{ height: `${Math.min(100, Math.max(8, scrollProgress * 100))}%` }}
          />
        </div>
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#24201d]/50 rotate-90 my-2">
          RESIDENCE
        </span>
      </div>

      {/* Bottom Scroll Prompt */}
      <a
        href="#reasons"
        className="hidden md:flex fixed right-8 bottom-8 z-30 items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#24201d]/60 hover:text-[#24201d] transition-colors"
      >
        <span>Scroll</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </a>
    </>
  );
}
