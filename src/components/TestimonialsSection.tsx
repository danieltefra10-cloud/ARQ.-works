import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  source: string;
  platform: 'linkedin' | 'upwork' | 'verified';
  platformLabel: string;
  rating: number;
  shortText: string;
  fullText: string;
}

export const TestimonialsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 'jeffery-chan',
      name: 'Jeffery Chan',
      source: 'LinkedIn',
      platform: 'linkedin',
      platformLabel: 'LinkedIn',
      rating: 5,
      shortText:
        'I highly recommend ARQ.works for their exceptional skills as a CAD designer and 3D rendering expert. We have the pleasure of contracting them for 3D models and renderings, both for our customers and our internal needs. The team consistently...',
      fullText:
        'I highly recommend ARQ.works for their exceptional skills as a CAD designer and 3D rendering expert. We have the pleasure of contracting them for 3D models and renderings, both for our customers and our internal needs. The team consistently delivers precision architectural models, photorealistic textures, and meets tight commercial deadlines with ease.',
    },
    {
      id: 'sylvia',
      name: 'Sylvia',
      source: 'Upwork',
      platform: 'upwork',
      platformLabel: 'upwork',
      rating: 5,
      shortText:
        'Faran and the ARQ.works team are very responsive and worked with a tight schedule change. The work is excellent. We will hire again.',
      fullText:
        'Faran and the ARQ.works team are very responsive and worked with a tight schedule change. The Revit drafting and BIM coordination work was immaculate with zero clash errors. We will hire again without hesitation.',
    },
    {
      id: 'david-miller',
      name: 'David Miller, AIA',
      source: 'Principal Architect · Miller Studio',
      platform: 'linkedin',
      platformLabel: 'LinkedIn',
      rating: 5,
      shortText:
        'Outsourcing our permit sets and construction documentation to ARQ.works reduced our production overhead by over 55%. Their attention to architectural standards and wall details is top tier...',
      fullText:
        'Outsourcing our permit sets and construction documentation to ARQ.works reduced our production overhead by over 55%. Their attention to architectural standards and wall details is top tier. They seamlessly integrate with our Revit cloud worksharing environment.',
    },
    {
      id: 'elena-rostova',
      name: 'Elena Rostova',
      source: 'Upwork Top Rated Client',
      platform: 'upwork',
      platformLabel: 'upwork',
      rating: 5,
      shortText:
        'The photorealistic CGI renderings and 4K architectural animation walkthroughs helped our real estate development group pre-sell 80% of our residential units ahead of schedule...',
      fullText:
        'The photorealistic CGI renderings and 4K architectural animation walkthroughs helped our real estate development group pre-sell 80% of our residential units ahead of schedule. Incredible lighting simulation, material physics, and prompt communication throughout.',
    },
    {
      id: 'marcus-thorne',
      name: 'Marcus Thorne',
      source: 'Design Director · Vanguard Arch',
      platform: 'linkedin',
      platformLabel: 'LinkedIn',
      rating: 5,
      shortText:
        'The monthly subscription package at $1895/mo has been a game-changer for our studio. Having on-demand architectural talent ready to jump on active tasks has eliminated our deadline bottlenecks...',
      fullText:
        'The monthly subscription package at $1895/mo has been a game-changer for our studio. Having on-demand architectural talent ready to jump on active tasks has eliminated our deadline bottlenecks. Professional, responsive, and exceptionally skilled.',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 2 ? 0 : prev + 1));
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FBFBFA] border-t border-[#E7E7E1] relative overflow-hidden">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching uploaded screenshot */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 font-sans">
              Client Testimonials
            </h2>
          </div>

          {/* Navigation Chevron Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer shadow-xs"
            >
              <ChevronLeft size={20} className="text-[#DF9531]" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer shadow-xs"
            >
              <ChevronRight size={20} className="text-[#DF9531]" />
            </button>
          </div>
        </div>

        {/* Carousel / Cards Grid matching uploaded reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4 items-stretch">
          {testimonials.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="relative bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 shadow-lg shadow-neutral-900/[0.04] border border-neutral-200/80 flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
              >
                {/* Floating Top-Right Double Quote Badge matching reference screenshot */}
                <div className="absolute -top-5 right-7 w-12 h-12 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center z-10 pointer-events-none">
                  <span className="font-serif font-black text-2xl text-[#E59A35] leading-none select-none">
                    “
                  </span>
                </div>

                {/* Top Part: Client Info & Quote */}
                <div>
                  {/* Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-sans tracking-tight">
                    {item.name}
                  </h3>

                  {/* Platform / Source */}
                  <div className="mt-1 text-xs text-neutral-400 font-medium">
                    {item.source}
                  </div>

                  {/* Hairline Separator */}
                  <div className="w-full h-[1px] bg-neutral-100 my-4" />

                  {/* Testimonial Quote Text */}
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal min-h-[72px]">
                    {isExpanded ? item.fullText : item.shortText}
                  </p>

                  {/* Read More Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    className="mt-3 text-xs font-bold text-neutral-900 hover:text-[#DF9531] transition-colors cursor-pointer inline-block"
                  >
                    {isExpanded ? 'Read less' : 'Read more'}
                  </button>
                </div>

                {/* Bottom Part: Rating Stars + Platform Logo */}
                <div>
                  {/* Bottom Hairline Separator */}
                  <div className="w-full h-[1px] bg-neutral-100 my-4" />

                  <div className="flex items-center justify-between">
                    {/* 5 Golden Yellow Stars */}
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={17} fill="#F59E0B" stroke="#F59E0B" />
                      ))}
                    </div>

                    {/* Platform Badge / Logo */}
                    <div>
                      {item.platform === 'linkedin' && (
                        <div className="flex items-center font-bold text-xs tracking-tight text-[#0A66C2]">
                          <span>Linked</span>
                          <span className="bg-[#0A66C2] text-white px-1 py-0.5 rounded-xs ml-0.5 text-[10px]">
                            in
                          </span>
                        </div>
                      )}

                      {item.platform === 'upwork' && (
                        <div className="font-extrabold text-sm tracking-tight text-[#14A800]">
                          upwork
                        </div>
                      )}

                      {item.platform === 'verified' && (
                        <div className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 font-semibold">
                          VERIFIED
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
