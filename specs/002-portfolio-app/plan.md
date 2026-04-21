# Implementation Plan: Modern Portfolio Application

**Branch**: `002-portfolio-app` | **Date**: 2026-04-21 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/002-portfolio-app/spec.md`

## Summary

Build a modern, responsive portfolio application for Santhosh using React, TypeScript, and Tailwind CSS. The application features a single-page layout with smooth-scrolling sections (Home, About, Portfolio, Contact), a dark/light theme toggle respecting system preferences, and externalized portfolio data. The design uses subtle elevation shadows with an indigo/purple accent color, includes a preloader animation, and implements responsive navigation with a hamburger menu for mobile viewports.

## Technical Context

**Language/Version**: TypeScript 5.4.5 with `strict: true`  
**Primary Dependencies**: React 18.3.1, React Router DOM 6.22.3, Tailwind CSS 3.4.x  
**Storage**: N/A (static data in JSON files, localStorage for theme preference)  
**Testing**: Vitest 1.6.0 + React Testing Library (existing setup)  
**Target Platform**: Modern browsers (Chrome 90+, Firefox 90+, Safari 15+, Edge 90+)  
**Project Type**: Single Page Application (SPA)  
**Performance Goals**: Initial load <2s on 3G, theme toggle <100ms, bundle <300KB gzipped  
**Constraints**: No backend API, static assets only, accessibility score ≥90  
**Scale/Scope**: Single-user portfolio, 4 main sections, ~15-20 components

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Requirement | Status |
|-----------|-------------|--------|
| I. Component Architecture | Components follow SRP, co-located styles/tests, max 300 lines | ✅ PASS |
| II. TypeScript Strictness | `strict: true` enabled, no `any` types, proper type guards | ✅ PASS |
| III. Testing Discipline | Unit tests for hooks/utils, RTL for components, co-located tests | ✅ PASS |
| IV. State Management | Local state for UI, localStorage for theme, no global store needed | ✅ PASS |
| V. Simplicity & Performance | Code splitting for sections, lazy-loaded images, minimal dependencies | ✅ PASS |
| Naming Conventions | PascalCase components, camelCase hooks, SCREAMING_SNAKE for constants | ✅ PASS |
| Dependency Management | Exact versions pinned, Tailwind justified for utility-first styling | ✅ PASS (see deviation) |

**Constitution Deviation**: The constitution prefers CSS Modules / CSS-in-JS, but Tailwind CSS was chosen per user clarification for utility-first styling and built-in dark mode support. This is acceptable as Tailwind produces atomic CSS classes with excellent purging for small bundle sizes.

**Gate Result**: ✅ All checks pass. Proceeding to Phase 0.

## Project Structure

### Documentation (this feature)

```text
specs/002-portfolio-app/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
src/
├── components/          # Shared/reusable components
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.test.tsx
│   ├── Card/
│   │   ├── Card.tsx
│   │   └── Card.test.tsx
│   ├── ProgressBar/
│   │   ├── ProgressBar.tsx
│   │   └── ProgressBar.test.tsx
│   ├── TabGroup/
│   │   ├── TabGroup.tsx
│   │   └── TabGroup.test.tsx
│   ├── Timeline/
│   │   ├── Timeline.tsx
│   │   └── Timeline.test.tsx
│   ├── SocialLinks/
│   │   ├── SocialLinks.tsx
│   │   └── SocialLinks.test.tsx
│   ├── ThemeToggle/
│   │   ├── ThemeToggle.tsx
│   │   └── ThemeToggle.test.tsx
│   └── Preloader/
│       ├── Preloader.tsx
│       └── Preloader.test.tsx
├── sections/            # Page sections (single-page app sections)
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── Hero.test.tsx
│   │   └── TypewriterText.tsx
│   ├── About/
│   │   ├── About.tsx
│   │   ├── About.test.tsx
│   │   ├── SkillsTab.tsx
│   │   ├── ExperienceTab.tsx
│   │   └── EducationTab.tsx
│   ├── Portfolio/
│   │   ├── Portfolio.tsx
│   │   ├── Portfolio.test.tsx
│   │   └── ProjectCard.tsx
│   └── Contact/
│       ├── Contact.tsx
│       ├── Contact.test.tsx
│       └── ContactCard.tsx
├── layout/              # Layout components
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── Header.test.tsx
│   │   └── Navigation.tsx
│   └── Footer/
│       └── Footer.tsx
├── hooks/               # Custom React hooks
│   ├── useTheme.ts
│   ├── useTheme.test.ts
│   ├── useScrollSpy.ts
│   ├── useScrollSpy.test.ts
│   └── useTypewriter.ts
├── data/                # Static portfolio data
│   ├── profile.json
│   ├── skills.json
│   ├── experience.json
│   ├── education.json
│   ├── projects.json
│   ├── contact.json
│   └── socialLinks.json
├── types/               # TypeScript type definitions
│   ├── portfolio.ts
│   └── utils.ts
├── utils/               # Pure utility functions
│   └── scrollTo.ts
├── styles/              # Global styles
│   └── global.css       # Tailwind directives + custom utilities
├── constants/           # Application constants
│   └── env.ts
├── test/                # Test setup
│   └── setup.ts
├── App.tsx              # Main app with sections
├── main.tsx             # Entry point
└── vite-env.d.ts        # Vite type declarations
public/
├── assets/
│   ├── images/
│   │   ├── profile.png
│   │   └── projects/
│   │       ├── covid-tracker.png
│   │       ├── webdriver-io.png
│   │       └── react-graphql.png
│   └── resume/
│       └── Santhosh.pdf
└── favicon.svg
```

**Structure Decision**: Using `sections/` instead of `pages/` since this is a single-page application with scrolling sections rather than routes. Components are co-located with their tests per constitution requirements. Data files are externalized to `src/data/` as JSON for easy content updates.

**Note**: The existing `src/pages/` folder from the base setup (001-react-typescript-base) will be removed and replaced with `src/sections/`. React Router is used for hash-based navigation (`/#about`, `/#portfolio`) to support browser back/forward and direct linking.

## Complexity Tracking

> Constitution deviation documented

| Deviation | Why Needed | Alternative Rejected Because |
|-----------|------------|------------------------------|
| Tailwind CSS instead of CSS Modules | User requirement for utility-first styling, built-in dark mode support, faster development | CSS Modules would require more boilerplate for responsive/dark mode utilities |
| sections/ instead of pages/ | Single-page scroll app, not multi-page routes | pages/ implies route-based navigation which doesn't match the scroll-based design |
