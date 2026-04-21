import { BiSun, BiMoon } from 'react-icons/bi';
import { useTheme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * ThemeToggle component for switching between dark and light modes
 */
export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`
        p-2 rounded-lg
        text-gray-600 dark:text-gray-400
        hover:bg-gray-100 dark:hover:bg-gray-800
        hover:text-primary-600 dark:hover:text-primary-400
        transition-colors duration-100
        ${className}
      `}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <BiSun className="w-5 h-5" aria-hidden="true" />
      ) : (
        <BiMoon className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  );
}
