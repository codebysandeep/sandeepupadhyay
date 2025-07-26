# Personal Website PRD
**Principal Frontend Engineer & UI/UX Director Portfolio**

## 1. Project Overview

### 1.1 Purpose
Develop a personal portfolio website showcasing professional experience, projects, and blog content for a Principal Frontend Engineer and UI/UX Director.

### 1.2 Goals
- Create a minimal, responsive portfolio website
- Enable content management through headless CMS
- Implement modern UI/UX best practices
- Ensure optimal performance and SEO
- Support light/dark mode theming

### 1.3 Target Audience
- Potential employers and clients
- Fellow developers and designers
- Industry professionals
- Blog readers interested in frontend/UX content

## 2. Technical Stack

### 2.1 Core Technologies
- **Monorepo**: Nx Workspace with GitHub integration
- **Framework**: Astro 4.x (Static Site Generation)
- **CMS**: TinaCMS (Git-based headless CMS)
- **UI Framework**: React 18+ (for interactive components)
- **Styling**: Tailwind CSS 3.x
- **Component Library**: shadcn/ui
- **Image Optimization**: Astro built-in image optimization
- **Carousel**: Swiper.js 11.x
- **Icons**: Lucide React
- **Version Control**: GitHub with automated workflows
- **Deployment**: Vercel/Netlify with automatic builds

### 2.2 Nx Monorepo Structure
```
personal-website-monorepo/
├── apps/
│   └── personal-website/
├── libs/
│   ├── shared-ui/
│   ├── shared-utils/
│   └── shared-types/
├── tools/
│   ├── eslint-config/
│   └── build-scripts/
├── nx.json
├── package.json
└── README.md
```

### 2.3 GitHub Integration
- **Repository**: GitHub repository with branch protection
- **Workflows**: GitHub Actions for CI/CD
- **Automated Testing**: Unit tests and E2E tests on PR
- **Automated Deployment**: Deploy to staging/production on merge
- **Code Quality**: ESLint, Prettier, and Husky pre-commit hooks
- **Dependency Management**: Renovate or Dependabot for updates

### 2.4 Key Features
- Responsive design (mobile-first approach)
- Light/dark mode toggle with system preference detection
- Skeleton loading states for all components
- SEO optimization with OpenGraph and Twitter cards
- Progressive Web App (PWA) capabilities
- Performance optimization (Core Web Vitals)

## 3. Site Architecture

### 3.1 Page Structure
```
/
├── / (Home)
├── /about
├── /blog
├── /blog/[slug]
├── /projects
├── /projects/[slug]
├── /resume
└── /contact
```

### 3.2 Component Architecture
```
apps/
└── personal-website/
    ├── src/
    │   ├── components/
    │   │   ├── layout/
    │   │   │   ├── Header.tsx
    │   │   │   ├── Footer.tsx
    │   │   │   └── Navigation.tsx
    │   │   ├── sections/
    │   │   │   ├── Hero.tsx
    │   │   │   ├── Skills.tsx
    │   │   │   ├── Projects.tsx
    │   │   │   ├── Blog.tsx
    │   │   │   └── Experience.tsx
    │   │   ├── ui/ (shadcn components)
    │   │   ├── common/
    │   │   │   ├── SkeletonLoader.tsx
    │   │   │   ├── ThemeToggle.tsx
    │   │   │   └── SocialLinks.tsx
    │   │   └── tina/
    │   │       └── cms-components/
    │   ├── pages/
    │   └── layouts/
    └── package.json

libs/
├── shared-ui/
├── shared-utils/
└── shared-types/

tools/
├── eslint-config/
└── build-scripts/
```

## 4. Content Management (TinaCMS)

### 4.1 Content Collections

#### 4.1.1 Site Configuration
```typescript
interface SiteConfig {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  logo: string;
  darkLogo?: string;
  favicon: string;
}
```

#### 4.1.2 Navigation Menu
```typescript
interface MenuItem {
  name: string;
  link: string;
  title: string;
  target: '_self' | '_blank' | '_parent' | '_top';
  order: number;
}
```

#### 4.1.3 Social Links (Reusable Component)
```typescript
interface SocialLink {
  name: string;
  link: string;
  logo: string;
  title: string;
  target: '_self' | '_blank' | '_parent' | '_top';
  order: number;
}
```

#### 4.1.4 Hero Section
```typescript
interface HeroSection {
  headline: string;
  subheadline: string;
  backgroundImage?: string;
  personaImage: string;
  ctaButton: {
    text: string;
    link: string;
    target: string;
  };
  socialLinks: SocialLink[];
}
```

#### 4.1.5 Projects
```typescript
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  sourceLink?: {
    enabled: boolean;
    url: string;
  };
  previewLink?: {
    enabled: boolean;
    url: string;
  };
  featured: boolean;
  order: number;
  status: 'draft' | 'published';
}
```

#### 4.1.6 Blog Posts
```typescript
interface BlogPost {
  title: string;
  slug: string;
  description: string;
  content: string; // Rich text content
  featuredImage: string;
  category: string;
  tags: string[];
  author: string;
  publishedDate: Date;
  updatedDate?: Date;
  status: 'draft' | 'published';
  seo: {
    metaTitle?: string;
    metaDescription?: string;
  };
}
```

#### 4.1.8 Skills Section
```typescript
interface Skill {
  name: string;
  logo: string;
  proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Frontend' | 'Backend' | 'Design' | 'Tools' | 'Other';
  yearsOfExperience?: number;
  order: number;
  featured: boolean;
}

interface SkillsSection {
  headline: string;
  subheadline: string;
  skills: Skill[];
  displayStyle: 'grid' | 'carousel';
}
```
```typescript
interface Experience {
  companyName: string;
  position: string;
  companyAddress: string;
  startDate: Date;
  endDate?: Date;
  isCurrentPosition: boolean;
  projectDetails: string; // Rich text
  technologies: string[];
  achievements: string[];
  companyLogo?: string;
  order: number;
}
```

## 5. Design Requirements

### 5.1 Design Principles
- **Minimal & Clean**: Focus on content with plenty of whitespace
- **Typography**: Clear hierarchy using system fonts or Google Fonts
- **Color Scheme**: Professional color palette with proper contrast ratios
- **Responsive**: Mobile-first approach with breakpoints at 640px, 768px, 1024px, 1280px

### 5.2 Theme Support
- **Light Mode**: Default theme with light backgrounds
- **Dark Mode**: Dark theme with proper contrast
- **System Preference**: Auto-detect user's system preference
- **Theme Persistence**: Remember user's theme choice

### 5.3 Component Specifications

#### 5.3.1 Header/Navigation
**Desktop Layout:**
- Left: Logo
- Center: About Me, Blog, Projects
- Right: Resume, Contact Me

**Mobile Layout:**
- Left: Hamburger menu + Logo
- Right: Resume, Contact Me icons

**Features:**
- Sticky header with backdrop blur
- Smooth scroll to sections
- Active state indicators
- Skeleton loading for all elements

#### 5.3.2 Footer
**Layout:**
- Left: Logo
- Center: Navigation links
- Right: Social media links

**Features:**
- Consistent with header styling
- Social links component reusability
- Skeleton loading states

#### 5.3.3 Hero Section
**Features:**
- Full viewport height option
- Background image with overlay
- Animated text reveals
- Call-to-action button
- Social media links
- Responsive image handling

#### 5.3.4 Skills Section
**Features:**
- Grid or carousel display options
- Skill category filtering
- Proficiency level indicators
- Technology logos/icons
- Hover effects and animations
- Responsive grid layout
- Skeleton loading states

#### 5.3.5 Projects Section
**Features:**
- Carousel implementation using Swiper.js
- Card-based layout
- Lazy loading images
- Filter by technology/category
- External link handling
- Skeleton loading states

#### 5.3.6 Blog Section
**Features:**
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Show latest 6 posts on homepage
- Category and tag filtering
- Read time estimation
- SEO-optimized URLs
- Skeleton loading for cards

#### 5.3.7 Experience Section
**Features:**
- Timeline/accordion layout
- Chronological order (latest first)
- Rich text content support
- Technology badges
- Company logos
- Expandable details

## 6. Performance Requirements

### 6.1 Performance Metrics
- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**:
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1
- **Bundle Size**: < 100KB initial JavaScript
- **Image Optimization**: WebP/AVIF with fallbacks

### 6.2 Loading States
- **Skeleton Components**: Custom Tailwind-based skeletons
- **Progressive Loading**: Prioritize above-the-fold content
- **Lazy Loading**: Images and non-critical sections
- **Preloading**: Critical resources and fonts

## 7. SEO Requirements

### 7.1 Technical SEO
- **Meta Tags**: Dynamic title, description, and OpenGraph
- **Structured Data**: JSON-LD for personal/professional info
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Proper crawling instructions
- **Canonical URLs**: Prevent duplicate content

### 7.2 Content SEO
- **Blog Posts**: Individual meta descriptions and titles
- **Projects**: SEO-friendly URLs and descriptions
- **Images**: Alt text and proper file naming
- **Internal Linking**: Contextual links between content

## 8. Accessibility Requirements

### 8.1 WCAG Compliance
- **Level AA Compliance**: Meet WCAG 2.1 AA standards
- **Color Contrast**: 4.5:1 for normal text, 3:1 for large text
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators

### 8.2 Responsive Design
- **Breakpoints**: Mobile (320px+), Tablet (768px+), Desktop (1024px+)
- **Touch Targets**: Minimum 44px touch targets
- **Viewport**: Proper viewport meta tag
- **Font Scaling**: Support system font size preferences

## 9. Development Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Project setup with Astro and TinaCMS
- [ ] Basic component structure
- [ ] Theme system implementation
- [ ] Skeleton loading components
- [ ] Header and Footer components

### Phase 2: Content Sections (Week 3-4)
- [ ] Hero section development
- [ ] Skills section with image grid/carousel
- [ ] Projects carousel implementation
- [ ] Blog grid and individual post pages
- [ ] Experience timeline/accordion
- [ ] CMS schema configuration

### Phase 3: Polish & Optimization (Week 5-6)
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Accessibility testing and fixes
- [ ] Cross-browser testing
- [ ] Mobile responsiveness refinement

### Phase 4: Deployment & Testing (Week 7)
- [ ] Production deployment setup
- [ ] Content migration
- [ ] Final testing and bug fixes
- [ ] Documentation and handover

## 10. Success Criteria

### 10.1 Technical Metrics
- [ ] Lighthouse score 95+ on all pages
- [ ] 100% accessibility compliance
- [ ] < 3s page load time on 3G
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

### 10.2 User Experience
- [ ] Intuitive navigation and content discovery
- [ ] Seamless light/dark mode switching
- [ ] Fast, responsive interactions
- [ ] Content is easily readable and scannable

### 10.3 Content Management
- [ ] Non-technical users can manage content via TinaCMS
- [ ] Content changes reflect immediately
- [ ] Media management is intuitive
- [ ] SEO fields are easily accessible

## 12. Individual Page Specifications

### 12.1 About Page
**Status**: To be detailed in future updates

**Planned Sections:**
- Personal introduction and background
- Professional journey timeline
- Mission/vision statement
- Personal interests and hobbies
- Downloadable resume/CV
- Contact information

### 12.2 Blog Page
**Status**: To be detailed in future updates

**Planned Features:**
- Blog post listing with pagination
- Category and tag filtering
- Search functionality
- Archive by date
- Featured posts section
- Related posts suggestions

### 12.3 Projects Page
**Status**: To be detailed in future updates

**Planned Features:**
- Project portfolio grid/list view
- Project filtering by technology/category
- Detailed project case studies
- Project timeline view
- Featured projects section
- External links to live demos and repositories

### 12.4 Resume Page
**Status**: To be detailed in future updates

**Planned Features:**
- Interactive resume layout
- Downloadable PDF version
- Skills matrix visualization
- Experience timeline
- Education section
- Certifications and achievements
- Testimonials/recommendations

### 12.5 Contact Page
**Status**: To be detailed in future updates

**Planned Features:**
- Contact form with validation
- Multiple contact methods
- Availability calendar integration
- Social media links
- Location/timezone information
- Response expectations

---

*Note: Sections 12.1-12.5 will be expanded with detailed specifications in future PRD updates.*

## 13. Post-Launch Considerations

### 13.1 Analytics
- **Google Analytics 4**: Track user behavior and content performance
- **Core Web Vitals**: Monitor real user metrics
- **Search Console**: Track SEO performance

### 13.2 Maintenance
- **Content Updates**: Regular blog posting and project updates
- **Security Updates**: Keep dependencies updated
- **Performance Monitoring**: Regular performance audits
- **Backup Strategy**: Automated content backups

### 13.3 Future Enhancements
- **Newsletter Integration**: Email capture and management
- **Search Functionality**: Site-wide content search
- **Interactive Resume**: Enhanced resume presentation
- **Project Case Studies**: Detailed project breakdowns

---

**Document Version**: 1.0  
**Last Updated**: July 26, 2025  
**Created By**: Development Team  
**Approved By**: Sandeep Upadhyay