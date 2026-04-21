import type { ComponentType } from 'react';

/**
 * Utility types for improved TypeScript ergonomics
 */

/**
 * Make all properties of T required except for the specified keys K
 * Useful when extending interfaces where only certain properties should be optional
 *
 * @example
 * type User = { id: string; name: string; email: string };
 * type CreateUser = PartialExcept<User, 'name' | 'email'>;
 * // Result: { id?: string; name: string; email: string }
 */
export type PartialExcept<T, K extends keyof T> = Partial<Omit<T, K>> &
  Pick<T, K>;

/**
 * Extract the props type from a React component
 * Works with function components and class components
 *
 * @example
 * const Button: React.FC<{ onClick: () => void; label: string }> = ...
 * type ButtonProps = PropsOf<typeof Button>;
 * // Result: { onClick: () => void; label: string }
 */
export type PropsOf<T> = T extends ComponentType<infer P> ? P : never;

/**
 * Extract the return type of an async function
 * Useful for deriving types from API calls or async operations
 *
 * @example
 * async function fetchUser(): Promise<{ id: string; name: string }> { ... }
 * type User = AsyncReturnType<typeof fetchUser>;
 * // Result: { id: string; name: string }
 */
export type AsyncReturnType<T extends (...args: unknown[]) => Promise<unknown>> =
  T extends (...args: unknown[]) => Promise<infer R> ? R : never;
