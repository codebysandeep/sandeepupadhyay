import { Icon } from '../common/Icon';

interface Contribution {
  title: string;
  description: string;
  image?: string;
  rating?: string;
  tags: string[];
  link?: string;
}

const contributions: Contribution[] = [
  {
    title: 'Color Contrast Checker',
    description: 'Ensure your designs meet accessibility standards.',
    rating: '8.8',
    tags: ['Accessibility', 'Design Tool'],
  },
  {
    title: 'Color Bot',
    description: 'AI-powered color palette generator for design systems.',
    rating: '8.8',
    tags: ['AI', 'Color System'],
  },
  {
    title: 'Convert Tokens to DTCG',
    description: 'Transform design tokens to Design Token Community Group format.',
    rating: '8.8',
    tags: ['Design Tokens', 'Automation'],
  },
  {
    title: 'Design System Generator',
    description: 'Scaffold complete design systems from scratch, or start from an existing design library.',
    rating: '8.8',
    tags: ['Design System', 'Generator'],
  },
];

export function Contributions() {
  return (
    <section id="contribution" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            {/* Label */}
            <p className="body-small text-orange-900 font-medium mb-4 flex items-center gap-2">
              <Icon name="code" size="sm" />
              Original contributions
            </p>

            {/* Title */}
            <h2 className="display-h3 mb-4">
              Signature Systems &<br />
              Enterprise Contributions
            </h2>

            {/* Description */}
            <p className="body-p max-w-xl">
              Original systems designed, adopted, and scaled across enterprise platforms.
            </p>
          </div>

          {/* View All Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg font-medium hover:bg-background hover:border-orange-300 transition-colors whitespace-nowrap"
          >
            View all Contributions
            <Icon name="arrow_forward" size="sm" />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contributions.map((item) => (
            <a
              key={item.title}
              href={item.link || '#'}
              className="group block p-4 rounded-xl border border-border bg-background hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] rounded-lg bg-stone-100 dark:bg-stone-800 mb-4 overflow-hidden flex items-center justify-center">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Icon name="deployed_code" size="xl" className="text-stone-300 dark:text-stone-600" />
                )}

                {/* Rating Badge */}
                {item.rating && (
                  <div className="absolute top-3 left-3 px-2 py-1 bg-background/90 backdrop-blur-sm rounded-md text-sm font-bold text-foreground">
                    {item.rating}
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="display-h6 mb-2 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>

              <p className="body-small text-stone-700 mb-3 line-clamp-2">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-medium rounded bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
