import { useState } from 'react';
import { AMENITIES_DATA } from '../data/residenceData';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AmenitiesSectionProps {
  onOpenBookCall: () => void;
}

export default function AmenitiesSection({ onOpenBookCall }: AmenitiesSectionProps) {
  const [activeAmenityId, setActiveAmenityId] = useState(AMENITIES_DATA[0].id);

  const activeAmenity = AMENITIES_DATA.find((a) => a.id === activeAmenityId) || AMENITIES_DATA[0];

  return (
    <section id="amenities" className="relative py-24 sm:py-32 bg-[#e5dfd7] text-[#24201d] overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c24b38] font-medium block mb-2">
            Resort-Style Living
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight">
            Curated Amenities
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5c544d] font-light leading-relaxed">
            Crafted for tranquility and well-being, our facilities provide residents and invited guests an authentic private retreat on the Costa del Sol.
          </p>
        </div>

        {/* Tab Navigation List */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-4 pb-6 mb-8 border-b border-[#24201d]/10">
          {AMENITIES_DATA.map((amenity) => (
            <button
              key={amenity.id}
              onClick={() => setActiveAmenityId(amenity.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeAmenityId === amenity.id
                  ? 'bg-[#24201d] text-[#e5dfd7] shadow-md'
                  : 'text-[#5c544d] hover:text-[#24201d] hover:bg-[#24201d]/5'
              }`}
            >
              {amenity.title}
            </button>
          ))}
        </div>

        {/* Active Amenity Display Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#f7f5f0] p-6 sm:p-10 rounded-3xl border border-[#24201d]/10 shadow-xl">
          {/* Visual Showcase */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-[#24201d]/10 group">
              <img
                key={activeAmenity.image}
                src={activeAmenity.image}
                alt={activeAmenity.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-white text-xs uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                {activeAmenity.title}
              </div>
            </div>
          </div>

          {/* Description & Detail */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c24b38] font-medium mb-1">
                <ShieldCheck size={16} />
                <span>Exclusive to Residents</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#24201d] font-light mt-1 mb-3">
                {activeAmenity.title}
              </h3>
              <p className="text-sm sm:text-base text-[#5c544d] font-light leading-relaxed mb-6">
                {activeAmenity.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 mb-8">
                {activeAmenity.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-[#24201d]">
                    <CheckCircle2 size={16} className="text-[#c24b38] flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenBookCall}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#24201d] text-[#e5dfd7] text-xs uppercase tracking-[0.2em] hover:bg-[#c24b38] transition-colors cursor-pointer text-center"
            >
              Book a Presentation Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
