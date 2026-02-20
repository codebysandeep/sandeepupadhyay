import { Icon } from '../common/Icon';

interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    id: '1',
    role: 'Principal Frontend Engineer & UI/UX Director',
    company: 'Fortune 500 Tech Company',
    location: 'San Francisco, CA',
    period: '2021 - Present',
    description: 'Leading design system architecture and frontend engineering for enterprise-scale applications.',
    highlights: [
      'Architected design system serving 200+ applications',
      'Led team of 15 frontend engineers',
      'Reduced development time by 40%',
    ],
    current: true,
  },
  {
    id: '2',
    role: 'Senior Frontend Architect',
    company: 'Global Financial Services',
    location: 'New York, NY',
    period: '2018 - 2021',
    description: 'Built and scaled frontend infrastructure for high-traffic financial platforms.',
    highlights: [
      'Migrated legacy systems to React',
      'Implemented accessibility standards (WCAG AA)',
      'Mentored 20+ developers',
    ],
  },
  {
    id: '3',
    role: 'Lead UI Engineer',
    company: 'Enterprise Software Inc.',
    location: 'Austin, TX',
    period: '2015 - 2018',
    description: 'Developed component libraries and design tokens for B2B SaaS products.',
    highlights: [
      'Created first design token system',
      'Built reusable component library',
      'Improved performance by 60%',
    ],
  },
  {
    id: '4',
    role: 'Frontend Developer',
    company: 'Digital Agency',
    location: 'Seattle, WA',
    period: '2012 - 2015',
    description: 'Delivered responsive web experiences for diverse client portfolio.',
    highlights: [
      'Shipped 50+ client projects',
      'Specialized in responsive design',
      'Won 3 design awards',
    ],
  },
];

export function ProfessionalJourney() {
  return (
    <section id="journey" className="py-16 lg:py-24">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Label */}
          <p className="body-small text-orange-900 font-medium mb-4 inline-flex items-center gap-2">
            <Icon name="timeline" size="sm" />
            Professional Journey
          </p>

          {/* Title */}
          <h2 className="display-h3 mb-4">
            Experience & Growth
          </h2>

          {/* Description */}
          <p className="body-p max-w-2xl mx-auto">
            Over two decades of building, scaling, and leading frontend teams
            across Fortune 500 companies and innovative startups.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-4 border-background bg-orange-600 z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-orange-600 animate-ping opacity-50" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-6 rounded-xl border border-border bg-background hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-sm font-medium text-orange-900 bg-orange-50 dark:bg-orange-900/10 dark:text-orange-200 rounded-full">
                      <Icon name="calendar_month" size="xs" />
                      {exp.period}
                      {exp.current && (
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      )}
                    </div>

                    {/* Role */}
                    <h3 className="display-h6 mb-2">{exp.role}</h3>

                    {/* Company & Location */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm text-stone-700">
                      <span className="flex items-center gap-1.5 font-medium text-foreground">
                        <Icon name="business" size="xs" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Icon name="location_on" size="xs" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="body-small text-stone-700 mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300"
                        >
                          <Icon name="check_circle" size="xs" className="text-green-600 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg font-medium hover:bg-secondary hover:border-orange-300 transition-colors"
          >
            <Icon name="download" size="sm" />
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
