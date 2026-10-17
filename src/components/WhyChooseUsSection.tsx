import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface WhyChooseUsSectionProps {
  onOpenConnect?: (planOrTopic?: string) => void;
}

interface OrgMember {
  id: string;
  name: string;
  role: string;
  discipline: string;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  image: string;
}

// 9 Exact Organization Chart Members Matching the Uploaded Reference Image
const ORG_MEMBERS: OrgMember[] = [
  // Row 1: Node 1 (Top Left) - Managing Director & Computational Architect
  {
    id: 'm1',
    name: 'Nahom Zewdu',
    role: 'Managing Director & Computational Lead',
    discipline: 'Grasshopper · Parametric Modeling',
    x: 11,
    y: 19,
    image: 'https://i.pinimg.com/736x/c2/31/4f/c2314f485008b1b4699450e2df20d6a0.jpg',
  },
  // Row 1: Node 2 (Top Center-Left) - BIM & Technical Director
  {
    id: 'm2',
    name: 'Henok Bewuket Alemu',
    role: 'BIM Director & Technical Sets Lead',
    discipline: 'Revit LOD 350 · Code Compliance',
    x: 36,
    y: 19,
    image: 'https://i.pinimg.com/736x/e7/8c/c0/e78cc0bbf6518230b93eab4caa36d59a.jpg',
  },
  // Row 2: Node 3 (Upper Right) - Design Lead & 3D Specialist
  {
    id: 'm3',
    name: 'Daniel Tefera',
    role: 'Architectural Designer & 3D Specialist',
    discipline: 'Spatial Concept · Interior Architecture',
    x: 68,
    y: 30,
    image: 'https://i.pinimg.com/736x/ad/d2/71/add271032bfe1adf408e4300ee9a0805.jpg',
  },
  // Row 3: Node 4 (Middle Far-Left) - Landscape & Permit Drawing Lead
  {
    id: 'm4',
    name: 'Abenezer Asfaw',
    role: 'Landscape & Permit Drawing Specialist',
    discipline: 'Site Zoning · Municipal Permit Packages',
    x: 11,
    y: 54,
    image: 'https://i.pinimg.com/736x/16/1c/b6/161cb6c1b1575167b91d4ee3206a1ebe.jpg',
  },
  // Row 3: Node 5 (Middle Center-Left) - Senior Project Architect
  {
    id: 'm5',
    name: 'Yohannes Desta',
    role: 'Senior Project Architect',
    discipline: 'Multi-Disciplinary Model Coordination',
    x: 39,
    y: 54,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
  },
  // Row 3: Node 6 (Middle Center) - Principal Project Delivery Manager
  {
    id: 'm6',
    name: 'Eleni Mulugeta',
    role: 'Principal Project Delivery Manager',
    discipline: 'Project Management · Quality Assurance',
    x: 68,
    y: 54,
    image: 'https://i.pinimg.com/736x/39/cb/46/39cb46857d3645cdf8a15c1f8bff2dad.jpg',
  },
  // Row 3: Node 7 (Middle Far-Right) - Design Operations & Project Manager
  {
    id: 'm7',
    name: 'Arssema Tefera',
    role: 'Design Operations & Project Manager',
    discipline: 'Client Delivery · Milestone Tracking',
    x: 91,
    y: 54,
    image: 'https://i.pinimg.com/736x/e8/1c/5a/e81c5ae7312bad6975529aa53fb40ab0.jpg',
  },
  // Row 4: Node 8 (Bottom Center-Left) - Technical Drafting & Parametric Modeler
  {
    id: 'm8',
    name: 'Biruk Solomon',
    role: 'Technical Drafting & Family Modeler',
    discipline: 'Parametric Families · CD Sets',
    x: 49,
    y: 79,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
  },
  // Row 4: Node 9 (Bottom Center-Right) - Senior 3D CGI & Visualization Artist
  {
    id: 'm9',
    name: 'Robel Girma',
    role: 'Senior 3D CGI & Visualization Artist',
    discipline: 'Lighting Physics · 4K Walkthroughs',
    x: 84,
    y: 79,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80',
  },
];

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onOpenConnect }) => {
  const [hoveredMember, setHoveredMember] = useState<OrgMember | null>(null);

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching "Why Choose Us?" */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#404040] font-sans">
            Why Choose Us?
          </h2>
        </div>

        {/* 2-Column Layout: Left Org Chart Graphic Card | Right 4 Value Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Organization Chart Graphic with Amber Backing Offset */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[540px]">
              
              {/* Amber/Gold Backing Accent Box (Matching reference style) */}
              <div
                className="absolute -top-3.5 -left-3.5 sm:-top-5 sm:-left-5 w-48 sm:w-64 h-56 sm:h-72 bg-[#D6963E] rounded-xl pointer-events-none opacity-90"
                aria-hidden="true"
              />

              {/* Main Card: Organization Chart (Matches the uploaded reference image chart) */}
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-200 text-neutral-900 overflow-hidden">
                
                {/* Header bar: "Organization Chart" + Gold ARQ logo */}
                <div className="flex items-center justify-between pb-3.5 border-b border-neutral-200 mb-3">
                  <div className="text-neutral-900 font-bold tracking-tight text-sm sm:text-base font-sans flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DF9531]" />
                    <span>Organization Chart</span>
                  </div>
                  
                  {/* Gold Architectural Studio Mark */}
                  <div className="flex items-center gap-1.5 text-[#DF9531]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <polygon points="12,3 2,21 7,21 12,11 17,21 22,21" />
                    </svg>
                    <span className="text-xs font-mono font-semibold text-neutral-500 uppercase">ARQ.WORKS</span>
                  </div>
                </div>

                {/* Exact 9-Node Chart Canvas with Clean Dark Vector Connecting Lines */}
                <div className="relative aspect-[1/0.95] w-full">
                  
                  {/* SVG Connecting Vector Lines Matching Uploaded Reference Hierarchy Exactly */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#2B2B2B] stroke-[2.2] fill-none">
                    {/* 1. Line connecting Node 1 and Node 2 horizontally */}
                    <line x1="11%" y1="19%" x2="36%" y2="19%" />

                    {/* 2. Drop line branching down between Node 1 and Node 2 */}
                    <line x1="23.5%" y1="19%" x2="23.5%" y2="41.5%" />

                    {/* 3. Horizontal line to meet Node 3 / Node 6 vertical spine */}
                    <line x1="23.5%" y1="41.5%" x2="68%" y2="41.5%" />

                    {/* 4. Vertical line connecting Node 3 and Node 6 */}
                    <line x1="68%" y1="30%" x2="68%" y2="54%" />

                    {/* 5. Vertical drop line from Node 1 straight down to Node 4 */}
                    <line x1="11%" y1="19%" x2="11%" y2="54%" />

                    {/* 6. Horizontal busbar through Row 3 connecting Node 4 -> Node 5 -> Node 6 -> Node 7 */}
                    <line x1="11%" y1="54%" x2="91%" y2="54%" />

                    {/* 7. Vertical drop line from Node 6 down to Row 4 */}
                    <line x1="68%" y1="54%" x2="68%" y2="79%" />

                    {/* 8. Horizontal line connecting Node 8 and Node 9 */}
                    <line x1="49%" y1="79%" x2="84%" y2="79%" />
                  </svg>

                  {/* 9 Member Circular Portrait Nodes Matching Uploaded Reference Image */}
                  {ORG_MEMBERS.map((member) => {
                    const isHovered = hoveredMember?.id === member.id;
                    return (
                      <div
                        key={member.id}
                        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
                        style={{ left: `${member.x}%`, top: `${member.y}%` }}
                        onMouseEnter={() => setHoveredMember(member)}
                        onMouseLeave={() => setHoveredMember(null)}
                      >
                        {/* Circular Avatar with Dark Accent Border Ring & Grayscale Monochrome Portrait */}
                        <div
                          className={`w-13 h-13 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] rounded-full border-[2.5px] transition-all duration-300 overflow-hidden bg-neutral-100 shadow-md ${
                            isHovered
                              ? 'border-[#DF9531] ring-4 ring-[#DF9531]/30 scale-115 z-30'
                              : 'border-[#2B2B2B] hover:border-[#DF9531]'
                          }`}
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-center grayscale contrast-115 group-hover:grayscale-0 transition-all duration-300"
                            onError={(e) => {
                              // Fallback portrait
                              (e.target as HTMLImageElement).src =
                                '/src/assets/images/team_member_portrait_1791806693789.jpg';
                            }}
                          />
                        </div>

                        {/* Hover Tooltip Card */}
                        {isHovered && (
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2.5 w-52 p-3 rounded-xl bg-neutral-900 border border-[#DF9531] text-white shadow-2xl text-left z-40 animate-in fade-in zoom-in-95 pointer-events-none">
                            <div className="text-xs font-bold text-white leading-tight">
                              {member.name}
                            </div>
                            <div className="text-[11px] text-[#DF9531] font-semibold mt-0.5 leading-tight">
                              {member.role}
                            </div>
                            <div className="text-[10px] text-neutral-400 font-mono mt-1.5 pt-1.5 border-t border-neutral-800">
                              {member.discipline}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Card Caption */}
                <div className="mt-2 pt-3 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span className="flex items-center gap-1.5 text-neutral-800 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>10+ Dedicated Team Experts</span>
                  </span>
                  <span>Addis Ababa · Global Remote</span>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: 4 Features matching the Uploaded Reference Image Exactly */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-9">
            
            {/* 1. Skilled Team */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 font-sans tracking-tight">
                Skilled Team
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-neutral-600 font-normal">
                Our team of hands-on skilled individuals provide a seamless outsourcing architectural design experience for developing your architectural design,{' '}
                <span className="text-rose-500 font-medium">interior design, construction or permit</span>{' '}
                packages. Moreover, our expert architectural design team provide hyperrealistic renderings, Revit drafting, video animations, parametric custom families and pretty much any service related to architectural design.
              </p>
            </div>

            {/* 2. Personalization and Precision */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 font-sans tracking-tight">
                Personalization and Precision
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-neutral-600 font-normal">
                We make sure that the design and concept is personalized according to your requirements. Once it has been finalized, the drafting and visualization stage ensures high precision and detail.
              </p>
            </div>

            {/* 3. Flexibility */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 font-sans tracking-tight">
                Flexibility
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-neutral-600 font-normal">
                This is what sets <strong className="text-neutral-900 font-semibold">{STUDIO_INFO.name}</strong> apart from all other architectural design outsourcing services, as it is a single hub for all your various architecture design outsourcing requirements.
              </p>
            </div>

            {/* 4. Affordability */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 font-sans tracking-tight">
                Affordability
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-neutral-600 font-normal">
                We offer a single hub for all your various architecture services requirements at prices as low as $1895 per month and $10 per hour.
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenConnect && onOpenConnect('Free 3-Day Trial — Why Choose Us')}
                className="px-6 py-3 bg-[#DF9531] hover:bg-[#D08726] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl shadow-md transition-all hover:shadow-lg cursor-pointer inline-flex items-center gap-2"
              >
                <span>GET STARTED WITH OUR SKILLED TEAM</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
