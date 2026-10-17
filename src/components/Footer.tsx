import React, { useState } from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { STUDIO_INFO } from '../data/studioData';
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenJournal?: () => void;
  onOpenConnect?: (plan?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenJournal }) => {
  return (
    <footer className="relative bg-[#0E0E0D] text-neutral-300 overflow-hidden border-t border-neutral-900">
      {/* Background 3D Architectural Render: Prominently displayed with atmospheric contrast */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/src/assets/images/project_botanical_courtyard_1792050210549.jpg"
          alt="Architectural Render Backdrop"
          className="w-full h-full object-cover object-center filter saturate-[0.9] brightness-[0.7] transform scale-105"
        />
        {/* Semi-transparent Dark Architectural Scrim for pristine text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0A]/85 via-[#0B0B0A]/75 to-[#050505]/92 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-[96rem] mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-14 pb-14">
        
        {/* Top Navigation Links Bar: Clean navigation without customer portal / privacy policy */}
        <div className="pb-8 border-b border-white/20">
          <nav className="flex flex-wrap items-center justify-start sm:justify-center md:justify-start gap-x-8 sm:gap-x-12 gap-y-3 text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-white/95">
            <a
              href="#about"
              className="hover:text-[#DF9531] transition-colors cursor-pointer select-none"
            >
              ABOUT
            </a>
            <a
              href="#services"
              className="hover:text-[#DF9531] transition-colors cursor-pointer select-none"
            >
              SERVICES
            </a>
            <a
              href="#projects"
              className="hover:text-[#DF9531] transition-colors cursor-pointer select-none"
            >
              PROJECTS
            </a>
            <button
              type="button"
              onClick={() => onOpenJournal && onOpenJournal()}
              className="hover:text-[#DF9531] transition-colors cursor-pointer select-none uppercase font-bold"
            >
              BLOG
            </button>
            <a
              href="#contact"
              className="hover:text-[#DF9531] transition-colors cursor-pointer select-none"
            >
              CONTACT
            </a>
          </nav>
        </div>

        {/* Lower Main Footer: Studio Contact & Address matching the upper Contact section */}
        <div className="pt-10 sm:pt-12 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Column 1: Studio Location / Address (Synced with Upper Contact Section) */}
          <div className="md:col-span-4 lg:col-span-4 space-y-2.5">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans flex items-center gap-2">
              <MapPin size={16} className="text-[#DF9531] shrink-0" />
              <span>Addis Ababa Studio</span>
            </h3>
            <div className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-normal space-y-1">
              <p className="font-medium text-white">{STUDIO_INFO.address}</p>
              <p className="text-neutral-400">HQ & Global Architectural Production</p>
              <p className="font-mono text-neutral-300 pt-1 text-[11px]">
                Mon – Fri: 09:00 – 18:00 (EAT / UTC+3)
              </p>
            </div>
          </div>

          {/* Column 2: Direct Contact & Lines (Synced with Upper Contact Section) */}
          <div className="md:col-span-4 lg:col-span-4 space-y-2.5">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans flex items-center gap-2">
              <Phone size={16} className="text-[#DF9531] shrink-0" />
              <span>Contact & Direct Lines</span>
            </h3>
            <div className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-normal space-y-1.5">
              <p className="font-mono text-white flex items-center gap-2">
                <a
                  href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#DF9531] transition-colors"
                >
                  {STUDIO_INFO.phone}
                </a>
                <span className="text-[9px] bg-white/10 text-neutral-300 px-1.5 py-0.5 rounded uppercase font-sans">
                  Primary
                </span>
              </p>
              <p className="font-mono text-neutral-300 flex items-center gap-2">
                <a
                  href={`tel:${STUDIO_INFO.phoneSecondary.replace(/\s+/g, '')}`}
                  className="hover:text-[#DF9531] transition-colors"
                >
                  {STUDIO_INFO.phoneSecondary}
                </a>
                <span className="text-[9px] bg-white/10 text-neutral-300 px-1.5 py-0.5 rounded uppercase font-sans">
                  Direct
                </span>
              </p>
              <p className="pt-0.5 flex items-center gap-2 text-neutral-300">
                <Mail size={13} className="text-[#DF9531] shrink-0" />
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="hover:text-[#DF9531] transition-colors font-mono"
                >
                  {STUDIO_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: ARQ.works Clean Brand Logo (Removed redundant subtitles and secondary seal) */}
          <div className="md:col-span-4 lg:col-span-4 flex items-center justify-start md:justify-end">
            <a
              href="#home"
              className="group flex flex-col items-start md:items-end focus-visible:outline-none"
              aria-label="ARQ.works Home"
            >
              <span className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-[0.24em] font-editorial leading-none text-white group-hover:text-[#DF9531] transition-colors">
                ARQ.works
              </span>
            </a>
          </div>

        </div>

        {/* Sub-footer note with studio copyright & ISO certification */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-400">
          <div>
            © {new Date().getFullYear()} ARQ.works Architectural Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-neutral-300">
            <span>ISO 9001:2015 Quality Verified</span>
            <span>·</span>
            <span>Worldwide Architectural Commissions</span>
          </div>
        </div>

      </div>

      {/* Floating Bottom-Left "Chat with us 👋" pill */}
      <aside aria-label="Support chat" className="fixed bottom-5 left-5 z-40">
        <a
          href={STUDIO_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 bg-white hover:bg-neutral-50 text-neutral-900 rounded-full shadow-2xl border border-neutral-200/80 transition-all duration-200 hover:scale-105 active:scale-95 group cursor-pointer"
        >
          <div className="w-5 h-5 flex items-center justify-center text-neutral-700 group-hover:text-emerald-600 transition-colors">
            <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
          </div>
          <span className="text-xs font-semibold tracking-tight text-neutral-800">
            Chat with us 👋
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </a>
      </aside>
    </footer>
  );
};
