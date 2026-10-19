interface ArchitectureSectionProps {
  onOpenBookCall: () => void;
}

export default function ArchitectureSection({ onOpenBookCall }: ArchitectureSectionProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#24201d] text-[#e5dfd7] overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c24b38] font-medium block mb-2">
            Design Philosophy
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl font-light tracking-tight text-white">
            Architecture
          </h2>
          <div className="w-16 h-[1.5px] bg-[#c24b38] mx-auto my-6" />
        </div>

        {/* Large Architectural Render */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group mb-16">
          <img
            src="https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a0f8994091fd12c24e79c8a_img_cam_02.webp"
            alt="Modern terrace apartments with green plants, flowering vines, and outdoor seating on a sunny day"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 text-white text-xs uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            Schiemann Weyers Architects • OCWA Architects
          </div>
        </div>

        {/* Architectural Statement & Team Credits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-white/10 pt-12">
          <div className="lg:col-span-8">
            <h3 className="font-serif text-2xl sm:text-4xl text-white font-light leading-snug">
              “The architecture of ERA Residences balances clean contemporary lines with Mediterranean warmth, natural textures, and open-air botanical circulation.”
            </h3>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs tracking-wider uppercase text-[#a89f92]">
              <div>
                <span className="text-white block font-medium">Schiemann Weyers</span>
                <span>Lead Architectural Conception</span>
              </div>
              <div className="h-6 w-[1px] bg-white/20 hidden sm:block" />
              <div>
                <span className="text-white block font-medium">OCWA Architects</span>
                <span>Executive Architectural Direction</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={onOpenBookCall}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#c24b38] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-[#24201d] transition-all duration-300 shadow-xl cursor-pointer"
            >
              Book an Architectural Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
