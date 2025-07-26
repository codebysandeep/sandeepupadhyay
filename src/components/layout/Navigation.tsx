import React from 'react';

interface NavigationItem {
  name: string;
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  order: number;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  onItemClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  className = '',
  orientation = 'horizontal',
  onItemClick,
}) => {
  // Sort items by order
  const sortedItems = [...items].sort((a, b) => a.order - b.order);

  const baseClasses = orientation === 'horizontal' 
    ? 'flex items-center space-x-8' 
    : 'flex flex-col space-y-2';

  const itemClasses = orientation === 'horizontal'
    ? 'text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium'
    : 'block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200';

  return (
    <nav className={`${baseClasses} ${className}`}>
      {sortedItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target={item.target || '_self'}
          className={itemClasses}
          onClick={onItemClick}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};