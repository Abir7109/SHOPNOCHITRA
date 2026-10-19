import EraLogo from './EraLogo';
import { MapPin, Navigation, Compass } from 'lucide-react';

interface LocationConceptProps {
  onOpenApartments: () => void;
}

export default function LocationConcept({ onOpenApartments }: LocationConceptProps) {
  const destinations = [
    { name: 'Playa del Cristo', distance: '3 min walk', tag: 'Beachfront' },
    { name: 'Estepona Marina & Old Town', distance: '5 min drive', tag: 'Culture & Dining' },
    { name: 'Finca Cortesin Golf Club', distance: '10 min drive', tag: 'Championship Golf' },
    { name: 'Puerto Banús & Superyachts', distance: '15 min drive', tag: 'Luxury Boutiques' },
    { name: 'Marbella Golden Mile', distance: '20 min drive', tag: 'Gastronomy' },
    { name: 'Málaga International Airport', distance: '45 min drive', tag: 'Global Flights' },
  ];

  return (
    <section id="location" className="relative py-24 sm:py-32 bg-[#e5dfd7] text-[#24201d] overflow-hidden">
      {/* Concept Statement Header */}
      <div className="container mx-auto px-6 sm:px-12 max-w-5xl text-center mb-16 sm:mb-24">
        <span className="text-xs uppercase tracking-[0.3em] text-[#7a7267] font-medium block mb-3">
          The Concept
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-tight text-[#24201d]">
          ERA Residences is a boutique gated community of only{' '}
          <span className="italic text-[#c24b38]">25 residences</span>, designed around privacy, wellbeing and timeless Mediterranean living.
        </h2>
        <div className="w-16 h-[1.5px] bg-[#c24b38] mx-auto my-8" />
        <p className="text-base sm:text-lg text-[#5c544d] font-light leading-relaxed max-w-3xl mx-auto">
          Inspired by the golden era of Costa del Sol, the project marries clean architectural geometry with warm limestone, landscaped gardens, and sunlit private terraces.
        </p>
      </div>

      {/* New Golden Mile Feature Grid */}
      <div className="container mx-auto px-6 sm:px-12 max-w-6xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Title & Story */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c24b38] font-medium">
              Estepona • New Golden Mile
            </span>
            <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-2 leading-none">
              Between <br />
              <span className="italic">Marbella</span> & <br />
              Estepona
            </h3>
            <p className="mt-6 text-sm sm:text-base text-[#5c544d] leading-relaxed">
              Surrounded by golden beaches, world-class championship golf courses, wellness spas, and established gastronomy, ERA balances deep seclusion with effortless connectivity.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onOpenApartments}
                className="px-6 py-3 rounded-full bg-[#24201d] text-[#e5dfd7] text-xs tracking-[0.2em] uppercase hover:bg-[#c24b38] transition-colors duration-300"
              >
                Explore Residences
              </button>
              <div className="flex items-center gap-2 text-xs tracking-widest text-[#7a7267] uppercase">
                <Compass size={16} />
                <span>South Facing</span>
              </div>
            </div>
          </div>

          {/* Right Terrace Visual with Mediterranean Light */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-[#24201d]/15 group">
              <img
                src="https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a15723f346e4b3a6c0af26a_era-residence-terrace.webp"
                alt="Sunlit modern terrace with cushioned sofas and ocean view"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white text-xs uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                Private Horizon Terraces
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coastal Route & Distances Map Banner */}
      <div className="container mx-auto px-6 sm:px-12 max-w-6xl">
        <div className="bg-[#24201d] text-[#e5dfd7] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c24b38]">Strategic Location</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-tight mt-1">
                The coast you wanted <span className="italic font-serif">yours</span> this year
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#a89f92] bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <MapPin size={16} className="text-[#c24b38]" />
              <span>Avenida Litoral, Estepona, Málaga</span>
            </div>
          </div>

          {/* Destination Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {destinations.map((dest) => (
              <div
                key={dest.name}
                className="p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 transition-all duration-300"
              >
                <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#c24b38] mb-1">
                  <span>{dest.tag}</span>
                  <Navigation size={12} />
                </div>
                <div className="font-serif text-xl text-white font-medium">{dest.name}</div>
                <div className="text-xs tracking-wider text-[#a89f92] mt-2 font-mono">
                  {dest.distance}
                </div>
              </div>
            ))}
          </div>

          {/* Master Plan Coastal Image Overview */}
          <div className="mt-10 relative rounded-2xl overflow-hidden border border-white/15 aspect-[21/9]">
            <img
              src="https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a15185e6803ae588479d12b_era-residence-master-plan.webp"
              alt="ERA Residence coastal master plan and proximity to the sea"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white text-xs uppercase tracking-[0.2em]">
              Coastline & Master Plan Perspective
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
