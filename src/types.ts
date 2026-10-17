export interface Project {
  id: string;
  title: string;
  category: 'CAD & BIM' | '3D MODELING & VISUALIZATION' | 'INTERIOR DESIGN' | string;
  categoryLabel: string;
  serviceId?: string;
  serviceNumber?: string;
  location: string;
  year: string;
  area: string;
  description: string;
  image: string;
  secondaryImage?: string;
  scope: string[];
  client: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
  image?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  discipline: string;
  bio: string;
  location: string;
  initials: string;
  image?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  rate: string;
  period: string;
  description: string;
  features: string[];
  idealFor: string;
  ctaText: string;
}

export interface ComparisonItem {
  metric: string;
  inHouse: string;
  arqWorks: string;
  advantage: string;
}
