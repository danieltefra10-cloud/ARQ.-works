import React from 'react';

/**
 * Graphic 1: Consultation & Discovery
 * Architectural compass calibration ring, dual client-architect briefing nodes,
 * radiant gold core, and dynamic crosshair reticle.
 */
export const ConsultationGraphic: React.FC = () => {
  return (
    <div className="relative w-24 h-24 sm:w-26 sm:h-26 flex items-center justify-center">
      {/* Ambient Glow Halo */}
      <div className="absolute inset-0 rounded-full bg-[#DF9531]/20 blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

      {/* SVG Graphic */}
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md overflow-visible">
        <defs>
          <linearGradient id="consultGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5B958" />
            <stop offset="60%" stopColor="#DF9531" />
            <stop offset="100%" stopColor="#C07718" />
          </linearGradient>
          <linearGradient id="consultDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#333333" />
            <stop offset="100%" stopColor="#1A1A1A" />
          </linearGradient>
          <filter id="consultShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#DF9531" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Orbiting Calibration Ring with Dashed Blueprint Compass */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#DF9531"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          className="opacity-40 group-hover:opacity-90 group-hover:rotate-90 transition-all duration-700 origin-center"
        />

        {/* Outer Corner Cardinal Alignment Ticks */}
        <line x1="50" y1="2" x2="50" y2="7" stroke="#DF9531" strokeWidth="2" strokeLinecap="round" />
        <line x1="50" y1="93" x2="50" y2="98" stroke="#DF9531" strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="50" x2="7" y2="50" stroke="#DF9531" strokeWidth="2" strokeLinecap="round" />
        <line x1="93" y1="50" x2="98" y2="50" stroke="#DF9531" strokeWidth="2" strokeLinecap="round" />

        {/* Golden Radiant Crescent / Backdrop Shield */}
        <circle
          cx="54"
          cy="46"
          r="34"
          fill="url(#consultGold)"
          filter="url(#consultShadow)"
          className="transition-transform duration-500 group-hover:scale-105 origin-center"
        />

        {/* Crisp White Architectural Inset Plate */}
        <circle
          cx="46"
          cy="52"
          r="33"
          fill="#FFFFFF"
          stroke="#EAEAEA"
          strokeWidth="1.5"
          className="transition-all duration-500 group-hover:stroke-[#DF9531]/40"
        />

        {/* Subtle Blueprint Radial Grid Lines */}
        <circle cx="46" cy="52" r="24" fill="none" stroke="#F0F0EB" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="22" y1="52" x2="70" y2="52" stroke="#E5E5DF" strokeWidth="1" strokeDasharray="1.5 2" />
        <line x1="46" y1="28" x2="46" y2="76" stroke="#E5E5DF" strokeWidth="1" strokeDasharray="1.5 2" />

        {/* Center Architectural Discovery / Consultation Icon Graphic */}
        <g className="text-[#2B2B2B] transition-transform duration-500 group-hover:scale-110 origin-[46px_52px]">
          {/* Client Node (Left) */}
          <circle cx="37" cy="46" r="5" fill="#2B2B2B" className="group-hover:fill-[#DF9531] transition-colors duration-300" />
          <path
            d="M29 60 C29 54 33 53 37 53 C41 53 45 54 45 60"
            fill="none"
            stroke="#2B2B2B"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="group-hover:stroke-[#DF9531] transition-colors duration-300"
          />

          {/* Lead Architect Node (Right, elevated) */}
          <circle cx="53" cy="42" r="5.5" fill="url(#consultGold)" />
          <path
            d="M45 57 C45 50 49 49 53 49 C57 49 61 50 61 57"
            fill="none"
            stroke="#DF9531"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Synced Discussion Soundwave / Connection Beam */}
          <path
            d="M41 45 C43 43 47 43 49 45"
            fill="none"
            stroke="#DF9531"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="animate-pulse"
          />
          <path
            d="M39 42 C43 39 47 39 51 42"
            fill="none"
            stroke="#DF9531"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 2"
            className="opacity-70 group-hover:opacity-100"
          />
        </g>

        {/* Small Golden Sparkle in Top Corner */}
        <polygon
          points="80,18 82,23 87,25 82,27 80,32 78,27 73,25 78,23"
          fill="#DF9531"
          className="opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 origin-[80px_25px]"
        />
      </svg>
    </div>
  );
};

/**
 * Graphic 2: Workflow
 * Parametric design nodes, agile Slack/Revit sync vectors,
 * glowing central ideation core, and energetic orbital pathways.
 */
export const WorkflowGraphic: React.FC = () => {
  return (
    <div className="relative w-24 h-24 sm:w-26 sm:h-26 flex items-center justify-center">
      {/* Ambient Glow Halo */}
      <div className="absolute inset-0 rounded-full bg-[#DF9531]/20 blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

      {/* SVG Graphic */}
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md overflow-visible">
        <defs>
          <linearGradient id="flowGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5B958" />
            <stop offset="60%" stopColor="#DF9531" />
            <stop offset="100%" stopColor="#C07718" />
          </linearGradient>
          <filter id="flowShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#DF9531" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Orbiting Data Ring with 3 Satellite Orbit Nodes */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#DF9531"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          className="opacity-40 group-hover:opacity-90 group-hover:-rotate-90 transition-all duration-700 origin-center"
        />

        {/* Orbit Satellite Nodes */}
        <circle cx="88" cy="30" r="3" fill="#DF9531" className="group-hover:scale-125 transition-transform duration-300 origin-[88px_30px]" />
        <circle cx="15" cy="65" r="2.5" fill="#DF9531" className="group-hover:scale-125 transition-transform duration-300 origin-[15px_65px]" />
        <circle cx="65" cy="92" r="2.5" fill="#DF9531" className="group-hover:scale-125 transition-transform duration-300 origin-[65px_92px]" />

        {/* Golden Crescent Accent */}
        <circle
          cx="54"
          cy="46"
          r="34"
          fill="url(#flowGold)"
          filter="url(#flowShadow)"
          className="transition-transform duration-500 group-hover:scale-105 origin-center"
        />

        {/* Crisp White Base Plate */}
        <circle
          cx="46"
          cy="52"
          r="33"
          fill="#FFFFFF"
          stroke="#EAEAEA"
          strokeWidth="1.5"
          className="transition-all duration-500 group-hover:stroke-[#DF9531]/40"
        />

        {/* Workflow Circuit / Node Network Lines */}
        <g className="text-[#2B2B2B] transition-transform duration-500 group-hover:scale-110 origin-[46px_52px]">
          {/* Node Connecting Pathways */}
          <path
            d="M34 58 L46 44 L58 58"
            fill="none"
            stroke="#DF9531"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-[#C07718] transition-colors"
          />
          <path
            d="M46 44 L46 64"
            fill="none"
            stroke="#2B2B2B"
            strokeWidth="1.8"
            strokeDasharray="2 2"
            className="group-hover:stroke-[#DF9531] transition-colors"
          />

          {/* Top Ideation Lightbulb Node */}
          <circle cx="46" cy="40" r="7.5" fill="url(#flowGold)" />
          {/* Filament */}
          <path
            d="M43 40 L45 37 L47 37 L49 40"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="44" y1="42" x2="48" y2="42" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />

          {/* Left Collaboration Node (Slack / Team) */}
          <circle cx="34" cy="58" r="5" fill="#2B2B2B" className="group-hover:fill-[#DF9531] transition-colors duration-300" />
          <circle cx="34" cy="58" r="2" fill="#FFFFFF" />

          {/* Right BIM & CAD Node (Revit Stream) */}
          <circle cx="58" cy="58" r="5" fill="#2B2B2B" className="group-hover:fill-[#DF9531] transition-colors duration-300" />
          <circle cx="58" cy="58" r="2" fill="#FFFFFF" />

          {/* Bottom Feedback Loop Arc */}
          <path
            d="M36 65 C41 69 51 69 56 65"
            fill="none"
            stroke="#DF9531"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="2 2"
            className="group-hover:stroke-solid group-hover:opacity-100 opacity-60"
          />
        </g>

        {/* Small Golden Sparkle */}
        <polygon
          points="82,20 84,24 88,26 84,28 82,32 80,28 76,26 80,24"
          fill="#DF9531"
          className="opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 origin-[82px_26px]"
        />
      </svg>
    </div>
  );
};

/**
 * Graphic 3: Project Management
 * Isometric ClickUp/Kanban board, milestone progress checklist,
 * precision sprint columns, and floating elevated task card.
 */
export const ProjectManagementGraphic: React.FC = () => {
  return (
    <div className="relative w-24 h-24 sm:w-26 sm:h-26 flex items-center justify-center">
      {/* Ambient Glow Halo */}
      <div className="absolute inset-0 rounded-full bg-[#DF9531]/20 blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

      {/* SVG Graphic */}
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md overflow-visible">
        <defs>
          <linearGradient id="pmGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5B958" />
            <stop offset="60%" stopColor="#DF9531" />
            <stop offset="100%" stopColor="#C07718" />
          </linearGradient>
          <filter id="pmShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#DF9531" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Orbiting Blueprint Ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#DF9531"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          className="opacity-40 group-hover:opacity-90 group-hover:rotate-45 transition-all duration-700 origin-center"
        />

        {/* Golden Crescent Accent */}
        <circle
          cx="54"
          cy="46"
          r="34"
          fill="url(#pmGold)"
          filter="url(#pmShadow)"
          className="transition-transform duration-500 group-hover:scale-105 origin-center"
        />

        {/* Crisp White Base Plate */}
        <circle
          cx="46"
          cy="52"
          r="33"
          fill="#FFFFFF"
          stroke="#EAEAEA"
          strokeWidth="1.5"
          className="transition-all duration-500 group-hover:stroke-[#DF9531]/40"
        />

        {/* Kanban Board Layout */}
        <g className="transition-transform duration-500 group-hover:scale-110 origin-[46px_52px]">
          {/* Column 1: Backlog / Sprint Prep */}
          <rect
            x="30"
            y="39"
            width="8"
            height="26"
            rx="2.5"
            fill="#F4F4F2"
            stroke="#D8D8D2"
            strokeWidth="1"
            className="group-hover:stroke-[#DF9531]/60 transition-colors"
          />
          {/* Card in Col 1 */}
          <rect x="31.5" y="42" width="5" height="5" rx="1" fill="#A8A8A0" />
          <rect x="31.5" y="49" width="5" height="4" rx="1" fill="#D0D0C8" />

          {/* Column 2: In Progress (Elevated & Highlighted) */}
          <rect
            x="41"
            y="36"
            width="10"
            height="29"
            rx="3"
            fill="#FFFFFF"
            stroke="#DF9531"
            strokeWidth="1.5"
            className="drop-shadow-sm group-hover:-translate-y-1 transition-transform duration-300"
          />
          {/* Top Header Bar */}
          <rect x="42.5" y="38" width="7" height="2.5" rx="1" fill="url(#pmGold)" />
          {/* Active Task Card with Gold Accent */}
          <rect
            x="42.5"
            y="42"
            width="7"
            height="6"
            rx="1.5"
            fill="#2B2B2B"
            className="group-hover:fill-[#DF9531] transition-colors"
          />
          <rect x="42.5" y="50" width="7" height="5" rx="1.5" fill="#F4F4F2" />
          <rect x="42.5" y="57" width="7" height="5" rx="1.5" fill="#F4F4F2" />

          {/* Column 3: Delivered & Approved */}
          <rect
            x="54"
            y="39"
            width="8"
            height="26"
            rx="2.5"
            fill="#F4F4F2"
            stroke="#D8D8D2"
            strokeWidth="1"
            className="group-hover:stroke-[#DF9531]/60 transition-colors"
          />
          {/* Completed Checkmark Badge */}
          <circle cx="58" cy="45" r="3" fill="#10B981" />
          <path
            d="M56.8 45 L57.8 46 L59.4 44"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="55.5" y="50" width="5" height="5" rx="1" fill="#D0D0C8" />

          {/* Milestone Progress Bar on Bottom */}
          <rect x="30" y="68" width="32" height="3" rx="1.5" fill="#EAEAEA" />
          <rect
            x="30"
            y="68"
            width="22"
            height="3"
            rx="1.5"
            fill="url(#pmGold)"
            className="group-hover:w-[30px] transition-all duration-500"
          />
        </g>

        {/* Small Golden Sparkle */}
        <polygon
          points="81,19 83,23 87,25 83,27 81,31 79,27 75,25 79,23"
          fill="#DF9531"
          className="opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 origin-[81px_25px]"
        />
      </svg>
    </div>
  );
};

/**
 * Graphic 4: Final Review
 * 3D isometric architectural tower facade, certified quality seal,
 * glowing inspection beam, and gold approval star.
 */
export const FinalReviewGraphic: React.FC = () => {
  return (
    <div className="relative w-24 h-24 sm:w-26 sm:h-26 flex items-center justify-center">
      {/* Ambient Glow Halo */}
      <div className="absolute inset-0 rounded-full bg-[#DF9531]/20 blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

      {/* SVG Graphic */}
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md overflow-visible">
        <defs>
          <linearGradient id="revGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5B958" />
            <stop offset="60%" stopColor="#DF9531" />
            <stop offset="100%" stopColor="#C07718" />
          </linearGradient>
          <filter id="revShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#DF9531" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Orbiting Inspection Calibration Ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#DF9531"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          className="opacity-40 group-hover:opacity-90 group-hover:rotate-180 transition-all duration-700 origin-center"
        />

        {/* Golden Crescent Accent */}
        <circle
          cx="54"
          cy="46"
          r="34"
          fill="url(#revGold)"
          filter="url(#revShadow)"
          className="transition-transform duration-500 group-hover:scale-105 origin-center"
        />

        {/* Crisp White Base Plate */}
        <circle
          cx="46"
          cy="52"
          r="33"
          fill="#FFFFFF"
          stroke="#EAEAEA"
          strokeWidth="1.5"
          className="transition-all duration-500 group-hover:stroke-[#DF9531]/40"
        />

        {/* 3D Isometric Architectural Facade & Approval Seal */}
        <g className="transition-transform duration-500 group-hover:scale-110 origin-[46px_52px]">
          {/* Isometric Building Left Face (Darker) */}
          <polygon
            points="42,35 42,65 31,59 31,30"
            fill="#333333"
            className="group-hover:fill-[#222222] transition-colors"
          />
          {/* Windows Left */}
          <line x1="34" y1="37" x2="39" y2="40" stroke="#DF9531" strokeWidth="1.2" className="opacity-80" />
          <line x1="34" y1="44" x2="39" y2="47" stroke="#DF9531" strokeWidth="1.2" className="opacity-80" />
          <line x1="34" y1="51" x2="39" y2="54" stroke="#DF9531" strokeWidth="1.2" className="opacity-80" />

          {/* Isometric Building Right Face (Lighter, Lit by Gold Sun) */}
          <polygon
            points="42,35 55,42 55,71 42,65"
            fill="#555555"
            className="group-hover:fill-[#3D3D3D] transition-colors"
          />
          {/* Windows Right */}
          <line x1="45" y1="44" x2="52" y2="48" stroke="#FFE4A0" strokeWidth="1.2" />
          <line x1="45" y1="51" x2="52" y2="55" stroke="#FFE4A0" strokeWidth="1.2" />
          <line x1="45" y1="58" x2="52" y2="62" stroke="#FFE4A0" strokeWidth="1.2" />

          {/* Roof Cap (Flat isometric top) */}
          <polygon
            points="31,30 42,24 55,36 42,35"
            fill="url(#revGold)"
          />

          {/* Certified Seal Badge (Floating Front-Right) */}
          <g className="drop-shadow-md group-hover:scale-115 transition-transform duration-300 origin-[56px_56px]">
            {/* Outer Serrated / Circular Seal Ring */}
            <circle cx="56" cy="56" r="10.5" fill="#DF9531" />
            <circle cx="56" cy="56" r="8.5" fill="#FFFFFF" />

            {/* Checkmark in Seal */}
            <path
              d="M52.5 56 L55 58.5 L60 53"
              fill="none"
              stroke="#DF9531"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>

        {/* Small Golden Star */}
        <polygon
          points="81,19 83,23 87,25 83,27 81,31 79,27 75,25 79,23"
          fill="#DF9531"
          className="opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 origin-[81px_25px]"
        />
      </svg>
    </div>
  );
};
