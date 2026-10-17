import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  User,
  Calendar,
  Users,
  Check,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  Layers,
  Box,
  Compass,
  Building2,
  PhoneCall,
  Laptop,
} from 'lucide-react';
import { ServiceItem, Project } from '../types';
import { SERVICES, PROJECTS, STUDIO_INFO } from '../data/studioData';
import { ServiceIcon } from './icons/ServiceIcons';
import { WhyChooseUsSection } from './WhyChooseUsSection';
import { ServiceBottomSections } from './ServiceBottomSections';
import { CountUpNumber } from './CountUpNumber';
import { ScrollReveal } from './ScrollReveal';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenConnect: (planOrService?: string) => void;
  onSelectProject?: (project: Project) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onSelectService,
  onOpenConnect,
  onSelectProject,
}) => {
  const [selectedSubService, setSelectedSubService] = useState<number>(0);

  // Scroll to top when service page opens or switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service.id]);

  // Find showcase projects related to this service
  const relatedProjects = PROJECTS.filter(
    (p) =>
      p.serviceId === service.id ||
      p.serviceNumber === service.number ||
      p.category.toLowerCase().includes(service.title.toLowerCase().split(' ')[0])
  ).slice(0, 3);

  // Fallback to latest 3 projects if no direct match
  const displayProjects = relatedProjects.length > 0 ? relatedProjects : PROJECTS.slice(0, 3);

  // Dynamic tailored description based on current service
  const getTailoredLeadParagraph = () => {
    switch (service.id) {
      case 'architecture-design':
        return (
          <>
            <strong className="text-red-500 font-semibold">{STUDIO_INFO.name}</strong> provides
            tailored architectural design outsourcing services particular to the requirements of the
            client and business, be it architectural designers, interior designers, contractors,
            builders, real estate developers or business owners. Our team of hands-on skilled
            individuals provide a seamless outsourcing architectural design experience for
            developing your architectural, interior, construction or permit packages. Moreover, our
            expert architectural design team provide hyperrealistic renderings,{' '}
            <span className="text-red-500 font-medium">Revit drafting</span>, video animations,
            parametric custom families and pretty much any service related to architectural design.
          </>
        );
      case 'landscape-architecture':
        return (
          <>
            <strong className="text-red-500 font-semibold">{STUDIO_INFO.name}</strong> provides
            world-class landscape architectural design and documentation outsourcing. We partner
            closely with landscape architects, civil developers, urban planners, and private
            estates. Our team creates comprehensive hardscape construction details, terrain grading,
            biophilic planting schedules, and photorealistic outdoor visualization, ensuring every
            exterior environment balances ecology with timeless aesthetics.
          </>
        );
      case 'revit-drafting-outsourcing':
        return (
          <>
            <strong className="text-red-500 font-semibold">{STUDIO_INFO.name}</strong> delivers
            rigorous Revit BIM modeling and drafting outsourcing tailored to AIA, British, European,
            and Australian standards. From point-cloud and CAD-to-Revit conversions to LOD 350
            multidisciplinary clash coordination and parametric family authoring, our BIM
            specialists integrate directly into your firm's production workflow overnight.
          </>
        );
      case 'construction-permit-sets':
        return (
          <>
            <strong className="text-red-500 font-semibold">{STUDIO_INFO.name}</strong> produces
            comprehensive, building-code compliant construction documentation and permit sets ready
            for municipal submission. We prepare detailed floor plans, exterior elevations, building
            cross-sections, wall assemblies, door/window schedules, and life safety plans with
            rigorous accuracy so your projects obtain swift approval without delays.
          </>
        );
      case '3d-modeling-rendering':
        return (
          <>
            <strong className="text-red-500 font-semibold">{STUDIO_INFO.name}</strong> transforms 2D
            drawings and massing models into breathtaking, hyperrealistic 3D exterior and interior
            visualizations. Using physically-accurate ray tracing, natural lighting simulation, and
            curated materials, our CGI visualizers craft striking visual narratives that captivate
            clients, investors, and regulatory review boards.
          </>
        );
      case '3d-architectural-animation':
        return (
          <>
            <strong className="text-red-500 font-semibold">{STUDIO_INFO.name}</strong> creates
            cinematic 4K architectural walkthroughs, drone fly-through simulations, and solar study
            transit animations. We bring unbuilt architecture into vivid motion, complete with
            ambient lighting, foliage dynamics, and post-production color grading designed to sell
            luxury developments and institutional master plans.
          </>
        );
      default:
        return (
          <>
            <strong className="text-red-500 font-semibold">{STUDIO_INFO.name}</strong> provides
            high-end architectural outsourcing services tailored to the requirements of global
            practices, developers, and designers.
          </>
        );
    }
  };

  // 6 Comprehensive sub-service breakdown items
  const comprehensiveFeatures = [
    {
      title: 'Schematic Design & Spatial Planning',
      desc: 'Conceptual volume studies, functional zoning, circulation flows, and preliminary massing diagrams aligned with client brief and local zoning codes.',
      icon: Compass,
      tag: 'PHASE 01',
    },
    {
      title: 'Design Development & Detail Assemblies',
      desc: 'Refining materiality, structural grid coordination, custom millwork details, ceiling plans, and interior elevation layouts.',
      icon: Layers,
      tag: 'PHASE 02',
    },
    {
      title: 'Construction & Municipal Permit Sets',
      desc: 'Full regulatory drawing packages including code compliance matrices, wall sections, window/door schedules, and life safety egress diagrams.',
      icon: FileText,
      tag: 'PHASE 03',
    },
    {
      title: 'Revit BIM LOD 200–350 & Custom Families',
      desc: 'Information-rich building models with embedded parameters, material quantities, and parametric custom components tailored to your office standards.',
      icon: Box,
      tag: 'BIM TECH',
    },
    {
      title: 'Hyperrealistic 3D CGI Visualizations',
      desc: 'Magazine-grade interior and exterior architectural renderings with physically calibrated dusk, golden hour, and overcast atmospheric lighting.',
      icon: Sparkles,
      tag: 'VISUAL CGI',
    },
    {
      title: 'Fast Overnight Turnaround & Quality Control',
      desc: 'Seamless overnight drafting delivery leveraging global time zone advantages with multi-tier principal architect quality review.',
      icon: Clock,
      tag: 'SLA SPEED',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white animate-in fade-in duration-300">
      
      {/* 1. TOP STICKY HEADER WITH BREADCRUMB & SWITCHER */}
      <nav className="sticky top-0 z-40 bg-[#FBFBFA]/90 backdrop-blur-md border-b border-neutral-200 shadow-2xs">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Back button + Brand */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={onBack}
              type="button"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-neutral-700 bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-950 transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">BACK TO SERVICES</span>
              <span className="sm:hidden">BACK</span>
            </button>

            <div className="h-4 w-[1px] bg-neutral-300 hidden sm:block" />

            <div className="text-xs font-mono tracking-widest text-neutral-400 hidden md:block uppercase">
              SERVICES / <span className="text-neutral-900 font-semibold">{service.title}</span>
            </div>
          </div>

          {/* Quick Service Switcher & CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden lg:flex items-center gap-1 bg-neutral-100 p-1 rounded-lg">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onSelectService(s)}
                  className={`px-2.5 py-1 text-[11px] font-medium tracking-wide rounded-md transition-colors cursor-pointer ${
                    s.id === service.id
                      ? 'bg-white text-neutral-950 font-semibold shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {s.number} {s.title.split(' ')[0]}
                </button>
              ))}
            </div>

            <button
              onClick={() => onOpenConnect(`${service.title} ($10/hr)`)}
              type="button"
              className="px-4 py-2 bg-[#DF9531] hover:bg-[#D08726] text-white text-xs font-semibold tracking-wider uppercase rounded-lg shadow-sm transition-all hover:shadow-md cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <span>INQUIRE NOW</span>
              <span className="text-[10px] opacity-90 hidden sm:inline">($10/HR)</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO HEADER (MATCHING REFERENCE IMAGE TOP) */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center text-center overflow-hidden bg-neutral-950">
        
        {/* Background Image: Night Architecture with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/service_hero_banner_bg_1792055299660.jpg"
            alt={service.title}
            className="w-full h-full object-cover object-center brightness-60 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#121212]/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          
          {/* Main Title matching "Architecture Design Services" in golden amber */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#DF9531] font-sans drop-shadow-md">
            {service.title}
          </h1>

          {/* Subtitle matching reference */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-neutral-200 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-xs">
            We offer a broad range of architectural design services, delivered by a talented team of highly qualified experts.
          </p>

          {/* Golden Pill indicator matching reference */}
          <div className="mt-8 flex justify-center">
            <div className="w-14 h-7 rounded-full border-2 border-[#DF9531] flex items-center justify-center p-1 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#DF9531] animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: OUTSOURCE ARCHITECTURAL SERVICES TAILORED TO YOUR NEEDS (MATCHING REFERENCE IMAGE) */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Amber Underline, Tailored Text */}
            <div className="lg:col-span-7">
              
              {/* Heading with Underline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-neutral-800 tracking-tight leading-tight">
                Outsource Architectural
                <br />
                <span className="relative inline-block mt-1">
                  Services Tailored to Your Needs
                  {/* Amber underline bar matching the reference image */}
                  <span className="absolute -bottom-2.5 left-0 w-32 h-1 bg-[#DF9531] rounded-full" />
                </span>
              </h2>

              {/* Paragraph Text Matching the Reference Screenshot */}
              <div className="mt-8 text-[14px] sm:text-[15px] leading-relaxed text-neutral-600 font-normal space-y-4">
                <p>{getTailoredLeadParagraph()}</p>
              </div>

              {/* Value Highlights Pill Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-neutral-200/80">
                <div className="flex items-center gap-2.5 text-xs text-neutral-800 font-medium">
                  <CheckCircle2 size={16} className="text-[#DF9531] shrink-0" />
                  <span>Unbeatable rate: From <strong>$10 / hour</strong> only</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-800 font-medium">
                  <CheckCircle2 size={16} className="text-[#DF9531] shrink-0" />
                  <span>Free 3-Day Risk-Free Trial Period</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-800 font-medium">
                  <CheckCircle2 size={16} className="text-[#DF9531] shrink-0" />
                  <span>12–24h Overnight Delivery SLA</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-800 font-medium">
                  <CheckCircle2 size={16} className="text-[#DF9531] shrink-0" />
                  <span>AIA & International Standard Compliance</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenConnect(`Outsourcing ${service.title}`)}
                  className="px-6 py-3 bg-[#DF9531] hover:bg-[#D08726] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>START FREE 3-DAY TRIAL</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('comprehensive-services');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3 bg-white hover:bg-neutral-100 text-neutral-700 text-xs sm:text-sm font-medium tracking-wide rounded-xl border border-neutral-300 transition-colors cursor-pointer"
                >
                  Explore Full Scope
                </button>
              </div>

            </div>

            {/* Right Column: Architectural Building Showcase Image (Matching the reference screenshot) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/90 group">
                <img
                  src="/src/assets/images/service_architecture_showcase_1792055283096.jpg"
                  alt="Architectural Building Outsourcing Showcase"
                  className="w-full aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle ambient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Seal Badge in bottom corner */}
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-[10px] font-mono tracking-widest text-[#DF9531] font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#DF9531] animate-ping" />
                  <span>ARQ.WORKS VERIFIED</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* HORIZONTAL DIVIDER (MATCHING REFERENCE IMAGE) */}
      <div className="max-w-6xl mx-auto px-4">
        <hr className="border-t border-neutral-200" />
      </div>

      {/* 4. SECTION 2: ACHIEVEMENTS THROUGH THE YEARS (MATCHING REFERENCE IMAGE EXACTLY) */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Title matching "Achievements Through The Years" */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center text-[#2B2B2B]">
            <span className="text-[#DF9531]">Achievements</span> Through The Years
          </h2>

          {/* 4 Metrics Columns with Vertical Dividing Lines & Scroll Count-Up Animation */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 items-center">
            
            {/* Column 1: Completed Projects */}
            <div className="group cursor-default flex flex-col items-center text-center p-4 sm:p-6 lg:border-r border-neutral-300 hover:bg-neutral-50/60 rounded-2xl transition-all duration-300">
              {/* Outline Document Icon */}
              <div className="text-[#DF9531] mb-3 transform group-hover:scale-110 transition-transform duration-300">
                <FileText size={38} strokeWidth={1.5} />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 group-hover:text-[#DF9531] font-sans tracking-tight transition-colors duration-300">
                <CountUpNumber end={250} suffix="+" duration={1800} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-neutral-500 font-medium">
                Completed Projects
              </div>
            </div>

            {/* Column 2: Team of Experts */}
            <div className="group cursor-default flex flex-col items-center text-center p-4 sm:p-6 lg:border-r border-neutral-300 hover:bg-neutral-50/60 rounded-2xl transition-all duration-300">
              {/* Outline User Icon */}
              <div className="text-[#DF9531] mb-3 transform group-hover:scale-110 transition-transform duration-300">
                <User size={38} strokeWidth={1.5} />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 group-hover:text-[#DF9531] font-sans tracking-tight transition-colors duration-300">
                <CountUpNumber end={10} suffix="+" duration={1600} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-neutral-500 font-medium">
                Team of Experts
              </div>
            </div>

            {/* Column 3: Years of Combined Experience */}
            <div className="group cursor-default flex flex-col items-center text-center p-4 sm:p-6 lg:border-r border-neutral-300 border-t lg:border-t-0 border-neutral-200 hover:bg-neutral-50/60 rounded-2xl transition-all duration-300">
              {/* Outline Calendar Icon */}
              <div className="text-[#DF9531] mb-3 transform group-hover:scale-110 transition-transform duration-300">
                <Calendar size={38} strokeWidth={1.5} />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 group-hover:text-[#DF9531] font-sans tracking-tight transition-colors duration-300">
                <CountUpNumber end={4} suffix="+" duration={1400} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-neutral-500 font-medium">
                Years of combined experience
              </div>
            </div>

            {/* Column 4: Satisfied Clients */}
            <div className="group cursor-default flex flex-col items-center text-center p-4 sm:p-6 border-t lg:border-t-0 border-neutral-200 hover:bg-neutral-50/60 rounded-2xl transition-all duration-300">
              {/* Outline Happy Clients Icon */}
              <div className="text-[#DF9531] mb-3 transform group-hover:scale-110 transition-transform duration-300">
                <Users size={38} strokeWidth={1.5} />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 group-hover:text-[#DF9531] font-sans tracking-tight transition-colors duration-300">
                <CountUpNumber end={75} suffix="+" duration={1800} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-neutral-500 font-medium">
                Satisfied Clients
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* HORIZONTAL DIVIDER (MATCHING REFERENCE IMAGE) */}
      <div className="max-w-6xl mx-auto px-4">
        <hr className="border-t border-neutral-200" />
      </div>

      {/* 5. SECTION 3: OUR COMPREHENSIVE ARCHITECTURAL DESIGN SERVICES */}
      <ScrollReveal>
        <section id="comprehensive-services" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Title matching "Our Comprehensive Architectural Design Services" */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2B2B2B] leading-tight">
              Our Comprehensive Architectural
              <span className="text-[#DF9531] block mt-1">Design Services</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Every phase of architectural production handled with technical precision, adherence to international codes, and seamless communication.
            </p>
          </div>

          {/* 6 Comprehensive Service Features Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {comprehensiveFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-xs hover:shadow-md hover:border-[#DF9531]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono tracking-widest text-[#DF9531] font-semibold bg-[#DF9531]/10 px-2.5 py-1 rounded-md">
                        {feat.tag}
                      </span>
                      <Icon size={22} className="text-[#DF9531]" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 font-sans tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
                    <span>Included in $10/hr scope</span>
                    <Check size={15} className="text-emerald-600" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deliverables Checklist Specific to this Service */}
          <div className="mt-14 bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#DF9531] uppercase font-semibold">
                  SERVICE NO. {service.number} SPECIFIC SCOPE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                  Standard Deliverables for {service.title}
                </h3>
              </div>
              <div className="text-xs font-mono text-neutral-500">
                RATE: <strong className="text-neutral-900 font-bold">$10 / HOUR</strong>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {service.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FBFBFA] border border-neutral-200 text-xs text-neutral-800"
                >
                  <Check size={16} className="text-[#DF9531] shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Software & Technical Stacks */}
          <div className="mt-10 p-6 sm:p-8 bg-neutral-900 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[11px] font-mono tracking-widest text-[#DF9531] uppercase">
                COMPATIBILITY & WORKFLOWS
              </div>
              <h4 className="text-lg sm:text-xl font-bold mt-1 text-white">
                We Work In Your Native Software & Standards
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                Autodesk Revit, AutoCAD, Rhino 3D, SketchUp, 3ds Max, V-Ray, Corona, Enscape, Lumion, and Adobe Suite.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenConnect(`${service.title} Consultation`)}
              className="px-5 py-3 bg-[#DF9531] hover:bg-[#D08726] text-white text-xs font-semibold tracking-wider uppercase rounded-xl shrink-0 transition-colors cursor-pointer"
            >
              DISCUSS YOUR TOOLSET
            </button>
          </div>

        </section>
      </ScrollReveal>

      {/* WHY CHOOSE US SECTION (MATCHING UPLOADED REFERENCE SCREENSHOT) */}
      <ScrollReveal>
        <WhyChooseUsSection onOpenConnect={onOpenConnect} />
      </ScrollReveal>

      {/* 3 BOTTOM SECTIONS MATCHING UPLOADED REFERENCE SCREENSHOT:
          1. Our Approach (Consultation & Discovery, Workflow, Project Management, Final Review)
          2. Featured Projects (3 Projects side-by-side with gold seals & 6 pagination dots)
          3. What others say (Testimonials with top-right quote bubble badge, 5 stars, LinkedIn/Upwork)
          4. Bottom 3-Day Free Trial CTA */}
      <ServiceBottomSections
        service={service}
        onSelectProject={onSelectProject}
        onOpenConnect={onOpenConnect}
        onBack={onBack}
      />

    </div>
  );
};
