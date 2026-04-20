<!--
  SYNC IMPACT REPORT
  ==================
  Version: N/A → 1.0.0
  Bump Rationale: Initial constitution - MAJOR version for first release
  
  Modified Principles: N/A (initial creation)
  Added Sections:
    - Core Principles (5 principles)
    - Technical Standards
    - CI/CD & Security
    - Governance
  Removed Sections: N/A
  
  Templates Status:
    - plan-template.md: ✅ Compatible (Constitution Check section exists)
    - spec-template.md: ✅ Compatible (Requirements and Success Criteria align)
    - tasks-template.md: ✅ Compatible (Phase structure supports principles)
  
  Follow-up TODOs: None
-->

# Portfolio Frontend Constitution

## Core Principles

### I. Component Architecture (NON-NEGOTIABLE)

- Components MUST follow single responsibility principle—one component, one purpose
- Presentational components MUST be separated from container/logic components
- Shared components MUST reside in `src/components/` with co-located styles and tests
- Feature-specific components MUST reside in `src/features/{feature}/components/`
- Props MUST be explicitly typed with TypeScript interfaces (no `any`)
- Component files MUST NOT exceed 300 lines; refactor if larger

**Rationale**: Enforces maintainability, reusability, and clear ownership boundaries.

### II. TypeScript Strictness (NON-NEGOTIABLE)

- `strict: true` MUST be enabled in `tsconfig.json`
- `noImplicitAny`, `strictNullChecks`, and `noUncheckedIndexedAccess` MUST be enabled
- Type assertions (`as`) MUST be avoided; use type guards instead
- `unknown` MUST be preferred over `any` for untyped data
- Utility types (`Partial`, `Pick`, `Omit`, `Record`) MUST be used appropriately
- External API responses MUST be validated at runtime (zod, io-ts, or similar)

**Rationale**: Type safety prevents runtime errors and improves developer experience.

### III. Testing Discipline

- Unit tests MUST cover all utility functions and hooks
- Component tests MUST use React Testing Library with user-centric queries
- Integration tests MUST verify critical user flows
- Test files MUST be co-located: `Component.tsx` → `Component.test.tsx`
- Mocking MUST be minimal; prefer testing real behavior
- Coverage targets: statements ≥80%, branches ≥75%

**Rationale**: Tests validate behavior, prevent regressions, and document intent.

### IV. State Management

- Local state MUST be preferred for component-specific data
- URL state MUST be used for shareable/bookmarkable application state
- Global state MUST be justified; avoid premature abstraction
- Server state MUST use dedicated tools (TanStack Query, SWR, or similar)
- State shape MUST be normalized—no deeply nested objects
- State updates MUST be immutable

**Rationale**: Prevents prop drilling, keeps state predictable, and improves performance.

### V. Simplicity & Performance

- Start simple; add complexity only when justified (YAGNI)
- Premature optimization MUST be avoided; measure first
- Bundle size impacts MUST be considered before adding dependencies
- Images MUST be optimized and lazy-loaded where appropriate
- Components MUST avoid unnecessary re-renders (React.memo, useMemo, useCallback when measured)
- Code splitting MUST be used for route-level components

**Rationale**: Simplicity reduces bugs; performance impacts user experience.

## Technical Standards

### Folder Structure

```
src/
├── components/          # Shared/reusable components
│   └── Button/
│       ├── Button.tsx
│       ├── Button.test.tsx
│       └── Button.module.css
├── features/            # Feature modules (domain-driven)
│   └── auth/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── types.ts
├── hooks/               # Shared custom hooks
├── services/            # API clients and external integrations
├── utils/               # Pure utility functions
├── types/               # Shared TypeScript types
├── styles/              # Global styles and theme
├── constants/           # Application constants
└── App.tsx
```

### Naming Conventions

| Item | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `UserProfile.tsx` |
| Hooks | camelCase with `use` prefix | `useAuth.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Constants | SCREAMING_SNAKE_CASE | `API_BASE_URL` |
| Types/Interfaces | PascalCase with `I` prefix optional | `User`, `IUserProps` |
| CSS Modules | camelCase | `styles.container` |
| Test files | `*.test.tsx` or `*.spec.tsx` | `Button.test.tsx` |

### Dependency Management

- Dependencies MUST be pinned to exact versions in `package.json`
- `npm audit` MUST pass with no high/critical vulnerabilities
- New dependencies MUST be justified in PR description
- Prefer well-maintained packages with >1000 weekly downloads
- Bundle size impact MUST be checked before adding (bundlephobia.com)
- Unused dependencies MUST be removed promptly

### What to Prefer / What to Avoid

| Prefer | Avoid |
|--------|-------|
| Functional components | Class components |
| Named exports | Default exports |
| CSS Modules / CSS-in-JS | Global CSS (except reset/theme) |
| Composition | Inheritance |
| Explicit dependencies | Implicit globals |
| Semantic HTML elements | Div soup |
| `const` declarations | `let` (unless reassignment needed) |
| Early returns | Nested conditionals |
| Async/await | Raw promises with `.then()` chains |

## CI/CD & Security

### GitHub Actions Requirements

- All PRs MUST pass: lint, type-check, test, build
- `main` branch MUST be protected; direct pushes prohibited
- Deployments MUST be automated; no manual deployments to production
- Dependabot MUST be enabled for security updates
- Build artifacts MUST NOT contain source maps in production

### Pipeline Gates

```yaml
# Required checks before merge:
- npm run lint          # ESLint + Prettier
- npm run type-check    # tsc --noEmit
- npm run test          # Vitest/Jest with coverage
- npm run build         # Production build succeeds
```

### Environment Variables & Security

- Secrets MUST NEVER be committed to the repository
- Environment variables MUST be prefixed with `VITE_` or `NEXT_PUBLIC_` (framework-dependent)
- `.env.example` MUST document all required variables (without values)
- API keys MUST be stored in CI/CD secrets, not in code
- User input MUST be sanitized before rendering (XSS prevention)
- Dependencies MUST be audited for known vulnerabilities

## Governance

This constitution supersedes all other development practices for this project. All contributors MUST comply.

**Amendment Process**:
1. Propose change via PR to `constitution.md`
2. Justify the change with concrete examples
3. Require approval from at least one maintainer
4. Update version following semantic versioning

**Compliance**:
- Code reviews MUST verify constitution compliance
- Violations MUST be addressed before merge
- Exceptions MUST be documented with rationale

**Version**: 1.0.0 | **Ratified**: 2026-04-20 | **Last Amended**: 2026-04-20
