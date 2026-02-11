import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

const navItems = [
  { label: 'Solutions', href: '#product' },
  { label: 'Your Journey With Us', href: '#journey' },
  { label: "Let's Talk", href: '#booking' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile Nav Overlay — must be outside the header's backdrop-blur container */}
      <div className={`fixed inset-0 bg-white z-[45] transition-all duration-300 ease-out flex flex-col pt-24 px-6 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav>
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-gray-100 last:border-none">
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-6 text-2xl font-light text-surface-on hover:text-black transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <header className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex-shrink-0 relative text-surface-on" aria-label="Novamir - Home">
            <Logo className="h-6 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <ul className="flex flex-row gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="px-4 py-2 rounded-full text-sm font-medium text-surface-on-variant hover:text-surface-on hover:bg-surface-container-high transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'dehaze'}
            </span>
          </button>
        </header>
      </div>
    </>
  );
};