import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Upload, Play, Pause, ChevronLeft, ChevronRight, Activity, Layers, Sparkles } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/studioData';
import { TeamMember } from '../types';

const FALLBACK_STUDIO_PORTRAIT = '/src/assets/images/team_member_portrait_1791806693789.jpg';

interface CardTiltProps {
  member: TeamMember;
  idx: number;
  activeImage?: string;
  onClick: () => void;
  floatingEnabled?: boolean;
}

const InteractiveMemberCard: React.FC<CardTiltProps> = ({
  member,
  idx,
  activeImage,
  onClick,
  floatingEnabled = true,
}) => {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, active: false });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rx = -(y / (rect.height / 2)) * 12;
    const ry = (x / (rect.width / 2)) * 12;
    setTilt({ rx, ry, active: true });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, active: false });
    setIsHovered(false);
  };

  const floatClass = floatingEnabled ? `animate-float-${(idx % 6) + 1}` : '';

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group cursor-pointer flex flex-col transition-all duration-300 ${floatClass}`}
      style={{
        transform: tilt.active
          ? `perspective(700px) rotateX(${tilt.rx.toFixed(2)}deg) rotateY(${tilt.ry.toFixed(2)}deg) translateY(-6px) scale3d(1.03, 1.03, 1.03)`
          : undefined,
        transformStyle: 'preserve-3d',
        transition: tilt.active ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
    >
      {/* Photo Container with 3D depth and scanning laser effect */}
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-neutral-300 shadow-2xs group-hover:border-neutral-900 transition-colors bg-neutral-950">
        {activeImage ? (
          <img
            src={activeImage}
            alt={member.name}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== FALLBACK_STUDIO_PORTRAIT) {
                target.src = FALLBACK_STUDIO_PORTRAIT;
              }
            }}
            className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-neutral-800 to-neutral-950 flex flex-col items-center justify-center p-4 text-center">
            <div className="w-16 h-16 rounded-full border border-neutral-500/50 flex items-center justify-center text-neutral-300 font-editorial text-xl font-normal tracking-wider bg-black/30 backdrop-blur-xs">
              {member.initials}
            </div>
            <span className="mt-3 text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
              STUDIO ARCHITECT
            </span>
          </div>
        )}

        {/* Ambient Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

        {/* Dynamic Architectural Laser Scanning Beam on Movement/Hover */}
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent pointer-events-none animate-laser-scan opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Cursor light reflection */}
        {tilt.active && (
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/10 to-transparent opacity-80"
            style={{
              transform: `translate(${tilt.ry * 2}px, ${-tilt.rx * 2}px)`,
            }}
          />
        )}

        {/* Active Motion Coordinate Overlay */}
        <div className="absolute top-2 right-2 text-[7px] font-mono text-neutral-400 uppercase tracking-widest px-1.5 py-0.5 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
          ROT: {tilt.rx.toFixed(0)}°·{tilt.ry.toFixed(0)}°
        </div>

        {/* Studio watermark border */}
        <div className="absolute bottom-2 left-2 text-[8px] font-mono tracking-widest text-neutral-300 uppercase drop-shadow-xs">
          ARQ·{member.id.toUpperCase()}
        </div>
      </div>

      {/* Name & Role */}
      <div className="mt-3">
        <h3 className="text-[11px] font-semibold tracking-[0.16em] text-neutral-900 uppercase group-hover:text-neutral-600 transition-colors flex items-center justify-between">
          <span>{member.name}</span>
          <span className="text-[9px] font-mono text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
            0{idx + 1}
          </span>
        </h3>
        <div className="mt-1 text-[9px] tracking-[0.12em] text-neutral-500 uppercase font-medium leading-snug">
          {member.role}
        </div>
      </div>
    </div>
  );
};

export const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [customImages, setCustomImages] = useState<Record<string, string>>({});
  const [urlInput, setUrlInput] = useState('');
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);

  // Movement feature state
  const [viewMode, setViewMode] = useState<'slider' | 'marquee' | 'grid'>('slider');
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const getMemberImage = (member: TeamMember) => {
    return customImages[member.id] || member.image;
  };

  const handleFileUpload = (memberId: string, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setCustomImages((prev) => ({
          ...prev,
          [memberId]: e.target!.result as string,
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const totalMembers = TEAM_MEMBERS.length;
  // In slider mode: max slides depending on view width
  const maxSlide = Math.max(0, totalMembers - 3);

  const handleNext = () => {
    setActiveSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    setProgress(0);
  };

  // Movement timer effect
  useEffect(() => {
    if (!isPlaying || isHovered || viewMode !== 'slider') return;

    const intervalTime = 3200; // 3.2s per step
    const stepTime = 50;
    const progressIncrement = (stepTime / intervalTime) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + progressIncrement;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, viewMode, maxSlide]);

  return (
    <section id="team" className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading and Movement Controls */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] text-neutral-400 uppercase">
              <span>OUR TEAM</span>
              <span className="w-8 h-[1px] bg-neutral-300"></span>
            </div>

            <h2 className="mt-4 font-editorial text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.12] text-neutral-900 text-balance">
              Creative minds.
              <br />
              Collaborative spirit.
            </h2>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setSelectedMember(TEAM_MEMBERS[0])}
                className="group inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-neutral-900 hover:text-neutral-600 uppercase transition-colors cursor-pointer"
              >
                <span>MEET THE TEAM</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* View Mode & Nav Controls */}
            <div className="mt-8 pt-6 border-t border-neutral-200/80">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1 p-0.5 bg-neutral-200/70 border border-neutral-300">
                  <button
                    type="button"
                    onClick={() => {
                      setViewMode('slider');
                      setProgress(0);
                    }}
                    className={`px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase transition-colors cursor-pointer ${
                      viewMode === 'slider'
                        ? 'bg-neutral-900 text-white font-medium shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    SLIDER
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('marquee')}
                    className={`px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase transition-colors cursor-pointer ${
                      viewMode === 'marquee'
                        ? 'bg-neutral-900 text-white font-medium shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    MARQUEE
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    className={`px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase transition-colors cursor-pointer ${
                      viewMode === 'grid'
                        ? 'bg-neutral-900 text-white font-medium shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    3D GRID
                  </button>
                </div>

                {/* Slider Prev / Next Controls */}
                {viewMode === 'slider' && (
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous member"
                      className="w-7 h-7 flex items-center justify-center border border-neutral-300 hover:border-neutral-900 bg-white text-neutral-700 transition-colors cursor-pointer"
                    >
                      <ChevronLeft size={13} />
                    </button>
                    <span className="text-[10px] font-mono text-neutral-500 px-1">
                      0{activeSlide + 1} / 0{maxSlide + 1}
                    </span>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next member"
                      className="w-7 h-7 flex items-center justify-center border border-neutral-300 hover:border-neutral-900 bg-white text-neutral-700 transition-colors cursor-pointer"
                    >
                      <ChevronRight size={13} />
                    </button>
                  </div>
                )}
              </div>

              {/* Progress bar for auto-motion in slider mode */}
              {viewMode === 'slider' && isPlaying && (
                <div className="mt-3 w-full h-[2px] bg-neutral-200 overflow-hidden">
                  <div
                    className="h-full bg-neutral-900 transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              <p className="mt-3 text-[10px] font-mono text-neutral-400">
                Interactive: Hover to pause movement • Move cursor across portraits for 3D tilt
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Movement Display */}
          <div
            className="lg:col-span-8 overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* 1. SLIDER MODE: Smooth horizontal sliding motion */}
            {viewMode === 'slider' && (
              <div className="relative">
                <div
                  className="flex gap-3 sm:gap-4 transition-transform duration-700 ease-out"
                  style={{
                    transform: `translateX(-${activeSlide * 35.5}%)`,
                  }}
                >
                  {TEAM_MEMBERS.map((member, idx) => (
                    <div
                      key={member.id}
                      className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[35%] lg:w-[31.5%]"
                    >
                      <InteractiveMemberCard
                        member={member}
                        idx={idx}
                        activeImage={getMemberImage(member)}
                        onClick={() => setSelectedMember(member)}
                        floatingEnabled={false}
                      />
                    </div>
                  ))}
                </div>

                {/* Fade edges */}
                <div className="hidden lg:block pointer-events-none absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-[#FBFBFA] to-transparent z-10" />
                <div className="hidden lg:block pointer-events-none absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#FBFBFA] to-transparent z-10" />
              </div>
            )}

            {/* 2. CONTINUOUS MARQUEE MODE: Infinite gliding ribbon */}
            {viewMode === 'marquee' && (
              <div className="relative overflow-hidden group/marquee">
                <div className="flex gap-4 animate-marquee-smooth hover:[animation-play-state:paused]">
                  {[...TEAM_MEMBERS, ...TEAM_MEMBERS].map((member, idx) => (
                    <div
                      key={`${member.id}-${idx}`}
                      className="flex-shrink-0 w-44 sm:w-48 lg:w-52"
                    >
                      <InteractiveMemberCard
                        member={member}
                        idx={idx % TEAM_MEMBERS.length}
                        activeImage={getMemberImage(member)}
                        onClick={() => setSelectedMember(member)}
                        floatingEnabled={false}
                      />
                    </div>
                  ))}
                </div>

                {/* Fade edges */}
                <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#FBFBFA] to-transparent z-10" />
                <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#FBFBFA] to-transparent z-10" />
              </div>
            )}

            {/* 3. 3D FLOATING GRID MODE: Staggered breathing float + mouse tilt */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {TEAM_MEMBERS.map((member, idx) => (
                  <InteractiveMemberCard
                    key={member.id}
                    member={member}
                    idx={idx}
                    activeImage={getMemberImage(member)}
                    onClick={() => setSelectedMember(member)}
                    floatingEnabled={true}
                  />
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Team Member Bio Lightbox */}
        {selectedMember && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="bg-[#FBFBFA] max-w-md w-full p-8 shadow-2xl border border-neutral-200 relative animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <span className="text-xs font-mono tracking-widest text-neutral-400">
                  STUDIO PROFILE
                </span>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-neutral-400 hover:text-neutral-900 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getMemberImage(selectedMember) ? (
                    <img
                      src={getMemberImage(selectedMember)}
                      alt={selectedMember.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== FALLBACK_STUDIO_PORTRAIT) {
                          target.src = FALLBACK_STUDIO_PORTRAIT;
                        }
                      }}
                      className="w-12 h-12 rounded-full object-cover border border-neutral-300 grayscale"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-editorial text-lg">
                      {selectedMember.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="font-editorial text-2xl text-neutral-900">
                      {selectedMember.name}
                    </h3>
                    <p className="text-[10px] font-semibold tracking-widest text-neutral-500 uppercase">
                      {selectedMember.role}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsEditingPhoto(!isEditingPhoto)}
                  className="text-[10px] font-mono tracking-widest text-neutral-500 hover:text-neutral-900 uppercase border border-neutral-300 px-2 py-1 transition-colors cursor-pointer"
                >
                  {isEditingPhoto ? 'CANCEL' : 'CHANGE PHOTO'}
                </button>
              </div>

              {isEditingPhoto && (
                <div className="mt-4 p-3 bg-neutral-100 border border-neutral-300 text-xs">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-2">
                    UPDATE PORTRAIT IMAGE
                  </span>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <input
                        type="url"
                        placeholder="Paste image link (e.g. i.pinimg.com/...)"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        className="flex-1 bg-white border border-neutral-300 px-2 py-1 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-neutral-900"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (urlInput.trim()) {
                            setCustomImages((prev) => ({
                              ...prev,
                              [selectedMember.id]: urlInput.trim(),
                            }));
                            setUrlInput('');
                            setIsEditingPhoto(false);
                          }
                        }}
                        className="bg-neutral-900 text-white px-3 py-1 text-[10px] tracking-wider uppercase font-medium hover:bg-neutral-800 cursor-pointer"
                      >
                        SET URL
                      </button>
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-neutral-200">
                      <label className="flex items-center gap-1.5 text-[10px] tracking-wider text-neutral-600 hover:text-neutral-900 uppercase cursor-pointer">
                        <Upload size={12} />
                        <span>Upload photo file</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleFileUpload(selectedMember.id, file);
                              setIsEditingPhoto(false);
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
                <MapPin size={13} className="text-neutral-400" />
                <span>{selectedMember.location}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedMember.discipline}</span>
              </div>

              <p className="mt-4 text-xs text-neutral-600 leading-relaxed bg-neutral-100/60 p-4 border border-neutral-200/50">
                {selectedMember.bio}
              </p>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="bg-neutral-900 text-white text-[10px] tracking-widest uppercase px-4 py-2 font-medium"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
