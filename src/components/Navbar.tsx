import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConnect: () => void;
  onOpenJournal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavItem {
    label: string;
    href?: string;
    onClick?: () => void;
  }

  const navLinks: NavItem[] = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#services' },
    { label: 'RATES', href: '#pricing' },
    { label: 'PORTFOLIO', href: '#projects' },
    { label: 'PACKAGES', href: '#packages' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBFBFA]/85 backdrop-blur-xl backdrop-saturate-150 border-b border-neutral-900/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.06)] text-neutral-950'
          : 'bg-black/20 backdrop-blur-md backdrop-saturate-150 border-b border-white/[0.12] text-white shadow-[0_4px_24px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* Tactile frosted glass grain texture */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          scrolled ? 'opacity-[0.06] mix-blend-multiply' : 'opacity-[0.05] mix-blend-overlay'
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className={`relative z-10 max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-3.5'
      }`}>
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          aria-label="ARQ.works Home"
        >
          <span className={`text-xl sm:text-2xl font-semibold tracking-[0.22em] font-editorial leading-none transition-colors ${
            scrolled ? 'text-neutral-900' : 'text-white'
          }`}>
            ARQ.works
          </span>
          <span className={`text-[9px] tracking-[0.42em] uppercase mt-1 transition-colors ${
            scrolled ? 'text-neutral-500 group-hover:text-neutral-900' : 'text-neutral-300 group-hover:text-white'
          }`}>
            ARCHITECTS
          </span>
        </a>

        {/* Zone 2: Navigation Links with generous architectural gap & letter spacing */}
        <nav className="hidden md:flex items-center gap-9 lg:gap-12 xl:gap-14 text-[11px] font-medium tracking-[0.28em]">
          {navLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-200 ${
                  scrolled
                    ? 'text-neutral-600 hover:text-neutral-950 after:bg-neutral-950'
                    : 'text-neutral-200 hover:text-white after:bg-white'
                }`}
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.label}
                onClick={link.onClick}
                className={`relative py-1 cursor-pointer transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-200 ${
                  scrolled
                    ? 'text-neutral-600 hover:text-neutral-950 after:bg-neutral-950'
                    : 'text-neutral-200 hover:text-white after:bg-white'
                }`}
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConnect}
            className="hidden sm:inline-flex relative p-[1.5px] overflow-hidden rounded-full group cursor-pointer shadow-md active:scale-[0.98] transition-all duration-200"
          >
            {/* Rotating Glow Stroke */}
            <span
              className="absolute inset-[-200%] animate-rotate-glow pointer-events-none"
              style={{
                background: scrolled
                  ? 'conic-gradient(from 0deg, transparent 0 240deg, rgba(15,15,15,0.15) 280deg, rgba(15,15,15,0.75) 330deg, rgba(15,15,15,1) 360deg)'
                  : 'conic-gradient(from 0deg, transparent 0 240deg, rgba(255,255,255,0.2) 280deg, rgba(255,255,255,0.85) 330deg, rgba(255,255,255,1) 360deg)',
              }}
            />
            {/* Rotating Glow Bloom */}
            <span
              className="absolute inset-[-200%] animate-rotate-glow blur-xs opacity-50 pointer-events-none"
              style={{
                background: scrolled
                  ? 'conic-gradient(from 0deg, transparent 0 260deg, rgba(15,15,15,0.4) 320deg, rgba(15,15,15,1) 360deg)'
                  : 'conic-gradient(from 0deg, transparent 0 260deg, rgba(255,255,255,0.4) 320deg, rgba(255,255,255,1) 360deg)',
              }}
            />

            {/* Architectural Faceplate with Pronounced Corner Fillet & Spaced Typography */}
            <span
              className={`relative z-10 flex items-center justify-center px-6 py-2.5 text-[11px] font-semibold tracking-[0.24em] uppercase whitespace-nowrap rounded-full transition-colors duration-200 ${
                scrolled
                  ? 'bg-neutral-950 text-white group-hover:bg-neutral-900 border border-neutral-800'
                  : 'bg-white/95 text-neutral-950 group-hover:bg-white border border-white/60 shadow-xs'
              }`}
            >
              <span>LET&apos;S CONNECT</span>
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 cursor-pointer focus-visible:outline-none ${
              scrolled ? 'text-neutral-800 hover:text-neutral-950' : 'text-neutral-100 hover:text-white'
            }`}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBFBFA] border-b border-[#E7E7E1] px-6 py-6 shadow-md animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-xs font-medium tracking-[0.26em] text-neutral-800">
            {navLinks.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-neutral-950 border-b border-neutral-100"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    link.onClick?.();
                  }}
                  className="py-1 text-left hover:text-neutral-950 border-b border-neutral-100 cursor-pointer"
                >
                  {link.label}
                </button>
              )
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConnect();
              }}
              className="mt-3 w-full bg-neutral-900 text-white text-xs tracking-[0.24em] uppercase py-3 font-medium text-center rounded-full"
            >
              LET&apos;S CONNECT
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
