import { Icon } from '../common/Icon';
import { SocialIcon, type SocialIconName } from '../common/SocialIcon';

// Navigation items — single source of truth (keep in sync with Header)
const navItems = [
  { label: 'Home',         href: '/' },
  { label: 'Expertise',   href: '#expertise' },
  { label: 'Contribution',href: '#contribution' },
  { label: 'Watch',       href: '#watch' },
  { label: 'Articles',    href: '#articles' },
  { label: 'About',       href: '#about' },
  { label: 'Contact',     href: '#contact' },
];

// Social links — icon names reference SocialIcon component (no inline SVGs)
interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}

const socialLinks: SocialLink[] = [
  { label: 'GitHub',   href: 'https://github.com/user',          icon: 'github'   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/user',     icon: 'linkedin' },
  { label: 'Dribbble', href: 'https://dribbble.com/user',        icon: 'dribbble' },
  { label: 'X',        href: 'https://x.com/user',               icon: 'x'        },
  { label: 'Discord',  href: 'https://discord.gg/user',          icon: 'discord'  },
  { label: 'YouTube',  href: 'https://youtube.com/@user',        icon: 'youtube'  },
];

// Profile data
const profile = {
  name: 'Sandeep Upadhyay',
  bio: 'I architect accessibility-first enterprise design systems adopted by Fortune 500 financial, insurance, and technology organizations, reducing regulatory risk and long-term development cost at scale.',
  image: '/images/sandeep-profile.png',
  bgImage: '/images/footer-bg.jpg',
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFAF9] dark:bg-stone-900">
      {/* Main Footer */}
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Profile Card Column */}
          <div className="lg:col-span-4">
            {/* Profile Image with Background */}
            <div className="relative w-[260px] h-[300px] rounded-xl overflow-hidden mb-6 border border-stone-200 dark:border-stone-700">
              <img
                src={profile.bgImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
                aria-hidden="true"
              />
              <img
                src={profile.image}
                alt={profile.name}
                className="absolute inset-0 w-full h-full object-cover object-top top-1/4"
              />
            </div>

            {/* Logo */}
            <a href="/" className="inline-block mb-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 rounded-sm">
              <img
                src="/images/sandeep-upadhyay-logo.svg"
                alt="Sandeep Upadhyay"
                className="h-7 w-auto dark:invert"
                width="760"
                height="80"
              />
            </a>

            {/* Bio */}
            <p className="text-stone-800 dark:text-stone-200 leading-relaxed max-w-sm">
              {profile.bio}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3">
            <h3 className="display-4 dark:text-white mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-stone-800 dark:text-stone-200 hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-5">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <Icon name="mail" size="md" className="dark:text-white" />
              <h3 className="display-4 dark:text-white">
                Stay Update
              </h3>
            </div>

            {/* Newsletter Form */}
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-[#1C1917] dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1C1917] dark:bg-white text-white dark:text-stone-900 font-medium rounded-lg hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Disclaimer */}
            <p className="text-stone-700 dark:text-stone-300 mb-8">
              By subscribing, you agree to receive occasional emails. Unsubscribe anytime.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-stone-200 dark:border-stone-700 flex items-center justify-center text-[#1C1917] dark:text-stone-300 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
                  aria-label={link.label}
                >
                  <SocialIcon name={link.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative fluid name watermark */}
      <div className="container-page watermark-wrapper">
        <h2
          className="name-watermark footer-name-watermark"
          aria-hidden="true"
        >
          Sandeep Upadhyay
        </h2>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container-page py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-stone-700 dark:text-stone-300">
              &copy; {currentYear} Sandeep Upadhyay. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-stone-800 dark:text-stone-200">
              <a
                href="#"
                className="hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
