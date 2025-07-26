import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Globe } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  title?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  order: number;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
  variant?: 'default' | 'minimal' | 'button';
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  className = '',
  iconSize = 20,
  showLabels = false,
  variant = 'default',
}) => {
  // Sort links by order
  const sortedLinks = [...links].sort((a, b) => a.order - b.order);

  const getIcon = (iconName: string) => {
    const iconProps = { size: iconSize };
    
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github {...iconProps} />;
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      case 'twitter':
      case 'x':
        return <Twitter {...iconProps} />;
      case 'email':
      case 'mail':
        return <Mail {...iconProps} />;
      case 'website':
      case 'globe':
      case 'portfolio':
        return <Globe {...iconProps} />;
      case 'external':
        return <ExternalLink {...iconProps} />;
      default:
        return <ExternalLink {...iconProps} />;
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'minimal':
        return 'text-foreground/60 hover:text-foreground transition-colors duration-200';
      case 'button':
        return 'inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200';
      case 'default':
      default:
        return 'text-foreground/80 hover:text-foreground hover:bg-accent p-2 rounded-md transition-colors duration-200';
    }
  };

  if (sortedLinks.length === 0) {
    return null;
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {sortedLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.target || '_blank'}
          rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
          className={getVariantClasses()}
          title={link.title || link.name}
          aria-label={link.title || link.name}
        >
          {getIcon(link.icon)}
          {showLabels && (
            <span className={variant === 'button' ? 'ml-2' : 'ml-1 text-sm'}>
              {link.name}
            </span>
          )}
        </a>
      ))}
    </div>
  );
};

// Predefined social link configurations
export const defaultSocialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/sandeepupadhyay',
    icon: 'github',
    title: 'View GitHub Profile',
    order: 1,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sandeepupadhyay',
    icon: 'linkedin',
    title: 'Connect on LinkedIn',
    order: 2,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/sandeepupadhyay',
    icon: 'twitter',
    title: 'Follow on Twitter',
    order: 3,
  },
  {
    name: 'Email',
    url: 'mailto:hello@sandeepupadhyay.com',
    icon: 'email',
    title: 'Send an Email',
    target: '_self',
    order: 4,
  },
];

// Quick social links component with default links
export const QuickSocialLinks: React.FC<{
  className?: string;
  variant?: 'default' | 'minimal' | 'button';
  showLabels?: boolean;
}> = ({ className, variant, showLabels }) => (
  <SocialLinks
    links={defaultSocialLinks}
    className={className}
    variant={variant}
    showLabels={showLabels}
  />
);