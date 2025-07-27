import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

interface Skill {
  name: string;
  logo: string;
  proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Frontend' | 'Backend' | 'Design' | 'Tools' | 'Other';
  yearsOfExperience?: number;
  order: number;
  featured: boolean;
}

interface SkillsProps {
  headline: string;
  subheadline: string;
  skills: Skill[];
  displayStyle?: 'grid' | 'carousel';
  className?: string;
}

export const Skills: React.FC<SkillsProps> = ({
  headline,
  subheadline,
  skills,
  displayStyle = 'grid',
  className = '',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];
  
  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);
  
  // Sort skills by order
  const sortedSkills = [...filteredSkills].sort((a, b) => a.order - b.order);

  const getProficiencyColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-amber-500';
      case 'Beginner':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getProficiencyPercentage = (level: string) => {
    switch (level) {
      case 'Expert':
        return '90%';
      case 'Advanced':
        return '75%';
      case 'Intermediate':
        return '60%';
      case 'Beginner':
        return '40%';
      default:
        return '50%';
    }
  };

  return (
    <section className={`py-20 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {headline}
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {subheadline}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              <FaFilter className="inline w-4 h-4 mr-1" />
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {sortedSkills.map((skill) => (
            <div
              key={skill.name}
              className={`group relative bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                skill.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {/* Skill Logo */}
              <div className="flex justify-center mb-4">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Skill Name */}
              <h3 className="text-center font-semibold text-foreground mb-2">
                {skill.name}
              </h3>

              {/* Proficiency Level */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-foreground/60">
                    {skill.proficiencyLevel}
                  </span>
                  {skill.yearsOfExperience && (
                    <span className="text-xs text-foreground/60">
                      {skill.yearsOfExperience}y
                    </span>
                  )}
                </div>
                
                {/* Proficiency Bar */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getProficiencyColor(skill.proficiencyLevel)} transition-all duration-500`}
                    style={{ width: getProficiencyPercentage(skill.proficiencyLevel) }}
                  />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-2 right-2">
                <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {skill.category}
                </span>
              </div>

              {/* Featured Badge */}
              {skill.featured && (
                <div className="absolute -top-1 -left-1">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No skills message */}
        {sortedSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60">No skills found in the {selectedCategory} category.</p>
          </div>
        )}

        {/* Featured Skills Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-foreground/60">
            Skills marked with a dot are frequently used in my current projects
          </p>
        </div>
      </div>
    </section>
  );
};