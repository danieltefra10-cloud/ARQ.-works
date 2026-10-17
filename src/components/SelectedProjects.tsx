import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/studioData';

interface SelectedProjectsProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({
  onSelectProject,
  onViewAllProjects,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const SERVICE_FILTERS = [
    { id: 'ALL', label: 'ALL SERVICES', badge: PROJECTS.length },
    { id: 'architectural-design', label: '01 ARCHITECTURE DESIGN', badge: PROJECTS.filter((p) => p.serviceId === 'architectural-design').length },
    { id: 'landscape-architecture', label: '02 LANDSCAPE ARCHITECTURE', badge: PROJECTS.filter((p) => p.serviceId === 'landscape-architecture').length },
    { id: 'revit-drafting-outsourcing', label: '03 REVIT DRAFTING & BIM', badge: PROJECTS.filter((p) => p.serviceId === 'revit-drafting-outsourcing').length },
    { id: 'construction-permit-sets', label: '04 CONSTRUCTION & PERMIT SETS', badge: PROJECTS.filter((p) => p.serviceId === 'construction-permit-sets').length },
    { id: '3d-modeling-rendering', label: '05 3D MODELING & RENDERING', badge: PROJECTS.filter((p) => p.serviceId === '3d-modeling-rendering').length },
    { id: '3d-architectural-animation', label: '06 3D ANIMATION', badge: PROJECTS.filter((p) => p.serviceId === '3d-architectural-animation').length },
  ];

  const filteredProjects =
    activeFilter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.serviceId === activeFilter || p.category === activeFilter);

  // Scroll movement effect handler
  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalDistance = rect.height + windowHeight;
        const currentDistance = windowHeight - rect.top;
        const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Compute multi-layer parallax offset for cards based on column position
  const getCardParallaxY = (idx: number) => {
    // 4-column staggered parallax factor: columns move at varying speeds while scrolling
    const columnFactors = [-28, 22, -18, 30];
    const factor = columnFactors[idx % 4] || 0;
    return (scrollProgress - 0.5) * factor;
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 lg:py-28 bg-[#FBFBFA] relative overflow-hidden"
    >
      {/* Background Architectural Drafting Dot-Grid with Scroll Movement */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] transition-transform duration-75 ease-out"
        style={{
          backgroundImage: 'radial-gradient(#171717 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          backgroundPosition: `0px ${(scrollProgress * 90).toFixed(1)}px`,
        }}
      />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Architectural Layout: Left Categories Sidebar | Right Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Heading & Categories List */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-7">
            <div>
              <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-neutral-400 uppercase">
                <span>OUR WORK</span>
                <span className="w-6 h-[1px] bg-neutral-300"></span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-sans uppercase">
                Portfolio
              </h2>
            </div>

            {/* Vertical Categories List on Left Side */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase pb-2 border-b border-neutral-200/80 mb-2">
                DISCIPLINES ({SERVICE_FILTERS.length - 1})
              </div>

              <div className="flex flex-row overflow-x-auto pb-2 lg:pb-0 lg:flex-col lg:space-y-1.5 no-scrollbar gap-1.5 lg:gap-0">
                {SERVICE_FILTERS.map((cat) => {
                  const isActive = activeFilter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveFilter(cat.id)}
                      className={`group flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium tracking-[0.1em] uppercase transition-all cursor-pointer text-left whitespace-nowrap lg:whitespace-normal border lg:border-none ${
                        isActive
                          ? 'bg-neutral-900 text-white shadow-xs font-semibold'
                          : 'bg-white/80 lg:bg-transparent text-neutral-600 border-neutral-200/80 hover:text-neutral-950 hover:bg-neutral-100'
                      }`}
                    >
                      <span className="truncate pr-2">{cat.label}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-mono shrink-0 transition-colors ${
                          isActive
                            ? 'bg-neutral-800 text-neutral-200'
                            : 'bg-neutral-100 text-neutral-400 group-hover:text-neutral-700'
                        }`}
                      >
                        {cat.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Complete Archive Link in Left Column */}
            <div className="pt-4 border-t border-neutral-200/80 hidden lg:block">
              <button
                onClick={onViewAllProjects}
                className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-neutral-800 hover:text-neutral-950 uppercase cursor-pointer"
              >
                <span>PORTFOLIO ARCHIVE ({PROJECTS.length})</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Scroll Indicator & Projects Grid */}
          <div className="lg:col-span-9">
            {/* Scroll Motion Progress Bar */}
            <div className="w-full h-[1.5px] bg-neutral-200/60 overflow-hidden mb-6">
              <div
                className="h-full bg-neutral-900 transition-all duration-75 ease-out"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>

            {/* Projects Grid: 3 columns on large desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {filteredProjects.map((project, idx) => {
                const cardY = getCardParallaxY(idx);

                return (
                  <article
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className="group cursor-pointer relative aspect-[4/3] bg-neutral-100 border border-[#E7E7E1] rounded-xl overflow-hidden hover:border-neutral-900 hover:shadow-xl transition-all duration-300"
                    style={{
                      transform: `translate3d(0, ${cardY.toFixed(1)}px, 0)`,
                      willChange: 'transform',
                      transition: 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    {/* Full-bleed Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                    />

                    {/* Ambient Soft Overlay */}
                    <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-neutral-950/20 transition-colors duration-300" />

                    {/* Hover State: Translucent Golden Amber Overlay Card */}
                    <div className="absolute inset-3 sm:inset-4 bg-[#DF9531]/88 backdrop-blur-xs rounded-lg p-5 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 shadow-xl pointer-events-none">
                      {/* Name of the project */}
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug drop-shadow-xs">
                        {project.title}
                      </h3>

                      {/* Horizontal White Accent Divider */}
                      <div className="w-14 sm:w-16 h-[2.5px] bg-white mx-auto my-3 rounded-full" />

                      {/* Location & Area */}
                      <p className="text-xs sm:text-[13px] font-medium text-white/95 leading-relaxed">
                        {project.location}
                      </p>
                      <p className="mt-1 text-[11px] font-mono tracking-wider text-white/90 uppercase font-semibold">
                        {project.area}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Mobile View All Button */}
            <div className="mt-8 lg:hidden text-center">
              <button
                onClick={onViewAllProjects}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-neutral-900 uppercase border-b border-neutral-900 pb-1 cursor-pointer"
              >
                <span>VIEW COMPLETE PORTFOLIO ({PROJECTS.length})</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
