import { useState, useEffect, useRef } from 'react';
import { Icon } from '../common/Icon';

// Navigation items - single source of truth
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contribution', href: '#contribution' },
  { label: 'Watch', href: '#watch' },
  { label: 'Articles', href: '#articles' },
  { label: 'About', href: '#about' },
];

// Social links with brand SVGs (Material Icons doesn't include brand logos)
const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/user',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/user',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com/user',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
      </svg>
    ),
  },
];

// Theme Toggle Component (inline for simplicity)
function ThemeToggle() {
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

  if (!mounted) return <div className="w-5 h-5" />;

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 text-[#1C1917] dark:text-stone-200 hover:text-orange-600 dark:hover:text-orange-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 rounded-md"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Icon name={theme === 'light' ? 'dark_mode' : 'light_mode'} size="sm" />
    </button>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu on escape key
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Close menu when clicking nav link
  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FEEDE8] dark:bg-stone-900 border-b border-[#e7e5e4] dark:border-stone-800">
      <div className="container-page">
        <nav className="flex items-center justify-between h-16 lg:h-[72px]" aria-label="Main">

          {/* Logo */}
          <a
            href="/"
            className="font-display text-lg lg:text-xl font-medium text-[#1C1917] dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors shrink-0"
          >
            Sandeep Upadhyay
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1 ml-12">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-[#1C1917] dark:text-stone-200 hover:text-orange-600 dark:hover:text-orange-500 transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Contact Button */}
            <a
              href="#contact"
              className="px-5 py-2 bg-[#1C1917] dark:bg-white text-white dark:text-stone-900 text-sm font-medium rounded-full hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
            >
              Contact
            </a>

            {/* Divider */}
            <div className="w-px h-6 bg-[#e7e5e4] dark:bg-stone-700 mx-3" aria-hidden="true" />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Social Links */}
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#1C1917] dark:text-stone-200 hover:text-orange-600 dark:hover:text-orange-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 rounded-md"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#1C1917] dark:text-stone-200 hover:text-orange-600 dark:hover:text-orange-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 rounded-md"
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
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#FEEDE8] dark:bg-stone-900 border-t border-[#e7e5e4] dark:border-stone-800 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="container-page py-6 flex flex-col h-full">
          {/* Nav Links */}
          <ul className="space-y-1" role="menu">
            {navItems.map((item) => (
              <li key={item.label} role="none">
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block px-4 py-3 text-lg font-medium text-[#1C1917] dark:text-stone-200 hover:text-orange-600 dark:hover:text-orange-500 hover:bg-orange-100 dark:hover:bg-stone-800 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
                  role="menuitem"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Footer */}
          <div className="mt-auto pt-6 border-t border-[#e7e5e4] dark:border-stone-800">
            {/* Social Links */}
            <div className="flex items-center gap-2 mb-4">
              <ThemeToggle />
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-[#1C1917] dark:text-stone-200 hover:text-orange-600 dark:hover:text-orange-500 border border-[#e7e5e4] dark:border-stone-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block w-full py-3 bg-[#1C1917] dark:bg-white text-white dark:text-stone-900 text-center font-medium rounded-full hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
