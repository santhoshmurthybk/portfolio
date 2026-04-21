import { type ReactNode } from 'react';

interface CardProps {
  /** Card content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show hover effect */
  hover?: boolean;
}

/**
 * Card component with elevation shadow
 */
export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-lg overflow-hidden
        shadow-card dark:shadow-card-dark
        ${hover ? 'hover:shadow-card-hover dark:hover:shadow-card-hover-dark transition-shadow duration-200' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
