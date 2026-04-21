# Data Model: React TypeScript Application Base

**Feature**: 001-react-typescript-base  
**Date**: 2026-04-20

## Overview

This is a project setup feature with no domain entities. This document defines nfiguration schemas used in the base application.
the TypeScript types and co
---

## Configuration Types

### Environment Variables

```typescript
// src/types/env.d.ts
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

### Application Constants

```typescript
// src/constants/env.ts
export const APP_CONFIG = {
  title: import.meta.env.VITE_APP_TITLE,
  version: import.meta.env.VITE_APP_VERSION,
} as const;

export type AppConfig = typeof APP_CONFIG;
```

---

## Component Types

### Button Component Props

```typescript
// src/components/Button/Button.types.ts
export interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Disabled state */
  disabled?: boolean;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** Additional CSS classes */
  className?: string;
}
```

### Page Component Props

```typescript
// src/types/page.ts
export interface PageProps {
  /** Page title for document.title */
  title?: string;
  /** Page content */
  children?: React.ReactNode;
}
```

---

## Route Types

### Route Configuration

```typescript
// src/types/routes.ts
import { RouteObject } from 'react-router-dom';

export interface AppRoute extends RouteObject {
  /** Route metadata */
  meta?: {
    title: string;
    description?: string;
  };
}

export type AppRoutes = AppRoute[];
```

---

## Utility Types

### Common Patterns

```typescript
// src/types/utils.ts

/** Make all properties of T optional except for K */
export type PartialExcept<T, K extends keyof T> = Partial<Omit<T, K>> & Pick<T, K>;

/** Extract props type from a component */
export type PropsOf<T> = T extends React.ComponentType<infer P> ? P : never;

/** Async function return type */
export type AsyncReturnType<T extends (...args: unknown[]) => Promise<unknown>> =
  T extends (...args: unknown[]) => Promise<infer R> ? R : never;
```

---

## CSS Module Types

CSS Modules generate type declarations automatically. Example pattern:

```typescript
// src/components/Button/Button.module.css.d.ts (auto-generated)
declare const styles: {
  readonly button: string;
  readonly primary: string;
  readonly secondary: string;
  readonly ghost: string;
  readonly small: string;
  readonly medium: string;
  readonly large: string;
  readonly disabled: string;
};
export default styles;
```

---

## State Shape

No global state in base setup. Future features should follow these patterns:

### Local State (Component)
```typescript
const [isOpen, setIsOpen] = useState(false);
```

### URL State (Router)
```typescript
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get('q') ?? '';
```

### Server State (Future - TanStack Query)
```typescript
const { data, isLoading, error } = useQuery({
  queryKey: ['resource', id],
  queryFn: () => fetchResource(id),
});
```

---

## Summary

| Category | Type Count | Notes |
|----------|------------|-------|
| Environment | 2 | ImportMetaEnv, AppConfig |
| Components | 2 | ButtonProps, PageProps |
| Routes | 2 | AppRoute, AppRoutes |
| Utilities | 3 | PartialExcept, PropsOf, AsyncReturnType |

All types align with constitution's TypeScript strictness requirements (no `any`, explicit interfaces).
