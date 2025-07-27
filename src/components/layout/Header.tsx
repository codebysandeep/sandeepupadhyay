import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoSunny, IoMoon } from 'react-icons/io5';
import { Navigation } from './Navigation';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: 'About Me', href: '#about', order: 1 },
    { name: 'Blog', href: '/blog', order: 2 },
    { name: 'Projects', href: '/projects', order: 3 },
  ];

  const actionItems = [
    { name: 'Resume', href: '#resume' },
    { name: 'Contact Me', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-nav supports-[backdrop-filter]:bg-background/60 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">SU</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <Navigation items={navItems} orientation="horizontal" />
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-accent transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
            </button>
            {actionItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-accent transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-accent transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Navigation 
                items={navItems} 
                orientation="vertical" 
                onItemClick={() => setIsMenuOpen(false)} 
              />
              <div className="pt-4 border-t space-y-2">
                {actionItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block w-full text-center px-3 py-2 text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};