import { useState, useEffect } from 'react';
import { REASONS_DATA } from '../data/residenceData';
import EraLogo from './EraLogo';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReasonsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % REASONS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + REASONS_DATA.length) % REASONS_DATA.length);
  };

  // Auto slide optionally or on user interaction
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentReason = REASONS_DATA[currentIndex];

  return (
    <section id="reasons" className="relative py-24 sm:py-32 bg-[#24201d] text-[#e5dfd7] overflow-hidden">
      {/* Intro Brand Badge */}
      <div className="container mx-auto px-6 sm:px-12 text-center mb-16 sm:mb-24">
        <div className="flex items-center justify-center gap-4 text-xs tracking-[0.3em] uppercase text-[#a89f92] mb-6">
          <span>Costa</span>
          <EraLogo size={28} className="text-[#e5dfd7]" />
          <span>del Sol</span>
        </div>

        <div className="w-[1px] h-12 bg-[#a89f92]/30 mx-auto my-6" />

        <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#a89f92] font-light max-w-md mx-auto">
          A place to live — to return year after year
        </p>

        {/* Curved Circular Text Badge */}
        <div className="relative w-72 h-36 mx-auto mt-10 flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 500 250" className="w-full h-full text-[#e5dfd7]">
            <path
              id="curvePath"
              d="M 50, 220 A 200,200 0 0,1 450, 220"
              fill="none"
              stroke="transparent"
            />
            <text className="font-serif text-3xl sm:text-4xl tracking-widest fill-current">
              <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
                Three reasons to choose Era
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Main Slide Content Showcase */}
      <div className="container mx-auto px-6 sm:px-12 max-w-6xl">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c24b38] font-medium">
            0{currentIndex + 1} / 0{REASONS_DATA.length}
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight mt-2 transition-all duration-500">
            {currentReason.title}
          </h2>
        </div>

        {/* Featured Image Frame */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
          <img
            key={currentReason.image}
            src={currentReason.image}
            alt={currentReason.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Left Badge */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
            <span className="text-xs uppercase tracking-[0.2em] text-white/90 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15">
              {currentReason.caption}
            </span>
          </div>
        </div>

        {/* Slide Description & Meta */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-xl font-light leading-relaxed text-[#d4ccc0] font-sans">
            "{currentReason.description}"
          </p>
          <div className="mt-4 text-xs tracking-[0.25em] uppercase text-[#a89f92]">
            {currentReason.caption}
          </div>
        </div>

        {/* Custom Pagination & Navigation Controls */}
        <div className="mt-12 flex items-center justify-center gap-6 sm:gap-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#24201d] transition-all duration-300 cursor-pointer"
            aria-label="Previous reason"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Progress Indicators */}
          <div className="flex items-center gap-3">
            {REASONS_DATA.map((reason, idx) => (
              <button
                key={reason.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-12 h-1.5 bg-[#c24b38] rounded-full'
                    : 'w-2 h-1.5 bg-white/30 rounded-full hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#24201d] transition-all duration-300 cursor-pointer"
            aria-label="Next reason"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
