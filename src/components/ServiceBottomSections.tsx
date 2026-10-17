import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Lightbulb,
  Kanban,
  CheckCircle2,
  Building,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { ServiceItem, Project } from '../types';
import { PROJECTS, STUDIO_INFO } from '../data/studioData';
import { AreasWeServe } from './AreasWeServe';
import {
  ConsultationGraphic,
  WorkflowGraphic,
  ProjectManagementGraphic,
  FinalReviewGraphic,
} from './ApproachGraphics';
import { ScrollReveal } from './ScrollReveal';

interface ServiceBottomSectionsProps {
  service: ServiceItem;
  onSelectProject?: (project: Project) => void;
  onOpenConnect: (planOrTopic?: string) => void;
  onBack: () => void;
}

interface TestimonialItem {
  id: string;
  name: string;
  source: 'LinkedIn' | 'Upwork';
  quote: string;
  fullQuote: string;
  rating: number;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Jeffery Chan',
    source: 'LinkedIn',
    quote:
      'I highly recommend ARQ.works for their exceptional skills as a CAD designer and 3D rendering expert. We have the pleasure of contracting him for 3D model...',
    fullQuote:
      'I highly recommend ARQ.works for their exceptional skills as CAD designers and 3D rendering experts. We had the pleasure of contracting them for complete 3D modeling, technical detailing, and architectural permit packages. Unmatched speed, precision, and overnight communication.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sylvia',
    source: 'Upwork',
    quote:
      'ARQ.works is very responsive and worked with a tight schedule change. The work is excellent. We will hire again.',
    fullQuote:
      'ARQ.works is very responsive and worked with a tight schedule change. The work is excellent, Revit models were impeccably clean, and revisions were delivered in hours. We will definitely hire again for our upcoming commercial developments.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Matthew',
    source: 'Upwork',
    quote:
      'ARQ.works did an excellent job of developing a design for a bespoke reception desk including CAD drawings and 3D visuals.',
    fullQuote:
      'ARQ.works did an excellent job of developing a design for a bespoke reception desk including CAD drawings and 3D visuals. Their understanding of spatial ergonomics and joinery detailing made fabrication seamless.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Marcus Vance',
    source: 'LinkedIn',
    quote:
      'Our Seattle practice outsources CD sets to ARQ.works. Their $10/hr rate and overnight turnaround have given us a massive competitive advantage.',
    fullQuote:
      'Our Seattle practice outsources CD sets to ARQ.works. Their $10/hr rate and overnight turnaround have given us a massive competitive advantage. Flawless code compliance and BIM level 2 accuracy.',
    rating: 5,
  },
  {
    id: 't5',
    name: 'Elena Rostova',
    source: 'Upwork',
    quote:
      'The photorealistic 3D visualization sets ARQ.works delivered helped us secure full funding from our investors on the first pitch.',
    fullQuote:
      'The photorealistic 3D visualization sets ARQ.works delivered helped us secure full funding from our investors on the first pitch. Their lighting simulation is world-class.',
    rating: 5,
  },
];

export const ServiceBottomSections: React.FC<ServiceBottomSectionsProps> = ({
  service,
  onSelectProject,
  onOpenConnect,
  onBack,
}) => {
  // Carousel state for Featured Projects
  const [projectIndex, setProjectIndex] = useState(0);
  
  // Expanded quote states for testimonials
  const [expandedQuotes, setExpandedQuotes] = useState<{ [key: string]: boolean }>({});
  
  // Testimonials carousel offset
  const [testiIndex, setTestiIndex] = useState(0);

  const toggleExpand = (id: string) => {
    setExpandedQuotes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Projects window (3 projects visible at a time)
  const totalProjects = PROJECTS.length;
  const visibleProjects = [
    PROJECTS[projectIndex % totalProjects],
    PROJECTS[(projectIndex + 1) % totalProjects],
    PROJECTS[(projectIndex + 2) % totalProjects],
  ];

  const handleNextProjects = () => {
    setProjectIndex((prev) => (prev + 1) % totalProjects);
  };

  const handlePrevProjects = () => {
    setProjectIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  // Testimonials window (3 testimonials visible at a time on desktop)
  const maxTestiIndex = Math.max(0, TESTIMONIALS.length - 3);
  const handleNextTesti = () => {
    setTestiIndex((prev) => (prev >= maxTestiIndex ? 0 : prev + 1));
  };
  const handlePrevTesti = () => {
    setTestiIndex((prev) => (prev <= 0 ? maxTestiIndex : prev - 1));
  };

  const visibleTestimonials = TESTIMONIALS.slice(testiIndex, testiIndex + 3);

  return (
    <div className="w-full bg-[#FFFFFF]">
      
      {/* ========================================================= */}
      {/* 1. OUR APPROACH SECTION (MATCHING UPLOADED REFERENCE)     */}
      {/* ========================================================= */}
      <ScrollReveal>
        <section id="our-approach" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-neutral-900">
          
          {/* Section Heading */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#404040] font-sans">
              Our <span className="text-[#DF9531]">Approach</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-normal">
              Lets think creatively about our solutions.
            </p>
          </div>

          {/* 4 Pillars Grid with Architectural Vector Graphics & Rich Cursor Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            
            {/* Pillar 1: Consultation & Discovery */}
            <div
              onClick={() => onOpenConnect('Consultation & Discovery')}
              className="group cursor-pointer p-6 sm:p-7 rounded-3xl bg-[#FAFAF8] hover:bg-white border border-neutral-200/80 hover:border-[#DF9531]/70 shadow-xs hover:shadow-2xl hover:shadow-[#DF9531]/15 transform -translate-y-0 hover:-translate-y-2 transition-all duration-400 relative overflow-hidden flex flex-col items-center text-center justify-between"
            >
              {/* Top Amber Accent Stripe on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DF9531] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              
              <div className="flex flex-col items-center w-full">
                {/* Phase Badge */}
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold bg-neutral-200/70 text-neutral-600 group-hover:bg-[#DF9531] group-hover:text-white transition-all duration-300 mb-5 shadow-2xs">
                  PHASE 01
                </span>

                {/* Graphic with Dynamic Cursor Effects */}
                <div className="mb-5 transition-transform duration-500 group-hover:scale-105">
                  <ConsultationGraphic />
                </div>

                {/* Title with hover color highlight */}
                <h3 className="text-lg font-bold text-neutral-800 group-hover:text-[#DF9531] font-sans tracking-tight transition-colors duration-300">
                  Consultation & Discovery
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-neutral-600 font-normal text-balance">
                  To begin with, the {STUDIO_INFO.name} team conducts detailed consultations and meetings to understand the needs, preferences and style of each specific client.
                </p>
              </div>

              {/* Bottom Subtle Interaction Indicator on Cursor Hover */}
              <div className="mt-6 pt-3.5 border-t border-neutral-100 group-hover:border-[#DF9531]/20 w-full flex items-center justify-center gap-1.5 text-[11px] font-mono text-neutral-400 group-hover:text-[#DF9531] transition-all duration-300">
                <span className="font-semibold tracking-wider">LEARN MORE</span>
                <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-300 text-[#DF9531]" />
              </div>
            </div>

            {/* Pillar 2: Workflow */}
            <div
              onClick={() => onOpenConnect('Workflow & Collaboration')}
              className="group cursor-pointer p-6 sm:p-7 rounded-3xl bg-[#FAFAF8] hover:bg-white border border-neutral-200/80 hover:border-[#DF9531]/70 shadow-xs hover:shadow-2xl hover:shadow-[#DF9531]/15 transform -translate-y-0 hover:-translate-y-2 transition-all duration-400 relative overflow-hidden flex flex-col items-center text-center justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DF9531] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              
              <div className="flex flex-col items-center w-full">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold bg-neutral-200/70 text-neutral-600 group-hover:bg-[#DF9531] group-hover:text-white transition-all duration-300 mb-5 shadow-2xs">
                  PHASE 02
                </span>

                <div className="mb-5 transition-transform duration-500 group-hover:scale-105">
                  <WorkflowGraphic />
                </div>

                <h3 className="text-lg font-bold text-neutral-800 group-hover:text-[#DF9531] font-sans tracking-tight transition-colors duration-300">
                  Workflow
                </h3>

                <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-neutral-600 font-normal text-balance">
                  For a more personalized experience, we use Slack, complete with our team members relevant to the project for an organized workflow, reachability, and transparency.
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-neutral-100 group-hover:border-[#DF9531]/20 w-full flex items-center justify-center gap-1.5 text-[11px] font-mono text-neutral-400 group-hover:text-[#DF9531] transition-all duration-300">
                <span className="font-semibold tracking-wider">LEARN MORE</span>
                <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-300 text-[#DF9531]" />
              </div>
            </div>

            {/* Pillar 3: Project Management */}
            <div
              onClick={() => onOpenConnect('Project Management (ClickUp)')}
              className="group cursor-pointer p-6 sm:p-7 rounded-3xl bg-[#FAFAF8] hover:bg-white border border-neutral-200/80 hover:border-[#DF9531]/70 shadow-xs hover:shadow-2xl hover:shadow-[#DF9531]/15 transform -translate-y-0 hover:-translate-y-2 transition-all duration-400 relative overflow-hidden flex flex-col items-center text-center justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DF9531] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              
              <div className="flex flex-col items-center w-full">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold bg-neutral-200/70 text-neutral-600 group-hover:bg-[#DF9531] group-hover:text-white transition-all duration-300 mb-5 shadow-2xs">
                  PHASE 03
                </span>

                <div className="mb-5 transition-transform duration-500 group-hover:scale-105">
                  <ProjectManagementGraphic />
                </div>

                <h3 className="text-lg font-bold text-neutral-800 group-hover:text-[#DF9531] font-sans tracking-tight transition-colors duration-300">
                  Project Management
                </h3>

                <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-neutral-600 font-normal text-balance">
                  Another unique feature of getting {STUDIO_INFO.name} for architectural design is that we offer a customized ClickUp kanban board to customers/businesses which helps them maintain and track project management such as due dates, smooth exchange of feedbacks and much more resulting in a successful collaboration.
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-neutral-100 group-hover:border-[#DF9531]/20 w-full flex items-center justify-center gap-1.5 text-[11px] font-mono text-neutral-400 group-hover:text-[#DF9531] transition-all duration-300">
                <span className="font-semibold tracking-wider">LEARN MORE</span>
                <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-300 text-[#DF9531]" />
              </div>
            </div>

            {/* Pillar 4: Final Review */}
            <div
              onClick={() => onOpenConnect('Final Review & Quality Assurance')}
              className="group cursor-pointer p-6 sm:p-7 rounded-3xl bg-[#FAFAF8] hover:bg-white border border-neutral-200/80 hover:border-[#DF9531]/70 shadow-xs hover:shadow-2xl hover:shadow-[#DF9531]/15 transform -translate-y-0 hover:-translate-y-2 transition-all duration-400 relative overflow-hidden flex flex-col items-center text-center justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DF9531] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              
              <div className="flex flex-col items-center w-full">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold bg-neutral-200/70 text-neutral-600 group-hover:bg-[#DF9531] group-hover:text-white transition-all duration-300 mb-5 shadow-2xs">
                  PHASE 04
                </span>

                <div className="mb-5 transition-transform duration-500 group-hover:scale-105">
                  <FinalReviewGraphic />
                </div>

                <h3 className="text-lg font-bold text-neutral-800 group-hover:text-[#DF9531] font-sans tracking-tight transition-colors duration-300">
                  Final Review
                </h3>

                <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-neutral-600 font-normal text-balance">
                  Your satisfaction is our priority for architect design services, which is why your review at each stage of the process is important. Once your approval has been granted and all necessary adjustments have been made, the project moves towards completion.
                  <br /><br />
                  {STUDIO_INFO.name} operates all around the world, and provides services as good as getting your work done from a local service provider.
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-neutral-100 group-hover:border-[#DF9531]/20 w-full flex items-center justify-center gap-1.5 text-[11px] font-mono text-neutral-400 group-hover:text-[#DF9531] transition-all duration-300">
                <span className="font-semibold tracking-wider">LEARN MORE</span>
                <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-300 text-[#DF9531]" />
              </div>
            </div>

          </div>

          {/* Horizontal Divider with Centered Amber Bar matching reference */}
          <div className="relative max-w-5xl mx-auto mt-20">
            <hr className="border-t border-neutral-300" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-0.5 bg-[#DF9531]" />
          </div>

        </section>
      </ScrollReveal>

      {/* ========================================================= */}
      {/* 2. FEATURED PROJECTS SECTION (MATCHING UPLOADED REFERENCE) */}
      {/* ========================================================= */}
      <ScrollReveal>
        <section id="featured-projects" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#404040] font-sans">
              <span className="text-[#DF9531]">Featured</span> Projects
            </h2>
          </div>

          {/* 3 Project Cards Grid Matching Reference Screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {visibleProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                onClick={() => onSelectProject && onSelectProject(project)}
                className="group cursor-pointer relative aspect-[1/0.95] rounded-lg overflow-hidden bg-neutral-900 shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Full-bleed Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Ambient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Gold Geometric Studio Watermark Seal in bottom-right corner (matching screenshot) */}
                <div className="absolute bottom-4 right-4 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-black/85 border border-[#DF9531] flex items-center justify-center shadow-lg text-[#DF9531]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <polygon points="12,3 2,21 7,21 12,11 17,21 22,21" />
                    </svg>
                  </div>
                </div>

                {/* Project Title & Category on bottom left */}
                <div className="absolute bottom-4 left-4 right-16 text-white">
                  <span className="text-[10px] font-mono tracking-widest text-[#DF9531] uppercase block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold font-sans tracking-tight text-white line-clamp-1 group-hover:text-[#DF9531] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots Matching Reference Image (6 dots, 1 active amber) */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setProjectIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  projectIndex % 6 === i
                    ? 'w-6 h-2.5 bg-[#DF9531]'
                    : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>

        </section>
      </ScrollReveal>

      {/* ========================================================= */}
      {/* 3. WHAT OTHERS SAY SECTION (MATCHING UPLOADED REFERENCE)  */}
      {/* ========================================================= */}
      <ScrollReveal>
        <section id="what-others-say" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#222222] font-sans">
              What others say
            </h2>
          </div>

          {/* Carousel Container with Left/Right Arrows */}
          <div className="relative">
            
            {/* Left Arrow */}
            <button
              type="button"
              onClick={handlePrevTesti}
              aria-label="Previous testimonials"
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-900 shadow-md flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={handleNextTesti}
              aria-label="Next testimonials"
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-900 shadow-md flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>

            {/* 3 Testimonial Cards Grid Matching Reference */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {visibleTestimonials.map((t) => {
                const isExpanded = !!expandedQuotes[t.id];
                return (
                  <div
                    key={t.id}
                    className="bg-white rounded-2xl p-7 sm:p-8 pt-8 pb-7 shadow-lg border border-neutral-200/90 relative flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Floating Circular Quote Badge in Top Right (Matching reference image) */}
                    <div className="absolute -top-5 right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#E5A044] text-white flex items-center justify-center shadow-md">
                      <span className="font-serif text-3xl font-extrabold leading-none select-none mt-1">
                        “
                      </span>
                    </div>

                    {/* Client Info Header */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-sans tracking-tight">
                        {t.name}
                      </h3>
                      <div className="text-xs text-neutral-400 font-normal mt-0.5">
                        {t.source}
                      </div>

                      {/* Review Quote */}
                      <p className="mt-5 text-xs sm:text-sm leading-relaxed text-neutral-600 font-normal">
                        {isExpanded ? t.fullQuote : t.quote}
                      </p>

                      {/* "Read more" link */}
                      <button
                        type="button"
                        onClick={() => toggleExpand(t.id)}
                        className="mt-4 text-xs font-semibold text-neutral-900 hover:text-[#DF9531] transition-colors cursor-pointer block"
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </button>
                    </div>

                    {/* Card Bottom: Divider + 5 Stars + Platform Wordmark Logo */}
                    <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between">
                      {/* 5 Yellow Stars */}
                      <div className="flex items-center gap-1 text-[#F5A623]">
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <Star key={starIdx} size={16} fill="currentColor" strokeWidth={0} />
                        ))}
                      </div>

                      {/* Platform Badge */}
                      {t.source === 'LinkedIn' ? (
                        <div className="inline-flex items-center gap-1 text-[#0A66C2] font-bold text-sm tracking-tight">
                          <span className="font-sans font-bold">Linked</span>
                          <span className="w-5 h-5 bg-[#0A66C2] text-white rounded-sm flex items-center justify-center text-xs font-bold font-sans">
                            in
                          </span>
                        </div>
                      ) : (
                        <div className="text-[#14A800] font-bold text-sm tracking-tight font-sans">
                          upwork
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </section>
      </ScrollReveal>

      {/* ========================================================= */}
      {/* 4. AREAS WE SERVE (MAP FROM HOME PAGE)                    */}
      {/* ========================================================= */}
      <ScrollReveal>
        <AreasWeServe onOpenConnect={onOpenConnect} />
      </ScrollReveal>

    </div>
  );
};
