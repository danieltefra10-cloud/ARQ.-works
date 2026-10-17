import React, { useState } from 'react';
import { Check, X, Info, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface PackagesSectionProps {
  onOpenConnect: (plan?: string) => void;
}

interface PackagePlan {
  id: string;
  name: string;
  price: string;
  period: string;
  hoursHeader?: string;
  hoursSub?: string;
  infoButtonText: string;
  infoModalContent: {
    headline: string;
    description: string;
    highlights: string[];
  };
  features: string[];
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenConnect }) => {
  const [activeModalPlan, setActiveModalPlan] = useState<PackagePlan | null>(null);

  const PACKAGES: PackagePlan[] = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$1895',
      period: '/mo',
      hoursHeader: '160 hours',
      hoursSub: '$10/hr | 40 hrs /w',
      infoButtonText: 'How Our Subscription Works?',
      infoModalContent: {
        headline: 'How Basic Monthly Subscription Works',
        description:
          'Our Basic package gives you 160 dedicated architectural production hours per month (40 hours per week) at an ultra-competitive rate of $10/hr. You get one dedicated architect working on one active task at a time with daily progress handoffs.',
        highlights: [
          'Submit unlimited design requests to your project queue',
          'One task actively executed at a time with rapid 24-48h milestone deliveries',
          'Pause your subscription anytime if your workload slows down',
          'Weekly sync video call for alignment and feedback',
        ],
      },
      features: [
        'Unlimited design requests',
        'Unlimited revisions',
        '40 hours a week',
        'Cancel Anytime',
        'Pause Anytime',
        'Weekly meeting',
        'One active task at a time',
        '1 team member dedicated to your project',
      ],
    },
    {
      id: 'standard',
      name: 'Standard',
      price: '$2500',
      period: '/mo',
      hoursHeader: '240 hours',
      hoursSub: '$10/hr | 60 hrs /w',
      infoButtonText: 'How Our Subscription Works?',
      infoModalContent: {
        headline: 'How Standard Monthly Subscription Works',
        description:
          'Our Standard package provides 240 hours per month (60 hours per week) powered by 2 dedicated team members and a dedicated project manager. Ideal for fast-growing architectural practices handling multiple concurrent deadlines.',
        highlights: [
          'Multiple tasks actively executed simultaneously',
          'Dedicated senior architectural project manager coordinating QA',
          'Live time-tracking dashboard access with transparent timesheets',
          '60 hours a week dedicated to your pipeline',
        ],
      },
      features: [
        'Unlimited design requests',
        'Unlimited revisions',
        '60 hours a week',
        'Cancel Anytime',
        'Pause Anytime',
        'Weekly meeting',
        'Multiple active tasks at a time',
        'Dedicated project manager',
        'Time Tracking',
        '2 team members dedicated to your project',
      ],
    },
    {
      id: 'hourly',
      name: 'Hourly',
      price: '$10',
      period: '/hr',
      hoursHeader: '',
      hoursSub: '',
      infoButtonText: 'How Our Hourly Works?',
      infoModalContent: {
        headline: 'How Hourly On-Demand Works',
        description:
          'Our Hourly model is designed for firms that need agile, on-demand support for specific project sprints, tight deadlines, or specialized Revit BIM drafting tasks without monthly commitments.',
        highlights: [
          'Risk-free 1-day trial to review delivery quality before committing',
          'No minimum monthly commitment — pay only for logged hours',
          'Detailed time-tracking reports and verified task logs',
          'Dedicated project manager to oversee file standards',
        ],
      },
      features: [
        '1 day free trial',
        'Unlimited design requests',
        'Unlimited revisions',
        'Unlimited hours a week',
        'Cancel Anytime',
        'Pause Anytime',
        'Weekly meeting',
        'Multiple active tasks at a time',
        'Dedicated project manager',
        'Time Tracking',
      ],
    },
  ];

  return (
    <section id="packages" className="relative pt-20 lg:pt-28 pb-0 bg-[#181817] overflow-hidden">
      {/* Background Subtle Architectural Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header Matching Uploaded Screenshot */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex flex-col items-center">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-[#E59A35] uppercase">
              FLEXIBLE PLANS
            </span>
            <div className="w-10 h-0.5 bg-neutral-600 mt-2" />
          </div>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase font-sans">
            OUR PACKAGES
          </h2>
        </div>

        {/* 3 Packages Cards Matching Uploaded Screenshot */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch max-w-7xl mx-auto">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-neutral-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Plan Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-sans tracking-tight">
                  {pkg.name}
                </h3>

                {/* Price Display */}
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-neutral-950 font-sans tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-neutral-600">
                    {pkg.period}
                  </span>
                </div>

                {/* Hours & Rate Info */}
                <div className="mt-2 min-h-[44px]">
                  {pkg.hoursHeader ? (
                    <>
                      <div className="text-sm font-bold text-neutral-900">
                        {pkg.hoursHeader}
                      </div>
                      <div className="text-xs text-neutral-500 mt-0.5 font-mono">
                        {pkg.hoursSub}
                      </div>
                    </>
                  ) : (
                    <div className="text-xs text-neutral-400 font-mono pt-1">
                      On-demand flexible billing
                    </div>
                  )}
                </div>

                {/* Action Buttons Matching Screenshot */}
                <div className="mt-6 space-y-3">
                  {/* Primary Subscribe Button */}
                  <button
                    type="button"
                    onClick={() => onOpenConnect(`${pkg.name} Package (${pkg.price}${pkg.period})`)}
                    className="w-full py-3.5 px-6 rounded-full bg-[#181817] hover:bg-neutral-800 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer text-center"
                  >
                    Subscribe
                  </button>

                  {/* Secondary How-It-Works Pill Button */}
                  <button
                    type="button"
                    onClick={() => setActiveModalPlan(pkg)}
                    className="w-full py-2.5 px-6 rounded-full border border-neutral-800 hover:bg-neutral-100 text-neutral-900 font-medium text-xs transition-colors cursor-pointer text-center"
                  >
                    {pkg.infoButtonText}
                  </button>
                </div>

                {/* Features Section */}
                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <h4 className="text-sm font-bold text-neutral-900 mb-4 tracking-tight">
                    Features
                  </h4>

                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[13px] text-neutral-700 leading-snug">
                        {/* Amber Circular Checkmark Matching Screenshot */}
                        <div className="w-4 h-4 rounded-full bg-[#E59A35] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-4 border-t border-neutral-50 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>{pkg.id === 'hourly' ? 'FLEXIBLE HOURLY' : 'MONTHLY SPRINT'}</span>
                <span className="text-[#E59A35] font-semibold">NO CONTRACT</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Callout: Looking for a Fixed Price? (Matching Uploaded Screenshot) */}
      <div className="mt-16 sm:mt-20 pt-12 pb-14 bg-[#F8F3EA] border-t border-[#EFE5D5] text-center relative z-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          {/* Golden Amber Horizontal Accent Dash */}
          <div className="w-14 sm:w-16 h-1 bg-[#E59A35] rounded-full mx-auto mb-4" />

          {/* Headline */}
          <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-neutral-900 font-sans tracking-tight">
            Looking for a Fixed Price?
          </h3>

          {/* "Get a quote now" Pill Button */}
          <div className="mt-5">
            <button
              type="button"
              onClick={() => onOpenConnect('Fixed Price Project Quote')}
              className="px-9 sm:px-11 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#EEB053] to-[#E29528] hover:from-[#E3962B] hover:to-[#D48419] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center tracking-wide"
            >
              Get a quote now
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Modal Explaining "How Our Subscription Works?" */}
      {activeModalPlan && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveModalPlan(null)}
        >
          <div
            className="bg-white max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200 relative text-neutral-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-neutral-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-[#E59A35]/15 rounded-lg text-[#E59A35]">
                  <Sparkles size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#E59A35] uppercase font-bold">
                    {activeModalPlan.name} PACKAGE
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                    {activeModalPlan.infoModalContent.headline}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalPlan(null)}
                className="p-1 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
              {activeModalPlan.infoModalContent.description}
            </p>

            <div className="mt-5 space-y-2.5">
              <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider block">
                Key Workflow Features:
              </span>
              {activeModalPlan.infoModalContent.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-600 leading-relaxed">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#E59A35] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={8} strokeWidth={3} />
                  </div>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-between pt-4 border-t border-neutral-100">
              <span className="text-xs font-mono text-neutral-500">
                {activeModalPlan.price} {activeModalPlan.period}
              </span>
              <button
                type="button"
                onClick={() => {
                  const plan = activeModalPlan.name;
                  setActiveModalPlan(null);
                  onOpenConnect(`${plan} Package (${activeModalPlan.price}${activeModalPlan.period})`);
                }}
                className="px-6 py-2.5 rounded-full bg-[#E59A35] hover:bg-[#D58C2B] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-md"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
