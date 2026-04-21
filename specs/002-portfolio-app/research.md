# Research: Modern Portfolio Application

**Feature**: 002-portfolio-app  
**Date**: 2026-04-21

## Technology Decisions

### Styling: Tailwind CSS

**Decision**: Use Tailwind CSS 3.4.x for styling

**Rationale**:
- Utility-first approach enables rapid UI development
- Built-in dark mode support via `dark:` variant aligns with theme requirement
- Excellent tree-shaking produces small production bundles
- Responsive utilities (`sm:`, `md:`, `lg:`) simplify responsive design
- Widely adopted with strong community support and documentation

**Alternatives Considered**:
- CSS Modules: More boilerplate needed for responsive/dark mode utilities
- Styled Components: Runtime CSS-in-JS adds bundle size and complexity
- Plain CSS: No utility classes, slower development

### Theme Management: System Preference + localStorage

**Decision**: Respect `prefers-color-scheme` on initial load, allow manual override stored in localStorage

**Rationale**:
- Respects user's OS/browser preference for better UX
- Manual toggle allows override for users who want different theme than system
- localStorage persists preference across sessions without backend
- Tailwind's `darkMode: 'class'` strategy enables programmatic control

**Implementation Approach**:
```typescript
// useTheme hook pseudocode
1. Check localStorage for saved preference
2. If no saved preference, use window.matchMedia('(prefers-color-scheme: dark)')
3. Apply 'dark' class to document.documentElement
4. Listen for system preference changes
5. On toggle, save to localStorage and update class
```

### Animation Library: CSS Animations (No Library)

**Decision**: Use CSS animations and Tailwind's transition utilities

**Rationale**:
- Typewriter effect can be implemented with CSS or simple React hook
- Preloader animation uses CSS keyframes
- Smooth scrolling via CSS `scroll-behavior: smooth`
- No additional bundle size from animation libraries
- Respects `prefers-reduced-motion` via media query

**Alternatives Considered**:
- Framer Motion: Powerful but adds ~30KB to bundle
- React Spring: Complex API for simple animations needed
- GSAP: Overkill for portfolio animations

### Scroll Behavior: Native + Custom Hook

**Decision**: Use native smooth scrolling with custom `useScrollSpy` hook for active section detection

**Rationale**:
- CSS `scroll-behavior: smooth` handles scroll animation
- IntersectionObserver API for section visibility detection (performant)
- No library needed, native browser APIs sufficient

### Data Management: Static JSON Files

**Decision**: Externalize portfolio data to JSON files in `src/data/`

**Rationale**:
- Easy to update content without code changes
- Type-safe imports with TypeScript
- No runtime API calls needed
- Can be easily migrated to CMS/API later if needed
- Enables separation of content from presentation

### Icon Library: React Icons (Boxicons subset)

**Decision**: Use react-icons with Boxicons (bi) icons to match original design

**Rationale**:
- Original HTML uses Boxicons
- react-icons provides tree-shakable imports
- Only imports used icons, minimal bundle impact
- Consistent icon style throughout application

**Bundle Impact**: ~2-3KB for used icons only

## Performance Optimizations

### Code Splitting Strategy

- Lazy load section components using React.lazy()
- Preloader displays during initial chunk loading
- Images lazy-loaded with `loading="lazy"` attribute

### Image Optimization

- Use WebP format where supported with PNG fallback
- Provide responsive image sizes via srcset
- Lazy load below-fold images
- Optimize profile and project images before deployment

### Bundle Size Budget

| Asset | Budget | Strategy |
|-------|--------|----------|
| Main JS | <150KB gzipped | Code splitting, tree-shaking |
| CSS | <30KB gzipped | Tailwind purging |
| Icons | <5KB | Tree-shaking react-icons |
| Total (excl. images) | <200KB gzipped | Well under 300KB requirement |

## Accessibility Considerations

- Semantic HTML elements (nav, main, section, article)
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast ratio ≥4.5:1 for text
- Reduced motion support via `prefers-reduced-motion`
- Skip to content link for screen readers

## Browser Compatibility

| Feature | Fallback Strategy |
|---------|-------------------|
| CSS Grid | Flexbox fallback (if needed) |
| IntersectionObserver | Polyfill not needed (modern browsers only) |
| localStorage | Graceful degradation to session-only theme |
| CSS smooth-scroll | JS fallback (already supported in target browsers) |

## Open Questions Resolved

All technical questions resolved. No NEEDS CLARIFICATION items remain.
