import { useState, useEffect, useRef } from 'react';
import { Icon } from '../common/Icon';
import { SocialIcon, type SocialIconName } from '../common/SocialIcon';

// Navigation items — single source of truth
const navItems = [
  { label: 'Home',         href: '/' },
  { label: 'Expertise',   href: '#expertise' },
  { label: 'Contribution',href: '#contribution' },
  { label: 'Watch',       href: '#watch' },
  { label: 'Articles',    href: '#articles' },
  { label: 'About',       href: '#about' },
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

// Theme Toggle Component
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

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FEEDE8] dark:bg-stone-900 border-b border-[#e7e5e4] dark:border-stone-800">
      <div className="container-page">
        <nav className="flex items-center justify-between h-16 lg:h-[72px]" aria-label="Main">

          {/* Logo */}
          <a
            href="/"
            className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 rounded-sm"
            aria-label="Sandeep Upadhyay — Home"
          >
            <img
              src="/images/sandeep-upadhyay-logo.svg"
              alt="Sandeep Upadhyay"
              className="h-6 lg:h-7 w-auto dark:invert"
              width="760"
              height="80"
            />
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
                <SocialIcon name={link.icon} className="w-5 h-5" />
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
            {/* Theme + Social Links */}
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
                  <SocialIcon name={link.icon} className="w-5 h-5" />
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
