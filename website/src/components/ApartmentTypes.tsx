import { useState } from 'react';
import { ChevronLeft, ChevronRight, Bed, Maximize2, Compass } from 'lucide-react';

interface ApartmentTypesProps {
  onOpenApartments: (typeFilter?: string) => void;
  onOpenBookCall: () => void;
}

export default function ApartmentTypes({ onOpenApartments, onOpenBookCall }: ApartmentTypesProps) {
  const [activeTab, setActiveTab] = useState(0);

  const residenceTypes = [
    {
      id: 'ground-basement',
      title: 'Ground floor + basement',
      badge: 'Private Garden & Lower Level',
      bedrooms: '3 Bedrooms',
      area: '178 — 202 m²',
      description:
        'Features a private lower level ideal for entertainment, home cinema, personal fitness studio or guest suite, with direct walkout to your private landscaped garden.',
      image:
        'https://cdn.prod.website-files.com/6a0853d5dab31b18f0677081/6a1514d7c27920c70252da1f_era-residence-ground-floor-basement.webp',
      filterKey: 'ground-basement',
      highlights: ['Direct garden access', 'Flexible lower living level', 'Underfloor heating throughout'],
    },
    {
      id: 'ground-floor',
      title: 'Ground Floor',
      badge: 'Communal Garden Connection',
      bedrooms: '2 Bedrooms',
      area: '97 — 104 m²',
      description:
        'Step directly from your sunlit terrace into the community gardens, harmonizing indoor comfort with leisurely Mediterranean outdoor living.',
      image:
        'https://cdn.prod.website-files.com/6a0853d5dab31b18f0677081/6a1575f46655e8c4e795ec64_era-residence-landscaping.webp',
      filterKey: 'ground-floor',
      highlights: ['Seamless indoor-outdoor flow', 'Gourmet island kitchen', 'South-facing private terrace'],
    },
    {
      id: 'penthouse-duplex',
      title: 'Penthouse duplex',
      badge: 'Panoramic Sea Solarium',
      bedrooms: '2 — 3 Bedrooms',
      area: '124 — 243 m²',
      description:
        'Spanning two levels crowned with an exclusive private rooftop solarium and panoramic coastal views of the Mediterranean horizon and Gibraltar.',
      image:
        'https://cdn.prod.website-files.com/6a0853d5dab31b18f0677081/6a15153b797c328a9f2f5964_era-residence-terrace.webp',
      filterKey: 'penthouse-duplex',
      highlights: ['Private rooftop solarium', 'Double-height living space', 'Pre-installed plunge pool option'],
    },
  ];

  const current = residenceTypes[activeTab];

  return (
    <section id="apartments" className="relative py-24 sm:py-32 bg-[#24201d] text-[#e5dfd7] overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#c24b38] font-medium block mb-2">
              Residence Typologies
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white">
              Tailored Layouts
            </h2>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {residenceTypes.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-[#c24b38] text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Typology Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Visual */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 group">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs tracking-wider uppercase">
                {current.badge}
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="bg-[#24201d]/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/15">
                  Type 0{activeTab + 1}
                </span>
                <span className="font-mono">{current.area}</span>
              </div>
            </div>
          </div>

          {/* Right Information & Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c24b38] font-medium">
                Era Residence Typology
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight mt-1 mb-4">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base text-[#d4ccc0] font-light leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Data metric badges */}
              <div className="grid grid-cols-2 gap-4 my-6 p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <div>
                  <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#a89f92] mb-1">
                    <Bed size={14} className="text-[#c24b38]" />
                    <span>Bedrooms</span>
                  </div>
                  <div className="font-serif text-2xl text-white">{current.bedrooms}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#a89f92] mb-1">
                    <Maximize2 size={14} className="text-[#c24b38]" />
                    <span>Area up to</span>
                  </div>
                  <div className="font-serif text-2xl text-white">{current.area}</div>
                </div>
              </div>

              {/* Highlights Checklist */}
              <ul className="space-y-2 mb-8 text-xs sm:text-sm text-[#a89f92]">
                {current.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c24b38]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenApartments(current.filterKey)}
                className="px-6 py-3.5 rounded-full bg-white text-[#24201d] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#c24b38] hover:text-white transition-all duration-300 text-center cursor-pointer shadow-lg"
              >
                View Available Units
              </button>
              <button
                onClick={onOpenBookCall}
                className="px-6 py-3.5 rounded-full border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:border-white transition-colors text-center cursor-pointer"
              >
                Request Floorplans
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#a89f92]">
            Total 25 Exclusive Residences
          </span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab((prev) => (prev - 1 + residenceTypes.length) % residenceTypes.length)}
              className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#24201d] transition-colors cursor-pointer"
              aria-label="Previous typology"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-xs font-mono text-white/70">
              0{activeTab + 1} / 0{residenceTypes.length}
            </span>
            <button
              onClick={() => setActiveTab((prev) => (prev + 1) % residenceTypes.length)}
              className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#24201d] transition-colors cursor-pointer"
              aria-label="Next typology"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
