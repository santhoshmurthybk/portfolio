# Research: React TypeScript Application Base

**Feature**: 001-react-typescript-base  
**Date**: 2026-04-20

## Overview

This document captures research findings and decisions for the React + TypeScript base project setup. All technical context items have been resolved through specification clarifications.

---

## 1. Build Tool Selection

**Decision**: Vite 5.x

**Rationale**:
- Native ES modules for fast dev server startup
- Built-in TypeScript support without additional configuration
- React Fast Refresh for instant HMR
- Optimized production bundling with Rollup
- Modern browser targets reduce polyfill overhead

**Alternatives Considered**:
| Tool | Rejected Because |
|------|-----------------|
| Create React App | Deprecated, slow, limited configuration |
| Next.js | SSR/SSG features unnecessary for SPA |
| Parcel | Less ecosystem support, fewer plugins |

---

## 2. Testing Framework Selection

**Decision**: Vitest + React Testing Library

**Rationale**:
- Vitest shares Vite's config, reducing duplication
- Jest-compatible API minimizes learning curve
- Native ESM support without transforms
- Fast watch mode with smart test detection
- React Testing Library promotes user-centric testing

**Alternatives Considered**:
| Tool | Rejected Because |
|------|-----------------|
| Jest | Requires additional transform config for ESM |
| Cypress Component Testing | Heavier setup, better for E2E |

---

## 3. ESLint Configuration

**Decision**: Relaxed configuration (errors for critical issues, warnings for best practices)

**Rationale**:
- Faster iteration during initial development
- Prevents frustration from overly strict rules on new project
- Critical rules (no-unused-vars, no-undef) as errors
- Style preferences (prefer-const, etc.) as warnings
- Can be tightened incrementally as codebase matures

**Configuration Base**:
- `eslint:recommended`
- `plugin:react/recommended`
- `plugin:react-hooks/recommended`
- `plugin:@typescript-eslint/recommended`

---

## 4. Browser Targets

**Decision**: Modern browsers only (Chrome 90+, Firefox 90+, Safari 15+, Edge 90+)

**Rationale**:
- Smaller bundle size (no legacy polyfills)
- Modern JavaScript features without transpilation
- Aligns with constitution's <200KB bundle target
- Target audience (portfolio visitors) likely on modern browsers

**Vite Configuration**:
```javascript
build: {
  target: ['chrome90', 'firefox90', 'safari15', 'edge90']
}
```

---

## 5. Routing Strategy

**Decision**: React Router v6 with lazy-loaded routes

**Rationale**:
- Industry standard for React SPAs
- Data loading APIs (loaders, actions) for future use
- Nested routes support future feature expansion
- Lazy loading per constitution's code splitting requirement

**Routes**:
| Path | Component | Purpose |
|------|-----------|---------|
| `/` | Home | Landing page |
| `/about` | About | Information page |
| `*` | NotFound | 404 fallback |

---

## 6. CSS Strategy

**Decision**: CSS Modules

**Rationale**:
- Zero runtime overhead (compiled at build)
- Scoped styles prevent leakage
- Co-location with components per constitution
- TypeScript support via `*.module.css.d.ts` generation
- No additional dependencies

**Alternatives Considered**:
| Approach | Rejected Because |
|----------|-----------------|
| Tailwind CSS | Runtime overhead, learning curve, adds dependency |
| styled-components | Runtime CSS-in-JS, larger bundle |
| Vanilla CSS | Global scope, naming conflicts |

---

## 7. Environment Variable Handling

**Decision**: Minimal variables (`VITE_APP_TITLE`, `VITE_APP_VERSION`)

**Rationale**:
- Start simple per YAGNI principle
- Additional variables added when features require them
- Vite's `import.meta.env` provides type-safe access
- `.env.example` documents required variables

**Type Safety**:
```typescript
// src/vite-env.d.ts
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_VERSION: string;
}
```

---

## 8. Dependency Versions

**Resolved Versions** (as of 2026-04-20):

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.0 | UI library |
| react-dom | ^18.3.0 | DOM renderer |
| react-router-dom | ^6.22.0 | Client-side routing |
| typescript | ^5.4.0 | Type system |
| vite | ^5.2.0 | Build tool |
| vitest | ^1.4.0 | Test runner |
| @testing-library/react | ^14.2.0 | Component testing |
| @testing-library/jest-dom | ^6.4.0 | DOM matchers |
| eslint | ^8.57.0 | Linter |
| prettier | ^3.2.0 | Formatter |

---

## Summary

All NEEDS CLARIFICATION items resolved. Technical decisions align with constitution principles:
- ✅ TypeScript strict mode
- ✅ Component co-location
- ✅ Testing discipline
- ✅ Simplicity (minimal dependencies)
- ✅ Performance (modern targets, code splitting)
