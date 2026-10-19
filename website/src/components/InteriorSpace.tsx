import { useState } from 'react';
import { GALLERY_IMAGES } from '../data/residenceData';
import { ChevronLeft, ChevronRight, Sliders, Zap, Sun, Shield, Sparkles } from 'lucide-react';

interface InteriorSpaceProps {
  onOpenBookCall: () => void;
  onOpenApartments: () => void;
}

export default function InteriorSpace({ onOpenBookCall, onOpenApartments }: InteriorSpaceProps) {
  const [galleryIndex, setGalleryIndex] = useState(0);

  const nextPhoto = () => {
    setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevPhoto = () => {
    setGalleryIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const currentPhoto = GALLERY_IMAGES[galleryIndex];

  const specifications = [
    {
      icon: <Sliders className="text-[#c24b38]" size={20} />,
      title: 'Underfloor Heating',
      desc: 'Independent thermal distribution across all rooms for seamless seasonal climate control.',
    },
    {
      icon: <Sun className="text-[#c24b38]" size={20} />,
      title: 'Climate Automation',
      desc: 'Smart Aerothermal HVAC delivering peak energy efficiency and quiet cooling.',
    },
    {
      icon: <Shield className="text-[#c24b38]" size={20} />,
      title: 'Smart Lock Security',
      desc: 'Keyless smartphone and biometric access integration with remote management.',
    },
    {
      icon: <Zap className="text-[#c24b38]" size={20} />,
      title: 'Schneider Electric DLIFE',
      desc: 'Designer architectural mechanisms, acoustic insulation, and integrated mood dimming.',
    },
  ];

  return (
    <section id="interiors" className="relative py-24 sm:py-32 bg-[#f4efe8] text-[#24201d] overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 max-w-6xl">
        {/* Editorial Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c24b38] font-medium block mb-2">
            Interiors & Finishes
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl font-light tracking-tight">
            The space to <span className="italic font-serif">Live in</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5c544d] font-light leading-relaxed">
            Every material was selected to create residences that feel tactile, intuitive, and deeply peaceful to reside in.
          </p>
        </div>

        {/* Dual Column Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Left: Atmospheric Garden Image & Upgrades */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#24201d]/10 group">
              <img
                src="https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a1571e51d50c8bcf5f4bb3d_era-residence-garden-2.webp"
                alt="Outdoor seating in lush private Mediterranean garden"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 text-xs tracking-wider uppercase text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                Private Garden Terrace
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#e5dfd7] border border-[#24201d]/10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c24b38] font-semibold mb-2">
                <Sparkles size={16} />
                <span>Bespoke Upgrades Available</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#5c544d]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c24b38]" />
                  <span>Private hydromassage rooftop jacuzzi</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c24b38]" />
                  <span>Dedicated rapid EV charging station in garage bay</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c24b38]" />
                  <span>Integrated photovoltaic solar energy panels</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Technical Specifications List */}
          <div className="lg:col-span-6 space-y-5">
            <div className="w-12 h-[2px] bg-[#c24b38]" />
            <h3 className="font-serif text-3xl sm:text-4xl text-[#24201d] font-light leading-snug">
              Every detail was selected to create homes that feel elegant, intuitive and effortless.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {specifications.map((spec, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/70 border border-[#24201d]/10 shadow-sm">
                  <div className="mb-2">{spec.icon}</div>
                  <h4 className="font-serif text-lg font-medium text-[#24201d] mb-1">{spec.title}</h4>
                  <p className="text-xs text-[#5c544d] leading-relaxed">{spec.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenApartments}
                className="px-6 py-3 rounded-full bg-[#24201d] text-[#e5dfd7] text-xs uppercase tracking-[0.2em] hover:bg-[#c24b38] transition-colors cursor-pointer"
              >
                Browse Residences
              </button>
              <button
                onClick={onOpenBookCall}
                className="px-6 py-3 rounded-full border border-[#24201d]/20 text-[#24201d] text-xs uppercase tracking-[0.2em] hover:border-[#24201d] transition-colors cursor-pointer"
              >
                Inquire Specs
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Interior Image Gallery */}
        <div className="mt-16 pt-12 border-t border-[#24201d]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c24b38]">Visual Gallery</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#24201d]">
                Living, Dining & Suites
              </h3>
            </div>

            {/* Gallery Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevPhoto}
                className="p-2.5 rounded-full border border-[#24201d]/20 hover:bg-[#24201d] hover:text-[#e5dfd7] transition-all cursor-pointer"
                aria-label="Previous gallery image"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-xs font-mono text-[#7a7267]">
                0{galleryIndex + 1} / 0{GALLERY_IMAGES.length}
              </span>
              <button
                onClick={nextPhoto}
                className="p-2.5 rounded-full border border-[#24201d]/20 hover:bg-[#24201d] hover:text-[#e5dfd7] transition-all cursor-pointer"
                aria-label="Next gallery image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Featured Large Gallery Slide */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#24201d]/10">
            <img
              src={currentPhoto.url}
              alt={currentPhoto.caption}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <span className="text-xs sm:text-sm tracking-wider font-light bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                {currentPhoto.caption}
              </span>
            </div>
          </div>

          {/* Thumbnail preview bar */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 mt-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setGalleryIndex(idx)}
                className={`relative aspect-[16/10] rounded-lg overflow-hidden border transition-all cursor-pointer ${
                  galleryIndex === idx
                    ? 'ring-2 ring-[#c24b38] border-transparent opacity-100 scale-[1.02]'
                    : 'border-[#24201d]/15 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img.url} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
