import { Icon } from '../common/Icon';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Building Scalable Design Systems with AI-Powered Tooling',
    excerpt: 'Explore how artificial intelligence is transforming the way we create, maintain, and scale design systems across enterprise organizations.',
    category: 'Design Systems',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: '2',
    title: 'The Complete Guide to Design Tokens',
    excerpt: 'A deep dive into design tokens, from basic concepts to advanced implementation strategies.',
    category: 'Design Tokens',
    date: 'Jan 10, 2025',
    readTime: '12 min read',
  },
  {
    id: '3',
    title: 'Accessibility Best Practices for Modern Web Apps',
    excerpt: 'Essential techniques for building inclusive and accessible web applications.',
    category: 'Accessibility',
    date: 'Jan 5, 2025',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Advanced strategies for optimizing React applications at scale.',
    category: 'React',
    date: 'Dec 28, 2024',
    readTime: '10 min read',
  },
];

const featuredArticle = articles.find((a) => a.featured);
const recentArticles = articles.filter((a) => !a.featured);

export function Articles() {
  return (
    <section id="articles" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            {/* Label */}
            <p className="body-small text-orange-900 font-medium mb-4 flex items-center gap-2">
              <Icon name="edit_note" size="sm" />
              Latest Articles
            </p>

            {/* Title */}
            <h2 className="display-h3 mb-4">
              Insights & Perspectives
            </h2>

            {/* Description */}
            <p className="body-p max-w-xl">
              Thoughts on design systems, frontend architecture, accessibility, and the future of web development.
            </p>
          </div>

          {/* View All Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg font-medium hover:bg-background hover:border-orange-300 transition-colors whitespace-nowrap"
          >
            View all Articles
            <Icon name="arrow_forward" size="sm" />
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Featured Article */}
          {featuredArticle && (
            <a href="#" className="group block">
              <article className="h-full p-6 rounded-xl border border-border bg-background hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] rounded-lg bg-stone-100 dark:bg-stone-800 mb-5 overflow-hidden">
                  {featuredArticle.image ? (
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-stone-100 dark:from-orange-900/20 dark:to-stone-800">
                      <Icon name="article" size="xl" className="text-orange-300 dark:text-orange-700" />
                    </div>
                  )}

                  {/* Featured Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-orange-900 text-white text-xs font-bold rounded-full">
                    Featured
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3 text-sm text-stone-700">
                  <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/20 text-orange-900 dark:text-orange-200 rounded font-medium">
                    {featuredArticle.category}
                  </span>
                  <span>{featuredArticle.date}</span>
                  <span className="flex items-center gap-1">
                    <Icon name="schedule" size="xs" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="display-h5 mb-3 group-hover:text-orange-700 transition-colors">
                  {featuredArticle.title}
                </h3>

                {/* Excerpt */}
                <p className="body-medium text-stone-700 line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                {/* Read More */}
                <div className="mt-4 inline-flex items-center gap-2 text-orange-900 font-medium">
                  Read Article
                  <Icon name="arrow_forward" size="sm" className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </a>
          )}

          {/* Recent Articles */}
          <div className="space-y-4">
            {recentArticles.map((article) => (
              <a key={article.id} href="#" className="group block">
                <article className="flex gap-4 p-4 rounded-xl border border-border bg-background hover:border-orange-300 hover:shadow-md transition-all duration-300">
                  {/* Thumbnail */}
                  <div className="relative flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg bg-stone-100 dark:bg-stone-800 overflow-hidden">
                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon name="description" size="lg" className="text-stone-300 dark:text-stone-600" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Meta */}
                    <div className="flex items-center gap-2 mb-2 text-xs text-stone-700">
                      <span className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded font-medium">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>

                    {/* Title */}
                    <h4 className="body-medium font-semibold text-foreground group-hover:text-orange-700 transition-colors line-clamp-2 mb-2">
                      {article.title}
                    </h4>

                    {/* Excerpt - hidden on mobile */}
                    <p className="hidden sm:block body-small text-stone-700 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Date */}
                    <p className="mt-2 text-xs text-stone-800 dark:text-stone-200">
                      {article.date}
                    </p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
