import React, { useState } from 'react';
import { ArrowRight, Check, X, Layers } from 'lucide-react';
import { SERVICES } from '../data/studioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onServiceSelect?: (service: ServiceItem) => void;
  onOpenConnect: (planOrService?: string) => void;
}

import { ServiceIcon } from './icons/ServiceIcons';

export const Services: React.FC<ServicesProps> = ({ onOpenConnect, onServiceSelect }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleCardClick = (service: ServiceItem) => {
    if (onServiceSelect) {
      onServiceSelect(service);
    } else {
      setActiveModalService(service);
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 border-t border-[#E7E7E1] bg-[#FBFBFA]">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Section Kicker */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-[#E7E7E1] gap-6">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] text-neutral-400 uppercase">
              <span>OUR EXPERTISE</span>
              <span className="w-8 h-[1px] bg-neutral-300"></span>
            </div>
            <h2 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-800 font-sans">
              Services
            </h2>
          </div>
        </div>

        {/* 6 Services Grid with 3D Flip Card Interaction matching uploaded reference */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pb-10 items-stretch">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative h-[320px] sm:h-[340px] w-full [perspective:1200px] group cursor-pointer"
              onClick={() => handleCardClick(service)}
            >
              {/* 3D Rotator Card Element */}
              <div className="relative w-full h-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* --- FRONT SIDE (Clean Minimalist State) --- */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white border-[3.5px] border-[#E8E8E2] p-8 pb-12 flex flex-col justify-center items-center text-center shadow-2xs group-hover:shadow-md transition-shadow">
                  {/* Icon: Neutral Charcoal */}
                  <div className="my-2 p-3 text-neutral-800">
                    <ServiceIcon icon={service.icon} className="w-16 h-16 sm:w-20 sm:h-20" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 font-sans text-balance leading-snug">
                    {service.title}
                  </h3>

                  {/* Neutral Accent Dash */}
                  <div className="w-8 h-1 bg-[#D4D3CB] rounded-full mx-auto mt-4" />

                  {/* Protruding Bottom Button (Clickable: Leads to Service Page) */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(service);
                      }}
                      aria-label={`Explore ${service.title}`}
                      className="w-10 h-10 sm:w-11 sm:h-11 bg-neutral-100 hover:bg-[#DF9531] text-neutral-500 hover:text-white border border-neutral-200 hover:border-[#DF9531] shadow-2xs hover:shadow-md flex items-center justify-center transition-all cursor-pointer group-hover:bg-[#DF9531] group-hover:text-white group-hover:border-[#DF9531]"
                    >
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </div>

                {/* --- BACK SIDE (Flipped State: Golden Color Change + Small Description) --- */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white border-[3.5px] border-[#DF9531] p-6 sm:p-8 pb-12 flex flex-col justify-center items-center text-center shadow-xl">
                  {/* Icon: Vibrant Golden Amber */}
                  <div className="my-1 p-2 text-[#DF9531]">
                    <ServiceIcon icon={service.icon} className="w-14 h-14 sm:w-16 sm:h-16" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 text-lg sm:text-xl font-bold tracking-tight text-neutral-900 font-sans text-balance leading-snug">
                    {service.title}
                  </h3>

                  {/* Golden Amber Dash */}
                  <div className="w-8 h-1 bg-[#DF9531] rounded-full mx-auto mt-3" />

                  {/* Small Description of each service (Matching the uploaded reference!) */}
                  <p className="mt-4 text-[12.5px] sm:text-[13.5px] leading-relaxed text-neutral-600 max-w-xs font-normal text-balance">
                    {service.description}
                  </p>

                  {/* Protruding Bottom Button (Golden Amber with White Arrow: Leads to Service Page) */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(service);
                      }}
                      aria-label={`Open ${service.title} Page`}
                      className="w-10 h-10 sm:w-11 sm:h-11 bg-[#DF9531] hover:bg-[#D08726] text-white border border-[#DF9531] shadow-md hover:scale-110 flex items-center justify-center transition-all cursor-pointer"
                    >
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal when a service card is clicked */}
        {activeModalService && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveModalService(null)}
          >
            <div
              className="bg-[#FBFBFA] max-w-2xl w-full p-8 sm:p-10 shadow-2xl border-2 border-[#DF9531] relative animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <span className="text-xs font-mono tracking-widest text-[#DF9531] font-semibold uppercase">
                  SERVICE NO. {activeModalService.number}
                </span>
                <button
                  onClick={() => setActiveModalService(null)}
                  className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Title & Icon Header */}
              <div className="mt-6 flex items-start gap-5">
                <div className="p-3 bg-white border border-[#DF9531]/30 shrink-0 text-[#DF9531]">
                  <ServiceIcon icon={activeModalService.icon} className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-sans">
                    {activeModalService.title}
                  </h3>
                  <div className="w-10 h-1 bg-[#DF9531] rounded-full mt-2" />
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-neutral-700">
                {activeModalService.description}
              </p>

              {/* Full Scope Items */}
              <div className="mt-6 p-5 bg-white border border-neutral-200">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-3">
                  COMPLETE SCOPE & DELIVERABLES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-800">
                      <Check size={14} className="text-[#DF9531] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200">
                <span className="text-xs font-mono text-neutral-500">
                  Ready to accelerate your project?
                </span>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const srv = activeModalService.title;
                      setActiveModalService(null);
                      onOpenConnect(srv);
                    }}
                    className="flex-1 sm:flex-initial py-3 px-6 bg-[#DF9531] hover:bg-[#D08726] text-white text-xs font-mono uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Request Service Quote</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
