import React from 'react';
import { STUDIO_INFO } from '../data/studioData';

export const Philosophy: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-b border-[#E7E7E1] bg-[#F7F7F4]/50">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] text-neutral-400 uppercase">
              <span>{STUDIO_INFO.philosophyKicker}</span>
              <span className="w-8 h-[1px] bg-neutral-300"></span>
            </div>
            <h2 className="mt-4 font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.14] text-neutral-900 text-balance">
              About Us
            </h2>
            <p className="mt-3 text-xs tracking-wider uppercase text-neutral-500 font-mono">
              Purposeful design · Timeless impact
            </p>
          </div>

          {/* Right Column: Official Studio Bio (Expanded for pristine editorial layout) */}
          <div className="lg:col-span-8 space-y-5 text-[14px] sm:text-[15px] leading-relaxed text-neutral-600 font-normal">
            <p>
              <strong className="font-semibold text-neutral-900">ARQ.works</strong> is an Ethiopia-based architectural design and visualization studio serving clients worldwide. We provide comprehensive architectural services to individuals, businesses, property developers, contractors, and architectural firms seeking a reliable and creative design partner.
            </p>
            <p>
              Our expertise spans architectural design, interior and exterior design, 3D modeling, BIM modeling, architectural drafting, photorealistic visualization, and technical documentation. We work across diverse project types and scales, from small residential spaces and private villas to commercial buildings, hospitality projects, and large-scale developments.
            </p>
            <p>
              Beyond working directly with clients, ARQ.works collaborates with architectural studios, design consultancies, and construction professionals worldwide as an outsourced design partner. We provide flexible, project-based support that helps firms manage workloads, meet deadlines, expand their technical capabilities, and deliver projects efficiently without the need to increase their in-house teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

