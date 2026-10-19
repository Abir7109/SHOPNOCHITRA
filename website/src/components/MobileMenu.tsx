import { X, Phone, MapPin } from 'lucide-react';
import EraLogo from './EraLogo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookCall: () => void;
  onOpenApartments: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  onOpenBookCall,
  onOpenApartments,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1f1b18] text-[#e5dfd7] flex flex-col justify-between p-6 sm:p-10 animate-fadeIn">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <EraLogo size={32} className="text-[#c24b38]" />
          <span className="font-serif text-xl tracking-wider uppercase text-white">
            Era Residence
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1f1b18] transition-colors"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
      </div>

      {/* Center Nav Items */}
      <div className="py-8 flex flex-col items-center justify-center space-y-6 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#a89f92]">The Menu</span>

        <a
          href="#hero"
          onClick={onClose}
          className="font-serif text-3xl sm:text-4xl text-white hover:text-[#c24b38] transition-colors"
        >
          Home
        </a>

        <button
          onClick={() => {
            onClose();
            onOpenApartments();
          }}
          className="font-serif text-3xl sm:text-4xl text-white hover:text-[#c24b38] transition-colors"
        >
          Select an Apartment
        </button>

        <a
          href="#reasons"
          onClick={onClose}
          className="font-serif text-3xl sm:text-4xl text-white hover:text-[#c24b38] transition-colors"
        >
          Why Choose Era
        </a>

        <a
          href="#location"
          onClick={onClose}
          className="font-serif text-3xl sm:text-4xl text-white hover:text-[#c24b38] transition-colors"
        >
          Location & Concept
        </a>

        <a
          href="#amenities"
          onClick={onClose}
          className="font-serif text-3xl sm:text-4xl text-white hover:text-[#c24b38] transition-colors"
        >
          Resort Amenities
        </a>

        <a
          href="#interiors"
          onClick={onClose}
          className="font-serif text-3xl sm:text-4xl text-white hover:text-[#c24b38] transition-colors"
        >
          Interiors & Upgrades
        </a>

        <button
          onClick={() => {
            onClose();
            onOpenBookCall();
          }}
          className="mt-4 px-8 py-3.5 rounded-full bg-[#c24b38] text-white text-xs uppercase tracking-[0.2em] font-medium shadow-lg"
        >
          Book a Consultation Call
        </button>
      </div>

      {/* Bottom Contact Details */}
      <div className="pt-6 border-t border-white/10 text-center space-y-2 text-xs text-[#a89f92]">
        <div className="flex items-center justify-center gap-2 text-white">
          <Phone size={14} className="text-[#c24b38]" />
          <a href="tel:+34655408648" className="hover:underline">
            +34 (655) 408-648
          </a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <MapPin size={14} className="text-[#c24b38]" />
          <span>Avenida Litoral, Estepona, Málaga, Spain</span>
        </div>
      </div>
    </div>
  );
}
