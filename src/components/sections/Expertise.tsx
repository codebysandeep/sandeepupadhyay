import { Icon } from '../common/Icon';

interface ExpertiseItem {
  number: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

const expertiseItems: ExpertiseItem[] = [
  {
    number: '01',
    icon: 'hub',
    title: 'Enterprise Digital Platform Architecture',
    description: 'Scalable frontend platforms for multi-technology ecosystems.',
    tags: ['Microfrontend', 'Multi-Team', 'Scalability'],
  },
  {
    number: '02',
    icon: 'design_services',
    title: 'Design Systems Engineering',
    description: 'Reusable, framework-agnostic design systems with automated distribution.',
    tags: ['Design Tokens', 'Modular Components'],
  },
  {
    number: '03',
    icon: 'accessibility_new',
    title: 'Accessibility-First Software Systems',
    description: 'Regulatory accessibility standards embedded in system architecture.',
    tags: ['WCAG 2.2 AA/AAA', 'Section 508', 'ADA'],
  },
  {
    number: '04',
    icon: 'smart_toy',
    title: 'AI-Assisted Frontend Engineering',
    description: 'AI tools accelerating workflows and improving system quality.',
    tags: ['AI Tools', 'Design to Code'],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-16 lg:py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            {/* Label */}
            <p className="body-small text-orange-900 font-medium mb-4 flex items-center gap-2">
              <Icon name="lightbulb" size="sm" />
              How I can help
            </p>

            {/* Title */}
            <h2 className="display-h3 mb-6">
              Areas of
              <br />
              Specialized
              <br />
              Expertise
            </h2>

            {/* Description */}
            <p className="body-p max-w-md">
              Leading enterprise-scale digital transformation through accessible design systems,
              regulatory compliance, and innovative frontend architecture.
            </p>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            {expertiseItems.map((item) => (
              <div
                key={item.number}
                className="group flex gap-4 p-5 rounded-xl border border-border bg-background hover:border-orange-300 hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center text-orange-600 group-hover:bg-orange-100 dark:group-hover:bg-orange-950/50 transition-colors">
                  <Icon name={item.icon} size="md" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="display-h6 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <span className="flex-shrink-0 text-2xl font-bold text-stone-600 dark:text-stone-400" aria-hidden="true">
                      {item.number}
                    </span>
                  </div>

                  <p className="body-medium mb-3">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
