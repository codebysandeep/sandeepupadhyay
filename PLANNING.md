# PLANNING.md

## Development Phases

### Phase 1: Foundation ✅
- [x] Tailwind config (colors, fonts, typography)
- [x] CSS variables (light/dark mode)
- [x] Layout with Google Fonts & SEO
- [x] ThemeToggle component
- [x] Design system page

### Phase 2: Static Components (Draft) ✅
- [x] All 10 sections built with placeholder content

### Phase 3: Pixel-Perfect Refinement 🔄
Refine each section to match Figma design exactly:

| # | Component | Pixel-Perfect | Assets | Animations | A11y/SEO |
|---|-----------|---------------|--------|------------|----------|
| 1 | Header | Done | - | Pending | Done |
| 2 | Hero | Pending | Pending | Pending | Pending |
| 3 | ClientLogos | Pending | Pending | Pending | Pending |
| 4 | Expertise | Pending | - | Pending | Pending |
| 5 | Contributions | Pending | Pending | Pending | Pending |
| 6 | YouTubeSection | Pending | Pending | Pending | Pending |
| 7 | Leadership | Pending | - | Pending | Pending |
| 8 | Articles | Pending | Pending | Pending | Pending |
| 9 | ProfessionalJourney | Pending | - | Pending | Pending |
| 10 | Footer | Done | Done | Pending | Done |

#### Refinement Checklist (per section)
- [ ] Pixel-perfect match to Figma design
- [ ] Real assets (images, links) integrated
- [ ] Animations added (anime.js/three.js)
- [ ] Accessibility (WCAG AA) compliance
- [ ] SEO & social meta optimization
- [ ] DRY code (no hardcoded content)

### Phase 4: Final Polish
- [ ] Cross-browser testing
- [ ] Performance audit (Lighthouse)
- [ ] Dark mode full testing
- [ ] Mobile responsiveness verification

### Phase 5: TinaCMS Integration
- [ ] Content schemas for each section
- [ ] Dynamic data binding
- [ ] Admin interface setup

## Animation Library
**Selected**: anime.js ✅
- Lightweight (~17kb minified)
- DOM animations & CSS transforms
- Scroll-triggered effects
- Micro-interactions & hover states
- Timeline sequencing

## Breakpoints
| Prefix | Width | Device |
|--------|-------|--------|
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

## References
- Design System: `/design-system`
- Figma: Attached design layout
