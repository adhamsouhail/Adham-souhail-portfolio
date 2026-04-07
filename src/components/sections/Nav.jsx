'use client';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { meta } from '@/data/meta';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''));
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled ? 'bg-white/95 backdrop-blur-[14px] border-b border-[#EEEEEE] shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-dark tracking-tight group">
            {meta.siteName.split(' ')[0]}{' '}
            <span className="text-accent">{meta.siteName.split(' ')[1] || ''}</span>
            <span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 ${
                      activeSection === id
                        ? 'text-accent after:w-full'
                        : 'text-[#444] hover:text-accent after:w-0 hover:after:w-full'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="filled" href="#contact" size="md">
              Let&apos;s Work Together
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-dark rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Icon name="menu" className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col p-6" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="flex items-center justify-between mb-12">
            <a href="#" className="text-xl font-bold text-dark">
              {meta.siteName}<span className="text-accent">.</span>
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Icon name="x" className="w-6 h-6" />
            </button>
          </div>

          <ul className="flex flex-col gap-6 flex-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-bold text-dark hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <Button variant="filled" href="#contact" size="lg" className="w-full justify-center" onClick={() => setMenuOpen(false)}>
              Let&apos;s Work Together
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
