/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { SelectedProjects } from './components/SelectedProjects';
import { PackagesSection } from './components/PackagesSection';
import { Services } from './components/Services';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { OutsourcingPricing } from './components/OutsourcingPricing';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Team } from './components/Team';
import { ContactSection } from './components/ContactSection';
import { AreasWeServe } from './components/AreasWeServe';
import { ScrollReveal } from './components/ScrollReveal';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ConnectDrawer } from './components/ConnectDrawer';
import { JournalModal } from './components/JournalModal';
import { AllProjectsModal } from './components/AllProjectsModal';
import { Project, ServiceItem } from './types';
import { PROJECTS, SERVICES } from './data/studioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  // Deep linking and browser back/forward support for service pages
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/service/')) {
        const serviceId = hash.replace('#/service/', '');
        const matched = SERVICES.find((s) => s.id === serviceId);
        if (matched) {
          setActiveService(matched);
          return;
        }
      } else if (!hash.startsWith('#/service/')) {
        setActiveService(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenConnect = (plan?: string) => {
    setSelectedPlan(plan);
    setIsConnectOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setActiveService(service);
    window.location.hash = `#/service/${service.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromService = () => {
    setActiveService(null);
    window.location.hash = '#services';
    setTimeout(() => {
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Top Navigation Bar adhering to 3-zone contract (shown on home or if no service page active) */}
      {!activeService && (
        <Navbar
          onOpenConnect={() => handleOpenConnect()}
          onOpenJournal={() => setIsJournalOpen(true)}
        />
      )}

      {/* Conditionally render Dedicated Service Page (Matching Reference Screenshot) or Homepage Flow */}
      {activeService ? (
        <ServiceDetailPage
          service={activeService}
          onBack={handleBackFromService}
          onSelectService={handleSelectService}
          onOpenConnect={(plan) => handleOpenConnect(plan)}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      ) : (
        <main className="flex-1">
          {/* Hero Section */}
          <Hero onExploreClick={handleExploreClick} />

          {/* Our Services Section (Placed immediately next to Hero) */}
          <ScrollReveal>
            <Services
              onOpenConnect={() => handleOpenConnect()}
              onServiceSelect={handleSelectService}
            />
          </ScrollReveal>

          {/* Budget-Friendly Rates Section (Placed immediately next to Services Section) */}
          <ScrollReveal>
            <OutsourcingPricing onOpenConnect={(plan) => handleOpenConnect(plan)} />
          </ScrollReveal>

          {/* Portfolio Section */}
          <ScrollReveal>
            <SelectedProjects
              onSelectProject={(project) => setSelectedProject(project)}
              onViewAllProjects={() => setIsAllProjectsOpen(true)}
            />
          </ScrollReveal>

          {/* Our Packages Section (Placed immediately next to Portfolio Section) */}
          <ScrollReveal>
            <PackagesSection onOpenConnect={(plan) => handleOpenConnect(plan)} />
          </ScrollReveal>

          {/* Philosophy Section with Studio Bio & 4 Pillars */}
          <ScrollReveal>
            <Philosophy />
          </ScrollReveal>

          {/* Client Testimonials Section */}
          <ScrollReveal>
            <TestimonialsSection />
          </ScrollReveal>

          {/* Our Team Section */}
          <ScrollReveal>
            <Team />
          </ScrollReveal>

          {/* Areas We Serve (Map Section) */}
          <ScrollReveal>
            <AreasWeServe onOpenConnect={(plan) => handleOpenConnect(plan)} />
          </ScrollReveal>

          {/* Contact & Inquiry Section (Moved below the map section) */}
          <ScrollReveal>
            <ContactSection />
          </ScrollReveal>
        </main>
      )}

      {/* Redesigned Architectural Footer */}
      <Footer
        onOpenJournal={() => setIsJournalOpen(true)}
        onOpenConnect={(plan) => handleOpenConnect(plan)}
      />

      {/* Interactive Lightboxes & Drawers */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConnect={() => {
          setSelectedProject(null);
          setIsConnectOpen(true);
        }}
      />

      <ConnectDrawer
        isOpen={isConnectOpen}
        initialPlan={selectedPlan}
        onClose={() => {
          setIsConnectOpen(false);
          setSelectedPlan(undefined);
        }}
      />

      <JournalModal
        isOpen={isJournalOpen}
        onClose={() => setIsJournalOpen(false)}
      />

      <AllProjectsModal
        isOpen={isAllProjectsOpen}
        onClose={() => setIsAllProjectsOpen(false)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />
    </div>
  );
}
