import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/studioData';
import { ProcessStep } from '../types';

export const Process: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F0]/60 border-t border-b border-[#E7E7E1]">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading matching Image 1 */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] text-neutral-400 uppercase">
              <span>OUR PROCESS</span>
              <span className="w-8 h-[1px] bg-neutral-300"></span>
            </div>

            <h2 className="mt-4 font-editorial text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.12] text-neutral-900 text-balance">
              A thoughtful journey
              <br />
              from vision to reality.
            </h2>
          </div>

          {/* Right Column: 5 Numbered Milestones along hairline bar */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Connecting hairline timeline (desktop) */}
              <div
                className="hidden lg:block absolute top-[13px] left-[15px] right-[20px] h-[1px] bg-neutral-300 z-0"
                aria-hidden="true"
              />

              {/* 5 Steps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 relative z-10">
                {PROCESS_STEPS.map((stepItem) => (
                  <div
                    key={stepItem.step}
                    onClick={() => setSelectedStep(stepItem)}
                    className="group cursor-pointer flex flex-col"
                  >
                    {/* Number Badge with Circle matching Image 1 */}
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#F5F5F0] border border-neutral-400 group-hover:border-neutral-900 flex items-center justify-center text-[10px] font-mono font-medium text-neutral-700 group-hover:text-neutral-950 transition-colors shadow-2xs">
                        {stepItem.step}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="mt-3 text-[11px] font-semibold tracking-[0.18em] text-neutral-900 uppercase group-hover:text-neutral-600 transition-colors">
                      {stepItem.title}
                    </h3>

                    {/* Short Description matching Image 1 */}
                    <p className="mt-2 text-[11px] sm:text-[12px] leading-relaxed text-neutral-500 font-normal">
                      {stepItem.description}
                    </p>

                    <span className="mt-3 text-[9px] tracking-widest text-neutral-400 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      VIEW STAGES →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Process Detail Lightbox */}
        {selectedStep && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedStep(null)}
          >
            <div
              className="bg-[#FBFBFA] max-w-md w-full p-8 shadow-2xl border border-neutral-200 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <span className="text-xs font-mono tracking-widest text-neutral-400">
                  PHASE {selectedStep.step}
                </span>
                <button
                  onClick={() => setSelectedStep(null)}
                  className="text-neutral-400 hover:text-neutral-900 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <h3 className="mt-3 font-editorial text-2xl text-neutral-900">
                {selectedStep.title}
              </h3>
              <p className="mt-1 text-xs text-neutral-500 font-medium">
                {selectedStep.description}
              </p>
              <div className="mt-4 p-4 bg-neutral-100/70 border border-neutral-200/60 text-xs text-neutral-700 leading-relaxed">
                {selectedStep.details}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
