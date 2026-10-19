export default function ArchitecturalQuote() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#e5dfd7] text-[#24201d] overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Quote Text & Credentials */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Quote SVG Icon */}
            <div className="text-[#c24b38] w-12 h-12 mb-6">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full fill-current">
                <path d="M23.232 30.912C23.232 34.752 20.544 38.208 16.32 38.208C11.328 38.208 5.76 33.984 5.76 22.272C5.76 14.016 9.408 6.14399 19.392 6.14399C19.968 6.14399 23.616 6.336 23.616 7.488C23.616 7.87199 23.424 8.63999 22.656 8.63999C21.888 8.63999 20.928 8.256 19.008 8.256C11.904 8.256 8.64 14.4 8.64 20.928C8.64 23.808 9.984 25.536 12.096 25.536C14.016 25.536 14.592 23.808 17.472 23.808C20.736 23.808 23.232 26.88 23.232 30.912ZM43.2 30.912C43.2 34.752 40.512 38.208 36.096 38.208C31.296 38.208 25.536 33.984 25.536 22.272C25.536 14.016 29.376 6.14399 39.36 6.14399C39.936 6.14399 43.584 6.336 43.584 7.488C43.584 7.87199 43.392 8.63999 42.624 8.63999C41.664 8.63999 40.704 8.256 38.976 8.256C31.68 8.256 28.608 14.4 28.608 20.928C28.608 23.808 29.952 25.536 32.064 25.536C33.984 25.536 34.56 23.808 37.248 23.808C40.704 23.808 43.2 26.88 43.2 30.912Z" />
              </svg>
            </div>

            {/* Red Accent Line */}
            <div className="w-16 h-[2px] bg-[#c24b38] mb-8" />

            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-snug tracking-tight text-[#24201d]">
              “Instead of corridors, walking paths connect the apartments — making Era Residence feel closer to a group of private homes than a standard residential complex.”
            </blockquote>

            <div className="mt-8 pt-6 border-t border-[#24201d]/15 flex items-center justify-between">
              <div>
                <div className="text-sm tracking-[0.2em] uppercase font-medium text-[#24201d]">
                  Architecture Team
                </div>
                <div className="text-xs tracking-[0.15em] uppercase text-[#7a7267] mt-0.5">
                  ERA Residence • Estepona
                </div>
              </div>
              <span className="text-xs font-serif italic text-[#c24b38] text-lg">25 Residences</span>
            </div>
          </div>

          {/* Architectural Render Frame */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#24201d]/15 group">
              <img
                src="https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a0f8c07861fe831459ff0d9_img_cam_05_alpha.webp"
                alt="Modern building with flowering vines beside a rectangular swimming pool and palm trees"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24201d]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-xs tracking-[0.2em] uppercase text-white bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                Saltwater Pool & Promenade
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
