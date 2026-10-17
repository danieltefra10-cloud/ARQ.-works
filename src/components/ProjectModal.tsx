import React from 'react';
import { X, MapPin, Calendar, Maximize2, Check, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConnect: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenConnect,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FBFBFA] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-300 rounded-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="sticky top-0 bg-[#FBFBFA]/95 backdrop-blur-xs z-10 px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              STUDIO SERVICE
            </span>
            <span className="text-neutral-300">/</span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider bg-neutral-900 text-white uppercase">
              {project.serviceNumber ? `${project.serviceNumber} · ` : ''}{project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Hero Image within Modal */}
        <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-white px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
            {project.location} · {project.year}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-neutral-200">
            <div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-neutral-900 font-normal">
                {project.title}
              </h2>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-neutral-700" />
                  {project.location}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-neutral-700" />
                  {project.year}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Maximize2 size={13} className="text-neutral-700" />
                  {project.area}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenConnect();
              }}
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] font-medium tracking-wider uppercase px-5 py-3 transition-colors cursor-pointer self-start shrink-0"
            >
              <span>INQUIRE SIMILAR PROJECT</span>
              <ArrowRight size={13} />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                ARCHITECTURAL STATEMENT
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="pt-4">
                <h4 className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase mb-3">
                  DISTINCTIVE CHARACTERISTICS
                </h4>
                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-700">
                      <Check size={13} className="text-neutral-900 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-neutral-100/70 p-6 border border-neutral-200/70 space-y-4 text-xs">
              <h3 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase pb-2 border-b border-neutral-200">
                PROJECT SPECIFICATIONS
              </h3>

              <div>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">CLIENT / COMMISSION</span>
                <span className="font-medium text-neutral-800">{project.client}</span>
              </div>

              <div>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">STUDIO SCOPE</span>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {project.scope.map((s, idx) => (
                    <span key={idx} className="text-[11px] text-neutral-600 bg-white px-2 py-0.5 border border-neutral-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">DIGITAL DELIVERY</span>
                <span className="text-neutral-600">Revit LOD 350 BIM & 8K Corona/3ds Max Renders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
