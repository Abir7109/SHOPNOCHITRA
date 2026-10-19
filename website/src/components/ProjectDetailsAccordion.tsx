import { useState } from 'react';
import { ACCORDION_DATA } from '../data/residenceData';
import { Plus, Minus, CheckCircle } from 'lucide-react';

export default function ProjectDetailsAccordion() {
  const [openId, setOpenId] = useState<string | null>('license');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#e5dfd7] text-[#24201d] overflow-hidden border-t border-[#24201d]/10">
      <div className="container mx-auto px-6 sm:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c24b38] font-medium block mb-2">
            Governance & Assurance
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight">
            Project Key Facts
          </h2>
          <p className="mt-3 text-xs sm:text-sm tracking-[0.2em] uppercase text-[#7a7267]">
            Full legal transparency & verified progress
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {ACCORDION_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#24201d]/15 bg-[#f4efe8] overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left cursor-pointer hover:bg-[#24201d]/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-2xl sm:text-3xl text-[#24201d] font-normal">
                      {item.title}
                    </span>
                    {item.partnerName && (
                      <span className="text-xs tracking-wider uppercase text-[#7a7267] hidden sm:inline-block">
                        — {item.partnerName}
                      </span>
                    )}
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#24201d]/20 flex items-center justify-center text-[#24201d] transition-transform duration-300 ${
                      isOpen ? 'bg-[#24201d] text-[#e5dfd7] rotate-180' : ''
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 border-t border-[#24201d]/10 text-[#5c544d] text-sm sm:text-base font-light leading-relaxed">
                    {item.partnerName && (
                      <div className="sm:hidden mb-2 text-xs font-semibold uppercase tracking-wider text-[#24201d]">
                        {item.partnerName}
                      </div>
                    )}
                    <p>{item.content}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-[#c24b38] uppercase tracking-wider font-medium">
                      <CheckCircle size={14} />
                      <span>Verified Documentation Available upon Request</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
