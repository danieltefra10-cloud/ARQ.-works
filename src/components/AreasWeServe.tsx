import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ArrowRight, Clock, MapPin, Building2, Sparkles, CheckCircle2 } from 'lucide-react';

interface ServedLocation {
  id: string;
  name: string;
  subRegion: string;
  category: 'north-america' | 'europe' | 'middle-east-africa' | 'asia' | 'latam-oceania';
  categoryLabel: string;
  flag: string;
  coords: [number, number]; // [lat, lng]
  hubs: string[];
  timezone: string;
  turnaround: string;
  services: string[];
  projectsCount: string;
}

// 23 Precise Global Practice & Outsourcing Annotations Matching the Uploaded Map Reference Image
const SERVED_LOCATIONS: ServedLocation[] = [
  // North America (9 Annotations)
  {
    id: 'ca-east',
    name: 'Eastern Canada',
    subRegion: 'Quebec & Ontario',
    category: 'north-america',
    categoryLabel: 'North America',
    flag: '🇨🇦',
    coords: [45.5017, -73.5673],
    hubs: ['Montreal', 'Toronto', 'Ottawa', 'Quebec City'],
    timezone: 'EST / EDT',
    turnaround: '12–24h Overnight Drafting',
    services: ['Revit BIM LOD 350', 'NBC Code Permit Sets', 'Cold Climate Details'],
    projectsCount: '28+ Projects',
  },
  {
    id: 'us-west',
    name: 'California & West Coast',
    subRegion: 'United States',
    category: 'north-america',
    categoryLabel: 'North America',
    flag: '🇺🇸',
    coords: [37.7749, -122.4194],
    hubs: ['San Francisco', 'Los Angeles', 'San Diego', 'San Jose'],
    timezone: 'PST / PDT',
    turnaround: 'Overnight SLA with morning handoffs',
    services: ['Title 24 Compliance Sets', 'Photorealistic 3D Exterior CGI', 'Revit BIM Modeling'],
    projectsCount: '52+ Projects',
  },
  {
    id: 'us-mountain',
    name: 'Mountain West',
    subRegion: 'Colorado & Utah',
    category: 'north-america',
    categoryLabel: 'North America',
    flag: '🇺🇸',
    coords: [39.7392, -104.9903],
    hubs: ['Denver', 'Boulder', 'Salt Lake City', 'Aspen'],
    timezone: 'MST / MDT',
    turnaround: 'Fast-track 24h turnaround',
    services: ['Alpine Residence CD Sets', 'Timber Construction Detailing', '3D Landscape CGI'],
    projectsCount: '24+ Projects',
  },
  {
    id: 'us-midwest',
    name: 'Midwest & Great Lakes',
    subRegion: 'Illinois & Michigan',
    category: 'north-america',
    categoryLabel: 'North America',
    flag: '🇺🇸',
    coords: [41.8781, -87.6298],
    hubs: ['Chicago', 'Detroit', 'Milwaukee', 'Minneapolis'],
    timezone: 'CST / CDT',
    turnaround: 'Direct daily sprint reviews',
    services: ['Commercial Multi-Family BIM', 'AutoCAD Permitting Packages', 'Revit Drafting'],
    projectsCount: '38+ Projects',
  },
  {
    id: 'us-texas',
    name: 'Texas & Southwest',
    subRegion: 'United States',
    category: 'north-america',
    categoryLabel: 'North America',
    flag: '🇺🇸',
    coords: [30.2672, -97.7431],
    hubs: ['Austin', 'Dallas', 'Houston', 'San Antonio'],
    timezone: 'CST / CDT',
    turnaround: 'Overnight pipeline execution',
    services: ['IBC Residential Permit Sets', 'Commercial Façade Engineering', 'Virtual 3D Tours'],
    projectsCount: '44+ Projects',
  },
  {
    id: 'us-east',
    name: 'East Coast & Mid-Atlantic',
    subRegion: 'New York & New Jersey',
    category: 'north-america',
    categoryLabel: 'North America',
    flag: '🇺🇸',
    coords: [40.7128, -74.006],
    hubs: ['New York City', 'Philadelphia', 'Jersey City', 'Boston'],
    timezone: 'EST / EDT',
    turnaround: 'Same-day revisions & overnight drops',
    services: ['High-Density Residential BIM', 'Interior Millwork Packages', 'Photorealistic CGI'],
    projectsCount: '65+ Projects',
  },
  {
    id: 'us-southeast',
    name: 'Southeast Region',
    subRegion: 'Georgia & Carolinas',
    category: 'north-america',
    categoryLabel: 'North America',
    flag: '🇺🇸',
    coords: [33.749, -84.388],
    hubs: ['Atlanta', 'Charlotte', 'Nashville', 'Raleigh'],
    timezone: 'EST / EDT',
    turnaround: '24-hour turnaround commitments',
    services: ['Mixed-Use Commercial BIM', 'Landscape Architecture 3D', 'Revit Coordination'],
    projectsCount: '31+ Projects',
  },
  {
    id: 'us-florida',
    name: 'Florida & Coastal',
    subRegion: 'United States',
    category: 'north-america',
    categoryLabel: 'North America',
    flag: '🇺🇸',
    coords: [25.7617, -80.1918],
    hubs: ['Miami', 'Orlando', 'Tampa', 'Fort Lauderdale'],
    timezone: 'EST / EDT',
    turnaround: 'Overnight delivery with full QA',
    services: ['High-Velocity Hurricane Zone CD Sets', 'Luxury Waterfront 3D Visuals', 'BIM LOD 350'],
    projectsCount: '46+ Projects',
  },
  {
    id: 'caribbean',
    name: 'Caribbean & Mexico',
    subRegion: 'Central America Hub',
    category: 'north-america',
    categoryLabel: 'North America',
    flag: '🇲🇽',
    coords: [21.1619, -86.8515],
    hubs: ['Cancún', 'Tulum', 'Nassau', 'San Juan'],
    timezone: 'EST / CST',
    turnaround: 'Rapid milestone deliveries',
    services: ['Hospitality Resort Visuals', 'Eco-Retreat Biophilic Masterplanning', 'Revit BIM'],
    projectsCount: '19+ Projects',
  },

  // South America (1 Annotation)
  {
    id: 'sa-brazil',
    name: 'Brazil & Latin America',
    subRegion: 'Brasília & São Paulo',
    category: 'latam-oceania',
    categoryLabel: 'Latin America',
    flag: '🇧🇷',
    coords: [-15.7975, -47.8919],
    hubs: ['Brasília', 'São Paulo', 'Rio de Janeiro', 'Belo Horizonte'],
    timezone: 'BRT (UTC-3)',
    turnaround: 'Direct working hours alignment',
    services: ['High-End Tropical Architecture CGI', 'Revit BIM Documentation', 'Landscape 3D'],
    projectsCount: '16+ Projects',
  },

  // Europe & Mediterranean (5 Annotations)
  {
    id: 'uk-london',
    name: 'United Kingdom',
    subRegion: 'London & England',
    category: 'europe',
    categoryLabel: 'Europe',
    flag: '🇬🇧',
    coords: [51.5074, -0.1278],
    hubs: ['London', 'Manchester', 'Birmingham', 'Bristol'],
    timezone: 'GMT / BST',
    turnaround: 'Morning milestone drops & direct collaboration',
    services: ['RIBA Stages 2–5 Packages', 'Planning Permission Visuals', 'Clash Coordination'],
    projectsCount: '48+ Projects',
  },
  {
    id: 'fr-paris',
    name: 'France & Western Europe',
    subRegion: 'Paris & Lyon',
    category: 'europe',
    categoryLabel: 'Europe',
    flag: '🇫🇷',
    coords: [48.8566, 2.3522],
    hubs: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
    timezone: 'CET / CEST',
    turnaround: 'Full European business day overlap',
    services: ['Haussmann Renovation CAD Sets', 'Photorealistic CGI', 'Eurocode Compliance'],
    projectsCount: '27+ Projects',
  },
  {
    id: 'es-madrid',
    name: 'Spain & Portugal',
    subRegion: 'Iberian Peninsula',
    category: 'europe',
    categoryLabel: 'Europe',
    flag: '🇪🇸',
    coords: [40.4168, -3.7038],
    hubs: ['Madrid', 'Barcelona', 'Valencia', 'Lisbon'],
    timezone: 'CET / WET',
    turnaround: 'Direct daytime coordination',
    services: ['Mediterranean Villa Architecture', 'BIM Modeling LOD 300', '3D Walkthroughs'],
    projectsCount: '22+ Projects',
  },
  {
    id: 'de-berlin',
    name: 'Germany & Benelux',
    subRegion: 'Central Europe',
    category: 'europe',
    categoryLabel: 'Europe',
    flag: '🇩🇪',
    coords: [52.52, 13.405],
    hubs: ['Berlin', 'Frankfurt', 'Munich', 'Amsterdam'],
    timezone: 'CET / CEST',
    turnaround: 'Precision European workflows',
    services: ['Passivhaus BIM Details', 'Eurocode Construction Sets', 'Sustainable Design 3D'],
    projectsCount: '34+ Projects',
  },
  {
    id: 'ru-moscow',
    name: 'Eastern Europe Hub',
    subRegion: 'Regional Center',
    category: 'europe',
    categoryLabel: 'Europe',
    flag: '🌐',
    coords: [55.7558, 37.6173],
    hubs: ['Regional Hub', 'Warsaw', 'Prague', 'Vienna'],
    timezone: 'MSK / CET',
    turnaround: 'Overnight turnarounds',
    services: ['High-Rise Façade Engineering', 'Detailed Revit Assemblies', 'Exterior Renders'],
    projectsCount: '20+ Projects',
  },

  // Middle East & Africa (3 Annotations)
  {
    id: 'ma-morocco',
    name: 'North Africa & Maghreb',
    subRegion: 'Casablanca & Marrakech',
    category: 'middle-east-africa',
    categoryLabel: 'Middle East & Africa',
    flag: '🇲🇦',
    coords: [31.6295, -7.9811],
    hubs: ['Casablanca', 'Marrakech', 'Rabat', 'Tangier'],
    timezone: 'WET / WEST',
    turnaround: 'Daily review cycles',
    services: ['Traditional Islamic Arch Detailing', 'Resort Hospitality Visuals', 'BIM Modeling'],
    projectsCount: '15+ Projects',
  },
  {
    id: 'eg-cairo',
    name: 'Egypt & Nile Basin',
    subRegion: 'Cairo & Alexandria',
    category: 'middle-east-africa',
    categoryLabel: 'Middle East & Africa',
    flag: '🇪🇬',
    coords: [30.0444, 31.2357],
    hubs: ['Cairo', 'New Administrative Capital', 'Alexandria', 'Giza'],
    timezone: 'EET (UTC+2)',
    turnaround: 'High-speed project turnarounds',
    services: ['Large-Scale Masterplan Renders', 'High-Rise Revit Documentation', '3D Animations'],
    projectsCount: '25+ Projects',
  },
  {
    id: 'ae-dubai',
    name: 'United Arab Emirates & Gulf',
    subRegion: 'GCC Hub',
    category: 'middle-east-africa',
    categoryLabel: 'Middle East & Africa',
    flag: '🇦🇪',
    coords: [25.2048, 55.2708],
    hubs: ['Dubai', 'Abu Dhabi', 'Riyadh', 'Doha'],
    timezone: 'GST (UTC+4)',
    turnaround: 'Rapid delivery for fast-track milestones',
    services: ['Super-Tall Tower Curtain Wall BIM', 'Luxury Hospitality 3D CGI', 'Permit Packages'],
    projectsCount: '42+ Projects',
  },

  // Asia (4 Annotations)
  {
    id: 'pk-lahore',
    name: 'Pakistan Studio Hub',
    subRegion: 'Lahore & Punjab',
    category: 'asia',
    categoryLabel: 'Asia',
    flag: '🇵🇰',
    coords: [31.5204, 74.3587],
    hubs: ['Lahore (Mega Tower Gulberg 3)', 'Islamabad', 'Karachi'],
    timezone: 'PKT (UTC+5)',
    turnaround: 'Global Central Production Engine',
    services: ['Full CAD & BIM Outsourcing', '3D Animations & CGI', '24/7 Pipeline Throughput'],
    projectsCount: 'Main Regional Studio',
  },
  {
    id: 'in-mumbai',
    name: 'India & South Asia',
    subRegion: 'Mumbai & Tech Corridors',
    category: 'asia',
    categoryLabel: 'Asia',
    flag: '🇮🇳',
    coords: [19.076, 72.8777],
    hubs: ['Mumbai', 'Bengaluru', 'Hyderabad', 'New Delhi'],
    timezone: 'IST (UTC+5:30)',
    turnaround: 'Direct technical drafting overlap',
    services: ['Commercial Interior BIM', 'Parametric Façade Design', 'Photorealistic Renders'],
    projectsCount: '30+ Projects',
  },
  {
    id: 'my-singapore',
    name: 'Southeast Asia Hub',
    subRegion: 'Singapore & Malaysia',
    category: 'asia',
    categoryLabel: 'Asia',
    flag: '🇸🇬',
    coords: [3.139, 101.6869],
    hubs: ['Singapore', 'Kuala Lumpur', 'Bangkok', 'Jakarta'],
    timezone: 'SGT / MYT (UTC+8)',
    turnaround: 'Seamless daily pipeline drops',
    services: ['Biophilic High-Rise Detailing', 'BCA Singapore BIM Standards', 'Landscape CGI'],
    projectsCount: '28+ Projects',
  },
  {
    id: 'ph-manila',
    name: 'East Asia & Pacific',
    subRegion: 'Manila & Pacific Rim',
    category: 'asia',
    categoryLabel: 'Asia',
    flag: '🇵🇭',
    coords: [14.5995, 120.9842],
    hubs: ['Manila', 'Cebu', 'Hong Kong', 'Taipei'],
    timezone: 'PHT (UTC+8)',
    turnaround: 'Fast daytime project sync',
    services: ['Commercial Towers Revit Sets', 'Real Estate 3D Visuals', 'AutoCAD Drafting'],
    projectsCount: '21+ Projects',
  },

  // Oceania (1 Annotation)
  {
    id: 'au-brisbane',
    name: 'Australia & New Zealand',
    subRegion: 'Brisbane & Sydney',
    category: 'latam-oceania',
    categoryLabel: 'Oceania',
    flag: '🇦🇺',
    coords: [-27.4698, 153.0251],
    hubs: ['Brisbane', 'Sydney', 'Melbourne', 'Auckland'],
    timezone: 'AEST / AWST / NZST',
    turnaround: 'Overnight production while Australia sleeps',
    services: ['NCC / BCA Compliant Drawing Sets', 'Coastal Residence Visuals', 'Revit LOD 350'],
    projectsCount: '45+ Projects',
  },
];

interface AreasWeServeProps {
  onOpenConnect?: (plan?: string) => void;
}

export const AreasWeServe: React.FC<AreasWeServeProps> = ({ onOpenConnect }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const [selectedLocation, setSelectedLocation] = useState<ServedLocation | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const filteredLocations =
    activeCategoryFilter === 'all'
      ? SERVED_LOCATIONS
      : SERVED_LOCATIONS.filter((loc) => loc.category === activeCategoryFilter);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Prevent re-initialization
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Initialize Leaflet Map centered with balanced world perspective
    const map = L.map(mapContainerRef.current, {
      center: [26, 12],
      zoom: 2,
      minZoom: 1.8,
      maxZoom: 6,
      zoomControl: false,
      attributionControl: false,
      worldCopyJump: false,
      maxBounds: [
        [-75, -180],
        [85, 180],
      ],
      maxBoundsViscosity: 0.8,
    });

    mapInstanceRef.current = map;

    // Clean OpenStreetMap Tile Layer
    const tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 8,
      minZoom: 1.8,
      noWrap: true,
    });

    tileLayer.addTo(map);

    // Create 23 precise annotations matching the uploaded reference image
    SERVED_LOCATIONS.forEach((loc) => {
      // Pin matching the dark charcoal teardrop with white circular eyelet in the user image
      const pinHtml = `
        <div class="relative flex flex-col items-center group cursor-pointer" style="transform: translate(-50%, -100%);">
          <!-- Subtle Ground Shadow below pin tip -->
          <div class="absolute bottom-0 w-8 h-3 -mb-1 rounded-full bg-black/25 blur-[1.5px] pointer-events-none"></div>

          <!-- Dark Charcoal Teardrop Pin Marker from uploaded image -->
          <div class="relative transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-120 drop-shadow-md">
            <svg width="22" height="30" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.2C5.92 1.2 1 6.12 1 12.2C1 20.8 12 31 12 31C12 31 23 20.8 23 12.2C23 6.12 18.08 1.2 12 1.2Z" fill="#4B5563" stroke="#1F2937" stroke-width="1.8" stroke-linejoin="round"/>
              <circle cx="12" cy="12.2" r="3.6" fill="#FFFFFF"/>
            </svg>
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-area-marker',
        html: pinHtml,
        iconSize: [24, 32],
        iconAnchor: [12, 30],
        popupAnchor: [0, -30],
      });

      const marker = L.marker(loc.coords, { icon: customIcon });

      // Interactive popup
      const popupHtml = `
        <div style="font-family: system-ui, -apple-system, sans-serif; padding: 4px; min-width: 230px;">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #E5E7EB; padding-bottom: 6px; margin-bottom: 8px;">
            <div style="font-weight: 700; font-size: 14px; color: #111827; display: flex; align-items: center; gap: 6px;">
              <span>${loc.flag}</span>
              <span>${loc.name}</span>
            </div>
            <span style="font-size: 9px; font-family: monospace; color: #D97706; background: #FEF3C7; padding: 2px 6px; border-radius: 9999px; font-weight: 600;">ACTIVE</span>
          </div>
          <div style="font-size: 11px; color: #4B5563; margin-bottom: 4px;">
            <strong style="color: #1F2937;">Territory:</strong> ${loc.subRegion}
          </div>
          <div style="font-size: 11px; color: #4B5563; margin-bottom: 4px;">
            <strong style="color: #1F2937;">Hub Cities:</strong> ${loc.hubs.slice(0, 3).join(', ')}
          </div>
          <div style="font-size: 11px; color: #4B5563; margin-bottom: 8px;">
            <strong style="color: #1F2937;">SLA:</strong> ${loc.turnaround}
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; font-size: 10px; font-family: monospace; color: #6B7280; background: #F3F4F6; padding: 4px 6px; border-radius: 4px;">
            <span>${loc.projectsCount}</span>
            <span style="color: #D97706; font-weight: 600;">ISO 9001 QA</span>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, {
        closeButton: true,
        className: 'architectural-leaflet-popup',
      });

      marker.on('click', () => {
        setSelectedLocation(loc);
      });

      marker.addTo(map);
      markersRef.current[loc.id] = marker;
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  const handleSelectLocation = (loc: ServedLocation) => {
    setSelectedLocation(loc);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(loc.coords, 4.5, {
        duration: 1.2,
      });
      const marker = markersRef.current[loc.id];
      if (marker) {
        marker.openPopup();
      }
    }
  };

  const handleCategoryFilter = (catId: string) => {
    setActiveCategoryFilter(catId);
    if (!mapInstanceRef.current) return;
    if (catId === 'all') {
      mapInstanceRef.current.flyTo([26, 12], 2, { duration: 1.2 });
    } else if (catId === 'north-america') {
      mapInstanceRef.current.flyTo([39, -98], 3.5, { duration: 1.2 });
    } else if (catId === 'europe') {
      mapInstanceRef.current.flyTo([50, 15], 3.8, { duration: 1.2 });
    } else if (catId === 'middle-east-africa') {
      mapInstanceRef.current.flyTo([24, 45], 3.5, { duration: 1.2 });
    } else if (catId === 'asia') {
      mapInstanceRef.current.flyTo([28, 100], 3.5, { duration: 1.2 });
    } else if (catId === 'latam-oceania') {
      mapInstanceRef.current.flyTo([-15, -60], 3, { duration: 1.2 });
    }
  };

  return (
    <section id="areas-we-serve" className="py-20 lg:py-28 bg-[#FBFBFA] border-t border-[#E7E7E1] relative overflow-hidden">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching "Areas We Serve." */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-neutral-900 font-sans">
              Areas We <span className="text-[#DF9531]">Serve</span>.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl font-normal leading-relaxed">
              Serving 23 active regional hubs across North America, Europe, the Middle East, Asia, and Oceania with 24-hour turnaround architectural drafting and photorealistic visualization.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 shrink-0">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3.5"></span>
              <span className="font-semibold text-neutral-800">23 GLOBAL PRACTICE ANNOTATIONS</span>
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {[
            { id: 'all', label: 'ALL REGIONS (23)' },
            { id: 'north-america', label: 'NORTH AMERICA (9)' },
            { id: 'europe', label: 'EUROPE (5)' },
            { id: 'middle-east-africa', label: 'MIDDLE EAST & AFRICA (3)' },
            { id: 'asia', label: 'ASIA (4)' },
            { id: 'latam-oceania', label: 'OCEANIA & LATAM (2)' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeCategoryFilter === cat.id
                  ? 'bg-neutral-900 text-white font-semibold shadow-xs'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Map Container: Frame with the 23 precise annotations matching the reference screenshot */}
        <div className="relative w-full rounded-2xl border border-neutral-200/90 bg-[#F4F4F1] overflow-hidden shadow-md">
          
          {/* Subtle Horizontal Architectural Grid Striping Overlay matching the image */}
          <div
            className="absolute inset-0 pointer-events-none z-10 opacity-35"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, #181817 0px, #181817 1px, transparent 1px, transparent 6px)',
            }}
            aria-hidden="true"
          />

          {/* Leaflet Map DOM Node */}
          <div
            ref={mapContainerRef}
            className="w-full h-[380px] sm:h-[480px] md:h-[560px] lg:h-[620px] z-0 focus:outline-none"
            style={{ backgroundColor: '#ECECE7' }}
          />

          {/* Zoom Controls at Top Left (+ / -) */}
          <div className="absolute top-4 left-4 z-20 flex flex-col bg-white rounded-md shadow-md border border-neutral-200/80 overflow-hidden">
            <button
              type="button"
              onClick={handleZoomIn}
              className="w-8 h-8 flex items-center justify-center text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 font-bold text-lg border-b border-neutral-200/80 transition-colors cursor-pointer select-none"
              title="Zoom in"
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              className="w-8 h-8 flex items-center justify-center text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 font-bold text-lg transition-colors cursor-pointer select-none"
              title="Zoom out"
              aria-label="Zoom out"
            >
              −
            </button>
          </div>

          {/* Location Counter Badge */}
          <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-white/90 backdrop-blur-xs text-[11px] font-mono font-semibold text-neutral-800 rounded-lg shadow-sm border border-neutral-200/80 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DF9531]"></span>
            <span>23 ACTIVE HUBS MAPPED</span>
          </div>

          {/* Leaflet | © OpenStreetMap Attribution Badge */}
          <div className="absolute bottom-2 right-2 z-20 px-2 py-0.5 bg-white/80 backdrop-blur-xs text-[10px] font-sans text-neutral-600 rounded shadow-xs flex items-center gap-1.5 pointer-events-auto">
            <span>🇺🇦</span>
            <a
              href="https://leafletjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:underline"
            >
              Leaflet
            </a>
            <span>|</span>
            <span>©</span>
            <a
              href="https://www.openstreetmap.org/copyright"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:underline"
            >
              OpenStreetMap
            </a>
          </div>

        </div>



        {/* Active Location Detail Card (when clicked) */}
        {selectedLocation && (
          <div className="mt-6 p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedLocation.flag}</span>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {selectedLocation.name} ({selectedLocation.subRegion})
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Active delivery with local studios in {selectedLocation.hubs.join(', ')}
                  </p>
                </div>
              </div>

              {onOpenConnect && (
                <button
                  type="button"
                  onClick={() => onOpenConnect(`Project in ${selectedLocation.name}`)}
                  className="px-5 py-2.5 bg-[#DF9531] hover:bg-[#C98126] text-white text-xs font-bold rounded-full tracking-wider uppercase inline-flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                >
                  <span>Inquire for {selectedLocation.name}</span>
                  <ArrowRight size={13} />
                </button>
              )}
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-neutral-50 rounded-xl">
                <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase block mb-1">
                  Timezone & Turnaround
                </span>
                <span className="font-semibold text-neutral-800 flex items-center gap-1.5">
                  <Clock size={13} className="text-[#DF9531]" />
                  {selectedLocation.timezone}
                </span>
                <p className="text-[11px] text-neutral-500 mt-1">{selectedLocation.turnaround}</p>
              </div>

              <div className="p-3 bg-neutral-50 rounded-xl">
                <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase block mb-1">
                  Core Disciplines Delivered
                </span>
                <span className="font-semibold text-neutral-800 flex items-center gap-1.5">
                  <Building2 size={13} className="text-[#DF9531]" />
                  {selectedLocation.services.slice(0, 2).join(' · ')}
                </span>
                <p className="text-[11px] text-neutral-500 mt-1">{selectedLocation.services.slice(2).join(' · ')}</p>
              </div>

              <div className="p-3 bg-neutral-50 rounded-xl">
                <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase block mb-1">
                  Delivery SLA
                </span>
                <span className="font-semibold text-neutral-800 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#DF9531]" />
                  {selectedLocation.projectsCount}
                </span>
                <p className="text-[11px] text-neutral-500 mt-1">ISO 9001:2015 Quality Verified</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
