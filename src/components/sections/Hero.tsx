import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { SocialLinks } from './common/SocialLinks';

interface HeroProps {
  headline: string;
  subheadline: string;
  backgroundImage?: string;
  personaImage?: string;
  ctaButton?: {
    text: string;
    link: string;
    target?: string;
  };
  socialLinks?: Array<{
    name: string;
    url: string;
    icon: string;
    title?: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    order: number;
  }>;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  backgroundImage,
  personaImage,
  ctaButton,
  socialLinks = [],
  className = '',
}) => {
  return (
    <section 
      className={`relative min-h-screen flex items-center py-20 ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {headline}
              </h1>
              <p className="text-xl sm:text-2xl text-foreground/80 leading-relaxed">
                {subheadline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaButton && (
                <a
                  href={ctaButton.link}
                  target={ctaButton.target || '_self'}
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-200 group"
                >
                  {ctaButton.text}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              )}
              
              <a
                href="#resume"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-foreground border border-border hover:bg-accent transition-colors duration-200"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-foreground/60">Connect with me:</span>
                <SocialLinks links={socialLinks} variant="minimal" />
              </div>
            )}
          </div>

          {/* Image */}
          {personaImage && (
            <div className="lg:order-last animate-slide-up">
              <div className="relative">
                <img
                  src={personaImage}
                  alt="Sandeep Upadhyay"
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-foreground/60"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};