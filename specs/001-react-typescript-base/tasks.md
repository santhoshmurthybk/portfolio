# Tasks: React TypeScript Application Base

**Input**: Design documents from `/specs/001-react-typescript-base/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, quickstart.md

**Tests**: Tests ARE included per FR-006/FR-007 requirements and constitution's Testing Discipline principle.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/` at repository root
- Config files at repository root

---

## Phase 1: Setup (Project Initialization)

**Purpose**: Initialize npm project with all required dependencies

- [X] T001 Create package.json with name, version, scripts, and engines field (Node 18+)
- [X] T002 Install runtime dependencies: react, react-dom, react-router-dom
- [X] T003 Install dev dependencies: typescript, vite, @vitejs/plugin-react, vitest, @testing-library/react, @testing-library/jest-dom, @testing-library/user-event, jsdom, eslint, prettier, @typescript-eslint/eslint-plugin, @typescript-eslint/parser, eslint-plugin-react, eslint-plugin-react-hooks
- [X] T004 Create folder structure per plan.md: src/components/, src/pages/, src/hooks/, src/services/, src/utils/, src/types/, src/styles/, src/constants/, public/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core configuration that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Create tsconfig.json with strict mode, React JSX, path aliases, and modern ES target
- [X] T006 Create src/vite-env.d.ts with ImportMetaEnv interface for VITE_APP_TITLE and VITE_APP_VERSION
- [X] T007 [P] Create src/types/utils.ts with PartialExcept, PropsOf, AsyncReturnType utility types
- [X] T008 [P] Create .env.example with VITE_APP_TITLE=Portfolio and VITE_APP_VERSION=0.1.0
- [X] T009 [P] Create .env with default values copied from .env.example
- [X] T010 [P] Create public/favicon.svg with simple SVG icon

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Developer Starts New Project (Priority: P1) 🎯 MVP

**Goal**: Developer can run `npm install && npm run dev` and see application with HMR working

**Independent Test**: Run `npm run dev`, modify a component, see changes instantly in browser

### Implementation for User Story 1

- [X] T011 [US1] Create vite.config.ts with React plugin, modern browser targets (Chrome 90+, Firefox 90+, Safari 15+, Edge 90+), and build settings
- [X] T012 [US1] Create index.html with root div, meta tags, and script entry pointing to src/main.tsx
- [X] T013 [US1] Create src/main.tsx with React 18 createRoot and StrictMode wrapping App
- [X] T014 [US1] Create src/styles/global.css with CSS reset and base styles
- [X] T015 [US1] Create src/constants/env.ts with APP_CONFIG object using import.meta.env
- [X] T016 [P] [US1] Create src/components/Button/Button.tsx with ButtonProps interface and variant/size props
- [X] T017 [P] [US1] Create src/components/Button/Button.module.css with button, primary, secondary, ghost, small, medium, large classes
- [X] T018 [P] [US1] Create src/components/Button/index.ts exporting Button component and ButtonProps type
- [X] T019 [P] [US1] Create src/pages/Home/Home.tsx with welcome message and Button component demo
- [X] T020 [P] [US1] Create src/pages/Home/index.ts exporting Home as lazy-loaded component
- [X] T021 [P] [US1] Create src/pages/About/About.tsx with application info
- [X] T022 [P] [US1] Create src/pages/About/index.ts exporting About as lazy-loaded component
- [X] T023 [P] [US1] Create src/pages/NotFound/NotFound.tsx with 404 message and link to home
- [X] T024 [P] [US1] Create src/pages/NotFound/index.ts exporting NotFound as lazy-loaded component
- [X] T025 [US1] Create src/App.tsx with React Router v6 BrowserRouter, Routes for /, /about, and * (404)
- [X] T026 [US1] Add npm scripts to package.json: dev, build, preview

**Checkpoint**: User Story 1 complete - `npm run dev` starts application with working routes and HMR

---

## Phase 4: User Story 2 - Developer Runs Quality Checks (Priority: P2)

**Goal**: Developer can run `npm run lint`, `npm run type-check`, `npm run format` successfully

**Independent Test**: Run each command and verify zero errors on source files

### Implementation for User Story 2

- [X] T027 [P] [US2] Create eslint.config.js with flat config: eslint:recommended, react, react-hooks, typescript-eslint (relaxed: errors for critical, warnings for best practices)
- [X] T028 [P] [US2] Create prettier.config.js with singleQuote, trailingComma, semi settings
- [X] T029 [P] [US2] Create .prettierignore with dist/, coverage/, node_modules/
- [X] T030 [US2] Add npm scripts to package.json: lint, lint:fix, type-check, format, format:check
- [X] T031 [US2] Run lint and type-check to verify zero errors on existing source files

**Checkpoint**: User Story 2 complete - all quality commands pass without errors

---

## Phase 5: User Story 3 - Developer Runs Tests (Priority: P2)

**Goal**: Developer can run `npm run test` and see test results with coverage report

**Independent Test**: Run `npm run test:coverage` and verify Button component has 100% coverage

### Implementation for User Story 3

- [X] T032 [US3] Create vitest.config.ts with jsdom environment, CSS modules handling, coverage settings, and setupFiles
- [X] T033 [US3] Create src/test/setup.ts with @testing-library/jest-dom import
- [X] T034 [US3] Create src/components/Button/Button.test.tsx with tests for: renders children, handles click, applies variant classes, applies size classes, disabled state
- [X] T035 [US3] Add npm scripts to package.json: test, test:run, test:coverage
- [X] T036 [US3] Run test:coverage to verify Button component achieves 100% coverage

**Checkpoint**: User Story 3 complete - test suite runs with passing tests and coverage reports

---

## Phase 6: User Story 4 - Developer Builds for Production (Priority: P3)

**Goal**: Developer can run `npm run build` and get optimized production bundle under 200KB

**Independent Test**: Run `npm run build`, verify dist/ contains minified JS without source maps, check bundle size

### Implementation for User Story 4

- [X] T037 [US4] Update vite.config.ts build section to disable source maps, configure chunk splitting for vendor/react
- [X] T038 [US4] Add .gitignore with node_modules/, dist/, coverage/, .env (keep .env.example)
- [X] T039 [US4] Run npm run build and verify: dist/ created, no source maps, bundle < 200KB gzipped
- [X] T040 [US4] Run npm run preview and verify production build serves correctly

**Checkpoint**: User Story 4 complete - production build succeeds with optimized output

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Documentation, final verification, and cleanup

- [X] T041 [P] Create README.md with project description, prerequisites, quickstart, available scripts, and folder structure
- [X] T042 [P] Update package.json: set correct version (0.1.0), add description, repository, keywords, license
- [X] T043 Verify all success criteria: SC-001 (install < 3min), SC-002 (build < 60s), SC-003 (test < 10s), SC-004 (type-check pass), SC-005 (lint pass), SC-006 (Button 100% coverage), SC-007 (bundle < 200KB), FR-012 (engines field in package.json)

---

## Dependencies

```
Phase 1 (Setup)
    │
    ▼
Phase 2 (Foundational)
    │
    ├──────────────────┬──────────────────┐
    ▼                  ▼                  ▼
Phase 3 (US1)    Phase 4 (US2)    (blocked until US1)
Dev Environment  Quality Checks
    │                  │
    ├──────────────────┤
    ▼                  ▼
Phase 5 (US3)    Phase 6 (US4)
Testing          Production Build
    │                  │
    └──────────────────┘
              │
              ▼
        Phase 7 (Polish)
```

## Parallel Execution Opportunities

| Phase | Parallel Tasks | Notes |
|-------|---------------|-------|
| Phase 2 | T007, T008, T009, T010 | Independent config files |
| Phase 3 | T016-T024 | Components/pages in isolation |
| Phase 4 | T027, T028, T029 | Lint/format configs independent |
| Phase 7 | T041, T042 | Documentation files |

## Implementation Strategy

**MVP Scope**: Phase 1 + Phase 2 + Phase 3 (User Story 1)
- Running `npm run dev` with HMR is the minimum viable product
- Quality checks and testing can be added incrementally

**Incremental Delivery**:
1. MVP: Dev environment works (T001-T026)
2. +Quality: Lint/format/type-check (T027-T031)
3. +Testing: Vitest with sample tests (T032-T036)
4. +Production: Optimized build (T037-T040)
5. +Polish: Documentation (T041-T043)

---

## Task Summary

| Phase | Task Count | Parallel | User Story |
|-------|-----------|----------|------------|
| Phase 1: Setup | 4 | 0 | - |
| Phase 2: Foundational | 6 | 4 | - |
| Phase 3: US1 Dev Environment | 16 | 10 | P1 |
| Phase 4: US2 Quality Checks | 5 | 3 | P2 |
| Phase 5: US3 Testing | 5 | 0 | P2 |
| Phase 6: US4 Production Build | 4 | 0 | P3 |
| Phase 7: Polish | 3 | 2 | - |
| **Total** | **43** | **19** | - |
