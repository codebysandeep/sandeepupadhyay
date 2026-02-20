interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  filled?: boolean;
}

export function Icon({ name, size = 'md', className = '', filled = false }: IconProps) {
  const sizeClasses = {
    sm: 'icon-sm',
    md: 'icon-md',
    lg: 'icon-lg',
    xl: 'icon-xl',
  };

  return (
    <span
      className={`material-symbols-outlined ${sizeClasses[size]} ${className}`}
      style={{ fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0" }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
