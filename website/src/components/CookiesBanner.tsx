import { useState, useEffect } from 'react';

export default function CookiesBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('era_cookies_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('era_cookies_consent', accepted ? 'accepted' : 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-md z-40 p-5 rounded-2xl bg-[#f7f5f0]/95 backdrop-blur-md text-[#24201d] border border-[#24201d]/15 shadow-2xl animate-fadeIn">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#24201d]">
          Privacy & Cookies
        </span>
        <span className="text-[10px] text-[#c24b38] uppercase tracking-wider">ERA Residence</span>
      </div>
      <p className="text-xs text-[#5c544d] leading-relaxed mb-4">
        This website uses cookies and analytics to ensure you receive the finest browsing experience and accurate presentation of our Mediterranean residences.
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleConsent(true)}
          className="flex-1 py-2 rounded-full bg-[#24201d] text-white text-[11px] uppercase tracking-[0.18em] hover:bg-[#c24b38] transition-colors cursor-pointer"
        >
          Accept
        </button>
        <button
          onClick={() => handleConsent(false)}
          className="px-4 py-2 rounded-full border border-[#24201d]/20 text-[#24201d] text-[11px] uppercase tracking-[0.18em] hover:bg-[#24201d]/5 transition-colors cursor-pointer"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
