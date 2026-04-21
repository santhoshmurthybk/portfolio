# Quick Start Guide: Modern Portfolio Application

**Feature**: 002-portfolio-app  
**Date**: 2026-04-21

## Prerequisites

- Node.js >= 18.0.0
- npm (comes with Node.js)
- Existing React + TypeScript + Vite base setup (from 001-react-typescript-base)

## Getting Started

### 1. Install Additional Dependencies

```bash
# Tailwind CSS and dependencies
npm install --save-dev --save-exact tailwindcss@3.4.3 postcss@8.4.38 autoprefixer@10.4.19

# Initialize Tailwind configuration
npx tailwindcss init -p

# React Icons for Boxicons
npm install --save-exact react-icons@5.2.1
```

### 2. Configure Tailwind CSS

Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // Main accent
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
      animation: {
        'typewriter': 'typewriter 2s steps(20) infinite',
        'blink': 'blink 0.7s infinite',
        'preloader': 'preloader 1.5s ease-in-out infinite',
      },
      keyframes: {
        typewriter: {
          '0%, 100%': { width: '0%' },
          '50%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        preloader: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        },
      },
    },
  },
  plugins: [],
}
```

### 3. Update Global CSS

Replace `src/styles/global.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100;
    @apply transition-colors duration-200;
  }
}

@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-primary-500 text-white rounded-lg;
    @apply hover:bg-primary-600 transition-colors;
    @apply shadow-md hover:shadow-lg;
  }

  .card {
    @apply bg-white dark:bg-gray-800 rounded-xl;
    @apply shadow-md dark:shadow-gray-900/50;
    @apply transition-shadow hover:shadow-lg;
  }

  .section-title {
    @apply text-3xl md:text-4xl font-bold text-center mb-12;
  }
}

@layer utilities {
  .elevation-1 {
    @apply shadow-sm dark:shadow-gray-900/30;
  }

  .elevation-2 {
    @apply shadow-md dark:shadow-gray-900/40;
  }

  .elevation-3 {
    @apply shadow-lg dark:shadow-gray-900/50;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 4. Create Data Files

Create the following JSON files in `src/data/`:

- `profile.json` - Personal information
- `skills.json` - Skills with proficiency
- `experience.json` - Work history
- `education.json` - Education background
- `projects.json` - Portfolio projects
- `contact.json` - Contact information
- `socialLinks.json` - Social media links

See `data-model.md` for complete schemas and example data.

### 5. Add Static Assets

Place assets in `public/assets/`:

```
public/
├── assets/
│   ├── images/
│   │   ├── profile.png         # Profile photo
│   │   └── projects/
│   │       ├── covid-tracker.png
│   │       ├── webdriver-io.png
│   │       └── react-graphql.png
│   └── resume/
│       └── Santhosh.pdf        # CV file
└── favicon.svg
```

## Development Workflow

### Start Development Server

```bash
npm run dev
```

Opens at http://localhost:3000

### Run Tests

```bash
npm run test        # Watch mode
npm run test:run    # Single run
npm run test:coverage
```

### Lint & Type Check

```bash
npm run lint
npm run type-check
npm run format
```

### Build for Production

```bash
npm run build
npm run preview     # Preview production build
```

## Key Architecture Decisions

### Component Organization

- **Shared components** in `src/components/` - Reusable across sections
- **Section components** in `src/sections/` - One per portfolio section
- **Layout components** in `src/layout/` - Header, Footer, Navigation

### Styling Approach

- Tailwind CSS utility classes
- Dark mode via `dark:` variants
- Custom elevation utilities for subtle shadows
- CSS variables for theme colors (Tailwind config)

### State Management

- `useTheme` hook for dark/light mode
- `useScrollSpy` hook for active section detection
- `useTypewriter` hook for hero text animation
- No global state store needed

### Data Loading

- Static JSON imports with TypeScript types
- No API calls or async data fetching
- Content updates only require JSON edits

## Testing Strategy

### Unit Tests
- All custom hooks
- Utility functions

### Component Tests
- User interactions (clicks, hovers)
- Conditional rendering
- Accessibility queries

### Integration Tests
- Navigation flow
- Theme toggle persistence
- Tab switching in About section

## Performance Checklist

- [ ] Images optimized and lazy-loaded
- [ ] Code split section components
- [ ] Tailwind CSS purged in production
- [ ] Preloader shows during initial load
- [ ] Bundle size < 300KB gzipped
- [ ] Lighthouse score > 90 for accessibility
