import { useState, FormEvent } from 'react';
import { X, Check, Phone, Mail } from 'lucide-react';
import EraLogo from './EraLogo';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultApartment?: string;
}

export default function BookCallModal({ isOpen, onClose, defaultApartment }: BookCallModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: defaultApartment ? `Inquiring about ${defaultApartment}. Please share available units and detailed brochure.` : '',
    residenceType: 'any',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#e5dfd7] text-[#24201d] rounded-3xl shadow-2xl border border-[#24201d]/15 p-6 sm:p-10 z-10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[#24201d]/20 flex items-center justify-center text-[#24201d] hover:bg-[#24201d] hover:text-[#e5dfd7] transition-all cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <EraLogo size={24} className="text-[#c24b38]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#7a7267]">
                Era Residence • Private Inquiry
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#24201d] tracking-tight">
              Book a <span className="italic font-serif">call</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#5c544d] mt-2 mb-8 leading-relaxed">
              Leave your contact details and our sales team will connect with you within 24 hours.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#7a7267] mb-1.5 font-medium">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#24201d]/20 text-[#24201d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c24b38] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#7a7267] mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#24201d]/20 text-[#24201d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c24b38] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#7a7267] mb-1.5 font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+34 600 000 000"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#24201d]/20 text-[#24201d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c24b38] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#7a7267] mb-1.5 font-medium">
                  Residence Interest
                </label>
                <select
                  value={formData.residenceType}
                  onChange={(e) => setFormData({ ...formData, residenceType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#24201d]/20 text-[#24201d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c24b38] focus:bg-white"
                >
                  <option value="any">Any Typology / General Inquiry</option>
                  <option value="ground-basement">Ground Floor + Basement (3 Beds, 178–202 m²)</option>
                  <option value="ground-floor">Ground Floor (2 Beds, 97–104 m²)</option>
                  <option value="penthouse-duplex">Penthouse Duplex (2-3 Beds, 124–243 m²)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#7a7267] mb-1.5 font-medium">
                  Message / Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any questions about floor plans, payment schedule, or visiting the site..."
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#24201d]/20 text-[#24201d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c24b38] focus:bg-white"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-[11px] text-[#7a7267]">
                  By submitting, you agree to our privacy policy. Your information will remain confidential.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#24201d] text-[#e5dfd7] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#c24b38] transition-all cursor-pointer whitespace-nowrap shadow-md"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check size={32} />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c24b38] font-medium block mb-2">
                Inquiry Received
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#24201d]">
                Thank you, {formData.name}
              </h2>
            </div>

            <p className="text-sm text-[#5c544d] max-w-md mx-auto leading-relaxed">
              Our sales manager will review your inquiry and connect personally at{' '}
              <strong className="text-[#24201d]">{formData.phone || formData.email}</strong> within 24 hours.
            </p>

            <div className="p-4 rounded-xl bg-white/60 border border-[#24201d]/10 max-w-sm mx-auto flex items-center justify-center gap-6 text-xs text-[#24201d]">
              <a href="tel:+34655408648" className="flex items-center gap-1.5 hover:text-[#c24b38]">
                <Phone size={14} className="text-[#c24b38]" />
                <span>+34 (655) 408-648</span>
              </a>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-[#c24b38]" />
                <span>Estepona Sales Office</span>
              </span>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-[#24201d] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#c24b38] transition-colors cursor-pointer"
            >
              Back to Era Residence
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
