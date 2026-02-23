import { Icon } from '../common/Icon';

interface Achievement {
  icon: string;
  title: string;
  description: string;
  stats?: string;
}

const achievements: Achievement[] = [
  {
    icon: 'mic',
    title: 'Conference Speaking',
    description: 'Keynote speaker at major design and tech conferences worldwide, sharing insights on design systems and accessibility.',
    stats: '50+ Talks',
  },
  {
    icon: 'school',
    title: 'Mentorship & Training',
    description: 'Led training programs and mentored engineers across organizations to build scalable design systems.',
    stats: '200+ Mentees',
  },
  {
    icon: 'article',
    title: 'Industry Publications',
    description: 'Published articles and research papers on frontend architecture, design tokens, and AI in design.',
    stats: '30+ Articles',
  },
  {
    icon: 'emoji_events',
    title: 'Awards & Recognition',
    description: 'Recognized for contributions to open source, accessibility advocacy, and design system innovation.',
    stats: '15+ Awards',
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="py-16 lg:py-24">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Label */}
          <p className="body-small text-orange-900 font-medium mb-4 inline-flex items-center gap-2">
            <Icon name="military_tech" size="sm" />
            Leadership & Impact
          </p>

          {/* Title */}
          <h2 className="display-2 mb-4">
            Driving Industry Change
          </h2>

          {/* Description */}
          <p className="body-p max-w-2xl mx-auto">
            Beyond building products, I focus on elevating teams, sharing knowledge,
            and contributing to the broader design and engineering community.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl border border-border bg-background hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-5 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/30 transition-colors">
                <Icon name={item.icon} size="lg" className="text-orange-600" />
              </div>

              {/* Stats Badge */}
              {item.stats && (
                <div className="inline-block px-3 py-1 mb-4 text-sm font-bold text-orange-900 bg-orange-50 dark:bg-orange-900/10 dark:text-orange-200 rounded-full">
                  {item.stats}
                </div>
              )}

              {/* Title */}
              <h3 className="display-5 mb-3 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="body-small text-stone-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-900 text-white rounded-lg font-medium hover:bg-orange-950 transition-colors"
          >
            <Icon name="calendar_month" size="sm" />
            Book a Speaking Engagement
          </a>
        </div>
      </div>
    </section>
  );
}
