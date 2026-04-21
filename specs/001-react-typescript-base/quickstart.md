# Quickstart: React TypeScript Application Base

**Feature**: 001-react-typescript-base  
**Date**: 2026-04-20

## Prerequisites

- Node.js 18+ installed (`node --version`)
- npm 9+ installed (`npm --version`)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

Expected output: Dependencies installed in ~30 seconds, no vulnerabilities.

### 2. Start Development Server

```bash
npm run dev
```

Expected output:
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Open http://localhost:5173 in your browser.

### 3. Verify Hot Module Replacement

1. Open `src/App.tsx`
2. Change any text
3. Save the file
4. Browser updates instantly without full reload

---

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all source files |
| `npm run lint:fix` | Run ESLint and auto-fix issues |
| `npm run type-check` | Run TypeScript compiler (no emit) |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting without changes |
| `npm run test` | Run Vitest in watch mode |
| `npm run test:run` | Run Vitest once (CI mode) |
| `npm run test:coverage` | Run tests with coverage report |

---

## Project Structure

```
src/
├── components/          # Shared components
│   └── Button/          # Example component with co-located tests
├── pages/               # Route-level components
│   ├── Home/
│   ├── About/
│   └── NotFound/
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── types/               # Shared TypeScript types
├── styles/              # Global styles
├── constants/           # Application constants
├── App.tsx              # Root component with router
└── main.tsx             # Entry point
```

---

## Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Available variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_APP_TITLE` | Application title | "Portfolio" |
| `VITE_APP_VERSION` | Application version | "0.1.0" |

Access in code:
```typescript
import.meta.env.VITE_APP_TITLE
```

---

## Creating a New Component

Follow the Button component pattern:

```bash
mkdir src/components/MyComponent
touch src/components/MyComponent/MyComponent.tsx
touch src/components/MyComponent/MyComponent.test.tsx
touch src/components/MyComponent/MyComponent.module.css
touch src/components/MyComponent/index.ts
```

Component structure:
```typescript
// MyComponent.tsx
import styles from './MyComponent.module.css';

interface MyComponentProps {
  // Define props with explicit types
}

export function MyComponent({ ...props }: MyComponentProps) {
  return <div className={styles.container}>...</div>;
}
```

Export from index:
```typescript
// index.ts
export { MyComponent } from './MyComponent';
export type { MyComponentProps } from './MyComponent';
```

---

## Running Tests

### Watch Mode (Development)
```bash
npm run test
```

### Single Run (CI)
```bash
npm run test:run
```

### With Coverage
```bash
npm run test:coverage
```

Coverage report generated in `coverage/` directory.

---

## Building for Production

```bash
npm run build
```

Output in `dist/` directory:
- Minified JavaScript bundles
- Optimized CSS
- No source maps (security)
- Assets with content hashes

Preview locally:
```bash
npm run preview
```

---

## Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3000
```

### TypeScript Errors
```bash
# Check all files
npm run type-check
```

### ESLint Not Finding Files
```bash
# Verify config
npx eslint --print-config src/App.tsx
```

### Tests Failing to Import CSS
CSS Modules are mocked in Vitest config. Check `vitest.config.ts` for proper setup.
