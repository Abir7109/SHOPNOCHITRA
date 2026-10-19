import EraLogo from './EraLogo';
import { ArrowUp, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenBookCall: () => void;
  onOpenApartments: () => void;
}

export default function Footer({ onOpenBookCall, onOpenApartments }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#151210] text-[#e5dfd7] pt-20 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 sm:px-12 max-w-6xl">
        {/* Top Scroll-To-Top Button */}
        <div className="flex justify-end mb-12">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#a89f92] hover:text-white transition-colors cursor-pointer"
          >
            <span>To top</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#151210] transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>

        {/* Contact Core & Address */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Logo & Direct Contact */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div className="flex items-center gap-4">
              <EraLogo size={44} className="text-[#e5dfd7]" />
              <div>
                <span className="font-serif text-2xl tracking-wider text-white uppercase block leading-none">
                  Era Residence
                </span>
                <span className="text-xs tracking-[0.25em] text-[#a89f92] uppercase mt-1 block">
                  New Golden Mile • Estepona
                </span>
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c24b38] block mb-2">
                Direct Sales Line
              </span>
              <a
                href="tel:+34655408648"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light hover:text-[#c24b38] transition-colors inline-flex items-center gap-3"
              >
                <Phone size={24} className="text-[#c24b38] hidden sm:inline" />
                <span>+34 (655) 408-648</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onOpenBookCall}
                className="px-6 py-2.5 rounded-full bg-[#c24b38] text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#151210] transition-all cursor-pointer"
              >
                Request Call
              </button>
              <button
                onClick={onOpenApartments}
                className="px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-[0.2em] text-white hover:border-white transition-all cursor-pointer"
              >
                Apartments
              </button>
            </div>
          </div>

          {/* Sales Office Location */}
          <div className="md:col-span-6 flex flex-col justify-end space-y-4">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c24b38] mb-2 font-medium">
                <MapPin size={16} />
                <span>Sales & Information Suite</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-white font-light mb-2">
                Avenida Litoral, 29680 Estepona, Málaga, Spain
              </p>
              <p className="text-xs text-[#a89f92] leading-relaxed">
                By prior appointment. On-site showroom and active construction site visits available weekly.
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Credits Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wider text-[#a89f92]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span>Era Residence. © 2026 All rights reserved.</span>
            <span>•</span>
            <span className="text-[#d4ccc0]">Boutique Gated Community of 25 Residences</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
