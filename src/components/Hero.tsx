import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl opacity-90">{subtitle}</p>
      </div>
    </section>
  );
};