import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onOpenProjectDetail?: () => void;
}

const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: 'blob:https://www.pinterest.com/ef80c621-2db1-40fb-b73d-d69115aaac21',
    fallback: 'https://i.pinimg.com/736x/4f/a5/3a/4fa53a0b7d688cc59eaffb61b34caad6.jpg',
    title: 'Architectural Project 01',
  },
  {
    id: 'slide-2',
    image: 'https://i.pinimg.com/736x/f5/51/d7/f551d7e38b98707761ea456f35350619.jpg',
    fallback: 'https://i.pinimg.com/736x/f5/51/d7/f551d7e38b98707761ea456f35350619.jpg',
    title: 'Architectural Project 02',
  },
  {
    id: 'slide-3',
    image: 'https://i.pinimg.com/736x/b9/49/a8/b949a81756dd4f21c1714aefe133ad45.jpg',
    fallback: 'https://i.pinimg.com/736x/b9/49/a8/b949a81756dd4f21c1714aefe133ad45.jpg',
    title: 'Architectural Project 03',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slowly slide horizontally every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-32 sm:pt-36 lg:pt-42 pb-20 lg:pb-32 min-h-[90vh] lg:min-h-[94vh] flex items-center bg-neutral-950 [clip-path:inset(0)]"
    >
      {/* 3 Images Horizontal Sliding Track - Fixed on scroll within section viewport */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="w-[300vw] h-full flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${(currentSlide * 100) / 3}%)` }}
        >
          {HERO_SLIDES.map((slide) => (
            <div key={slide.id} className="w-[100vw] h-full relative overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (slide.fallback && e.currentTarget.src !== slide.fallback) {
                    e.currentTarget.src = slide.fallback;
                  }
                }}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Contrast scrims ensuring legibility while keeping images authentic */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/55 to-neutral-950/25" />
        <div className="absolute inset-0 bg-neutral-950/20" />
      </div>

      <div className="relative z-10 max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-8 flex flex-col justify-between self-stretch pr-0 lg:pr-6">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-sans font-bold leading-[1.08] tracking-tight text-balance">
                <span className="text-white block">Architectural Services,</span>
                <span className="text-[#DF9531] block mt-1">Unbeatable Prices from $10/hr only</span>
              </h1>



              {/* Disciplines kicker */}
              <div className="mt-8 flex items-center flex-wrap gap-x-3 gap-y-1 text-[11px] font-medium tracking-[0.22em] text-neutral-300 uppercase">
                <span>ARCHITECTURE</span>
                <span aria-hidden="true" className="text-neutral-500">·</span>
                <span>INTERIORS</span>
                <span aria-hidden="true" className="text-neutral-500">·</span>
                <span>LANDSCAPE</span>
                <span aria-hidden="true" className="text-neutral-500">·</span>
                <span>3D VISUALS</span>
              </div>

              {/* Primary Call to Action */}
              <div className="mt-10">
                <button
                  onClick={onExploreClick}
                  className="relative p-[1.5px] overflow-hidden rounded-full group inline-flex items-center justify-center cursor-pointer shadow-2xl active:scale-[0.99] transition-transform duration-200"
                >
                  {/* Rotating Glow Stroke */}
                  <span
                    className="absolute inset-[-200%] animate-rotate-glow pointer-events-none"
                    style={{
                      background:
                        'conic-gradient(from 0deg, transparent 0 240deg, rgba(255,255,255,0.15) 280deg, rgba(255,255,255,0.75) 330deg, rgba(255,255,255,1) 360deg)',
                    }}
                  />
                  {/* Rotating Glow Bloom */}
                  <span
                    className="absolute inset-[-200%] animate-rotate-glow blur-sm opacity-60 pointer-events-none"
                    style={{
                      background:
                        'conic-gradient(from 0deg, transparent 0 260deg, rgba(255,255,255,0.3) 320deg, rgba(255,255,255,1) 360deg)',
                    }}
                  />

                  {/* Architectural Faceplate with Pronounced Corner Fillet */}
                  <span className="relative z-10 flex items-center justify-center px-9 py-4 bg-white group-hover:bg-neutral-50 text-neutral-950 text-xs font-semibold tracking-[0.2em] uppercase rounded-full transition-colors border border-white/80 shadow-md">
                    <span>EXPLORE OUR WORK</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom scroll hint & Slide Indicators */}
            <div className="pt-12 lg:pt-20 flex items-center justify-between">
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.22em] text-neutral-400 hover:text-white uppercase transition-colors group"
              >
                <span>SCROLL TO DISCOVER</span>
                <ArrowDown size={12} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* Slide indicators */}
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                      currentSlide === idx ? 'w-8 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



