import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/sandeepupadhyay', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/sandeepupadhyay', icon: FaLinkedin },
    { name: 'Twitter', href: 'https://twitter.com/sandeepupadhyay', icon: FaTwitter },
    { name: 'Email', href: 'mailto:hello@sandeepupadhyay.com', icon: FaEnvelope },
  ];

  return (
    <footer className={`border-t bg-background ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary">SU</span>
              </div>
              <p className="text-foreground/80 text-sm leading-6">
                Principal Frontend Engineer & UI/UX Director crafting exceptional digital experiences
                with modern web technologies.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Navigation
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Connect
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-foreground transition-colors duration-200"
                      aria-label={link.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-foreground/60 text-xs">
                © {new Date().getFullYear()} Sandeep Upadhyay. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <p className="text-foreground/60 text-xs">
                  Built with Astro, React, TailwindCSS & TinaCMS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};