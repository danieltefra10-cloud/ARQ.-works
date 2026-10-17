import React, { useState } from 'react';
import { X, ArrowUpRight, Filter } from 'lucide-react';
import { PROJECTS } from '../data/studioData';
import { Project } from '../types';

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const AllProjectsModal: React.FC<AllProjectsModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<string>('ALL');

  if (!isOpen) return null;

  const filtered =
    filter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.serviceId === filter || p.category === filter);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FBFBFA] max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-neutral-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#FBFBFA]/95 backdrop-blur-xs z-10 px-8 py-5 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Filter size={16} className="text-neutral-800" />
            <h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-900">
              COMPLETE PORTFOLIO ARCHIVE
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filters Categorized by Provided Services */}
        <div className="px-8 py-4 border-b border-neutral-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {[
            { id: 'ALL', label: 'ALL SERVICES' },
            { id: 'architectural-design', label: '01 ARCHITECTURE DESIGN' },
            { id: 'landscape-architecture', label: '02 LANDSCAPE ARCHITECTURE' },
            { id: 'revit-drafting-outsourcing', label: '03 REVIT DRAFTING & BIM' },
            { id: 'construction-permit-sets', label: '04 CONSTRUCTION & PERMIT SETS' },
            { id: '3d-modeling-rendering', label: '05 3D MODELING & RENDERING' },
            { id: '3d-architectural-animation', label: '06 3D ANIMATION' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-[10px] tracking-wider uppercase transition-colors cursor-pointer whitespace-nowrap ${
                filter === cat.id
                  ? 'bg-neutral-900 text-white font-medium'
                  : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              onClick={() => {
                onClose();
                onSelectProject(proj);
              }}
              className="group cursor-pointer border border-neutral-200 bg-white p-4 rounded-xl shadow-2xs hover:border-neutral-900 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 rounded-lg">
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-neutral-900/80 backdrop-blur-xs text-white px-2 py-0.5 rounded text-[8px] font-mono tracking-wider uppercase">
                  {proj.category}
                </div>
                <div className="absolute top-2 right-2 bg-white/90 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-editorial text-xl text-neutral-900">
                    {proj.title}
                  </h3>
                  <p className="text-[10px] tracking-widest text-neutral-400 uppercase mt-0.5">
                    {proj.categoryLabel} · {proj.location} · {proj.year}
                  </p>
                </div>
                <span className="text-xs font-mono text-neutral-400">{proj.area}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
