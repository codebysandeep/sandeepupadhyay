import { Icon } from '../common/Icon';
import { SocialIcon } from '../common/SocialIcon';

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
          {/* YouTube section identifier */}
          <div className="flex items-center gap-2">
            <SocialIcon name="youtube" className="w-8 h-8 text-red-600" />
            <span className="text-xl font-bold tracking-tight text-[#1C1917] dark:text-white">
              YouTube
            </span>
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
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded text-sm text-white font-medium">
                    {featuredVideo.duration}
                  </div>
                )}
              </div>

              {/* Video Info */}
              <h3 className="display-4 group-hover:text-orange-600 transition-colors mb-2">
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
                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 rounded text-sm text-white">
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
