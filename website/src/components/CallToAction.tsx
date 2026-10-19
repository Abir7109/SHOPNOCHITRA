interface CallToActionProps {
  onOpenApartments: () => void;
  onOpenBookCall: () => void;
}

export default function CallToAction({ onOpenApartments, onOpenBookCall }: CallToActionProps) {
  return (
    <section className="relative py-28 sm:py-40 bg-[#1f1b18] text-[#e5dfd7] overflow-hidden">
      {/* Background panoramic terrace with sea views */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a0f88f3b81e88aabf6874e7_img_cta_1920.webp"
          alt="Panoramic sea views from rooftop terrace"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b18] via-[#1f1b18]/60 to-[#1f1b18]" />
      </div>

      <div className="container mx-auto px-6 sm:px-12 max-w-5xl relative z-10 text-center">
        <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#a89f92] font-light max-w-2xl mx-auto mb-10">
          A short conversation is enough to understand which apartment fits your use case — whether it is a family second home, a longer stay, or a place to return to year after year.
        </p>

        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white mb-4">
          Perfect <br />
          <span className="italic font-light">sea views</span>
        </h2>

        <p className="text-sm sm:text-base tracking-[0.3em] uppercase text-[#c24b38] font-medium mb-12">
          From rooftop terraces & sunlit solariums
        </p>

        {/* Circular Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={onOpenApartments}
            className="group relative px-8 py-4 rounded-full bg-white text-[#1f1b18] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#c24b38] hover:text-white transition-all duration-300 shadow-2xl cursor-pointer"
          >
            <span>View Available Apartments</span>
          </button>

          <button
            onClick={onOpenBookCall}
            className="px-8 py-4 rounded-full border border-white/30 text-white text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer"
          >
            Schedule a Private Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
