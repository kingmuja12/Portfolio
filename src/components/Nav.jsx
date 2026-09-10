import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';

const SECTION_IDS = ['hero', ...navItems.map((item) => item.id)];

export default function Nav() {
  const activeSection = useActiveSection(SECTION_IDS);
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on Escape, and lock the page behind it while open.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const go = (id) => (event) => {
    event.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Move keyboard focus with the scroll so tabbing continues from the target.
    element.setAttribute('tabindex', '-1');
    element.focus({ preventScroll: true });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
        scrolled ? 'border-b border-white/[0.07] bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Main" className="shell flex h-16 items-center justify-between sm:h-20">
        <a
          href="#hero"
          onClick={go('hero')}
          className="font-mono text-sm font-medium tracking-tight text-white"
        >
          {profile.shortName}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={go(item.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-px h-px bg-accent transition-opacity duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
          <li className="ml-3">
            <a href={`mailto:${profile.email}`} className="btn-ghost px-4 py-2">
              Get in touch
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="rounded-md p-2 text-zinc-300 transition-colors hover:text-white md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-white/[0.07] bg-ink-950/95 backdrop-blur-xl md:hidden"
      >
        <ul className="shell flex flex-col py-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={go(item.id)}
                aria-current={activeSection === item.id ? 'true' : undefined}
                className={`block border-b border-white/[0.05] py-4 text-base ${
                  activeSection === item.id ? 'text-accent' : 'text-zinc-300'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a href={`mailto:${profile.email}`} className="btn-primary w-full">
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
