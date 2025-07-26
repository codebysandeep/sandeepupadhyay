# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based personal portfolio website for a Principal Frontend Engineer & UI/UX Director with React integration and TinaCMS for comprehensive content management. The site uses TypeScript and is configured for deployment at sandeepupadhyay.com.

## Core Architecture

- **Framework**: Astro 5.7.3 with React integration
- **UI Framework**: React 18+ for interactive components
- **Styling**: Tailwind CSS 3.x + shadcn/ui components
- **Content Management**: TinaCMS with MDX posts and structured content
- **Build Tool**: Nx workspace configuration
- **Icons**: Lucide React
- **Carousel**: Swiper.js for project showcases
- **Theme System**: Light/dark mode with system preference detection

## Technology Stack

### Core Dependencies
- **Astro**: Static site generation framework
- **React**: Interactive component framework
- **TinaCMS**: Git-based headless CMS
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Reusable component library
- **TypeScript**: Type safety throughout
- **Swiper.js**: Modern carousel/slider library
- **Lucide React**: Modern icon library

### Content Management
- **Blog Posts**: MDX files with rich-text content
- **Projects**: Portfolio items with technologies, links, images
- **Skills**: Technology skills with proficiency levels
- **Experience**: Professional timeline with company details
- **Site Configuration**: Global settings and navigation

## Development Commands

```bash
# Start development server with TinaCMS
npm run dev

# Build for production
npm run build

# Preview production build locally  
npm run preview

# Run Astro CLI commands
npm run astro [command]

# Install dependencies
npm install

# TinaCMS admin interface
# Available at /admin when dev server is running
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.tsx        # React component
│   ├── Welcome.astro   # Astro component
│   ├── features/       # Feature-specific components
│   ├── layout/         # Layout components
│   └── ui/             # UI primitives
├── layouts/            # Page layouts
├── pages/              # Route definitions
│   ├── blog/           # Blog-related pages
│   └── index.astro     # Homepage
├── content/            # Content collections
└── utils/              # Utility functions

content/posts/          # MDX blog posts managed by TinaCMS
tina/                   # TinaCMS configuration and generated files
public/admin/           # TinaCMS admin interface
```

## Component Architecture

```
src/
├── components/
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Site header with navigation
│   │   ├── Footer.tsx    # Site footer
│   │   └── Navigation.tsx # Navigation menu
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx      # Hero section with CTA
│   │   ├── Skills.tsx    # Technology skills showcase
│   │   ├── Projects.tsx  # Featured projects carousel
│   │   ├── Blog.tsx      # Latest blog posts
│   │   └── Experience.tsx # Professional timeline
│   ├── common/           # Reusable components
│   │   ├── SkeletonLoader.tsx # Loading states
│   │   ├── ThemeToggle.tsx    # Light/dark mode toggle
│   │   └── SocialLinks.tsx    # Social media links
│   └── ui/               # shadcn/ui components
├── pages/                # Route definitions
│   ├── index.astro       # Homepage
│   ├── blog/             # Blog pages
│   └── projects/         # Project pages
└── layouts/              # Page layouts
    └── Layout.astro      # Base layout
```

## Content Management

- **CMS**: TinaCMS admin interface available at `/admin`
- **Blog Posts**: Created and edited through TinaCMS, stored as MDX files in `content/posts/`
- **Projects**: Portfolio items with technologies, source/demo links
- **Skills**: Technology skills with proficiency levels and categories
- **Experience**: Professional timeline with company details
- **Site Config**: Global settings, navigation, social links
- **Media**: Managed through TinaCMS media manager in `public/` folder
- **Schema**: Comprehensive schemas defined in `tina/config.ts`

## Environment Setup

TinaCMS requires these environment variables:
- `NEXT_PUBLIC_TINA_CLIENT_ID`: TinaCMS client ID
- `TINA_TOKEN`: TinaCMS authentication token

## Development Notes

- The dev server runs TinaCMS alongside Astro for content editing
- React components use `.tsx` extension, Astro components use `.astro`
- Tailwind CSS for styling with shadcn/ui component system
- Theme system supports light/dark modes with persistence
- Content collections are built into Astro core (no separate config needed)
- Site configured for https://sandeepupadhyay.com deployment
- Performance optimized with image optimization and lazy loading