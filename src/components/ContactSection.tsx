import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Architecture',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="w-full border-t border-[#E7E7E1] bg-[#EFEFEA]">
      <div className="w-full">
        
        {/* Main Textured Architectural Container */}
        <div className="w-full bg-[#EFEFEA] border-y border-[#DDDCD5] px-6 sm:px-10 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20">
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Heading & Contact Meta */}
            <div className="lg:col-span-5 flex flex-col justify-between self-stretch">
              <div>
                <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] text-neutral-500 uppercase">
                  <span>LET&apos;S CREATE SOMETHING MEANINGFUL</span>
                  <span className="w-8 h-[1px] bg-neutral-400"></span>
                </div>

                <h2 className="mt-4 font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.1] text-neutral-900 text-balance">
                  We&apos;d love to hear
                  <br />
                  about your project.
                </h2>
              </div>

              {/* Contact Information & WhatsApp Quick CTA */}
              <div className="mt-10 lg:mt-14 space-y-6 text-xs text-neutral-700">
                {/* Dedicated Quick Chat CTA (WhatsApp) */}
                <a
                  href={STUDIO_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white transition-all duration-200 group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-emerald-500/30 transition-all">
                      <WhatsAppIcon className="w-5 h-5 fill-emerald-400 group-hover:fill-emerald-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="block text-[11px] font-semibold tracking-wider font-mono text-emerald-400 uppercase">
                          Quick Chat
                        </span>
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-300/90 bg-emerald-950/80 border border-emerald-700/50 px-1.5 py-0.2 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Online
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-white font-mono tracking-tight block mt-0.5">
                        {STUDIO_INFO.phone}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-wider text-neutral-300 group-hover:text-emerald-400 transition-colors">
                      Chat Now
                    </span>
                    <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>

                {/* Studio Location */}
                <div className="flex items-start gap-3.5 pt-2">
                  <MapPin size={16} strokeWidth={1.5} className="text-neutral-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-neutral-900 font-mono uppercase text-[11px] tracking-wider">
                      Addis Ababa Studio
                    </span>
                    <span className="text-neutral-600 leading-relaxed block mt-0.5">
                      {STUDIO_INFO.address}
                    </span>
                  </div>
                </div>

                {/* Direct Phones & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <Phone size={16} strokeWidth={1.5} className="text-neutral-900 shrink-0 mt-0.5" />
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="flex items-center gap-2.5">
                      <a
                        href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`}
                        className="font-medium text-neutral-900 hover:text-black flex items-center gap-1.5 group"
                        title="Call +251 987242258"
                      >
                        <span>{STUDIO_INFO.phone}</span>
                        <span className="text-[9px] bg-neutral-200 text-neutral-700 px-1.5 py-0.2 rounded-xs font-sans uppercase">Primary</span>
                      </a>
                      <a
                        href={STUDIO_INFO.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 text-[10px] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60 px-1.5 py-0.5 rounded-xs"
                        title="Chat on WhatsApp"
                      >
                        <WhatsAppIcon className="w-3 h-3 fill-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <a
                        href={`tel:${STUDIO_INFO.phoneSecondary.replace(/\s+/g, '')}`}
                        className="text-neutral-700 hover:text-black flex items-center gap-1.5 group"
                        title="Call +251 921310351"
                      >
                        <span>{STUDIO_INFO.phoneSecondary}</span>
                        <span className="text-[9px] bg-neutral-200 text-neutral-700 px-1.5 py-0.2 rounded-xs font-sans uppercase">Direct</span>
                      </a>
                      <a
                        href={STUDIO_INFO.whatsappLinkSecondary}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 text-[10px] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60 px-1.5 py-0.5 rounded-xs"
                        title="Chat on WhatsApp"
                      >
                        <WhatsAppIcon className="w-3 h-3 fill-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5">
                  <Mail size={16} strokeWidth={1.5} className="text-neutral-900 shrink-0" />
                  <div className="space-y-0.5">
                    <a
                      href={`mailto:${STUDIO_INFO.email}`}
                      className="text-neutral-900 hover:underline font-medium block font-mono text-[11px]"
                    >
                      {STUDIO_INFO.email}
                    </a>
                    <a
                      href={`mailto:${STUDIO_INFO.inquiriesEmail}`}
                      className="text-neutral-500 hover:underline block text-[10px] font-mono"
                    >
                      {STUDIO_INFO.inquiriesEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Center/Right Form matching Image 1 */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-white/80 p-8 border border-neutral-300 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="font-editorial text-2xl text-neutral-900">
                    Message Received
                  </h3>
                  <p className="mt-2 text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to ARQ.works. Our principal architectural team will review your project parameters and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', projectType: 'Architecture', message: '' });
                    }}
                    className="mt-6 text-[10px] tracking-widest uppercase text-neutral-900 font-semibold border-b border-neutral-900 pb-0.5 cursor-pointer"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-[10px] font-semibold tracking-[0.2em] text-neutral-600 uppercase mb-1">
                        NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-transparent border-b border-neutral-400 focus:border-neutral-950 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-[10px] font-semibold tracking-[0.2em] text-neutral-600 uppercase mb-1">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-transparent border-b border-neutral-400 focus:border-neutral-950 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type selection */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] text-neutral-600 uppercase mb-2">
                      PROJECT DISCIPLINE
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Architecture', 'Interiors', '3D Visualization', 'Commercial / BIM'].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormState({ ...formState, projectType: type })}
                          className={`py-2 px-2 text-[10px] tracking-wider uppercase border text-center transition-all cursor-pointer whitespace-nowrap ${
                            formState.projectType === type
                              ? 'bg-neutral-900 text-white border-neutral-900 font-semibold'
                              : 'bg-white/40 text-neutral-700 border-neutral-300 hover:border-neutral-500'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-[10px] font-semibold tracking-[0.2em] text-neutral-600 uppercase mb-1">
                      TELL US ABOUT YOUR PROJECT
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Location, estimated area, timeline, or visualization scope..."
                      className="w-full bg-transparent border-b border-neutral-400 focus:border-neutral-950 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button matching Image 1 */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-3.5 transition-colors cursor-pointer disabled:opacity-50 shadow-xs rounded-full"
                    >
                      {isSubmitting ? 'PROCESSING...' : 'SEND MESSAGE'}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
