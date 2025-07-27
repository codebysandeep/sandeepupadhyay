import React, { useState, useEffect } from 'react';
import { IoSunny, IoMoon, IoDesktop } from 'react-icons/io5';

type Theme = 'light' | 'dark' | 'system';

interface ThemeToggleProps {
  className?: string;
  showSystemOption?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showSystemOption = false,
}) => {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get saved theme from localStorage or default to system
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', systemPrefersDark);
    } else {
      root.classList.toggle('dark', newTheme === 'dark');
    }
  };

  const toggleTheme = () => {
    let newTheme: Theme;
    
    if (showSystemOption) {
      // Cycle through: light -> dark -> system
      switch (theme) {
        case 'light':
          newTheme = 'dark';
          break;
        case 'dark':
          newTheme = 'system';
          break;
        case 'system':
        default:
          newTheme = 'light';
          break;
      }
    } else {
      // Toggle between light and dark only
      newTheme = theme === 'light' ? 'dark' : 'light';
    }

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  // Listen for system theme changes when theme is set to 'system'
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  if (!mounted) {
    return (
      <button
        className={`p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-accent transition-colors duration-200 ${className}`}
        disabled
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <IoSunny size={20} />;
      case 'dark':
        return <IoMoon size={20} />;
      case 'system':
        return <IoDesktop size={20} />;
      default:
        return <IoSunny size={20} />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return showSystemOption ? 'Switch to system theme' : 'Switch to light mode';
      case 'system':
        return 'Switch to light mode';
      default:
        return 'Toggle theme';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-accent transition-colors duration-200 ${className}`}
      aria-label={getLabel()}
      title={getLabel()}
    >
      {getIcon()}
    </button>
  );
};

// Hook to use theme state in other components
export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    setThemeState(savedTheme);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    
    const root = document.documentElement;
    if (newTheme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', systemPrefersDark);
    } else {
      root.classList.toggle('dark', newTheme === 'dark');
    }
  };

  return { theme, setTheme, mounted };
};