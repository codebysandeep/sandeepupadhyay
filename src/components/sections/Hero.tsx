import { Icon } from '../common/Icon';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '20+', label: 'Years Experience' },
  { value: '12+', label: 'Team Led' },
  { value: '$15M+', label: 'Revenue Earned' },
];

export function Hero() {
  return (
    <section className="relative bg-white dark:bg-stone-950 overflow-hidden">
      <div className="container-page py-14 lg:py-20">

        {/* Trust signal */}
        {/* <div className="flex items-center gap-2 mb-8 lg:mb-10">
          <Icon name="verified" size="sm" className="text-orange-600" />
          <span className="body-small font-medium text-foreground">
            Trusted by Fortune 500 financial, insurance &amp; technology organizations
          </span>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 xl:gap-16 items-start">

          {/* Left Content */}
          <div className="order-2 lg:order-1">

            {/* Headline */}
            <h1 className="title mb-6">
              Drive Profit.
              <br />
              Mitigate{' '}
              <span className="italic text-orange-600 dark:text-orange-500">Risk.</span>
            </h1>

            {/* Description */}
            <p className="body-p text-muted-foreground max-w-md mb-8">
              I architect accessibility-first enterprise design systems adopted by Fortune 500
              financial, insurance, and technology organizations, reducing regulatory risk and
              long-term development cost at scale.
            </p>

            {/* CTA */}
            <div className="mb-10 lg:mb-14">
              <a
                href="#contribution"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-stone-950 dark:bg-white text-white dark:text-stone-900 font-semibold rounded-full hover:bg-stone-700 dark:hover:bg-stone-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
              >
                View Contributions
                <Icon name="arrow_forward" size="sm" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-start gap-8 lg:gap-12 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="body-small text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content — editorial photo with floating badges */}
          <div className="order-1 lg:order-2">
            {/* Positioning context — no overflow-hidden so badges can bleed */}
            <div className="relative mx-auto max-w-sm lg:max-w-none">

              {/* Profile photo */}
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-orange-50 dark:bg-stone-800">
                <img
                  src="/images/sandeep-profile-bio.png"
                  alt="Sandeep Upadhyay, Principal Frontend Engineer and Strategic Accessibility Advisor"
                  className="w-full h-full object-contain object-bottom"
                  width="480"
                  height="640"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Floating pill badges — top right */}
              <div className="absolute top-5 -right-2 lg:-right-4 xl:-right-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 bg-white dark:bg-stone-800 border border-border rounded-full px-3 py-1.5 shadow-md">
                  <Icon name="verified" size="sm" className="text-orange-600" />
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">Principal Architect</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-stone-800 border border-border rounded-full px-3 py-1.5 shadow-md">
                  <Icon name="business_center" size="sm" className="text-orange-600" />
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">Enterprise Design System Architect</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-stone-800 border border-border rounded-full px-3 py-1.5 shadow-md">
                  <Icon name="business_center" size="sm" className="text-orange-600" />
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">Strategic Accessibility Advisor</span>
                </div>
              </div>

              {/* Floating orange stat card — left edge, mid-height */}
              <div className="absolute top-[30%] -left-4 lg:-left-8 bg-orange-600 text-white rounded-2xl p-4 shadow-xl">
                <div className="text-3xl font-bold leading-none mb-1">15+</div>
                <div className="text-sm opacity-90 leading-snug">Original<br />Contributors</div>
              </div>

              {/* Floating white stat card — bottom right */}
              <div className="absolute bottom-5 right-4 bg-white dark:bg-stone-900 rounded-2xl px-4 py-3 shadow-xl border border-border">
                <div className="text-2xl font-bold text-foreground leading-none mb-0.5">Sandeep</div>
                <div className="text-sm text-muted-foreground">Upadhyay</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
