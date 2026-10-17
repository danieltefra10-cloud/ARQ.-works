import React, { useState } from 'react';
import { X, CheckCircle2, Send, Mail, MapPin, Phone, Globe } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface ConnectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const ConnectDrawer: React.FC<ConnectDrawerProps> = ({ isOpen, onClose, initialPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    location: '',
    service: initialPlan || 'Architecture',
    budget: '$50k - $150k',
    details: initialPlan ? `Inquiring about ${initialPlan} outsourcing partnership.` : '',
  });

  // Sync if initialPlan changes
  React.useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({
        ...prev,
        service: initialPlan.includes('Pilot') ? 'Risk-Free Pilot' : (initialPlan.includes('Hourly') ? 'Hourly Support' : (initialPlan.includes('Weekly') ? 'Weekly Sprint' : (initialPlan.includes('Partner') ? 'Dedicated Partner' : prev.service))),
        details: `Interested in: ${initialPlan}`,
      }));
    }
  }, [initialPlan]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="bg-[#FBFBFA] w-full max-w-xl h-full shadow-2xl border-l border-neutral-300 flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-8 py-6 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              STUDIO INQUIRY
            </span>
            <h2 className="mt-1 font-editorial text-2xl text-neutral-900">
              Let&apos;s Connect
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-950 transition-colors cursor-pointer"
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-8 flex-1">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-editorial text-2xl text-neutral-900">
                Inquiry Initiated
              </h3>
              <p className="mt-3 text-xs text-neutral-600 leading-relaxed max-w-sm mx-auto">
                Thank you for considering ARQ.works for your architectural commission or 3D visualization project. Our directors will get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-8 bg-neutral-900 text-white text-xs tracking-wider uppercase px-6 py-3 font-medium"
              >
                RETURN TO SITE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-xs text-neutral-600 leading-relaxed">
                Whether you are planning a private residence, luxury development, or require world-class 3D architectural visualization, we welcome your inquiry.
              </p>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold tracking-wider text-neutral-500 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Marcus Reed"
                    className="w-full bg-white border border-neutral-300 px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold tracking-wider text-neutral-500 uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@studio.com"
                    className="w-full bg-white border border-neutral-300 px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>
              </div>

              {/* Company & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold tracking-wider text-neutral-500 uppercase mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Optional"
                    className="w-full bg-white border border-neutral-300 px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold tracking-wider text-neutral-500 uppercase mb-1">
                    Project Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="City, Country"
                    className="w-full bg-white border border-neutral-300 px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>
              </div>

              {/* Primary Service */}
              <div>
                <label className="block text-[10px] font-semibold tracking-wider text-neutral-500 uppercase mb-1">
                  Primary Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Risk-Free Pilot',
                    'Dedicated Partner',
                    'Weekly Sprint',
                    'Hourly Support',
                    '3D Visualization',
                    'Revit & CAD Drafting',
                  ].map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setFormData({ ...formData, service: srv })}
                      className={`px-2 py-2 text-[10px] uppercase tracking-wider border text-center transition-colors cursor-pointer ${
                        formData.service === srv
                          ? 'bg-neutral-900 text-white border-neutral-900 font-medium'
                          : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-semibold tracking-wider text-neutral-500 uppercase mb-1">
                  Project Brief & Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us about the site, schedule, scope, and objectives..."
                  className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs tracking-widest uppercase py-3.5 font-medium transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Send size={14} />
                <span>{loading ? 'SUBMITTING...' : 'SUBMIT PROJECT INQUIRY'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Footer info & WhatsApp direct access */}
        <div className="p-6 sm:p-8 bg-[#F5F5F0] border-t border-neutral-200 text-xs text-neutral-600 space-y-3">
          {/* WhatsApp Direct Connect */}
          <a
            href={STUDIO_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-white border border-emerald-200 hover:border-emerald-400 text-neutral-900 transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              </span>
              <div>
                <span className="text-[10px] font-mono font-semibold tracking-wider uppercase block text-emerald-950">
                  Prefer WhatsApp?
                </span>
                <span className="text-[11px] font-mono text-neutral-700">
                  {STUDIO_INFO.phone}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono font-medium text-emerald-700 group-hover:underline uppercase">
              Chat Now →
            </span>
          </a>

          {/* Pipe Separated Metadata */}
          <div className="pt-2 border-t border-neutral-200/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-neutral-700">
            <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-black font-medium">
              {STUDIO_INFO.email}
            </a>
            <span className="text-neutral-400 select-none">|</span>
            <a href={STUDIO_INFO.websiteUrl} className="hover:text-black">
              {STUDIO_INFO.website}
            </a>
            <span className="text-neutral-400 select-none">|</span>
            <span>{STUDIO_INFO.city}</span>
          </div>

          <div className="text-[10px] text-neutral-500 font-mono">
            {STUDIO_INFO.address}
          </div>
        </div>
      </div>
    </div>
  );
};
