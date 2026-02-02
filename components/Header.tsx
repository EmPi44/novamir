import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

const navItems = [
  { label: 'Product', href: '#product' },
  { label: 'Use Cases', href: '#developers' },
  { label: 'Pricing', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Resources', href: '#' },
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

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'translate-y-0 bg-white/90 backdrop-blur-md shadow-sm' : 'translate-y-0 bg-transparent'}`}>
      <header className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex-shrink-0 z-50 relative text-surface-on">
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

        <div className="hidden lg:flex items-center gap-4">
          <button className="flex items-center gap-2 bg-primary text-primary-on px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
            <span>Download</span>
            <span className="material-symbols-outlined text-lg">download</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-50 relative p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'dehaze'}
          </span>
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transition-opacity duration-300 flex flex-col pt-24 px-6 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
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
      </header>
    </div>
  );
};