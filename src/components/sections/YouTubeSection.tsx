import { Icon } from '../common/Icon';

interface Video {
  id: string;
  title: string;
  thumbnail?: string;
  duration?: string;
  speaker?: string;
  speakerTitle?: string;
}

const featuredVideo: Video = {
  id: 'featured',
  title: 'The Future of Design System and AI',
  speaker: 'Brad Frost',
  speakerTitle: 'AI & Design Systems Expert',
  duration: '45:23',
};

const relatedVideos: Video[] = [
  {
    id: '1',
    title: 'The Future of Design System and AI',
    duration: '32:15',
  },
  {
    id: '2',
    title: 'Generative AI Design Token Optimization and Interactions',
    duration: '28:42',
  },
  {
    id: '3',
    title: 'Run ClaudeBot Locally with and Interactions',
    duration: '18:30',
  },
];

export function YouTubeSection() {
  return (
    <section id="watch" className="py-16 lg:py-24">
      <div className="container-page">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          {/* YouTube Logo */}
          <div className="flex items-center gap-3">
            <svg
              className="h-8 w-auto text-red-600"
              viewBox="0 0 90 20"
              fill="currentColor"
              aria-label="YouTube"
            >
              <path d="M27.973 6.267c-.293-1.107-1.16-1.98-2.26-2.273C23.63 3.5 15 3.5 15 3.5s-8.63 0-10.713.494c-1.1.293-1.967 1.166-2.26 2.273C1.5 8.354 1.5 12.667 1.5 12.667s0 4.313.527 6.4c.293 1.107 1.16 1.98 2.26 2.273C6.37 21.834 15 21.834 15 21.834s8.63 0 10.713-.494c1.1-.293 1.967-1.166 2.26-2.273.527-2.087.527-6.4.527-6.4s0-4.313-.527-6.4zM12.5 16.167V9.167l6.667 3.5-6.667 3.5z" />
              <path d="M41.24 17.65c-1.67 0-2.86-.46-3.57-1.38-.71-.92-1.07-2.32-1.07-4.2 0-1.92.37-3.35 1.1-4.29.73-.94 1.83-1.41 3.28-1.41.95 0 1.74.2 2.37.59.63.39 1.1.97 1.41 1.73l-1.6.65c-.17-.49-.44-.87-.81-1.13-.37-.26-.82-.39-1.35-.39-.85 0-1.48.33-1.89 1-.41.67-.62 1.69-.62 3.05v.63c0 1.41.2 2.44.61 3.1.41.66 1.04.99 1.9.99.56 0 1.03-.12 1.41-.35.38-.23.65-.57.81-1.02l1.59.67c-.32.74-.8 1.31-1.44 1.7-.64.39-1.41.58-2.3.58zm9.32 0c-1.51 0-2.66-.46-3.45-1.39-.79-.93-1.18-2.29-1.18-4.09 0-1.84.4-3.25 1.21-4.22.81-.97 1.96-1.46 3.47-1.46 1.47 0 2.6.48 3.39 1.44.79.96 1.18 2.34 1.18 4.14v.71h-7.36c.04 1.1.28 1.92.72 2.47.44.55 1.09.82 1.95.82.61 0 1.12-.14 1.53-.43.41-.29.7-.7.87-1.24l1.64.57c-.32.85-.83 1.5-1.53 1.96-.7.46-1.55.69-2.55.69h.11v.03zm-.03-9.78c-.74 0-1.31.24-1.71.72-.4.48-.64 1.18-.72 2.1h4.8c-.04-.9-.26-1.59-.66-2.08-.4-.49-.97-.74-1.71-.74zm6.15 9.53V6.57h1.64l.17 1.41h.07c.27-.51.64-.91 1.11-1.19.47-.28 1.01-.42 1.62-.42.35 0 .66.04.93.11l-.28 1.73c-.31-.08-.6-.12-.87-.12-.56 0-1.05.19-1.47.57-.42.38-.63.87-.63 1.47v7.29h-1.91l-.38-.01zm7.31 0V6.57h1.64l.18 1.63h.06c.25-.58.62-1.03 1.11-1.35.49-.32 1.05-.48 1.68-.48 1.03 0 1.82.34 2.37 1.01.55.67.82 1.65.82 2.94v7.1h-1.91v-6.84c0-.81-.15-1.41-.45-1.8-.3-.39-.77-.58-1.41-.58-.61 0-1.12.21-1.53.62-.41.41-.62.95-.62 1.62v6.98h-1.94zm14.49.25c-1.51 0-2.66-.46-3.45-1.39-.79-.93-1.18-2.29-1.18-4.09 0-1.84.4-3.25 1.21-4.22.81-.97 1.96-1.46 3.47-1.46 1.47 0 2.6.48 3.39 1.44.79.96 1.18 2.34 1.18 4.14v.71h-7.36c.04 1.1.28 1.92.72 2.47.44.55 1.09.82 1.95.82.61 0 1.12-.14 1.53-.43.41-.29.7-.7.87-1.24l1.64.57c-.32.85-.83 1.5-1.53 1.96-.7.46-1.55.69-2.55.69h.11v.03zm-.03-9.78c-.74 0-1.31.24-1.71.72-.4.48-.64 1.18-.72 2.1h4.8c-.04-.9-.26-1.59-.66-2.08-.4-.49-.97-.74-1.71-.74z" />
            </svg>
          </div>

          {/* Watch All Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg font-medium hover:bg-secondary hover:border-orange-300 transition-colors"
          >
            Watch all Videos
            <Icon name="arrow_forward" size="sm" />
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Featured Video */}
          <div className="lg:col-span-2">
            <a href="#" className="group block">
              {/* Thumbnail */}
              <div className="relative aspect-video rounded-xl bg-stone-900 overflow-hidden mb-4">
                {featuredVideo.thumbnail ? (
                  <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
                    {/* Speaker placeholder */}
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-stone-700 flex items-center justify-center">
                        <Icon name="person" size="xl" className="text-stone-500" />
                      </div>
                      <p className="text-white font-semibold">{featuredVideo.speaker}</p>
                      <p className="text-stone-400 text-sm">{featuredVideo.speakerTitle}</p>
                    </div>
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Icon name="play_arrow" size="lg" className="text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                {featuredVideo.duration && (
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded text-xs text-white font-medium">
                    {featuredVideo.duration}
                  </div>
                )}
              </div>

              {/* Video Info */}
              <h3 className="display-h5 group-hover:text-orange-600 transition-colors mb-2">
                {featuredVideo.title}
              </h3>
              <p className="body-medium">
                Watch to explore a design system with AI - from the inception to production-ready AI tools.
              </p>
            </a>
          </div>

          {/* Related Videos */}
          <div className="space-y-4">
            {relatedVideos.map((video) => (
              <a
                key={video.id}
                href="#"
                className="group flex gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                {/* Thumbnail */}
                <div className="relative flex-shrink-0 w-32 aspect-video rounded-lg bg-stone-200 dark:bg-stone-800 overflow-hidden">
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="play_circle" size="md" className="text-stone-400" />
                    </div>
                  )}

                  {/* Duration */}
                  {video.duration && (
                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 rounded text-xs text-white">
                      {video.duration}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="body-medium font-medium text-foreground group-hover:text-orange-600 transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
