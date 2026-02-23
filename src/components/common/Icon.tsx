/**
 * Icon — Material Icons wrapper.
 *
 * Uses the `material-icons` npm package (self-hosted, no CDN).
 * Font is loaded via globals.css → material-icons/iconfont/outlined.css + filled.css
 *
 * Variants:
 *   default (filled=false) → material-icons-outlined class
 *   filled=true            → material-icons class (filled variant)
 *
 * Usage:
 *   <Icon name="arrow_forward" />
 *   <Icon name="star" size="lg" filled />
 *   <Icon name="home" size="sm" className="text-orange-600" />
 *
 * Icon names: https://fonts.google.com/icons
 */

interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  filled?: boolean;
}

export function Icon({ name, size = 'md', className = '', filled = false }: IconProps) {
  const sizeClass = {
    sm: 'icon-sm',
    md: 'icon-md',
    lg: 'icon-lg',
    xl: 'icon-xl',
  }[size];

  const variantClass = filled ? 'material-icons' : 'material-icons-outlined';

  return (
    <span
      className={`${variantClass} ${sizeClass} ${className}`}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
