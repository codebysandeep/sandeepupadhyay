import { useState, useEffect, useRef } from 'react';
import { Icon } from '../common/Icon';
import { SocialIcon, type SocialIconName } from '../common/SocialIcon';

// Navigation items — single source of truth
const navItems = [
  { label: 'Home',         href: '/',             section: 'home'         },
  { label: 'Expertise',   href: '#expertise',    section: 'expertise'    },
  { label: 'Contribution',href: '#contribution', section: 'contribution' },
  { label: 'Watch',       href: '#watch',         section: 'watch'        },
  { label: 'Articles',    href: '#articles',      section: 'articles'     },
  { label: 'About',       href: '#about',         section: 'about'        },
];

// Social links — icon names reference SocialIcon component (no inline SVGs)
interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}

const socialLinks: SocialLink[] = [
  { label: 'GitHub',   href: 'https://github.com/user',          icon: 'github'   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/user',     icon: 'linkedin' },
  { label: 'Dribbble', href: 'https://dribbble.com/user',        icon: 'dribbble' },
];

// Theme Toggle Component — accepts optional className to support bordered mobile variant
function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(saved || system);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={className ?? 'flex items-center justify-center p-1.5 xl:p-2 text-foreground hover:text-orange-600 dark:hover:text-orange-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 rounded-md'}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Icon name={theme === 'light' ? 'dark_mode' : 'light_mode'} size="md" />
    </button>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll spy — highlight active nav item as sections enter the viewport
  useEffect(() => {
    const sectionIds = navItems
      .filter(item => item.section !== 'home')
      .map(item => item.section);

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '0px 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    // Reset to home when scrolled to the very top
    const onScroll = () => {
      if (window.scrollY < 80) setActiveSection('home');
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observers.forEach(obs => obs.disconnect());
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Auto-close menu when viewport enters desktop breakpoint (≥1024px).
  // Without this, body.overflow stays 'hidden' if user resizes from mobile with menu open.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMenuOpen(false);
    };
    mq.addEventListener('change', closeOnDesktop);
    return () => mq.removeEventListener('change', closeOnDesktop);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-orange-100 dark:bg-stone-900 border-b border-border">
      <div className="container-page">
        <nav className="flex items-center h-16 lg:h-[72px]" aria-label="Main">

          {/* Logo — h-8 mobile (2rem/32px), h-10 desktop (2.5rem/40px); w-auto scales proportionally */}
          <a
            href="/"
            className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 rounded-sm"
            aria-label="Sandeep Upadhyay — Home"
          >
            <img
              src="/images/sandeep-upadhyay-logo.svg"
              alt="Sandeep Upadhyay"
              className="h-[1.1rem] lg:h-[0.9rem] xl:h-[1.1rem] w-auto dark:invert"
              width="760"
              height="80"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-0 ml-6 xl:ml-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-2 xl:px-3 py-2 rounded-md font-medium lg:text-base xl:text-[1.125rem] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 ${
                      isActive
                        ? 'text-foreground font-bold'
                        : 'text-foreground hover:text-orange-600 dark:hover:text-orange-500'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Right Actions */}
          <div className="ml-auto hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Contact Button */}
            <a
              href="#contact"
              className="px-3 xl:px-4 py-1.5 lg:text-base xl:text-[1.125rem] bg-stone-950 dark:bg-white text-white dark:text-stone-900 font-medium rounded-full hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
            >
              Contact
            </a>

            {/* Divider */}
            <div className="w-px h-6 bg-border mx-1" aria-hidden="true" />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Social Links */}
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 xl:p-2 text-foreground hover:text-orange-600 dark:hover:text-orange-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 rounded-md"
                aria-label={link.label}
              >
                <SocialIcon name={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button — ml-auto pushes it to far right */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden ml-auto p-2 text-foreground hover:text-orange-600 dark:hover:text-orange-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 rounded-md"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} size="md" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-orange-100 dark:bg-stone-900 border-t border-border transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="container-page py-6 flex flex-col h-full">
          {/* Nav Links */}
          <ul className="space-y-1" role="menu">
            {navItems.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <li key={item.label} role="none">
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 ${
                      isActive
                        ? 'text-foreground font-bold bg-white/60 dark:bg-stone-800'
                        : 'text-foreground hover:text-orange-600 dark:hover:text-orange-500 hover:bg-white/40 dark:hover:bg-stone-800'
                    }`}
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Footer */}
          <div className="mt-auto pt-6 border-t border-border">
            {/* Theme + Social Links — uniform border box on all icons */}
            <div className="flex items-center justify-between mb-6">
              <ThemeToggle className="p-3 border border-border rounded-lg text-foreground hover:text-orange-600 dark:hover:text-orange-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600" />
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-foreground hover:text-orange-600 dark:hover:text-orange-500 border border-border rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
                  aria-label={link.label}
                >
                  <SocialIcon name={link.icon} className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block w-full py-3 bg-stone-950 dark:bg-white text-white dark:text-stone-900 text-center font-medium rounded-full hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
