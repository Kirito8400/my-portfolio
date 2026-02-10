import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { NAVIGATION_LINKS, RESUME_DATA } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group z-50">
          <div className="p-2 rounded-lg bg-shopify/10 group-hover:bg-shopify/20 transition-colors">
            <Code2 className="w-6 h-6 text-shopify" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-shopify-light transition-colors">
            AK<span className="text-shopify">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-shopify-light transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-shopify transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-white text-dark-900 rounded-full text-sm font-semibold hover:bg-shopify hover:text-white transition-all transform hover:scale-105"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-dark-900 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-gray-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};