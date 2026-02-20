# CLAUDE.md

## Project Overview

Personal portfolio website for a Principal Frontend Engineer & UI/UX Director.
**URL**: https://sandeepupadhyay.com

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Astro 5.7 + React 19 |
| Styling | Tailwind CSS 3.x |
| Icons | Google Material Symbols |
| CMS | TinaCMS (MDX) - Phase 5 |
| Fonts | DM Serif Display, DM Sans |
| Theme | Light/Dark with localStorage |
| Animations | anime.js |

## Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Production build
npm run preview  # Preview build
```

## Project Structure

```
src/
├── components/
│   ├── common/        # Icon, ThemeToggle
│   ├── layout/        # Header
│   └── sections/      # Hero, ClientLogos, Expertise, etc.
├── layouts/
│   └── Layout.astro   # Base layout with fonts, meta, theme
├── pages/
│   ├── index.astro    # Homepage
│   └── design-system.astro
└── styles/
    └── globals.css    # CSS variables, typography utilities
```

## Design Tokens

### Colors
- **Primary**: Orange scale (brand: `orange-600` #EB5E28)
- **Neutral**: Stone scale
- **Semantic**: success, warning, error, info

### Typography Classes
```
.title          # DM Serif Display, 72px
.subtitle       # DM Sans, 40px, light
.display-h1-h6  # Headings (72px → 20px)
.body-big       # 20px
.body-p         # 18px (default)
.body-medium    # 16px
.body-small     # 14px
```

### Utilities
```
.container-page  # max-w-7xl with responsive padding
```

## Development Guidelines

### DRY Principles
- Extract repeated content into data arrays/objects
- Use mapping for lists (nav items, social links, etc.)
- Prepare data structure for TinaCMS integration

### Accessibility (WCAG AA)
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states visible
- Color contrast compliance

### SEO & Social
- Meta tags (title, description)
- Open Graph tags
- Twitter cards
- Structured data where applicable

### Code Patterns
- Material Icons via `<Icon />` component
- Brand logos as inline SVGs (GitHub, LinkedIn, X, YouTube)
- Mobile-first responsive design
- `client:load` for React components needing hydration

## Key Files

| File | Purpose |
|------|---------|
| `tailwind.config.mjs` | Colors, fonts, typography scale |
| `src/styles/globals.css` | CSS variables, utility classes |
| `src/layouts/Layout.astro` | Base layout, Google Fonts, SEO |
| `src/components/common/Icon.tsx` | Material Icons wrapper |
| `PLANNING.md` | Development phases & progress |
| `TASK.md` | Current tasks & status |

## Current Phase

**Phase 3**: Pixel-Perfect Refinement
- Match Figma designs exactly
- Add real assets (images, links)
- Implement animations
- Accessibility & SEO optimization
