import React from 'react';
import { Layers } from 'lucide-react';

export const ServiceIcon: React.FC<{ icon: string; className?: string }> = ({
  icon,
  className = 'w-14 h-14',
}) => {
  switch (icon) {
    case 'drafting':
      // Drafting pencil, triangle set-square ruler, and blueprint page
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="10" y="10" width="36" height="44" rx="2" stroke="currentColor" />
          <line x1="16" y1="18" x2="28" y2="18" />
          <line x1="16" y1="24" x2="24" y2="24" />
          <polygon points="16,46 38,46 16,24" stroke="currentColor" />
          <polygon points="20,43 31,43 20,32" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
          <path d="M42 16 L52 26 L32 46 L24 48 L26 40 Z" stroke="currentColor" />
          <line x1="46" y1="20" x2="38" y2="28" />
        </svg>
      );

    case 'landscape':
      // Picture frame with mountains, sun, and landscape pencil
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="10" y="12" width="40" height="36" rx="2" stroke="currentColor" />
          <circle cx="22" cy="24" r="4" stroke="currentColor" />
          <path d="M12 42 L24 28 L34 38 L42 30 L48 38" stroke="currentColor" />
          <line x1="14" y1="44" x2="46" y2="44" strokeWidth="1.2" />
          <path d="M44 14 L54 24 L40 38 L34 40 L36 34 Z" stroke="currentColor" />
          <line x1="48" y1="18" x2="42" y2="24" />
        </svg>
      );

    case 'revit':
      // Stylized 3D architectural ribbon "R" logo geometry
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M22 12 L28 10 L28 52 L22 54 Z" stroke="currentColor" />
          <path d="M28 10 C42 10 46 22 38 32 C34 36 28 36 28 36" stroke="currentColor" />
          <path d="M32 34 L46 54 L38 54 L26 36" stroke="currentColor" />
          <line x1="28" y1="24" x2="40" y2="24" strokeWidth="1.4" />
          <path d="M28 36 L34 32 C40 26 38 18 30 16" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );

    case 'construction':
      // Contractor/architect with safety hardhat and building elevation
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 28 L24 18 L34 26" stroke="currentColor" />
          <rect x="14" y="28" width="18" height="22" stroke="currentColor" />
          <rect x="18" y="34" width="6" height="8" stroke="currentColor" />
          <line x1="21" y1="34" x2="21" y2="42" />
          <path d="M34 24 C34 20 44 20 44 24" stroke="currentColor" />
          <path d="M30 24 L48 24" stroke="currentColor" />
          <circle cx="39" cy="28" r="4.5" stroke="currentColor" />
          <path d="M28 48 C28 40 33 36 39 36 C45 36 50 40 50 48" stroke="currentColor" />
          <line x1="35" y1="38" x2="33" y2="48" strokeWidth="1.4" />
          <line x1="43" y1="38" x2="45" y2="48" strokeWidth="1.4" />
        </svg>
      );

    case 'rendering':
      // Computer display with 3D isometric cube and validation checkmark
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="10" y="10" width="44" height="32" rx="2" stroke="currentColor" />
          <line x1="32" y1="42" x2="32" y2="50" />
          <line x1="24" y1="50" x2="40" y2="50" />
          <path d="M26 22 L34 17 L42 22 L34 27 Z" stroke="currentColor" />
          <path d="M26 22 L26 31 L34 36 L34 27" stroke="currentColor" />
          <path d="M42 22 L42 31 L34 36" stroke="currentColor" />
          <circle cx="44" cy="18" r="5" fill="white" stroke="currentColor" strokeWidth="1.5" />
          <path d="M42 18 L43.5 19.5 L46.5 16.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case 'animation':
      // Monitor with 3D cube model and video animation timeline
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="10" y="12" width="44" height="30" rx="2" stroke="currentColor" />
          <line x1="32" y1="42" x2="32" y2="48" />
          <line x1="24" y1="48" x2="40" y2="48" />
          <path d="M24 23 L32 18 L40 23 L32 28 Z" stroke="currentColor" />
          <path d="M24 23 L24 31 L32 36 L32 28" stroke="currentColor" />
          <path d="M40 23 L40 31 L32 36" stroke="currentColor" />
          <line x1="16" y1="38" x2="48" y2="38" strokeWidth="1.2" />
          <circle cx="28" cy="38" r="2" fill="currentColor" />
        </svg>
      );

    default:
      return <Layers className={className} />;
  }
};
