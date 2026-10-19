import { useState } from 'react';
import { X, Bed, Bath, Maximize2, Compass, ShieldCheck } from 'lucide-react';
import { APARTMENT_MODELS } from '../data/residenceData';
import { Apartment } from '../types';
import EraLogo from './EraLogo';

interface ApartmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectApartmentForCall: (apartmentName: string) => void;
  initialFilter?: string;
}

export default function ApartmentsModal({
  isOpen,
  onClose,
  onSelectApartmentForCall,
  initialFilter = 'all',
}: ApartmentsModalProps) {
  const [filter, setFilter] = useState(initialFilter);
  const [selectedUnit, setSelectedUnit] = useState<Apartment | null>(null);

  if (!isOpen) return null;

  const filteredApartments = APARTMENT_MODELS.filter((apt) => {
    if (filter === 'all') return true;
    return apt.type === filter;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Content Modal Frame */}
      <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-[#e5dfd7] text-[#24201d] rounded-3xl shadow-2xl border border-[#24201d]/20 z-10 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-6 sm:px-10 py-6 border-b border-[#24201d]/10 flex items-center justify-between bg-[#ece7e0] flex-shrink-0">
          <div className="flex items-center gap-3">
            <EraLogo size={28} className="text-[#c24b38]" />
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#24201d] font-light">
                Select an Apartment
              </h2>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#7a7267] block">
                25 Boutique Residences • Costa del Sol
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-[#24201d]/20 flex items-center justify-center text-[#24201d] hover:bg-[#24201d] hover:text-[#e5dfd7] transition-all cursor-pointer"
            aria-label="Close inventory dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="px-6 sm:px-10 py-3.5 bg-[#f4efe8] border-b border-[#24201d]/10 flex items-center gap-2 overflow-x-auto no-scrollbar flex-shrink-0">
          {[
            { label: 'All Typologies', value: 'all' },
            { label: 'Ground Floor + Basement', value: 'ground-basement' },
            { label: 'Ground Floor', value: 'ground-floor' },
            { label: 'Penthouse Duplex', value: 'penthouse-duplex' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition-all cursor-pointer whitespace-nowrap ${
                filter === tab.value
                  ? 'bg-[#24201d] text-white shadow-sm'
                  : 'text-[#5c544d] hover:bg-[#24201d]/5 hover:text-[#24201d]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredApartments.map((apt) => (
              <div
                key={apt.id}
                className="bg-[#f7f5f0] rounded-2xl border border-[#24201d]/15 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={apt.image}
                    alt={apt.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-wider uppercase text-white font-medium border border-white/15">
                      {apt.typeLabel}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] tracking-wider uppercase font-medium ${
                        apt.status === 'available'
                          ? 'bg-emerald-700 text-white'
                          : 'bg-amber-700 text-white'
                      }`}
                    >
                      {apt.status === 'available' ? 'Available' : 'Reserved'}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono">
                    {apt.priceFrom}
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono tracking-wider text-[#c24b38] uppercase">
                        {apt.number}
                      </span>
                      <span className="text-xs text-[#7a7267] flex items-center gap-1">
                        <Compass size={12} />
                        {apt.orientation}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#24201d] font-normal mb-3">
                      {apt.name}
                    </h3>

                    {/* Metric Quick Stats */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#24201d]/10 text-center mb-4 bg-white/50 rounded-lg">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#7a7267] block">
                          Total Area
                        </span>
                        <span className="font-serif text-lg font-medium text-[#24201d]">
                          {apt.totalArea} m²
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#7a7267] block">
                          Bedrooms
                        </span>
                        <span className="font-serif text-lg font-medium text-[#24201d]">
                          {apt.bedrooms}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#7a7267] block">
                          Terrace
                        </span>
                        <span className="font-serif text-lg font-medium text-[#24201d]">
                          {apt.terraceArea} m²
                        </span>
                      </div>
                    </div>

                    {/* Feature Bullets */}
                    <ul className="space-y-1.5 mb-6 text-xs text-[#5c544d]">
                      {apt.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#c24b38] mt-1.5 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => onSelectApartmentForCall(apt.name)}
                      className="w-full py-2.5 rounded-full bg-[#24201d] text-white text-xs uppercase tracking-[0.18em] hover:bg-[#c24b38] transition-colors cursor-pointer text-center font-medium shadow-sm"
                    >
                      Inquire on this unit
                    </button>
                    <button
                      onClick={() => setSelectedUnit(apt)}
                      className="px-4 py-2.5 rounded-full border border-[#24201d]/20 text-xs uppercase tracking-wider text-[#24201d] hover:bg-[#24201d]/5 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-10 py-4 bg-[#ece7e0] border-t border-[#24201d]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7a7267] flex-shrink-0">
          <span>* Pricing guide excludes VAT and municipal registration fees.</span>
          <button
            onClick={() => onSelectApartmentForCall('General Inventory Request')}
            className="text-[#c24b38] underline hover:text-[#24201d] uppercase tracking-wider font-medium cursor-pointer"
          >
            Request Full Digital Brochure & Price Matrix
          </button>
        </div>
      </div>

      {/* Nested Single Unit Detail Lightbox */}
      {selectedUnit && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#f7f5f0] text-[#24201d] rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20">
            <button
              onClick={() => setSelectedUnit(null)}
              className="absolute top-4 right-4 text-[#24201d] hover:text-[#c24b38]"
            >
              <X size={20} />
            </button>

            <span className="text-xs uppercase tracking-[0.2em] text-[#c24b38]">
              {selectedUnit.number}
            </span>
            <h3 className="font-serif text-3xl font-light text-[#24201d] mb-4">
              {selectedUnit.name}
            </h3>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-[#24201d]/10">
              <img src={selectedUnit.image} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs mb-6">
              <div className="p-2.5 bg-[#e5dfd7] rounded-lg">
                <span className="text-[#7a7267] block">Interior Surface</span>
                <span className="font-serif text-lg font-medium">{selectedUnit.interiorArea} m²</span>
              </div>
              <div className="p-2.5 bg-[#e5dfd7] rounded-lg">
                <span className="text-[#7a7267] block">Exterior Terraces</span>
                <span className="font-serif text-lg font-medium">{selectedUnit.terraceArea} m²</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#5c544d] mb-6">
              <div className="font-medium text-[#24201d] uppercase tracking-wider text-[11px]">
                Included Specifications
              </div>
              {selectedUnit.features.map((f, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#c24b38]" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const name = selectedUnit.name;
                  setSelectedUnit(null);
                  onSelectApartmentForCall(name);
                }}
                className="w-full py-3 rounded-full bg-[#c24b38] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#24201d] transition-colors"
              >
                Inquire on this unit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
