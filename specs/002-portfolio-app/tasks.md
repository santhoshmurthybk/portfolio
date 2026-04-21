# Tasks: Modern Portfolio Application

**Input**: Design documents from `/specs/002-portfolio-app/`
**Prerequisites**: plan.md ✓, spec.md ✓, research.md ✓, data-model.md ✓, quickstart.md ✓

**Tests**: Required per Constitution III - co-located test files for all hooks and components.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization, Tailwind CSS configuration, and basic structure

- [ ] T001 Install Tailwind CSS dependencies: `npm install --save-dev --save-exact tailwindcss@3.4.3 postcss@8.4.38 autoprefixer@10.4.19`
- [ ] T002 Initialize Tailwind configuration: `npx tailwindcss init -p`
- [ ] T003 Install react-icons for Boxicons: `npm install --save-exact react-icons@5.2.1`
- [ ] T004 Configure Tailwind in tailwind.config.js with dark mode, custom colors, and animations
- [ ] T005 Update global styles with Tailwind directives in src/styles/global.css
- [ ] T006 [P] Create TypeScript type definitions in src/types/portfolio.ts
- [ ] T007 [P] Create profile data file in src/data/profile.json
- [ ] T008 [P] Create skills data file in src/data/skills.json
- [ ] T009 [P] Create experience data file in src/data/experience.json
- [ ] T010 [P] Create education data file in src/data/education.json
- [ ] T011 [P] Create projects data file in src/data/projects.json
- [ ] T012 [P] Create contact data file in src/data/contact.json
- [ ] T013 [P] Create socialLinks data file in src/data/socialLinks.json
- [ ] T014 Create public/assets directory structure for images and resume

**Checkpoint**: Setup complete - foundational work can begin

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core layout components and hooks that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T015 Create useTheme hook with system preference detection in src/hooks/useTheme.ts
- [ ] T016 Create Preloader component in src/components/Preloader/Preloader.tsx
- [ ] T017 [P] Create Preloader barrel export in src/components/Preloader/index.ts
- [ ] T018 Create Header layout component in src/layout/Header/Header.tsx
- [ ] T019 [P] Create Header barrel export in src/layout/Header/index.ts
- [ ] T020 Create Footer layout component in src/layout/Footer/Footer.tsx
- [ ] T021 [P] Create Footer barrel export in src/layout/Footer/index.ts
- [ ] T022 Create scrollTo utility function in src/utils/scrollTo.ts
- [ ] T023 Update App.tsx with single-page layout structure, sections container, and Preloader

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - View Portfolio Homepage (Priority: P1) 🎯 MVP

**Goal**: Display hero section with profile image, name, title, and dynamic typewriter animation

**Independent Test**: Load root URL → verify hero section displays with profile image, name "Santhosh", title "Full Stack Developer", and typewriter phrases cycling

### Implementation for User Story 1

- [ ] T024 [US1] Create useTypewriter hook in src/hooks/useTypewriter.ts
- [ ] T025 [US1] Create TypewriterText component in src/sections/Hero/TypewriterText.tsx
- [ ] T026 [US1] Create Hero section component in src/sections/Hero/Hero.tsx
- [ ] T027 [P] [US1] Create Hero section barrel export in src/sections/Hero/index.ts
- [ ] T028 [US1] Integrate Hero section into App.tsx as first section

**Checkpoint**: User Story 1 complete - homepage displays with hero section and typewriter animation

---

## Phase 4: User Story 2 - View About Section with Tabs (Priority: P1) 🎯 MVP

**Goal**: Display About section with professional summary, CV download, and tabbed content (Skills, Experience, Education)

**Independent Test**: Navigate to About section → verify summary displays, CV download works, all three tabs show correct data with progress bars and timeline

### Implementation for User Story 2

- [ ] T029 [P] [US2] Create ProgressBar component in src/components/ProgressBar/ProgressBar.tsx
- [ ] T030 [P] [US2] Create ProgressBar barrel export in src/components/ProgressBar/index.ts
- [ ] T031 [P] [US2] Create TabGroup component in src/components/TabGroup/TabGroup.tsx
- [ ] T032 [P] [US2] Create TabGroup barrel export in src/components/TabGroup/index.ts
- [ ] T033 [P] [US2] Create Timeline component in src/components/Timeline/Timeline.tsx
- [ ] T034 [P] [US2] Create Timeline barrel export in src/components/Timeline/index.ts
- [ ] T035 [US2] Create SkillsTab component in src/sections/About/SkillsTab.tsx
- [ ] T036 [US2] Create ExperienceTab component in src/sections/About/ExperienceTab.tsx
- [ ] T037 [US2] Create EducationTab component in src/sections/About/EducationTab.tsx
- [ ] T038 [US2] Create About section component in src/sections/About/About.tsx
- [ ] T039 [P] [US2] Create About section barrel export in src/sections/About/index.ts
- [ ] T040 [US2] Integrate About section into App.tsx

**Checkpoint**: User Story 2 complete - About section displays with all tabs functional

---

## Phase 5: User Story 3 - View Portfolio Projects (Priority: P2)

**Goal**: Display Portfolio section with project cards showing images, titles, and GitHub links

**Independent Test**: Navigate to Portfolio section → verify 3 project cards display with images, hover overlays show "View Project", and clicks open GitHub in new tabs

### Implementation for User Story 3

- [ ] T041 [P] [US3] Create Card component in src/components/Card/Card.tsx
- [ ] T042 [P] [US3] Create Card barrel export in src/components/Card/index.ts
- [ ] T043 [US3] Create ProjectCard component in src/sections/Portfolio/ProjectCard.tsx
- [ ] T044 [US3] Create Portfolio section component in src/sections/Portfolio/Portfolio.tsx
- [ ] T045 [P] [US3] Create Portfolio section barrel export in src/sections/Portfolio/index.ts
- [ ] T046 [US3] Integrate Portfolio section into App.tsx

**Checkpoint**: User Story 3 complete - Portfolio section displays all projects with working links

---

## Phase 6: User Story 4 - View Contact Information (Priority: P2)

**Goal**: Display Contact section with contact cards (phone, email, address) and social media links

**Independent Test**: Navigate to Contact section → verify contact cards display correct info, social links open in new tabs

### Implementation for User Story 4

- [ ] T047 [P] [US4] Create SocialLinks component in src/components/SocialLinks/SocialLinks.tsx
- [ ] T048 [P] [US4] Create SocialLinks barrel export in src/components/SocialLinks/index.ts
- [ ] T049 [US4] Create ContactCard component in src/sections/Contact/ContactCard.tsx
- [ ] T050 [US4] Create Contact section component in src/sections/Contact/Contact.tsx
- [ ] T051 [P] [US4] Create Contact section barrel export in src/sections/Contact/index.ts
- [ ] T052 [US4] Integrate Contact section into App.tsx

**Checkpoint**: User Story 4 complete - Contact section displays with social links functional

---

## Phase 7: User Story 5 - Toggle Dark/Light Theme (Priority: P2)

**Goal**: Enable theme switching between dark and light modes with localStorage persistence

**Independent Test**: Click theme toggle → verify all UI elements update colors, refresh page → verify theme persists

### Implementation for User Story 5

- [ ] T053 [US5] Create ThemeToggle component in src/components/ThemeToggle/ThemeToggle.tsx
- [ ] T054 [P] [US5] Create ThemeToggle barrel export in src/components/ThemeToggle/index.ts
- [ ] T055 [US5] Integrate ThemeToggle into Header component in src/layout/Header/Header.tsx
- [ ] T056 [US5] Add theme initialization logic to App.tsx using useTheme hook

**Checkpoint**: User Story 5 complete - theme toggle works with persistence

---

## Phase 8: User Story 6 - Responsive Navigation (Priority: P3)

**Goal**: Implement responsive hamburger menu with smooth scrolling and active section highlighting

**Independent Test**: On mobile viewport → hamburger menu opens/closes, clicking links scrolls smoothly, active section highlighted during scroll

### Implementation for User Story 6

- [ ] T057 [US6] Create useScrollSpy hook in src/hooks/useScrollSpy.ts
- [ ] T058 [US6] Create Navigation component with hamburger menu in src/layout/Header/Navigation.tsx
- [ ] T059 [US6] Update Header to integrate Navigation with scroll spy in src/layout/Header/Header.tsx
- [ ] T060 [US6] Add smooth scroll behavior and section IDs to all sections in App.tsx

**Checkpoint**: User Story 6 complete - responsive navigation fully functional

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements affecting multiple user stories

- [ ] T061 [P] Add accessibility attributes (ARIA labels, roles) to all interactive components
- [ ] T062 [P] Add prefers-reduced-motion support to all animations
- [ ] T063 [P] Optimize images (WebP format, lazy loading) in public/assets/images/
- [ ] T064 [P] Add error boundaries for image loading failures
- [ ] T065 Add skip-to-content link for screen reader users in src/layout/Header/Header.tsx
- [ ] T066 Run Lighthouse audit and fix accessibility issues (target score ≥90)
- [ ] T067 Verify production build size is under 300KB gzipped
- [ ] T068 Run quickstart.md validation to ensure all setup steps work

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1 (Setup) ──────────────────────────┐
                                          ▼
Phase 2 (Foundational) ───────────────────┤
                                          │
    ┌─────────────────────────────────────┼─────────────────────────────────────┐
    │                                     │                                     │
    ▼                                     ▼                                     ▼
Phase 3 (US1: Hero)             Phase 4 (US2: About)              Phase 5 (US3: Portfolio)
    │                                     │                                     │
    │                                     │                                     │
    ▼                                     ▼                                     ▼
Phase 7 (US5: Theme) ←────────────────────┼─────────────────────► Phase 6 (US4: Contact)
    │                                     │                                     │
    └─────────────────────────────────────┼─────────────────────────────────────┘
                                          │
                                          ▼
                              Phase 8 (US6: Navigation)
                                          │
                                          ▼
                              Phase 9 (Polish)
```

### User Story Dependencies

| User Story | Depends On | Can Start After |
|------------|------------|-----------------|
| US1 (Hero) | Phase 2 | Foundational complete |
| US2 (About) | Phase 2 | Foundational complete |
| US3 (Portfolio) | Phase 2 | Foundational complete |
| US4 (Contact) | Phase 2 | Foundational complete |
| US5 (Theme) | Phase 2 + Header | T018 complete |
| US6 (Navigation) | Phase 2 + All sections | All sections integrated |

### Within Each User Story

1. Create reusable components first (marked [P])
2. Create section-specific components
3. Create main section component
4. Integrate into App.tsx

### Parallel Opportunities Per Phase

**Phase 1 (Setup)**:
- T006-T013 can all run in parallel (data files and types)

**Phase 2 (Foundational)**:
- T017, T019, T021 (barrel exports) can run in parallel after their components

**Phase 3-8 (User Stories)**:
- US1, US2, US3, US4 can start in parallel after Phase 2
- Within each story, [P] marked tasks can run in parallel

**Phase 9 (Polish)**:
- T061-T064 can all run in parallel

---

## Parallel Execution Example: Phase 4 (User Story 2)

```bash
# Parallel batch 1: Create all reusable components
T029 [P] ProgressBar component
T031 [P] TabGroup component  
T033 [P] Timeline component

# Parallel batch 2: Create barrel exports
T030 [P] ProgressBar index
T032 [P] TabGroup index
T034 [P] Timeline index

# Sequential: Tab content components (depend on reusable components)
T035 → T036 → T037

# Sequential: Main section and integration
T038 → T039 → T040
```

---

## Implementation Strategy

### MVP Scope (Recommended First Delivery)

**Minimum Viable Portfolio**: Complete Phases 1-4 (Setup + Foundational + US1 + US2)

This delivers:
- ✅ Working portfolio with Hero section
- ✅ About section with all professional information
- ✅ Basic navigation structure
- ✅ Dark mode (default)

**Timeline Estimate**: ~8-12 tasks per session, MVP in 3-4 sessions

### Incremental Delivery Order

1. **MVP**: Phases 1-4 (US1 + US2) - Core portfolio content
2. **+Projects**: Phase 5 (US3) - Portfolio showcase
3. **+Contact**: Phase 6 (US4) - Contact information
4. **+Theme**: Phase 7 (US5) - Theme customization
5. **+Navigation**: Phase 8 (US6) - Enhanced UX
6. **+Polish**: Phase 9 - Production readiness
7. **+Testing**: Phase 10 - Constitution III compliance (≥80% coverage)

---

## Task Summary

| Phase | Description | Task Count | Parallel Tasks |
|-------|-------------|------------|----------------|
| Phase 1 | Setup | 15 | 8 |
| Phase 2 | Foundational | 9 | 3 |
| Phase 3 | US1: Hero | 5 | 1 |
| Phase 4 | US2: About | 12 | 6 |
| Phase 5 | US3: Portfolio | 7 | 2 |
| Phase 6 | US4: Contact | 6 | 2 |
| Phase 7 | US5: Theme | 4 | 1 |
| Phase 8 | US6: Navigation | 4 | 0 |
| Phase 9 | Polish | 10 | 4 |
| Phase 10 | Testing | 18 | 12 |
| **Total** | | **90** | **39** |

---

## Phase 10: Testing (Constitution III Compliance)

**Goal**: Add comprehensive test coverage for all hooks, utilities, and components per Constitution III requirements.

### Hook Tests

| Task ID | Description | Depends On | Parallel |
|---------|-------------|------------|----------|
| T069 | Create `src/hooks/__tests__/useTheme.test.ts` - test initial state, toggle, localStorage persistence, prefers-color-scheme | T019 | [P] |
| T070 | Create `src/hooks/__tests__/useTypewriter.test.ts` - test typing animation, pause, loop, cursor blink | T021 | [P] |
| T071 | Create `src/hooks/__tests__/useScrollSpy.test.ts` - test section detection, threshold, active section updates | T055 | [P] |

### Component Tests (Reusable Components)

| Task ID | Description | Depends On | Parallel |
|---------|-------------|------------|----------|
| T072 | Create `src/components/Button/Button.test.tsx` - test variants, disabled state, click handlers | T015 | [P] |
| T073 | Create `src/components/Card/Card.test.tsx` - test rendering, children, className propagation | T017 | [P] |
| T074 | Create `src/components/ProgressBar/ProgressBar.test.tsx` - test percentage rendering, animation | T029 | [P] |
| T075 | Create `src/components/TabGroup/TabGroup.test.tsx` - test tab switching, active state, content rendering | T031 | [P] |
| T076 | Create `src/components/Timeline/Timeline.test.tsx` - test items rendering, date formatting | T033 | [P] |
| T077 | Create `src/components/SocialLinks/SocialLinks.test.tsx` - test link rendering, new tab behavior | T051 | [P] |
| T078 | Create `src/components/ThemeToggle/ThemeToggle.test.tsx` - test toggle click, icon switch, aria-label | T054 | [P] |
| T079 | Create `src/components/Preloader/Preloader.test.tsx` - test animation rendering, visibility states | T016 | [P] |

### Section Tests

| Task ID | Description | Depends On | Parallel |
|---------|-------------|------------|----------|
| T080 | Create `src/sections/Hero/Hero.test.tsx` - test content rendering, typewriter integration | T028 | [P] |
| T081 | Create `src/sections/About/About.test.tsx` - test tabs, content, resume download fallback | T040 | [P] |
| T082 | Create `src/sections/Portfolio/Portfolio.test.tsx` - test projects rendering, image fallback | T046 | [P] |
| T083 | Create `src/sections/Contact/Contact.test.tsx` - test contact info rendering, social links | T052 | [P] |

### Integration & Coverage

| Task ID | Description | Depends On | Parallel |
|---------|-------------|------------|----------|
| T084 | Create `src/App.test.tsx` - test all sections render, navigation works, theme toggle | T064 | |
| T085 | Add Vitest coverage configuration to `vite.config.ts` - minimum 80% coverage threshold | T001 | |
| T086 | Run `npm run test:coverage` and verify ≥80% line coverage across hooks/components | T069-T084 | |

---

## Additional Tasks (Analysis Remediation)

### Setup - Structural Cleanup

| Task ID | Description | Depends On | Parallel |
|---------|-------------|------------|----------|
| T087 | Remove existing `src/pages/` folder (from 001-react-typescript-base) - replaced by sections pattern | T005 | |

### Edge Case Handling (FR-022, FR-023)

| Task ID | Description | Depends On | Parallel |
|---------|-------------|------------|----------|
| T088 | Add CV download fallback UI to About section - display "CV temporarily unavailable" message with retry link on 404/error | T040 | |
| T089 | Add image fallback handling to Portfolio section - display placeholder image when project images fail to load | T046 | |

### Performance Validation (SC-001)

| Task ID | Description | Depends On | Parallel |
|---------|-------------|------------|----------|
| T090 | Add Lighthouse CI configuration for performance audits - validate <2s load on simulated 3G throttling | T064 | |
