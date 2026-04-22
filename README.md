# Portfolio

A modern React + TypeScript portfolio application built with Vite.

## 🤖 AI-Powered Development

This project was entirely developed using:
- **[SpecKit](https://github.com/spec-kit/spec-kit)** - AI-driven specification and planning workflow
- **GitHub Copilot** with **Claude** model - AI pair programming assistant

Showcasing modern AI-assisted software development practices.

📂 **Repository**: [github.com/santhoshmurthybk/portfolio](https://github.com/santhoshmurthybk/portfolio/)

## Prerequisites

- Node.js >= 18.0.0
- npm (comes with Node.js)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on source files |
| `npm run lint:fix` | Run ESLint and auto-fix issues |
| `npm run type-check` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Run tests with coverage report |

## Project Structure

```
src/
├── components/          # Shared/reusable components
│   └── Button/          # Example component with co-located files
│       ├── Button.tsx
│       ├── Button.test.tsx
│       ├── Button.module.css
│       └── index.ts
├── pages/               # Route-level components (code-split)
│   ├── Home/
│   ├── About/
│   └── NotFound/
├── hooks/               # Shared custom hooks
├── services/            # API clients
├── utils/               # Pure utility functions
├── types/               # Shared TypeScript types
├── styles/              # Global styles and CSS reset
├── constants/           # Application constants
└── test/                # Test setup files
```

## Tech Stack

- **React 18** - UI library
- **TypeScript 5** - Type safety with strict mode
- **Vite 5** - Build tool and dev server
- **React Router 6** - Client-side routing
- **Vitest** - Testing framework
- **React Testing Library** - Component testing
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **CSS Modules** - Scoped styling

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

## License

MIT
