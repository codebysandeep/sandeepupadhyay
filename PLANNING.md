# PLANNING.md - Personal Website Development

## Project Overview
This document provides Claude Code with a structured plan to develop a personal portfolio website for a Principal Frontend Engineer & UI/UX Director using modern web technologies in an Nx monorepo.

## 🎯 Project Goals
- Create a minimal, responsive portfolio website
- Implement content management through TinaCMS
- Build with modern performance and SEO best practices
- Support light/dark mode theming
- Showcase projects, blog posts, and professional experience

## 🛠 Technology Stack

### Core Technologies
- **Monorepo**: Nx Workspace
- **Framework**: Astro 4.x (Static Site Generation)
- **CMS**: TinaCMS (Git-based headless CMS)
- **UI Framework**: React 18+ (for interactive components)
- **Styling**: Tailwind CSS 3.x + shadcn/ui
- **Icons**: Lucide React
- **Carousel**: Swiper.js 11.x
- **Deployment**: Vercel/Netlify

### Development Tools
- **TypeScript**: Full type safety
- **ESLint + Prettier**: Code quality
- **Husky**: Pre-commit hooks
- **GitHub Actions**: CI/CD pipeline

## 📁 Project Structure

```
sandeepupadhyay/
├── apps/
│   └── personal-website/          # Main Astro application
│       ├── src/
│       │   ├── components/
│       │   │   ├── layout/
│       │   │   │   ├── Header.tsx
│       │   │   │   ├── Footer.tsx
│       │   │   │   └── Navigation.tsx
│       │   │   ├── sections/
│       │   │   │   ├── Hero.tsx
│       │   │   │   ├── Skills.tsx
│       │   │   │   ├── Projects.tsx
│       │   │   │   ├── Blog.tsx
│       │   │   │   └── Experience.tsx
│       │   │   ├── ui/             # shadcn components
│       │   │   ├── common/
│       │   │   │   ├── SkeletonLoader.tsx
│       │   │   │   ├── ThemeToggle.tsx
│       │   │   │   └── SocialLinks.tsx
│       │   │   └── tina/
│       │   │       └── cms-components/
│       │   ├── pages/
│       │   │   ├── index.astro     # Home page
│       │   │   ├── about.astro     # About page (future)
│       │   │   ├── blog/
│       │   │   │   ├── index.astro
│       │   │   │   └── [...slug].astro
│       │   │   ├── projects/
│       │   │   │   ├── index.astro
│       │   │   │   └── [...slug].astro
│       │   │   ├── resume.astro    # Resume page (future)
│       │   │   └── contact.astro   # Contact page (future)
│       │   ├── layouts/
│       │   │   ├── BaseLayout.astro
│       │   │   ├── BlogPost.astro
│       │   │   └── Project.astro
│       │   ├── styles/
│       │   │   └── global.css
│       │   └── content/            # TinaCMS content
│       │       ├── blog/
│       │       ├── projects/
│       │       └── config.ts
│       ├── public/
│       ├── astro.config.mjs
│       ├── tailwind.config.js
│       ├── tsconfig.json
│       └── package.json
├── libs/
│   ├── shared-ui/                  # Reusable UI components
│   ├── shared-utils/               # Utility functions
│   └── shared-types/               # TypeScript interfaces
├── tools/
│   ├── eslint-config/              # Shared ESLint config
│   └── build-scripts/              # Build utilities
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── nx.json
├── package.json
├── README.md
└── PLANNING.md
```

## 🚀 Development Phases

### Phase 1: Foundation Setup (Week 1-2)

#### 1.1 Initialize Nx Monorepo
```bash
# Create Nx workspace
npx create-nx-workspace@latest personal-website-monorepo --preset=apps

# Add Astro application
nx g @nxext/astro:app personal-website

# Add shared libraries
nx g @nx/js:lib shared-ui
nx g @nx/js:lib shared-utils  
nx g @nx/js:lib shared-types
```

#### 1.2 Configure Development Tools
- [ ] Setup ESLint and Prettier configurations
- [ ] Configure Husky pre-commit hooks
- [ ] Setup GitHub Actions workflows
- [ ] Configure Tailwind CSS and shadcn/ui
- [ ] Initialize TinaCMS

#### 1.3 Base Architecture
- [ ] Create BaseLayout.astro with header, footer, and main content area
- [ ] Implement theme system (light/dark mode)
- [ ] Setup skeleton loading components
- [ ] Create reusable TypeScript interfaces in shared-types

### Phase 2: Core Components (Week 3-4)

#### 2.1 Layout Components
- [ ] **Header.tsx**: Navigation with responsive design
  - Desktop: Logo (left), Menu (center), Actions (right)
  - Mobile: Hamburger + Logo (left), Actions (right)
  - Features: Sticky header, backdrop blur, active states
- [ ] **Footer.tsx**: Logo, navigation links, social media
- [ ] **Navigation.tsx**: Menu items managed via TinaCMS

#### 2.2 Home Page Sections
- [ ] **Hero.tsx**: Hero section with background image, headline, CTA
- [ ] **Skills.tsx**: Technology skills with logos in grid/carousel
- [ ] **Projects.tsx**: Featured projects in carousel format
- [ ] **Blog.tsx**: Latest 6 blog posts in grid layout
- [ ] **Experience.tsx**: Professional experience timeline

#### 2.3 Common Components
- [ ] **SkeletonLoader.tsx**: Tailwind-based loading states
- [ ] **ThemeToggle.tsx**: Light/dark mode switcher
- [ ] **SocialLinks.tsx**: Reusable social media component

### Phase 3: Content Management (Week 5)

#### 3.1 TinaCMS Configuration
- [ ] Define content schemas for all sections
- [ ] Setup TinaCMS admin interface
- [ ] Configure image handling and optimization
- [ ] Implement content collections for blog and projects

#### 3.2 Content Types Implementation
```typescript
// Example schema structure
interface SiteConfig {
  siteName: string;
  siteDescription: string;
  logo: string;
  darkLogo?: string;
}

interface Skill {
  name: string;
  logo: string;
  proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
  featured: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  sourceLink?: { enabled: boolean; url: string; };
  previewLink?: { enabled: boolean; url: string; };
  featured: boolean;
}

interface BlogPost {
  title: string;
  slug: string;
  description: string;
  content: string;
  featuredImage: string;
  category: string;
  tags: string[];
  publishedDate: Date;
  status: 'draft' | 'published';
}
```

### Phase 4: Advanced Features (Week 6)

#### 4.1 Performance Optimization
- [ ] Implement image optimization with Astro's built-in features
- [ ] Add lazy loading for images and components
- [ ] Optimize bundle size and implement code splitting
- [ ] Setup PWA capabilities

#### 4.2 SEO Implementation
- [ ] Dynamic meta tags for all pages
- [ ] OpenGraph and Twitter Card support
- [ ] JSON-LD structured data
- [ ] XML sitemap generation
- [ ] Robots.txt configuration

#### 4.3 Accessibility
- [ ] WCAG 2.1 AA compliance
- [ ] Proper ARIA labels and semantic HTML
- [ ] Keyboard navigation support
- [ ] Color contrast validation
- [ ] Screen reader compatibility

### Phase 5: Testing & Deployment (Week 7)

#### 5.1 Testing Setup
- [ ] Unit tests for components
- [ ] E2E tests for critical user flows
- [ ] Performance testing (Lighthouse)
- [ ] Cross-browser compatibility testing

#### 5.2 Deployment Configuration
- [ ] Setup Vercel/Netlify deployment
- [ ] Configure environment variables
- [ ] Setup staging and production environments
- [ ] Implement automated deployment pipeline

## 📋 Implementation Checklist

### Essential Features
- [ ] Responsive design (mobile-first)
- [ ] Light/dark mode toggle
- [ ] TinaCMS content management
- [ ] Skeleton loading states
- [ ] SEO optimization
- [ ] Performance optimization (Lighthouse 95+)
- [ ] Accessibility compliance
- [ ] Cross-browser compatibility

### Content Sections
- [ ] Hero section with CTA
- [ ] Skills showcase with technology logos
- [ ] Featured projects carousel
- [ ] Latest blog posts grid
- [ ] Professional experience timeline
- [ ] Social media integration

### Technical Requirements
- [ ] TypeScript implementation
- [ ] Tailwind CSS styling
- [ ] shadcn/ui components
- [ ] Swiper.js carousel
- [ ] Image optimization
- [ ] PWA features

## 🔧 Development Commands

### Setup Commands
```bash
# Install dependencies
npm install

# Start development server
nx serve personal-website

# Build for production
nx build personal-website

# Run tests
nx test personal-website

# Lint code
nx lint personal-website

# Format code
nx format
```

### TinaCMS Commands
```bash
# Start TinaCMS development
npx @tinacms/cli dev

# Build TinaCMS for production
npx @tinacms/cli build
```

## 📊 Success Metrics

### Performance Targets
- [ ] Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] Bundle Size: < 100KB initial JavaScript
- [ ] Page Load Time: < 3s on 3G connection

### User Experience Goals
- [ ] Intuitive navigation and content discovery
- [ ] Seamless theme switching
- [ ] Fast, responsive interactions
- [ ] Content readability and scannability

### Content Management
- [ ] Easy content updates via TinaCMS
- [ ] Media management capabilities
- [ ] SEO field accessibility
- [ ] Real-time preview functionality

## 🚦 Critical Implementation Notes

### Required Features
1. **Skeleton Loading**: Implement for all components using Tailwind classes
2. **Theme System**: Support system preference detection with manual override
3. **Responsive Design**: Mobile-first approach with specific breakpoints
4. **TinaCMS Integration**: All content must be manageable through CMS
5. **Performance**: Optimize images, implement lazy loading, minimize bundle size

### Design Principles
- **Minimal & Clean**: Focus on content with plenty of whitespace
- **Professional**: Suitable for a Principal Frontend Engineer portfolio
- **Modern**: Current design trends and best practices
- **Accessible**: WCAG 2.1 AA compliance throughout

### Content Strategy
- **SEO-Friendly**: All content optimized for search engines
- **Dynamic**: Content managed through TinaCMS
- **Structured**: Proper data modeling for scalability
- **Performance**: Optimized content delivery

## 📝 Future Enhancements (Post-Launch)

### Additional Pages
- [ ] Detailed About page with personal story
- [ ] Enhanced Blog functionality with search and filtering
- [ ] Project case studies with detailed breakdowns
- [ ] Interactive Resume page
- [ ] Contact page with form integration

### Advanced Features
- [ ] Newsletter integration
- [ ] Site-wide search functionality
- [ ] Enhanced analytics and tracking
- [ ] Content backup and recovery
- [ ] Multi-language support

---

**Next Steps**: Start with Phase 1 foundation setup, focusing on Nx monorepo initialization and basic Astro application structure. Each phase builds upon the previous one, ensuring a solid foundation before adding complexity.

**Priority**: Focus on core functionality first (responsive design, theme system, basic content management) before implementing advanced features.