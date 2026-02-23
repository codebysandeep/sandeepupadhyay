import { Icon } from '../common/Icon';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '20+', label: 'Years' },
  { value: '100k+', label: 'Modules' },
  { value: '25+', label: 'Projects' },
  { value: '12+', label: 'Deals' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20">

      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Headline */}
            <h1 className="title mb-6">
              Rive Profit.
              <br />
              Mitigate Risk.
            </h1>

            {/* Description */}
            <p className="body-p max-w-xl mb-8">
              I architect accessibility-first enterprise design systems adopted by Fortune 500
              financial, insurance, and technology organizations,{' '}
              <span className="text-foreground font-medium">
                reducing regulatory risk and long-term development cost at scale.
              </span>
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contribution"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-900 text-white font-medium rounded-lg hover:bg-orange-950 transition-colors"
              >
                View Contribution
                <Icon name="arrow_forward" size="sm" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 lg:gap-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="body-small text-stone-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Orange accent shape */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-orange-600 rounded-2xl" />

              {/* Profile card */}
              <div className="relative bg-background border border-border rounded-2xl p-6 shadow-lg">
                {/* Profile image placeholder */}
                <div className="w-64 h-72 lg:w-80 lg:h-96 bg-stone-200 dark:bg-stone-800 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  {/* Replace with actual image */}
                  <Icon name="person" size="xl" className="text-stone-400" />
                </div>

                {/* Profile info */}
                <div className="text-center">
                  <h2 className="display-4 mb-1">Sandeep Upadhyay</h2>
                  <p className="body-medium text-stone-700">
                    Principal Frontend Engineer
                    <br />
                    Strategic Accessibility Advisor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
