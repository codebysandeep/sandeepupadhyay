import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'text' | 'card' | 'image' | 'list' | 'hero' | 'custom';
  width?: string;
  height?: string;
  className?: string;
  count?: number;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'text',
  width,
  height,
  className = '',
  count = 1,
}) => {
  const baseClasses = 'animate-skeleton bg-muted rounded';

  const variantClasses = {
    text: 'h-4 w-3/4',
    card: 'h-48 w-full',
    image: 'h-40 w-full',
    list: 'h-12 w-full',
    hero: 'h-96 w-full',
    custom: '',
  };

  const skeletonStyle = {
    width: width || undefined,
    height: height || undefined,
  };

  const getVariantClasses = () => {
    if (variant === 'custom') {
      return '';
    }
    return variantClasses[variant];
  };

  if (count === 1) {
    return (
      <div
        className={`${baseClasses} ${getVariantClasses()} ${className}`}
        style={skeletonStyle}
      />
    );
  }

  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`${baseClasses} ${getVariantClasses()} ${className}`}
          style={skeletonStyle}
        />
      ))}
    </div>
  );
};

// Specific skeleton components for common use cases
export const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({
  lines = 3,
  className = '',
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <SkeletonLoader
        key={index}
        variant="text"
        width={index === lines - 1 ? '60%' : '100%'}
      />
    ))}
  </div>
);

export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-6 border rounded-lg ${className}`}>
    <SkeletonLoader variant="image" className="mb-4" />
    <SkeletonLoader variant="text" width="80%" className="mb-2" />
    <TextSkeleton lines={2} />
  </div>
);

export const HeroSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`py-20 ${className}`}>
    <div className="container mx-auto px-4 text-center">
      <SkeletonLoader variant="text" width="60%" height="3rem" className="mb-4 mx-auto" />
      <SkeletonLoader variant="text" width="40%" height="1.5rem" className="mx-auto" />
    </div>
  </div>
);

export const ProjectCardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-card rounded-lg border overflow-hidden ${className}`}>
    <SkeletonLoader variant="image" height="12rem" />
    <div className="p-6">
      <SkeletonLoader variant="text" width="80%" className="mb-2" />
      <TextSkeleton lines={2} className="mb-4" />
      <div className="flex space-x-2 mb-4">
        <SkeletonLoader width="60px" height="24px" />
        <SkeletonLoader width="80px" height="24px" />
        <SkeletonLoader width="70px" height="24px" />
      </div>
      <div className="flex space-x-3">
        <SkeletonLoader width="80px" height="32px" />
        <SkeletonLoader width="100px" height="32px" />
      </div>
    </div>
  </div>
);

export const BlogCardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-card rounded-lg border overflow-hidden ${className}`}>
    <SkeletonLoader variant="image" height="10rem" />
    <div className="p-6">
      <SkeletonLoader width="40px" height="16px" className="mb-2" />
      <SkeletonLoader variant="text" width="90%" className="mb-2" />
      <TextSkeleton lines={2} className="mb-4" />
      <div className="flex items-center space-x-4">
        <SkeletonLoader width="60px" height="16px" />
        <SkeletonLoader width="80px" height="16px" />
      </div>
    </div>
  </div>
);