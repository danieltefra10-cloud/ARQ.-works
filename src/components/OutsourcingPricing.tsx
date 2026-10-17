import React from 'react';

interface OutsourcingPricingProps {
  onOpenConnect: (plan?: string) => void;
}

export const OutsourcingPricing: React.FC<OutsourcingPricingProps> = ({ onOpenConnect }) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#181817] text-white relative overflow-hidden">
      {/* Background Subtle Architectural Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header: Matching Uploaded Reference */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E59A35] tracking-tight">
            Budget-Friendly Rates
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto">
            We leverage the latest advancements to deliver high-quality architecture outsourcing services that fit your budget without compromising on excellence.
          </p>
        </div>

        {/* Elevated White Card: Starting From Only $10/hr + Free 3 Days Trial */}
        <div className="mt-12 sm:mt-14 max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 text-center shadow-2xl border border-neutral-100 text-neutral-900">
          
          {/* Subtitle */}
          <div className="text-base sm:text-lg font-bold text-neutral-700 tracking-tight">
            Starting From
          </div>

          {/* Pricing Highlight */}
          <div className="mt-2 flex items-baseline justify-center gap-2">
            <span className="text-2xl sm:text-3xl text-neutral-400 font-normal">
              Only
            </span>
            <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#1F2937] tracking-tight font-sans">
              $10/hr
            </span>
          </div>

          {/* Limited Time Offer Callout */}
          <div className="mt-1 text-xs sm:text-sm italic text-neutral-400 font-serif">
            Limited time offer
          </div>

          {/* Descriptive Body Copy Matching the Uploaded Archilance Architecture Reference */}
          <p className="mt-7 max-w-3xl mx-auto text-neutral-600 text-[13.5px] sm:text-[14.5px] leading-relaxed text-center font-normal">
            ARQ.works is also the architecture outsourcing service provider that offers subscription packages for $1895 per month, $473.75 per week and $10 per hour. This helps businesses and companies that require architectural services frequently to avail our services, such as 3D modeling and rendering, interior design, landscape design, architectural design, 3D animations, Revit drafting, construction, permit sets, and any other architectural service you can think of. With our highly affordable rates, you will not need to worry about outsourcing architectural services ever again!
          </p>

          {/* Trial Heading */}
          <div className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800">
            Request a free <span className="text-[#E59A35]">3 days trial</span>
          </div>

          {/* Get Started Today Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => onOpenConnect('Free 3 Days Trial ($10/hr rate)')}
              className="px-9 py-3.5 bg-[#E59A35] hover:bg-[#D58C2B] text-white font-bold text-sm sm:text-base rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Get Started Today!
            </button>
          </div>

          {/* Reassurance Badges */}
          <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> No Upfront Commitment
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> 24–48h Turnaround
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Full NDA Protection
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
