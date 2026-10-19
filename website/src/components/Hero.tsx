import { useState } from 'react';
import { PINS_DATA } from '../data/residenceData';
import { InteractivePin } from '../types';
import { Plus, X } from 'lucide-react';

interface HeroProps {
  onOpenApartments: () => void;
}

export default function Hero({ onOpenApartments }: HeroProps) {
  const [timeOfDay, setTimeOfDay] = useState<'day' | 'night'>('day');
  const [activePin, setActivePin] = useState<InteractivePin | null>(null);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#e5dfd7]">
      {/* Top Heading Group */}
      <div className="container mx-auto px-6 sm:px-12 text-center relative z-20">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xs tracking-[0.3em] uppercase text-[#7a7267] mb-2 font-medium">
            Costa del Sol • Spain
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#24201d] leading-[0.95]">
            Era <br className="hidden sm:inline" />
            <span className="italic font-light">Residence</span>
          </h1>
          <div className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#7a7267] mt-2 font-light">
            Estepona
          </div>
        </div>

        {/* Subtitle with Day / Night Switcher */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base md:text-lg tracking-wider text-[#24201d]">
          <span className="uppercase text-xs tracking-[0.25em] text-[#7a7267]">A place</span>

          {/* Interactive Day / Night Pill */}
          <div className="inline-flex items-center p-1 rounded-full bg-[#24201d]/10 backdrop-blur-sm border border-[#24201d]/15">
            <button
              onClick={() => setTimeOfDay('day')}
              className={`px-3.5 py-1 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                timeOfDay === 'day'
                  ? 'bg-[#24201d] text-[#e5dfd7] shadow-sm'
                  : 'text-[#24201d]/70 hover:text-[#24201d]'
              }`}
            >
              by day
            </button>
            <button
              onClick={() => setTimeOfDay('night')}
              className={`px-3.5 py-1 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                timeOfDay === 'night'
                  ? 'bg-[#24201d] text-[#e5dfd7] shadow-sm'
                  : 'text-[#24201d]/70 hover:text-[#24201d]'
              }`}
            >
              by night
            </button>
          </div>

          <span className="uppercase text-xs tracking-[0.25em] text-[#7a7267]">to return to</span>
        </div>
      </div>

      {/* Hero Central Interactive Architectural Canvas */}
      <div className="relative w-full max-w-7xl mx-auto my-8 px-4 sm:px-8 z-10">
        <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#24201d]/10 bg-[#24201d]">
          {/* Day Image Layer */}
          <img
            src="https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a25da81dce540a251389928_era-residence_gated-community_day.webp"
            alt="ERA Residence community view by day"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              timeOfDay === 'day' ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Night Image Layer */}
          <img
            src="https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a25da802c253b9e5e3d44f5_era-residence_gated-community_night.webp"
            alt="ERA Residence community view by night"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              timeOfDay === 'night' ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Ambient Lighting Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

          {/* Interactive Architectural Hotspot Pins */}
          {PINS_DATA.map((pin) => (
            <div
              key={pin.id}
              className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ top: pin.top, left: pin.left }}
            >
              {/* Pulse rings */}
              <div className="relative flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-white/30 animate-pulse-ring pointer-events-none" />
                <button
                  onClick={() => setActivePin(activePin?.id === pin.id ? null : pin)}
                  className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-lg ${
                    activePin?.id === pin.id
                      ? 'bg-[#b3412f] text-white scale-110 ring-4 ring-[#b3412f]/30'
                      : 'bg-white/90 text-[#24201d] hover:bg-white hover:scale-110'
                  }`}
                  aria-label={`Inspect feature: ${pin.title}`}
                >
                  {activePin?.id === pin.id ? <X size={14} /> : <Plus size={14} />}
                </button>
              </div>

              {/* Pin Tooltip Box */}
              {activePin?.id === pin.id && (
                <div
                  className={`absolute z-30 w-72 sm:w-80 p-5 rounded-xl bg-[#f7f5f0] text-[#24201d] shadow-2xl border border-[#24201d]/15 backdrop-blur-lg mt-3 ${
                    parseFloat(pin.left) > 60 ? 'right-0' : 'left-0'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-[#24201d]/10 pb-2 mb-2">
                    <h3 className="font-serif text-lg font-medium text-[#24201d]">{pin.title}</h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePin(null);
                      }}
                      className="text-[#7a7267] hover:text-[#24201d]"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <p className="text-xs leading-relaxed text-[#5c544d]">{pin.description}</p>
                  <div className="mt-3 pt-2 border-t border-[#24201d]/10 flex items-center justify-between text-[10px] tracking-wider uppercase text-[#b3412f]">
                    <span>Boutique Details</span>
                    <span>25 Residences</span>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Bottom Overlay Info Tag */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex items-center gap-3 bg-[#1f1b18]/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] tracking-wider uppercase">
              {timeOfDay === 'day' ? 'Sunlit Mediterranean Day View' : 'Warm Ambient Evening Lighting'}
            </span>
          </div>

          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 hidden sm:flex items-center gap-2 text-white/80 text-[11px] tracking-wider">
            <span>Tap + pins to inspect architecture</span>
          </div>
        </div>
      </div>

      {/* Bottom Magnetic Style Circular CTA */}
      <div className="container mx-auto px-6 sm:px-12 flex flex-col items-center justify-center relative z-20 mt-4">
        <button
          onClick={onOpenApartments}
          className="group relative w-48 h-48 sm:w-52 sm:h-52 rounded-full flex items-center justify-center p-4 transition-transform duration-500 hover:scale-105 cursor-pointer"
        >
          {/* Circular double arc spinning border */}
          <svg
            className="absolute inset-0 w-full h-full text-[#24201d]/30 group-hover:text-[#b3412f] transition-colors duration-500 animate-[spin_20s_linear_infinite]"
            viewBox="0 0 208 208"
          >
            <circle
              cx="104"
              cy="104"
              r="102"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="160 160"
            />
            <circle
              cx="104"
              cy="104"
              r="94"
              stroke="#24201d"
              strokeWidth="0.5"
              strokeOpacity="0.2"
              fill="none"
            />
          </svg>

          {/* Inner Button Content */}
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#f4efe8] border border-[#24201d]/15 shadow-md flex flex-col items-center justify-center text-center p-4 group-hover:bg-[#24201d] group-hover:text-[#e5dfd7] transition-all duration-500">
            <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium leading-tight">
              View available apartments
            </span>
            <span className="mt-1.5 text-[9px] tracking-widest text-[#b3412f] group-hover:text-white/80 uppercase">
              25 Residences
            </span>
          </div>
        </button>

        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-[#7a7267] text-center max-w-md">
          A boutique gated community of 25 residences on Costa del Sol
        </p>
      </div>
    </section>
  );
}
